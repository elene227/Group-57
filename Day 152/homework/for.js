let list = document.getElementById("list")
let input = document.getElementById("input")
let save = document.getElementById("save")







class ToDo{
    constructor(){
        
        
    }

    add(text){
        if(text === "")return

        if(text.length > 50){
            input.style.color = "red"
           
        }else{
        
        let li = document.createElement("li")
        let p = document.createElement("p")
        let img = document.createElement("img")
        let div = document.createElement("div")
        let p1 = document.createElement("p")

        img.src = "https://static.vecteezy.com/system/resources/previews/010/600/520/non_2x/rubbish-bin-icon-logo-design-vector.jpg"
        img.classList.add("bin")
        p1.innerText = (list.children.length + 1) + ". "
        p.innerText = text
        // p1.value = this.num()
        // li.appendChild(p1.value)
       
        li.appendChild(div)
        div.appendChild(p1)
        div.appendChild(p)
        div.appendChild(img)
        
        p1.classList.add("allTheNumbers")
        div.classList.add('liDiv')
        li.classList.add("li")
        list.appendChild(li)

        
        // li.style.display = "flex"
        // li.style.gap = "20px"
        img.addEventListener('click', ()=>{
         this.removee(li)
})

input.value = ""

    }
        }


    count(el){

    }


       

    removee(element){
        element.remove()
        this.update()

    }

    update(){
        const numsAll = list.querySelectorAll(".allTheNumbers")
        numsAll.forEach((num, index)=>{
            num.innerText = index + 1
        })
    }

    


}

  let pr = new ToDo()


save.addEventListener('click', (e)=>{
    e.preventDefault()
    pr.add(input.value)
    
})

