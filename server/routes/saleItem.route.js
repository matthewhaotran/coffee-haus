const router = require('express').Router();
const db = require('../models');

router.get('/', function (req, res) {
  db.SaleItem.findAll().then(function (saleItem) {
    res.json(saleItem);
  })
});

router.get('/:id/', function (req, res) {
  db.SaleItem.findById(req.params.id).then(function (saleItem) {
    if (saleItem === null) {
      res.sendStatus(404);
    } else {
      res.json(saleItem);
    }
  });
});

router.post('/', function (req, res) {
  const saleItem = db.SaleItem.build(req.body);

  saleItem.save().then(function (newSaleItem) {
    res.send(newSaleItem);
  });
});

router.put('/:id', function (req, res) {
  db.SaleItem.findById(req.params.id).then(function (saleItem) {
    saleItem.update(req.body).then(function () {
      res.sendStatus(204);
    });
  });
});

router.delete('/:id', function (req, res) {
  db.SaleItem.findById(req.params.id).then(function (saleItem) {
    if (saleItem === null) {
      res.sendStatus(404);
    } else {
    saleItem.destroy().then(function () {
      res.sendStatus(200);
    });
    }
  });
});




module.exports = router;
