//object literals
const mySym=Symbol("key1")
const user={
    name:"Akhil",
    [mySym]:"mykey1",
    age:22,
    loaction:"bhubaneswar",
    email:"anshuman@gmail.com",
    isLoggedin:false,
    lastLoggedinDays:["Monday","tuesDay"]
}

// console.log(user["name"]);
// console.log(user["email"]);
// console.log( typeof user.mySym);
// console.log(user[mySym]);

//we can change the value of object
//user.email="anshu@gmail.com"
//for freezing the object value also you can write as 
// Object.freeze(user)

// console.log(user);
user.greetings=function(){
    console.log(`hello my dear, ${this.name}`);
}
console.log(user.greetings());
