











let body = document.body
let main = `
    <div style='display:flex; justify-content: center; align-items: start; flex-direction: column; gap:5px; background-color: white; padding:20px; border-radius: 20px; box-shadow: 15px 5px 0px black; border:black solid 1.6px'>
        <img  style='width:300px; border-radius: 10px;' src="./ee.png">
        <div style='background-color:rgb(255, 200, 0); padding:5px; border-radius: 5px;'>Learning</div>
        <p>Published 21 Dec 2023</p>
        <h2>HTML $ CSS foundations</h2>
        <p>
            These languages are the backbone of every<br>
            website, defining structure, content, and<br>
            presentation
        </p>
        <div style='display:flex; flex-direction: row;'>
            <img src="" alt="">
            <p>Greg Hooper</p>
        </div>
    </div>

`
body.innerHTML = main