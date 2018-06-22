const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err) {
        return console.log("unable to connect to mongodb server");
    }
    console.log('connected to mongodb server');
    const db = client.db('TodoApp');

    //deleteMAny
    // db.collection('Todos').deleteMany({text: 'Eat dinner '}).then((result)=>{
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: 'Eat dinner'}).then((result)=>{
    //     console.log(result);
    // });


    //findOneand Delete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
        console.log(result);
    });

    client.close();
});