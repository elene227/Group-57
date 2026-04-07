// 1)მოცემულია ობიექტი:

// const company = {
//   name: "TechCorp",
//   location: {
//     country: "Georgia",
//     city: {
//       name: "Tbilisi",
//       street: "Rustaveli"
//     }
//   },
//   employees: [
//     { name: "Nika", age: 22 },
//     { name: "Giorgi", age: 25 }
//   ]
// }

// let{name, location:{country, city:{name:cit, street}}, employees:[{name:nika}, {age: second}]} = company

// console.log(name)
// console.log(country)
// console.log(cit)
// console.log(street)

// დესტრუქციის გამოყენებით ერთ ლაინში გამოიტანე კონსოლში:

// company name

// country

// city name

// street

// პირველი employee-ს name

// მეორე employee-ს age







// const university = {
//   name: "TSU",
//   faculty: {
//     title: "Computer Science",
//     head: {
//       name: "Irakli",
//       age: 50
//     }
//   },
//   students: [
//     {
//       name: "Ana",
//       grades: {
//         math: 90,
//         js: 95
//       }
//     }
//   ]
// }

// const{name:un, faculty:{title, head:{name:ir}}, students:[{name:ana, grades:{math, js}}]} = university

// დესტრუქციის გამოყენებით გამოიტანე კონსოლში:

// university name

// faculty title

// head name

// student name

// math grade

// js grade





// 3)const store = {
//   name: "MegaShop",
//   address: {
//     city: "Batumi",
//     location: {
//       street: "Chavchavadze",
//       number: 10
//     }
//   },
//   products: [
//     {
//       name: "Laptop",
//       price: 2500
//     },
//     {
//       name: "Phone",
//       price: 1200
//     }
//   ]
// }
// დესტრუქციით გამოიტანე:

// store name

// city

// street

// first product name

// second product price




const user = {
  name: "Nika",
  surname: "Beridze",
  address: {
    country: "Georgia",
    city: {
      name: "Tbilisi",
      street: "Pekini"
    }
  }
}

const{name:name1, surname, address:{country, city:{name:name3, street}},} = user


console.log(name1)
console.log(surname)
console.log(country)
console.log(name3)
console.log(street)



// 📌 დესტრუქციის გამოყენებით გამოიტანე:

// name

// surname

// country

// city name

// street








const car = {
  brand: "BMW",
  model: "M5",
  engine: {
    type: "V8",
    power: {
      hp: 600,
      torque: 750
    }
  }
}

const{brand, model, engine:{type, power:{hp, torque}}} = car



// დესტრუქციის გამოყენებით გამოიტანე:

// brand

// model

// engine type

// hp

// torque