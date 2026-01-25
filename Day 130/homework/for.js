
let form = document.getElementById("form")
let number = document.getElementById("number")
let name = document.getElementById("name")
let year = document.getElementById("born")
let cvc = document.getElementById("cvc")
let cardnumber = document.getElementById("cardnumber")

cardnumber.addEventListener("keydown", function(e){
    // if(cardnumber.value.replaceAll(" ", "").length % 4 === 0){
    //     cardnumber.value+=" "
    // }
    if(e.key.length === 1 ){
        if(cardnumber.value.replaceAll(" ", "").length % 4 === 0){
        cardnumber.value+=" "
    }
    }
})




form.addEventListener("submit", function(e){
    e.preventDefault()
    let input1 = false
    let input2 = false
    let input3 = false
    let input4 = false
    let input5 = false
    
    if(e.target.username.value.length === 0){
        e.target.username.style.borderColor = "red"
        input1 = false
    }else{
        e.target.username.style.borderColor = "black"
        input1 = true
    }

    if(e.target.cardnumber.value.replaceAll(" ", "").length < 16 || e.target.cardnumber.value.replaceAll(" ", "").length === 0 || e.target.cardnumber.value.length > 16){
        e.target.cardnumber.style.borderColor = "red"
        input2 = false
    }else{
        e.target.cardnumber.style.borderColor = "black"
        input2 = true
         for (let i of e.target.cardnumber.value.replaceAll(" ", "")){
            if(!"1234567890".includes(i)){
                e.target.cardnumber.style.borderColor = "red"
                input2 = false
                break
                
            }
        }
         
    }

    if(e.target.month.value.length > 2 || e.target.month.value.length === 0 || e.target.month.value > 12){
        e.target.month.style.borderColor = "red"
        input3 = false
    }else{
        e.target.month.style.borderColor = "black"
        input3 = true
        for (let i of e.target.month.value){
            if(!"1234567890".includes(i)){
                e.target.month.style.borderColor = "red"
                input3 =  false
                break
            }
        }
         
    }

    if(e.target.year.value.length > 2 || e.target.year.value.length < 2){
        e.target.year.style.borderColor = "red"
        input4 = false
    }else{
        e.target.year.style.borderColor = "black"
        input4 = true
        for (let i of e.target.year.value){
            if(!"1234567890".includes(i)){
                e.target.year.style.borderColor = "red"
                input4 = false
                break
            }
        }
         
    }

    if(e.target.cvc.value.length !== 3){
        e.target.cvc.style.borderColor = "red"
        input5 = false
    }else{
        e.target.cvc.style.borderColor = "black"
        input5 = true
        for (let i of e.target.cvc.value){
            if(!"1234567890".includes(i)){
                e.target.cvc.style.borderColor = "red"
                input5 = false
                break
            }
        }
        
    }

    if(input1 === true && input2 === true && input3 === true && input4 === true && input5 === true){
        name.textContent = e.target.username.value
        number.textContent = e.target.cardnumber.value
        year.textContent = `${e.target.month.value}/${e.target.year.value}`
        cvc.textContent = e.target.cvc.value
    }




})