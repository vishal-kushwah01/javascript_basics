// methods

const calculator = {
    add : function(a , b ){
        return a + b;
    },
     sub : function(a , b ){
        return a - b;
    },
     mul : function(a , b ){
        return a * b;
    }
}
console.log(calculator.add(3 , 4));
console.log(calculator.sub(4,7));


//method shorthand

const cal = {
    greater (a , b){
        if(a > b){
            return a;
        } else {
            return b;
        }
    },
  
}
console.log(cal.greater(4 , 2));
