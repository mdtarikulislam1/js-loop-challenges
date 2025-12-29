
const numbers = [10,50,54,21,255,5555,52455,25525,45545,9885,21,54]

let maxNumber = numbers[0]

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > maxNumber){
        maxNumber = numbers[i]
    }
}

console.log(maxNumber)