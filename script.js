var randomNumber1 = Math.floor(Math.random()*6 +1);
var randomNumber2 = Math.floor(Math.random()*6 +1);
randomimage1="images/dice" +  randomNumber1 + ".png";
randomimage2="images/dice" +  randomNumber2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src" , randomimage1);
document.querySelectorAll("img")[1].setAttribute("src" , randomimage2);
if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").textContent="Player 1 wins!";
}
else if(randomNumber1===randomNumber2)
{
    document.querySelector("h1").textContent="It's a tie!";
}
else{
    document.querySelector("h1").textContent="Player 2 wins!";
}