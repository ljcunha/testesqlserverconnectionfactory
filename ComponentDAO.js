const mssql = require('mssql');

function ComponentDAO(connection){
    this._connection = connection;
}

ComponentDAO.prototype.lista = async function(callback){
    var request = new mssql.Request(this._connection);
    await request.query("Select * from Components",callback);
}

module.exports = function(){
    return ComponentDAO;
}