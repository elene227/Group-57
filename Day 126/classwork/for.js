








let days = document.getElementById("Days")
let hours = document.getElementById("Hours")
let min = document.getElementById("Min")
let sec = document.getElementById("Sec")


let NewNew = new Date()



let newYear = new Date(NewNew.getFullYear()+1, 0, 1)





function time(){
    let current = new Date()
    let ml = newYear-current
    if(ml <= 0 ){
        days.textContent=0
        hours.textContent=0
        min.textContent=0
        sec.textContent=0
       
    }
    
    







    let Days = Math.floor(ml/(1000*60*60*24))
    let Sec = Math.floor(ml%(1000*60)/1000)
    let Min = Math.floor(ml%(1000*60*60)/(1000*60))
    let Hours = Math.floor((ml%(1000*60*60*24)/(1000*60*60)))

    days.textContent=Days
    hours.textContent=Hours
    min.textContent=Min
    sec.textContent=Sec
}


setInterval(time, 1000)
 let vid = document.getElementById("vid")
 vid.style.display="none"

 let current = new Date()
let ml = newYear-current
if(ml <= 0 ){
      
        let h3 = document.createElement("h3")
        h3.textContent="HAPPY NEW YEAR!!"
        document.body.appendChild(h3)
        vid.style.display="block"
       
    }

