function validParentheses(parenStr) {
  let balance = 0
  
  for(let i = 0; i < parenStr.length; i++){
    if(parenStr[i] === "(" ){
      balance++
    }else{
      balance--
    }
    if(balance < 0){
      return false
    }
  }
  return balance === 0
}