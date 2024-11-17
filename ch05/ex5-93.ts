// 예제 5.93 변경 후

class FallStrategy {
  // ...
  update(tile: Tile, x: number, y: number) {
    this.falling = map[y + 1][x].isAir()
      ? new Falling()
      : new Resting();
    this.drop(tile, x, y);
  }
  private drop(tile Tile,
    x: number, y: number)
  {
    if (this.falling.isFalling()) {
      map[y + 1][x] = tile;
      map[y][x] = new Air();
    }
  }
}