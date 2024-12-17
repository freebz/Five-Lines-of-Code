// 예제 12.19 일시적인 멱등성을 위한 캐시

interface Cacheable { hashCode(): string; }
class Cacher<G extends Cacheable, T> {
  private data: { [key: string]: { result: T, expiry: number }} = { };
  constructor(private func: (arg: G) => T,
              private duration: number) { }
  call(arg: G) {
    let hashCode = arg.hashCode();
    if (this.data[hashCode] === undefined
      || this.data[hashCode].expiry < Date.now()) {
      this.data[hashCode] = {
        result: this.func(arg),
        expiry: Date.now() + this.duration
      };
    }
    return this.data[hashCode].result;
  }
}