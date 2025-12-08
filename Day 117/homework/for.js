


let main = document.getElementById("main")



let img = document.getElementsByTagName("img")



// img[0].style='width:100px;'


main.innerHTML = `<img width='100px' src="https://images.seeklogo.com/logo-png/31/1/twitter-logo-png_seeklogo-318424.png" alt=""> <h1>
            TWITTER
        </h1>

        <p>
            Lorem ipsum dolor sit amet,<br>
            consectetur adipisicing elit.<br>
            Expedita ullam aliquid non<br>
            eligendi. nemo est neque<br>
            reiciendis error?
        </p>
        <button>
            READ MORE
 </button>
 `

let body = document.body


body.style= `display:flex; justify-content:center; align-items: center; height:100vh;`

main.style= `display:flex; flex-direction: column; text-align:center; justify-content:center; align-items: center; border:solid 2px black; padding:20px; border-radius:10px`