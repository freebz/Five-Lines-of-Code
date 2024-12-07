// 예제 7.28 상속으로 인한 문제

class Mammal {
  laysEggs() { return false; }
}
class Dolphin extends Mammal { }
/// ...
class Platypus extends Mammal {

}