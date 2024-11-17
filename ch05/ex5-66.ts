// 예제 5.66 변경 전

class Reader {
  private data: string[];
  private current: number;

  
  readLine() {
    this.current++;
    return this.data[this.current] || null;
  }
}
/// ...
let br = new Reader();
let line: string | null;
while ((line = br.readLine()) !== null) {
  console.log(line);
}