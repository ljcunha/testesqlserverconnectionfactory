var mssql = require('mssql');

async function dbConnection(){
    var config = {
        user: 'Developer',
        password: 'Katana07',
        server: 'MIDGARD\\SQLEXPRESS',
        database: 'DbCanI',
        option:{
            encrypt: true
        }
    };

    var pool = new mssql.ConnectionPool(config);
    
    return await pool.connect();
}

module.exports = function(){
    return dbConnection();
}