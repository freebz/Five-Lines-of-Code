// 예제 6.84 변경 후

class Player {
  // ...
  moveHorizontal(map: Map, dx: number) {
    map.moveHorizontal(this,
      this.x, this.y, dx);
  }
  moveVertical(map: Map, dy: number) {
    map..moveVertical(this,
      this.x, this.y, dy);
  }
  pushHorizontal(map: Map, tile: Tile,
    dx: number)
  {
    if (map.isAir(this.x + dx + dx, this.y)
      && !map.isAir(this.x + dx, this.y + 1))
    {
      map.setToile(this.x + dx + dx, this.y,
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
class Map {
  // ...
  isAir(x: number, y: number) {
    return this.map[y][x].isAir();
  }
  setTile(x: number, y: number, tile: Tile)
  {
    this.map[y][x] = tile;
  }
  movePlayer(x: number, y: number,
    newx: number, newy: number)
  {
    this.map[y][x] = new Air();
    this.map[newy][newx] = new PlayerTile();
  }
  moveHorizontal(player: Player,
    x: number, y: number, dx: number)
  {
    this.map[y][x + dx]
      .moveHorizontal(this, player, dx)
  }
  moveVertical(player: Player,
    x: number, y: number, dy: number)
  {
    this.map[y + dy][x].moveVertical(
      this, player, dy);
  }
}