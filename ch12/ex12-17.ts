// 예제 12.17 반환 값에서 부작용을 분리하기 위한 캐시

class Cacher<T> {
  private data: T;
  constructor(private mutator: () => T) {
    this.data = this.mutator();
  }
  get() {
    return this.data;
  }
  next() {
    this.data = this.mutator();
  }
}