//1)მომხმარებელს შემოატანინე რაიმე რიცხვი,1 დან მომხმარებლის შემოტანილ რიცხვამდე დათვალე თუ რამდენი ლუწი და რამდენი კენტი რიცხვია



let usernum = Number(prompt("please enter number: "))

let luwi = 0
let kenti = 0

let i = 1
while(i <= usernum){
    if(i % 2 == 0)
        luwi+=1
    else if(i % 2 == 1){
        kenti+=1
    }
    i++
}

console.log(luwi, kenti)