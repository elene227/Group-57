class Bank{

    constructor(n, l, b){
        this.name = n
        this.lastname = l
        this.balance = b
    }
   

    add(){
        let dep = Number(prompt("enter amount: "))
        this.balance += dep
        console.log(`your balance is ${this.balance}`)
    }


}




const userBank = new Bank("vaxo", "kampoti", 333)

userBank.add()