var countSheep = function (num){
  if(num == 0){
    return ""
  }
  let sleep = ''
  for(let i = 1; i <= num; i++){
    sleep+= `${i} sheep...`
  }
  return sleep
}