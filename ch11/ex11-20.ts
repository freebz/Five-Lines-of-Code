// 예제 11.20 변경 후

class XMLFormatter {
  formatSingle(val: string) {
    return new XMLFormatSingle()
      .format(val);
  }
  // ...
}
class JSONFormatter {
  formatString(val: string) {
    return new JSONFormatSingle()
      .format(val);
  }
  // ...
}
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