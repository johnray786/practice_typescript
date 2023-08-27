"use strict";
// let lifespan : number | "zinda" | "nikal lia";
// lifespan = 55
// lifespan = "nikal lia"
// console.log(lifespan);// this will print nikal lia as that is the type & value of lifespan
// lifespan = true // shows error as the boolean value is not assignable to lifespan only number, zinda or nikal lia
// let specifiJuned : "Juned";
// specifiJuned = "Juned";
// console.log(specifiJuned);
// specifiJuned = "zara"; // this shows error of zara cant be assigned to type Juned
// let newChild = Math.random()>0.5? "Hussain" : undefined;
// console.log(newChild);
// let dentist = Math.random()> 0.5 ? "Laila" : undefined;
// dentist && console.log(dentist.toLocaleUpperCase()); // logical operator && performs truthiness check
// //just like if statement
// dentist? console.log(dentist.toLocaleUpperCase()): console.log(dentist); // logical operator ? : performs
// // truthiness check just like if else statement
// if (dentist){
//     console.log(dentist.toLocaleUpperCase);
// }
// else{
//     console.log("dentist may be undefined");
// }
// let teacher = Math.random()> 0.5 && "Juned";
// if (teacher){
//     console.log(teacher);
// }
// else{
//     console.log(teacher);
// }
// practice objects
let students = {
    sName: { firstName: "John", lastName: "Ray" },
    sDOB: "04/03/1985",
    sClass: "KG",
    pName: "John the second"
};
console.log(students.sName.firstName);
let rehman;
rehman = {
    fName: "Juned",
    lName: "Bhatti",
    profession: "coder",
    noOfChild: 1
};
console.log(rehman.profession);
const pooraName = { pahlaName: "zahra", akhriName: "rehman" };
let PName = pooraName;
let Aname = pooraName;
console.log(PName, "", Aname);
