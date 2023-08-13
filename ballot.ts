let myParticipats = [];
let numOFPpl = prompt("Enter No Of Participants","0");
if (numOFPpl!==null)
{
    let myNum = parseFloat(numOFPpl);
    for (let i =0; i<myNum ; i++)
        {
            myParticipats[i] = prompt("Enter Participant Name");
        }
    for (let j=myNum; j<=myNum&&j>0; j--)
        {
            let a = Math.floor(Math.random()*myParticipats.length);
            console.log(`The winner No. ${myNum} is ${myParticipats[a]}`);
            myParticipats.splice(a, 1);
            if(myParticipats.length!==0)
                {
                    console.log(`Remaining participants are ${myParticipats}`);
                    myNum-=1;
                }
            else
                {
                    console.log(`Ballot Ended`);
                }
        }
}
else
{
    console.log("No participants added");
}
