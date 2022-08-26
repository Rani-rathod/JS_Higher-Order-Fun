console.log(Math.random())


function fun(a,b){
    console.log(a+b);
}
fun(5,6)
fun(3,2)
fun(5,6)


let myArr=[]
function inpure(addData){
    return myArr.push(addData);
}
function pure(addData){
    return myArr.concat(addData);
}
console.log(pure([1,2]));


console.log(myArr)
console.log(pure(1))
console.log(myArr)




function add(x,y){
    let rand = Math.random()*10;
    return x+y+rand;
}
console.log(add(2,2))

