var express = require('express');
var app = express();
var mssql = require('mssql');


app.get('/', function(req,res){
    var config = {
        user: 'Developer',
        password: 'Katana07',
        server: 'MIDGARD\\SQLEXPRESS',
        database: 'DbCanI',
        option:{
            encrypt: true
        }
    };

    mssql.connect(config, function (err) {    
        if (err) {
            console.log(err);
        }else{
            console.log("Connected");
            var request = new mssql.Request();

            request.query("Select * from Components",function(err,recordset){
                if(err) console.log(err);

                res.send(recordset.recordset);
            });
        }
    });       
});

app.listen(3000,function(){
    console.log("Servidor online...");
});