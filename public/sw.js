
////////////////////////////////
const CASHNAME = "V-1";
const urlsToCache = [
  "index.html",
  "offline.html",
  "./static/css/main.0b1b5d7d.css",
  "./static/js/main.d8b9ce22.js",
  "https://kit.fontawesome.com/565d41f5d4.js",
  "https://fonts.gstatic.com/s/nunito/v22/XRXI3I6Li01BKofiOc5wtlZ2di8HDDshdTQ3jw.woff2",
  "https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap",
];
// Install SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CASHNAME).then((cache) => {
      console.log("cache opened");
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});
// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener("fetch", (event) => {
  console.log("Fetch intercepted for:", event.request.url);
  event.respondWith(
    caches
      .match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
      .catch(() => {
        if (
          caches.match("index.html") &&
          caches.match("./static/js/main.d8b9ce22.js")
        ) {
          console.log("offline mode");
          return caches
            .match("./static/js/main.d8b9ce22.js")
            .then(() => caches.match("./static/css/main.0b1b5d7d.css"))
            .then(()=> caches.match("./static/js/main.d8b9ce22.js"))
            .then(() => caches.match("index.html"));
        }
      })
  );
});

// Activate the SW
self.addEventListener("activate", (event) => {
  const cacheWhiteList = [];
  cacheWhiteList.push(CASHNAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );

  clients.claim();
});
