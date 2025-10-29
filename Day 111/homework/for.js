function calculate(string) {
  string = string.split(" ")
  
  if(string.includes("loses")){
    return Number(string[2]) - Number(string[6])
  }else{
    return Number(string[2]) + Number(string[6])
  }
}