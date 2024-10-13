// 예제 4.56 인라인해서는 안 되는 메서드

const NUMBER_BITS= 32;
function absolute(x: number) {
  return (x ^ x >> NUMBER_BITS-1) - (x >> NUMBER_BITS-1);
}