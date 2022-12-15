/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('users', (table)=> {
      table.increments('id').primary();
      table.string('firstname').notNullable;
      table.string('lastname').notNullable;
      table.string('username').notNull().unique();
      table.string('email').notNull().unique();
      table.string('sex').notNullable;
      table.string('password').notNullable
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};