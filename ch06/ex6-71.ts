// 예제 6.71 변경 후(2/4)

function remove(
  shouldRemove: RemoveStrategy)
{
  for (let y = 0; y < map.getMap().length; y++)
    for (let x = 0; x < map.getMap()[y].length; x++)
      if (shouldRemove.check(
        map.getMap()[y][x])))
        map.getMap()[y][x] = new Air();
}