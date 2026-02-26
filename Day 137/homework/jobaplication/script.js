let body = document.body
let sun = document.getElementById("Sun")
let moon = document.getElementById("Moon")
let card = document.getElementsByClassName("card")
let h3 = document.getElementsByClassName("h3")
let p = document.getElementsByClassName("p")
let dropdown = document.getElementById("dropdown")
let title = document.getElementsByClassName("title")


sun.addEventListener("click",function(){
    body.style.backgroundColor = "#ededed"
    for(let i = 0;i < card.length;i++){
        card[i].style.backgroundColor = "white"
    }
    for(let i =0;i<p.length;i++){
        p[i].style.color = "#080532"
        h3[i].style.color = "#080532"
    }
    for(let i = 0;i<title.length;i++){
        title[i].style.color = "#080532"
    }

})

moon.addEventListener("click",function(){
    body.style.backgroundColor = "black"
    for(let i = 0;i < card.length;i++){
        card[i].style.backgroundColor = "rgb(74, 74, 74)"
    }
     for(let i =0;i<p.length;i++){
        p[i].style.color = "#00f3de"
        h3[i].style.color = "#00f3de"
    }
    for(let i = 0;i<title.length;i++){
        title[i].style.color = "#00f3de"
    }
})