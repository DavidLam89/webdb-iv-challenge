
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { name: 'ingredient 1' },
    { name: 'ingredient 2' },
    { name: 'ingredient 3' },
    { name: 'ingredient 4' },
  ]);
};
