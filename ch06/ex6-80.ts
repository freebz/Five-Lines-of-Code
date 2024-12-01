// 예제 6.80 변경 후

class Falling {
  // ...
  drop(map: Map, tile: Tile,
    x: number, y: number)
  {
    map.drop(tile, x, y);

  }
}
class Map {
  // ...
  drop(tile: Tile, x: number, y: number) {
    this.map[y + 1][x] = tile;
    this.map[y][x] = new Air();
  }
}