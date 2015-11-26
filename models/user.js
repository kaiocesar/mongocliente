/**
 * Created by Admin on 11/26/15.
 */

var db = require('../configs/database');



exports.all = function(callback){
    var collection = db.get().collection('users');

    collection.find().toArray(function(err, docs){
        callback(err, docs);
    });
};


exports.insert = function(data, callback){
    var collection = db.get().collection('users');

    collection.insertOne(data, function(err, docs){
        if (err){
            callback(err, null);
        }
        var ret = "";
        if(docs.ops.length == 1){
            ret = docs.ops[0]._id;
        }
        callback(null, ret);
    })
}