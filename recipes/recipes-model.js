const knexConfig = require('../knexfile');
const knex = require('knex');

const db = knex(knexConfig.development);

module.exports = {
  getRecipes,
  addRecipe,
  getShoppingList
};

function getRecipes() {
  return db('recipes');
}

function addRecipe(recipe) {
  return db('recipes')
    .insert(recipe);
}

function getShoppingList(id) {
  return db('recipes')
    .join('recipes_ingredients', 'recipes.id', 'recipes_ingredients.recipe_id')
    .join('dishes', 'dishes.id', 'recipes.dish_id')
    .join('ingredients', 'ingredients.id', 'recipes_ingredients.ingredient_id')
    .select('dishes.name as dish_name', 'recipes.name as recipe_name', 'ingredients.name as ingredient_name', 'recipes_ingredients.quantity')
    .where('recipes.id', id)
    .reduce((accumulator, currentObj) => {
      return {
        ...accumulator,
        dish_name: currentObj.dish_name,
        recipe_name: currentObj.recipe_name,
        [currentObj.ingredient_name]: currentObj.quantity
      }
    },{})
    ;
}