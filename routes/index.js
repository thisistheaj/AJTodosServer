var path = require('path');
var express = require('express');
var Model = require('../models/model');

var router = express.Router();

router.get('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
});

router.post('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname,"..","public","index.html"));
});

router.get('/all', function(req, res, next) {
  Model.find({}).then(function(models) {
    res.json(models);
  });
});

router.get('/count', function(req, res, next) {
  Model.find({}).then(function(models) {
    res.json({count: models.length});
  });
});

router.get('/:prop/:val', function(req, res, next) {
  var query = {};
  query[req.params.prop] = req.params.val;
  Model.find(query).then(function(models) {
    res.json(models);
  });
});

router.post('/', function(req, res, next) {
  // req.body = JSON.parse(req.body);

  if (req.body.hasOwnProperty("_id")){
    var model = new Model();
    var prop;
    for (prop in req.body) {
      model[prop] = req.body[prop];
    }
    Model.update({_id: req.body._id}, model).then(function() {
      res.json({'status': 'updated','model':model});
    });
  } else {
    var model = new Model();
    var prop;
    for (prop in req.body) {
      model[prop] = req.body[prop];
    }
    model.save().then(function(dbmodel) {
      res.json({'status': 'added','model':dbmodel});
    });
  }
});

module.exports = router;
