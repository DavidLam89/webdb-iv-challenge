const knexConfig = require('../knexfile');
const knex = require('knex');

const db = knex(knexConfig.development);

module.exports = {
  getRecipes,
  addRecipe,
};

function getRecipes() {
  return db('recipes');
}

function addRecipe(recipe) {
  return db('recipes')
    .insert(recipe);
}
