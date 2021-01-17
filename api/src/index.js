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

/**  get all records from table stappen
 * @params 
 * @returns all records from table stappen
 */
app.get('/stappen', async (req, res) => {
  const result = await pg
    .select(['uuid', 'stappen', 'antwoord','category' , 'created_at','updated_at'])
    .from('stappen');
  res.json({
    res: result,
  });
});

/**  post a predefined record to table stappen
 * @params 
 * @returns all records from table stappen
 */
app.post('/stap', async (req, res) => {
  const uuid = Helpers.generateUUID();
  const result = await pg

    .insert([
      //{ uuid, stappen: `3000`, antwoord: 'je moet nog 2000 stappen afleggen vandaag', category: `small` },
      //{ uuid, stappen: `4000`, antwoord: 'je moet nog 1000 stappen afleggen vandaag', category: `small` },
      //{ uuid, stappen: `5000`, antwoord: 'Genoeg voor vandaag', category: `small` },
      //{ uuid, stappen: `4000`, antwoord: 'je moet nog 3000 stappen afleggen vandaag', category: `normaal` },
      //{ uuid, stappen: `5000`, antwoord: 'je moet nog 2000 stappen afleggen vandaag', category: `normaal` },
      //{ uuid, stappen: `7000`, antwoord: 'Genoeg voor vandaag', category: `normaal` },
      //{ uuid, stappen: `4000`, antwoord: 'je moet nog 4000 stappen afleggen vandaag', category: `overgewicht` },
      { uuid, stappen: `8000`, antwoord: 'Genoeg voor vandaag', category: `overgewicht` },

    ])
      
      
    .table('stappen')
    .returning('*')
    .then((res) => {
      return res;
    });
  console.log('add 1 stap entry');
  console.log(result);
  res.send(result);
});

/**  delete a specific record from table stappen
 * @params uuid
 * @returns all records from table stappen
 */
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

/**  get specific record from table stappen
 * @params uuid
 * @returns specific record
 */
app.get('/stap/:uuid', async (req, res) => {
  const result = await pg
    .select(['uuid', 'stappen', 'antwoord', 'category', 'created_at','updated_at'])
    .from('stappen')
    .where({ uuid: req.params.uuid });
  res.json({
    res: result,
  });
});

/**  update predefined antwoord in table stappen by uuid
 * @params uuid
 * @returns sends status 200 or 404 on error
 */
app.put('/stap/:uuid', async (req, res) => {
  const result = await pg
  .table('stappen')
  .where({ uuid: req.params.uuid})
    .update({ antwoord: 'Genoeg gestapt voor vandaag', category:'small' })
    .returning('*')
    .then(function (result) {
      console.log(result);
      res.json(result);
      res.status(200).send();
    })
    .catch((e) => {
      console.log(e);
      res.status(404).send();
    });
});


/**  post records to table category
 * @params 
 * @returns all records from table category
 */
app.post('/category', async (req, res) => {
  const uuid = Helpers.generateUUID();
  const result = await pg

    .insert([
      //{ uuid, category:"small"},
      //{ uuid, category:"normaal"},
      { uuid, category:"overgewicht"},
    ])
    .table('categories')
    .returning('*')
    .then((res) => {
      return res;
    });
  console.log('add all category entry');
  console.log(result);
  res.send(result);
});

/**  get all records from table category
 * @params 
 * @returns all records from table category
 */
app.get('/category', async (req, res) => {
  const result = await pg
    .select(['uuid', 'category', 'created_at','updated_at'])
    .from('categories');
  res.json({
    res: result,
  });
});


/**  delete specific category by the category from categories table
 * @params category
 * @returns deletes the category from both tables categories and stappen
 */

app.delete('/category/:category', async (req, res) => {
  const result = await pg
    .table('categories')
    .where('category', req.params.category)
    .del(['id', 'uuid', 'category'])
    .then((res) => {
      return res; 
    })

  console.log('deleted cat.');
  console.log(result);
  res.send(result);

  await pg
  .table('stappen')
  .where('category', req.params.category)
  .del(['id', 'uuid', 'stappen', 'antwoord','category', 'created_at','updated_at'])
  .then((res) => {
    return res; 
  })

console.log('deleted record.');
console.log(result);
res.send(result);
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
  await pg.schema.hasTable('categories').then(async (exists) => {
    if (!exists) {
      await pg.schema
        .createTable('categories', (table) => {
          table.increments().primary();
          table.uuid('uuid');
          table.string('category');
          table.timestamps(true, true);
        })
        .then(async () => {
          console.log('created table categories');
          
        });

    }
  });
}
initialiseTables()

module.exports = app