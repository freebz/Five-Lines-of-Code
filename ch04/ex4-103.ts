// 예제 4.103 변경 전

function drawTile(
  g: CanvasRenderingContext2D,
  x: number, y: number)
{
  map[y][x].color(g);
  if (!map[y][x].isAir()
      && !map[y][x].isPlayer())
    g.fillRect(
      x * TILE_SIZE,
      y * TILE_SIZE,
      TILE_SIZE,
      TILE_SIZE);
}