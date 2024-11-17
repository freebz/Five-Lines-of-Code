// 예제 5.106 변경 후(5/7)

class ArrayMinimum {
  private processor: MinimumProcessor;
  constructor(accumulator: number) {
    this.processor =
      new MinimumProcessor(accumulator);
  }
  // ...
}
class ArraySum {
  private processor: SumProcessor;
  constructor(accumulator: number) {
    this.processor =
      new SumProcessor(accumulator);
  }
  // ...
}
class MinimumProcessor {
  constructor(private accumulator: number) {
  }
  getAccumulator() {
    return this.accumulator;
  }
  // ...
}
class SumProcessor {
  constructor(private accumulator: number) {
  }
  getAccumulator() {
    return this.accumulator;
  }
  // ...
}