// 예제 6.102 비공개 생성자

enum TShirtSize {
  static readonly SMALL = new TShirtSize();
  static readonly MEDIUM = new TShirtSize();
  static readonly LARGE = new TShirtSize();
  private constructor() { }
}
function sizeToString(s: TShirtSize) {
  if (s === TShirtSize.SMALL)
    return "S";
  else if (s === TShirtSize.MEDIUM)
    return "M";
  else if (s === TShirtSize.LARGE)
    return "L";
}