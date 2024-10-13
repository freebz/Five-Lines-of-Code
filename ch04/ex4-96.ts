// 예제 4.96 변경 후

function colorOfTile(
  g: CanvasRenderingContext2D,
  x: number, y: number)
{
  map[y][x].color(g);
}
interface Tile {
  // ...
  color(g: CanvasRenderingContext2D): void
}
class Air implements Tile {
  // ...
  color(g: CanvasRenderingContext2D) {

  }
}
class Flux implements Tile {
  // ...
  color(g: CanvasRenderingContext2D) {
    g.fillStyle = "#ccffcc";
  }
}