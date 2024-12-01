// 예제 6.82 변경 후

class FallStragegy {
  // ...
  update(map: Map, tile: Tile,
    x: number, y: number)
  {
    this.falling =
      map.getBlockOnTopState(x, y + 1);
      

    this.falling.drop(map, tile, x, y)
  }
}
class Map {
  // ...
  getBlockOnTopState(x: number, y: number) {
    return this.map[y][x]
      .getBlockOnTopState();
  }
}