const express = require('express');
const cors = require('cors'); 
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'products'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos MySQL');
});

app.use(cors());

app.get('/', (req, res) =>{
  res.send('hola mundo');
});

app.get('/productos', (req, res) => {
  const sql = 'SELECT * FROM products';
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});


app.listen(3000, ()=>{
  console.log(`Sever escuchando en el puerto ${3000}`);
});