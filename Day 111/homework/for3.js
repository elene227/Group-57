function killcount(counselors, jason){
  let d = []
  for(let i = 0; i < counselors.length; i++){
    if(counselors[i][1] < jason){
      d.push(counselors[i][0])
    }
  }
  return d
}