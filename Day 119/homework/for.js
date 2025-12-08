




document.body.style.backgroundColor="black"





let h1 = document.getElementById("forH1")
let minus = document.getElementById("forMinus")
let res = document.getElementById("res")
let plus = document.getElementById("forPlus")

let n = 0

function mminus(){
    n-=1
    h1.textContent=n
    if(n > 0){
        h1.style.color = 'green'
    }else if(n < 0){
        h1.style.color="red"
    }else{
        h1.style.color="white"
    }
}


function pluss(){
    n+=1
    h1.textContent=n
     if(n > 0){
        h1.style.color = 'green'
    }else if(n < 0){
        h1.style.color="red"
    }else{
        h1.style.color="white"
    }
}

function restart(){
    n=0
    h1.style.color="white"
    h1.textContent=0
}



minus.addEventListener("click", mminus)
plus.addEventListener("click", pluss)
res.addEventListener("click", restart)