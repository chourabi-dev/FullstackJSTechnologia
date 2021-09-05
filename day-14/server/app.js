const express = require('express')
const app = express()
const port = 8080
var jwt = require('jsonwebtoken');

const cors = require('cors');

app.use(cors());



app.use(function(req,res,next){
  console.log(new Date().getTime());


  if (req.url === "/signin") {
    next();
  }else{

    // verify the access token !!
    if (req.headers.authorization != null) {
      const token  = req.headers.authorization;

      try {
        let decod = jwt.verify(token,'abcd');
        console.log(decod);

        
        next();
      } catch (error) {
        res.send("session expired")
      }


    }else{
      res.send("oups access denied no token present")
    }
  }


  
})




// ROUTE GET
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/signin',(req,res)=>{
  var body  = [];
  req.on('data',(b)=>{
      body.push(b)
  }).on('end',()=>{
      let textData = Buffer.concat(body).toString();
      let jsonData = JSON.parse(textData);
       

      //  { username:"" , password:"" }
     

      // generate a new token !!
      // check login and password first
      // database ????
      if ( jsonData.username === "admin" && jsonData.password==='admin' ) {
        var token  = jwt.sign({
          user:jsonData.username,
  
          iat: Math.floor(Date.now() / 1000),
          exp: Math.floor(Date.now() / 1000) + ((60 * 60 ) * 24 ) , // 24 hours
  
        },
        'abcd'
        )
  
        res.send( { succes:true, token:token } );
      }else{
        res.send({succes:false, message:"wrong username or password"})
      }

  })
})



app.post('/vehicule/add',(req,res)=>{
    var body  = [];
    req.on('data',(b)=>{
        body.push(b)
    }).on('end',()=>{
        let textData = Buffer.concat(body).toString();
        let jsonData = JSON.parse(textData);
        console.log(jsonData);

        // insert database

        res.send({success: true});

    })
})

app.listen(port, () => {
  console.log(`Server app listening at http://localhost:${port}`)
})