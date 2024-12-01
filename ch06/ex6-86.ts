// 예제 6.86 변경 후

class Map {
  // ...
  
  remove(shouldRemove: RemoveStrategy) {
    for (let y = 0;
         y < this.map.length;
         y++)
    for (let x = 0;
         x < this.map[y].length;
         x++)
      if (shouldRemove.check(
        this.map[y][x]))
        this.map[y][x] = new Air();
  }
}