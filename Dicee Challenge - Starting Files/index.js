var randomNumber1= Math.floor(Math.random()*6 )+1;
console.log(randomNumber1);

var randomNumber2= Math.floor(Math.random()*6 )+1;
console.log(randomNumber2);

var randomDice="dice"+ randomNumber1 +".png";
var randomImage="images/"+ randomDice;
var image1=document.querySelectorAll("img")[0];  //OR var image1=document.querySelector("img");
image1.setAttribute("src",randomImage);

var randomDice="dice"+ randomNumber2 +".png";
var randomImage="images/"+ randomDice;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage);

if(randomNumber1 > randomNumber2)
{
    var heading = document.querySelector("h1").innerHTML="Player 1 won!";
}
else if(randomNumber1 < randomNumber2)
{
    var heading = document.querySelector("h1").innerHTML="Player 2 won!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}
