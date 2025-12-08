// 2) დაამატეთ საიტზე ღილაკი როცა ამ ღილაკს დააჭერთ კონსოლში დაიბეჭდოს რომ ღილაკს დაეჭირა და ამასთან ერთად გვერძე მიეწეროს მერამდენე დაჭერა(დაკლიკება მოხდა)







let button = document.getElementById("button")

let countt = 1

function count(){
    console.log(`clicks ${countt}`)
    countt++

}

button.addEventListener("click", count)

