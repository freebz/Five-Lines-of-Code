// 예제 5.103 변경 전

class ArrayMinimum {
  // ...
  processElement(e: number) {
    if (this.accumulator > e)
      this.accumulator = e;
  }
}
class ArraySum {
  // ...
  processElement(e: number) {
    this.accumulator += e;
  }
}
class MinimumProcessor {
}
class SumProcessor {
}