const router = require('express').Router();
const db = require('../models');

router.get('/', function (req, res) {
  db.Customer.findAll().then(function (customers) {
    res.json(customers);
  })
});

router.get('/:id/', function (req, res) {
  db.Customer.findById(req.params.id).then(function (customer) {
    if (customer === null) {
      res.sendStatus(404);
    } else {
      res.json(customer);
    }
  });
});

router.post('/', function (req, res) {
  const customer = db.Customer.build(req.body);

  customer.save().then(function (newCustomer) {
    res.status(201).json(newCustomer);
  });
});

router.put('/:id', function (req, res) {
  db.Customer.findById(req.params.id).then(function (customer) {
    customer.update(req.body).then(function () {
      res.sendStatus(204);
    });
  });
});

router.delete('/:id', function (req, res) {
  db.Customer.findById(req.params.id).then(function (customer) {
    if (customer === null) {
      res.sendStatus(404);
    } else {
    customer.destroy().then(function () {
      res.sendStatus(200);
    });
    }
  });
});

module.exports = router;