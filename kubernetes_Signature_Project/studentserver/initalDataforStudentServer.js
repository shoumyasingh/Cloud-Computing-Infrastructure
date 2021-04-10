var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://35.227.171.243/mydb"
// Connect to the db


MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }, function(err, client){
    if (err)
	throw err;
    
          // create a document to be inserted
    var db = client.db("studentdb");
    const docs = [
            { student_id: 11111, student_name: "Bruce Lee", grade: 84},
            { student_id: 22222, student_name: "Jackie Chen", grade: 93 },
            { student_id: 33333, student_name: "Jet Li", grade: 88}
    ]
    db.collection("students").insertMany(docs, function(err, res){
    	if(err) throw err;
	console.log(res.insertedCount);
	client.close();    
    });
    db.collection("students").findOne({"student_id": 11111}, 
    function(err, result){
    	console.log(result);
    });
    
});
