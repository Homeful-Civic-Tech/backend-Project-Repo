/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('users', (table)=> {
      //primary key that will be the foreign key engineer profile so show every post they made it will, connect to the post table.
      table.increments('id').primary();
      table.string('firstname').notNullable;
      table.string('lastname').notNullable;
      table.string('username').notNullable;
      table.string('email').notNullable;
      table.string('sex').notNullable;
      table.string('password').notNullable;
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};