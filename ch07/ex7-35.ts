// 예제 7.35 수정된 임의의 멤버 선택

class Impossible { }
class CountingSet {
  // ...
  randomElement(): string {
    let index = randomInt(this.total);
    for (let key in this.data.keys()) {
      index -= this.data[key];
      if (index <= 0)
        return key;
    }
    throw new Impossible();
  }
}