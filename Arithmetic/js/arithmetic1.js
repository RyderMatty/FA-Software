var num1 = 0
var num2 = 0
var sum = 0

num1 = parseInt(prompt("Please enter your first number:"));
num2 = parseInt(prompt("Please enter your second number:"));

if (num1 < 0)
    num1 = parseInt(prompt("Please enter your first number:"));

if (num2 < 0)
    num2 = parseInt(prompt("Please enter your first number:"));

sum = num1 + num2

document.write(num1, "+" ,num2, "=",sum)