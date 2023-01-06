window.addEventListener("load", function (){

    let contenedor = document.querySelector("#contenedorCarrito")
    let productos = JSON.parse(sessionStorage.getItem("carrito"));
    
    for (let prod of productos){
        let div1 = document.createElement("div")
        div1.setAttribute("class", "main-detalle-edit")

        let h31 = document.createElement("h3")
        h31.setAttribute("class", "titulo-producto-detail")
        
        let div2 = document.createElement("div")
        div2.setAttribute("class", "descripcion-prod-detail")

        let p1 = document.createElement("p")
       
        let div3 = document.createElement("div")
        div3.setAttribute("class", "div-detail-2")

        let imgCarro = document.createElement("img")
        imgCarro.setAttribute("class", "imagenCarrito")

        imgCarro.innerHTML = prod.imagen
        h31.innerText = prod.nombre
        p1.innerText = prod.precio
        contenedor.appendChild(div1)
        contenedor.appendChild(div2)
        contenedor.appendChild(div3)
        div2.appendChild(p1)
        div1.appendChild(h31)
        div3.appendChild(imgCarro)
        

    }
 
})

                 /* <div class="div-detail-2" id="imagen-carro">
                         <img src="/images/<%= producto.imagen %>" id="#imagenCarro">
                        </div>
                 <div class="main-detalle-edit" >   
                        <h3 class="titulo-producto-detail" id="nombreCarrito"><%= producto.nombre %></h3>
                    </div>
                    <div>
                        <div class="descripcion-prod-detail">
                            <p id="precio-base">$<%=producto.precio%></p>
                        </div>

                        <div class="botones-productos">

                            <% if (!(locals.isLogged)) { %>
                            <a href="/users/login" class="button-edit-product">
                                <button type="submit" class="button">Ir a comprar</button>
                            </a>
                            <% } else { %>
                            <a href="#" class="button-edit-product" id="botonComprar">
                                <button type="submit" class="button">Comprar</button>
                            </a>
                            <% } %>
                            <form action="/products/" style="margin-bottom: 25px">
                                <button type="submit" class="button">Seguir Comprando</button>
                            </form>
                        </div>
                        </div> */




    // botonComprar.addEventListener("click", function(){
    
    //     let nombreProducto = document.querySelector("#nombreCarrito").innerHTML
    //     let precioProducto = document.querySelector("#precio-base").innerHTML
    //     let productoNuevo = {nombre: nombreProducto, precio: precioProducto};
    //     let productos = JSON.parse(localStorage.getItem("carrito"));
    
    //     if (productos == undefined || productos == null) {
    
    //         productos = []
    
    //     }
    
    //     productos.push(productoNuevo)
    
    //     localStorage.setItem("carrito", JSON.stringify(productos))
    
    //     alert("Agregado al carrito correctamente!")
            
    // })
    
    
  