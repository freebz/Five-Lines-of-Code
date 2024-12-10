// 예제 10.11 기능 토글

class FeatureToggle {
  static featureA() {
    return Env.isSet("featureA");

    
  }
}
class ContextA {
  foo() {
    if (FeatureToggle.featureA()) {
      aCodeV2();
    } else {
      aCodeV1();
    }
  }
}
class ContextB {
  bar() {
    if (FeatureToggle.featureA()) {
      bCodeV2();
    } else {
      bCodeV1();
    }
  }
}