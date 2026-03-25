const lluviaBtn = document.querySelector('#lluviaBtn');
const petalos = document.querySelector('#petalos');

function crearPetalo() {
  const petalo = document.createElement('span');
  petalo.className = 'petal';
  petalo.textContent = '🌹';
  petalo.style.left = `${Math.random() * 100}vw`;
  petalo.style.animationDuration = `${4 + Math.random() * 4}s`;
  petalo.style.opacity = `${0.7 + Math.random() * 0.3}`;
  petalos.appendChild(petalo);

  setTimeout(() => {
    petalo.remove();
  }, 8500);
}

function lanzarLluvia(cantidad = 36, intervalo = 130) {
  let creados = 0;
  const timer = setInterval(() => {
    crearPetalo();
    creados += 1;
    if (creados >= cantidad) {
      clearInterval(timer);
    }
  }, intervalo);
}

lluviaBtn.addEventListener('click', () => {
  lanzarLluvia();
  lluviaBtn.textContent = 'ke tocas gordo';
});

window.addEventListener('load', () => {
  setTimeout(() => lanzarLluvia(20, 120), 500);
});
