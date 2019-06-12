var cacheName='pwa-practice-v2';

// we donot register manifest.json and serviceWorker.js in SW.

var fileToCache=[
    '/',
    '/nodes.html',
    'nodes.js',
    'style.css' //must add css too for caching in SW
];

// to install serviceworkder
self.addEventListener('install',function(e){
    console.log('[ServiceWorker] install');
    e.waitUntil(
        caches.open(cacheName)
        .then(function(cache){
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(fileToCache);
        })
    )
})

// to active service worker
self.addEventListener('activate',function(e){
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function(keyList){
            return Promise.all(keyList.map(function(key){
                console.log('Keys',key);
                if (key !== cacheName) {
                    console.log('[ServiceWorker] Removing old cache', key)
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch',function(e){
    console.log('[Service Worker] Fetch',e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (resp){
            return resp || fetch(e.request);
        })
    );
});