function findAverage(array) {
  if(array.length === 0){ // array == [] <- different from array=[] check whats inside instead of checking it array[] is same as [] they are still different  even if lists are empty they are completly different lists instead of comparing lists compare whats inside 
    return 0
  }
  let sum = 0
  let count = 0
  for(let i = 0; i < array.length; i++){ // array[i] 0 1 2 3 4 5=undefined array.length = 5
    count++
    sum+=array[i]
  }
  
  return sum/count

}