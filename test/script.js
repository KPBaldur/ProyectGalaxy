// Obtén la referencia al elemento de la caja
const caja = document.getElementById('caja');

// Posición inicial de la caja
let posX = 0;
let posY = 0;
const step = 10; // Cantidad de píxeles para mover la caja en cada paso

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
}

// Agrega un evento de escucha para las teclas de flecha
document.addEventListener('keydown', moverCaja);