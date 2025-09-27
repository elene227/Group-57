//6)მომხმარებელს შემოატანინე რიცხვი,სანამ მომხმარებელი არ შემოიტანს 0 იანს იქამდე  შეამოწმეთ -->თუ მომხმარებლის შემოტანილი რიცხვი არის უარყოფითი დაუკონსოლლოგეთ --> "negative number" , თუ მომხმარებელმა შემოიტანა დადებითი რიცხვი დაუკონსოლლოგეთ --> "You entered posotive number" ,ამის შემდეგ კი თავიდან მოსთხოვეთ რომ შშემოიტანოს რიცხვი მომხმარებელმა,თუ შემოიტანა მომხმარებელმა 0 ეს იმას ნიშნავს რომ ვაილ ლუპი არ იმუშავებს და ქვემოთ მის გარეთ დაუკონსოლლოგეთ -- > "you guessed the number,the loop is over" 




let user = Number(prompt("please enter your number here: "))


while(user !== 0){
    if(user < 0){
        console.log("Negative number.")
    }else{
        console.log("Positive Number")
    }
    user = Number(prompt("please enter your number here: "))
}

console.log("You have guesed the number the loop is over :P")