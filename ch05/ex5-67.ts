// 예제 5.67 변경 전

class Reader {
  private data: string[];
  private current: number;
  nextLine() {
    this.current++;
  }
  readLine() {
    return this.data[this.current] || null;
  }
}
/// ...
let br = new Reader();
let line: string | null;
for(;br.readLine() !== null;br.nextLine()) {
  let line = br.readLine();
  console.log(line);
}