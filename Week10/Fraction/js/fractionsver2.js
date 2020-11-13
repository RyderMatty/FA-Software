function FindBiggestFraction(a,b)
{
    if (a>b)
    {
        document.write("a :" + a);
    }
    else if (a<b)
    {
        document.write("b :" + b);
    }
    else
    {
        document.write("These fractions are equal.");
    }
}
var firstfrac = 1/2;
var secondfrac = 2/3; /*second fraction should be bigger*/
FindBiggestFraction(firstfrac,secondfrac);

