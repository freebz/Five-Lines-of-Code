// 예제 3.1 2차원 배열에 짝수가 존재하는지 확인하는 함수

function containsEven(arr: number[][]) {
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      if (arr[x][y] % 2 === 0) {
        return true;
      }
    }
  }
  return false;
}