// 예제 6.83 변경 전

class Player {
  // ...
  moveHorizontal(map: Map, dx: number) {
    map.getMap()[this.y][this.x + dx]
      .moveHorizontal(map, this, dx);
  }
  moveVertical(map: Map, dy: number) {
    map.getMap()[this.y + dy][this.x]
      .moveVertical(map, this, dy);
  }
  pushHorizontal(map: Map, tile: Tile,
    dx: number)
  {
    if (map.getMap()
      [this.y][this.x + dx + dx].isAir()
      && !map.getMap()
      [this.y + 1][this.x + dx].isAir())
    {
      map.getMap()[this.y][this.x + dx + dx]
        = tile;
      this.moveToTile(
        map, this.x + dx, this.y);
    }
  }
  private moveToTile(map: Map,
    newx: number, newy: number)
  {
    map.getMap()[this.y][this.x] =
      new Air();
    map.getMap()[newy][newx] =
      new PlayerTile();
    this.x = newx;
    this.y = newy;
  }
}
class Map {
  // ...
}