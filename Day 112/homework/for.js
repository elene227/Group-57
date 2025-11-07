function letterCheck(arr) {
  let fr = arr[0].toLowerCase()
  let sec = arr[1].toLowerCase()
  
  
  for(let i = 0; i < sec.length; i++){
    if(!fr.includes(sec[i])){
      return false
    }
  }
  return true
  
}