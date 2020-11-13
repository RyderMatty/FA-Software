function FindBiggestFraction(a,b)
{
    var result;

    if (a>b)
    {
        result = ["firstFraction", a];
    }
    else if (a<b)
    {
        result = ["firstfraction", b];
    }
    else
    {
        result = "equal";
    }
    return result;
}

var firstfrac = 1/2;
var secondfrac = 2/3; /*second fraction should be bigger*/

var fractionResult = FindBiggestFraction(firstfrac,secondfrac);

document.write (fractionResult)
document.write(result)


