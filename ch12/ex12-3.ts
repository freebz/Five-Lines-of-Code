// 예제 12.3 최적화된 CountingSet

class CountingSet {
  private data: StringMap<number> = { };
  private total = 0;
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
    this.total++;
  }
  size() {
    return this.total;
  }
}