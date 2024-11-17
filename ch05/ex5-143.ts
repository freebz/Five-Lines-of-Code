// 예제 5.143 변경 후

class Key1 implements Tile {
  constructor(
    private color: string,
    private removeStrategy: RemoveStrategy)
  { }
  // ...
  draw(g: CanvasRenderingContext2D,
    x: number, y: number)
  {
    g.fillStyle = this.color;
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE,
      TILE_SIZE, TILE_SIZE);
  }
  moveHorizontal(dx: number) {
    remove(this.removeStrategy);
    moveToTile(playerx + dx, playery);
  }
}
class Lock1 implements Tile {
  constructor(
    private color: string,
    private lock1: boolean,
    private lock2: boolean) { }
  // ...
  isLock1() { return this.lock1; }
  isLock2() { return this.lock2; }
  draw(g: CanvasRenderingContext2D,
    x: number, y: number)
  {
    g.fillStyle = this.color;
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE,
      TILE_SIZE, TILE_SIZE);
  }
}
function transformTile(tile: RawTile) {
  switch (tile) {
    // ...
    case RawTile.KEY1:
      return new Key("#ffcc00",
          new RemoveLock1());
    case RawTile.Lock1:
      return new Lock1("#ffcc00",
        true, false);
  }
}