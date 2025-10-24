function squareDigits(num){
  num = String(num)
  let x = ''
  
  for(let i = 0; i < num.length; i++){
    Number(num)
    x+=num[i]**2
  }
  return Number(x)
  
}