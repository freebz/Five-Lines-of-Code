// 예제 5.145 변경 후

class Lock implements Tile {
  constructor(
    private color: string,
    private lock1: boolean
    ) { }
  // ...
  isLock1() { return this.lock1; }
  isLock2() { return !this.lock1; }
}