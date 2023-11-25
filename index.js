var randomnum1 = Math.floor(Math.random() * 6) + 1;
var randomnum2 = Math.floor(Math.random() * 6) + 1;


function changeImage(myImage, newSrc) {
    var image = document.querySelector(myImage);
    image.src = newSrc;
  }
function newImage(num){
    var newImage = "images/dice" + num + ".png";
    return newImage;
}

changeImage(".img1", newImage(randomnum1));
changeImage(".img2", newImage(randomnum2));

if (randomnum1 > randomnum2){
    var newText = document.querySelector(".container > :first-child").textContent = "Player 1 Wins"
}

else if (randomnum1 < randomnum2){
    var newText = document.querySelector(".container > :first-child").textContent = "Player 2 Wins"
}

else {
    var newText = document.querySelector(".container > :first-child").textContent = "Draw"
}
