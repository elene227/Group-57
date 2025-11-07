let getQuote = function(quotes, hero){
  let em = ''
  let index
  let n
  for(let i = 0; i < hero.length; i++){
    if("1234567890".includes(hero[i])){
      index = Number(hero[i])
    }
      

    
  }
  if(hero[0].toLowerCase() === "r"){
    n = "Robin"
    return `${n}: ${quotes[index]}`
  }else if(hero[0].toLowerCase() === "j"){
    n = "Joker"
    return `${n}: ${quotes[index]}`
  }else if(hero[0].toLowerCase() === "b"){
    n = "Batman"
    return `${n}: ${quotes[index]}`
  }
}
