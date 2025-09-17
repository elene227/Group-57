//1)დავალება 1 – ლუწი/კენტი მთვლელი

// მომხმარებელს prompt–ით შეეკითხე ორი რიცხვი: start და end.

// გამოიყენე for ციკლი, რომ გაიარო ყველა რიცხვი start-იდან end-მდე.

// დაითვალე ცალ–ცალკე რამდენია ლუწი და რამდენია კენტი.

// ბოლოს დაბეჭდე: "ლუწების რაოდენობა: X, კენტების რაოდენობა: Y".


let start = Number(prompt("Please enter Number: "))

let end = Number(prompt("Please enter Number: "))


let odd = 0
let even = 0

for(i = start; i <= end; i++ ){
    if(i % 2 === 0) {
        even++
    }else{
        odd++
    }
}

console.log(`ლუწების რაოდენობა: ${even}, კენტების რაოდენობა: ${odd}`)