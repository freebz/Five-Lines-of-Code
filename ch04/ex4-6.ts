// 예제 4.6 새로운 클래스

class Right implements Input2 {
  isRight() { return true; }
  isLeft() { return false; }
  isUp() { return false; }
  isDown() { return false; }
}
class Left implements Input2 { ... }
class Up implements Input2 { ... }
class Down implements Input2 { ... }