// 예제 6.6 변경 후(1/3)

class Key implements Tile {
  // ...
  moveHorizontal(dx: number) {
    this.keyConf.removeLock();
    moveToTile(playerx + dx, playery);
  }
  moveVertical(dy: number) {
    this.keyConf.removeLock();
    moveToTile(playerx, playery + dy);
  }
}
class KeyConfiguration {
  // ...
  removeLock() {
    remove(this.removeStrategy);
  }
}