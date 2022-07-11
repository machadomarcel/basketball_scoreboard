let scoreBoard1 = document.getElementById("scoreboard-1");
let homeCount = 0;
let scoreBoard2 = document.getElementById("scoreboard-2");
let guestCount = 0;

function addonepoint() {
  homeCount = homeCount + 1;
  scoreBoard1.innerText = homeCount;
}
function addtwopoint() {
  homeCount = homeCount + 2;
  scoreBoard1.innerText = homeCount;
}

function addthreepoint() {
  homeCount = homeCount + 3;
  scoreBoard1.innerText = homeCount;
}

function addonepointguest() {
  guestCount = guestCount + 1;
  scoreBoard2.innerText = guestCount;
}
function addtwopointguest() {
  guestCount = guestCount + 2;
  scoreBoard2.innerText = guestCount;
}

function addthreepointguest() {
  guestCount = guestCount + 3;
  scoreBoard2.innerText = guestCount;
}
