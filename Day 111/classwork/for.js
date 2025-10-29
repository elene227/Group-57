function consecutive(array) {
  if(array.length <= 0){
    return 0
  }
  
  let min = array[0]
  let max = array[0]
  
  for(let i = 1; i < array.length; i++){
    if(array[i] < min){
      min = array[i]
  }
    if(array[i] > max){
      max = array[i]
    }
  }
  let arr = []
  for(let n = min; n <= max; n++){
    arr.push(n)
  }
  return arr.length - array.length
}