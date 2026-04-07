// 1)მომხმარებელს შემოატანინე რიცხვი (1–7).
// switch–case გამოყენებით გამოიტანე შესაბამისი კვირის დღე.
// თუ სხვა რიცხვია → "არასწორი დღე".

let user = prompt(Number("please en6er number: "))

switch (user){
    case 1:
        console.log(user)
    case 2:
        console.log(user)
    case 3:
        console.log(user)
    case 4:
        console.log(user)
    case 5:
        console.log(user)
    case 6:
        console.log(user)
    case 7:
        console.log(user)
    case 0:
        console.log(user)
}



// 2)მომხმარებელს შემოატანინე თვის ნომერი (1–12).
// switch–case გამოყენებით განსაზღვრე სეზონი:

// 12,1,2 → ზამთარი

// 3,4,5 → გაზაფხული

// 6,7,8 → ზაფხული

// 9,10,11 → შემოდგომა


let userS = prompt(Number("please en6er number: "))

switch (userS){
    case 12:
        console.log("winter")
    case 2:
        console.log("winter")
    case 1:
        console.log("winter")

    case 3:
        console.log("spring")
    case 4:
        console.log("spring")
    case 5:
        console.log("spring")

    case 6:
        console.log("summer")
    case 7:
        console.log("summer")
    case 8:
        console.log("summer")
    
    case 9:
        console.log("autumn")
    case 10:
        console.log("autumn")
    case 11:
        console.log("autumn")
}






// 3)მომხმარებელს შემოატანინე:

// პირველი რიცხვი

// ოპერატორი (+, -, *, /)

// მეორე რიცხვი

// switch–case გამოყენებით შეასრულე ოპერაცია.
// თუ ოპერატორი არასწორია → "არასწორი ოპერატორი".

// 4)მომხმარებელს შემოატანინე ქულა (0–100).
// switch(true) <--მოიძიეთ ///// გამოიყენე და დააბრუნე:

// 90–100 → A

// 80–89 → B

// 70–79 → C

// 60–69 → D

// <60 → F




// 5)მომხმარებელს შემოატანინე ტექსტი:
// "car", "bus", "bike", "train"

// switch–case გამოყენებით დაბეჭდე შესაბამისი აღწერა.
// default შემთხვევაში → "უცნობი ტრანსპორტი".

// 6)მომხმარებელს შემოატანინე რიცხვი.
// switch(true) გამოყენებით განსაზღვრე:

// თუ არის 0

// თუ არის ლუწი

// თუ არის კენტი

// 7)ცვლადი role:
// შეამოწმე თუ ცვლადში ინახება შემდეგი მნშვნელობები გამოიტანე შესაბამისი ტექსტი

// "admin"

// "user"

// "guest"

// switch–case-ით განსაზღვრე წვდომა.
// თუ სხვა მნიშვნელობაა -> default ->
// "როლი არ არის განსაზღვრული"

// 8)მომხმარებელს შემოატანინე ფერი:
// "red", "green", "blue"

// switch–case-ით დაბეჭდე შესაბამისი ტექსტი.
// თუ სხვა ფერია → default →
// "ასეთი ფერი სისტემაში არ არის"





// <------single-line function----->

// 9)დაწერე single-line arrow function, რომელიც იღებს ორ რიცხვს და აბრუნებს მათ ჯამს.

const sum = (num1, num2) => num1 + num2

console.log(sum(1, 2))
// 10)დაწერე single-line arrow function, რომელიც იღებს რიცხვს და აბრუნებს:

// "ლუწი" თუ ლუწია
// "კენტი" თუ კენტია
// (გამოიყენე ternary)

const wn = (num) => num % 2 ==0 ? console.log("luwia"): console.log("kentia")



// 11)დაწერე single-line arrow function, რომელიც აბრუნებს გადაცემული რიცხვის კვადრატს.

const c = (num) => num*num




// 12)დაწერე single-line arrow function, რომელიც იღებს ტექსტს და აბრუნებს მის სიგრძეს

const l = (str) => str.length

// 13)დაწერე single-line arrow function, რომელიც ტექსტს აბრუნებს მთლიანად დიდი ასოებით.


// 14)დაწერე single-line arrow function, რომელიც იღებს ასაკს და აბრუნებს

// "სრულწლოვანი" თუ >= 18
// "არასრულწლოვანი" თუ < 18

// 15)დაწერე single-line arrow function, რომელიც იღებს name და age-ს და აბრუნებს ობიექტს ამ ველებით
