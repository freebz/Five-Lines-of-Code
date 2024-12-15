// 예제 11.21 변경 전

class XMLFormatSingle {
  format(val: string) {
    return `<Value>${val}</Value>`;
  }
}
class JSONFormatSingle {
  format(val: string) {
    return `{ value: "${val}" }`;
  }
}