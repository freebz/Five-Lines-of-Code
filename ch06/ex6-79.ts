// 예제 6.79 변경 전

class Falling {
  // ...
  drop(map: Map, tile: Tile,
    x: number, y: number)
  {
    map.getMap()[y + 1][x] = tile;
    map.getMap()[y][x] = new Air();
  }
}
class Map {
  // ...



  
}