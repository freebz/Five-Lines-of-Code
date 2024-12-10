// 예제 10.18 변경 후(3/4)

class ContextA {
  foo() {
    aCodeV2();
  }
}
class ContextB {
  bar() {
    bCodeV2();
  }
}
class Version2 implements FeatureA {
  aCode() { aCodeV2(); }
  bCode() { bCodeV2(); }
}