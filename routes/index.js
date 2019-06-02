var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Camaras' });
});
//var express = require('express');
//var router = express.Router();

var mongoose = require('mongoose');
var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, function(err, datos) {
    res.status(200).json(datos);
  });

});


router.get('/:userId', function(req, res, next) {
  User.findOne({
    'id': req.params.userId
  }, function(err, datos) {
    if (datos == null) {
      res.status(404).json({
        mensaje: "No existe"
      });
    } else {
      res.status(200).json(datos);
    }

  });
  //res.json(req.params.userId);
});

router.post('/', function(req, res, next) {
  var usuario = User({
    id: req.body.id,
    marca: req.body.marca,
    modelo: req.body.modelo,
    año: req.body.año
  });
  //res.send(usuario);


  usuario.save(function(err, data) {
    if (err) {
      res.status(404).json({
        mensaje: "Error al guardar"
      });
    } else {
      res.status(201).json(data);
    }
  });

});
//PUT - Update a register already exists
exports.updateUser = function(req, res) {
	User.findById(req.params.id, function(err, message) {
		id: req.body.id;
		año: req.body.año;
		marca: req.body.marca;
		modelo: req.body.modelo;

		camaras.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).json(data);
		});
	});
};
//delete
router.delete('/:userId', function(req, res, next) {
  User.findOneAndDelete({
    id: req.params.userId
  }, function(err, data) {
    if (err) {
      res.status(404).json(err);
    }
    res.status(200).json(data);
  });
});
router.delete('/',function(req,res,next){
  res.status(405).json({mensaje:'Acción no permitida'});
});
//module.exports = router;

module.exports = router;
