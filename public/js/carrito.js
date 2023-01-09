window.addEventListener("load", function (){

let botonComprar = document.querySelector("#botonComprar")
// let botonAgregarCarrito = document.querySelector(".button-edit-product");

botonComprar.addEventListener("click", function(){

   
    let imagenProducto = document.querySelector("#imagenCarro").src
    let nombreProducto = document.querySelector("#nombreCarrito").innerHTML
    let precioProducto = document.querySelector("#precio-base").innerHTML
    let botonEliminar = document.querySelector(".button").innerHTML

    let productoNuevo = {nombre: nombreProducto, precio: precioProducto, imagen: imagenProducto, boton: botonEliminar};
    let productos = JSON.parse(sessionStorage.getItem("carrito"));

    if (productos == undefined || productos == null) {

        productos = []

    }

    productos.push(productoNuevo)

    sessionStorage.setItem("carrito", JSON.stringify(productos))

    alert("Agregado al carrito correctamente!")    
    // Swal.fire({
    //     position: 'center',
    //     icon: 'success',
    //     title: 'Agregado al carrito correctamente',
    //     showConfirmButton: false,
    //     timer: 1500
    // })
        
})

// botonAgregarCarrito.addEventListener("click", function(){
//     Swal.fire({
//         position: 'center',
//         icon: 'success',
//         title: 'Agregado al carrito correctamente',
//         showConfirmButton: false,
//         timer: 1500
//     })
// })


})