// 예제 5.105 변경 전

class ArrayMinimum {
  private processor: MinimumProcessor;
  constructor(private accumulator: number) {
    this.processor =
      new MinimumProcessor();
  }
  // ...
}
class ArraySum {
  private processor: SumProcessor;
  constructor(private accumulator: number) {
    this.processor =
      new SumProcessor();
  }
  // ...
}
class MinimumProcessor {
  // ...
}
class SumProcessor {
  // ...
}