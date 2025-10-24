function removeExclamationMarks(s) {
  let rmv = ""
  
  for(let i = 0; i < s.length; i++){
    if(s[i] !== "!"){
      rmv+=s[i]
    }
  }
  return rmv
}