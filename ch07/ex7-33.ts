// 예제 7.33 집합의 계수

class CountingSet {
  private data: StringMap<number> = { };
  private total = 0;
  add(element: string) {
    let c = this.data.get(element);
    if (c === undefined)
      c = 0;
    this.data.put(element, c + 1);
    this.total++;
  }
}