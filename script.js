

const txtGanadas = document.getElementById("ganadas");
const txtPerdidas = document.getElementById("perdidas");
const txtEmpatadas = document.getElementById("empatadas");

const txtResultado = document.querySelector(".txtResultado");
const txtStats = document.querySelector(".txtStats");

const objScore = {
    ganadas: 0,
    perdidas: 0,
    empatadas: 0,
    stats: {
        ai_piedra: 0,
        ai_papel: 0,
        ai_tijera: 0,
        user_piedra: 0,
        user_papel: 0,
        user_tijera: 0
    }
}

console.log("text body: ", document.body.innerText);

const jugar =(usuario) => {
    const jugadorAI = elegirJugadorAI();//AI elige le azar

    let resultado = '';

    // resultado del juego
    if (jugadorAI == usuario) {
        console.log('Empate');
        resultado = 'Empate';

    } else if (usuario == 'piedra') {

        if (jugadorAI == 'papel') {
            console.log('Perdiste');
            resultado = 'Perdiste';
        } else {
            console.log('Ganaste');
            resultado = 'Ganaste';
        }

    } else if (usuario == 'papel') {

        if (jugadorAI == 'tijera') {
            console.log('Perdiste');
            resultado = 'Perdiste';
        } else {
            console.log('Ganaste');
            resultado = 'Ganaste';
        }

    } else if (usuario == 'tijera') {

        if (jugadorAI == 'piedra') {
            console.log('Perdiste');
            resultado = 'Perdiste';
        } else {
            console.log('Ganaste');
            resultado = 'Ganaste';
        }
    }


    // Stats de los Jugadores
    if (usuario == 'piedra') { objScore.stats.user_piedra++; }
    if (usuario == 'papel') { objScore.stats.user_papel++; }
    if (usuario == 'tijera') { objScore.stats.user_tijera++; }
    if (jugadorAI == 'piedra') { objScore.stats.ai_piedra++; }
    if (jugadorAI == 'papel') { objScore.stats.ai_papel++; }
    if (jugadorAI == 'tijera') { objScore.stats.ai_tijera++; }

    // Score
    if (resultado == 'Empate') { objScore.empatadas++; }
    if (resultado == 'Perdiste') { objScore.perdidas++; }
    if (resultado == 'Ganaste') { objScore.ganadas++; }

    txtResultado.innerHTML = `<h1>${resultado}</h1>Tu has tirado <b>${usuario.toUpperCase()}</b> y la AI ha tirado <b>${jugadorAI.toUpperCase()}</b>.`;

    showScore();
}

function showScore() {

    txtGanadas.innerHTML = objScore.ganadas;
    txtPerdidas.innerHTML = objScore.perdidas;
    txtEmpatadas.innerHTML = objScore.empatadas;


    txtStats.innerHTML = `<p><h3>AI:</h3> ✊x${objScore.stats.ai_piedra} ✋x${objScore.stats.ai_papel} ✌x${objScore.stats.ai_tijera}</p>
                        <p><h3>Usuario:</h3> ✊x${objScore.stats.user_piedra} ✋x${objScore.stats.user_papel} ✌x${objScore.stats.user_tijera}</p>`;
    graficar();
}

function elegirJugadorAI() {
    const opciones = ['piedra', 'papel', 'tijera'];
    const numero = Math.floor(Math.random() * opciones.length);
    return opciones[numero];
}

function AIvsAI() {
    const opciones = ['piedra', 'papel', 'tijera'];

    setInterval(function () {
        const numero = Math.floor(Math.random() * opciones.length);
        const usuario = opciones[numero];
        jugar(usuario);
    }, 100);
    // const numero=Math.floor(Math.random()*3);
    // usuario=opciones[numero];
    // jugar(usuario);
}

function graficar() {
    const total = objScore.ganadas + objScore.perdidas;// +objScore.empatadas;
    const porcentajeGanadas = (objScore.ganadas / total) * 100;
    const porcentajePerdidas = (objScore.perdidas / total) * 100;
    //const porcentajeEmpatadas=(objScore.empatadas/total)*100;

    const divGanadas = document.querySelector("div>div:nth-child(1)");
    const divPerdidas = document.querySelector("div>div:nth-child(2)");

    divGanadas.innerHTML = "Ganadas: " + Math.round(porcentajeGanadas) + "%";
    divPerdidas.innerHTML = "Perdidas: " + Math.round(porcentajePerdidas) + "%";
    divGanadas.style.width = porcentajeGanadas + "%";
    divPerdidas.style.width = porcentajePerdidas + "%";
}


