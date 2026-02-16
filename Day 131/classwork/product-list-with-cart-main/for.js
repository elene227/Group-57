





let addcartButton = document.getElementsByClassName("addcart")
let adding = document.getElementsByClassName("adding")
let plus = document.getElementsByClassName("plus")
let minus = document.getElementsByClassName("minus")
let p = document.getElementsByClassName("p")

for(let i = 0; i < addcartButton.length; i++){
    addcartButton[i].addEventListener("click", function(){
        addcartButton[i].style.display = "none"
       
        adding[i].style.display = "flex"
    })

}



for(let i = 0; i < plus.length; i++){
    plus[i].addEventListener('click', function(){
        let nm = Number(p[i].textContent)
        
        p[i].textContent = nm + 1


        
        let newitem = document.getElementById('maincart')
        newitem.innerHTML = `
        <div class="yourCart">
            <h2 id="yourcart">Your Cart(0)</h2>
        </div>`
       
    })

}


for(let i = 0; i < plus.length; i++){
    minus[i].addEventListener('click', function(){
        let np = Number(p[i].textContent)
        if(np > 0){
             
            p[i].textContent = np-1
        }
        
    })
}





// let mainCart = document.getElementById('maincart');
// // 1. Try to find if this item is ALREADY in the cart
// let existingItem = document.getElementById(`cart-item-${i}`);

// if (!existingItem) {
//     // 2. It doesn't exist, so create a NEW div
//     let cartRow = document.createElement("div"); 
//     cartRow.id = `cart-item-${i}`; // Now it has a unique ID we can find later
    
//     // 3. Put the HTML inside this new row
//     cartRow.innerHTML = `
//         <div class="item-details" style="display: flex; justify-content: space-between;">
//             <p>Product Name</p>
//             <p><span class="qty">${p[i].textContent}</span>x</p>
//         </div>
//     `;
    
//     // 4. Add it to the main cart without deleting the H2 or other items
//     mainCart.appendChild(cartRow);
    
// } else {
//     // 5. It ALREADY exists! Just find the "qty" span inside it and update it
//     existingItem.querySelector('.qty').textContent = p[i].textContent;
// }