
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!audio) return;
  // @ts-ignore
  audio.currentTime = 0;
  // @ts-ignore
  audio.play();
  key.classList.add('playing')
  
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing')
}

window.addEventListener('keydown', playSound)

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));