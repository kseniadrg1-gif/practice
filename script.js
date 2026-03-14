let strings = [
  "http://site.com",
  "https://google.html",
  "http://blog.ru",
  "ftp://files.net",
  "http://shop.org",
  "просто текст",
  "http://news.com/page",
];
let httpSites = strings.filter((str) => str.endsWith(".html"));
console.log(httpSites);
