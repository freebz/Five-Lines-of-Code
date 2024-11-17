// 예제 5.120 변경 후(3/3)

class ArraySum {
  // ...
  process(arr: number[]) {
    for (let i = 0; i < arr.length; i++)
      this.processor.processElement(arr[i]);
    return this.processor.getAccumulator();
  }
}
interface SumProcessor {
  processElement(e: number): void;
  getAccumulator(): number;
}