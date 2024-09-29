// 예제 2.4 상속을 사용

interface Bird {
  hasBeak(): boolean;
  canFly(): boolean;
}
class CommonBird implements Bird {
  hasBeak() { return true; }
  canFly() { return true; }
}
class Penguin extends CommonBird {
  canFly() { return false; }
}