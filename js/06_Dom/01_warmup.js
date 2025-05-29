Function.prototype.describe = function () {
    console.log(`fumction name is ${this.name}`);
    
};
// above function is describe name of function..

function greet (){
    return `hello ${name}`
}

greet.describe() // prints function name is greet

function masalaChai (){
    console.log("nothing bro niche");
}

masalaChai.describe()



// ______________________________________________________________________________________________________________________________________________________________________________________

// Function Declaration :-
function add(a,b){
    return a + b;
}

console.log(add(5,4));

// Function Expression :-
const substract = function(a,b){
    return a - b ;
}
console.log(substract(5, 4));

// Arrow Function :-
const multiply = (a, b)=> {
    return a*b;
}
console.log(multiply(5, 4));

// First class function :-
function applyOperation (a,b,operation ){
    return operation( a, b)
}

console.log(applyOperation(5,4, (x,y)=> x/y));

