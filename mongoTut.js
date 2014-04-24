var MongoClient = require('mongodb').MongoClient// mongodb require
 
MongoClient.connect('mongodb://localhost:27017', function(err, db) {
 
   if(err) throw err;
 
   var collection = db.collection('tutorial08');
 
   var key = "myKey";
 
   collection.findOne({"key": key}, function(err, res) {
 
      if(err) throw err;
 
      if (res)
      {
         console.log("result:", res);
         db.close();
      }
      else
      {
         // creating new entry
         console.log("creating new entry!");
 
         // create an object:
         var myObject = {
            "key": key,
            "value": 1234 };
 
         collection.insert(myObject, function(err, res) {
            // close connection:
            db.close();
         });
      }
   });
});