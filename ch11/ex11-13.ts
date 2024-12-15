// 예제 11.13 변경 전

function subMin(arr: number[]) {
  let min = Number.POSITIVE_INFINITY;
  for (let x = 0; x < arr.length; x++) {
    min = Math.min(min, arr[x]);
  }

  for (let x = 0; x < arr.length; x++) {
    arr[x] -= min;
  }
}