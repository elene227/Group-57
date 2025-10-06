//3)მომხმარებელს შემოატანინეთ რიცხვი,შემდეგ დაატრუალეთ ფორ ციკლი 1 იდან მომხმარებლის მიერ შემოტანილ რიცხვამდე და იპოვე ამ რიცხვების საშუალო არითმეტიკული,შემდეგ შეამოწმეთ,თუ მიღებული საშვალო არის 20ზე მეტი da ლუწი,მაშინ დააკონსოლლოგე რომ "good mark" შემდეგ შეამოწმეთ თ რს მიღებული საშვალო არის 20 ზე ნაკლები da კენტი დაუკონსოლლოგეთ --> 'very bad mark"




let user = Number(prompt("please enter number: "))


let sum = 0
for(let i = 0; i <= user; i++){
    sum+=i
}


let average = sum/user

if(average > 20 && average % 2 == 0){
    console.log("good mark.")
}else if(average < 20 && average % 2 == 1){
    console.log("very bad mark.")
}
