let button = document.createElement("button")
let form = document.createElement("form")
let input = document.createElement("input")
input.type = "text"
input.name ="fname"
input.placeholder = "enter your name"
button.type = "submit"
button.textContent = "submit"


form.appendChild(input)
form.appendChild(button)



document.body.appendChild(form)


form.addEventListener("submit", function(event){
    event.preventDefault()
    let vale = event.target.fname.value
    console.log(vale)
    if(vale.length == 0){
        event.target.fname.style.border="1px solid red"
    }else{
        console.log(vale)
    }
    
})
