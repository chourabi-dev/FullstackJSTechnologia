var mongo = require('mongodb');
const urlDatabase = 'mongodb://localhost:27017/';
var url = require('url');

var ObjectId = require('mongodb').ObjectId;

exports.createFruit = function (req, res) {

    var body = [];
    req.on('data', (b) => {
        body.push(b)
    }).on('end', () => {
        let textData = Buffer.concat(body).toString();
        let jsonFruit;
        try {
            jsonFruit = JSON.parse(textData);

            // control

            /*if (jsonFruit.name != null && jsonFruit.quantity != null) {
                
            }*/


            // insert DATABASE 
            // client => server database
            var MongoClient = require('mongodb').MongoClient;

            // url connection 
            MongoClient.connect(urlDatabase).then((db) => {
                //...
                console.log("DATABASE CONNECTED");

                // 
                var database = db.db('technologiaDB');


                database.collection('fruits').insertOne(jsonFruit).then((data) => {
                    res.send({ success: true, message: "fruit inserted successfully !!" });
                }).catch((err) => {
                    res.send({ success: false, message: "Could't insert the fruit data" });
                })



            }).catch((err) => {
                // 
                res.send({ success: false, message: "Something went wrong" });
            })


        } catch (error) {
            res.send({ success: false, message: "badly formated data" });
        }



    })

}


exports.insertListOfFruits = function (req, res) {

    var body = [];
    req.on('data', (b) => {
        body.push(b)
    }).on('end', () => {
        let textData = Buffer.concat(body).toString();
        let jsonFruit;
        try {
            jsonFruit = JSON.parse(textData);

  
            // insert DATABASE 
            // client => server database
            var MongoClient = require('mongodb').MongoClient;

            // url connection 
            MongoClient.connect(urlDatabase).then((db) => {
                //...
                console.log("DATABASE CONNECTED");

                // 
                var database = db.db('technologiaDB');


                database.collection('fruits').insertMany(jsonFruit).then((data) => {
                    console.log(data.insertedCount);
                    res.send({ success: true, message: data.insertedCount+ "fruit(s) inserted successfully !!" });
                }).catch((err) => {
                    res.send({ success: false, message: "Could't insert the fruit data" });
                })



            }).catch((err) => {
                // 
                res.send({ success: false, message: "Something went wrong" });
            })


        } catch (error) {
            res.send({ success: false, message: "badly formated data" });
        }



    })

}


exports.ListFruits = function (req, res) {

    const query  = url.parse(req.url,true).query;

    console.log(query);

    let filter = {}

    if (query.quantity != null) {
        filter.quantity  = parseInt(query.quantity)
    }

    if (query.name != null) {
        filter.name  = query.name
    }

    console.log(filter);

    var MongoClient = require('mongodb').MongoClient;

    // url connection 
    MongoClient.connect(urlDatabase).then((db) => {
        //...
        console.log("DATABASE CONNECTED");

        // 
        var database = db.db('technologiaDB');


        // { key : value }
        database.collection('fruits').find( filter ).toArray().then((result)=>{
            res.send({ success: true, fruits: result });
        }).catch((err)=>{
            res.send({ success: false, message: "Something went wrong" });
        })



    }).catch((err) => {
        // 
        res.send({ success: false, message: "Something went wrong" });
    })

}

exports.updateFruit = function (req, res) {
    var body = [];
    req.on('data', (b) => {
        body.push(b)
    }).on('end', () => {
        let textData = Buffer.concat(body).toString();
        let jsonFruit;
        try {
            jsonFruit = JSON.parse(textData);

            // control

            /*if (jsonFruit.name != null && jsonFruit.quantity != null) {
                
            }*/


            // insert DATABASE 
            // client => server database
            var MongoClient = require('mongodb').MongoClient;

            // url connection 
            MongoClient.connect(urlDatabase).then((db) => {
                //...
                console.log("DATABASE CONNECTED");

                // 
                var database = db.db('technologiaDB');


                /*
                update many
                database.collection('fruits').updateMany ( {} , { $set: { quantity: 1000 } } ).then((data) => {
                    res.send({ success: true, message: "fruit updated successfully !!" });
                }).catch((err) => {
                    res.send({ success: false, message: "Could't insert the fruit data" });
                })*/

                
                // update one
                database.collection('fruits').updateOne ( { _id:ObjectId(jsonFruit.id) } , { $set: { quantity: jsonFruit.quantity } } ).then((data) => {
                    res.send({ success: true, message: "fruit updated successfully !!" });
                }).catch((err) => {
                    res.send({ success: false, message: "Could't insert the fruit data" });
                })
                



            }).catch((err) => {
                // 

                console.log(err);
                res.send({ success: false, message: "Something went wrong" });
            })


        } catch (error) {
            res.send({ success: false, message: "badly formated data" });
        }



    })

}

exports.fruitDelete = function (req, res) {
    var body = [];
    req.on('data', (b) => {
        body.push(b)
    }).on('end', () => {
        let textData = Buffer.concat(body).toString();
        let jsonFruit;
        try {
            jsonFruit = JSON.parse(textData);

            // control

            /*if (jsonFruit.name != null && jsonFruit.quantity != null) {
                
            }*/


            // insert DATABASE 
            // client => server database
            var MongoClient = require('mongodb').MongoClient;

            // url connection 
            MongoClient.connect(urlDatabase).then((db) => {
                //...
                console.log("DATABASE CONNECTED");

                // 
                var database = db.db('technologiaDB');


                /*
                update many
                database.collection('fruits').updateMany ( {} , { $set: { quantity: 1000 } } ).then((data) => {
                    res.send({ success: true, message: "fruit updated successfully !!" });
                }).catch((err) => {
                    res.send({ success: false, message: "Could't insert the fruit data" });
                })*/

                
                // update one
                database.collection('fruits').deleteOne ( { _id:ObjectId(jsonFruit.id) } ).then((data) => {
                    res.send({ success: true, message: "fruit deleted successfully !!" });
                }).catch((err) => {
                    res.send({ success: false, message: "Could't insert the fruit data" });
                })
                



            }).catch((err) => {
                // 

                console.log(err);
                res.send({ success: false, message: "Something went wrong" });
            })


        } catch (error) {
            res.send({ success: false, message: "badly formated data" });
        }



    })

}

