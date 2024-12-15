// 예제 11.18 변경 후

class XMLFormatter {
  format(vals: string[]) {
    let result = "";
    for (let i = 0; i < vals.length; i++) {
      result += this.formatSingle(vals[i]);
    }
    return result;
  }
  formatSingle(val: string) {
    return `<Value>${val}</Value>`;
  }
}
class JSONFormatter {
  format(vals: string[]) {
    let result = "";
    for (let i = 0; i < vals.length; i++) {
      if (i > 0) result += ",";
      result += this.formatSingle(vals[i]);
    }
    return result;
  }
  formatSingle(val: string) {
    return `{ value: "${val}" }`;
  }
}