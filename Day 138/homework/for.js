// 1)კომენტარის სახით ახსენით თუ რა არის truthy და falsy მნშიშვნელობები
//falsey = false 0 null '' undefined Nan false values
// truthy =  string number decimal true truthy values 







// 2)let values = [0, "0", "", "false", false, null, undefined, [], {}, NaN, 25];

// ამ სიიდან :

// ცალკე მასივში ჩაწერე truthy მნიშვნელობები

// ცალკე მასივში ჩაწერე falsy მნიშვნელობები

// გამოიყენე for of და სიის მეთოდი რომელიც ამატემს ელემენტებს სიაში

// დაბეჭდე ორივე

let values = [0, "0", "", "false", false, null, undefined, [], {}, NaN, 25];
let t = []
let f = []
for(let i of values){
    if(i){
        t.push(i)
    }else{
        f.push(i)
    }
 

}

console.log(t)
console.log(f)





// 3)შექმენი ფუნქცია register(username, password) 

// თუ ორივე მნიშვნელობა truthy არის → დაბეჭდე "Registration successful"

// თუ რომელიმე falsy არის → დაბეჭდე "All fields are required"

// გამოიძახე ფუნქცია სხვადასხვა მნიშვნელობებით და შეამოწმე შედეგი.

function register(username, password){
    username = 10
    password = 313
    if(username && password){
        return("Registration successful")
    }else{
        return("All fields are required")
    }

}
console.log(register())






// 4)შექმენი ცვლადი

// userName = ""

// შემდეგ შექმენი ცვლადი და ამ ცვლადს მიენიჭოს --->

// თუ userName არის truthy მიენიჭოს მასში შენახული მნიშვნელობა და თუ userName არ არის truthy მიენიჭოს "guest"

// გამოიყენე || ოპერატორი

let userName = ''
let final = userName || 'guest'
console.log(final)

// 5)ternary ოპერატორის გამოყენებით დააკონსოლლოგე:

// "Positive" თუ რიცხვი მეტია 0-ზე

// "Negative or Zero" სხვა შემთხვევაში

let num = 0

num > 0 ?  console.log("Positive"): console.log("Negative or zero")



// 6)ternary-ის გამოყენებით განსაზღვრე არის თუ არა რიცხვი ლუწი.

// გამოტანე:

// "Even" თუ ლუწია

// "Odd" თუ კენტია(სხვა შემთხვევაში)

let num1 = 2
num1 % 2 === 0 ? console.log("Even"): console.log("Odd")

// 7)შექმენი ცვლადი age.

// ternary-ის გამოყენებით:

// თუ ასაკი 18-ზე მეტია ან ტოლია → "Adult"

// სხვა შემთხვევაში → "Minor"

let age = 17
age >= 18 ? console.log("Adult"): console.log("Minor")

// 8)მოცემულია ქულა score.

// ternary-ის გამოყენებით დააბრუნე:

// "Excellent" თუ 90+

// "Good" თუ 70–89

// "Fail" სხვა შემთხვევაში

// (აქ უკვე ჩაშენებული ternary დასჭირდებათ რაზეც  გაკვეთილზეც ვისაუბრეთ)

// # დავალებების გარეშე არც ერთი მოსწავლე შემოხვიდეთ(გახვალთ გააკეთებთ და შემოხვალთ გაკვეთილზე)

let score = 50
score >= 90 ? console.log("Excellent"): score <= 89 && score >= 70 ? console.log("Good"): console.log("Fail")