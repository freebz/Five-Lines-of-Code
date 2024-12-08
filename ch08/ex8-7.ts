// 예제 8.7 변경 후

/// 요청 url을 만듦
fullUrl = buildRequestUrl(
  fullUrl, queryString);
/// ...
function buildRequestUrl(
  fullUrl: string, queryString: string)
{
  if (queryString)
    fullUrl += "?" + queryString;
}