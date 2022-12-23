function solution(numbers) {
  return numbers.reduce((fir, sec) => fir+sec, 0)/numbers.length
}