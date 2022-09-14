let ataqueJugador
let ataqueEnemigo
let vidaJugador = 3
let vidaEnemigo = 3

function iniciarJuego() {
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'
    
    let inputAcuasaurus = document.getElementById('acuasaurus')
    let inputTerracota = document.getElementById('terracota')
    let inputPyroman = document.getElementById('pyroman')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputAcuasaurus.checked) {
        spanMascotaJugador.innerHTML = "Acuasaurus"
    } else if (inputTerracota.checked) {
        spanMascotaJugador.innerHTML = "Terracota"
    } else if (inputPyroman.checked) {
        spanMascotaJugador.innerHTML = "Pyroman"
    } else {
        alert("Selecciona una mascota")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if(mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Acuasaurus'
    } else if(mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Terracota'
    } else {
        spanMascotaEnemigo.innerHTML = 'Pyroman'
    }
}

function ataqueEnemigoAleatorio() {
    let ataqueAleatorio = aleatorio(1, 3)

    if(ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if(ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate() {
    let spanVidaJugador = document.getElementById('vida-jugador')
    let spanVidaEnemigo = document.getElementById('vida-enemigo')

    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidaEnemigo--
        spanVidaEnemigo.innerHTML = vidaEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidaEnemigo--
        spanVidaEnemigo.innerHTML = vidaEnemigo
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidaEnemigo--
        spanVidaEnemigo.innerHTML = vidaEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidaJugador--
        spanVidaJugador.innerHTML = vidaJugador
    }

    revisarVidas()


}

function revisarVidas() {
    if(vidaEnemigo == 0){
        crearMensajeFinal("¡FELICITACIONES, GANASTE!")
    } else if (vidaJugador == 0) {
        crearMensajeFinal("¡PERDISTE, TU MASTOCA NO PUEDE CONTINUAR!")
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado')

    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueEnemigoAleatorio()
}

function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueEnemigoAleatorio()
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueEnemigoAleatorio()
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)