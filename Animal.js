export class Animal{
    constructor(animalName){
        this.animalName=animalName;
    }
    get conpare(){
        return this.animalName;
    } 
   draw(img){
            const card = document.querySelector('#card');
             var creatImg = document.createElement("IMG");
             creatImg.setAttribute("src", img);
             creatImg.setAttribute("width", "100");
             creatImg.setAttribute("height", "100");
          
             card.appendChild(creatImg);
        
      }
          
   }
