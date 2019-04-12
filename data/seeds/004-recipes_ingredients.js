
exports.seed = function(knex, Promise) {
  return knex('recipes_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1, quantity: 2},
    { recipe_id: 1, ingredient_id: 2, quantity: 4},
    { recipe_id: 4, ingredient_id: 2, quantity: 7},
    { recipe_id: 4, ingredient_id: 3, quantity: 2},
    { recipe_id: 4, ingredient_id: 4, quantity: 2},
    { recipe_id: 7, ingredient_id: 1, quantity: 1},
    { recipe_id: 7, ingredient_id: 2, quantity: 6},
    { recipe_id: 10, ingredient_id: 1, quantity: 3},
    { recipe_id: 10, ingredient_id: 4, quantity: 8},
  ]);
};
