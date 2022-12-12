
exports.up = function(knex) {
    return knex.schema.createTable('review', (table) => {
        table.increments('review_id').primary();
        table.integer('user_id').notNullable();
        table.string('comments').notNullable();
        table.integer('rating').notNullable();
        table.integer('shelter_id').notNullable()
        table.foreign('shelter_id').references('id').inTable('shelters');
    })
 
};
 
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('review')
};
 
