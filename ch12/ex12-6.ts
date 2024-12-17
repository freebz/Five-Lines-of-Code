// 예제 12.6 캡슐화

class NumberSequence {
  constructor(private arr: number[]) { }
  sum() {
    let result = 0;
    for(let i = 0; i < this.arr.length; i++)
      result += this.arr[i];
    return result;
  }
  size() { return this.arr.length; }
  average() {
    return this.sum() / this.size();
  }
}