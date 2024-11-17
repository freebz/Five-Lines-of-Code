// 예제 5.144 변경 전

class Lock implements Tile {
  constructor(
    private color: string,
    private lock1: boolean,
    private lock2: boolean) { }
  // ...
  isLock1() { return this.lock1; }
  isLock2() { return this.lock2; }
}