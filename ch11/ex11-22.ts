// 예제 11.22 변경 후

class XMLFormatter {
  formatSingle(val: string) {
    return new FormatSingle("<Value>","</Value>")
      .format(val);
  }
  // ...
}
class JSONFormatter {
  formatString(val: string) {
    return new FormatSingle("{ value: '","' }`)
      .format(val);
  }
  // ...
}
class FormatSingle {
  constructor(
    private before: string,
    private after: string) { }
  format(val: string) {
    return `${before}${val}${after}`;
  }
}