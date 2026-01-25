
//შექმენით ორი input ველი რომელშიც შეიყვანთ თქვენს სახელს და ასაკს, შემდეგ კონსტრუქტორის გამოყენებით დაწერეთ ფუნქცია რომელიც საიტზე გამოიტანს  თქვენს შეყვანილ სახელს და  ასაკს



let input1 = document.createElement("input")
let input2 = document.createElement("input")
let button = document.createElement("button")
button.type="submit"
button.textContent="submit"
input1.type="text"
input2.type="text"

document.body.appendChild(input1)
document.body.appendChild(input2)
document.body.appendChild(button)

function Person(name, age){
    this.name = name
    this.age = age
    this.human = function(){
        return `they are ${age} years old and their name is ${name}`
    }
}

button.addEventListener("click", function(e){
    e.preventDefault()
    let p1 = new Person(input1.value, input2.value)
    let p = document.createElement("p")
    p.textContent=p1.human()
    document.body.appendChild(p)
})