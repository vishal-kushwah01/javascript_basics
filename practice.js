//
let arr = [2, 3, 4, 5, 6, 7, 8, 9];
let num = 3;

function getelements(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      console.log(arr[i]);
    }
  }
}
getelements(arr,num);

// 
let nums = [2,3,4,5]
const sqr = nums.map((num)=> num*num )
console.log(sqr);
const sum = sqr.reduce((acc , cur)=>  acc+ cur , 0)
console.log(sum);
let avg = sum / nums.length;
console.log(avg);

//
let newarr = [2,3,4,5,6,7]
const sumof = newarr.map((num)=> num + 5)
console.log(sumof);

//
let strings = ["ram" , "shyam" , "aditya" , "madhur" , "anand"]
let newstr = strings.map((ele)=> ele.toUpperCase())
console.log(newstr);

//
let args = [4,5,6,7,2,8,9];
function doubleAndReturnArgs(num){
   let double = args.map((ele)=> ele*2)
   return double;
}
console.log(doubleAndReturnArgs());

//
const mergeobject = (obj1 , obj2) => ({...obj1 , ...obj2});
let merge = mergeobject({a:1 , b:2},{c:3 , d:4})
console.log(merge);




