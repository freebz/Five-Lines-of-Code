// 예제 5.92 변경 전

class FallStrategy {
  // ...
  update(tile: Tile, x: number, y: number) {
    this.falling = map[y + 1][x].isAir()
      ? new Falling()
      : new Resting();
    if (this.falling.isFalling()) {
      map[y + 1][x] = tile;
      map[y][x] = new Air();
    }
  }
}