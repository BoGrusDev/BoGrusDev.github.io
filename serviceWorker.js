const cacheName = "demo-pwa-v37";
const VERSION = "v37";
const filesToCache = [
        '/index.html',
        '/manifest.json',
        '/gallery.html',
        '/inc/header.html',
        '/css/bulma.min.css',
        '/js/bulma.js',
        '/images/bild1.jpg',
        '/images/bild2.jpg',
        '/images/bild3.jpg',
        '/images/bild4.jpg',
        '/images/bild5.jpg',
        '/images/bild6.jpg',
        '/images/bild7.jpg',
        '/images/bild8.jpg',
];

//  

self.addEventListener ('install', function(e) {
    console.log('install');
    e.waitUntil(
        caches.open(cacheName)
        .then(function(cache) {
            return cache.addAll(filesToCache);
        })
        .then(function() {
          self.skipWaiting();
        })
        
    );
});

self.addEventListener('activate', function (event) { 
  //on activate 
  console.log('activate');
  event.waitUntil( 

    caches.keys()
        .then(function (cacheNames) { 
              cacheNames.forEach(function (value) { 
                console.log(value);
              if (value.indexOf(VERSION) < 0) { 
                  caches.delete(value); 
              } 
          }); 
          return; 
      }) 
  );  
}); 

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) { //entry found in cache
          return response
        }
        return fetch(event.request)
      }
    )
  )
})

/*
self.addEventListener('fetch', function(e) {
  // console.log('fetch network');
  e.respondWith(fetch(e.request)
      .then(function(response) {
          return response || caches.match(e.request);
      })
  );
});
/*
self.addEventListener('push', event => {
  var payload = event.data.text();
  var options = {
          body: payload,
          icon: './images/favicon.ico',

          requireInteraction: true
          //data : payload
      };

  event.waitUntil(self.registration.showNotification('Notification Testing', options));
});

*/

// Register event listener for the 'push' event.
self.addEventListener('push', function(event) {
  
  const payload = event.data ? event.data.text() : 'no payload';
  event.waitUntil(
    // Show a notification with title 'ServiceWorker Cookbook' and use the payload
    // as the body.
    self.registration.showNotification('Mitt Push-upp medeland', {
      body: payload,
    })
  );
});