// 예제 5.78 변경 전

class Stone implements Tile {
  // ...
  update(x: number, y: number) {
    if (map[y+ 1][x].isAir()) {
      this.falling = new Falling();
      map[y + 1][x] = this;
      map[y][x] = new Air();
    } else if (this.falling.isFalling()) {
      this.falling = new Resting();
    }
  }
}
class FallStrategy {
}