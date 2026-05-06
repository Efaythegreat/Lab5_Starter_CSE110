// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const horn = document.getElementById('horn-select');
  // const h2 = document.querySelector("h2");
  const img = document.querySelector('#expose img');
  const volumeIcon = document.querySelector('#volume-controls img');
  const slider = document.getElementById('volume');
  const audio = document.querySelector('audio');
  const button = document.querySelector('button');

  horn.addEventListener('change', () => {
    img.src = `assets/images/${horn.value}.svg`;
    img.alt = `${horn.value} selected`;
    audio.src = `assets/audio/${horn.value}.mp3`;
    // h2 = `Expose - ${horn.value}`;
  })

  slider.addEventListener('input', () => {
    const vol = slider.value;
    audio.volume = vol / 100;

    if (vol == 0){
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume Level 0';
    }
    else if (vol >= 1 && vol < 33){
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume Level 1';
    }
    else if (vol >= 33 && vol < 67){
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume Level 2';
    }
    else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume Level 3';
    }
  })

  const confetti = new JSConfetti();
  button.addEventListener('click', () => {
    audio.play();
    if (horn.value === 'party-horn'){
      confetti.addConfetti();
    }
  })
}