var audio = document.getElementById("myAudio");
audio.volume=0.1;

if (document.readyState === 'complete') {
  audio.play();
}

function toggleAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}


