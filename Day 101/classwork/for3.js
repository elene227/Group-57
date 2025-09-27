//4))მომხმარებელს შეეკითხეთ რიცხვი,შემდეგ 1 დან მომხმ შემოტანილ რიცხვამდე დაბეჭდეთ ლუწი რიცხვები



let user = Number(prompt("please enter your number here: "))


i = 0
while(i <= user){
    if(i % 2 == 0){
        console.log(i)
    }
    i++
}