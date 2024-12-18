// 예제 13.5 순환 복잡도: 4

function minimum(arr: number[][]) {           // +1
  let result = 99999;
  for (let x = 0; x < arr.length; x++) {      // +1
    for (let y = 0; y < arr[x].length; y++) { // +1
      if (arr[x][y] < result)                 // +1
        result = arr[x][y];
    }
  }
  return result;                              // = 4
}