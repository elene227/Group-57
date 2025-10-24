function enough(cap, on, wait) {
  let space = cap - on
  
  if(space >= wait){
    return 0
  }else{
    return wait - space
  }
}