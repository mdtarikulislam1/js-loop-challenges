

const numbers = [-25,-54,87,32,54,25,2,-5]

let firstNegetiveNum
for(let i = 0; i<numbers.length; i++){
    if(numbers[i] < 0){
        firstNegetiveNum = numbers[i]
        break
    }
}

console.log(firstNegetiveNum)