import { Animal} from './Animal.js';
export class Fish extends Animal{
constructor(animalName,img){
super(animalName);
this.img="fish.jpg";
}
draw(){
    super.draw(this.img);
    }get Img(){
        return this.img;}

get animalName1(){
    return this.animalName;}get animalName1(){
        return this.animalName;}set Img(img){
            this.img=img;
        }
}