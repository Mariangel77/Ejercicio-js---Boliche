//DEJAR PPASAR SOLO A LOS +18
//EL PRIMERO QUE ENTRE DESPUES DE LAS 2 AM, NO PAGA


function ValidaciondeEdad (time){
    let pregunta = parseInt(prompt("Hola ¿Cuantos años tenes?"))

    if(pregunta >= 18){
        if(time >= 2 && time <=7){
            alert("te dejo pasar tranqui")
        }else{
            alert("te dejo pasar pero tenes que pagar la entrada")
        }
        
    }else{
        alert("sos muy chico todavia")
    }
}

ValidaciondeEdad(23)
ValidaciondeEdad(4)
ValidaciondeEdad(10)
ValidaciondeEdad(6)
ValidaciondeEdad(3)
ValidaciondeEdad(1)