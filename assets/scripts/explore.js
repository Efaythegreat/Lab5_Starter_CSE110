// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const synth = window.speechSynthesis;
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const button = document.querySelector('button');
  const faceImg = document.querySelector('img');

  let voices = [];
  function populateVoiceList() {
    voices = synth.getVoices();

    for (const voice of voices) {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;

      if (voice.default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener('click', () => {
    const utterThis = new SpeechSynthesisUtterance(textArea.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");

    for (const voice of voices) {
      if (voice.name === selectedOption) {
        utterThis.voice = voice;
      }
    }

    utterThis.addEventListener('start', () => {
      faceImg.src = 'assets/images/smiling-open.png';
    })

    utterThis.addEventListener('end', () => {
      faceImg.src = 'assets/images/smiling.png';
    })

    synth.speak(utterThis);

  })
}