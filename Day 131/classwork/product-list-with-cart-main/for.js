





let addcartButton = document.getElementsByClassName("addcart")
let adding = document.getElementsByClassName("adding")
let plus = document.getElementsByClassName("plus")
let minus = document.getElementsByClassName("minus")
let p = document.getElementsByClassName("p")

for(let i = 0; i < addcartButton.length; i++){
    addcartButton[i].addEventListener("click", function(){
        addcartButton[i].style.display = "none"
       
        adding[i].style.display = "flex"
    })

}




count = 0
for(let i = 0; i < plus.length; i++){
    plus[i].addEventListener("click", function(){
        count++
        
    })
}