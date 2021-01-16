const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const md5 = require('md5');
const jwtToken = require('jsontokens');
const Helpers = require('./utils/helpers.js');


const pg = require('knex')({
  client: 'pg',
  version: '9.6',
  searchPath: ['knex', 'public'],
  connection: process.env.PG_CONNECTION_STRING ? process.env.PG_CONNECTION_STRING : 'postgres://example:example@localhost:5432/test'
});


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/', (req, res) => {
  res.send('Deployed!')
})

app.get('/stappen', async (req, res) => {
  const result = await pg
    .select(['uuid', 'stappen', 'antwoord','category' , 'created_at','updated_at'])
    .from('stappen');
  res.json({
    res: result,
  });
});

app.post('/stap', async (req, res) => {
  const uuid = Helpers.generateUUID();
  const result = await pg

    .insert({ uuid, stappen: `4000`, antwoord: 'je moet nog 1000 stappen afleggen vandaag', category: `small` },)
    .table('stappen')
    .returning('*')
    .then((res) => {
      return res;
    });
  console.log('add 1 stap entry');
  console.log(result);
  res.send(result);
});

//DELETE Specific record
app.delete('/stappen/:uuid', async (req, res) => {
  const result = await pg
    .table('stappen')
    .where({ uuid: req.params.uuid})
    .del(['id','uuid', 'stappen', 'antwoord', 'category', 'created_at','updated_at'])
    .then((res) => {
      return res;
    });
  console.log(result);
  res.send(result);
});

// Get specific record
app.get('/stap/:uuid', async (req, res) => {
  const result = await pg
    .select(['uuid', 'stappen', 'antwoord', 'category', 'created_at','updated_at'])
    .from('stappen')
    .where({ uuid: req.params.uuid });
  res.json({
    res: result,
  });
});


app.get('/join', async (req, res) => {
  await DatabaseHelper
    .table('items')
    .join('lists', DatabaseHelper.raw('item.list_id::varchar'), DatabaseHelper.raw('lists.uuid::varchar'))
    .select('lists.*', 'items.*')
    .then((data) => {
      res.send(data)
    })

})

/**
* [description]
* @params:
* @returns: 
*/

if (process.env.NODE_ENV !== 'test') {
  app.listen(process.env.PORT || 3001, () => console.log(`Listening on port ${process.env.PORT || 3001}`));
}



async function initialiseTables() {
  await pg.schema.hasTable('stappen').then(async (exists) => {
    if (!exists) {
      await pg.schema
        .createTable('stappen', (table) => {
          table.increments();
          table.uuid('uuid');
          table.string('stappen');
          table.string('antwoord');
          table.string('category');
          table.timestamps(true, true);
        })
        .then(async () => {
          console.log('created table stappen');
         
        });

    }
  });
  await pg.schema.hasTable('gewichtCategory').then(async (exists) => {
    if (!exists) {
      await pg.schema
        .createTable('gewichtCategory', (table) => {
          table.increments().primary();
          table.uuid('uuid');
          table.string('small');
          table.string('normaal');
          table.string('overgewicht');
          table.timestamps(true, true);
        })
        .then(async () => {
          console.log('created table gewichtCategory');
          
        });

    }
  });
}
initialiseTables()

module.exports = app