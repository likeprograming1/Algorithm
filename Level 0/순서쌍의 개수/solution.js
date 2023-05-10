function solution(n) {
  var m = n / 2 ;
  var result = 1;
  
  for( var i = 1; i <= m; i++ ){
      if(n % i === 0) result++;
  }
  
  return result;
}