// 예제 5.87 변경 후

class Stone implements Tile {
  private fallStrategy: fallStrategy;
  constructor(falling: FallingState)
  {
    this.fallStrategy =
        new fallStrategy(falling);
  }
  // ...
  update(x: number, y: number) {
    this.fallStrategy.update(this, x, y);
  }
}
class FallStrategy {
  constructor(private falling: FallingState)
  { }
  isFalling() { return this.falling; }
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