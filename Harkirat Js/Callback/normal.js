function square(a){
    return a*a;
}

function cube (a){
    return a*a*a;
}

function addsquare(a,b){
    let num1square=square(a);
    let num2square=square(b);

    return num1square + num2square;
}
function addcube(a,b){
    let num1cube=cube(a);
    let num2cube=cube(b);

    return num1cube + num2cube;
}

console.log("The answer is ",addsquare(2,3));

console.log("The answer is ",addcube(2,3));