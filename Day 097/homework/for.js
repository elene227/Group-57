//1)შექმენით ჯავასკრიპტის ფაილი ,დააკავშირე html ის ფაილთან,ჯს ის ფაილში console.log()ის გამოყენებით დაბეჭდეთ 10 ჯერ განსხვავებული ცხოველის სახელი,გახსენით კონსოლი და ნახეთ შედეგი



const animals = ["Horse", "Cat", "Dawg", "Dolphin", "Bear", "Deer", "Bunny", "Fox", "Wolf", "Tiger"]


for(let i = 0; i < 1; i++) {
    const indexX = Math.floor(Math.random() * 10)
    console.log(animals[indexX])
}