//5)შექმენი ცვლადი სადაც მომხმარებელს შემოატანინებ სტრინგს(პაროლს),ასევე შექმენი ცვლადი სადაც შეინახავ პაროლს,შემდეგ შეამოწმე,თუ მომხმარებლის შემოტანილი პაროლი არის იგივე პაროლი რაც შენ შეინახე ცვლადში,დაუპრინტე --> "you guessed" , სხვა შემთხვევაში დაგჭირდებათ ვაილ ლუპი რომელიც გააკეთებს შემოდეგ მოქმედებას --> სანამ მომხმარებლის პაროლი არ იქნება თქვენს მიერ შენახული პაროლისა,იქამდე გაუმეორეთ რომ თავიდან შემოიყვანოს მომხმარებელმა პაროლი,თუ პაროლი გაარტყა მაშინ აქაც დაუკონსოლლოგეთ --> "you guessed"





let password = "again"
let userInput = prompt("please enter your password here: ")


if(userInput === password){
    console.log("congrats, you have guessed the passwork!")
}else if(userInput !== password){
    while(userInput !== password){
        userInput = prompt("Wrong passwork, please try again: ")
    }
    console.log("You have guessed!!")
}
