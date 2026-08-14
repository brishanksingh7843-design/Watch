const cn = "movie-app-v1";
const ftc = [
  "./index.html",
  "./main.css",
  "./main.js",
  "./backwork.js",
  "./",
  "./account.html",
  "./upload.html",
  "./series.html",
  "./signuppg.html",
  "./movies.html",
  "./latest.html",
];
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cn).then((cache) => {
      return cache.addAll(ftc);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});
