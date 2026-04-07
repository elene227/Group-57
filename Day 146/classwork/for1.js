store = {
  name: "MegaShop",
  address: {
    city: "Batumi",
    location: {
      street: "Chavchavadze",
      number: 10
    }
  },
  products: [
    {
      name: "Laptop",
      price: 2500
    },
    {
      name: "Phone",
      price: 1200
    }
  ]
} 

const{name:name1, address: city, ...rest} = store

console.log(rest)
console.log(city)
console.log(name1)
//მოცემული ობიექტიდან დესტრუქცია გაუკეთე name და city ს დანარჩენი კი გამოიტანე სპრედ ოპერატორის დახმარებით