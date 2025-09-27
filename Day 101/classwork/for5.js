//6)მომხმარებელს შეეკითხეთ რიცხვი,შემდეგ 1 დან მომხმ შემოტანილ რიცხვამდე დაბეჭდეთ   რიცხვები დამიუწერეთ გვერდით ლუწია თუ კენტი




let user = Number(prompt("please enter your number here: "))


let i = 1 
while(i <= user){
    if(i % 2 == 0){
        console.log(`${i} luwia`)
    }else if(i % 2 == 1){
        console.log(`${i} kentia`)
    }
    i++
}

    