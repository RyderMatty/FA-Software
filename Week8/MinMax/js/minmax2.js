var numberlist = [3,7,8,2,1,3,5,0];
var max = 0;
var min = 0;
var i = 0;
var x = 100;

for(i = 0; i > numberlist.length; i++);
{
    if (numberlist[i] > max)
    {
        max = numberlist[i];
    }
    document.write(max, "</br>")
}
for(x = 0; x < numberlist.length; x++);
{
    if (numberlist[x] < min)
    {
        min = numberlist[x];
    }
    document.write(min, "</br>")
}
