// 예제 13.3 두 가지 규칙을 위반하는 코드

function minimum(arr: number[][]) {
  let result = 99999;
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      if (arr[x][y] < result)
        result = arr[x][y];
    }
  }
  return result;
}