

let users = document.getElementById('users')
let p = document.getElementById('p')
let a = document.getElementById("you")

let user = JSON.parse(localStorage.getItem('userinfo')) 
console.log(user)

if(user){
    users.style.display = 'none'
    a.style.display = "flex"
    p.textContent = user.username
    document.getElementById('signout').style.display = 'flex'
}

let signout = document.getElementById('signout')

signout.addEventListener('click', function(e){
    e.preventDefault()
    localStorage.removeItem('userinfo')
    users.style.display = 'flex'
    a.style.display = "none"
    document.getElementById('signout').style.display = 'none'
})