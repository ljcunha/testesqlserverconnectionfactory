var express = require('express');
var app = express();
var dbConnection = require('./connectionFactory');
var ComponentDAO = require('./ComponentDAO')();



app.get('/', async function(req,res){
    var conn = await dbConnection();
    var objDAO = new ComponentDAO(conn);

    objDAO.lista(async function(err,result){
        if(err){
            await console.log(err);
        }else{
            await res.json(result.recordset);
        }
        await conn.close();      
    });
});

app.listen(3000,function(){
    console.log("Servidor online...");
});