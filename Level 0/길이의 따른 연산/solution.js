function solution(num_list) {
  return num_list.length <= 10 ? num_list.reduce((arr, cur) => arr * cur , 1) : num_list.reduce((arr, cur) => arr + cur);
}