const staticDevCoffee = "fx-pairs-p-n-l-calculator";
const assets = [
  "/",
"/index.html",
"/images/android-icon-36x36.png",
"/images/android-icon-48x48.png",
"/images/android-icon-72x72.png",
"/images/android-icon-96x96.png",
"/images/android-icon-144x144.png",
"/images/android-icon-192x192.png",
"/images/favicon-16x16.png",
"/images/favicon-32x32.png",
"/images/favicon-96x96.png",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});