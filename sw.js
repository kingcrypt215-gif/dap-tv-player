self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('dap-store').then((cache) => cache.addAll(['./'])));
});
self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((response) => response || fetch(e.request)));
});
self.addEventListener('fetch', function(event) { event.respondWith(fetch(event.request)); });
