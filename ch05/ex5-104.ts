// 예제 5.104 변경 후(4/7)

class ArrayMinimum {
  // ...
  processElement(e: number) {
    this.processor.processElement(e);
    
  }
}
class ArraySum {
  // ...
  processElement(e: number) {
    this.processor.processElement(e);
  }
}
class MinimumProcessor {
  processElement(e: number) {
    if (this.accumulator > e)
      this.accumulator = e;
  }
}
class SumProcessor {
  processElement(e: number) {
    this.accumulator += e;
  }
}