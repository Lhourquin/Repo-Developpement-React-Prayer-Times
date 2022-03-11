/*
const CACHE_NAME = "V-5";
const CACHED_FILES = [
  "https://ka-f.fontawesome.com/releases/v6.0.0/css/free-v4-font-face.min.css?token=565d41f5d4",
  "https://ka-f.fontawesome.com/releases/v6.0.0/css/free.min.css?token=565d41f5d",
  "https://ka-f.fontawesome.com/releases/v6.0.0/css/free-v4-shims.min.css?token=5",
  "https://ka-f.fontawesome.com/releases/v6.0.0/css/free-v5-font-face.min.css?token=565d41f5d4",
  "https://ka-f.fontawesome.com/releases/v6.0.0/css/free-v4-font-face.min.css?token=565d41f5d4",
  "https://ka-f.fontawesome.com/releases/v6.0.0/css/free.min.css?token=565d41f5d4",
  "https://fonts.gstatic.com/s/nunito/v22/XRXI3I6Li01BKofiOc5wtlZ2di8HDDshdTQ3jw.woff2",
  "https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap",
  "./index.html",
  "./manifest.json",
];
const urlsToCache = ["index.html", "manifest.json"];
// Install SW
self.addEventListener("install", (event) => {
  console.log(`${CACHE_NAME} Install`);
  self.skipWaiting();
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      console.log("cache opened");
      await Promise.all(
        [...CACHED_FILES].map((path) => {
          return cache.add(new Request(path));
        })
      );
    })()
  );
});

// Activate the SW
self.addEventListener("activate", (event) => {
  console.log(`${CACHE_NAME} Active`);
  clients.claim();
  const cacheWhiteList = [];
  cacheWhiteList.push(CACHE_NAME);
});
// LIsten for requests
self.addEventListener("fetch", (event) => {
  console.log(
    `${CACHE_NAME} Fetching ${event.request.url}, Mode : ${event.request.mode}`
  );
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match("index.html"));
    })
  );
});

/*
let self = this;
self.addEventListener('fetch', (event)=> {
  console.log("test")

  console.log(`Fetching : ${event.request.url}`)
});
*/
/*
const CACHE_NAME = "version-1";
const urlsToCache = [ 'index.html', 'offline.html' ];

const self = this;

// Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');

                return cache.addAll(urlsToCache);
            })
    )
});

// Listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request) 
                    .catch(() => caches.match('offline.html'))
            })
    )
});

// Activate the SW
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if(!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
            
    )
});
*/
/*
CACHE_NAME = "V-1";
const CACHED_FILES = [
  "https://ka-f.fontawesome.com/releases/v6.0.0/css/free-v4-font-face.min.css?token=565d41f5d4",
  "https://ka-f.fontawesome.com/releases/v6.0.0/css/free.min.css?token=565d41f5d",
  "https://ka-f.fontawesome.com/releases/v6.0.0/css/free-v4-shims.min.css?token=5",
  "https://ka-f.fontawesome.com/releases/v6.0.0/css/free-v5-font-face.min.css?token=565d41f5d4",
  "https://ka-f.fontawesome.com/releases/v6.0.0/css/free-v4-font-face.min.css?token=565d41f5d4",
  "https://ka-f.fontawesome.com/releases/v6.0.0/css/free.min.css?token=565d41f5d4",
  "https://fonts.gstatic.com/s/nunito/v22/XRXI3I6Li01BKofiOc5wtlZ2di8HDDshdTQ3jw.woff2",
  "https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap",
  "./index.html",
  "./manifest.json",
];
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("cache opened")
      return cache.addAll(["./", "./img/"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  console.log(`intercept fetch request for : ${event.request}`);

  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
*/
console.warn("sw file in public folder");
const CACHE_NAME = "V-1";
const urlsToCache = [
  "https://kit.fontawesome.com/565d41f5d4.js",
  "https://ka-f.fontawesome.com/releases/v6.0.0/css/free.min.css?token=565d41f5d4",
  "https://ka-f.fontawesome.com/releases/v6.0.0/css/free-v4-font-face.min.css?token=565d41f5d4",
  "https://ka-f.fontawesome.com/releases/v6.0.0/css/free.min.css?token=565d41f5d",
  "https://ka-f.fontawesome.com/releases/v6.0.0/css/free-v4-shims.min.css?token=5",
  "https://ka-f.fontawesome.com/releases/v6.0.0/css/free-v5-font-face.min.css?token=565d41f5d4",
  "https://ka-f.fontawesome.com/releases/v6.0.0/css/free-v4-font-face.min.css?token=565d41f5d4",
  "https://ka-f.fontawesome.com/releases/v6.0.0/css/free.min.css?token=565d41f5d4",
  "https://fonts.gstatic.com/s/nunito/v22/XRXI3I6Li01BKofiOc5wtlZ2di8HDDshdTQ3jw.woff2",
  "https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap",
];
const Cached_Files = [
  "/static/js/bundle.js",
  "index.html",
  "/",
  "ws",
  "/calendar",
  "/static/js/main.88a22a2f.js.map",
  "/static/js/main.88a22a2f.js",
  "manifest.json",
  "img/clock-icon64.png",
  "img/clock-icon512.png",
  "img/clock-icon32.png",
  "img/clock-icon16.png",
  "img/clock-icon192.png",
  "img/clock-icon128.png",
];
self.addEventListener("install", (event) => {
  console.log(`Install ${CACHE_NAME}`);
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      console.log("cache opened");
      await Promise.all(
        [...Cached_Files, ...urlsToCache].map((path) => {
          return cache.add(new Request(path));
        })
      );
    })()
  );/*
  event.waitUntil(async () => {
    const cache = await caches.open(CACHE_NAME);
    await  Promise.all(
      [...Cached_Files].map((path) => {
        return cache.add(new Request(path));
      })
    );
  })();*/
});



self.addEventListener("activate", () => {
  console.log(`${CACHE_NAME} Active`);
  clients.claim();
  const cacheWhiteList = [];
  cacheWhiteList.push(CACHE_NAME);
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});