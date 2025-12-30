
const numbers = [1,23,4,5,6,7,8,9,10,11,12,13,14,15]

let count = 0
for(let i = 0; i < numbers.length; i++){
   if(numbers[i] % 2 === 0){
    count++
   }
}

console.log(count)