let p1 = {
  fname: "Hitesh",
  lname: "Ch",
  address: {
    h: 1,
    s: 1,
  },
};

let p2 = {
  ...p1,
};

p2.fname = "Piyush";
p2.address.h = "Hacked"; 

console.log(p2); // print piyush ch and print into lname.h hacked
console.log(p1); // print hitesh ch and print into lname.h hacked
