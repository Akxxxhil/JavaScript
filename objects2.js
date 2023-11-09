const tiktokuser ={}
tiktokuser.id="123abc"
tiktokuser.name="akhil"
tiktokuser.isLoggedin=false
//console.log(tiktokuser); //it will print the objects details

const regularUser={
    userName:{
        fullUsername:{
            firstName:"akhil",
            lastName:"biswal"
        }

    }
}

//console.log(regularUser.userName.fullUsername.firstName); //nested printing of objects
const obj1={1:"a",2:"s",3:"d"}
const obj2={4:"a",5:"s",6:"d"}
const obj3={1:"a",2:"s",3:"d"}

const finalObj={...obj1,...obj2,...obj3} //glass spread trick
//console.log(finalObj);
console.log(tiktokuser);
console.log(Object.keys(tiktokuser));
console.log(Object.values(tiktokuser));
console.log(tiktokuser.hasOwnProperty("isLoggedin"));
