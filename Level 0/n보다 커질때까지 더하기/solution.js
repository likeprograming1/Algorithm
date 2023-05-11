function solution(numbers, n) {
  return numbers.reduce((arr, cur) => arr <= n ? arr + cur : arr);
}