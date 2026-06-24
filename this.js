// this keyword :- "this " keyword refers to an object that is execting the current piece of code

const student = {
    name : "aditya-thakur",
    class : "10th",
    maths: 54,
    sst : 67,
    hindi : 55,
    english : 45,
    computer : 75,
    science : 42,
    getavg(){
        let avg = (this.maths + this.sst + this.hindi + this.english + this.computer + this.science) / 6;
        console.log(`${this.name} you are a ${this.class} class student you got Average marks  = ${Math.floor(avg)}`);
    }

}
console.log(student.getavg());


