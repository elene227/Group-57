function counterEffect(hitCount) {
  let sum = []
  hitCount.split("")
  for(let i = 0; i < hitCount.length; i++){
    let arr = []
    for(let s = -1; s < hitCount[i]; s++){
      arr.push(s + 1)
    }
    sum.push(arr)
  }
  return sum
}