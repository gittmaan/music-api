const { onUpdateTrigger } = require('../knexfile');
const tableName = 'artists';

exports.up = function (knex) {
  return knex.schema.hasTable(tableName).then((exists) => {
    if (!exists) {
      return knex.schema
        .createTable(tableName, (table) => {
          table.string('id').primary();
          table.string('name').notNullable();
          table.string('type');
          table.string('href');
          table.string('uri');
          table.string('popularity');

          table.boolean('done').notNullable().defaultTo(false);
          table.timestamps(false, true);
        })
        .then(() => knex.raw(onUpdateTrigger(tableName)))
        .then(() => console.log(`Created ${tableName} table`))
        .catch((e) => console.error(`Error creating ${tableName} table`, e));
    }
  });
};

exports.down = function (knex) {
  return knex.schema.hasTable(tableName).then((exists) => {
    if (exists) {
      return knex.schema
        .dropTable(tableName)
        .then(() => console.log(`Dropped ${tableName} table`))
        .catch((e) => console.error(`Error dropping ${tableName} table`, e));
    }
  });
};
