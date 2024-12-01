// 예제 6.112 변경 후

interface RawTileValue {
  transform(): Tile;
}
class AirValue implements RawTileValue {
  transform() {
      return new Air();
  }
}
class StoneValue implements RawTileValue {
  transform() {
      return new Stone(new Resting());
  }
}
class Key1Value implements RawTileValue {
  transform() {
      return new Key(YELLOW_KEY)
  }
}
/// ...
class RawTile2 {
  // ...
  transform(){
    return this.value.transform();
  }
}

function transformTile(tile: RawTile2) {
  return tile.transform();
}