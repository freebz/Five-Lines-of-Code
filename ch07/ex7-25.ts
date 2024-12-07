// 예제 7.25 런타임 타입

function stringConstructor(
    conf: Map<string, string>,
    parts: string[]) {
  return conf.get("prefix")
      + parts.join(conf.get("joiner"))
      + conf.get("postfix");
}