var sound = new jAudio();
var drum = [];

// drum['KeyA'] = new jAudio('http://www.soundjig.com/mp3/soundfx/drumkits/SD0010.mp3');
// drum['KeyS'] = new jAudio('http://www.soundjig.com/mp3/soundfx/drumkits/BD0000.mp3');
// drum['KeyJ'] = new jAudio('http://www.soundjig.com/mp3/soundfx/drumkits/CH.mp3');

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
