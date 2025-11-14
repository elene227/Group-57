// 6)დააგენერირე შემთხვევითი  (მთელი) რიცხვი 1-დან 10-მდე, Math.random()-ისა და Math.floor()-ის კომბინაციით.

// 7)მომხმარებელს შემოატანინე რიცხვი და გამოიტანე მისი კვადრატული ფესვი Math.sqrt()-ის გამოყენებით.

// 8)მომხმარებელს შემოატანინე რიცხვი და გამოიტანე მისი ხარისხი (მაგ. კვადრატი ან კუბი) Math.pow()-ის გამოყენებით.

// 9)დააგენერირე 5 შემთხვევითი მთელი რიცხვი 1-დან 100-მდე და იპოვე ამ რიცხვებიდან
// მინიმალური და მაქსიმალური მნიშვნელობა Math.random(), Math.floor(), Math.min() და Math.max()-ის გამოყენებით.

// 10)მომხმარებელს შემოატანინე რიცხვი და გამოიტანე:
// მისი კვადრატი (Math.pow()),

// ფესვი (Math.sqrt()),

// დამრგვალებული მნიშვნელობა (Math.round()).
// ყველა შედეგი ცალ-ცალკე გამოიტანე console.log()-ით.

// 11)შექმენი პატარა “მათემატიკური თამაში”:
// დააგენერირე შემთხვევითი რიცხვი 1-დან 10-მდე.
// მომხმარებელს შემოატანინე რიცხვი.
// თუ მომხმარებლის რიცხვი დაემთხვა დაგენერირებულს — გამოიტანე "სწორია!",
// სხვა შემთხვევაში "ცდები!".



// console.log(Math.round(Math.random() * 10)+1)


// let user = prompt(Number("please enter your number here: "))

// console.log(Math.sqrt(user))



// let user1 = prompt(Number("please enter your number here: "))

// console.log(Math.pow(user1, 3))


// let m = ((Math.floor(Math.random() * 100)+1))
// let m1 = ((Math.floor(Math.random() * 100)+1))
// let m2=((Math.floor(Math.random() * 100)+1))
// let m3 = ((Math.floor(Math.random() * 100)+1))
// let m4 = ((Math.floor(Math.random() * 100)+1))
// let m5= ((Math.floor(Math.random() * 100)+1))

// console.log(Math.min(m1, m2, m3, m4, m5))
// console.log(Math.max(m1, m2, m3, m4, m5))







// let user1 = prompt(Number("please enter your number here: "))

// console.log(Math.pow(user1, 2))


// console.log(Math.sqrt(user1))

// console.log(Math.round(user1))



let m = ((Math.floor(Math.random() * 10)+1))
let user1 = prompt(Number("please enter your number here: "))

if(m === user1){
    console.log("correct!!!")
}else{
    console.log("Wrong!!")
}