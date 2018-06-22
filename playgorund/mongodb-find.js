const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err) {
        return console.log("unable to connect to mongodb server");
    }
    console.log('connected to mongodb server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({completed: true}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs ,undefined, 2));
    // },(err)=>{
    //     console.log('unable to fetch todos', err);
    // });

    db.collection('Todos').find({completed: true}).count().then((count)=>{
        console.log(`Todos count:: ${count}`);
    },(err)=>{
        console.log('unable to count todos', err);
    });
    client.close();
});