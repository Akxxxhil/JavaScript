// IIFE ==  Immmediately invoked fucntion expression

(function user(){
    console.log("Db connceted");
})();
//IIFE it is nothing but used for prevenattaion of global scope pollution

 ( (name)=>  {
   console.log(`${"db connnected"}`,name);
})('akhil')



