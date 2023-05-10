function solution(n) {
  // n이 3부터 시작하니 2로 시작하고
  
  for(let i = 2; i < n; i++){
      if(n % i === 1){
          return i;
      }
  }
}