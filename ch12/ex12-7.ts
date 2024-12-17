// 예제 12.7 total 캐시

class NumberSequence {
  private total = 0;
  constructor(private arr: number[]) {
    for(let i = 0; i < this.arr.length; i++)
      this.total += this.arr[i];
  }
  sum() { return this.total; }
  size() { return this.arr.length; }
  average() {
    return this.sum() / this.size();
  }
}