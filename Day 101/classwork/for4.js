//5)მომხმარებელს შეეკითხეთ რიცხვი,შემდეგ 1 დან მომხმ შემოტანილ რიცხვამდე დაბეჭდეთ კენტი რიცხვები 


let user = Number(prompt("please enter your number here: "))


let i = 1
while(i <= user){
    if(i % 2 == 1){
        console.log(i)
    }
    i++
}

