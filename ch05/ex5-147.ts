// 예제 5.147 변경 후

class Key implements Tile {
  constructor(

    private keyConf: KeyConfiguration)
  { }
  // ...
  draw(g: CanvasRenderingContext2D,
    x: number, y: number)
  {
    g.fillStyle = this.keyConf.getColor();
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE,
      TILE_SIZE, TILE_SIZE);
  }
  moveHorizontal(dx: number) {
    remove(this.keyConf.getRemoveStrategy());
    moveToTile(playerx + dx, playery);
  }
  moveVertical(dy: number) {
    remove(this.keyConf.getRemoveStrategy());
    moveToTile(playerx, playery + dy);
  }
}
class Lock implements Tile {
  constructor(
    
    private keyConf: KeyConfiguration) { }
  // ...
  isLock1() { return this.keyConf.is1(); }
  isLock2() { return !this.keyConf.is1(); }
  draw(g: CanvasRenderingContext2D,
    x: number, y: number)
  {
    g.fillStyle = this.keyConf.getColor();
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE,
      TILE_SIZE, TILE_SIZE);
  }
}
class KeyConfiguration {
  constructor(
    private color: string,
    private _1: boolean,
    private removeStrategy: RemoveStrategy)
  { }
  getColor() { return this.color; }
  is1() { return this._1; }
  getRemoveStrategy() {
    return this.removeStrategy;
  }
}
const YELLOW_KEY =
  new KeyConfiguration("#ffcc00", true,
    new RemoveLock1());
function transformTile(tile: RawTile) {
  switch (tile) {
    // ...
    case RawTile.KEY1:
      return new Key(YELLOW_KEY);
    case RawTile.Lock1:
      return new Lock1(YELLOW_KEY);
  }
}