const { onUpdateTrigger } = require('../knexfile');
const tableName = 'tracks';

exports.up = function (knex) {
  return knex.schema.hasTable(tableName).then((exists) => {
    if (!exists) {
      return knex.schema
        .createTable(tableName, (table) => {
          table.string('isrc').primary();
          table.string('title').notNullable();
          table.string('image_url');
          table.string('artist_id').references('id').inTable('artists');

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
