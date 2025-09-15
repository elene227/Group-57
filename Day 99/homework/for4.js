//5)მომხმარებელს შემოატანინეთ რაიმე რიცხვი(მაგრამ ეს რიცხვია არ ვიცით სტრინგია თუ ნამბერი) შენი დავალებაა შეამოწმო თუ მომხმარებლის მიერ შემოტანილი რიცხვის ტიპი არის სტრინგი მაშინ დაუკონსოლლოგე რომ "you entered string number,so you are wrong" სხვა შემთხვევაში ანუ თუ მომხმარებელმა შემოიტანა რიცხხვი რომლის ტიპი არის number მაშინ დაატრიალეთ ფორ ციკლი 1 დან ამ რიცხვამდე და გამოიტანეთ ყველა კენტი რიცხვი კონსოლში(წინაზე ვისაუბრეთ ფუნქციაზე რომელიც იგებდა ელემენტის ტიპს,გაიხსენეთ თუა რადა მოიძიეთ,მე არ მომწეროთ არ დაგეხმარებით იჭყლიტეთ თავები ამ დავალებებზე,you will gain skill of looking up something by yourself <3 :D

let userNumber = prompt("please enter Number: ")
let userType = prompt("please enter data type: ")



if(userType == "String"){
    console.log("you have entered string Number. so its wrong")
}else if(userType == "Number"){
    for(let i=1; i <= Number(userNumber); i++){
        if(i % 2 != 0){
            console.log(i)
        }
    }
}
