//4)მომხმარებელს შეეკითხე ქულა (0–100).

// თუ ქულა < 50 → "ჩაიჭერი".

// თუ 50–69 → "საშუალო".

// თუ 70–89 → "კარგი".

// თუ 90–100 → "ძალიან კარგი".

// თუ სხვა რიცხვი შეიყვანა → "არასწორი მონაცემი".


let Point = Number(prompt("Please enter point(0-100): "))

if(Point < 50){
    console.log("Gameover.")
}else if(Point >= 50 && Point <= 69) {
    console.log("Mid")
}else if(Point >= 70 && Point <=89){
    console.log("Gud.")
}else if(Point >= 90 && Point <= 100){
    console.log("very gud.")
}else{
    console.log("Wrong type.")
}
