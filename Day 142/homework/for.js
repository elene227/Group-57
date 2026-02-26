const roll = document.getElementById("roll")
const dice = document.getElementById("dice")
const total = document.getElementById("totalRolls")



let dicerolls = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"]
let count = 0

roll.addEventListener("click", function(){
    const rolledIcon = dicerolls[Math.floor(Math.random() * 6)]
    dice.innerHTML = rolledIcon

    count++
    
    let ne = document.createElement("div")
    ne.style.fontSize = "50px"
    ne.innerHTML = `Roll ${count}: <span> ${rolledIcon} </span>`


    total.appendChild(ne)
})

