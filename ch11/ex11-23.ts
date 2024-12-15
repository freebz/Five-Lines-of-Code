// 예제 11.23 변경 전

class XMLFormatter {
  format(vals: string[]) {
    let result = "";
    for (let i = 0; i < vals.length; i++) {
      result +=
        new FormatSingle("<Value>","</Value>")
        .format(vals[i]);
    }
    return result;
  }
}
class JSONFormatter {
  format(vals: string[]) {
    let result = "";
    for (let i = 0; i < vals.length; i++) {
      if (i > 0) result += ",";
      result +=
        new FormatSingle("{ value: '","' }")
        .format(vals[i]);
    }
    return result;
  }
}