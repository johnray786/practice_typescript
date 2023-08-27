import { addition } from "./addition.js";
import { substraction } from "./substraction.js";
import { multiplication } from "./multiplication.js";
import { division } from "./division.js";
import { remainder } from "./remainder.js";
import inquirer from "inquirer";
import Choices from "inquirer/lib/objects/choices.js";
import { Validator } from "inquirer";


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
        type: "checkbox",
        name: "ops",
        message: "Select Calculation:",
        choices : ["+","-","*","/","%"],
                
    }
  
]);
if (answers.ops ==="+"){
    addition(answers.input1,answers.input2,answers.ops);
    }
else if (answers.ops ==="-") {
    substraction(answers.input1,answers.input2,answers.ops);
    }
else if (answers.ops ==="*") {
        multiplication(answers.input1,answers.input2,answers.ops);
        }    
else if (answers.ops === "/"){
        division(answers.input1,answers.input2,answers.ops);
    }
else{
    remainder(answers.input1,answers.input2,answers.ops);
}
