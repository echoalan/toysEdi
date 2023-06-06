const connection = require('../config/db');

class Brand {
    getAllBrands(callback){
        const sql = 'SELECT DISTINCT BRAND FROM products';
        connection.query(sql, callback);
    }

}

module.exports = Brand;