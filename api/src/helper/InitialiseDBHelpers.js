/*
const func = {
  initialiseTables: async function (db) {
    await db.schema.hasTable('numbers').then(async (exists) => {
      if (!exists) {
        await db.schema
          .createTable('numbers', (table) => {
            table.increments().primary();
            table.string('uuid');
            table.string('number');
            table.string('answer');
            table.string('category')
            table.timestamps(true, true);
          })
          .then(async () => {
            console.log('created table numbers');
          })
          .catch((e) => {
            // console.error(e)
          })
      }
    })
    await db.schema.hasTable('numbersCategory').then(async (exists) => {
      if (!exists) {
        await db.schema
          .createTable('numbersCategory', (table) => {
            table.increments().primary();
            table.uuid('uuid');
            table.string('math');
            table.string('trivia');
            table.string('date');
            table.timestamps(true, true);
          })
          .then(async () => {
            console.log('created table numbersCategory');
          })
          .catch((e) => {
            // console.error(e)
          })
      }
    })
  }
}
module.exports = func
*/