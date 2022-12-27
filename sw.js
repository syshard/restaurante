const cacheName = "pwa-conf-v1";
const staticAssets = [
  "./",
  "./index.html",
  ".assets/css/style.css",
  ".assets/css/font.css",
  ".assets/css/mobile.css",
  ".assets/js/jquery.js",
  ".assets/js/script.js",
];

self.addEventListener("install", async (event) => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
});
self.addEventListener("fetch", (event) => {
  const req = event.request;
  event.respondWith(cacheFirst(req));
});

async function cacheFirst(req) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(req);
  return cachedResponse || fetch(req);
}
