
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    { name: 'dish1-1', dish_id: 1 }, 
    { name: 'dish1-2', dish_id: 1 },
    { name: 'dish1-3', dish_id: 1 }, 
    { name: 'dish2-1', dish_id: 2 },
    { name: 'dish2-2', dish_id: 2 },
    { name: 'dish2-3', dish_id: 2 },
    { name: 'dish3-1', dish_id: 3 },
    { name: 'dish3-2', dish_id: 3 },
    { name: 'dish3-3', dish_id: 3 },
    { name: 'dish4-1', dish_id: 4 },
    { name: 'dish4-2', dish_id: 4 },
    { name: 'dish4-3', dish_id: 4 },
  ]);
};
