//1)შექმენი ფუნქცია sumArray(arr), რომელიც მიიღებს რიცხვების სიას პარამეტრად და დააბრუნებს სიაში მყოფი რიცხვების  ჯამს.


function sumArray(arr){
    let sum = 0
    for(let i=0; i<arr.length; i++){
        sum+=arr[i]
    }
    return sum
}

console.log(sumArray([10, 10, 10, 10, 10, 10]))
