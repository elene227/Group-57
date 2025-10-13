//7)შექმენი ფუნქცია, რომელიც იღებს რიცხვების სიას და აბრუნებს ახალ სიას მხოლოდ იმ რიცხვებისგან შემდგარს, რომლებიც ერთდროულად ლუწებიც არიან და 5-ის ჯერადებიც,შემდეგ ამ სიაში მყოფი კენტი რიცხვების ჯამი იპოვეთ






function func(arr){
    let arrNew = []
    let kenti = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0 && i % 5 == 0){
            arrNew.push(arr[i])
        }
    }
    for(let n = 0; n < arrNew.length; n++){
        if(arrNew[n] % 2 ==1){
            kenti+=arrNew[n]
        }
    }
}