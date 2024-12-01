// 예제 6.106 새로운 클래스

interface RawTileValue { }
class AirValue implements RawTileValue { }
// ...
class RawTile2 {
  static readonly AIR = new RawTile2(new AirValue());
  // ...
  private constructor(private value: RawTileValue) { }
}