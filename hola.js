const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
  'Estas segura?',
  'Piensalo bien wapa',
  'Amor :(',
  'Porfas...',
  'Mira el otro botón esta mas bonito...',
  'No me hagas esto',
  'No me dejes solo',
  'Yo te protegere hasta el fin del mundo'
]

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})
document.addEventListener("DOMContentLoaded", function () {
  
  const audio = new Audio("./Audio/Alvaro Diaz - Yoko (Official Video).mp3"); 
  
  audio.loop = true; 
  audio.volume = 0.1;
  
  audio.play().catch(() => {
      console.log("El navegador bloqueó la reproducción automática.");
  });

  
  document.addEventListener("click", () => {
      audio.play();
  }, { once: true }); 
});
