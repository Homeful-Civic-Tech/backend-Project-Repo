/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('shelters', (table) => {
        table.increments('id').primary()
        table.string('shelter_name').notNullable()
        table.string('location').notNullable()
        table.string('phone_num').notNullable()
        table.specificType('url', 'text ARRAY').notNullable()
        table.string('category').notNullable()
        table.string('hours').notNullable()
        table.integer('quanity').defaultTo('10')
        table.string('type_of').defaultTo('shelter')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('shelters')
};

