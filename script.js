let strings = [
  "http://site.com",
  "https://google.com",
  "http://blog.ru",
  "ftp://files.net",
  "http://shop.org",
  "просто текст",
  "http://news.com/page",
];
let httpSites = strings.filter((str) => str.startsWith("http://"));
console.log(httpSites);
