// 1)შექმენი სიას სადაც შეინახავ რამდენიმე ობიექტს, ყველა ობიექტში იყოს მსგავსი კიები მაგ: name ,surname , email , შენი დავალებაა რომ მოახდინო სიის დესტრუქცია შემდეგ თითოეული დესტრუქცია და მათი მნიშვნელოობების დაბეჭდვა




let list = [
    {name: "w", surname: "kakachia"},
    {name: "y", surname: "tevzisvili"}

]


const [name1, name2,] = list

let{name: Name, surname: Surname} = name1
let{name: names, surname: surname1} = name2

console.log(`${Name} and ${surname}`)
console.log(`${names} and ${surname1}`)