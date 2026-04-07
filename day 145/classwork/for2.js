// 2) შექმენი ცარიელი ობიექტი და ამ ობიექტში დესტრუქციის დროს გადაეცი ის მნიშვნელობები რასაც მომხმარებელი შემოიყვანს, მომხმარებელს შემოაყვანინე სახელი და გვარი, default მნიშნველობად ასევე ყველას მიანიჭე რაიმე რენდომ ასაკი და იმეილი




let object = {}

let username = prompt("Name: ")
let lastname = prompt("lastname: ")

const{user = username, user2 =lastname} = object


console.log()