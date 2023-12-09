//<<<<<=====  1. Synchronous vs. Asynchronous: ======>>>>

//Synchronous
// console.log("hi i am learning today Synchronous");
// console.log("i am learning for the 1st time");

//Asynchronous:
// console.log("hi i am learning today Synchronous");
// setTimeout(function(){
//     console.log("take your time as you are Asynchronous");
// },2000);
// console.log("i am learning for the 1st time");


//<<<<<=====  2. Callbacks: ======>>>>

// Example of a callback
//function fetchData(callback) {
// Simulating an asynchronous operation with setTimeout
//setTimeout(() => {
//console.log("Data fetched!");

// After the asynchronous operation is complete, call the callback function
//callback();
//}, 2000);
//}

// Function to be called after data is fetched
//function process() {
//console.log("Processing data...");
//}

// Calling fetchData with the process function as a callback
//fetchData(process);


//<<<<<=====  3. Promises: ======>>>>

// function fetchData() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log("Data fetched!");
//             resolve()
//         }, 2000)
//     });
// }

// function process() {
//     console.log("Processing data...");
// }
// fetchData().then(process);


//<<<<<=====  4. async and await: ======>>>>

// async function fetchData() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             console.log("Data fetched!");
//             resolve()
//         }, 2000)
//     });
// }

// async function process(){
//     await fetchData();
//     console.log("Processing data...");
// }

// process();


async function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Data fetched!");
        resolve();
      }, 2000);
    });
  }
  
  async function process() {
    await fetchData();
    console.log("Processing data...");
  }
  
  async function main() {
    console.log("Start");
    await process();
    console.log("End");
  }
  
  main();



  //output of the code
  
  //start
  //Data fetched!
  //Processing data...
  //End