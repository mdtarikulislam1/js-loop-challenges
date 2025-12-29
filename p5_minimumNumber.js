const numbers = [50,10,8,5,21,65,74]

let minNum = numbers[0]
for(let i = 0; i <numbers.length; i++){
  if(numbers[i] < minNum){
    minNum = numbers[i]
  }
}

console.log(minNum)