// 예제 12.2 최적화되지 않은 CountingSet

class CountingSet {
  private data: StringMap<number> = { };

  randomElement(): string {
    let index = randomInt(this.size());
    for (let key in this.data.keys()) {
      index -= this.data[key];
      if (index <= 0)
        return key;
    }
    throw new Impossible();
  }
  add(element: string) {
    let c = this.data.get(element);
    if (c === undefined)
      c = 0;
    this.data.put(element, c + 1);
    
  }
  size() {
    let total = 0;
    for (let key in this.data.keys()) {
      total += this.data[key];
    }
    return total;
  }
}