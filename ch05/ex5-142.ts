// 예제 5.142 변경 전

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

  
  draw(g: CanvasRenderingContext2D,
    x: number, y: number)
  {
    g.fillStyle = "#ffcc00";
    g.fillRect(x * TILE_SIZE, y * TILE_SIZE,
      TILE_SIZE, TILE_SIZE);
  }
}
function transformTile(tile: RawTile) {
  switch (tile) {
    // ...
    case RawTile.KEY1:
      return new Key1();
    
    case RawTile.Lock1:
      return new Lock1();

  }
}