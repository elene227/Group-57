// 1)შექმენი სია სადაც მოთავსებული იქნება ადამიანის სახელები , დაახლოებით 10 სახელი

// თქბენიდ დავალებაა რომ filter მეთოდის დახმარებით შექმნათ ახალი სია სადაც ინქებიან მხოლოდ ის სახელები რომელშიც ასობის რაოდენობა იქნება 5 ზე მეტი და და იწყება g ასოზე

// ეს დავალება შეასრულეთ single line function ითაც და ჩვეულებრივ return keyword ის გამოყენებითაც


const li = ["rika", "ani", "ana", "erika", "lucien", "lysander", "conard", "kurt", "spongebob", "nik"]




let li1 = li.filter(newss => newss.length > 5 && (newss[0] === "g" || newss[0] === "G"))



let li2 = li.filter(news =>{
    return news.length > 5 && (news[0] === "g" || news[0] === "G")
})


console.log(li2)
