// 1)შექმენი ობიექტი შენს შესახებ,შენი დავალებაა რომ გამოიტანო კიები და ვალუები ცალ ცალკე for in ის გამოყენებით

// 2)შექმენი ობიექტი ავტომობილის შესახებ ,გქონდეს year , model , milage , color , შენი დავალებაა რომ შექმნა სია ვალუებისა,შემდეგ გადაუარო ამ სიას და გმაოიტანო ცალ ცალკე თითოეული value გამოიყენე for of



let about = {
    name : "3lene",
    favSub : "Astronomy",
    job : "unemployedx_x"
}

 for(let i in about){
    console.log(about[i])
    console.log(i)
}


let cars = {year : "idk" , model : "idk", milage : "idk", color : "idk"}

let vals = Object.values(cars)


for(let i of  vals){
    console.log(i)
}