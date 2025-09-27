//მომხმარებელს შემოატანინეთ რაიმე რიცხვი(გადააქცეიეთ მთლიანი prompt number ტიპის მონაცემად რომ მომს=ხმარებლის მიერ შემოტანილი მნშვნელობა იყოს number ტიპის)შემდეგ შეადარეთ, თუ მომხმარებლის მიერ შემოტანილი რიცხვი არის მეტი 0 ზე და არის ლუწი მაშინ დაუკონსოლლოგეთ --> "this number is positive and Even" ,შემდეგ შეამოწმეთ 
//თუ მომხმარებლის შემოტანილი რიცხვი არის ნაკლები 0 ზე და არის კენტი მაშინ დაუკონსოლლოგეთ ---> "this number is Odd" , სხვა შემთხვევაში დაუკონსოლლოგეეთ "This number is zero"

let user = Number(prompt("enter num: "))

if(user > 0 && user % 2 === 0) {
    console.log("This number is positive and Even")
} else if (user < 0 && user % 2 !== 0 ){
    console.log("this number is OddQ")
}else{
    console.log("this number is zero")
}