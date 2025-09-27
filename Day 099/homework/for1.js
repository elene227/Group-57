//2)მომხმარებელს შემოატანინეთ სახელი და რიცხვი,შემდეგ შეამოწმეთ,თუ მომხმარებლის მიერ შემოტანილი სახელი არის "გიორგი" და მომხმარებლის მიერ შემოტანილი რიცხვი არის 18 ზე მეტი მაშნ დაუკონსოლლოგეთ "your name is giorgi and you are adult" თუ მომხმარებლის მიერ შემოტანილი სახელი არის ნიკა და ასაკი არის 18 ზე ნაკლები და 11 ზე მეტი დაუკონსოლლოგეთ რომ "your name is nika and you are younger" თუ მომხმარებლის მიერ შემოტანილი სახელი არის "saba" ან "irakli" და ასაკი არის 11 ზე ნაკლები და 5 ზე მეტი მაშინ დაუკონსოლლოგეთ რომ "you have nice name but you are too young" სხვა შემთხვევაში დაუპრინტე რომ you are not born yet D

let userName = prompt("please enter your name here: ")
let userNumber = Number(prompt("Please enter A random Number: "))


if(userName == "გიორგი" && userNumber >= 18){
    console.log("your name is giorgi and you are an adult.")
}else if(userName == "ნიკა" ?? userNumber < 18 && userNumber > 11){
    console.log("your name is nika and you are younger.")
}else if(userName == "saba" || userName == "irakli" && userNumber < 11 && userNumber > 5){
    console.log("you have a nice name but you are yoo young.")
}else{
    console.log("Bro you arent even born yet :D.")
}