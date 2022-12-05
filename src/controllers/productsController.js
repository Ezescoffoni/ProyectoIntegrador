const path = require("path");
const fs = require("fs");
const { validationResult } = require("express-validator")


const productoFilePath = path.join(__dirname, '../Json/catalogoBase.json');
const productos = JSON.parse(fs.readFileSync(productoFilePath, 'utf-8'));

const db = require('../database/models');

const productsController = {
	/*Detalle producto*/
    productDetail: (req,res) => {
        db.producto.findByPk(req.params.id)
            .then(function(producto){
                res.render("products-detail", {producto: producto})
            })
    },
	// function (req,res){
    //     let idProducto = req.params.id;
	// 	let objProducto;

	// 	for (let o of productos){
	// 		if (idProducto == o.id){
	// 			objProducto=o;
	// 			break;
	// 		}
	// 	}
    //     res.render("products-detail", {producto: objProducto})
    // },
	/*Catalogo productos*/
	catalogo: function (req,res){
        let productsdb = [];
		db.producto.findAll({ include: [{association: "categorias"}, {association: "color"}, {association: "material"}]})
			.then(function(resulProducto){
				for (producto of resulProducto){
					let objeto = {
						id: producto.id,
						nombre: producto.nombre,
						imagen: producto.imagen,
					}
					productsdb.push(objeto);
				}
				res.render("catalogo", {prod: productsdb});
			})
    },
	/*Crear producto*/
    create: async (req, res) => {
		
        let categorias = await db.categoria.findAll()
		let color = await db.color.findAll()
		let material = await db.material.findAll()

			res.render("product-create", {categorias: categorias, color: color, material: material})
			//res.render("product-create")
        },
        
	store: async (req, res) => {
		// console.log(req.body)
		// console.log(req.file)
		let nombreImagen = req.file.filename;

		await db.producto.create({
			nombre: req.body.nombre,
			precio: req.body.precio,
			fecha_creacion: req.body.fecha_creacion,
			Categoria_id: req.body.categoria,
			Color_id: req.body.color,
			Material_id: req.body.material,
			imagen: nombreImagen
		})
			.catch(function (error){
				console.log(error)
			})	
			
			res.redirect("/products")

    },
	/*Editar producto*/
    edit: (req,res) => {
        db.producto.findByPk(req.params.id)
            .then(function(objProducto){
                res.render('product-edit',{producto: objProducto})
            })
    },
	// function (req,res){

    //     let idProducto = req.params.id;
	// 	let objProducto;

	// 	for (let o of productos){
	// 		if (idProducto == o.id){
	// 			objProducto=o;
	// 			break;
	// 		}
	// 	}
	// 	res.render('product-edit',{producto: objProducto})
    //},
	update: (req, res) => {
		if (req.file != undefined){
		db.producto.update({
			nombre: req.body.nombre,
			precio: req.body.precio,
			imagen: req.file.filename,
			fecha_creacion: req.body.fecha_creacion,
		},
		{where: { id: req.params.id } })
			.then(function(resultado){
				if (resultado){
					res.redirect("/");
				}
		})
		} else {
		db.producto.update({
			nombre: req.body.nombre,
			precio: req.body.precio,
			fecha_creacion: req.body.fecha_creacion,
		},
		{where: { id: req.params.id } })
			.then(function(resultado){
				if (resultado){
					res.redirect("/");
				}
			})
		}
	},
	destroy: (req, res) => {
        db.producto.destroy({
            where: {
                id: req.params.id,
            },
        }).then(function (resultado) {
            if (resultado) {
                res.redirect("/");
            }
        });
    },

		// let idProducto = req.params.id;
		// let productoEncontrado;

		// let Nproducts = productos.filter(function(e){
		// 	return idProducto != e.id;
		// })

		// for (let producto of productos){
		// 	if (producto.id == idProducto){
		// 		productoEncontrado = producto;
		// 	}
		// }

		// fs.unlinkSync(path.join(__dirname, "../../public/images", productoEncontrado.image));

		// fs.writeFileSync(productoFilePath,JSON.stringify(Nproducts, null, " "));

		
	

	probando123: async (req, res) => {
		
        let categorias = await db.categoria.findAll()
		let color = await db.color.findAll()

				res.render("listaProductos", {categorias: categorias, color: color})
		
        },

    probando1234: async (req, res) => {
		// console.log(req.body)
		// console.log(req.file)
		let nombreImagen = req.file.filename;

		await db.producto.create({
			nombre: req.body.nombre,
			precio: req.body.precio,
			fecha_creacion: req.body.fecha_creacion,
			Categoria_id: req.body.categoria,
			imagen: nombreImagen
		})
			.catch(function (error){
				console.log(error)
			})
				
			
			res.redirect("/products")


        // db.producto.create({
        //     nombre: req.body.name,
        //     precio: req.body.price,
        //     fecha_creacion: req.body.create,
        //     fecha_baja: req.body.baja,
        //     imagen: req.body.imageProduct,
        //     peso: req.body.peso,
        //     medidas: req.body.medidas,
        //     destacado: req.body.destacado,
        //     oferta: req.body.oferta,
        // })

        // res.redirect("/")
    },
		
}

module.exports = productsController;