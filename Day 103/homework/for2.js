//3)შექმენი ფუნქცია findMax(arr) – მიიღოს სია და დააბრუნოს უდიდესი რიცხვი. (შეგიძლიათ მოიძიოთ და გააკეთოთ, საჭროა ლოგიკის დაწერა რომ ეს დავალება შეასრულოთ)



function findMax(arr){
    let max = 0
    for(let i = 0; i < arr.length; i++){
       if(arr[i] > max){
        max = arr[i]
       }
    }
    return max
}
console.log(findMax[12,23,23,3,434,12,2132,123,2323232323232323])