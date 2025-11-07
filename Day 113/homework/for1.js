// 4)შექმენი ობიექტი book ველებით: title, author, pages.
// Object.keys() მეთოდის გამოყენებით გამოიტანე ყველა key.
// ასევე
// Object.values() მეთოდის გამოყენებით გამოიტანე ყველა value.

// 5)შექმენი ობიექტი movie ველებით: name, genre, rating.
// Object.keys() მეთოდის გამოყენებით გამოიტანე ყველა key ცალ ცალკე ხაზზე (for loop)
// ასევე
// Object.values() მეთოდის გამოყენებით გამოიტანე ყველა value ცალ ცალკე ხაზზე (for loop)

// 6)შექმენი ობიექტი student = {name: "Gio", age: 16, grade: "A"}
// წაშალე age და grade ფროფერთიები






// let book = {
//     title : "moby dick",
//     auhtor : "hermen merville",
//     pages: "600+"

// }


// console.log(Object.keys(book), Object.values(book))



let movie = {
    name : "idk",
    genre : "idkk",
    rating : "idkkk"
}


for(let i = 0; i < Object.keys(movie).length; i++){
    console.log(Object.keys(movie)[i])
    console.log(Object.values(movie)[i])
}



// student = {name: "Gio", age: 16, grade: "A"}

// delete student.grade
// delete student.age
// console.log(student)