// 예제 5.117 변경 전

class ArraySum {
  private processor: SumProcessor;
  constructor(accumulator: number) {
    this.processor =
      new SumProcessor(accumulator);
  }
  // ...
}