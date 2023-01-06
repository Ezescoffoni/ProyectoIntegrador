window.addEventListener("load", function (){

let botonComprar = document.querySelector("#botonComprar")

botonComprar.addEventListener("click", function(){

   
    let imagenProducto = document.querySelector("#imagenCarro").src
    let nombreProducto = document.querySelector("#nombreCarrito").innerHTML
    let precioProducto = document.querySelector("#precio-base").innerHTML
    let productoNuevo = {nombre: nombreProducto, precio: precioProducto, imagen: imagenProducto};
    let productos = JSON.parse(sessionStorage.getItem("carrito"));

    if (productos == undefined || productos == null) {

        productos = []

    }

    productos.push(productoNuevo)

    sessionStorage.setItem("carrito", JSON.stringify(productos))

    alert("Agregado al carrito correctamente!")
        
})


})