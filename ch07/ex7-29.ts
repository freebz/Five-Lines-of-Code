// 예제 7.29 확인되지 않은 예외를 사용

class EmptyArray extends RuntimeException { }
function average(arr: number[]) {
  if (arr.length === 0) throw new EmptyArray();
  return sum(arr) / arr.length;
}
/// ...
console.log(average([]));