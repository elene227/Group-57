// 11)შექმენი ობიექტი book, რომელსაც ექნება "title", "author", "genre", "lang".
// ყველა მიანიჭე სტრინგი.
// for...in ციკლით გამოიტანე მხოლოდ ის value-ები, რომლებიც შეიცავენ ასო "o"-ს.


// 12)შექმენი ობიექტი person, რომელსაც ექნება "name" და "age".
// ობიექტში დაამატე ფუნქცია სახელად showInfo, რომელიც კონსოლში გამოიტანს:`ჩემი სახელია ... და მე ვარ ... წლის ,გამოიყენე this keyword ი` ,გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი

// 13)შექმენი ობიექტი car, რომელსაც ექნება "brand" და "model".
// ობიექტში დაამატე ფუნქცია სახელად fullName, რომელიც დააბრუნებს შემდეგნაირ ტიპის ტექსტს ---> `მე მყავს ... რომლის მოდელიც არის ...` ,გამოიყენე this keyword ი`  ,გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი

// 14)შექმენი ობიექტი student, რომელსაც ექნება "firstName", "lastName" და ფუნქცია სახელად getFullName(),
// რომელიც დააბრუნებს შემდეგნაირ ტექსტს --> `ჩემი სახელია ... და ჩემი გვარია ...` ,გამოიყენე this keyword ი`  ,გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი

// 15)შექმენი ობიექტი book, რომელსაც ექნება "title" და "author".ობიექტში დაამატე ფუნქცია სახელად info(),რომელიც დაარეთურნებს შემდეგ ტექსტს --> `ამ წიგნის ავტორი არის ... და ამ წიგნს ქვია ...`  ,გამოიყენე this keyword ი`  ,გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი




let book = {
    "title": "id", "author": "arthur", "genre": "detective", "lang": "engl"
}


for(let i in book){
    if("o".includes(book[i])){
        console.log(book[i])
    }
}




let person = {name : "maverick", age: 21, func : function showInfo(){return `my name is ${this.name}  i am ${this.age}`}}

console.log(person.func())




let car = {brand : "BMW", model: "idk"}

car.fullname = "idk"


car.lastname = function(){
    return `i love ${this.model} and ${this.brand}`
}

console.log(person.lastname())



let student = {firstname : "ryan", lastname:"reynolds", func : function getFullName(){return `ჩემი სახელია ${this.firstname} და ჩემი გვარია ${this.lastname}`}}

console.log(student.func())


let book1 = {title : "White Teeth", author : "Zadie Smith", func : function info(){return `ამ წიგნის ავტორი არის ${this.author} და ამ წიგნს ქვია ${this.title}`}}


console.log(book1.func())