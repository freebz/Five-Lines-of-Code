// 예제 6.101 열거형

enum TShirtSize {
  SMALL,
  MEDIUM,
  LARGE,

}
function sizeToString(s: TShirtSize) {
  if (s === TShirtSize.SMALL)
    return "S";
  else if (s === TShirtSize.MEDIUM)
    return "M";
  else if (s === TShirtSize.LARGE)
    return "L";
}