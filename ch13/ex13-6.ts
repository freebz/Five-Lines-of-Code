// 예제 13.6 인지 복잡도: 6

function minimum(arr: number[][]) {
  let result = 99999;
  for (let x = 0; x < arr.length; x++) {      // +1
    for (let y = 0; y < arr[x].length; y++) { // +2
      if (arr[x][y] < result)                 // +3
        result = arr[x][y];
    }
  }
  return result;
}                                             // = 6