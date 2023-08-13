"use strict";
let input1 = prompt("Enter Number 1");
let input2 = prompt("Enter Number 2");
let operator = prompt("Select 1 option from + , - , * , / or %");
if (input1 !== null && input2 !== null && operator !== null) {
    let a = parseFloat(input1);
    let b = parseFloat(input2);
    if (!isNaN(a) && !isNaN(b)) {
        if (operator === "+") {
            console.log(`${input1} ${operator} ${input2} = `);
            console.log(a + b);
        }
        else if (operator === "-") {
            console.log(`${input1} ${operator} ${input2} = `);
            console.log(a - b);
        }
        else if (operator === "*") {
            console.log(`${input1} ${operator} ${input2} = `);
            console.log(a * b);
        }
        else if (operator === "/") {
            console.log(`${input1} ${operator} ${input2} = `);
            console.log(a / b);
        }
        else if (operator === "%") {
            console.log(`${input1} ${operator} ${input2} = `);
            console.log(a % b);
        }
        else {
            console.log(`Invalid Operator!`);
        }
    }
    else {
        console.log(`Invalid Input! Please enter valid numbers.`);
    }
}
else {
    console.log(`Wrong Input!`);
}
