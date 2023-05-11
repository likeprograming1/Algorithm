function solution(arr, k) {
  return k % 2 === 0 ? arr.map(data => data + k) : arr.map(data => data * k);
}