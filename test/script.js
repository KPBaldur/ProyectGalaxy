// Obtén la referencia al elemento de la caja
const caja = document.getElementById('caja');
const proyectil = document.getElementById('proyectil');

// Posición inicial de la caja
let posX = 0;
let posY = 0;
const step = 10; // Cantidad de píxeles para mover la caja en cada paso

const proyectilSpeed = 5; // Velocidad del proyectil
let disparoActivo = false; // Variable para controlar si se puede disparar
let proyectiles = []; // Array para almacenar los proyectiles


// Función para mover la caja
function moverCaja(event) {
  if (event.key === 'ArrowUp') {
    posY -= step;
  } else if (event.key === 'ArrowDown') {
    posY += step;
  } else if (event.key === 'ArrowLeft') {
    posX -= step;
  } else if (event.key === 'ArrowRight') {
    posX += step;
  }

  // Actualiza la posición de la caja
  caja.style.left = posX + 'px';
  caja.style.top = posY + 'px';

  // Agregar lógica para disparar
  if (event.code === 'Space' && !disparoActivo) {
    dispararProyectil();
  }
}

function dispararProyectil() {
  disparoActivo = true;
  proyectil.style.display = 'block';
  proyectil.style.left = posX + 'px';
  proyectil.style.top = posY + 'px';
  // Crea un nuevo proyectil
  const nuevoProyectil = document.createElement('div');
  nuevoProyectil.className = 'proyectil';
  document.body.appendChild(nuevoProyectil);

  // Función para mover el proyectil
  function moverProyectil() {
    const proyectilX = parseInt(proyectil.style.left);
    proyectil.style.left = proyectilX + proyectilSpeed + 'px';

     // Verifica si el proyectil ha salido de la pantalla
     if (proyectilX > window.innerWidth) {
      nuevoProyectil.style.display = 'none';
      proyectiles.shift(); // Elimina el proyectil del array
      clearInterval(intervaloProyectil);
    }
  }

  // Establece la posición inicial del proyectil
  const proyectilX = posX;
  const proyectilY = posY;
  nuevoProyectil.style.left = proyectilX + 'px';
  nuevoProyectil.style.top = proyectilY + 'px';

    // Agrega el proyectil al array de proyectiles
    proyectiles.push(nuevoProyectil);

  // Iniciar un intervalo para mover el proyectil
  const intervaloProyectil = setInterval(moverProyectil, 10);
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    posY -= step;
  } else if (event.key === 'ArrowDown') {
    posY += step;
  } else if (event.key === 'ArrowLeft') {
    posX -= step;
  } else if (event.key === 'ArrowRight') {
    posX += step;
  } else if (event.code === 'Space') {
    dispararProyectil();
  }

  // Actualiza la posición de la caja
  caja.style.left = posX + 'px';
  caja.style.top = posY + 'px';
});






// Agrega un evento de escucha para las teclas de flecha
document.addEventListener('keydown', moverCaja);