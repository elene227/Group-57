//5)შექმენით ფუნქცია average(arr) – მიიღოს რიცხვების სია და დააბრუნოს მათი საშუალო (ჯამი / რაოდენობა).




function average(arr){
    let sum = 0
    let count = 0
    for(i = 0; i < arr.length; i++){
        sum+=arr[i]
        count++
    }
    return sum / count 
    
}