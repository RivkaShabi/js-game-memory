import { Animal} from './Animal.js';
export class Snake extends Animal{
constructor(animalName,img){
super(animalName);
this.img="snake.jpg";
}
draw(){
    super.draw(this.img);
    }
    get Img(){
        return this.img;}get animalName1(){
            return this.animalName;}set Img(img){
                this.img=img;
            }
}