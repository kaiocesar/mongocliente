var express = require('express')
    , router = express.Router();

var model = require('../models/user');

router.get('/', function(req, res){

    model.all(function(err, docs){
       if (err){
           res.send('Error');
       } else {
           res.send(docs);
       }
    });
});

router.get('/insert', function(req, res){
    model.insert({name: 'pamela', email: 'pamela@gmail.com', status: true, password: '231'}, function(err, docs){
       if (err){
           res.send(err);
       }  else {
           if (docs){
               res.send('Add successfully: ' + docs);
           } else {
               res.send('Erro ao adicionar');
           }

       }
    });
});


module.exports = router;
