function factorial(n) {
  if(typeof n !== "number" || !Number.isInteger(n) || n < 0){
    return false
  }
  
  let result = 1;
  for(let i = 2; i <= n; i++){
    result *= i
  }
  return result
}

function factorialUsingRecursion(n){
  if(typeof n !== "number" || !Number.isInteger(n) || n < 0){
    return false
  }
  
  if(n === 0) return 1
  
  return n * factorialUsingRecursion(n - 1)
  
}