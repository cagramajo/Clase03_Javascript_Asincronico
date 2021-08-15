// Función que recorra una texto y muestre cada una de sus palabras en un tiempo estipulado
    // Separar palabras de un texto
    // Agregar una pausa entre pababra y palabra 

// Función con callback
    // Incorporar una función callback

// Configurar tiempo de pausa
    // Parametrizable o incluso ausente.

//// Aqui se implementa lo del ejercicio

function palabraYpausa (palabra, tiempo, callBackPalabraYpausa) {
    setTimeout(()=>{
        console.log(palabra)
        callBackPalabraYpausa()
    }, tiempo);    
}

function pasaPalabras(frase, tiempo, leidas, callBack){
    if(frase.length > 0){
        let palabraAmostrar = frase.shift();
        //console.log(frase);
        palabraYpausa(palabraAmostrar, tiempo, function(){
            pasaPalabras(frase, tiempo, ++leidas, callBack);
        });
    } else {
        cantidadPalabras(leidas, callBack);
    }
}

function cantidadPalabras(leidas, callBackFinal){
    setTimeout(function(){
        console.log(`Se leyeron ${leidas} palabras`);
        callBackFinal();
    }, 1000);
}

function recorreFrase(oracion, pausa, callBack){
    let frase = oracion.split(' ');
    pasaPalabras(frase, pausa, 0, callBack);
}

recorreFrase('La ultima prueba del ejercicio', 500, function(){
    console.log('Proceso finalizado');
})







