// 예제 4.68 변경 전

function colorOfTile(
  g: CanvasRenderingContext2D,
  x: number, y: number)
{
  if (map[y][x] === Tile.FLUX)
    g.fillStyle = "#ccffcc";
  else if (map[y][x] === Tile.UNBREAKBLE)
    g.fillStyle = "#999999";
  else if (map[y][x] === Tile.STONE
      || map[y][x] === Tile.FALLING_STONE)
    g.fillStyle = "#0000cc";
  else if (map[y][x] === Tile.BOX
        || map[y][x] === Tile.FALLING_BOX)
    g.fillStyle = "#8b4513";
  else if (map[y][x] === Tile.KEY1
        || map[y][x] === Tile.LOCK1)
    g.fillStyle = "#ffcc00";
  else if (map[y][x] === Tile.KEY2
        || map[y][x] === Tile.LOCK2)
    g.fillStyle = "#00ccff";
}