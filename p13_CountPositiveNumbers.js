
const numbers = [21,65,74,21,54,-52]

let countPositive =0

for(let i = 0; i<numbers.length; i++){
    if(numbers[i] > 0){
        countPositive++
    }
}

console.log(countPositive)