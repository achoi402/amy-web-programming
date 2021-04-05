let string =
  "either a mother and daughter know each other very well or they are strangers"
let stringArray = string.split(" ");

let caption = "don't you remember the words? find them again.";

// var audio = new Audio("seoul.mp3");


// document.onmousemove = function() {
//   audio.play();
// }





console.log(stringArray);
var newdiv;
for (let i = 0; i < stringArray.length; i++) {
  let newdiv = document.createElement("div");

  newdiv.innerHTML = stringArray[i];

  newdiv.classList.add("wordItem");
  $("h1").click(function() {
newdiv.style.top = getRandomNumber(200, window.innerHeight-200) + "px";
    newdiv.style.left = getRandomNumber(0, window.innerWidth-200) + "px";
});
  
  newdiv.style.top = getRandomNumber(200, window.innerHeight-200) + "px";
    newdiv.style.left = getRandomNumber(0, window.innerWidth-200) + "px";
  // newdiv.style.top = getRandomNumber(200, window.innerHeight) + "px";
  // newdiv.style.right = getRandomNumber(100, window.innerWidth) + "px";
  // newdiv.style.right = getRandomNumber(-100,window.innerWidth) + "px";
  
  document.body.appendChild(newdiv);
  
   newdiv.onclick = () => {
      newdiv.classList.toggle("clicked");
    };
}
  
// animation(newdiv);
//   }


let todo = document.getElementById("todo");
  console.log (todo);

 $("h1").click(function() {
   todo.innerHTML = caption;

 })


// function animation(element){
//     for (let i = 0; i<1000; i++){
//     $(element).animate({left: '+='+getRandomJiggle(), top: '-='+getRandomJiggle()}, 200);
//     $(element).animate({left: '-='+getRandomJiggle(), top: '+='+getRandomJiggle()}, 200);
//   }

// }

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}



// function getRandomJiggle() {
//   return Math.random() * 0.5 + "px";
// }





