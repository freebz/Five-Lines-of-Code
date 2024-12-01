// 예제 6.27 변경 후

class Stone implements Tile {
  // ...
  moveHorizontal(dx: number) {
    this.fallStrategy
      .moveHorizontal(this, dx);
  }
}
class Box implements Tile {
  // ...
  moveHorizontal(dx: number) {
    this.fallStrategy
      .moveHorizontal(this, dx);
  }
}
class FallStrategy {
  constructor(private falling: FallingState)
  { }
  
  update(tile: TimerHandler, x: number, y: number) {
    this.falling = map[y + 1][x].isAir()
      ? new Falling()
      : new Resting();
    this.drop(tile, x, y);
  }
  private drop(tile: Tile,
    x: number, y: number)
  {
    if (this.falling.isFalling()) {
      map[y + 1][x] = tile;
      map[y][x] = new Air();
    }
  }
  moveHorizontal(tile: Tile, dx: number) {
    this.falling.moveHorizontal(tile, dx);
  }
}