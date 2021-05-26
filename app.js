"use strict";
const genBtn = document.getElementById("gen");
const showBtn = document.getElementById("show");
let password = document.getElementById("pass");

let numsNletters = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let specials = ["@", "#", "$", "%", "&", "?", "!"];

// random special signs
let specNum1;
let specNum2;
// random nums and letters
let numLetSum = "";
// final signs, nums and letters
let thePass;
// hiding show button
showBtn.style.visibility = "hidden";

let getSpecials = function () {
  specNum1 =
    specials[Math.floor(Math.random() * (specials.length - 1 - 0 + 1)) + 0];
  specNum2 =
    specials[Math.floor(Math.random() * (specials.length - 1 - 0 + 1)) + 0];
};

let getNumsNLetters = function () {
  numLetSum = "";
  for (let i = 0; i < 9; i++) {
    numLetSum +=
      numsNletters[
        Math.floor(Math.random() * (numsNletters.length - 1 - 0 + 1)) + 0
      ];
  }
};

let hidePass = function () {
  password.textContent = "**********";
};

let showPass = function () {
  password.style.display = "block";
};

let fullPass = function () {
  thePass = specNum1 + numLetSum + specNum2;
  password.textContent = thePass;
};

// final action
genBtn.onclick = function () {
  hidePass();
  getSpecials();
  getNumsNLetters();
  showBtn.style.visibility = "visible";
};

// show Password
showBtn.onclick = function () {
  fullPass();
  passErr();
};

// undeined pass error
function passErr() {
  if (thePass == "undefinedundefined") {
    password.textContent = "Click Generate!";
    password.style.color = "red";
  } else {
    password.style.color = "black";
  }
}
