// 예제 7.4 접근 제어로 인한 컴파일러 오류

 class Class {
  private sensitiveMethod() {
    // ...
  }
 }
 let c = new Class();
 c.sensitiveMethod();