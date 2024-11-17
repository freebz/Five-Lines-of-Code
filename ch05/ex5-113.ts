// 예제 5.113 변경 전

class ArraySum {
  private processor: SumProcessor;
  constructor(accumulator: number) {
    this.processor = new SumProcessor(accumulator);
  }
  process(arr: number[]) {
    for (let i = 0; i < arr.length; i++)
      this.processor.processElement(arr[i]);
    return this.processor.getAccumulator();
  }
}
class SumProcessor {
  constructor(private accumulator: number) { }
  getAccumulator() { return this.accumulator; }
  processElement(e: number) {
    this.accumulator += e;
  }
}