



const form = document.querySelector('form')
const username = document.getElementById('username')
const password = document.getElementById('password')
let users = document.getElementById('users')
let p = document.getElementById('p')
let a = document.getElementById("you")

let list = []

form.addEventListener("submit", function(e){
    e.preventDefault()
    let input1 = true
    let input2 = true
    if(e.target.username1.value.length === 0){
        input1 = false
        e.target.username1.style.border = "solid 1px red"
    }else{
        e.target.username1.style.border = 'none'
        input1 = true
    }
    if(e.target.password1.value.length === 0){
        input2 = false
        e.target.password1.style.border = "solid 1px red"
    }else{
        e.target.password1.style.border = 'none'
        input2 = true
    }
    if(input1 && input2){
            let info = {
                username : e.target.username1.value,
                password : e.target.password1.value
            }
        list.push(info)
        localStorage.setItem('userinfo', JSON.stringify(info))
        localStorage.setItem('theinfo', JSON.stringify(list))
        document.getElementById('quizdiv').style.display = 'flex'
        users.style.display = 'none'
        a.style.display = "flex"
        p.textContent = e.target.username1.value
        document.getElementById('signout').style.display = 'flex'
    }

    
})

    

let theuser = JSON.parse(localStorage.getItem("theinfo"))

let user = JSON.parse(localStorage.getItem('userinfo')) 


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