const db = require('../../database/models');

module.exports = {

vender: async function(req, res){

    const products = await db.producto.findAll({where: {borrado: true}})
        if (products.length > 0){
            let resultado = {
                metadata: {
                    status: 200,
                    quantity: products.length
                },
                data: {products}
            }
                res.json(resultado)
        } 
    },

total: async function(req, res){

    const users = await db.usuario.findAll({where: {rol: "comun"}})
        if (users.length > 0){
            let resultado = {
                metadata: {
                    status: 200,
                    quantity: users.length
                },
                data: {users}
            }
                res.json(resultado)
        } 
    },    

}