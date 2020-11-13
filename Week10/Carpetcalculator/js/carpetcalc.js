/*Ask the user for length and width of the room, calculate the area, display how much carpet you need ###Use Functions####*/
var length = parseInt(prompt("What length is your room?"));
var width = parseInt(prompt("What is the width of your room?"));

function calcArea(length, width)
{
    var area = length * width
    return area
}

document.write("The length of your room is " + length + " and the width of your room is " + width);
document.write("</br>");
document.write("You will need " + area + " sqft of carpet to cover your room.");

area = calcArea(length , width)
