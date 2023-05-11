function solution(rny_string) {
  return rny_string.split("").map(data => data.toLowerCase() === 'm' ? "rn" : data ).join("");
}