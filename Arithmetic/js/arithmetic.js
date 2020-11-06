var num1 = 0
var num2 = 0
var sum = 0
var dif = 0
var product = 0
var intquot = 0
var remainder = 0

num1 = parseInt(prompt("Please enter your first number:"));
num2 = parseInt(prompt("Please enter your second number:"));

sum = num1 + num2

dif = num1 - num2

product = num1 * num2

intquot = num1 / num2

remainder = intquot * num1 - num2
Math.round(remainder)

document.write(num1, "+" ,num2, "=" ,sum)
document.write("</br>")
document.write(num1,"-" ,num2, "=" ,dif)
document.write("</br>")
document.write(num1, "*" ,num2, "=" ,product)
document.write("</br>")
document.write(num1, "/" ,num2,"=" ,intquot)
document.write("</br>")
document.write(intquot, "*" ,num1, "-" ,num2, "=" ,remainder)
