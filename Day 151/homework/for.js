let display = document.getElementById("display")
let nums = document.querySelectorAll(".num")
let dele = document.getElementById("delete")
let plus = document.getElementById("plus")
let calcs = document.getElementById("calcs")
let minus = document.getElementById("minus")
let eq = document.getElementById("equal")
let multi = document.getElementById("multi")
let divide = document.getElementById("divide")

nums.forEach(num => {
    num.addEventListener("click", () =>{
        
        let val1 = num.innerText
    
        display.style.fontSize = "40px"
        display.style.color = "white"


        if(val1 === "."){
             val1 = '.'

            if(display.innerText.includes('.')){
                return
            }
        }


        display.innerText += val1


    })
})



function alloperations(open){
   if(display.innerText === ""){
    return
   }

   if(firstnum === ""){
    firstnum=display.innerText
   }else{
    let secondNumber = display.innerText
    let pr = new Calculator(Number(firstnum), Number(secondNumber))
     let result = ""
   if(operatorChoice === "+"){
    result=pr.plus()
   }
   if(operatorChoice === "-"){
    result=pr.minus()
   }
   if(operatorChoice === "/"){
    result=pr.divide()
   }
   if(operatorChoice === "x"){
    result=pr.multi()
   }

   firstnum = result
   display.innerText=result
   }

   operatorChoice=open
   

}


plus.addEventListener("click", () => alloperations("+"))
minus.addEventListener("click", () => alloperations("-"))
divide.addEventListener("click", () => alloperations("/"))
multi.addEventListener("click", () => alloperations("x"))
let firstnum = ""
let operatorChoice = ''



// plus.addEventListener('click', ()=>{
//     operatorChoice="+"
// })

// minus.addEventListener('click', ()=>{
//     operatorChoice="-"
// })

// multi.addEventListener('click', ()=>{
//     operatorChoice="x"
// })

// divide.addEventListener('click', ()=>{
//     operatorChoice="/"
// })





// equal.addEventListener("click", () =>{
//   if(display.innerText === "")return

//   if(firstnum === ""){
//     firstnum=display.innerHTML
//   }else{
//     let secondNumber = display.innerText
//     let pr = new Calculator(Number(firstnum), Number(secondNumber))
//     let result= ""
//     if(operatorChoice === "+"){
//         result=pr.plus()
//         display.innerText= Number(result)
//         result=firstnum
      
//     }
//   }
// })



dele.addEventListener("click", () => {
    let currentText = display.innerText;
    let newText = "";

    
    for(let i = 0; i < currentText.length - 1; i++){ 
        newText += currentText[i]; 
    }
    

    display.innerText = newText;
});


class Calculator{
    constructor(num1, num2){
        this.num1 = Number(num1)
        this.num2 = Number(num2)
    }


    plus(){
        return this.num1 + this.num2
    }
    
    minus(){
        return this.num1 - this.num2
    }

    divide(){
        return this.num1 / this.num2
    }

    multi(){
        return this.num1 * this.num2
    }
}


