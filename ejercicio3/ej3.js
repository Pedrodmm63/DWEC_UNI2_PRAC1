let equipos =["Alaves", "At. Madrid","Villareal", "Barcelona", "Real Madrid", "Sporting de Gijon", "Malaga", "Real Oviedo", "Sevilla", "Levante", "Valencia", "Betis", "Celta", "Atl.Bilbao", "Real Sociedad", "Rayo Vallecano", "Osasuna", "Mallorca", "Cádiz", "Granada"];
let simbolo = new Array("1", "x", "2");

function generarsimbolo() {
    const indiceAleatorio = Math.floor(Math.random() * 3);
    return simbolo[indiceAleatorio];
}
function muestraEquipos(equipos) {
    for (let i = 0; i < equipos.length; i++) {
        for(let j= 0; j<equipos[i].length; j++) {
            console.log(" " + equipos);
        }
    }
    console.log(equipos)
  }
  
  function generarResultados(quinielas) {
    for (let i = 0; i < quinielas.length; i++) {
      for (let j = 0; j < quinielas.length; j++) {
        if (i === j) {
          quinielas[i][j] = '-';
        } else {
          quinielas[i][j] = generarsimbolo();
        }
      }
    }
  }
  
  function quinielas(equipos) {
    var numEquipos = equipos.length;
  
    var tablaQuinielas = new Array(numEquipos);
    for (let i = 0; i < numEquipos; i++) {
      tablaQuinielas[i] = new Array(numEquipos).fill('-');
    }
  
    generarResultados(tablaQuinielas);
  
    console.log("Tabla de Quinielas:");
    console.table(tablaQuinielas);
  }
function equipoExiste(nombreEquipo, equipos) {
    for (let i = 0; i < equipos.length; i++) {
      if (equipos[i] === nombreEquipo) {
        return true; 
      }
    }
    return false; 
  }
  
  
  function muestraDatos(equipos, quinielas) {
    while (true) {
        let equipoLocal = prompt("Ingrese el nombre del equipo local:");

        if (!equipoExiste(equipoLocal, equipos)) {
            alert("Equipo local no encontrado. Intente de nuevo.");
            continue;
        }

        let equipoVisitante = prompt("Ingrese el nombre del equipo visitante:");

        if (!equipoExiste(equipoVisitante, equipos)) {
            alert("Equipo visitante no encontrado. Intente de nuevo.");
            continue;
        }

        const indiceLocal = equipos.indexOf(equipoLocal);
        const indiceVisitante = equipos.indexOf(equipoVisitante);

        if (indiceLocal >= 0 && indiceVisitante >= 0 && indiceLocal < quinielas.length && indiceVisitante < quinielas.length) {
            alert("Resultado del partido " + equipoLocal + " vs " + equipoVisitante + " : " + quinielas[indiceLocal][indiceVisitante]);
        } else {
            alert("Los resultados para este partido no están disponibles.");
        }

        let deseaConsultarOtro = confirm("¿Desea consultar otro partido?");
        if (!deseaConsultarOtro) {
            break;
        }
    }
}
muestraDatos(equipos, quinielas);
quinielas(equipos);

