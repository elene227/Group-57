// 6)გვერდზე იყოს ორი <p>.
// JS-ით გაცვალე ერთმანეთის textContent-ები
// (პირველის ტექსტი გახდეს მეორის და პირიქით).




let p = document.getElementsByTagName("p")



let r = p[0].textContent
p[0].textContent = p[1].textContent 



p[1].textContent = r