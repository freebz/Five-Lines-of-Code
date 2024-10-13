// 예제 4.107 초기 코드

function moveHorizontal(dx: number) {
  if (map[playery][playerx + dx].isFlux()
          || map[playery][playerx + dx].isAir()) {
    moveToTile(playerx + dx, playery);
  } else if ((map[playery][playerx + dx].isStone()
          || map[playery][playerx + dx].isBox())
      && map[playery][playerx + dx].isAir()
      && !map[playery + 1][playerx + dx].isAir()) {
    map[playery][playerx + dx + dx] = map[playery][player + dx];
    moveToTile(playerx + dx, playery);
  } else if (map[playery][playerx + dx].isKey1()) {
    removeLock1();
    moveToTile(playerx + dx, playery);
  } else if (map[playery][playerx + dx].isKey2()) {
    removeLock2();
    moveToTile(playerx + dx, playery);
  }
}