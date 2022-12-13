/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('review').del()
  await knex('review').insert([
    {user_id:1, comments:"I love this shelter it was very clean", rating: 1,shelter_id: 3},
    {user_id:2, comments:"Not bad, very quiet but not the best", rating: 3, shelter_id: 1 },
    {user_id:3, comments:"had many bed bugs", rating: 1, shelter_id: 2}
  ]);
};
