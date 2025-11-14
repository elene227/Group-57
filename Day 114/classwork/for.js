
// მაქსიმალური და მინიმალური
//1
// let list = [1.2,3 ,3,3,3,4,56,5353,23,13213]

// console.log(Math.min(...list), Math.max(...list))


//მომრგვალება
2
console.log(Math.round(4.7))
console.log(Math.ceil(9.1))
console.log(Math.floor(-3.6))


//ხარისხში აყვანა
//3
console.log(Math.pow(3,2))
console.log(Math.pow(5,3))
console.log(Math.pow(2,5))
console.log(Math.pow(0,4))

//კვადრატული ფესვი
//4
console.log(Math.round(25**0.5))
console.log(Math.round(144**0.5))
console.log(Math.round(2**0.5))

//აბსოლუტური მნიშვნელობა 
//5
console.log(Math.abs(-8.3))
console.log(Math.abs(5))
console.log(Math.abs(-12))


//7
// კომბინირებული გამოთვლა
function calculate(num){
    num =num ** 2
    num =Math.sqrt(num)
    num = Math.floor(num)
    return num
}
console.log(calculate(5))  // arasworia


//9
//პითაგორას თეორემა
function pyth(a, b){
    let c = (a**2) + (b**2)
    return Math.sqrt(num)
}

console.log(pyth(2,5))