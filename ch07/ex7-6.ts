// 예제 7.6 잠재적인 null 역참조지만 컴파일러 오류는 없음

function average(arr: number[]) {
  return sum(arr) / arr.length;
}