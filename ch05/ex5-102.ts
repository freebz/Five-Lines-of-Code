// 예제 5.102 변경 후(3/7) 

class ArrayMinimum {
  private processor: MinimumProcessor;
  constructor(private accumulator: number) {
    this.processor = new MinimumProcessor();
  }
  // ...
}
class ArraySum {
  private processor: SumProcessor;
  constructor(private accumulator: number) {
    this.processor = new SumProcessor();
  }
  // ...
}