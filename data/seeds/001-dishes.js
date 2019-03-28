
exports.seed = function(knex, Promise) {
  return knex('dishes').insert([
    { name: 'dish 1' },
    { name: 'dish 2' },
    { name: 'dish 3' },
    { name: 'dish 4' },
  ]);
};
