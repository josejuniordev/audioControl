var sound = new jAudio();
var drum = [];

drum['KeyA'] = new jAudio('/sounds/snare.mp3');
drum['KeyS'] = new jAudio('/sounds/kick.mp3');
drum['KeyJ'] = new jAudio('/sounds/hithat.mp3');

document.addEventListener('keydown', function(e) {
  var url = '';

  sound = drum[e.code] || false;

  if (!sound) {
    return false;
  }

  sound.setUrl(url);
  sound.playSound();
})