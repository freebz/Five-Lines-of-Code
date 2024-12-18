// 예제 13.23 변경 전 버전 1: Map

function stringConstructor(
    conf: Map<string, string>,
    parts: string[]) {
  return conf.get("prefix")
      + parts.join(conf.get("joiner"))
      + conf.get("postfix");
}