// 예제 4.110 클래스로의 코드 이관 패턴 적용 후

function moveHorizontal(dx: number) {
  map[playery][playerx + dx].moveHorizontal(dx);
}
interface Tile {
  // ...
  moveHorizontal(dx: number): void;
}
class Box implements Tile {
  // ...
  moveHorizontal(dx: number) {
    if (map[playery][playerx + dx + dx].isAir()
        && !map[playery + 1][player + dx].isAir()) {
      map[playery][playerx + dx + dx] = this;
      moveToTile(playerx + dx, playery);
    }    
  }
}
class Box implements Tile {
  // ...
  moveHorizontal(dx: number) {
    removeLock1();
    moveToTile(player.x + dx, playery);
  }
}
class Lock1 implements Tile {
  // ...
  moveHorizontal(dx:number) { }
}
class Air implements Tile {
  // ...
  moveHorizontal(dx: number) {
    moveToTile(playerx + dx, playery);
  }
}