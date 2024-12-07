// 예제 7.9 잠재적인 무한 루프지만 컴파일러 오류는 없음

let insideQuote = false;
let quotePosition = s.indexOf("\"");
while(quotePosition >= 0) {
  insideQuote = !insideQuote;
  quotePosition = s.indexOf("\"");
}