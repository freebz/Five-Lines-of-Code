// 예제 7.7 잠재적인 0으로 나누기가 존재하지만 컴파일러 오류는 없음

function average(arr: number[]) {
  return sum(arr) / arr.length;
}