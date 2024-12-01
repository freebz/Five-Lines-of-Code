// 예제 6.17 변경 후(2/3)

function generatePostLink(website: Website,
  post: BlogPost)
{
  let url = website.getUrl();

  let name = post.getAuthorName();
  let postId = post.getId();
  return url + name + postId;
}
class BlogPost {
  // ...
  getAuthorName() {
    return this.author.getUsername();
  }
}
