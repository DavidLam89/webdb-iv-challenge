const router = require('express').Router();
const Recipes = require('./recipes-model');

router.post('/', (req, res) => {
    Recipes.addRecipe(req.body)
        .then(ids => {
            res.status(201).json(ids[0]);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

module.exports = router;