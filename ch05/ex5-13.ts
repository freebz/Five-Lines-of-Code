// 예제 5.13 변경 후(4/8)

class Stone implements Tile {
  private falling: boolean;
  constructor() {
    this.falling = false;
  }
  // ...
  isFallingStone() { return false; }
}
class FallingStone implements Tile {
  private falling: boolean;
  constructor() {
    this.falling = true;
  }
  // ...
  isFallingStone() { return true; }
}