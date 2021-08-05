// Función que recorra una texto y muestre cada una de sus palabras en un tiempo estipulado
    // Separar palabras de un texto
    // Agregar una pausa entre pababra y palabra 

// Función con callback
    // Incorporar una función callback

// Configurar tiempo de pausa
    // Parametrizable o incluso ausente.

function muestraPalabra(arrayPalabra, i, callBack) {
    //console.log(arrayPalabra.length)
    if(arrayPalabra.length == i){
        console.log(`Se mostrarón ${i} palabras`);
        clearTimeout();
    }
    setTimeout(()=>{
        callBack(arrayPalabra[i]);
        muestraPalabra(arrayPalabra, i+1, callBack);
    }, 1000)
}

const recorreFrase = (frase) => {
    let palabras = frase.split(' ');
    muestraPalabra(palabras, 0, (e) =>{
        console.log(e)
    });
    //setTimeout(muestraPalabra(palabras), 1000);
}

recorreFrase('Esta es una frase de prueba');
