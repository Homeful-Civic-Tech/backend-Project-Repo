/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('addshelters', (table) => {
        table.increments('id').primary()
        table.string('shelter_name').notNullable()
        table.string('location').notNullable()
        table.string('type_of').defaultTo('shelter')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('addshelters')
};

