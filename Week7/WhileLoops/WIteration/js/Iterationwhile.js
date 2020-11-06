var userNum = 0
var Total = 0
var Average = 0

while (userNum <= 5)
{
    userNum = parseInt(prompt("Input your numbers"))
    Total = Total + userNum
    document.write("The number is " + Total)
    document.write("<br>")
}

Average = Total/i
document.write("Average =" + Average)