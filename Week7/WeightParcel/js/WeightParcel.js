var userNum = 0
var Total = 0

for (i = 1; i <= 3; i++)
{
    userNum = parseInt(prompt("Input the weight of your parcels"))
    Total = Total + userNum
    document.write("The weight is " + Total)
    document.write("<br>")
}
