export function remainder (num1: number, num2: number, op:string) {
    console.log(`${num1} ${op} ${num2} = `);
    const remresult = num1%num2;
    console.log(remresult);
    return remresult;
}
