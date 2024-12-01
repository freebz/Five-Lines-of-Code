// 예제 6.31 변경 후

interface FallingState {
  // ...
  drop(
    tile: Tile, x: number, y: number): void;
}
class Falling {
  // ...
  drop(tile: Tile, x: number, y: number) {
    map[y + 1][x] = tile;
    map[y][x] = new Air();
  }
}
class Resting {
  // ...
  drop(tile: Tile, x: number, y: number) { }
}
class FallStrategy {
  // ...
  update(tile: Tile, x: number, y: number) {
    this.falling =
      map[y + 1][x].getBlockOnTopState();
    this.falling.drop(tile, x, y);
  }
  
}