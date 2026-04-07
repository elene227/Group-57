const input = document.getElementById("input")
const total = document.getElementById("totalCh")
const remaining = document.getElementById("remaining")



const limit = 50

input.addEventListener("input", function(){
    const ln = input.value.length

    total.textContent = `Total Characters: ${ln}`
    remaining.textContent = `Remaining: ${limit - ln}`

    

})




