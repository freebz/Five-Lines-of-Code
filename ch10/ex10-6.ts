// 예제 10.6 변경 후(2/4)

class Context {
  foo() {
    if (FeatureToggle.featureA()) {
    } else {
      code();
    }
  }
}