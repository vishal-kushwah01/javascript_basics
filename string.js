// let str = "    vishal    "
// console.log(str.trim());

// let msg = " apna   college"
// let newstr = msg.trim()
// console.log(newstr);
// console.log(msg);

// //lowercase and uppercase

// let Name = "aditya"
// console.log(Name.toUpperCase());

// let secondname = "MADHUR"
// console.log(secondname.toLowerCase());

const name = "vishal";
const surname = "thakur"
console.log(name + " " +surname);
console.log(`hey my name is ${name} and my surname is ${surname}`);

//declare string another way

const gamename = new String('vishal-thakur');
console.log(gamename[0]); // acess key

//methods
//lenght:- Returns the length of a String object.
console.log(gamename.length);

//upper & lowercase()
console.log(gamename.toUpperCase());
console.log(gamename.toLowerCase());

//charat:- /The zero-based index of the desired character.
console.log(gamename.charAt(3));  

// indexof:- The substring to search for in the string   Returns the position of the first occurrence of a substring.
console.log(gamename.indexOf('t'));  


// substring :- The zero-based index number indicating the beginning of the substring. Returns the substring at the specified location within a String object.

const newstring = gamename.substring(0 , 6);
console.log(newstring);

//slice :- The index to the beginning of the specified portion of stringObj. Returns a section of a string.

const anotherstring = gamename.slice( -13 , 6);
console.log(anotherstring);

//trim :- Removes the leading and trailing white space and line terminator characters from a string. //start() , //end()

const newstringone = "     vishal kushwah     ";
console.log(newstringone.trim());

//replace :- Replaces text in a string, using a regular expression or search string. using let not const  because we are reassigning it.

let newurl = "https://vishal.com/vishal%50kushwah";
console.log(newurl.replace("%50", "-"));

//replaceAll :- in this form only changes the first occurrence of the substring. If you want to change all occurrences, 

let qourt = "to be not to be";
console.log(qourt.replaceAll("be" , "code"));


//includes :-  Returns true if searchString appears as a substring of the result of converting this object to a String, 
//at one or more positions that are greater than or equal to position; otherwise, returns false.

console.log(newurl.includes("vishal"));

//startwith :- Returns true if the sequence of elements of searchString converted to a String is the same as the corresponding elements of this object (converted to a String) starting at position. Otherwise returns false.  


 const browserType = "mozilla";

 if (browserType.startsWith("zilla")) {
   console.log("It starts with zilla!");
 } else {
   console.log("It DOESN'T start with zilla!");
 }


 //endswith :- 

const browserTypeone = "mozilla";

if (browserTypeone.endsWith("zilla")) {
  console.log("It ends with zilla!");
} else {
  console.log("It DOESN'T end with zilla!");
}

//concat :- The concat() method of String values concatenates the string arguments to this string and returns a new string.
let str1 = "vishal";
let str2 = "thakur";
console.log(str1.concat(" " , str2));
console.log(str2.concat(" ", str1));

// practice questions

// 1. Take a string input and print it.
let strr = "vishal";
console.log(strr);

//2.Find the length of a string without using .length.

let newname = "hello world";
let count = 0;
while (newname[count] !== undefined) {
    count++;
}
console.log(count);

//3.Print each character of a string on a new line.

let char = "consistency";
for (let i = 0; i < char.length; i++) {
   console.log(char[i]);  
}
console.log("..............without using .lenght..................");
//Without using .length (Interview-friendly)

let str = "consistency";
let i = 0;
while (str[i] !== undefined) {
    console.log(str[i]);
    i++;
}

// Print a string in reverse order.

let revchar = "hello world";
let x = 0;
while (revchar[x] !==undefined) {
    console.log(revchar[x]);
    x++;
}
x--;

while(x >=0){
    console.log(revchar[x]);
    x--;
}

// for (let i = 0; i < array.length; i--) {
       
// }

// for a string , trim it and convert into uppercase

let msg = "help!";
console.log(msg.trim().toUpperCase());


// for a string give the output

let clgname = "Apnacollege";
console.log(clgname.slice(4,9));
console.log(clgname.indexOf("na"));
console.log(clgname.replace("Apna" , "Our"));








