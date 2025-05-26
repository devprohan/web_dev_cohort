class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }

  // Method:-
  getFullname() {
    return `${this.fname} ${this.lname}`;
  }
}

const p1 = new Person("Piyush", "Garg");
const p2 = new Person("Akash", "Kadlag");
const p3 = new Person("Rohan", "Fande")

console.log(p1.getFullname());
console.log(p2.getFullname());
console.log(p3.getFullname());
