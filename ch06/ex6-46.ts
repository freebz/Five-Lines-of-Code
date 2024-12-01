// 예제 6.46 변경 전

function drawPlayer(player: Player,
  g: CanvasRenderingContext2D)
{
  g.fillStyle = "#ff0000";
  g.fillRect(
    player.getX() * TILE_SIZE,
    player.getY() * TILE_SIZE,
    TILE_SIZE,
    TILE_SIZE);
}
class Player {
  // ...
}