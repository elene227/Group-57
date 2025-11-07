//1)შექმენი ობიექტი person, რომელსაც ექნება ველები: name, age, city.
// კონსოლში გამოიტანე მხოლოდ name და city.

// 2)შექმენი ობიექტი book რომელსაც ექნება key ები: title, author, pages.
// გამოიტანე მხოლოდ author-ის მნიშვნელობა.

// 3)შექმენი ობიექტი student, რომელსაც ექნება key ები: firstName, lastName, grade, age.
// Object.values() მეთოდის გამოყენებით გამოიტანე ყველა value.






//1
// let person = {
//     name : "y/n",
//     age : "y/a",
//     city : "y/c"
// }


// console.log(person.name, person.city)










//2
// let book = {
//     title : "Dubliners",
//     author : "James Joyce",
//     pages : "idk",


// }

// // let vals = Object.values(book)

// let lis  = String(Object.values(book.author))
// let str = ''
// for(let i = 0; i < lis.length; i++){
//     if(lis[i] !== ","){
//         str+=lis[i]
//     }
// }
// console.log(str)



let student = {
    firstName : "name",
     lastName : "last",
      grade : "idk",
       age : "random"
}


console.log(String(Object.values(student))) 