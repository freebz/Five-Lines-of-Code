// 예제 9.5 모니터링 추가 후

namespace Legacy {
  // ...
  export class Gate {
    a() {
      try {
        let result = LegacyA.a();
        Logger.log("a success");
        return result;
      } catch (e) {
        Logger.log("a fail");
        throw e;
      }
    }
    bClass() {
      try {
        let result = new LegacyB();
        logger.log("bClass success");
        return result;
      } catch (e) {
        Logger.log("bClass fail");
        throw e;
      }
    }
  }
}