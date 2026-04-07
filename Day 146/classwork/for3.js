users = [
  {name: "Nika", age: 20},
  {name: "Ana", age: 25},
  {name: "Gio", age: 17}
]; 


const f = users.map(user => user.age*2)


console.log(f)

//მოცემული მასივიდა map() ფუნქციის გამოყენებით  თითოეული ასაკი გაამრავლე ორზე და გამოიტანე შევლილი მასივი