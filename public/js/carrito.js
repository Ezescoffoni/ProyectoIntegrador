window.addEventListener("load", function (){

let botonComprar = document.querySelector(".botonComprar .button")

botonComprar.addEventListener("click", function(){

    let nombreProducto = document.querySelector("h3 .titulo-producto-detail")
    let precioProducto = document.querySelector("p #precio-base")
    let productoNuevo = {nombre: nombreProducto, precio: precioProducto};
    let productos = JSON.parse(localStorage.getItem("carrito"));

    productos.push(productoNuevo)

    localStorage.getItem("carrito", JSON.stringify(productos))
        
})


})