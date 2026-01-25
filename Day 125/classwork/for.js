


let button = document.createElement("button")
button.textContent="click"

document.body.appendChild(button)






button.addEventListener("click", function(e){
    function timer(){
        let date = new Date()
        let time = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
        let p = document.createElement("p")
        p.innerHTML = time
        document.body.appendChild(p)
        console.log(time) 
    
    }
    console.log(setInterval(timer, 1000))

})