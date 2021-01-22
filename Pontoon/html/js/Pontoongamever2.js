var house = 18;
var card1 = 0;
var card2 = 0;
var card3 = 0;
var card4 = 0;
var card5 = 0;
var counter = 0;

function Startgame() //Displays first two cards and adds them together ##with counter##
{
    card1 = Math.floor(Math.random()*11);
    card2 = Math.floor(Math.random()*11);
    document.getElementById("play1").innerHTML = ("Your first card is " + card1);
    document.getElementById("play2").innerHTML = ("Your second card is " + card2);

    player = card1 + card2
    document.getElementById("total").innerHTML = ("Your total is " + player)

    counter = counter + 2
    document.getElementById("counter").innerHTML = ("You have used " + counter + " cards");
    return card1, card2, player,counter;
}

card1,card2,player,counter = Startgame();
