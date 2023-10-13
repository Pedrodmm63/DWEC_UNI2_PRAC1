var texto = prompt("Escriba aqui su texto");

function separarPalabras(texto) {
    
    var textoseparado = texto.split(" ");
    return textoseparado
}

/*separarPalabras(texto);*/

function girarPalabras(texto) {

    let resutltado = " ";
    for (let i = 0; i < texto.length; i++) {
        let textoseparado = texto[i].split("");
        let textogirado = textoseparado.reverse();
        let palabraInvertida = textogirado.join("");
        resutltado += palabraInvertida  + " "; 
    }
    return resutltado;
}
console.log(girarPalabras(separarPalabras(texto)));
