// 예제 10.10 변경 후(4/4)

class FeatureToggle {
  static featureA() {
    return Env.isSet("featureA");
  }
}