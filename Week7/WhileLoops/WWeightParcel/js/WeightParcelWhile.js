var userNum = 0;
var Total = 0;
var i = 0;

while (i <= 2)
    {
        i = i + 1;
        userNum = parseInt(prompt("Input the weight of your parcels"));
        Total = Total + userNum;
        document.write("The weight is " + Total);
        document.write("<br>");
    }