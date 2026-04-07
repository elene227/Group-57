// 2) შექმენი კლასი Calculator, რომელსაც ექნება მეთოდები:

// add(a, b)
// subtract(a, b)
// multiply(a, b)
// divide(a, b)


// ამ ყველაფერს დაამატეთ დომი


const number1= document.getElementById('number1')
const number2 = document.getElementById('number2')
const button = document.getElementById('click')



class Calculator{
    constructor(a, b){
        this.a = Number(a)
        this.b = Number(b)
    }


    add(){
        return this.a + this.b
    }


    substract(){
        return this.a - this.b
    }

    multiply(){
        return this.a * this.b
    }
    

    divide(){
        return this.a / this.b
    }
}




button.addEventListener('click', (e)=>{
    e.preventDefault()
    let cal = new Calculator(Number(number1.value), Number(number2.value))
    console.log(cal.add())
    
    
})

