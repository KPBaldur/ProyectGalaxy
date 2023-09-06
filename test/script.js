// Obtén la referencia al elemento de la caja
const caja = document.getElementById('caja');
const proyectil = document.getElementById('proyectil');

// Posición inicial de la caja
let posX = 0;
let posY = 0;
const step = 10; // Cantidad de píxeles para mover la caja en cada paso

const proyectilSpeed = 5; // Velocidad del proyectil
let disparoActivo = false; // Variable para controlar si se puede disparar


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
  if (event.key.trim()=== 'Space' && !disparoActivo) {
    dispararProyectil();
  }
}

function dispararProyectil() {
  disparoActivo = true;
  proyectil.style.display = 'block';
  proyectil.style.left = posX + 'px';
  proyectil.style.top = posY + 'px';

  // Función para mover el proyectil
  function moverProyectil() {
    const proyectilX = parseInt(proyectil.style.left);
    proyectil.style.left = proyectilX + proyectilSpeed + 'px';

    // Verificar si el proyectil ha salido de la pantalla
    if (proyectilX > window.innerWidth) {
      proyectil.style.display = 'none';
      disparoActivo = false;
      clearInterval(intervaloProyectil);
    }
  }

  // Iniciar un intervalo para mover el proyectil
  const intervaloProyectil = setInterval(moverProyectil, 10);
}

// Agrega un evento de escucha para las teclas de flecha
document.addEventListener('keydown', moverCaja);