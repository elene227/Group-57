//7)შექმენი ფუნქცია რომელსაც არგუმენტად გადაეცემა სია,შენი დავალებაა რომ ამ სიიდან გამოიტანო თითეული ელემენტი ცალ ცალკე,გამოიყენე for loop/while loop



function fw(arr){
    let i = 0
    while(i < arr.length){
        console.log(arr[i])
        i++
    }

    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
        
    }
}