// 1) მოცემულია მასივი const numbers = [3, 5, 7, 9]; შექმენი ახალი მასივი, სადაც ყველა რიცხვი *2 იქნება.

const numbers = [3, 5, 7, 9];

numbers.forEach(num => {
    console.log(num *2)
});









// 2) გამოიყენე forEach() და იპოვე ყველა რიცხვის ჯამი. const numbers = [10, 20, 30, 40];



const numbers1 = [10, 20, 30, 40];
let no = 0
numbers1.forEach(nums => {
    no+=nums
})











// 3) შექმენი ახალი მასივი, სადაც ყველა სახელი იქნება დიდი ასოებით.const names = ["nika", "ana", "gio"];






// 4) გამოიყენე forEach() და დაბეჭდე თითოეული ელემენტი თავისი ინდექსით. onst colors = ["red", "green", "blue"];








// 5) მოცემულია ობიექტების მასივი. შექმენი ახალი მასივი მხოლოდ სახელებით. 
// const users = [
//   {name: "Nika", age: 20},
//   {name: "Ana", age: 25},
//   {name: "Gio", age: 17}
// ];



// 6) გამოიყენე forEach() და დაბეჭდე მხოლოდ ის მომხმარებლები, რომლებიც 18 წელზე მეტის არიან. 
// const users = [
//   {name: "Nika", age: 20},
//   {name: "Ana", age: 16},
//   {name: "Gio", age: 25}
// ];

















// 7) შექმენი ახალი მასივი, სადაც ყველა პროდუქტის ფასი 10%-ით შემცირებული იქნება.
// const products = [
//   {name: "Phone", price: 1000},
//   {name: "Laptop", price: 2000}
// ];