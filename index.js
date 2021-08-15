// Función que recorra una texto y muestre cada una de sus palabras en un tiempo estipulado
    // Separar palabras de un texto
    // Agregar una pausa entre pababra y palabra 

// Función con callback
    // Incorporar una función callback

// Configurar tiempo de pausa
    // Parametrizable o incluso ausente.


// transcurrido un "tiempo" N en milisegundos, muestra la palabra y llama al callback;
function palabraYpausa (palabra, tiempo, callBackPalabraYpausa) {
    setTimeout(()=>{
        console.log(palabra)
        callBackPalabraYpausa()
    }, tiempo);    
}

//Muestra la cantidad de palabras leídas y llama a un callback
function cantidadPalabras(leidas, callBackFinal){
    setTimeout(function(){
        console.log(`Se leyeron ${leidas} palabras`);
        callBackFinal();
    }, 1000);
}

// Toma una array de palabras y llama a la función palabraYpausa, al leer todo el array llama a una funsción que muestra la cantidad de palabras leídas y llama a un callBack
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


/* //Convierte en array una oración recibida y llama a un callback 
function recorreFrase(oracion, pausa, callBack){
    let frase = oracion.split(' ');
    pasaPalabras(frase, pausa, 0, callBack);
}

recorreFrase('La ultima prueba del ejercicio', 500, function(){
    console.log('Proceso finalizado');
}) */

function pasaOraciones(parrafo, tiempo, callBack){
    if(parrafo.length > 0){
        let frase = parrafo.shift().split(' ');
        pasaPalabras(frase, tiempo, 0, function(){
            pasaOraciones(parrafo, tiempo, callBack);
        });
    } else {
        callBack();
    }
}

let frase1 = 'Esta es la primera frase';
let frase2 = 'Vamos con la segunda';
let frase3 = 'Parece que es la tercera y última';

let parrafo = [frase1, frase2, frase3];

console.log('Proceso Iniciado: ')
pasaOraciones(parrafo, 1500, function(){
    console.log('Proceso finalizado')
})




