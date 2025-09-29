//2)დაწერე ფუნქცია countEvenOdd(arr), რომელიც მიიღებს რიცხვების სიას და დაბეჭდავს რამდენია ლუწი და რამდენი კენტი.

function countEvenOdd(arr){
    let luwi = 0
    let kenti = 0
    let i = 0
    while(i < arr.length){
        if(arr[i] % 2 ==1){
            kenti++
        }else{
            luwi++
        }
        i++
    }
    return `${kenti} ${luwi}`
    
    
}
console.log(countEvenOdd([1,23,324,54,23,13,23,23,12, 12, 12, 12, 12,]))