//8)ვინც დაამთავრეთ : მომხმარებელს შემოატანინეთ რიცხვი,1 დან მომხმ შემოტანილ რიცხვამდე იპოვე რიცხვების ჯამი





let user = Number(prompt("please enter your number here: "))
let sum = 0
let i = 1
while(i <= user){
    sum+=i
    i++
}

console.log(sum)