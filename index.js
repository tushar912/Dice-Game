var randomn1 = Math.floor(6*Math.random())+1;
var set1= "dice"+randomn1;
var set2="images/"+set1+".png"
document.querySelectorAll("img")[0].setAttribute("src",set2);
var randomn2 = Math.floor(6*Math.random())+1;
var set3= "dice"+randomn2;
var set4="images/"+set3+".png"
document.querySelectorAll("img")[1].setAttribute("src",set4);
if(randomn1>randomn2){
  document.querySelector("h1").innerHTML="PLAYER 1 WINS!!";
}
else if(randomn1<randomn2){
  document.querySelector("h1").innerHTML="PLAYER 2 WINS!!";
}
else {
  document.querySelector("h1").innerHTML="Draw";
}
