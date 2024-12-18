// 예제 13.14 변경 후

function subMin(arr: number[][]) {
  // 최솟값 찾기
  let min = Number.POSITIVE_INFINITY;
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      min = Math.min(min, arr[x][y]);
    }
  }
  // 각 요소에서 최솟값 빼기
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      arr[x][y] -= min;
    }
  }
  return min;
}