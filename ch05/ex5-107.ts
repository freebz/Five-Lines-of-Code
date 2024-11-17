// 예제 5.107 변경 전

class ArrayMinimum {
  // ...
  process(arr: number[]) {
    for (let i = 0; i < arr.length; i++)
      this.processElement(arr[i]);
    return this.accumulator;
  }
}
class ArraySum {
  // ...
  process(arr: number[]) {
    for (let i = 0; i < arr.length; i++)
      this.processElement(arr[i]);
    return this.accumulator;
  }
}