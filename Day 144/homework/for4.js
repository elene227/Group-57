// შექმენით პიროვნების ობიექტი, რომელსაც აქვს სახელი, გვარი და მისამართი (მისამართი ცალკე ობიექტია და შეიცავს ქალაქსა და ქვეყანას).
// დავალება: დესტრუქციის გამოყენებით მიიღე სახელი, ქალაქი და ქვეყანა.



let person = {
    name:"email",
    lastname: "kakachia",
    location: {country:"saqartvelo", city:"samegrelo"}
}



let{name, location:{country, city}} = person


