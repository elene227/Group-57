//შექმენი ფორმა სადაც გექნება სამი input-ი, სახელისთვის, ასაკისთვის და პროფესიისთვის, ასევე submit ღილაკი. შექმენი კონსტრუქტორ ფუნქცია რომელის პარამეტრად მიიღებს სახელს, ასაკს და პროფესიას, შექმენი ფუნქცია კონტრუქტორში რომელიც დააბრუნებს სახელი - პროფესია (ანუ მომხარებლის სახელს და გვერდით მის პროფესიას). dom-ში შექმენი div და მასში ჩაამატე პარაგრამი რომლის მნიშვნელობა იქნება ის რასაც კონსტრუქტორის ფუნქცია დააბრუნებს




let form = document.getElementById("form")
let input1 = document.getElementById("name")
let input2 = document.getElementById("age")
let input3 = document.getElementById("pr")




function Person(name, age, pr){
    this.name = name
    this.age = age
    this.pr = pr
    this.per = function(){
        return `their name is ${this.name}, they are ${this.age} years old and they are ${this.pr}. `
    }
}


form.addEventListener("submit", function(e){
    e.preventDefault()

    let user = new Person(e.target.name1.value, e.target.name2.value, e.target.name3.value)
    let div = document.createElement("div")
    let p = document.createElement("p")
    
    p.textContent=user.per()
    div.appendChild(p)
    document.body.appendChild(div)
    
    

})