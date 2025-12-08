//  1) შექმენი კონსტრუქტორი სახელიად Cars რომელიც პარამეტრად მიიღებს მანქანის ბრენდს და გამოშვების წელს, შექმენი ასეთი 3 მანქანა.
// 2) შექმენი კონსტრუქტორის ფუნქცია სახელით Person. კონსტრუქტორმა პარამეტრად უნდა მიიღოს: სახელი, გვარი და ასაკი. შექმენი ასეთი სამი ობიექტი.
// 3) HTML - ში შექმენი სამი ინფუთი სახელისთვის, მეილისთვის და პაროლისთვის, ასევე შექმენი Button-ი რომელზე დაჭერის შემდეგ ამუშავდება კონსტრუქტორ ფუნქცია და შექმნის User ობიექტებს. ეს ობიექტები ჩაამატე ლისტში და გამოაკონსოლე თქვენი User-ების ობიექტები.





//
// function Cars(brand, year){
//     this.brand = brand
//     this.year = year
// }


// console.log(new Cars("Anasagasti", "(1911–1915)" ))
// console.log(new Cars("Austin" ,"(1954–1983)" ))
// console.log(new Cars("Ford", "(1925-2016)" ))





//
// function Person(name, lastname, age){
//     this.name = name
//     this.lastname= lastname
//     this.age= age
// }

// console.log(new Person("lucy", "watson", 22))





//
let button = document.getElementById("button")

let li = []
button.addEventListener("click", function Person(name, email, password){
    event.preventDefault()
    name = document.getElementById("name")
    email = document.getElementById("email")
    password = document.getElementById("password")
    
    this.name = name
    this.email = email
    this.password = password
    li.push(name)
    li.push(email)
    li.push(password)
    console.log(li)
})