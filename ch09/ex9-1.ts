// 예제 9.1 레거시 코드

class LegacyA {
  static a() { ... }
}
class LegacyB {
  b() { ... }
}

LegacyA.a();
let b = new LegacyB();
b.b();