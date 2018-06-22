const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err) {
        return console.log("unable to connect to mongodb server");
    }
    console.log('connected to mongodb server');
    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: 'Eat dinner ',
        completed: true

    },(err, result)=>{
        if(err){
            return console.log('unable to insert to do' , err);
        }
        console.log(JSON.stringify(result.ops, undefined , 2));
    });

    // db.collection('Users').insertOne({
    //     name: 'Ankush Dubey',
    //     location: 'delhi',
    //     age: '26'

    // },(err, result)=>{
    //     if(err){
    //         return console.log('unable to insert to do' , err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
    // });

    client.close();
});