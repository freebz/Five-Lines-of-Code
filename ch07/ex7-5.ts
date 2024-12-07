// 예제 7.5 타입으로 인한 컴파일러 오류

interface NonEmptyList<T> {
  head: T;
}
class Last<T> implements NonEmptyList<T> {
  constructor(public readonly head: T) { }
}
class Cons<T> implements NonEmptyList<T> {
  constructor(
    public readonly head: T,
    public readonly tail: NonEmptyList<T>) { }
}
function first<T>(xs: NonEmptyList<T>) {
  return xs.head;
}
first([]);