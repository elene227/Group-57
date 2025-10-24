function countZeros(n) {
 let count = 0
 
 for(let i = 10; i <= n; i++){
   let st = String(i)
   for(let n = 0; n < st.length; n++){
     if(st[n] === "0"){
       count++
     }
   }
   }
   return count
 }