// 예제 10.12 추상화에 의한 분기

class FeatureToggle {
  static featureA() {
    return Env.isSet("featureA")
         ? new Version2()
         : new Version1();
  }
}
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
interface FeatureA {
  aCode(): void;
  bCode(): void;
}
class Version1 implements FeatureA {
  aCode() { aCodeV1(); }
  bCode() { bCodeV1(); }
}
class Version2 implements FeatureA {
  aCode() { aCodeV2(); }
  bCode() { bCodeV2(); }
}