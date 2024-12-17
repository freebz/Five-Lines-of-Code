// 예제 12.18 멱등 함수를 위한 캐시

interface Cacheable { hashCode(): string; }
class Cacher<G extends Cacheable, T> {
  private data: { [key: string]: T } = { };
  constructor(private func: (arg: G) => T) { }
  call(arg: G) {
    let hashCode = arg.hashCode();
    if (this.data[hashCode] === undefined) {
      this.data[hashCode] = this.func(arg);
    }
    return this.data[hashCode];
  }
}