function solution(num_list) {
  var answer = num_list.reduce((arr, cur) => arr + cur, 0) ** 2;
  var mul = num_list.reduce((arr, cur) => arr * cur, 1);

  return mul > answer ? 0 : 1;
}