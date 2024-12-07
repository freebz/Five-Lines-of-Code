// 예제 7.8 잠재적으로 접근이 범위를 벗어날 수 있지만 컴파일러 오류는 없음

function firstPrime(arr: number[]) {
  return arr[indexOfPrime(arr)];
}