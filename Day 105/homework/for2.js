//3)შექმენი ფუქნცია რომელიც იღებს მოსწავლეების სიას,შენი დავალებაა რომ გაიგო --> თუ რომელიმე მოსწავლის სახელი იწყება ასო 'გ' ზე მაშინ ასეთი მოსწავლის სახელი შეცვალეთ false მნიშვნელობით




// function func(arr){
//     for(let i = 0; i < arr.length; i++){
//         let word = arr[i]
//         if(word[0] == "გ"){
//             word = false
//         }
//     }
// }


function func(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i][0] == "გ"){
            arr[i] = false
        }
    }
    return arr
}
console.log(func(['გია', 'ვახო', 'ნიკა']))

