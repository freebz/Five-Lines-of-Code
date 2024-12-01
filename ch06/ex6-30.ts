// 예제 6.30 변경 전

interface FallingState {
  // ...


}
class Falling {
  // ...




}
class Resting {
  // ...
  
}
class FallStrategy {
  // ...
  update(tile: Tile, x: number, y: number) {
    this.falling =
      map[y + 1][x].getBlockOnTopState();
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
}