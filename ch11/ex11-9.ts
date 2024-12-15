// 예제 11.9 재귀 데이터 구조

class Rec {
  constructor(public readonly f: (_: Rec) => void) { }
}

function loop() {
  let helper = (r: Rec) => r.f(r);
  helper(new Rec(helper));
}