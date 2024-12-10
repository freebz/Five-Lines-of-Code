// 예제 10.7 변경 전

class Context {
  foo() {
    if (FeatureToggle.featureA()) {
    } else {
      code();
    }
  }
}