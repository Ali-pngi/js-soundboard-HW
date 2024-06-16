const getSoundPath = (soundId) => `./sounds/${soundId}.wav`;

const playAudio = (event) => {
  const button = event.target;
  const soundId = button.getAttribute('data-sound');
  const soundPath = getSoundPath(soundId);
  const audio = new Audio(soundPath);
  audio.play();
  console.log(`Playing sound: ${soundPath}`);
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.button');

  buttons.forEach(button => {
    button.addEventListener('click', playAudio);
  });
});