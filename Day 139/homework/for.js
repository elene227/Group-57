// 1)შექმენი ფუნქცია checkNumber(num)

// პარამეტრი: num

// თუ რიცხვი დადებითია → დააბრუნოს "Positive"

// თუ უარყოფითია → "Negative"

// თუ 0-ია → "Zero"

// გამოიყენე ternary operator

// function checkNumber(num){
//     num = 9
//     num > 0 ? console.log("Positive"): num === 0 ? console.log("Zero"): console.log("Negative")
// }
// checkNumber()

// 2)შექმენი ფუნქცია gradeCategory(score)

// 90+ → "Excellent"

// 75–89 → "Good"

// 50–74 → "Average"

// 0–49 → "Fail"

// function gradeCategory(score){
//     score >= 90 ? console.log("Excellent"): score >= 75 && score <= 89 ? console.log("Good"): score >= 50 && score <= 74 ? console.log("Average"): console.log("Fail")
// }



// 3)შექმენი ფუნქცია triangleType(a, b, c)

// თუ ყველა გვერდი ტოლია → "Equilateral"

// თუ ორი გვერდი ტოლია → "Isosceles"

// თუ ყველა განსხვავებულია → "Scalene"

// გამოიძახე ფუნქცია სხვადასხვა არგუმენტებით რამდენჯერმე

// function triangleType(a, b, c){
//     a = 5
//     b = 5
//     c = 5
//     a === b && b === c  ? console.log('Equilaternal'): a === b || b === c || a === c? console.log("Isosceles"): console.log(Scalene)
// }
// triangleType()

// 4)შექმენი ფუნქცია numberStatus(num)

// თუ ლუწი და დადებითია → "Positive Even"

// თუ ლუწი და უარყოფითია → "Negative Even"

// თუ კენტი და დადებითია → "Positive Odd"

// თუ კენტი და უარყოფითია → "Negative Odd"

// თუ 0 → "Zero"

// გამოიძახე ფუნქცია სხვადასხვა არგუმენტებით რამდენჯერმე

function numberStatus(num){
    num % 2 === 0 && num > 0? console.log("Positive Even"): num % 2 === 0 && num < 0? console.log("Negative Even"): !num % 2 === 0 && num > 0 ? console.log("Positive Odd"): !num % 2 === 0 && num < 0 ? console.log("Negative Odd"): console.log("Zero")
    return num
}

numberStatus(23)
numberStatus(24)




// 5)შექმენი ფუნქცია login(username, password)

// სწორი მონაცემები:
// username: "admin"

// password: "1234"

// მომხმარებელს შემოატანინე username და password და გადაეცით ფუნქციას არგუმენტად

// შეამოწმე:

// ორივე თუ სწორია → "Welcome"

// username სწორია, password არა → "Wrong password"

// სხვა შემთხვევაში → "Access denied"


// function Login(username, password){
//     username = true
//     password = false
//     username && password ? console.log("Welcome"): username && !password ? console.log("Wrong password"): console.log("acess denied")
// }
// Login()