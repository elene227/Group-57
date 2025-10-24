function rowWeights(array){
  let first = 0
  let second =0
  for(let i = 0; i<array.length;i++){
    if(i % 2===1){
      first = first + array[i]
    }else{
      second = second+array[i]
    }
  }
  return [second, first]
}