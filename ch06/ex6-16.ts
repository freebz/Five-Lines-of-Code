// 예제 6.16 변경 전

function generatePostLink(website: Website,
  post: BlogPost)
{
  let url = website.getUrl();
  let user = post.getAuthor();
  let name = user.getUsername();
  let postId = post.getId();
  return url + name + postId;
}
class BlogPost {
  // ...
}
