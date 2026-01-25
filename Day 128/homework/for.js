



let realTime = document.getElementById("realTime")
let heartRate = document.getElementById("heartRate")

// let black = document.getElementById("black")
// let red = document.getElementById("red")
// let blue = document.getElementById("blue")
// let purple = document.getElementById("purple")

let hour = document.getElementById("hour")
let min = document.getElementById("min")
let sec = document.getElementById("sec")
let Watch = document.getElementById("Watch")
let Time = document.getElementById("Time")
let heartB = document.getElementById("heartB")

let colorButtons = document.getElementsByClassName("colors")
let list = [
    "./photos/black.png",
    "./photos/red.png",
    "./photos/blue.png",
    "./photos/purple.png",
    "./photos/pink.png"
]


console.log(colorButtons)

for(let i = 0; i < colorButtons.length; i++){
    colorButtons[i].addEventListener("click", function(){
        Watch.src=list[i]
        
    })
}


function timer(){
    let date = new Date()
    let Hour = date.getHours()
    let Min = date.getMinutes()
    let Sec = date.getSeconds()
    if(Hour < 10){
        Hour = `0${Hour}`
    }
     if(Min < 10){
        Min = `0${Min}`
    }
     if(Sec < 10){
        Sec = `0${Sec}`
    }

    hour.textContent=Hour + ":"
     min.textContent=Min + ":"
      sec.textContent=Sec

}
setInterval(timer, 1000)




realTime.addEventListener("click", function(){
    Time.style.display = "flex"
    heartB.style.display = "none"
    
})

heartRate.addEventListener("click", function(){
    Time.style.display = "none"
    heartB.style.display = "flex"
  
    
})




setInterval(function(){
    let rate = document.getElementById("rate")
    rate.textContent= Math.floor(Math.random() * 100)
}, 20000)