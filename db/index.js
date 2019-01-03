const mysql = require('mysql');
const {promisify} = require('util');
const { dbConfig } = require('../config');

const db = mysql.createConnection(dbConfig);

db.query = promisify(db.query);

db.connect((err)=>{
    if(err){
        console.log('Error connecting to MySQL:', err);
        return;
    }
    
    console.log('Connected to MySQL DB');
});

module.exports = db;