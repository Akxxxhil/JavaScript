const user={
    userName:"akhil",
    gender:"male",

    welcome:function(){
        console.log(`${this.userName} , welcometo the login page`);

    }
}
//user.welcome()
//this keyword always talks about current context
//console.log(this);




// add two numbers with the help of arrow function and normal function

//normal function

function addnum(num1,num2){
    return num1+num2

}
//console.log(addnum(2,1))

// lets talk about arrow function

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(3,2));

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
