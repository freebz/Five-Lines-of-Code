// 예제 4.3 변경 전

function average(ar: number[]) {
  if (size(ar) === 0)
    throw "Empty array not allowed";
  else
    return sum(ar) / size(ar);
}