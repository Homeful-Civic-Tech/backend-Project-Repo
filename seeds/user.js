/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('users').del()
  
    await knex('users').insert([
        {firstname:"anaya",lastname:"lambright",username:"anaya",email:"anaya",sex:"female",password:"123"},
        {firstname:"anaya",lastname:"lambright",username:"anaya",email:"anaya",sex:"female",password:"123"},
        {firstname:"anaya",lastname:"lambright",username:"anaya",email:"anaya",sex:"female",password:"123"},
        {firstname:"anaya",lastname:"lambright",username:"anaya",email:"anaya",sex:"female",password:"123"},
        {firstname:"anaya",lastname:"lambright",username:"anaya",email:"anaya",sex:"female",password:"123"},
        {firstname:"anaya",lastname:"lambright",username:"anaya",email:"anaya",sex:"female",password:"123"},
        {firstname:"anaya",lastname:"lambright",username:"anaya",email:"anaya",sex:"female",password:"123"},
        {firstname:"anaya",lastname:"lambright",username:"anaya",email:"anaya",sex:"female",password:"123"},
    ]
      
  
  );
  };
  