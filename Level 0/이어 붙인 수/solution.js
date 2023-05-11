function solution(num_list) {
  var answer1 = "";
  var answer2 = "";
  
  num_list.map(data => data % 2 === 0 ? answer2 += data : answer1 += data)
  
  return Number(answer1) + Number(answer2);
}