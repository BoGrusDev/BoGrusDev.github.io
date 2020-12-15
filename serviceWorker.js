const cacheName = "demo-pwa-v4";
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

console.log('Set');

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