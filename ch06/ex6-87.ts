// 예제 6.87 변경 전

class Player {
  // ...
  pushHorizontal(map: Map, tile: Tile,
    dx: number)
  {
    if (map.isAir(this.x + dx + dx, this.y)
    && !map.isAir(this.x + dx, this.y + 1))
    {
      map.setTile(this.x + dx + dx, this.y,
        tile);
      this.moveToTile(
        map, this.x + dx, this.y);
    }
  }
  private moveToTile(map: Map,
    newx: number, newy: number)
  {
    map.movePlayer(this.x, this.y,
      newx, newy);
    this.x = newx;
    this.y = newy;
  }
}