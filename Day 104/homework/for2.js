//unshift----
// ფუნქციამ მიიღოს სია და ახალი ელემენტი. ახალი ელემენტი დაამატოს სიის დასაწყისში და დააბრუნოს განახლებული სია.

// ფუნქციამ მიიღოს სია და ქალაქის სახელი. დაამატოს ეს ქალაქი სიის დასაწყისში და დააბრუნოს სია.

// shift----
// ფუნქციამ მიიღოს სია. წაშალოს პირველი ელემენტი და დააბრუნოს განახლებული სია.

// length----
// ფუნქციამ მიიღოს სია და დააბრუნოს ტექსტი: "სიაში არის N ელემენტი".

// concat----
// ფუნქციამ მიიღოს ორი სია და დააბრუნოს ახალი სია, სადაც გაერთიანებულია ორივე.

// ფუნქციამ მიიღოს ორი სია: სახელების სია და გვარების სია. გააერთიანოს ისინი და დააბრუნოს სრული სია.




let forList = ["H", 3, "Z", "N", 3, "Q", "A"]

console.log(forList.unshift(3))

let city = ["New York",
    "Paris",
    "Tokyo",
    "Singapore",
    "Rome",
    "Madrid",
    "Barcelona"]

console.log(city.unshift("London"))



let forList1 = ["H", 3, "Z", "N", 3, "Q", "A"]

console.log(forList1.shift())

let forList2 = ["H", 3, "Z", "N", 3, "Q", "A"]

console.log(`this list has ${forList2.length} elements`)


let list1 = ["H", 3, "Z"]

let list2 = [3, "L"]

let hezel = list1.concat(list2)

console.log(hezel)



let names = ["Lika", "Nika", "Irakli"]

let lastnames = ["Jojua", "Baghaturia", "Gedenidze"]

let namesAndLastnames = names.concat(lastnames)

console.log(namesAndLastnames)


