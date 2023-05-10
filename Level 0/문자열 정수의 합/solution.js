function solution(num_str) {
  return num_str.split("").reduce((arr, cur) => arr + Number(cur), 0);
}