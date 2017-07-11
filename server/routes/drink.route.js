const router = require('express').Router();
const db = require('../models');

router.get('/', function (req, res) {
  db.Drink.findAll().then(function (drinks) {
    res.json(drinks);
  })
});

router.get('/:id/', function (req, res) {
  db.Drink.findById(req.params.id).then(function (drink) {
    if (drink === null) {
      res.sendStatus(404);
    } else {
      res.json(drink);
    }
  });
});

router.post('/', function (req, res) {
  const drink = db.Drink.build(req.body);

  drink.save().then(function (newDrink) {
    res.send(newDrink);
  });
});

router.put('/:id', function (req, res) {
  db.Drink.findById(req.params.id).then(function (drink) {
    drink.update(req.body).then(function () {
      res.sendStatus(204);
    });
  });
});

router.delete('/:id', function (req, res) {
  db.Drink.findById(req.params.id).then(function (drink) {
    if (drink === null) {
      res.sendStatus(404);
    } else {
    drink.destroy().then(function () {
      res.sendStatus(200);
    });
    }
  });
});




module.exports = router;
