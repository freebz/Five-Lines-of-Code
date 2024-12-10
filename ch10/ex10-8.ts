// 예제 10.8 변경 후(3/4)

class Context {
  foo() {
    if (FeatureToggle.featureA()) {
      code();
    } else {
      code();
    }
  }
}