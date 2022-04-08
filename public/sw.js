/// SW KOKOKOKOKOK
/*
console.warn("sw file in public folder");
const CACHE_NAME = "V-1";
const urlsToCache = [
  "https://kit.fontawesome.com/565d41f5d4.js",
  "https://ka-f.fontawesome.com/releases/v6.0.0/css/free.min.css?token=565d41f5d4",
  "https://ka-f.fontawesome.com/releases/v6.0.0/css/free-v4-font-face.min.css?token=565d41f5d4",
  "https://ka-f.fontawesome.com/releases/v6.0.0/css/free.min.css?token=565d41f5d",
  "https://ka-f.fontawesome.com/releases/v6.0.0/css/free-v4-shims.min.css?token=5",
  "https://ka-f.fontawesome.com/releases/v6.0.0/css/free-v5-font-face.min.css?token=565d41f5d4",
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
  "manifest.json",
  "img/clock-icon64.png",
  "img/clock-icon512.png",
  "img/clock-icon32.png",
  "img/clock-icon16.png",
  "img/clock-icon192.png",
  "img/clock-icon128.png",
];
*/

/////////////////////////////////////

// SW OKOKOKOKOK ///////////////:

/*
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
  ); 
  
  /*
  event.waitUntil(async () => {
    const cache = await caches.open(CACHE_NAME);
    await  Promise.all(
      [...Cached_Files].map((path) => {
        return cache.add(new Request(path));
      })
    );
  })();
  */

/*
});
*/

////////////////////////////

// SW OKOKOKOKOK////////////
/*
self.addEventListener("activate", () => {
  console.log(`${CACHE_NAME} Active`);
  clients.claim();
  const cacheWhiteList = [];
  cacheWhiteList.push(CACHE_NAME);
});
*/
////////////////

/*
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
*/

// SW OKOKOKOKO ////////////
/*
// Fetching content using Service Worker
self.addEventListener('fetch', function(e) {
  e.respondWith(
          caches.match(e.request).then(function (response) {
              if (response) {
                  console.debug('Service Worker -- Get data from cache: ' + e.request.url);
                  return response;
              }
  
              return fetch(e.request).then(function (response) {
                  return caches.open(CACHE_NAME).then(function (cache) {
                      console.debug('Service Worker -- Fetch and caching new resource: ' + e.request.url);
                      cache.put(e.request, response.clone());
                      return response;
                  });
              });
          })
      );
  });
*/




























/*
////////////////////////////////////

// test 15 mars 22h
const CASHNAME = "V-1";
const urlsToCache = [
  "index.html",
  "/calendar",
  "/static/js/bundle.js",
  "https://kit.fontawesome.com/565d41f5d4.js",
  "https://fonts.gstatic.com/s/nunito/v22/XRXI3I6Li01BKofiOc5wtlZ2di8HDDshdTQ3jw.woff2",
  "https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap",
];
// Install SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CASHNAME).then((cache) => {
    //  console.log("cache opened");
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener("fetch", (event) => {
 // console.log("Fetch intercepted for:", event.request.url);
  event.respondWith(
    caches
      .match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
        //  console.log("online mode");
          return cachedResponse;
        }
        if(!navigator.onLine){
       //   console.log(`EVENT REQUEST =>  ${event.request.url}`);

        }
        return fetch(event.request);
      })
      .catch(() => {
        if (
          caches.match("index.html") &&
          caches.match("./static/js/bundle.js")
        ) {
        //  console.log("offline mode");
          return caches
            .match("/static/js/bundle.js")
            .then(() => caches.match("/static/js/bundle.js"))
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
            console.log("oks");
            return caches.delete(cacheName);
          }
        })
      )
    )
  );

  clients.claim();
});
*/
