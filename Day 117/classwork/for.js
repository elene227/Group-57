//  1) js ში createElement ის დახმარებით შექმენით div, p, button შემდეგ p და button ჩაამატეთ div ში, ამ დივს დაამატებთ dom ში




let div = document.createElement("div")
let p = document.createElement("p")
let button = document.createElement("button")




div.appendChild(button)
div.appendChild(p)

let body = document.body

body.appendChild(div)
