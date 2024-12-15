// 예제 11.25 변경 전

interface Protocol { ... }
class StringProtocol implements Protocol { ... }
class JSONProtocol implements Protocol { ... }
class ProtobufProtocol implements Protocol { ... }
/// ...
  let p = new StringProtocol();
/// ...