// 예제 11.17 변경 전

class XMLFormatter {
  format(vals: string[]) {
    let result = "";
    for (let i = 0; i < vals.length; i++) {
      result += `<Value>${vals[i]}</Value>`;
    }
    return result;
  }
}
class JSONFormatter {
  format(vals: string[]) {
    let result = "";
    for (let i = 0; i < vals.length; i++) {
      if (i > 0) result += ",";
        result += `{ value: "${vals[i]}" }`;
    }
    return result;
  }
}