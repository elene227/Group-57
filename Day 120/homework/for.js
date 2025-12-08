//1) გააკეტეთ ესეთი პროექტი: ტექსტის ფერის არჩევა, იყოს ფერების ჩამონათვალი დივების სახით, და ერთი ინფუთი, შემდეგ ამ ფერების დაჭერაზე ინფუთის წერის დროს მაგ  ფერის ტექსტი დაიწეროს, გამოიყენეთ event ობიუქტი






let blue = document.createElement("div")
blue.style.backgroundColor="blue"
blue.style.width="100px"
blue.style.height="100px"
blue.id = "blue"

document.body.appendChild(blue)

let red = document.createElement("div")
red.style.backgroundColor="red"
red.style.width="100px"
red.style.height="100px"
red.id = "red"

document.body.appendChild(red)

let green = document.createElement("div")
green.style.backgroundColor="green"
green.style.width="100px"
green.style.height="100px"
green.id = "green"

document.body.appendChild(green)


let input = document.createElement("input")

document.body.appendChild(input)



blue.addEventListener("click", function(){
    input.style.color = blue.id
}) 

red.addEventListener("click", function(){
    input.style.color = red.id
}) 

green.addEventListener("click", function(){
    input.style.color = green.id
}) 