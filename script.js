
let verificar=()=>{
    let nombre = document.getElementById("nombre")
    let apellido = document.getElementById("apellido")
    let añoDeNacimiento = document.getElementById("añoDeNacimiento")
    añoDeNacimiento = parseInt(añoDeNacimiento)
    let año = 2003

    console.log(añoDeNacimiento.value)

    if(añoDeNacimiento.value>año){
        nombre = nombre.value
        apellido = apellido.value
        let alerta = document.getElementById("contenedor")
        alerta.innerHTML=`${nombre} no puede ingresar porque es menor`
        alerta.style.color = "brown"
        alerta.style.backgroundColor = "yellow"
        alerta.style.fontSize = "30px"
        alerta.style.fontFamily = "Verdena"
        alerta.style.textAlign = "center"
        
                        
    }else{
        nombre = nombre.value
        apellido = apellido.value
        let alerta = document.getElementById("contenedor")
        alerta.innerHTML=`${nombre} ${apellido} Bienvenido`
        alerta.style.color = "#E4BAB1"
        alerta.style.backgroundColor = "#7315C1"
        alerta.style.fontSize = "30px"
        alerta.style.fontFamily = "Verdena"
        alerta.style.textAlign = "center"

    }

}

