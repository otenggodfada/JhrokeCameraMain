'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"android-chrome-192x192.png": "11623060d5ec88d6ab5b4dca5937e243",
"android-chrome-512x512.png": "cc5698e7951127f59d519144bc6b1302",
"apple-touch-icon.png": "47dbb7feeb83229b7e4b66b39d36bef1",
"assets/AssetManifest.bin": "ef34d2089548e6fa21c9e33a5156b72d",
"assets/AssetManifest.bin.json": "9217920cb18e0ca12734d7f575b5b3c7",
"assets/AssetManifest.json": "cdf97073b39f17e4d0f9728c5fb0eae6",
"assets/assets/images/andr.png": "66d50ff81d154b8e1b323cba323daa35",
"assets/assets/images/b1r.png": "21a062eda51b9a17c46c519a8aef006e",
"assets/assets/images/bankp.png": "bf42990611dc0b10a7afbbb1f92ffb37",
"assets/assets/images/crypt.png": "8e90aa480d5ac09506bd1a32a2632dd8",
"assets/assets/images/deff.jpg": "2b75cfb5dcf6f814b06cf7fe84cccd44",
"assets/assets/images/ins.png": "a494fe82a9151c3e89c144d55a017008",
"assets/assets/images/ioss.png": "1232cafea468d81217d197311a2d387b",
"assets/assets/images/isthat.png": "aa1b51f8484b55ce735ac1325dd2a821",
"assets/assets/images/jhm.jpg": "58b45fad87f8e17e99f5c8564b38a2a9",
"assets/assets/images/jhr.jpg": "6c05de60ac72d2f7e666cc682e598dc2",
"assets/assets/images/jkpc.jpg": "3acc1742d7aee0c15275426feb0672ea",
"assets/assets/images/lbb.jpg": "a2413516f73885a36bf0df42ec669cb5",
"assets/assets/images/lin1.png": "b17e2d8815766495cda37554d1595781",
"assets/assets/images/lin2.png": "6063e96043eea677c1cc5108a4e5bd7f",
"assets/assets/images/logoo.png": "5e3768827de485dd434370a76ac49614",
"assets/assets/images/lotaa.jpg": "b8ee4c3927e3c361916252af95c030c3",
"assets/assets/images/macb.png": "12dd9ac3a847fdb5dd70e3a6eacac1d7",
"assets/assets/images/monb.jpg": "dc3c33806c55f9ebab50ddf5b00f0a3f",
"assets/assets/images/myel.jpg": "b9f2a361abdb49a06ea2a30bfa96601b",
"assets/assets/images/phone1.jpg": "7602a64ae1238ecf27b3de888b2dec20",
"assets/assets/images/phone2.jpg": "4ee07efb32f54483d45840958ccc36f3",
"assets/assets/images/pluss.png": "e53692120fe6c4c88110a322130c5e43",
"assets/assets/images/poca.jpg": "cc55b5903922385d5cbd175a47d221f9",
"assets/assets/images/prc.png": "198281658c3bd7940fe09b706cb22d95",
"assets/assets/images/proo.png": "d4a3fc9eb635c34985232661dc013365",
"assets/assets/images/re1.png": "7a462bea135c6b4aa15d72f2d2f50605",
"assets/assets/images/re2.png": "fda90fe706c83f5b59def8f09d917672",
"assets/assets/images/se1.png": "38da605af71ca5d79cc4614d157ae3c1",
"assets/assets/images/se2.png": "8f42eb13fa3474ab683f98a22ddacfe1",
"assets/assets/images/ses.png": "8d33d0c3688fe65f8629591d274b4480",
"assets/assets/images/sps1.png": "978e5c1f6065ef4ac03315640f822a35",
"assets/assets/images/sps2.png": "c5cdab57ff9158fab63e493b7afad975",
"assets/assets/images/Standd.png": "5b4b2008e4dc690f2bd490a581b0084a",
"assets/assets/images/stp1.png": "9039589b366079abaa1fbdfe8702ea1c",
"assets/assets/images/stp2.png": "a2c61c71fe41b32ba8e345022cd62e8e",
"assets/assets/images/stp3.png": "35e8c5dec97e4fee98835c441c2c492b",
"assets/assets/images/stp4.png": "158ab541f9e2e6911d6fba82be3233ef",
"assets/assets/images/stp5.png": "68ad34fdd248863522167056bec59379",
"assets/assets/images/supps.png": "6a70cc6075482b736e3209d8772700b3",
"assets/assets/images/texx.png": "feb98a1e5ea77d5ab08b58777e91529e",
"assets/assets/images/tm1.png": "b4c042e108ece0a8e8b5aea84eb5b539",
"assets/assets/images/tm2.png": "dd60b929be13ab04ebd1d5d1675c7030",
"assets/assets/images/txtu.png": "2c3f2099568c0c1bf27239116434ab9c",
"assets/assets/images/winds.png": "9df1d15e030cd900cf4b03a94bb5d902",
"assets/assets/images/yoma.jpg": "e2de2097bc2817ee9617b9c6106eb2bc",
"assets/assets/images/ytt.png": "1825c62655b528298d5dc8dd8b9d1611",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e37da3c1850fa3028062971e9e586057",
"assets/NOTICES": "0e6e6ad11307fb0808c1913bf626fc44",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "7ea50e3ecea82f891680e4dae436e266",
"favicon-16x16.png": "fdd92fdafbdf82005e99813540035ce3",
"favicon-32x32.png": "3e9164506616294ed4099f332fec57a0",
"favicon.ico": "c1e40c2744737bc87471e7aa2eea7651",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "37039089e530d10d198f90f9a80bf253",
"/": "37039089e530d10d198f90f9a80bf253",
"main.dart.js": "d426550c7a61976318732720b7b3edb4",
"manifest.json": "e7753483f11fd37e9a3faa4c7c246609",
"site.webmanifest": "b061a397eb56a5a05685aeb22f921dc4",
"version.json": "91c866f357fa213ded861f602aefe1a8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
