// 예제 6.59 변경 후(1/4)

class Counter {
  private counter = 0;  
  getCounter() { return this.counter; }
  setCounter(c: number) {
    this.counter = c;
  }
}