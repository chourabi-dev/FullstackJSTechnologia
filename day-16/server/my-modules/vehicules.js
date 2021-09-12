var mongo = require('mongodb');
const urlDatabase = 'mongodb://localhost:27017/';
var url = require('url');

var ObjectId = require('mongodb').ObjectId;

exports.createVehicule = function (req, res) {

    var body = [];
    req.on('data', (b) => {
        body.push(b)
    }).on('end', () => {
        let textData = Buffer.concat(body).toString();
        let jsonVehicule;
        try {
            jsonVehicule = JSON.parse(textData);
 
            var MongoClient = require('mongodb').MongoClient;

            // url connection 
            MongoClient.connect(urlDatabase).then((db) => {
                //...
                console.log("DATABASE CONNECTED");

                // 
                var database = db.db('technologiaDB');


                database.collection('vehicules').insertOne(jsonVehicule).then((data) => {
                    res.send({ success: true, message: "vehicule inserted successfully !!" });
                }).catch((err) => {
                    res.send({ success: false, message: "Could't insert the vehicule data" });
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


 


exports.ListVehicules = function (req, res) {

    const query  = url.parse(req.url,true).query;

    console.log(query);

    let filter = {}

    if (query.registrationPlate != null) {
        filter.registrationPlate  = query.registrationPlate
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
        database.collection('vehicules').find( filter ).toArray().then((result)=>{
            res.send({ success: true, data: result });
        }).catch((err)=>{
            res.send({ success: false, message: "Something went wrong" });
        })



    }).catch((err) => {
        // 
        res.send({ success: false, message: "Something went wrong" });
    })

}

exports.updateVehicule = function (req, res) {
    var body = [];
    req.on('data', (b) => {
        body.push(b)
    }).on('end', () => {
        let textData = Buffer.concat(body).toString();
        let jsonVehicule;
        try {
            jsonVehicule = JSON.parse(textData);
 
            var MongoClient = require('mongodb').MongoClient;

            // url connection 
            MongoClient.connect(urlDatabase).then((db) => {
                //...
                console.log("DATABASE CONNECTED");

                // 
                var database = db.db('technologiaDB');

 
                // update one
                /*database.collection('fruits').updateOne ( { _id:ObjectId(jsonVehicule.id) } , { $set: {  } } ).then((data) => {
                    res.send({ success: true, message: "fruit updated successfully !!" });
                }).catch((err) => {
                    res.send({ success: false, message: "Could't insert the fruit data" });
                })*/
                



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

exports.VehiculesDelete = function (req, res) {
    var body = [];
    req.on('data', (b) => {
        body.push(b)
    }).on('end', () => {
        let textData = Buffer.concat(body).toString();
        let jsonVehicule;
        try {
            jsonVehicule = JSON.parse(textData);

 

            // insert DATABASE 
            // client => server database
            var MongoClient = require('mongodb').MongoClient;

            // url connection 
            MongoClient.connect(urlDatabase).then((db) => {
                //...
                console.log("DATABASE CONNECTED");

                // 
                var database = db.db('technologiaDB');

 
                
                // update one
                database.collection('vehicules').deleteOne ( { _id:ObjectId(jsonVehicule.id) } ).then((data) => {
                    res.send({ success: true, message: "vehicule deleted successfully !!" });
                }).catch((err) => {
                    res.send({ success: false, message: "Something went wrong" });
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

