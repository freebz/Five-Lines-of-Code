// 예제 11.19 변경 전

class XMLFormatter {
  formatSingle(val: string) {
    return `<Value>${val}</Value>';`
  }
  // ...
}
class JSONFormatter {
  formatSingle(val: string) {
    return `{ value: "${val}" }`;
  }
}