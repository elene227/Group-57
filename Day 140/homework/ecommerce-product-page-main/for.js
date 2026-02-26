






let angles = document.getElementsByClassName("img")
let imgOnDisplay = document.getElementById("onDisplay")
let numberOfitem = document.getElementById('p')
let minus = document.getElementById("minus")
let plus = document.getElementById("plus")

let count = 0
plus.addEventListener("click", function(){
    count++
    numberOfitem.textContent = count
})

minus.addEventListener("click", function(){
    if(!count <= 0){
        count--
    numberOfitem.textContent = count
    }
})





for(let i = 0; i < angles.length; i++){
    angles[i].addEventListener("click", function(){
        
       for(let j = 0; j < angles.length; j++){
        angles[j].style.border = "none"
        angles[j].style.opacity = "1"
       }
       this.style.border = "3px orange solid"
       this.style.opacity = "0.5"
       
       let sr = ["image-product-1.jpg", "image-product-2.jpg", "image-product-3.jpg", "image-product-4.jpg"]
       imgOnDisplay.src= `./images/${sr[i]}`





        // angles[i].style.border = "blue solid 1px"
    })
}