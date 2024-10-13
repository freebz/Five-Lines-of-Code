// 예제 4.104 변경 후

function drawTile(
  g: CanvasRenderingContext2D,
  x: number, y: number)
{
  map[y][x].draw(g, x, y);
}
interface Tile {
  // ...
  draw(g: CanvasRenderingContext2D,
    x: number, y: number): void;
}
class Air implements Tile {
  // ...
  draw(g: CanvasRenderingContext2D,
    x: number, y: number)
  {
  }
}
class Flux implements Tile {
  // ...
  draw(g: CanvasRenderingContext2D,
    x: number, y: number)
  {
    g.fillStyle = "#ccffcc";
    g.fillRect(
      x * TILE_SIZE,
      y * TILE_SIZE,
      TILE_SIZE,
      TILE_SIZE);
  }
}