// console.log("hello today i am learning javascript promises");

// setTimeout(function(){
//     console.log("I am still reading promises in js");
// },3000)

// console.log("now i am done with javascript");


// <<<<<==== 1. creating Promises  =====>>>>

//const myPromise = new Promise((resolve, reject) => {  in promise P is capital
// Asynchronous operation goes here
// If successful, call resolve
// If there's an error, call reject
//});

//<<<<<==== 2. Using resolve and reject:  =====>>>>

//   const mypromise=new Promise (function (resolve,reject){

//     setTimeout(function(){
//         const success=true;
//         if(success){
//             resolve("opertion successful ! you are prfect now ");
//         }
//         else{
//             reject("opertion not  successful ! you are not  prfect now ");
//         }

//     },2000);

//   });



//<<<<<==== 3. Handling the Promise:  =====>>>>

// const myPromise = new Promise(function (resolve, reject) {

//     setTimeout(function () {
//         const success = true;
//         if (success) {
//             resolve("opertion successful ! you are prfect now ");
//         }
//         else {
//             reject("opertion not  successful ! you are not  prfect now ");
//         }

//     }, 2000);

// });

// myPromise.then(function (result) {
//     console.log(result);
// });
// myPromise.catch(function (error) {
//     console.log(error);
// });
// myPromise.finally(function(){
//     console.log("this will execute every single time");
// });

//<<<<<==== 4. Chaining Promises:  =====>>>>

const myPromise = new Promise(function (resolve, reject) {

    setTimeout(function () {
        const success = true;
        if (success) {
            resolve("opertion successful ! you are prfect now ");
        }
        else {
            reject("opertion not  successful ! you are not  prfect now ");
        }

    }, 2000);

});
myPromise.then((result)=>{
    console.log(result);
    return 'Chaining success!';
}).then((chain)=>{
    console.log(chain);
    return 'Chaining success! ==2';
}).then((chain2)=>{
    console.log(chain2);
})
  
