/**
 * Created by Admin on 11/26/15.
 */
var express = require('express')
    , app = express()
    , db = require('./configs/database');


app.use('/', require('./controllers/users'));

db.connect('mongodb://localhost:27017/skeleton', function(err){
    if (err){
        process.exit(1);
    } else {
        app.listen(3000, function(){
            console.log('Listining on port 3000');
        });
    }
});

