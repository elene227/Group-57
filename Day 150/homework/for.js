// 1)შექმენი კლასი Car, რომელსაც ექნება:

// properties: brand, model, year
// მეთოდი getInfo(), რომელიც აბრუნებს სტრინგს მანქანის შესახებ


class Car {
    constructor(brand, model, year){
        this.car = brand
        this.model = model
        this.year = year
    }


    getInfo(){
        return `${this.car}s model is ${this.model} year is ${this.year}`
    }
}


const new1 = new Car("BMW", "idk231", "1994")
console.log(new1.getInfo)











// 2)შექმენი კლასი User, რომელსაც ექნება:

// name, age
// მეთოდი changeName(newName) --> შეცვლის სახელს
// მეთოდი increaseAge() ---> გაზრდის ასაკს თქვენთვის სასურველი რიცხვით

// გამოიძახეთ ორივე ფუნქცია და ამის შემდეგ დააკონსოლლოგეთ მთლიანი ობიექტი

class User{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    changeName(newName){
        this.name = newName
    }
    increaseAge(years){
        this.age + years
    }
}

const user1 = new User('vaxo', 22)

user1.changeName("giorgi")
user1.increaseAge(2)


console.log(user1)





// 3)შექმენი კლასი Calculator, რომელსაც ექნება მეთოდები:

// add(a, b)
// subtract(a, b)
// multiply(a, b)
// divide(a, b)







// 4)შექმენი კლასი Product, რომელსაც ექნება:

// name, price, quantity
// მეთოდი getTotalPrice() → აბრუნებს მთლიან ფასს(ფასი გამრავლებული ოდენობაზე)








// 5)შექმენი კლასი BankAccount, რომელსაც ექნება:

// owner, balance
// მეთოდი deposit(amount) --> შეგვაქვს თანხა ანგარიშზე და ბეჭდავს განახლებულ ბალანსს
// მეთოდი withdraw(amount) --> გაგვაქვს თანხა ანგარიშიდან და ბეჭდავს დარჩენილ თანხას ანგარიშზე

// დააკონსოლლოგეთ ბოლოს მთლიანი ობიექტი რომ ნახოთ შეცვლილი ობიექტი







// 6)შექმენი კლასი Library, რომელსაც ექნება:

// books (მასივი)

// მეთოდები:

// addBook(book) ამატებს არგუმენტად გადაცემულ წიგნს სიის ბოლოში
// bookList() --- ბეჭდავს სიას იმის შემდეგ რაც წიგნი დაემატა








// 7)შექმენი კლასი Password

// ქონდეს მნიშვნელობა --> value


// მეთოდები:
// changePassword(newPass)
// checkPassword() --> გამოაქვს შეცვლილი პაროლი