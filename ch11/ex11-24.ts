// 예제 11.24 변경 후

class XMLFormatter {
  format(vals: string[]) {
    return new Formatter(
      new FormatSingle("<Value>","</Value>"),
      new None()).format(vals);
  }
}
class JSONFormatter {
  format(vals: string[]) {
    return new formatter(
      new FormatSingle("{ value: '","' }"),
      new Comma()).format(vals);
  }
}
class Formatter {
  constructor(
    private single: FormatSingle,
    private sep: Separator) { }
  format(vals: string[]) {
    let result = "";
    for (let i = 0; i < vals.length; i++) {
      result = this.sep.put(i, result);
      result += this.single.format(vals[i]);
    }
    return result;
  }
}
interface Separator {
  put(i: number, str: string): string;
}
class Comma implements Separator {
  put(i: number, result: string) {
    if (i > 0) result += ",";
    return result;
  }
}
class None implements Separator {
  put(i: number, result: string) {
    return result;
  }
}