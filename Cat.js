import { Animal} from './Animal.js';
export class Cat extends Animal{
constructor(animalName,img){
super(animalName);
this.img="cat.jpg";
}
draw(){
super.draw(this.img);
}get Img(){
    return this.img;}
    set Img(img){
        this.img=img;
    }
    get animalName1(){
        return this.animalName;}
}