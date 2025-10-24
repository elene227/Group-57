function twiceAsOld(dadYearsOld, sonYearsOld) {
  let age = dadYearsOld - 2*sonYearsOld
  
  return Math.abs(age)
}

//without abs
function twiceAsOld(dadYearsOld, sonYearsOld) {
  let age = dadYearsOld - 2*sonYearsOld
  
  if(age < 0){
    return age * -1
  }else{
    return age
  }
}