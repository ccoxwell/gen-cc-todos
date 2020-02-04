let mushroom = new Audio("/assets/smb_powerup.wav");
let powerDown = new Audio("/assets/smb_pipe.wav");
let stageClear = new Audio("/assets/smb_stage_clear.wav");
let previousAudio = mushroom;
const styleSwitch = document.getElementById("switch-checkbox");
let isStudentStyleEnabled = false;

[mushroom, powerDown, stageClear].map(audio => audio.volume = 0.1);

document.addEventListener("DOMContentLoaded", setUpDOM);
styleSwitch.addEventListener("change", function() {
  console.log(this.checked);
  if (this.checked) {
    document.querySelector("html").classList.add("student");
  } else {
    document.querySelector("html").classList.remove("student");
  }
});

function setUpDOM() {
  let listItems = Array.from(document.querySelectorAll("#to-do-list li"));
  for (let i = 0; i < listItems.length; i++) {
    let listItem = listItems[i];
    // add unique ID attribute to each <li>
    listItem.setAttribute("id", `item-${i}`);
    // add click listener to toggle .complete class and play the appropriate music
    listItem.addEventListener("click", function(e) {
      // adds or removes .complete class to the <li> in question
      let isThisComplete = this.classList.toggle("complete");
      let completedItems = document.querySelectorAll(".complete").length;
      // if all items are complete, play victory music
      if (listItems.length == completedItems) {
        previousAudio.pause();
        previousAudio.currentTime = 0;
        stageClear.play();
        previousAudio = stageClear;
        confetti.start();
      } else { // otherwise ...
        if (isThisComplete) { // play powerup music 
          previousAudio.pause();
          previousAudio.currentTime = 0;
          mushroom.play();
          previousAudio = mushroom;
        } else { // play powerdown music
          previousAudio.pause();
          previousAudio.currentTime = 0;
          powerDown.play();
          previousAudio = powerDown;
          confetti.stop();
        }
      }
    });
  }
}

function toggleStyle() {
  const htmlEl = document.getElementsByTagName("html")[0];
  const checkbox = document.querySelector("#switch-checkbox");
  htmlEl.classList.toggle("student");
}