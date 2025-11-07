function tiyFizzBuzz(sentence){
  let str = ''
  for(let i = 0; i < sentence.length; i++){
    if("aeiou".includes(sentence[i])){
      str+="Yard"
    }else if("AEIOU".includes(sentence[i])){
      str+="Iron Yard"
    }else if("QWRTYPLKJHGFDSZXCVBNM".includes(sentence[i])){
      str+="Iron"
    }else{
      str+=sentence[i]
    }
  }
  return str
}