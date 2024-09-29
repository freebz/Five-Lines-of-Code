// 예제 3.6 배열의 최소 항목을 찾는 함수

function minimum(arr: number[][]) {
  let result = Number.POSITIVE_INFINITY;
  for (let x = 0; x < arr.length; x++)
    for (let y = 0; y < arr[x].length; y++)

      if (result > arr[x][y])
        result = arr[x][y];

  return result;
}