//ყველა მეთოდი რაც ვისწავლეთ + for loop----

// ფუნქციამ მიიღოს სია.

// დასაწყისში ჩასვას "Start" (unshift)

// ბოლოში "End" (push)

// წაშალოს პირველი (shift)

// წაშალოს ბოლო (pop)

// გააერთიანოს მეორე სიასთან (concat)

// for-ით დაბეჭდოს ყველა ელემენტი.
// ბოლოს დააბრუნოს "საბოლოო სიის სიგრძე: N".

function func(arr, arr1){
    arr.unshift("Start")
    arr.push("End")
    arr.shift()
    arr.pop()
    let both =arr.concat(arr1)
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
    console.log(`საბოლოო სიის სიგრძე ${arr.length}`)



}