// 예제 13.19 변경 전

function avg(arr: number[]) {
  return sum(arr) / size(arr);
}
function size(arr: number[]) {
  return arr.length;
}
function sum(arr: number[]) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++)
    sum += arr[i];
  return sum;
}