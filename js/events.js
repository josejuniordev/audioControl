var sound = new jAudio();

document.addEventListener('keydown', function(e) {
  console.log(e)
  var url = '';

  var keyCodes = {
    65: 'https://www.soundjay.com/button/sounds/beep-01a.mp3',
    83: 'https://www.soundjay.com/button/sounds/beep-02.mp3',
    68: 'https://www.soundjay.com/button/sounds/beep-04.mp3',
    70: 'https://www.soundjay.com/button/sounds/beep-05.mp3'
  }

  url = keyCodes[e.keyCode] || 'https://www.soundjay.com/button/sounds/beep-03.mp3';

  sound.setUrl(url);
  sound.playSound();
})