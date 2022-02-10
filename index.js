var randomnumber1;
randomnumber1= Math.floor(Math.random() * 6) + 1;

var randomdiceimage = "dice" + randomnumber1 + ".png"; 
//console.log(randomdiceimage);

var randomimagesource = "images/" + randomdiceimage;
//console.log(randomimagesource);

var imagelost = document.querySelectorAll("img")[0];
imagelost.setAttribute("src",randomimagesource);

var randomnumber2 = Math.floor(Math.random() * 6) + 1;
var randomdiceimage2 = "dice" + randomnumber2 + ".png";
var randomimagesource2 = "images/" + randomdiceimage2;
var imagelost2 = document.querySelectorAll("img")[1];
imagelost2.setAttribute("src",randomimagesource2);


if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML=" 💥Player 1 wins the game";
}
else if(randomnumber2>randomnumber1)
{
    document.querySelector("h1").innerHTML= "💥Player 2 wins the game";
}
else{
    document.querySelector("h1").innerHTML= "🏌️‍♀️It's a Draw";
}