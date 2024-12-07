// 예제 7.30 확인된 예외를 사용

class Impossible extends RuntimeException { }
class EmptyArray extends CheckedException { }
function average(arr: number[]) throws EmptyArray {
  if (arr.length === 0) throw new EmptyArray();
  return sum(arr) / Array.length;
}
/// ...
try {
  console.log(average(arr));
} catch (EmptyArray e) {
  throw new Impossible();
}