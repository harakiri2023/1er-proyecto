
//header
window.addEventListener('scroll',()=>{
    var scroll = window.scrollY
    var header = document.getElementById('header')
    console.log('scroll'+scroll)
    if (scroll>10){
        header.style.backgroundColor = '#00000095';
    } 
    else{
        header.style.backgroundColor = null
    }
})



//Consulta o reclamos
function Validar()
{
    nombre = document.getElementById("nombre").value;
    email = document.getElementById("email").value;
    telefono = document.getElementById("telefono").value;
    texto_deseado = document.getElementById("texto_deseado").value;
    consulta = document.getElementById("consulta");
    reclamo = document.getElementById("reclamo");
    // NOMBRE
    if(nombre.length==0){
        alert("El campo nombre no puede estar vacio")
    }
    // EMAIL
    if(email.length==0){
        alert("El campo de email no puede estar vacio")
    }

    // TELEFONO
    if(telefono.length ==0){
        alert("El campo de telefono no puede estar vacio")
    }

    // CHECKBOX
    if (consulta.checked == true && reclamo.checked == true){
        alert("Solo debe marcar un checkbox")
    }else {
        alert("Debes marcar si es consulta o reclamo");
    }

    // TEXTO
    if(texto_deseado.length == 0){
        alert("Tiene que escribir su consulta o reclamo")
    }
}


    
  
 





