// Función que recorra una texto y muestre cada una de sus palabras en un tiempo estipulado
    // Separar palabras de un texto
    // Agregar una pausa entre pababra y palabra 

// Función con callback
    // Incorporar una función callback

// Configurar tiempo de pausa
    // Parametrizable o incluso ausente.

function muestraPalabra(arrayPalabra, pausa, i, callBack) {
    //console.log(arrayPalabra.length)
    if(arrayPalabra.length == i){
        console.log(`Se mostrarón ${i} palabras`);
        clearTimeout();
    }
    else{
        setTimeout(()=>{
            callBack(arrayPalabra[i]);
            muestraPalabra(arrayPalabra, pausa, i+1, callBack);
        }, pausa)
    }

}

const recorreFrase = (frase, pausa) => {
    let palabras = frase.split(' ');
    muestraPalabra(palabras, pausa, 0, (e) =>{
        console.log(e)
    });
    //setTimeout(muestraPalabra(palabras), 1000);
}

recorreFrase('Esta es una frase de prueba', 3000);
