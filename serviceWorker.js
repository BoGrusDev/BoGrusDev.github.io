const cacheName = "demo-pwa-v5006";
const filesToCache = [
        '/index.html',
        '/gallery.html',
        '/inc/header.html',
        '/css/bulma.min.css',
        '/js/bulma.js',
        '/manifest.json',
        '/images/bild1.jpg',
        '/images/bild2.jpg',
        '/images/bild3.jpg',
        '/images/bild4.jpg',
        '/images/bild5.jpg',
        '/images/bild6.jpg',
        '/images/bild7.jpg',
        '/images/bild8.jpg',
];

console.log('Set v3');

self.addEventListener ('install', function(e) {
    console.log('install');
    e.waitUntil(
        caches.open(cacheName)
        .then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', function(e) {
    console.log('fetch');
    e.respondWith(caches.match(e.request)
        .then(function(response) {
            return response || fetch(e.request);
        })
    );
});

/*
self.addEventListener('activate', function(event) {
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.filter(function(cacheName) {
            // Return true if you want to remove this cache,
            // but remember that caches are shared across
            // the whole origin
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      })
    );
  });
  */