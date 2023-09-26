var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6)+1;
var me = ("./images/"+ randomNumber1 +".png");
you = document.querySelectorAll("img")[0];
you.setAttribute("src",me); 

var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6)+1;
var me2 = ("./images/"+ randomNumber1 +".png");
you2 = document.querySelectorAll("img")[1];
you2.setAttribute("src",me);