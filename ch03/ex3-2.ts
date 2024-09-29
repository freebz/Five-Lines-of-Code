// 예제 3.2 2차원 배열에서 최소 항목을 찾는 함수

function minimum(arr: number[][]) {
  let result = Number.POSITIVE_INFINITY;
  for (let x = 0; x < arr.length; x++)
    for (let y = 0; y < arr[x].length; y++)

      if (result > arr[x][y])
        result = arr[x][y];

  return result;
}