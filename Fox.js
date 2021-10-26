import { Animal} from './Animal.js';
import { AnimalArray } from './AnimalArray.js';
export class Fox extends Animal{
constructor(animalName,img){
super(animalName);
this.img="fox.jpg";
}
draw(){
    super.draw(this.img);
    }
    get Img(){
    return this.img;
} get animalName1(){
    return this.animalName;}set Img(img){
        this.img=img;
    }
}
