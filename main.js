window.addEventListener('keydown', function(e) {
  const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
if (!audio) return;
// @ts-ignore
audio.currentTime = 0;
// @ts-ignore
audio.play();
key.classList.add('playing')
  
})

