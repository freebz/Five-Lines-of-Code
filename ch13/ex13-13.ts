// 예제 13.13 변경 전

function subMin(arr: number[][]) {

  let min = Number.POSITIVE_INFINITY;
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      min = Math.min(min, arr[x][y]);
    }
  }

  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      arr[x][y] -= min;
    }
  }
  return min;
}