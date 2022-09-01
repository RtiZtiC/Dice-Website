
var randomNum1=Math.floor(Math.random()*6)+1;
var randomNum2=Math.floor(Math.random()*6)+1;

if (randomNum1>randomNum2)
{
  document.querySelector("h1").textContent="Player 1 Wins🚩"
}
else if (randomNum2>randomNum1)
{
  document.querySelector("h1").textContent="Player 2 Wins🚩"
}
else
{
  document.querySelector("h1").textContent="🚩Draw🚩"
}
var pth1="images/"+"dice"+randomNum1+".png";
var pth2="images/"+"dice"+randomNum2+".png";


var im1=document.querySelector(".img1");
im1=im1.setAttribute("src",pth1);
var im2=document.querySelector(".img2");
im2=im2.setAttribute("src",pth2);
