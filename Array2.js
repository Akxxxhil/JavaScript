const  clg_boys_friends=["doggo","tarun","rajat","aman","subham"]
const clg_girl_friends= ["tingu","sudipta","sunanda","apurba","akka"]

//clg_boys_friends.push(clg_girl_friends);
//console.log(clg_boys_friends);

// [
//     'doggo',
//     'tarun',                                 ==>this is the output
//     'rajat',
//     'aman',
//     'subham',
//     [ 'tingu', 'sudipta', 'sunanda', 'apurba', 'akka' ]
//   ]

// const clg_friends=clg_boys_friends.concat(clg_girl_friends)
// console.log(clg_friends);

// it will show in one array .but it willonly push one array

const clg_friends=[...clg_boys_friends,...clg_girl_friends]
//console.log(clg_friends);

//now it will show the output by adding  both the array.....without adding as 2 nd array

const array1=[1,2,3,4,[2,3,4],5,[6,7,8]]
const array2=array1.flat(Infinity)
//console.log(array2);


const myName=Array.isArray("anshuman")
//console.log(myName); //is this is a array ??? ==>false

let score1 =200;
let score2 =400;
let score3 =900;

// console.log(Array.of(score1,score2,score3)); ==>Returns a new array from a set of elements.

console.log(Array.from("anshuman"));
//Creates an array from an iterable object.
