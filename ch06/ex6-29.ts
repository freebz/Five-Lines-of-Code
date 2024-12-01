// 예제 6.29 변경 후

interface Tile {
  // ...
  getBlockOnTopState(): FallingState;
}
class Air implements Tile {
  // ...
  getBlockOnTopState() {
    return new Falling();
  }
}
class Stone implements Tile {
  // ...
  getBlockOnTopState() {
    return new Resting();
  }
}
class FallStrategy {
  // ...
  update(tile: Tile, x: number, y: number) {
    this.falling =
      map[y + 1][x].getBlockOnTopState();
      
    this.drop(tile, x, y);
  }
}