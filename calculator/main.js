import { addition } from "./addition.js";
import { substraction } from "./substraction.js";
import { multiplication } from "./multiplication.js";
import { division } from "./division.js";
import { remainder } from "./remainder.js";
import inquirer from "inquirer";

let answers = await inquirer.prompt([
    {
        type: "number",
        name: "input1",
        message: "Enter first Number:",
                
    },
    {
        type: "number",
        name: "input2",
        message: "Enter Second Number:"
    },
    {
        type: "input",
        name: "ops",
        message: "Enter Calculation +,-,*,/ or %:",
        
    }
]);
if (isNaN(answers.input1)||isNaN(answers.input2)){
    console.log("Invalid Input!");
    }
else {
        if (answers.ops === "+") {
            addition(answers.input1, answers.input2, answers.ops);
        }
        else if (answers.ops === "-") {
            substraction(answers.input1, answers.input2, answers.ops);
        }
        else if (answers.ops === "*") {
            multiplication(answers.input1, answers.input2, answers.ops);
        }
        else if (answers.ops === "/") {
            division(answers.input1, answers.input2, answers.ops);
        }
        else if (answers.ops === "%") {
            remainder(answers.input1, answers.input2, answers.ops);
        }
        else{
            console.log("Ivalid Operator!");
        }
}