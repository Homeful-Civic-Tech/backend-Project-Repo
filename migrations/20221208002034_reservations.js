/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('reservations', (table) => {
    table.increments('id').primary();
    table.string('firstname').notNullable();
    table.string('lastname').notNullable();
    table.string('gender').notNullable()
    table.string('email').notNullable();
    table.string('message')
    table.integer('user_id').references('id').inTable('users');
    table.integer('shelter_id').references('id').inTable('shelters');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('reservations')
};
