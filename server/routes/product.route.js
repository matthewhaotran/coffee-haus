const router = require('express').Router();
const db = require('../models');

router.get('/', function (req, res) {
  db.Product.findAll().then(function (products) {
    res.json(products);
  })
});

router.get('/:id/', function (req, res) {
  db.Product.findById(req.params.id).then(function (product) {
    if (product === null) {
      res.sendStatus(404);
    } else {
      res.json(product);
    }
  });
});

router.post('/', function (req, res) {
  const product = db.Product.build(req.body);

  product.save().then(function (newProduct) {
    res.status(201).json(newProduct);
  });
});

router.put('/:id', function (req, res) {
  db.Product.findById(req.params.id).then(function (product) {
    product.update(req.body).then(function () {
      res.sendStatus(204);
    });
  });
});

router.delete('/:id', function (req, res) {
  db.Product.findById(req.params.id).then(function (product) {
    if (product === null) {
      res.sendStatus(404);
    } else {
    product.destroy().then(function () {
      res.sendStatus(200);
    });
    }
  });
});




module.exports = router;
