var counter = 0; // global
var playertotal = 0; //global

function Startgame() //Displays first two cards and adds them together ##with counter##
{
    //var playertotal = 0; //local
    var card1 = 0; //local
    var card2 = 0; //local

    card1 = Math.floor(Math.random()*11);
    card2 = Math.floor(Math.random()*11);
    document.getElementById("play1").innerHTML = ("Your first card is " + card1);
    document.getElementById("play2").innerHTML = ("Your second card is " + card2);

    playertotal = card1 + card2
    document.getElementById("total").innerHTML = ("Your total is " + playertotal)

    counter = counter + 2
    document.getElementById("counter").innerHTML = ("You have used " + counter + " cards");
    return counter,playertotal;
}


function Nextcard() //adds another card #with counter# with local variables
{
    var card3 = 0; // local

    card3 = Math.floor(Math.random()*11);
    document.getElementById("play3").innerHTML = ("Your third card is " + card3); //works
    
    counter = counter + 1
    document.getElementById("counter").innerHTML = ("You have used " + counter + " cards");

    playertotal = playertotal + card3
    document.getElementById("total").innerHTML = ("Your total is " + playertotal)
    return counter;
}


counter, playertotal = Startgame();
counter = NextCard();
document.getElementById("counter").innerHTML = ("You have used " + counter + " cards"); // global
