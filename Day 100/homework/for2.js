//3)მომხმარებელს prompt–ით შეეკითხე რიცხვი.

// თუ რიცხვი > 0 → დაბეჭდე "დადებითია".

// თუ რიცხვი < 0 → დაბეჭდე "უარყოფითია".

// თუ 0 → დაბეჭდე "ნულია".


let Num = Number(prompt("Please enter Number: "))

if(Num > 0){
    console.log("დადებითია!")
}else if(Num < 0){
    console.log("უარყოფითია!")
}else if(Num === 0){
    console.log("ნულია.")
}