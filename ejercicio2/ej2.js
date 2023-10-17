function generaAleatorio(min, max) {

    return Math.round(Math.random() * (max - min + 1) + min);
}

function generaNAleatorios(cantidad, min, max){
    var numerosAleatorios = [];
    for (let i = 0; i < cantidad; i++) {
        numerosAleatorios.push(generaAleatorio(min, max));
    }
    return numerosAleatorios;
    
}