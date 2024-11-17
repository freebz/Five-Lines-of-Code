// 예제 5.79 변경 후(2/5)

class Stone implements Tile {
  update(x: number, y: number) {
    this.fallStrategy.update(x, y);
  }
}
class FallStrategy {
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