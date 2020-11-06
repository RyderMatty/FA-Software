var multiplyByNumber = parseInt(prompt('Select the times table you would like to see'));
var lengthOfTable = parseInt(prompt('How long should the table be?'));
var resultNumber = 0;
i = lengthOfTable;
while (i >= 0) {
    
    resultNumber = (multiplyByNumber) * (i);
    console.log(lengthOfTable)
    document.write(`${multiplyByNumber} x ${i} = ${resultNumber} <br>`);
    
    i--;
}