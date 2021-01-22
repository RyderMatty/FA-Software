var house = 18;
var player = 0;
var card1 = 0;
var card2 = 0;
var card3 = 0;
var card4 = 0;
var card5 = 0;



function Startgame() //Displays first two cards and adds them together
{
    card1 = Math.floor(Math.random()*11);
    card2 = Math.floor(Math.random()*11);
    document.getElementById("play1").innerHTML = ("Your first card is " + card1);
    document.getElementById("play2").innerHTML = ("Your second card is " + card2);

    player = card1 + card2
    document.getElementById("total").innerHTML = ("Your total is " + player)

    return card1, card2, player;
}

card1,card2,player = Startgame();
