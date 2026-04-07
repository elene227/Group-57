// 3) მოცემულია ლისტი const user = [{
//     name: "nika",
//     surname: "nishnianidze",
//     address: {
//         city: {
//             street: "beliashvili"
//         },
//         country: "Georgia"
//     }
// }] მოახდინეთ ყველაფრის დესტრუქცია და დაბეჭდე საერთოდ ყველაფრის მნიშვნელობა



const user = [{
    name: "nika",
    surname: "nishnianidze",
    address: {
        city: {
            street: "beliashvili"
        },
        country: "Georgia"
    }
}] 



const[{name, surname, address: {country, city:{street} }}] = user

console.log(name)
console.log(surname)
console.log(street)
console.log(country)