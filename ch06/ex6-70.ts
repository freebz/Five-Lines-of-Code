// 예제 6.70 변경 전

function remove(
  shouldRemove: RemoveStrategy)
{
  for (let y = 0; y < map.length; y++)
    for (let x = 0; x < map[y].length; x++)
      if (shouldRemove.check(
        map[y][x])))
        map[y][x] = new Air();
}