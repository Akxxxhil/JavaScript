function square(a){
    return a*a;
}

function cube (a){
    return a*a*a;
}

function addSomething(a,b,fn){
    let num1=fn(a);
    let num2=fn(b);

    return num1 + num2;
}

console.log("The answer is ",addSomething(2,3,square));
console.log("The answer is ",addSomething(2,3,cube));


// console.log("The answer is ",addSomething(2,3,function square(a){
//     return a*a;
// }));

//This is strictly known as anonymus function


//without declaring the function separately if i will declare inside the function arguments then it is known as anonymus function