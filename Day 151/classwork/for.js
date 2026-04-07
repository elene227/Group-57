//   1) შექმენი კლასი User, რომელსაც ექნება:

// name, age
// მეთოდი changeName(newName) --> შეცვლის სახელს
// მეთოდი increaseAge() ---> გაზრდის ასაკს თქვენთვის სასურველი რიცხვით

// გამოიძახეთ ორივე ფუნქცია და ამის შემდეგ დააკონსოლლოგეთ მთლიანი ობიექტი


// ამ ყველაფერს დაამატეთ dom და html ის ინფუთებით შეიყვანეთ მონაცემები

let age = document.getElementById('age')
let name = document.getElementById('name')
let button = document.getElementById('click')
class User{
    constructor(name, age){
        this.name = name
        this.age = Number(age)
    }

    changeName(){
        this.name = name.value
    }
    increaseAge(years){
        this.age + Number(age.value)
    }
}

const user1 = new User('vaxo', 22)

button.addEventListener('click', (e) =>{
    e.preventDefault()
    user1.changeName()
    user1.increaseAge()
    console.log(user1)
    
})