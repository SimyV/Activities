"use strict";

const textChange = document.querySelector(".name");
const imageChange = document.querySelector(".dice");
const newGame = document.querySelector(".btn--new");
const generateActivity = document.querySelector(".btn--roll");
const finish = document.querySelector(".btn--hold");
const diceEl = document.querySelector(".dice");

//Starting conditions
diceEl.classList.add("hidden");

let newImage;
const currentActivity = [
  "We're going to a brewery!",
  "We're going ice skating!",
  "We're going to see live music!",
  "We're going to watch netflix!",
  "We're going to a winery!",
  "We're going to play squash!",
  "Watch the sunset at the beach with champs!",
  "We're going to draw self portraits of each other!",
  "We're going to make a large painting!",
  "We're going to make a full vegan meal!",
  "We're going to play finska at the park!",
  "We're going to go go-karting!",
  "We're going to give a head massage to each other!",
  "We're going to master one move of acroyoga!",
  "We're going to go to a $2m house auction!",
  "We're going to try a learn to code game - see who wins!",
  "We're going to go to prestons pizza!",
  "We're going to go on a hot air balloon!",
  "We're going to slow cook a beef rendang!",
  "We're going to go climb 1000 steps!",
  "We're going to find a cooking class and sign up!",
  "Pick a random country and cook something from it!",
  "We're going to book Mornington hot springs!",
  "We're going to try slacklining!",
  "We're going to our favourite restaraunt!",
  "We're going to Great Otway National Park!",
  "We're going to go to the graffiti lanes of Melbourne!",
  "We're going to go to the driving range!",
  "We're going to give each other a massage for 5 songs!",
  "We're going to go to Amiconis!",
  "We're going to do a boxing circuit!",
  "We're going to download Pokemon Go and find Pokemon!",
  "We're going to Halls Gap!",
  "We're going to find a meetup tonight and go!",
  "We're going to go kite surfing!",
  "We're going to build a sand castle at the beach!",
  "We're going to complete a course on Udemy together!",
  "We're going to go hike Mount Bogong!",
  "We're going to go Paragliding!",
  "We're going to go to gaming bar in the city!",
  "🎉 Enjoy your activity!!! 🎉",
];

const init = function () {
  textChange.textContent = "What fun activity are we doing today?";
  diceEl.classList.add("hidden");
};

generateActivity.addEventListener("click", function () {
  newImage = Math.trunc(Math.random() * currentActivity.length) + 1;

  imageChange.classList.remove("hidden");
  imageChange.src = `images/image-${newImage}.png`;

  // Figure out if you can loop this
  if (newImage === 1) {
    document.getElementById((textChange.textContent = currentActivity[0]));
  } else if (newImage === 2) {
    document.getElementById((textChange.textContent = currentActivity[1]));
  } else if (newImage === 3) {
    document.getElementById((textChange.textContent = currentActivity[2]));
  } else if (newImage === 4) {
    document.getElementById((textChange.textContent = currentActivity[3]));
  } else if (newImage === 5) {
    document.getElementById((textChange.textContent = currentActivity[4]));
  } else if (newImage === 6) {
    document.getElementById((textChange.textContent = currentActivity[5]));
  } else if (newImage === 7) {
    document.getElementById((textChange.textContent = currentActivity[6]));
  } else if (newImage === 8) {
    document.getElementById((textChange.textContent = currentActivity[7]));
  } else if (newImage === 9) {
    document.getElementById((textChange.textContent = currentActivity[8]));
  } else if (newImage === 10) {
    document.getElementById((textChange.textContent = currentActivity[9]));
  } else if (newImage === 11) {
    document.getElementById((textChange.textContent = currentActivity[10]));
  } else if (newImage === 12) {
    document.getElementById((textChange.textContent = currentActivity[11]));
  } else if (newImage === 13) {
    document.getElementById((textChange.textContent = currentActivity[12]));
  } else if (newImage === 14) {
    document.getElementById((textChange.textContent = currentActivity[13]));
  } else if (newImage === 15) {
    document.getElementById((textChange.textContent = currentActivity[14]));
  } else if (newImage === 16) {
    document.getElementById((textChange.textContent = currentActivity[15]));
  } else if (newImage === 17) {
    document.getElementById((textChange.textContent = currentActivity[16]));
  } else if (newImage === 18) {
    document.getElementById((textChange.textContent = currentActivity[17]));
  } else if (newImage === 19) {
    document.getElementById((textChange.textContent = currentActivity[18]));
  } else if (newImage === 20) {
    document.getElementById((textChange.textContent = currentActivity[19]));
  } else if (newImage === 21) {
    document.getElementById((textChange.textContent = currentActivity[20]));
  } else if (newImage === 22) {
    document.getElementById((textChange.textContent = currentActivity[21]));
  } else if (newImage === 23) {
    document.getElementById((textChange.textContent = currentActivity[22]));
  } else if (newImage === 24) {
    document.getElementById((textChange.textContent = currentActivity[23]));
  } else if (newImage === 25) {
    document.getElementById((textChange.textContent = currentActivity[24]));
  } else if (newImage === 26) {
    document.getElementById((textChange.textContent = currentActivity[25]));
  } else if (newImage === 27) {
    document.getElementById((textChange.textContent = currentActivity[26]));
  } else if (newImage === 28) {
    document.getElementById((textChange.textContent = currentActivity[27]));
  } else if (newImage === 29) {
    document.getElementById((textChange.textContent = currentActivity[28]));
  } else if (newImage === 30) {
    document.getElementById((textChange.textContent = currentActivity[29]));
  } else if (newImage === 31) {
    document.getElementById((textChange.textContent = currentActivity[30]));
  } else if (newImage === 32) {
    document.getElementById((textChange.textContent = currentActivity[31]));
  } else if (newImage === 33) {
    document.getElementById((textChange.textContent = currentActivity[32]));
  } else if (newImage === 34) {
    document.getElementById((textChange.textContent = currentActivity[33]));
  } else if (newImage === 35) {
    document.getElementById((textChange.textContent = currentActivity[34]));
  } else if (newImage === 36) {
    document.getElementById((textChange.textContent = currentActivity[35]));
  } else if (newImage === 37) {
    document.getElementById((textChange.textContent = currentActivity[36]));
  } else if (newImage === 38) {
    document.getElementById((textChange.textContent = currentActivity[37]));
  } else if (newImage === 39) {
    document.getElementById((textChange.textContent = currentActivity[38]));
  } else if (newImage === 40) {
    document.getElementById((textChange.textContent = currentActivity[39]));
  }
});

finish.addEventListener("click", function () {
  if (finish) {
    document.getElementById((textChange.textContent = currentActivity[40]));
  }
});

newGame.addEventListener("click", init);
