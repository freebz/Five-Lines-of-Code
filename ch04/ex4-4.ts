// 예제 4.4 변경 후

function assertNotEmpty(ar: number[]) {
  if (size(ar) === 0)
    throw "Empty array not allowed";
}
function average(ar: number[]) {
  assertNotEmpty(ar);
  return sum(ar) / size(ar);
}