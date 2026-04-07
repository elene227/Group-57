//2) მოცემულია რიცხვების სია const numbers = [5, 10, 15, 20]; forEach  ფუნქციის გამოყენებით ეკრანზე გამოიტანე ლუწი რიცხვები კვადრატში აყვანილი




const numbers = [5, 10, 15, 20]


numbers.forEach((num)=> {
    if(num % 2==0){
        console.log(num**2)
    }
})


const users = [

  {name: "Nika", age: 20},
  {name: "Ana", age: 25},
  {name: "Gio", age: 17}
]; 

users.forEach((user) =>{
    const f = user.age +  + 15
    console.log(`${user.name} and ${f}`)
})

// forEach ფუნქციის გამოყენებით გაარკვიე რამდენი წლის იქნება თითოეული იუზერი 15 წლის შემდეგ. ჯერ გამოიტანე მათი სახელები და გვერდით რამდენის წლის იქნებიან მომავალში.