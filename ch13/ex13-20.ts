// 예제 13.20 변경 후

function avg_ArrUtil(arr: number[]) {
  return sum_ArrUtil(arr)/size_ArrUtil(arr);
}
function size_ArrUtil(arr: number[]) {
  return arr.length;
}
function sum_ArrUtil(arr: number[]) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++)
    sum += arr[i];
  return sum;
}