// 예제 10.17 변경 전

class ContextA {
  foo() {
    FeatureToggle.featureA().aCode();
  }
}
class ContextB {
  bar() {
    FeatureToggle.featureA().bCode();
  }
}
class Version2 implements FeatureA {
  aCode() { aCodeV2(); }
  bCode() { bCodeV2(); }
}