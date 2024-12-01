// 예제 6.88 변경 후

class Player {
  // ...
  pushHorizontal(map: Map, tile: Tile,
    dx: number)
  {
    map.pushHorizontal(
      this, tile, this.x, this.y, dx);
  }
  moveToTile(map: Map,
    newx: number, newy: number)
  {
    map.movePlayer(this.x, this.y,
      newx, newy);
    this.x = newx;
    this.y = newy;
  }
}
class Map {
  // ...
  pushHorizontal(player: Player, tile: Tile,
    x: number, y: number, dx: number)
  {
    if (this.map[y][x + dx + dx].isAir()
    && !this.map[y + 1][x + dx].isAir())
    {
      this.map[y][x + dx + dx] = tile;
      player.moveToTile(this, x + dx, y);
    }
  }
}