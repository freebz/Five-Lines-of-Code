// 예제 6.105 변경 후

class TShirtSize {
  static readonly SMALL =
    new TShirtSize(new SmallValue());
  static readonly MEDIUM =
    new TShirtSize(new MediumValue());
  static readonly LARGE =
    new TShirtSize(new LargeValue());
  private constructor(
    private value: SizeValue)
  { }
}