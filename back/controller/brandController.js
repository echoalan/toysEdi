const Brand = require('../model/brandModel');

const brandController = {
    getAllBrands: (req,res) =>{
        const brand = new Brand();
        brand.getAllBrands((err, result) =>{
            if(err){
                console.log(`Error ${err}`)
                res.status(500).json({error: 'Error al obtener las marcas'})
            }else{
                res.json(result)
            }
        })
    }
}

module.exports = brandController;
