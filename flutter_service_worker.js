'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a6f08434000c030ee6e06485731eb5e6",
"assets/AssetManifest.bin.json": "e86ff355a146a0c42adc0b318e9aa884",
"assets/AssetManifest.json": "41822868dcfac682a8d614a7c0e81477",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9892dcd8d25a33c44686ecdc0dcbd585",
"assets/lib/aset/add.gif": "8dc98c52faf54c1c9f28518e1f7d6609",
"assets/lib/aset/backgroundlogin.gif": "50d6bf529b0398d98da9dfd8f646664b",
"assets/lib/aset/calendar.gif": "f0a06cc2156680ef3791cca31699e1bd",
"assets/lib/aset/camerafisik.png": "fb652beec132ebaa46929f55b3a6aaa8",
"assets/lib/aset/cameraktp.png": "9ce17b74a4228754fe4f83773c81d589",
"assets/lib/aset/caution.png": "438e2bb8cae0a2eb5d4068ad50090a40",
"assets/lib/aset/ceklis.png": "8449128eac1ca51512e69390a6690a4a",
"assets/lib/aset/dashboard.png": "864d6daedee34d6e90d0c4ce0167f0ec",
"assets/lib/aset/deviasi.png": "6c6a730295620eeecc7c7cc1028f5397",
"assets/lib/aset/gallery.gif": "c0b50d4ff7c97e8da419e2d0e83f097c",
"assets/lib/aset/galleryktp.png": "ad7306ea9fdbba1151a3303377266891",
"assets/lib/aset/goal.gif": "2bfa8cb89c1800fb836187203ef34dba",
"assets/lib/aset/handshake.gif": "fd32f37e162f5240b4259dd9c7a5f43c",
"assets/lib/aset/helpdesk.png": "0eb9e8713d96a30a8b5324aff63217d0",
"assets/lib/aset/Kota_Batu.png": "65f5ea0d6407cabb20a89f19ba68be56",
"assets/lib/aset/logo.png": "7fed4f3cabea33eb1c86fdc5267bc14e",
"assets/lib/aset/logobayang.png": "a7b0da67b2d535a9dd2b54ffbf65bf06",
"assets/lib/aset/logobayang1.gif": "8a6836f044cbb8b29b3c9502b1692df8",
"assets/lib/aset/logout.png": "2f233694b3e3d215257f5cf3edf84df7",
"assets/lib/aset/lokasi.png": "5ae993bb2ef86652000aa6219381e0a1",
"assets/lib/aset/loop.jpg": "9e19c712fca4e17a7edc43e2ef31a7d3",
"assets/lib/aset/noimg.jpg": "e5b3b324a59d40af45f9eb41937f06da",
"assets/lib/aset/note.png": "dd04bb814ee60f4a0191fa1a96ded03d",
"assets/lib/aset/paket.png": "f3550d7d9ed94bcc7a8ec18bf31fa6aa",
"assets/lib/aset/papernote.png": "294c07984113dad300933664f63640fd",
"assets/lib/aset/pengawas.png": "9038994caeee34617be0dcb3b5f37e7e",
"assets/lib/aset/picture.png": "ec127993097682576efc4ef0a6b87ea0",
"assets/lib/aset/placemarker.gif": "95a6ac7555c4c9bbbef4e0bce7d9b117",
"assets/lib/aset/print.gif": "899fe91809d9424a3c25714c1e4153fb",
"assets/lib/aset/qr_code.gif": "d6ad05e6e24ed464b26ea9c50cf8e538",
"assets/lib/aset/realisasi.png": "ba73789df073b193c1d0caf59decc602",
"assets/lib/aset/splashscreen_ekenda.gif": "3011c655318fd6d07c2a469e62dbed58",
"assets/lib/aset/sun.gif": "56284ae55ce4c85ab93ad1c1debde4cd",
"assets/lib/aset/target.png": "20fe0589c8cdab0ae938d11a3f6d3a2c",
"assets/lib/aset/tickbox.gif": "bca408839e5df1554425b4028c83cb20",
"assets/lib/aset/user.gif": "b5cc0f9caa33dd76e6027d380275f92f",
"assets/lib/aset/userlogo.png": "c145c92dcbac53bb174b4cd100aafda2",
"assets/NOTICES": "75b90c35fb862d30a521507f72d43644",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/simple_web_camera/assets/cam.webp": "66c14077a985c87f4dd7c28da4594149",
"assets/packages/simple_web_camera/assets/camera.html": "11d424d9e0d155a303709341199c4228",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "ab74a3efee67bcec9737df4017d4bf93",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "90d19cb43ab0013adc0ce00e4247fea6",
"/": "90d19cb43ab0013adc0ce00e4247fea6",
"main.dart.js": "51ef44d687111968a155e59279e0d568",
"manifest.json": "371b25b94d77c7fdab82a85942524c46",
"version.json": "df0cf885477f2a50a34713612c62d5a1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
