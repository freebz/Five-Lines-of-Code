// 예제 6.111 변경 전

interface RawTileValue { }
class AirValue implements RawTileValue { }
class StoneValue implements RawTileValue { }
class Key1Value implements RawTileValue { }
/// ...
class RawTile2 {
  // ...
}
/// ...
function assertExhausted(x: never): never {
  throw new Error(
    "Unexpected object: " + x);
}
function transformTile(tile: RawTile2) {
  switch (tile) {
    case RawTile.AIR:
      return new Air();
    case RawTile.STONE:
      return new StoneValue(new Resting());
    // ...
    default: assertExhausted(tile);
  }
}