document.addEventListener("keydown", (event) => {
  if (event.code === "KeyA") {
    const boomAudio = document.getElementById("boom-audio");
    boomAudio.play();
  } else if (event.code === "KeyS") {
    const hihatAudio = document.getElementById("hihat-audio");
    hihatAudio.play();
  } else if (event.code === "KeyD") {
    const kickAudio = document.getElementById("kick-audio");
    kickAudio.play();
  } else if (event.code === "KeyF") {
    const openhatAudio = document.getElementById("openhat-audio");
    openhatAudio.play();
  } else if (event.code === "KeyG") {
    const boomAudio = document.getElementById("boom-audio");
    boomAudio.play();
  } else if (event.code === "KeyH") {
    const rideAudio = document.getElementById("ride-audio");
    rideAudio.play();
  } else if (event.code === "KeyJ") {
    const snareAudio = document.getElementById("snare-audio");
    snareAudio.play();
  } else if (event.code === "KeyK") {
    const tomAudio = document.getElementById("tom-audio");
    tomAudio.play();
  } else if (event.code === "KeyL") {
    const tinkAudio = document.getElementById("tink-audio");
    tinkAudio.play();
  }
});
