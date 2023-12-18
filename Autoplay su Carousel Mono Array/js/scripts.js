      let carouselcontainer = document.querySelector(".carousel_container");

//  carouselcontainer.innerHTML +=
//      `<div><img src="img/01.webp" alt=""></div>`;
//       console.log(carouselcontainer)

let imgItems = [
     'img/01.webp',
     'img/02.webp',
     'img/03.webp',
     'img/04.webp',
];
// console.log(imgItems)

let active = 0;

for (let i = 0 ; i < imgItems.length ; i++){
     carouselcontainer.innerHTML +=
     `<div class="specialclass"><img src="${imgItems[i]}" alt=""></div>`;
     
};
console.log(carouselcontainer)

let arrayClass = document.getElementsByClassName("specialclass");
arrayClass[active].classList.add('active');

const myTimeout = setInterval(myAutoCarousel, 3000);
function myAutoCarousel() {
    
        if (active == imgItems.length -1) {
           active = 0;
        } else {
           active++;
        }

        document.querySelector(".specialclass.active").classList.remove('active');
        arrayClass[active].classList.add('active');
    
}

function myStopFunction() {
   clearInterval(myTimeout);
}

// let right = document.querySelector(".rightarrow");
// let left = document.querySelector(".leftarrow");

// right.addEventListener("click", function(){

//      if (active == imgItems.length -1) {
//           active = 0;
//      } else {
//           active++;
//      }
 
//      document.querySelector(".specialclass.active").classList.remove('active');
//      arrayClass[active].classList.add('active');

// })

// left.addEventListener("click", function(){
     
//      if (active == 0) {
//           active = imgItems.length -1;
//      } else {
//           active--;
//      }

//      // active--; 
//      document.querySelector(".specialclass.active").classList.remove('active');
//      arrayClass[active].classList.add('active');
// })