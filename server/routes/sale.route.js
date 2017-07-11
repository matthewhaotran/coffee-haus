const router = require('express').Router();
const db = require('../models');

router.get('/', function (req, res) {
  db.Sale.findAll().then(function (sales) {
    res.json(sales);
  })
});

router.get('/:id/', function (req, res) {
  db.Sale.findById(req.params.id).then(function (sale) {
    if (sale === null) {
      res.sendStatus(404);
    } else {
      res.json(sale);
    }
  });
});

router.post('/', function (req, res) {
  const sale = db.Sale.build(req.body);

  sale.save().then(function (newSale) {
    res.send(newSale);
  });
});

router.put('/:id', function (req, res) {
  db.Sale.findById(req.params.id).then(function (sale) {
    sale.update(req.body).then(function () {
      res.sendStatus(204);
    });
  });
});

router.delete('/:id', function (req, res) {
  db.Sale.findById(req.params.id).then(function (sale) {
    if (sale === null) {
      res.sendStatus(404);
    } else {
    sale.destroy().then(function () {
      res.sendStatus(200);
    });
    }
  });
});




module.exports = router;
