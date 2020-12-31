
const func = {
  initialiseTables: async function (db) {
    await db.schema.hasTable('stappen').then(async (exists) => {
      if (!exists) {
        await db.schema
          .createTable('records', (table) => {
            table.increments().primary();
            table.string('uuid');
            table.string('stappen');
            table.string('antwoord');
            table.string('gewicht');
            table.timestamps(true, true);
          })
          .then(async () => {
            console.log('created table stappen');
          })
          .catch((e) => {
            // console.error(e)
          })
      }

    })

    await db.schema.hasTable('recordsCategory').then(async (exists) => {
      if (!exists) {
        await db.schema
          .createTable('recordsCategory', (table) => {
            table.increments().primary();
            table.uuid('uuid');
            table.string('mager');
            table.string('normaal');
            table.string('zwaar');
            table.string('overweight');
            table.timestamps(true, true);
          })
          .then(async () => {
            console.log('created table recordsCategory');
          })
          .catch((e) => {
            // console.error(e)
          })
      }
      // db.schema.raw("ALTER SEQUENCE seq RESTART WITH (SELECT (max(id) + 1) FROM users);")
    })
  }
}

module.exports = func