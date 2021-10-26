import { AnimalArray } from './AnimalArray.js';
export class Card {

  constructor() {
  }

  cl($event) {
    // console.log($event);
    let x = new AnimalArray();
    //  console.log($event.srcElement.className);
    for (let j = 0; j < x.animalArray.length; j++) {
      if (x.animalArray[j].animalName1 == $event.srcElement.className) {

        $event.path[0].attributes[0].nodeValue = x.animalArray[j].Img;
      }
    }

  }
}