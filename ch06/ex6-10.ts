// 예제 6.10 변경 후

class KeyConfiguration {
  // ...
  setColor(g: CanvasRenderingContext2D) {
    g.fillStyle = this.color;
  }
  removeLock() {
    remove(this.removeStrategy);
  }
}
class Key implements Tile {
  // ...
  draw(g: CanvasRenderingContext2D,
    x: number, y: number)
  {
    this.keyConf.setColor(g);
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE,
      TILE_SIZE, TILE_SIZE);
  }
  moveHorizontal(dx: number) {
    this.keyConf.removeLock();
    moveToTile(playerx + dx, playery);
  }
  moveVertical(dy: number) {
    this.keyConf.removeLock();
    moveToTile(playerx, playery + dy);
  }
}
class Lock implements Tile {
  // ...
  draw(g: CanvasRenderingContext2D,
    x: number, y: number)
  {
    this.keyConf.setColor(g);
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE,
      TILE_SIZE, TILE_SIZE);
  }
}