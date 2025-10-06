//1)დაწერე ფუნქცია, რომელიც იღებს არგუმენტად რიცხვების სიას და ახალ სიაში ამატებს მხოლოდ ლუწ რიცხვებს. შემდეგ იპოვეთ ამ სიაში მყოფი რიცხვების ჯამი




function func(arr){
    let sum = 0
    let luwi = []
    for(let i = 0; i < arr.length; i++){ // i position arr[i] - element in arr
        if(arr[i] % 2 == 0){
            luwi.push(arr[i])
            sum+=arr[i]
        }
    }

}