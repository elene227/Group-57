//7)მომხმარებელს შემოატანინეთ ადამიანის სახელი,შემდეგ შეამოწმეთ --->  თუ ცვლადში შენახული მნიშვნელობა უდრის თქვენს სახელს დაუკონსოოლოგეთ --> "we have same names" , თუ მომხმარებლის შემოტანილი მნიშვნელობა უდრის "gabrieli" ის მაშინ დაუკონსოლლოგეთ --> "you have my mentor's name" , ასევე შეამოწმე თუ მომხმარებლის მიერ შემოტანილი სახელი უდრის "goga" ს მაშინ დაუკონსოლლოგეთ --> "You have my group leader's name" ,სხვა შემთხვევაში დაუკონსოლლოგეთ  --> "Who the hell are you?"

let user = prompt("Enter Human name (: ")


if(user == "Elene"){
    console.log("we have same names")
}else if(user == "gabrieli"){
    console.log("you have my mentor's name")
}else if(user == "googa"){
    console.log("You have my group leader's name")
}else{
    console.log("who the hell are you 😭")
}