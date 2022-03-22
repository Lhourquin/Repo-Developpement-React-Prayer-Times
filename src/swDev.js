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
  console.log("install");
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

export default function swDev() {
  let swURL = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker
    .register(swURL)
    .then((response) => {
      console.warn("response", response);
    })
    .catch((err) => console.log("error : " + err));
}

