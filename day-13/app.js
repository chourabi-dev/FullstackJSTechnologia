var http = require('http');
var dateModule = require('./myModules/DateModule');
var url = require('url');
var fs = require('fs');
var uppercase = require('upper-case');


http.createServer( function( req, res ){

    //res.end('hello world in '+dateModule.getCurrentMonth()+' / '+ dateModule.getCurrentYear() +' year **')

    /*const myRequestUrl = req.url;

    var params = url.parse(myRequestUrl,true).query;
    var path = url.parse(myRequestUrl,true).pathname;


    if ( path === '/archive' ) {
        // archive

        res.write("getting docs from year "+params.year)

    }else{
        res.write('welcome to our app')
    }*/



    // read
    /*fs.readFile('fruits.txt',function(err,data){
        res.write(data);
        res.end();
    });*/

    //append

    /*fs.appendFile('fruits.txt','hello world',function(err){
        res.write("saved");
        res.end();
    });*/

    //append

    /*fs.writeFile('tmp.txt','hello world',function(err){
        res.write("saved");
        res.end();
    });*/
    

    // delete

    /*fs.unlink('tmp.txt',function(err){
        console.log("deleted!!");
        res.end();
    })*/


    // rename

    /*fs.rename('tmp.txt','C:/Users/tchou/Desktop/js/fruits.txt',function(err){
        res.end();
    })*/



    // /add  /list

    //fruits.txt

    // param fruit = apple

    // ul li...

    const myRequestUrl = req.url 
    var params = url.parse(myRequestUrl,true).query;
    var path = url.parse(myRequestUrl,true).pathname;

    /*if (path==='/list') {
        fs.readFile('fruits.txt',function(err,data){
            const fruits = data.toString().split(";");

            blocHtml="<ul>";

            fruits.map((f)=> blocHtml+='<li>'+f+'</li>' );

            blocHtml+='</ul>'
            
            res.writeHead(200,{'content-type':'text/html'})
            res.write(blocHtml);
            res.end();  
        })
        
    }else if (path==='/add') {
        fs.appendFile('fruits.txt',params.fruit+';',function(e){
            res.write('fruit saved !')

            res.end();
        })
    }*/

    /*
    switch (path) {
        case '/summer':
            fs.readFile('template/summer.html',function(err,data){
                res.end(data);

            })
            break;
       case '/winter':
            fs.readFile('template/winter.html',function(err,data){
                res.end(data);
                
            })
            break;
    
        default:
            fs.readFile('template/index.html',function(err,data){
                res.end(data);
                
            })
            break;
    }*/



    res.end(uppercase.upperCase("hello"));


   

}).listen(8080);