window.addEventListener("load", function (){

    let formulario = document.querySelector("form.formulario-registrarse")
    let botonRegistrarse = document.querySelector(".boton-login-registrar")
    
    formulario.addEventListener("submit", function(e){
        let errorNombre = []
        let errorApellido = []
        let errorEmail = []
        let errorPassword = []
        let errorPassword2 = []

        //Nombre
        let campoNombre = document.querySelector("input.nombre")

        if (campoNombre.value == ""){
            errorNombre.push("El campo nombre es obligatorio")
        } else if (campoNombre.value.length < 4) {
            errorNombre.push("El campo nombre debe tener al menos 4 letras")
        } 

        if (errorNombre.length > 0){
            let ulErrorNombre = document.querySelector("div.errorNombre")
            for (let i = 0; i < errorNombre.length; i++){
                ulErrorNombre.innerHTML += errorNombre[i] 
                ulErrorNombre.style.color = "red"
            }
        }

        //Apellido
        let campoApellido = document.querySelector("input.apellido")

        if (campoApellido.value == ""){
            errorApellido.push("El campo apellido es obligatorio")
        } 

        if (errorApellido.length > 0){
            let ulErrorApellido = document.querySelector("div.errorApellido")
            for (let i = 0; i < errorApellido.length; i++){
                ulErrorApellido.innerHTML += errorApellido[i] 
                ulErrorApellido.style.color = "red"
            }
        }

        //Email
        let campoEmail = document.querySelector("input.email")

        if ((campoEmail.value == "") || (!campoEmail.value.includes("@")) ){
            errorEmail.push("Complete el email en un formato correspondiente")
        } else if (campoEmail.value.length < 10){
            errorEmail.push("El email debe tener una longitud minima de 10 caracteres")
        }

        if (errorEmail.length > 0){
            let ulErrorEmail = document.querySelector("div.errorEmail")
            for (let i = 0; i < errorEmail.length; i++){
                ulErrorEmail.innerHTML += errorEmail[i] 
                ulErrorEmail.style.color = "red"
            }
        }

        //Contrase??a
        let campoContrase??a = document.querySelector("input.contrase??a")

        if (campoContrase??a.value == ""){
            errorPassword.push("La contrase??a es obligatoria")
        } else if (campoContrase??a.value.length < 8){
            errorPassword.push("La contrase??a debe tener al menos 8 caracteres")
        }

        if (errorPassword.length > 0){
            let ulErrorContrase??a = document.querySelector("div.errorContrase??a")
            for (let i = 0; i < errorPassword.length; i++){
                ulErrorContrase??a.innerHTML += errorPassword[i] 
                ulErrorContrase??a.style.color = "red"
            }
        }

        //Repetir Contrase??a
        let campoContrase??a2 = document.querySelector("input.contrase??a2")

        if ((campoContrase??a2.value == "") || (campoContrase??a2.value != campoContrase??a.value)){
            errorPassword2.push("Las contrase??as no coinciden")
        } else if (campoContrase??a.value.length < 8){
            errorPassword2.push("La contrase??a debe tener al menos 8 caracteres")
        }

        if (errorPassword2.length > 0){
            let ulErrorContrase??a2 = document.querySelector("div.errorContrase??a1")
            for (let i = 0; i < errorPassword2.length; i++){
                ulErrorContrase??a2.innerHTML += errorPassword2[i] 
                ulErrorContrase??a2.style.color = "red"
            }
        }

        if ((errorNombre.length > 0) || (errorApellido.length > 0) || (errorEmail.length > 0) || (errorPassword.length > 0) || (errorPassword2.length > 0)){
            e.preventDefault()
        }

        botonRegistrarse.addEventListener("click", function(){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Usuario registrado correctamente',
                showConfirmButton: false,
                timer: 1500
            })
        })

    })  
    
    })