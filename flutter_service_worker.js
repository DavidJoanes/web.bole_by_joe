'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "03f495a9b55c341a77a51dd6ff261ec4",
"assets/assets/icons/bottom.png": "529bff0049ca05ea3cd046ab387a0e51",
"assets/assets/icons/logo.png": "32cb5fe4f842fad3941fc9e2142858c7",
"assets/assets/icons/logo2.png": "077d5df966401214cd79030b0fa37c35",
"assets/assets/icons/logo2b.png": "f36fec2c0999fa9110a4a74339882c59",
"assets/assets/icons/logo3.png": "0c55f114e056a05d843d287ebae787e0",
"assets/assets/icons/logo3b.png": "26f249823f08f0fb28e552b909e1f75f",
"assets/assets/icons/logob.png": "a7eacb7ef28742d49f94294d4fb4bd34",
"assets/assets/icons/top.png": "983b8b686985f8ed293b47d0093da786",
"assets/assets/icons/user.png": "45000b334be5509e1a9d4ffef88b5b68",
"assets/assets/images/basic.jpg": "867474e8c51327982251c73055c93482",
"assets/assets/images/basic.png": "24d463279c7a708476dac5651aece134",
"assets/assets/images/bg.jpg": "52acaf4601ae046fd9ad6e84ab5e4258",
"assets/assets/images/bg2.jpg": "732695720561c0c71487ff4a70a28ea1",
"assets/assets/images/error1.jpg": "192970cead114fe00ce4c80b02198575",
"assets/assets/images/error2.jpg": "3d466bfa8a7967606af94dac29750428",
"assets/assets/images/family.jpg": "3f058bc415c97c8368a24d56b79f45eb",
"assets/assets/images/family.png": "fec3606ab522f7cf7ab29add9900c432",
"assets/assets/images/foodie.jpg": "e64094154df6d66c95b5699352b6c8d0",
"assets/assets/images/foodie.png": "5b946b01078f6146c584fa8ebe5d884e",
"assets/assets/images/quickie.jpg": "5045f5d2b95af08238152efb95703343",
"assets/assets/images/quickie.png": "5c46342d49664c990a5a202e4005687d",
"assets/assets/images/user.jpg": "2781fa2781d77eb112429128fed6e443",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "e31df6990de6ed72ce423585cbb6f6cd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_google_places_web/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places_web/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "d1d7d4274eef20717b088507bef965c4",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "6e83eb2a80f66b4950521ddf9f5e6537",
"icons/Icon-512.png": "3c05fa9a7f487bdf31ea0388459ff697",
"icons/Icon-maskable-192.png": "6e83eb2a80f66b4950521ddf9f5e6537",
"icons/Icon-maskable-512.png": "3c05fa9a7f487bdf31ea0388459ff697",
"index.html": "1d12d6d983ab8b1c104c6f45ee1939b6",
"/": "1d12d6d983ab8b1c104c6f45ee1939b6",
"main.dart.js": "ae99de918ebb754731ff58807cd77569",
"manifest.json": "a09f99efc9e7abc4ad55e50b06d73d11",
"paystack_interop.js": "704b7cf55ae4bf43281391c5b5407401",
"version.json": "1393a1d6caf5e357e077db7f37a63384"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
