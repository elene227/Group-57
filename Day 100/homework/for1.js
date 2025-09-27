//2)მომხამრებელს შემოატანინე ორი რიცხვი start და end ი ,შემდეგ დაატიალეთ ფორ ციკლი start იდან end ის ჩათცლით და ამ გაიგე ამ რიცხვების ჯამი,შეინახე ეს ჯამი ცვლადში და შემდეგ გამოთვალეთ საშაუალო არითმეტიკული და გამოიტანეთ კონსოლში


let start = Number(prompt("Please enter Number: "))
let end = Number(prompt("Please enter Number: "))


let sum = 0
let count = 0

for(i = start; i <= end; i++){
    sum+=i
    count++
}

let average = sum / count

console.log(average)