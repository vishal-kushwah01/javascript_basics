//  {#733,10}  //for each
//for each loop :- A function that accepts up to three arguments. 
// forEach calls the callbackfn function one time for each element in the array.

const coding = ["js" , "ruby" , "java" , "python"]

coding.forEach((item)=>{
    
    //console.log(item);
    
})



//  {#fa9,36}. //filter
//filter :- Returns the elements of an array that meet the condition specified in a callback functions.
//The filter method calls the predicate function one time for each element in the array.

const myNums = [1,2,3,4,5,6,7,8];
const newNum = myNums.filter((num)=>{
    if(num > 4){
        return num;
    }
})
//console.log(newNum);


const books = [
  { tilte: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { tilte: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { tilte: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { tilte: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { tilte: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { tilte: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { tilte: "Book Seven", genre: "History", publish: 1986 , edition : 1996},
  { tilte: "Book Eight", genre: "Science", publish: 2011 , edition : 2019},
];

 let userBooks = books.filter((book)=>{
    // if(book.genre === 'History'){
    //     return book
    // }
    return book.genre === "History";
 })
 //console.log(userBooks);
 
 //check publish books after 2000
 userBooks = books.filter((book)=>{
    return book.publish >= 2000;
 })
//console.log(userBooks);



//  {#a63,19}.   //map
//map :- Calls a defined callback function on each element of an array, and returns an array that contains the results.

const nums = [1,2,3,4,5,6,7,8,9,10];

const myNum = nums.map((num)=>{
    return num+10;
})
//console.log(myNum);



//chaining
let arr = [1,2,3,4,5,6,7,8,9,10];

let newArr = arr
            .map((num) => num * 10)
            .map((num) => num + 1)
            .filter((num)=> num >= 40)
//console.log(newArr);



//  {#87c,33}.      //reduce
//reduce :- The reduce() method executes a user-supplied "reducer" callback function on each element of an array in order,
//  passing in the return value from the calculation on the preceding element.
let myTotal = arr.reduce((acc , curr)=>{
    console.log(`acc : ${acc} and currval : ${curr}`);
    
    return acc + curr;
}, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "MERN Stack",
    price: 9999,
  },
  {
    itemName: "Java with DSA",
    price: 5000,
  },
  {
    itemName: "Machine Learning",
    price: 3999,
  },
];

const priceToPay = shoppingCart.reduce((acc , item)=>{
   return acc + item.price;
},0)
console.log(priceToPay);

