//5)prompt–ით მომხმარებელს შეეკითხე სამი რიცხვი.

// გამოიყენე if/else რომ იპოვო:

// ყველაზე დიდი რიცხვი

// ყველაზე პატარა რიცხვი

// შემდეგ შეამოწმე:

// თუ ყველაზე დიდი რიცხვი ლუწია → დაბეჭდე "ყველაზე დიდი რიცხვი ლუწია"

// თუ კენტია → "ყველაზე დიდი რიცხვი კენტია"

let num1 = Number(prompt("Please enter Number: "))

let num2 = Number(prompt("Please enter Number: "))

let num3 = Number(prompt("Please enter Number: "))

let max = num1

if (num2 > max){
    max = num2
}

if(num3 > max) {
    max = num3
}

let min = num1
if(num2 < min){
    min = num2
}
if(num3 < min){
    min = num3
}


if(max % 2 === 0){
    console.log("ყველაზე დიდი რიცხვი ლუწია")
}else{
    console.log("ყველაზე დიდი რიცხვი კენტია")
}