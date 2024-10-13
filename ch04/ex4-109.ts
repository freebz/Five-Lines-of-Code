// 예제 4.109 변경 후

function moveHorizontal(dx: number) {
  if (map[playery][playerx + dx].isEdible()) {
    moveToTile(playerx + dx, playery);
  } else if (map[playery][playerx + dx].isPushable()
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
interface Tile {
  // ...
  isEdible(): boolean;
  isPushable(): boolean;
}
class Box implements Tile {
  // ...
  isEdible() { return false; }
  isPushable() { return true; }
}
class Air implements Tile {
  // ...
  isEdible() { return true; }
  isPushable() { return false; }
}