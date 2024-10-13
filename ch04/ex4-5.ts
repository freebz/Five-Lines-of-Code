// 예제 4.5 새로운 인터페이스

enum Input {
  RIGHT, LEFT, UP, DOWN
}
interface Input2 {
  isRight(): boolean;
  isLeft(): boolean;
  isUp(): boolean;
  isDown(): boolean;
}