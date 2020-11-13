function FindBiggestFraction(a,b)
{
    var result;

    if (a>b)
    {
        result = ["firstfrac", a];
    }
    else if (a<b)
    {
        result = ["firstfrac", b];
    }
    else
    {
        result = ["They are equal in size",a+" = "+b];
    }

    return result;
}

function displayResult(newResult)
{
    document.write(newResult)
}

var firstfrac = 1/2;
var secondfrac = 2/3; /*second fraction should be bigger*/

var fractionResult = FindBiggestFraction(firstfrac,secondfrac);
displayResult(fractionResult);
