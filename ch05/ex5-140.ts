// 예제 5.140 Key1과 Lock1

class Key1 implements Tile {
  // ...
  draw(g: CanvasRenderingContext2D,
    x: number, y: number)
  {
    g.fillStyle = "#ffcc00";
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE,
      TILE_SIZE, TILE_SIZE);
  }
  moveHorizontal(dx: number) {
    remove(new removeLock1());
    moveToTile(playerx + dx, playery);
  }
}
class Lock1 implements Tile {
  // ...
  isLock1() { return true; }
  isLock2() { return false; }
  draw(g: CanvasRenderingContext2D,
    x: number, y: number)
  {
    g.fillStyle = "#ffcc00";
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE,
      TILE_SIZE, TILE_SIZE);
  }
}