// 

let z = 1;

function test() {
  let z = 2;
  console.log(z);
}

test();
console.log(z);

// რატომ განსხვავდება შედეგი?
//რადგან ცვლადები ეკუთვნიან სხვადასხვა სკოუპებს ერთი მხოლოდ ფუნქციის შიგნითაა ხელმისაწვდომი მეორე ყველგან.



// 11)დაწერე:

for (let i = 0; i < 3; i++) {
  console.log(i);
}
console.log(i);

console.log(i) 
// ციკლიდან გარეთ რა შედეგს იძლევა და რატომ?

//i is not defined ციკლის გარეთ ამ შედეგს გვიგდებს რადგან i ეკუთვნის {} და არის ხელმისაწვდომი მხოლოდ მაქ ლოკალ სკოუპში 





// 12)
let name = "Goga";

function changeName() {
  name = "Nika";
}

changeName();
console.log(name);

// რა გამოვა და რატომ?
// გოგა და ნიკა რადგან ისევ ეს ორი ცვლადი ეკუთვნის სხვადასხვა სკოუპებს








// 13)დაწერე კოდი, სადაც:

// global ცვლადი x = 10

// for ციკლში შექმენი let x = 0 და დააბეჭდე

// ციკლიდან გარეთ დააბეჭდე global x

let x = 10
for(let x = 0; x <= 3;x++){
    console.log(x)
}

console.log(x)








// 14)დაწერე კოდი, სადაც:

// შექმენი global ცვლადი name

// if ბლოკში შექმენი ცვლადი name და დააწერე სხვა მნიშვნელობა

// დააბეჭდე name ბლოკის გარეთ


let Name = "ricky"

if(true){
    Name = "ben"
}

console.log(name)