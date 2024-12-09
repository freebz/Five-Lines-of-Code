// 예제 9.2 변경 전

class LegacyA {
  static a() { ... }
}
class LegacyB {
  b() { ... }
}

LegacyA.a();
let b = new LegacyB();
b.b();