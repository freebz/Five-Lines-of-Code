// 예제 5.109 변경 전

class ArrayMinimum {
  // ...
  process(arr: number[]) {
    for (let i = 0; i < arr.length; i++)
      this.processElement(arr[i]);
    return this.processor.getAccumulator();
  }
  processElement(e: number) {
    this.processor.processElement(e);
  }
}
class ArraySum {
  // ...
  process(arr: number[]) {
    for (let i = 0; i < arr.length; i++)
      this.processElement(arr[i]);
    return this.processor.getAccumulator();
  }
  processElement(e: number) {
    this.processor.processElement(e);
  }
}