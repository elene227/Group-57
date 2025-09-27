//8)მომხმარებელს შემოატანინე ასაკი და სახელი,შემდეგ შეამოწმეთ --> თუ სახელი უდრის "nika" და ასაკი მეტია 18 ზე დაუკონსოლლოგეთ -->"your name is nika and you are adult" , ასევე შეამოწმეთ თუ შემოყვანილი სახელი უდრის "dorblavaso" და შემოტანილი ასაკი ნაკლებია 18 ზე მაშინ დაუკონსოლლოგეთ --> "You are dorbla and you are too young" სხვა შშემთხვევაში დაუკონსოლლოგეთ --> "you have weird name and age"


let username = prompt("please enter your name: ")
let userage = prompt("please enter your age: ")

if(username == "nika" && userage > 18){
    console.log("your name is nika and you are adult")
}else if(username == "dorblavaso" && userage < 18){
    console.log("You are dorbla and you are too young")
}else{
    console.log(". . .")
}
