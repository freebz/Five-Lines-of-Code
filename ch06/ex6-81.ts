// 예제 6.81 변경 전

class FallStragegy {
  // ...
  update(map: Map, tile: Tile,
    x: number, y: number)
  {
    this.falling =
      map.getMap()[y + 1][x].isAir()
      ? new Falling()
      : new Resting();
    this.falling.drop(map, tile, x, y)
  }
}
class Map {
  // ...



  
}