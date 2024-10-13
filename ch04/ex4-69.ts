// 예제 4.69 변경 후(2/2)

function colorOfTile(
  g: CanvasRenderingContext2D,
  x: number, y: number)
{
  if (map[y][x].isFlux())
    g.fillStyle = "#ccffcc";
  else if (map[y][x].isUnbreakable())
    g.fillStyle = "#999999";
  else if (map[y][x].isStone()
      || map[y][x].isFallingStone())
    g.fillStyle = "#0000cc";
  else if (map[y][x].isBox()
        || map[y][x].isFallingBox())
    g.fillStyle = "#8b4513";
  else if (map[y][x].isKey1()
        || map[y][x].isLock1())
    g.fillStyle = "#ffcc00";
  else if (map[y][x].isKey2()
        || map[y][x].isLock2())
    g.fillStyle = "#00ccff";
}