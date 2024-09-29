// 예제 2.5 컴포지션을 사용

interface Bird {
  hasBeak(): boolean;
  canFly(): boolean;
}
class CommonBird implements Bird {
  hasBeak() { return true; }
  canFly() { return true; }
}
class Penguin implements Bird {
  private bird = new CommonBird();
  hasBeak() { return this.bird.hasBeak(); }
  canFly() { return false; }
}