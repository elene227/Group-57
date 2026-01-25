//შექმენი input ველი რომელიც მიიღებს მომხმარებლის ასაკს და მეორე input რომელიც მიიღებს  რიცხვს თუ რამდენი წლით უნდა მოგზაურობა მომავალში, calculate ღილაკზე დაჭერის შემდეგ ამუშავდე კონსტრუქტორის ფუნქცია რომელიც გამოითვლის თუ რამდენი წლის იქნება მომხმარებელი დროში მოგზაურობის შემდეგ, შედეგი გამოიტანეთ საიტზე






let form = document.createElement("form")
let input1 = document.createElement("input")
let input2 = document.createElement("input")
let button = document.createElement("button")
button.type="submit"
button.textContent="calculate"
input1.type="number"
input1.name="fname1"
input2.name="fname2"
input2.type="number"

form.appendChild(input1)
form.appendChild(input2)
form.appendChild(button)

document.body.appendChild(form)

function Met(age, time){
    this.age = age
    this.time=time
    this.ca= function(){
        return(`this user will be ${Number(age)+Number(time)}`)
    }
}

form.addEventListener("submit", function(event){
    event.preventDefault()
    let user = new Met(event.target.fname1.value, event.target.fname2.value)
    
    let p = document.createElement("p")
    p.textContent=user.ca()
    document.body.appendChild(p)

})