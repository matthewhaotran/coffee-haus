const router = require('express').Router();
const db = require('../models');

router.get('/', function (req, res) {
  db.Note.findAll().then(function (customers) {
    res.json(customers);
  })
});

router.get('/:id/', function (req, res) {
  db.Note.findById(req.params.id).then(function (customer) {
    if (customer === null) {
      res.sendStatus(404);
    } else {
      res.json(customer);
    }
  });
});

router.post('/', function (req, res) {
  const note = db.Note.build(req.body);

  note.save().then(function (newCustomer) {
    res.send(newCustomer);
  });
});

router.put('/:id', function (req, res) {
  db.Note.findById(req.params.id).then(function (customer) {
    note.update(req.body).then(function () {
      res.sendStatus(204);
    });
  });
});

router.delete('/:id', function (req, res) {
  db.Note.findById(req.params.id).then(function (customer) {
    if (note === null) {
      res.sendStatus(404);
    } else {
    note.destroy().then(function () {
      res.sendStatus(200);
    });
    }
  });
});




module.exports = router;
