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
        },
        
	store: async (req, res) => {
		let nombreImagen = req.file.filename;

		await db.producto.create({
			nombre: req.body.nombre,
			precio: req.body.precio,
			fecha_creacion: req.body.fecha_creacion,
			descripcion: req.body.descripcion,
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

	probando123: async (req, res) => {
		
        let categorias = await db.categoria.findAll()
		let color = await db.color.findAll()

				res.render("listaProductos", {categorias: categorias, color: color})
		
        },
		
}

module.exports = productsController;