  'use strict';
var key, a, j, k;
a = document.getElementById('a');
j = document.getElementById('j');
k = document.getElementById('k');

document.onkeydown = function(e) {

  switch (e.keyCode) {
  case 65:
    key = 'snare';
    break;
  case 83:
    key = 'snare-kick';
    break;
  case 68:
    key = 68;
    break;
  case 70:
    key = 70;
    break;
  case 74:
    key = 'hihat';
    break;
  case 75:
    key = 'kick';
    break;
  }

  var snare =
  new Audio('Samples/snare-electro.mp3');
  var hihat =
  new Audio('Samples/cowbell-808.mp3');
  var kick =
  new Audio('Samples/kick-zapper.mp3');


  if (key == 'snare'){
    snare.play();
    snare.onplaying = function() {
      a.textContent = 'snare';
      a.style.backgroundColor = 'red';
    };
    snare.onended = function() {
      a.textContent = 'A';
      a.style.backgroundColor = 'grey';
    };
  } else if (key == 'hihat') {
    hihat.play();
    hihat.onplaying = function() {
      j.textContent = 'hi-hat';
      j.style.backgroundColor = 'red';
    };
    hihat.onended = function() {
      j.textContent = 'J';
      j.style.backgroundColor = 'grey';
    };
  } else if (key == 'kick') {
    kick.play();
    kick.onplaying = function() {
      k.textContent = 'kick';
      k.style.backgroundColor = 'red';
    };
    kick.onended = function() {
      k.textContent = 'K';
      k.style.backgroundColor = 'grey';
    };
  } else if (key == 'snare-kick') {
    snare.play(); kick.play(); hihat.play();
  }

};

console.log(key);
