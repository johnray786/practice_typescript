"use strict";
// // nested conditions..ticketing system
// let myCountry = prompt("What is your country?");
// let myAge = Number(prompt("What is your age?"));
// if (myCountry==="Pakistan"){
//     if (myAge >= 18){ 
//         console.log(`Here is your ticket`);
//     }
//     else{
//         console.log(`Age Barred!!`);
//     }
// }
// else {
//     console.log(`${myCountry} is not listed country!`);
// }
// generating random numbers to get a random response
// let myJob = Math.random() > 0.5 ? "You Have Got The Job IN KSA!" : "Try Again ;(";
// console.log(myJob);
//ticket
// let myLeader = "Imran Khan";
// let myVote = "PTI";
// if (myLeader === "Imran Khan"){
//     if(myVote==="PTI"){
//         console.log(`${myLeader} & ${myVote} will win the elections`)
//     }
//     else{
//         console.log(`Leader is IK but his party broke`)
//     }
// }
// else{
//     console.log(`Unfair Elections`)
// }
// guessing random baby names
// let myArray = [];
// let mySeq = Math.floor(Math.random()*myArray.length);
// console.log(myArray[mySeq]);
//different array functions
// let fruits:string[] = ["Apples","Bananas","Oranges","Grapes","Strawberry"];
// console.log(fruits[4]); // this will print "strawberry" which is in index 4 place
//                         // as the array index starts with 0.
// let myData = [4, "March", 1984]; // one array can store values of different data types
// console.log(`My birthday is ${myData[0]}, my birthmonth is ${myData[1]} & my birthyear is ${myData[2]}`);
// myData.pop(); // this deletes the last item or item at the last index number in an array
// myData.pop(); // this deletes the last item after the first was deleted which was the second last item in 
//               //the original array
// console.log(`After using pop() function My birthday is ${myData[0]}, my birthmonth is ${myData[1]} & my birthyear is ${myData[2]}`);
// myData.push("March");// this adds an item at the last of the array
// myData.push(1984);//this adds an item at the last of the array
// console.log(`After using push() function My birthday is ${myData[0]}, my birthmonth is ${myData[1]} & my birthyear is ${myData[2]}`);
// myData.shift(); // this removes the first element of an array and shifts second into the first place.
// console.log(`After using shift() function My birthday is ${myData[0]}, my birthmonth is ${myData[1]} & my birthyear is ${myData[2]}`);
// myData.unshift(4);// this adds the given element in the first place in the array(at 0 index)
// console.log(`After using unshift() function My birthday is ${myData[0]}, my birthmonth is ${myData[1]} & my birthyear is ${myData[2]}`);
// let cities = ["Karachi","Lahore","Islamabad","Peshawar","Quetta"];
// console.log(cities);//before using splice above will be printed
// cities.splice(2, 0, "Multan");
// console.log(cities);// after using splice Multan will be added at 2 index of the cities array
// cities.splice(2, 1, "Hyderabad"); //this adds Hyderabad at index 2 of array and deletes 1 item after index 2
// console.log(cities);//after adding Hyderabad at index 2, Multan will be deleted as it was the next item after index 2
// cities.splice(2, 2, "TMK");//this will add TMK at index 2 and will delete 2 items after index
// console.log(cities); 
// let cities = ["Karachi","Lahore","Islamabad","Peshawar","Quetta"];
// console.log(cities);//this is the original array that was assigned to cities[]
// cities.splice(2,1);//this deletes item at index 2 of cities array which is islamabad
// console.log(cities);// now this will be printed [ 'Karachi', 'Lahore', 'Peshawar', 'Quetta' ]
// cities.splice(3, 1);// this deletes item at index 3 of cities array which is Quetta after deleting Islamabad
// console.log(cities);// now this will be printed [ 'Karachi', 'Lahore', 'Peshawar' ]
// cities.splice(2, 0, "Islamabad");// this will add Islamabad to cities array at index 2
// console.log(cities);// this is result after addition [ 'Karachi', 'Lahore', 'Islamabad', 'Peshawar' ]
// cities.splice(4, 0, "Quetta");// this adds Quetta to index 4 of cities array
// console.log(cities); // this will be the result [ 'Karachi', 'Lahore', 'Islamabad', 'Peshawar', 'Quetta' ]
// lets make a money pool ballot system (committee)
// let myParticipats = [];
// let numOFPpl = prompt("Enter No Of Participants","0");
// if (numOFPpl!==null){
// let myNum = parseFloat(numOFPpl);
// for (let i =0; i<myNum ; i++){
// myParticipats[i] = prompt("Enter Participant Name");
// }
// for (let j = myNum; j = 1; myNum--){
// let a = Math.floor(Math.random()*myParticipats.length);
// console.log(`The winner No. ${myNum} is ${myParticipats[a]}`);
// myParticipats.splice(a, 1);
// console.log(`Remaining participants are ${myParticipats}`);
// }
// }
// else
// {
//     console.log("No participants added");
// }
// // functions practice
// function greet (name: string, age:number){
//     let msg = `You are ${name} and your age is ${age}`;
//     return msg;
// }
// let myMsg = greet("Dilawar", 22);
// console.log(myMsg);
// function plus (num1:number,num2:number) {
//     let result: number = num1+num2;
//     return result;
// }
// let result = plus(100,10);
// function checkEvenOrOdd(num:number){
//     if(num%2===0){
//         console.log(`${num} Is An Even Number`);
//     }
//   else{
//     console.log(`${num} Is An Odd Number`);}
//   }
//   checkEvenOrOdd(55);
//   function evenodd(num:number){
//     if(num%2===0){
//         return "Even Number";
//     }
//     else{
//         return "Odd Number";
//     }
//   }
//   let myAns = evenodd(15);
//   console.log(myAns);
// LOOPS
// let classNames : string[] = ["Dilawar", "Juned", "Makrhi", "Hamzah"]
// for (let i=0; i < classNames.length ; i++){
//     console.log(classNames[i]);
// }
// for (let i = 0; i < 3; i++){
//     console.log("LOOP");
//     for (let j = 0; j < 2; j++){
//         console.log("Nested Loop");
//     }
// }
//ARRAYS FUNCTIONS
// let myFriends = ["Sohail","Ubaid","Shahzad","Nadeem","Jamal"];
// console.log(myFriends);
// myFriends.push("Dilawar");
// console.log(myFriends);
// myFriends.pop();
// console.log(myFriends);
// myFriends.shift();
// console.log(myFriends);
// myFriends.unshift("Sohail");
// console.log(myFriends);
// let myCopyFriends = myFriends.slice(2,3);
// console.log(myCopyFriends);
// myFriends.splice(3,2,"Jawad","Zahra");
// console.log(myFriends);
// myFriends.splice(3,0,"Shahnawaz");
// console.log(myFriends);
// more functions practice
function loancalc(yearlymup, yearlyten, principal) {
    let monthlymup = (yearlymup * 0.01 / 12);
    let monthlyten = yearlyten * 12;
    let monthlyprin = principal / monthlyten;
    let installment = (monthlymup * monthlyprin) + monthlyprin;
    return installment;
}
let a = loancalc(30, 5, 1200000);
console.log(a);
