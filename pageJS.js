import { AnimalArray } from './AnimalArray.js';
import { Card } from './Card.js';
let body = document.querySelector('body');
const n1 = document.getElementById("n");
n1.style.visibility = "hidden";
n1.innerHTML = "נסה שנית";
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
let str = localStorage.getItem("numTime");

if (str == null)
  localStorage.setItem("numTime", 0);
else {
  localStorage.setItem("numTime", Number(str) + 1);
  str = localStorage.getItem("numTime");
  if (str % 5 == 0) {
    body.style.backgroundColor = getRandomColor();
  }
  
}
const mark = document.getElementById("mark");
let e = new Card();
const start = document.getElementById("startPlay");
start.addEventListener('click', play);
let a = new AnimalArray();
let card;
let x = a.animalArray.length;
let cnt = 0;
function play() {
  start.style.visibility = "hidden";
  arrangeCard();
  var btn
  for (let i = 0; i < x; i++) {

    btn = document.createElement("img");
    card = document.querySelector('#card');
    btn.style.width = "120px";
    btn.style.height = "120px";
    btn.style.margin = "10px";
    btn.src = "תמונת-רקע-לאתר.jpg";
    card.appendChild(btn);
    btn.className = a.animalArray[i].animalName1;
    btn.setAttribute("id", i);
    console.log(btn.id);
    btn.addEventListener('click', check);
  }
}
let t;
let w;
let n = 0;
function check($event) {
  if (cnt == 0) {
    t = $event;
    e.cl($event);
  }
  else if (cnt == 1) {
    w = $event;
    e.cl($event);

    if (w.srcElement.className != t.srcElement.className) {
      n1.style.visibility = "visible";
      setTimeout(function () {
        t.path[0].attributes[0].nodeValue = "תמונת-רקע-לאתר.jpg"; w.path[0].attributes[0].nodeValue = "תמונת-רקע-לאתר.jpg"; cnt = 0; n1.style.visibility = "hidden";
      }, 1000)
    }
    else {

      n++;
      if (n < 6)
        mark.innerHTML = " :  מספר נצחונות" + n;
      else {
        mark.innerHTML = " !!כל הכבוד";
      }
      cnt = -1;
    }
  }

  cnt++;
}


//עירבוב רנדומלי של הכרטיסים
function arrangeCard() {
  a.animalArray.sort(() => 0.5 - Math.random())

}
