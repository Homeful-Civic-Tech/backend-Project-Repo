/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('rooms', (table)=> {
        table.increments('id').primary();
        table.string('name').notNullable;
        table.string('bio').notNullable;
        table.string('location').notNullable;
        table.string('url').notNullable;
        table.string('typeofs').notNullable;
        table.integer('quantity').notNullable;
        table.integer('userid').notNullable;
        table.foreign('userid').references('id').inTable('users');
      })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('rooms');
  };


