/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('reservations', (table) => {
    table.increments('reservations_id').primary();
    table.text('username').notNullable()
    table.text('message').notNullable()
    table.text('gender').notNullable()
    table.integer('quantity_of_people').notNullable()
    table.text('firstname').notNullable();
    table.text('lastname').notNullable();
    table.text('email').notNullable();
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
