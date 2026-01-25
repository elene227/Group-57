

let body = document.body
let Hex = document.getElementById("forHex")
let button = document.getElementById("ClickMe")
let form = document.getElementById("form")

let colorList = ["1","2","3","4","5","6","7","8","9","A" , "B" , "C" , "D" , "E" , "F" ]

function first(){
    let Code = ""
    for(let i = 0; i < 6; i++){
        Code+=colorList[Math.floor(Math.random() * colorList.length)]
    }
      body.style.background=`#${Code}`
      button.style.background=`#${Code}`
      Hex.value=`#${Code}`
      Hex.style.color=`#${Code}`
      
}
console.log(first())

// button.addEventListener("click", function(){
//     let color = Hex.value
//     if(color === ""){

//     }
// })



form.addEventListener("submit", function(e){
    e.preventDefault()
    let input = Hex.value
    if(input){
        body.style.background=`#${input}`

    }else{
        Hex.style.border="solid 1px red"
    }
})



button.addEventListener("click", function(){
    let code = ""
    for(let i = 0; i < 6; i++){
        code+=colorList[Math.floor(Math.random() * colorList.length)]
    }
    body.style.background=`#${code}`
    button.style.background=`#${code}`
     Hex.value=`#${code}`
      Hex.style.color=`#${code}`
   Hex.style.border= "solid black 1px"
    

})


// button.addEventListener("click", function(){
//     let cc = Hex.value
//     body.style.background=cc
// })
