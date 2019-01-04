//const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if(err) {
    return console.log('Unable to connect to Mongodb Server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  
//FIND RECORD BY OBJECT PROPERTY
/*db.collection('Todos').find({
    _id: new ObjectID('5c2f99a33aa2caa64ae61621')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });*/
  db.collection('Users').find({age: 52}).toArray().then((docs) => {
      console.log('By age:');
      console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
      console.log('Unable to fetch todos', err);
    });
//COUNT RECORDS IN DATABASE
  db.collection('Users').find().count().then((count) => {
      console.log(`Users count: ${count}`);
    }, (err) => {
      console.log('Unable to fetch todos', err);
    });

  client.close();
});
