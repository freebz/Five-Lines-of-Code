// 예제 7.27 기본 인자로 인한 버그

class Animal {
  constructor(name: string, isMammal = true) { ... }
}
let nemo = new Animal("Clown fish");