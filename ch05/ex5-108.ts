// 예제 5.108 변경 후(6/7)

class ArrayMinimum {
  // ...
  process(arr: number[]) {
    for (let i = 0; i < arr.length; i++)
      this.processElement(arr[i]);
    return this.processor.getAccumulator();
  }
}
class ArraySum {
  // ...
  process(arr: number[]) {
    for (let i = 0; i < arr.length; i++)
      this.processElement(arr[i]);
    return this.processor.getAccumulator();
  }
}