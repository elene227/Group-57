//1.) მომხმარებელს შემოატანინეთ რიცხვი,1 იდან მომხმარებლის მიერ შემოტანილ რიცხვამდე დაატრიალეთ ლუპი და ჩაამატეთ ეს როცხვები სიაშ,შემდეგ ამ სიიდან დაბეჭდეთ მხოლოდ ლუწი რიცხვები
 


let user = Number(prompt("please enter number: "))
let list = []

for(let i = 1; i <= user; i++){
    list.push(i)
    
}

for(let n = 0; n < list.length; n++){
    if(list[n] % 2 == 0){
        console.log(list[n])
    }
}



