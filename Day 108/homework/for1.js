function filter_list(l) {
  let filt = []
  
  for(let i = 0; i < l.length; i++){
    if(typeof l[i] === "number" ){
      filt.push(l[i])
    }
  }
  return filt
}