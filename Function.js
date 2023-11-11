 //declaration of the function

//  function myName (){
//     console.log("akhil");
//     console.log("akhil2");
//     console.log("akhil3");

// }
// myName()

//adding two numbers

// function addNumbers(number1,number2){
//     return number1+number2
// }
// console.log( "result",addNumbers(2,3));

// function userLoggedIn(username){
//     return `${username} justy logged IN`
// }

// console.log(userLoggedIn("smruti"));


//rest operator +++>>>

// function shopingCart(...price){  //...rest operator to make array
//     return price;
// }
// console.log(shopingCart(200,800,900));

//objects in function

// const user={
//      username:"akhil",
//      isloggedIn:false
// }
// function newjoiner (anyobject){
//     console.log(`${anyobject.username} is very handsome. is he loggedin : ${anyobject.isloggedIn} `);

// }
// newjoiner(user)

//Array in  function

const newArray=[200,399,90];
function array(getArray){
    return getArray[1];
}
console.log(array(newArray));

