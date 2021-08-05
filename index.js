// Función que recorra una texto y muestre cada una de sus palabras en un tiempo estipulado
    // Separar palabras de un texto
    // Agregar una pausa entre pababra y palabra 

// Función con callback
    // Incorporar una función callback

// Configurar tiempo de pausa
    // Parametrizable o incluso ausente.

function muestraPalabra(arrayPalabra) {
    //console.log(arrayPalabra);
    console.log(arrayPalabra.length)
    if(arrayPalabra.length === 0){
        console.log('fin');
    }
    else{
        console.log(arrayPalabra[0]);
        muestraPalabra(arrayPalabra.splice(1,arrayPalabra.length));
    }   
}

const recorreFrase = (frase) => {
    let palabras = frase.split(' ');
    muestraPalabra(palabras);
    //setTimeout(muestraPalabra(palabras), 1000);
}

console.log(recorreFrase('Esta es una frase de prueba'));
