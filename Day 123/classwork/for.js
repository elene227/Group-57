
//შექმენით კონსტრუქტორი სახელად Student რომელიც მიიღებს მოსწავლის სახელს და თარიღს, კონსტრუქტორში შიგნით შექმენით ფუნქცია რომელიც გამოაკონსოლებს მოსწავლის სახელს და თარიღს თუ როდის დაიწყო სწავლა goa-ში






function Goa(name, year){
    this.name = name
    this.year = year
    this.student = function(){
        console.log(`their name is ${name}, and joined in ${year}`)
    }
}


let st1 = new Goa("vinme", 2022)
st1.student()