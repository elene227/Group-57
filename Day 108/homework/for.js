function disemvowel(str) {
  
  let vows = 'aeiou'
  let st = ''
  let ste = ''
  
  for(let i = 0; i < str.length; i++){
    if(vows.includes(str[i].toLowerCase())){
      st+=str[i]
    }else{
      ste+=str[i]
    }
  }
  return ste
}

function disemvowel(str) {
  
  let vows = 'aeiouAEIOU'
  let st = ''
  let ste = ''
  
  for(let i = 0; i < str.length; i++){
    if(vows.includes(str[i])){
      st+=str[i]
    }else{
      ste+=str[i]
    }
  }
  return ste
}