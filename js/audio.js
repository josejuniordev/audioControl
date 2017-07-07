var jAudio = function(url){
  var that = this;
  that.active = true;
  that.soundUrl = url || "https://www.soundjay.com/button/sounds/beep-01a.mp3";
  that.sound = {};

  that.__init = function(){
    that.createSound();
  }

  that.setUrl = function(url) {
    if (!url) {
      return false;
    }

    that.stopSound();
    that.sound.setAttribute('src', url);
  }

  that.createSound = function(){
    that.sound = new Audio(that.soundUrl);
  }

  that.playSound = function(){
    that.stopSound();

    if (!that.active) {
      return false;
    }

    that.sound.play();
  }

  that.stopSound = function() {
    that.sound.pause();
    that.sound.currentTime = 0;
  }

  that.__init();
}