// 예제 6.2 푸시 기반 아키텍처

class Website {
  constructor (private url: string) { }
  generateLink(name: string, id: string) {
    return this.url + name + id;
  }
}
class User {
  constructor (private username: string) { }
  generateLink(website: Website, id: string)
  {
    return website.generateLink(
      this.username,
      id);
  }
}
class BlogPost {
  constructor (private author: User,
    private id: string) { }
  generateLink(website: Website) {
    return this.author.generateLink(
      website,
      this.id);
  }
}
function generatePostLink(website: Website,
  post: BlogPost)
{
  return post.generateLink(website);
}