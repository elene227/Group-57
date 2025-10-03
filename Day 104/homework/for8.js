//pop + for loop----
// ფუნქციამ მიიღოს სია.
// ციკლით 3-ჯერ წაშალოს სიის ბოლო ელემენტი (pop) და ბოლოს დააბრუნოს დარჩენილი სია.




function array(arr){
    
   
    for(i = 0; i <= 3; i++){
        arr.pop()
    }
    return arr
}
let arr= ["h", "h", 2, 1, 3, 4, "N"]
console.log(array(arr))

