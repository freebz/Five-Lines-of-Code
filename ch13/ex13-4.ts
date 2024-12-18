// 예제 13.4 코드 스멜 예제

function minimum(arr: number[][]) {
  let result = 99999;   // <-- 마법 상수
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      if (arr[x][y] < result)
        result = arr[x][y];
    }
  }
  return result;
}