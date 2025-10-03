//4)შექმენი ფუქნცია findMin(arr) – მიიღოს სია და დააბრუნოს ყველაზე პატარა რიცხვი. (შეგიძლიათ მოიძიოთ და გააკეთოთ, საჭროა ლოგიკის დაწერა რომ ეს დავალება შეასრულოთ)




function findMin(arr){
    let min = 0
    for(let i = 0; i < arr.length; i++){
       if(arr[i] < min){
        min = arr[i]
       }
    }
    return min
}
console.log(findMin[12,23,23,3,434,12,2132,123,2323232323232323])