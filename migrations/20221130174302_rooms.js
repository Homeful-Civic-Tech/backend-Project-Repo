/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('rooms', (table)=> {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.text('bio').notNullable();
        table.string('location').notNullable();
        table.string('phone_num').notNullable()
        table.string('url').notNullable();
        table.string('type_of').notNullable();
        table.integer('quantity').notNullable();
        table.string('category').notNullable()
        table.integer('userid').notNullable();
        table.foreign('userid').references('id').inTable('users');
        table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('rooms');
  };


