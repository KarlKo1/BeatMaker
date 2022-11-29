class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.playBtn = document.querySelector(".play");
    this.index = 0;
    this.bpm = 150;
  }
  activePad() {
    this.classList.toggle("active");
  }
  repeat() {
    let step = this.index % 8;
    const activeBars = document.querySelectorAll(`.b${step}`);
    //Loop over the pads
    activeBars.forEach((bar) => {
      bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
      //Check if pads are active
      if (bar.classList.contains("active")) {
        //Check each sound
        if (bar.classList.contains("kick-pad")) {
          this.kickAudio.currentTime = 0; //currentTime sets audio back to the start(0)
          this.kickAudio.play();
        }
        if (bar.classList.contains("snare-pad")) {
          this.kickAudio.currentTime = 0;
          this.snareAudio.play();
        }
        if (bar.classList.contains("hihat-pad")) {
          this.kickAudio.currentTime = 0;
          this.hihatAudio.play();
        }
      }
    });
    this.index++;
  }
  start() {
    const interval = (60 / this.bpm) * 1000;
    //Use arrow function inside method's function
    //cuz otherwise it will grab window not repeat()
    setInterval(() => {
      this.repeat();
    }, interval);
  }
}

const drumKit = new DrumKit();

drumKit.pads.forEach((pad) => {
  pad.addEventListener("click", drumKit.activePad);
  pad.addEventListener("animationend", function () {
    this.style.animation = "";
  });
});

drumKit.playBtn.addEventListener("click", () => {
  drumKit.start();
});

//Dark Mode
let body = document.body;
let darkMode = document.querySelector("#dark-change");
darkMode.addEventListener("click", () => {
  darkMode.classList.toggle("active");
  body.classList.toggle("night");
});
