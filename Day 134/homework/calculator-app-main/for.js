const display = document.getElementById("display")
let nums = document.querySelectorAll(".num")
let dele = document.getElementById("delete")
let plus = document.getElementById("plus")


nums.forEach(num => {
    num.addEventListener("click", () =>{
        let op = document.getElementsByClassName("op")
        
        let val1 = num.innerText
    
        display.style.fontSize = "40px"
        display.style.color = "white"


        if(val1 === "."){
             val1 = ','

            if(display.innerText.includes(',')){
                return
            }
        }


        display.innerText += val1

        for(let i = 0; i < op.length; i++){
            op[i].addEventListener("click", () =>{
                display.innerText = op[i].innerText
            })
        }

    })
})




dele.addEventListener("click", () => {
    let currentText = display.innerText;
    let newText = "";

    // Your loop approach:
    // We loop through the string, but stop 1 character before the end
    for(let i = 0; i < currentText.length - 1; i++){ // 333 lenght = 3 -1 = 2 
        newText += currentText[i]; 
    }
    
    // Then we set the display to our "shortened" version
    display.innerText = newText;
});