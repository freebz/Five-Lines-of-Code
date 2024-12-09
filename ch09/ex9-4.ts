// 예제 9.4 변경 전

namespace Legacy {
  // ...
  export class Gate {
    a() { return LegacyA.a(); }
    bClass() { return new LegacyB(); }
  }
}