const router = require('express').Router();
const Dishes = require('./dishes-model');

router.post('/', (req, res) => {
    Dishes.addDish(req.body)
        .then(ids => {
            res.status(201).json(ids[0]);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.get('/', (req, res) => {
    Dishes.getDishes()
        .then(dishes => {
            res.status(200).json(dishes);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});


router.get('/:id', (req, res) => {
    Dishes.getDish(req.params.id)
        .then(dish => {
            dish ? res.status(200).json(dish) : res.status(404).json({ message: 'ID not found' });
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

module.exports = router;