const obj = {
    name : "vishal",
    age : 21,
}
console.log(typeof(obj));
console.log(obj);

const post = {
    username : "vishal.rajawat",
    content : "fitness",
    likes : "one millon",
    repost : "10k",
    tags : ["mukesh ghalot" , "rajveer" , "nitin chandela" , "lokesh rajput" ]
};
console.log(post);
// acess the value[key]
console.log(post.username);

//add / update 
const newobj = {
    name : "aditya",
    age : 18,
    marks : 70.5,
    city: "Noida"
};
console.log(newobj);
console.log(newobj.city = "delhi");   //update
console.log(newobj);
console.log(newobj.gender = "male"); //add
console.log(newobj);

//object of objects

const classinfo = {
  vishal: {
    grade: "a",
    city: "noida",
  },
  aditya: {
    grade: "c",
    city: "delhi",
  },
  karan: {
    grade: "b",
    city: "pune",
  },
};
console.log(classinfo);
console.log(classinfo.vishal);
console.log(classinfo.vishal.grade = "A+"); //update


//array of object

const classmate = [
    {
        name : "Aman",
        grade : "A+",
        city : "delhi"

    },
    { 
        name : "rahul",
        grade : "A+",
        city : "mumbai"
    },
    {
        name : "ramandeep",
        grade : "B+",
        city : "gurugram"
    }
];
console.log(classmate);
console.log(classmate[0]);
console.log(classmate[2].city);
console.log(classmate[0].name = "ram"); //update

