const myArr=[2,3,4,5,6,7]
// console.log(myArr); //it will print the array
// console.log("the element is " + myArr[1]) //it will print the 3 rd indices/...

//array makes the copies as shallow copy and deep copy

//another way to declare array
const myarr2=new Array(4,56,7,78,8);
// console.log(myarr2);

//some operations in array
myArr.push(8)           //it will add the element into last
// console.log(myArr);

myArr.pop();
// console.log(myArr);     //it will remove the element from last

myArr.unshift(9);             //Elements to insert at the start of the array.
// console.log(myArr);

myArr.shift();
// console.log(myArr);          //Removes the first element from an array...


// console.log(myArr.includes(9));  //Determines whether an array includes a certain element,

// console.log(myArr.indexOf(7));

const mynewarr=myArr.join();  //Adds all the elements of an array into a string
// console.log( mynewarr);
// console.log(typeof mynewarr);    //it will return a string value

const arr1=new Array(2,3,4,5,6,7,8);
console.log("A" , arr1); //it will print the array


console.log(arr1.slice(1,3)); //it will give 1 st and 2nd element
console.log("B" , arr1);


console.log(arr1.splice(1,3));
//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log("C" , arr1);

// +++++++interview Question+++++++++
// if some one will ask the difference between slice and splice
//then slice will give the elemnt but will not chnage the main array ..but slice will remove the element
//from  the main array