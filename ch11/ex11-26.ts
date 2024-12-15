// 예제 11.26 변경 후

namespace protocol {
  export interface Protocol { ... }
  export class String implements Protocol { ... }
  export class JSON implements Protocol { ... }
  export class Protobuf implements Protocol { ... }
}
/// ...
  let p = new protocol.String();
/// ...