var express = require('express');
var router = express.Router();
var dao = require('../src/controller/dao');


router.get('/armory', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    res.send("Armory content list : \n" + JSON.stringify(dao()));
});

router.get('/armory/:id', function(req, res){
    res.setHeader('Content-Type', 'application/json');
});

router.get('/intervention_group', function(req, res){
    res.setHeader('Content-Type', 'application/json');
});

router.get('/intervention_group/:id', function(req, res){
    res.setHeader('Content-Type', 'application/json');
});

router.get('/mission', function(req, res){
    res.setHeader('Content-Type', 'application/json');
});

router.get('/mission/:id', function(req, res){
    res.setHeader('Content-Type', 'application/json');
});

module.exports = router;
