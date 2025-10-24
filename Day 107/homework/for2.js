function positiveSum(arr) {
  if(arr == null){
    return 0
  }
  let sumpo = 0
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      sumpo += arr[i]
    }
  }
  return sumpo
}