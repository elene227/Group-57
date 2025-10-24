function sumTwoSmallestNumbers(numbers) {  
  let min = numbers[0]
  let min1 = numbers[1]
  
  if(min > min1){
    let sm = min
    min = min1
    min1 = sm
    
  }
  
  for(let i = 2; i < numbers.length; i++){
    if(numbers[i] < min){
      min1 =min
      min = numbers[i]
      
    }else if(numbers[i] < min1){
      min1=numbers[i]
      
    }
  }
  return min1+min
  
}