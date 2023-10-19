'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5afd6f0e7c99b69ac547584840572b59",
".git/config": "f625d5194e8daa2950ebcb61b984ad98",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e7fdc6b30d0c293f352d33e196d8f84b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a3571eab91511ad9fce3f65aa979d340",
".git/logs/refs/heads/main": "50c53efa99776b13e5b5f13c67bdbf04",
".git/logs/refs/remotes/origin/main": "2d9c5e97b2fb2faaa959d6449b2eeb06",
".git/objects/08/ab90cdda4a9ee9766503884337e5c47f52cc9f": "932944e9923b97e52e2f751bca39e94c",
".git/objects/09/64d75bcd9670db5475cc6f4a16641723a9ac1f": "f964d73ad5f0118e44e9a8f3b408bc93",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/0f/90f0f453fab31af94e829aad397b15309cf6f2": "4619f16e01897300750e63826ef6ad76",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/14/1cd8000c8b04d6f2967cac08b02aead55177ce": "4c3e34739a24d9a5aca3628ebbbb0a43",
".git/objects/18/63846490bb49fa6ade6202e653fc3d625b6a0d": "d2429b812564f828721b90cc99569a43",
".git/objects/24/572bdcaf899cc4d4af2f5bdd195a9cedb301a3": "92268b17ccdf10f19a6a75d27c6486c1",
".git/objects/2a/5552793a0478790270c4bcbb7ff25bd98164d9": "c57c73268a16a3e104b049f90c776502",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/05c05129323ccffdf66c052da776c0c4624c3c": "1c1660077fe208e30baf1dab9239442e",
".git/objects/37/e9e73a3c11754d4773d8d842fb5cf8017d0c58": "c267444a75aa492e4e563dfc0b93f910",
".git/objects/38/d56fb31a94ca358913c3705ba18fd4721ce856": "20aaf9c39ed5735443edc7203afca5e4",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3e/c4f949888a515979497fb946169366007ba6ef": "ea71d742475bbc1e4f91809717728adb",
".git/objects/40/5f105d0d44e082413aa25b130531b76cd7b9ae": "7a06966b7e4bdb1ad6a8ecc05ed28167",
".git/objects/43/3c2a8b04b4d6824fc9959ceed2bd298538866c": "498449885b39107d3d22e419e8727c71",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/02f9122f6221069817aa32d287f58c87c85b6b": "db7ac497a9fa0f7b683fc85844ff09dc",
".git/objects/4f/3efc618842effff64981af02a39fa88fc2e5f5": "04029739eb5810e0e7477deb8142eb2a",
".git/objects/4f/797d5282ae060317c767e6d21409cea2de0b7e": "98b24acf14f8926576866ae78959e3db",
".git/objects/50/47ebf44c9b7a893af857b88b7be0e8aa4d196b": "171ab9ff44a9e956c90056a47dfc6a96",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5e/1fb39a092e8dffbcbf18435aeef16d4a65e440": "09ebc79caa5a92c5b2798699c859c01b",
".git/objects/5f/94052f96209337fd7a4c62947b98a194d19357": "5fbddb1b2c717a482d83f3b1b175f988",
".git/objects/66/512966a71dfb9aa6e8eca11fc2b7eeac2add34": "265e6f202fa958fcf1ee8bd2d9c1e850",
".git/objects/6d/15e9e62526ea987387257509b31beb06e18793": "a5aca6df5bd26bd4dee7c0d04ab15476",
".git/objects/72/ed10f7c2b83f6768ce1c8e00a7e8cb63cc7962": "9bad6675d30806faa524fa6c175394be",
".git/objects/77/97f7c6a7356b0d451d11a49925df854c22e978": "1aa892ecd25dc2a457249503f1fe6ea8",
".git/objects/78/42ccc429704556b0088f105115b705d38f2663": "28450f74e2938c7d8b87147ab659e640",
".git/objects/7b/b798dfe33e7f0b16d2ae1ed836dbe71fa27c2b": "be633c56b4f7b0ea33e29f820e67eb4f",
".git/objects/7f/80e7a6afccfad30e907abe579fad32a5cbdf24": "7779c524378944b21ebcb3cc28984c5d",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/89/d74057c6f26de465dbb3c279607dd06bb06ce4": "e9d7bf10b7c0cd04ccf7928c2dc08f39",
".git/objects/8f/ee94bdc823c7053bdbba3bd4b99c741998628b": "a5dc22b1f2569c0e227e56ff85fce4c6",
".git/objects/93/fee7da07caeb2bccf2f175d51ddb114036a888": "48e774da875bb029abb34e2afe17b63e",
".git/objects/95/f3f5ae2a082d42d45dc6e2b7223a71e3668e75": "4ba2b5f5fb047ec2cc0e36b4cbc9d1b4",
".git/objects/9e/1fc868384e742633b15930a3896835e623c747": "40628743af7461f1ab5e97735ec1ca5a",
".git/objects/a3/c1d1f2909775cc30d4a2b82ea8be2ba4d6d47a": "d5d92b5191102d1530e7ffb2b9a20748",
".git/objects/a5/38958ef074267aefab63126e3fc04941325f55": "0d427b9d699de500f5ef46bf35be7e62",
".git/objects/a6/87f4d28abc3db975a7a31f18fa52a7f2a0faa1": "dcba4b3c81239f2a416141706f7acd5b",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/ab/346ad96f37817d9c7e44e09ada41ce459a5a14": "81ee4995e886915c54eb7deb9aee0d50",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c0/8f6151c680ab2291a462f70eea61c43792b74d": "930a4b23cd294ac2d8b71ba23a0a0960",
".git/objects/c5/bed8e233688542ed634a8f5825ebda3af33331": "a5b66b9d7e73ded93653dd70e9e55fc5",
".git/objects/cf/8cc14661a441c894b68efb066988fe0d8a3704": "5ff4033b039020598c95a564c5324e0a",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/972c997c86d0de7b64d708881685fc4e738131": "d718e45b2b5c4b586a1087d85e2f45b5",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e1/0f48fe8cb77bc4c629e2bd1051272a80787f7f": "0066c6cd68cab3405eca30e654a9cc13",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/ec/2ab5568393726eae80e20ba5b6b3127c83a528": "00eb32327842eab404788281fc28f5a6",
".git/objects/f3/d22813b972971d393356b1d5be3c3b3b0d3683": "02acd861b000e9af47730ba3d7909e86",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/732412ff210c7d30e95e2d352c96a6d628b37a": "06649d1df29061064cd1da7f916e1f42",
".git/objects/ff/20a20a60b43063d8751b5da57670210804453a": "1274c234e0e18c7c0725aeb0fbcd8a8a",
".git/refs/heads/main": "0a74ac3ab851fd5b6782f146dca69024",
".git/refs/remotes/origin/main": "0a74ac3ab851fd5b6782f146dca69024",
"assets/AssetManifest.bin": "ac2f59204450899f609329501f075431",
"assets/AssetManifest.json": "756be8967377d303d36faf6f89151629",
"assets/assets/icons/admin_black.png": "29479ba0435741580ca9f4a467be6207",
"assets/assets/icons/admin_cover.png": "2a3dbb7ad1a38da4f9fcc8f6958760c9",
"assets/assets/icons/admin_white.png": "b8982e196d7c86f12143ffa41d2b33a8",
"assets/assets/icons/bottom.png": "67c06c36f0a4bb28528c29e1baab8a51",
"assets/assets/icons/center.png": "a7d897a5128623b4add87e20ef653ea1",
"assets/assets/icons/empty.png": "7e1870a2fea6ef715c96655d5d5cf17e",
"assets/assets/icons/logo.png": "2873cb5cd01903dfa68289648ced042f",
"assets/assets/icons/logo2.png": "57ccbb6fc909db257941a7817604566f",
"assets/assets/icons/logo3b.png": "3936c93c097570af303af0e4e74abc2b",
"assets/assets/icons/logo3b_.png": "496d09686fcd9b99c6aae5be8f14f8d7",
"assets/assets/icons/logob.png": "6c597e9f190c325b2c70be8e52b20cf0",
"assets/assets/icons/logob_.png": "a01f90e4411fe443e6bec52bbdbddaf0",
"assets/assets/icons/logo_.png": "ad6fed251bd41d05729c2224c997798d",
"assets/assets/icons/top.png": "e7a616c9755f9ddeb9507840ca2096f6",
"assets/assets/icons/top2.png": "89487ef29e2cd1350d8f999e11132fd6",
"assets/assets/icons/user.png": "45000b334be5509e1a9d4ffef88b5b68",
"assets/assets/images/error1.jpg": "192970cead114fe00ce4c80b02198575",
"assets/assets/images/error2.jpg": "3d466bfa8a7967606af94dac29750428",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6bb60f8f3e9bdf973b46162faf5aea39",
"assets/NOTICES": "dff4eef12c2478fd0b2f90e2a1b4e513",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "99c2ed73c32927d90528ac813e56425c",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "aa0632c27cb597489dfefe424a322e86",
"icons/Icon-512.png": "bbde01614038d6b67ebc714b4dfe458b",
"icons/Icon-maskable-192.png": "aa0632c27cb597489dfefe424a322e86",
"icons/Icon-maskable-512.png": "bbde01614038d6b67ebc714b4dfe458b",
"index.html": "7a18fcb3dffa3be5d42eb41462244253",
"/": "7a18fcb3dffa3be5d42eb41462244253",
"main.dart.js": "90eb4cd3fa61d10a27d72ae707c4eeaf",
"manifest.json": "999ccaeae6d124366a776f13588b8da9",
"paystack_interop.js": "704b7cf55ae4bf43281391c5b5407401",
"version.json": "5d5955ab03247d8c89d31859a6512467",
"_redirects": "ef952d360ec42c652095dfeb72a350a6"};
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
