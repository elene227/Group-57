function elimination(arr){
  for(let i = 0; i < arr.length; i++){
    for(let n = i+1; n < arr.length; n++){
      if(arr[i] === arr[n]){
        return arr[i]
      }
    }
  }
  return null
}