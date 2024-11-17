// 예제 5.17 변경 후(6/8)

class Stone implements Tile {
  private falling: boolean;
  constructor(falling: boolean) {
    this.falling = falling;
  }
  // ...
}