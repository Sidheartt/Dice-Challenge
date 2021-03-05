var randomNumber1 = Math.floor(Math.random() * Math.floor(7))
 var randomDiceImage =  "dice" + randomNumber1 + ".png"
var randomImageSource = "images/" + randomDiceImage;

var randomNumber2 = Math.floor(Math.random() * Math.floor(7))
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"


var p1 = document.getElementsByClassName("img1")[0]
p1.src = randomImageSource

var p2 = document.getElementsByClassName("img2")[0]
p2.src = randomImageSource2


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
} else {
     document.querySelector("h1").innerHTML = "Its a Tie!"
}