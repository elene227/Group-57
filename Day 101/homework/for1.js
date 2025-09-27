//2)მომხმარებელს შემოატანინე ორი რიცხვი,მომხმარებლის მიერ შემოტანილი პირველი რიცხვიდან მეორე რიცხვამდე იპოვეთ ყველა ლუწი რიცხვის ჯამი




let userNum1 = Number(prompt("please enter number: "))
let userNum2 = Number(prompt("please enter number: "))

let sum = 0

let i = userNum1
while(i <= userNum2){
    if(i % 2 == 0){
        sum+=i
    }
    i++
}

console.log(sum)
