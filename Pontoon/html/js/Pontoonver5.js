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
    document.getElementById("total").innerHTML = ("Your total is " + playertotal);

    counter = counter + 2
    document.getElementById("counter").innerHTML = ("You have used " + counter + " cards");
    return counter,playertotal;
}


function Nextcard() //adds another card and adds up total #with counter#
{
    var card3 = 0; // local

    card3 = Math.floor(Math.random()*11);
    document.getElementById("play3").innerHTML = ("Your third card is " + card3); //works
    
    counter = counter + 1
    document.getElementById("counter").innerHTML = ("You have used " + counter + " cards");

    playertotal = playertotal + card3
    document.getElementById("total").innerHTML = ("Your total is " + playertotal);
    return counter, playertotal;
}

function Nextcard2() //adds another card and adds up total #with counter#
{
    var card4 = 0; // local

    card4 = Math.floor(Math.random()*11);
    document.getElementById("play4").innerHTML = ("Your forth card is " + card4);

    counter = counter + 1
    document.getElementById("counter").innerHTML = ("You have used " + counter + " cards");

    playertotal = playertotal + card4
    document.getElementById("total").innerHTML = ("Your total is " + playertotal);
    return counter, playertotal;
}

function Nextcard3() //adds another card and adds up total #with counter#
{
    var card5 = 0; // local

    card5 = Math.floor(Math.random()*11);
    document.getElementById("play5").innerHTML = ("Your fifth card is " + card5);

    counter = counter + 1
    document.getElementById("counter").innerHTML = ("You have used " + counter + " cards");

    playertotal = playertotal + card5
    document.getElementById("total").innerHTML = ("Your total is " + playertotal);
    return counter, playertotal;
}

function BustorScore(playertotal)
{
    if(playertotal > 17 && playertotal < 22)
        {
            document.getElementById("score").innerHTML = ("You have won.");
        }
            else
            {
                document.getElementById("score").innerHTML = ("You have lost.")
            }
    return
}

counter, playertotal = Startgame();
counter, playertotal = NextCard();
counter, playertotal = Nextcard2();
counter, playertotal = Nextcard3();
BustorScore(playertotal);
document.getElementById("counter").innerHTML = ("You have used " + counter + " cards"); // global

/*
    if (counter => 5);
        {
            document.write("You have no more cards")
        }

    if ((counter => 5) && (playertotal => 18) && (playertotal < 22));
        {
            document.getElementById("score").innerHTML = ("You have won.")
        } elseif;{ 
            (playertotal => 22);
            {
                document.getElementById("bust").innerHTML = ("You have lost.");
            }
        }
*/

