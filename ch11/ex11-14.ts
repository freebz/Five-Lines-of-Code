// 예제 11.14 변경 후

function subMin(arr: number[]) {
  let min = findMin(arr);
  subtractFromEach(min, arr);
}
function findMin(arr: number[]) {
  let min = Number.POSITIVE_INFINITY;
  for (let x = 0; x < arr.length; x++) {
    min = Math.min(min, arr[x]);
  }
  return min;
}
function subtractFromEach(min: number,
  arr: number[])
{
  for (let x = 0; x < arr.length; x++) {
    arr[x] -= min;
  }
}