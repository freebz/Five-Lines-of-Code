// 예제 6.28 변경 전

interface Tile {
  // ...

}
class Air implements Tile {
  // ...



}
class Stone implements Tile {
  // ...



}
class FallStrategy {
  // ...
  update(tile: Tile, x: number, y: number) {
    this.falling = map[y + 1][x].isAir()
      ? new Falling()
      : new Resting();
    this.drop(tile, x, y);
  }
}