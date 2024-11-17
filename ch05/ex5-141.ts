// 예제 5.141 Key2와 Lock2

class Key2 implements Tile {
  // ...
  draw(g: CanvasRenderingContext2D,
    x: number, y: number)
  {
    g.fillStyle = "#00ccff";
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE,
      TILE_SIZE, TILE_SIZE);
  }
  moveHorizontal(dx: number) {
    remove(new removeLock2());
    moveToTile(playerx + dx, playery);
  }
}
class Lock2 implements Tile {
  // ...
  isLock1() { return false; }
  isLock2() { return true; }
  draw(g: CanvasRenderingContext2D,
    x: number, y: number)
  {
    g.fillStyle = "#00ccff";
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE,
      TILE_SIZE, TILE_SIZE);
  }
}