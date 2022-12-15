/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('listing', (table)=> {
        table.increments('id').primary();
        table.integer('shelters_id')
        table.foreign('shelters_id').references('id').inTable('shelters')
        table.integer('rooms_id')
        table.foreign('rooms_id').references('id').inTable('rooms')
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('listing');
};
