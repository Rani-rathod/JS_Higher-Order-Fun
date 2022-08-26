


const outerFun = (a) => {
    let b=10;
    const innerFun = () => {
        let sum = a+b;
        console.log(`The sum of two no.is ${sum}.`)
    }
    innerFun();
}
outerFun(5);
