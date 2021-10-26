import { Animal} from './Animal.js';
export class Lion extends Animal{
constructor(animalName,img){
super(animalName);
this.img="lion.jpg";
}
draw(){
    super.draw(this.img);
    }get Img(){
        return this.img;}get animalName1(){
            return this.animalName;}set Img(img){
                this.img=img;
            }
}