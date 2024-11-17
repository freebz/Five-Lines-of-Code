// 예제 5.74 변경 후

function updateTile(x: number, y: number) {
  map[y][x].update(x, y);
}
interface Tile {
  // ...
  update(x: number, y: number): void;
}
class Air implements Tile {
  // ...
  update(x: number, y: number) { }
}
class Stone implements Tile {
  // ...
  update(x: number, y: number) {
    if (map[y + 1][x].isAir()) {
      this.falling = new Falling();
      map[y + 1][x] = this;
      map[y][x] = new Air();
    } else if (this.falling.isFalling()) {
      this.falling = new Resting();
    }
  }
}