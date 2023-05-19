const Product = require('../model/productModel');

const productController = {
    getAllProducts: (req, res) =>{
        const product = new Product();
        product.getAllProducts((err, result) =>{
            if(err){
                console.error(`Error ${err}`);
                res.status(500).json({error: 'Error al obtener los productos'});
            }else{
                res.json(result);
            }
        })
    }
}

module.exports = productController;