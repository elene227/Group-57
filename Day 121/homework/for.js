//HTML-ში შექმენით ფორმა სადაც გექნებათ სამი input ველი, სახელისთვის, გვარისთვის და ასაკისთვის. submit-ღილაკის გამოყენებით გააგზავნეთ შეყვანილი ინფორმაცია რომელიც გამოჩნდება ლისტში, თითოეული გაგზავნის შემდეგ უნდა დაემატოს ახალი ლისტი სადაც გამოიტანთ იმ ინფორმაციას რაც input-ში შეიყვანეთ. ყოველი submit ღილაკზე დაჭერის შემდეგ უნდა იქმნებოდეს ახალი ლისტი. ეს ყველაფერი გაალამაზეთ CSS-ის გამოყენებით






let form = document.createElement("form")
let input1 = document.createElement("input")
let input2 = document.createElement("input")
let input3 = document.createElement("input")
let button = document.createElement("button")
let ul = document.createElement("ul")

input1.type = "text"
input1.name = "name1"

input2.type = "text"
input2.name = "name2"

input3.type = "number"
input3.name = "name3"

button.type = "submit"
button.textContent = "submit"

form.appendChild(input1)
form.appendChild(input2)
form.appendChild(input3)
form.appendChild(button)

document.body.appendChild(form)
document.body.appendChild(ul)

form.addEventListener("submit", function(event){
    event.preventDefault()
    let li1 = document.createElement("li")
     let li2 = document.createElement("li")
      let li3 = document.createElement("li")
    let val1 = event.target.name1.value
    let val2 = event.target.name2.value
    let val3 = event.target.name3.value

    li1.textContent = val1
    li2.textContent = val2
    li3.textContent = val3
    ul.appendChild(li1)
     ul.appendChild(li2)
      ul.appendChild(li3)

})