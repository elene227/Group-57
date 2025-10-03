//push + for loop----
// ფუნქციამ მიიღოს ცარიელი სია და რიცხვი n.
// ციკლით ჩასვას 1-დან n-მდე ყველა რიცხვი სიაში  (push) და დააბრუნოს სია.



function array(arr, n){
    let i = 1
    while(i <= n){
        arr.push(i)
        i++
    }
    return arr
}
let arr = []
console.log(array(arr, 90))

