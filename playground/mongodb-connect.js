//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//var obj = ObjectID();
//console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if(err) {
    return console.log('Unable to connect to Mongodb Server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  /*db.collection('Todos').insertOne({
    text:Something to do,
    completed: false
    }, (err, result) => {
      if(err) {
        return console.log('Unable to insert todo', err);
      }
        console.log(JSON.stringify(result.ops, undefined, 2 ));
  });*/
//INSERT RECORD INTO DATABASE COLLICTION
  db.collection('Users').insertOne({
      //_id: 123,
      name: 'Jill',
      age: 36,
      location: 'York'
      }, (err, result) => {
        if(err) {
          return console.log('Unable to insert user', err);
        }
          console.log(JSON.stringify(result.ops, undefined, 2 ));
          //GET TIMESTAMP FROM OBJECT _ID
          console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2 ));
    });

  client.close();
});
