// 예제 5.85 변경 후(5/5)

class Stone implements Tile {
  // ...
  update(x: number, y: number) {
    this.fallStrategy.update(this, x, y);
  }
}
class fallStrategy {
  update(tile: Tile, x: number, y: number) {
    if (map[y + 1][x].isAir()) {
      this.falling = new Falling();
      map[y + 1][x] = tile;
      map[y][x] = new Air();
    } else if (this.falling.isFalling()) {
      this.falling = new Resting();
    }
  }
}