function zebulansNightmare(functionName) {
  
  let sp = functionName.split("_")
  
  for(let i = 1; i < sp.length; i++){
    
      sp[i] = sp[i][0].toUpperCase() + sp[i].slice(1)
  }
  return sp.join("")
}
