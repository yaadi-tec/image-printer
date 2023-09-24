const sql = require('mssql');
const config = require("./config");

// Create a SQL Server connection pool
const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {poolPromise};

