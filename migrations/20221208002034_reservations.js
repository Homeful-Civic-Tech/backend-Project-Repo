/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('reservations', (table) => {
    table.increments('reservations_id').primary();
    table.text('firstname').notNullable();
    table.text('lastname').notNullable();
    table.text('gender').notNullable()
    table.text('email').notNullable();
    table.text('message')
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
