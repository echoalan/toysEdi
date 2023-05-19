const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'products'
});


connection.connect((err)=>{
    if(err){
        console.log(`Error to connection BBDD`);
        process.exit(1);
    }
    console.log(`Connectiont succexfuli xd`);
});


module.exports = connection;



