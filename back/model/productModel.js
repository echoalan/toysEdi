const connection = require('../config/db');

class Product {
    getAllProducts(callback){
        const sql = 'SELECT * FROM products';
        connection.query(sql, callback);
    }

}

module.exports = Product;