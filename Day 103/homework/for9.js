//10)შექმენი ფუნქცია რომელსაც გადაეცემა სტრინგები და ინტეჯერები,შენი დავალებაა რომ თუ სიაში მყოფი რომელიმე ელემენტი არის სტრინგ ტიპის,ასეთი ელემენტი ჩაანაცვლო true - ით




function replace(arr){
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === "string"){
            arr[i] = true
        }
    }
    return arr
}