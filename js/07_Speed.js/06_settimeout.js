console.log('Hello From Js');

setTimeout(() => {
    console.log("Run After 2 Seconds"); // minimum 2 seconds to wait karega hi..
    
}, 2000);

console.log("Bye Bye");


const obj ={
    personName : "Rohan",
    greet : function() {
        console.log(`Hello ${this.personName}`);
        
    }
}

console.log("Hii Ji");

setTimeout (obj.greet.bind(obj), 5 * 1000); // bind is used due to call stack khali hone ke baad this ka context ud jata he is vajh se bind object ko bound krke rkhta hai

console.log("Bye Ji");
