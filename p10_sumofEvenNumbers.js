
const numbers = [2,5,8,4,3,9,7,52,45,21,54,321]

let totalEven = 0
for(let i = 0; i < numbers.length; i++){
   if(numbers[i] % 2 === 0){
    totalEven += numbers[i]
   }
}

console.log(totalEven)