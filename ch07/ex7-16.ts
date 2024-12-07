// 예제 7.16 컴파일러 오류로 열거형을 사용하는 위치 찾기

enum Color_handled {
  RED, GREEN, BLUE
}
function toString(c: String) {
  switch (c) {
    case Color.RED: return "RED";
    default: return "No color";
  }
}