// 예제 5.68 캐시

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

let tmpBr = new ReadableStream();
let br = new Cacher(() => tmpBr.readLine());
for (; br.get() !== null; br.next()) {
  let line = br.get();
  console.log(line);
}