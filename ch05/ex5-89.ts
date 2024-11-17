// 예제 5.89 변경 후

class FallStrategy {
  // ...
  update(tile: Tile, x: number, y: number) {
    if (map[y + 1][x].isAir()) {
      this.falling = new Falling();
      map[y + 1][x] = tile;
      map[y][x] = new Air();
    } else {
      this.falling = new Resting();
    }
  }
}