'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "323c33c21dbfd3c2e9850be515e79858",
".git/config": "f625d5194e8daa2950ebcb61b984ad98",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bb3bd8c7d3193816d17a6f9d18bf555c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7a082251a5d4e17ef14982f0d46c0534",
".git/logs/refs/heads/main": "9ba31899fd868e54782a2e65eac97285",
".git/logs/refs/remotes/origin/main": "77d4eb1414fd443ccff5312aa185fe53",
".git/objects/09/64d75bcd9670db5475cc6f4a16641723a9ac1f": "f964d73ad5f0118e44e9a8f3b408bc93",
".git/objects/09/780100c448df151d606c2f81984472cff5387c": "a1d9cb3606cd8c5e93175a2ff2c1a868",
".git/objects/0b/9a3bb001672258964347f39f23fff322b7ec68": "cd771ace8d1d38834f8bc545470050eb",
".git/objects/10/9012d0af29b120028fc4e2383416f5417a7f0e": "2d65fb594b9bc553164fce7cfb776328",
".git/objects/10/9b840bca4d30f7609080756d9ef16194b44ba8": "4fc0fc91dce6950754498eded17bdc65",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/18/63846490bb49fa6ade6202e653fc3d625b6a0d": "d2429b812564f828721b90cc99569a43",
".git/objects/1c/b52ce23746b288ece658067f574fbd3023db1c": "8674212d61171119a64c700aa12730da",
".git/objects/1c/ee566f08142fe01e6808804d95db54050c99c1": "92b007d7712a06fe4eebb5c59a5c5787",
".git/objects/1d/e7bd905aecac3a6df4883d605a56f848b9d462": "3238a5b59a9524741397031df1e3aba7",
".git/objects/26/5107c4f53838b3b57f21eaaff04963e5304575": "c9cc6c772809da7001ad04b36be7e5bf",
".git/objects/28/298999cdbd1855e34a76dca812c2dba63bf2c6": "a35d4cc855fa14bc3057c3a642d65376",
".git/objects/28/d0626440a94e237140b206c178a54375f1db16": "fc4e33fa59042321dae21316c8a781f4",
".git/objects/2a/39ed2e18f59087b3b4eabe2daac36ea317de28": "98eb6d2f6558edd213af1a9b225ab828",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/9d0ee0d0836949ca7927a4d26262bbba9e0a31": "d6d373294269bd1ee73f565566cb5463",
".git/objects/2f/2e010445fbe386421415d4cadd8017910fbf38": "1cd502959a7a6dcca7e0c0f45250bdaf",
".git/objects/31/2a79b49ccbeaf953e816b0e3d3d25ddd1305bd": "d8b55bc3a93d62d0f0c7d40da001e30c",
".git/objects/31/6b88a159c2a8f22bda1b96675855c11096f546": "600f6d2f673b8b85370741419388c373",
".git/objects/31/f742368a718ea83199c24867398815a019bb65": "f751301ab8a1f4171d49419dc0f6b4db",
".git/objects/36/3b6fce5ce18b80953b460d8e6133039b7f8f45": "658bd92d4067c016a45540273de2abd4",
".git/objects/36/cf39f5459a9c5cc000ff1defa0bd980ad9f65c": "ccab08696f7293979531bf0b38d9cc0b",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/fdc1b88e73c125c441f426c5df3ec2729e62a9": "48b9469b52a775d11219300b278eb265",
".git/objects/3c/0bbfb9b30d498ecfb4bffe0a621ebdfd118fe9": "1a92fb70df40832d6d244f97ee2b887f",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3d/290aa375a9d75b4e4e6f69fa2bb1a0dc8b9126": "50d1d8a95f032e2e1352e9ae14d8a0c6",
".git/objects/3f/7a862e81636ebdaf5f1ae86fadd9fe8ce2dcc0": "e8676787e68d2c2fa07cc515192fa07b",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/08ef5c10421b321bb7951a949569607ae3d751": "d8c69d7cce4e382bbce8decc84aa9bc9",
".git/objects/45/1e1061cfe80a2bfbf5929de2d98ce79a90255d": "9b9f6287e488cf21b6a41caa3c662355",
".git/objects/45/ac0334d39605156e12e740981a3392754bdada": "59f65a6548fe9fed50a890bd0c26a567",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/854ec8c87d07a84bfa2391820e40b1272c0720": "8954f818db374f031c3dd4c4107cf1a7",
".git/objects/48/2d63f21f0a7eb32ba49ca7f23264d006391d0b": "3fc2d49794cf35b87f46f516116267a4",
".git/objects/49/23456daa2afc0a58eb128e07a8f7604f87c348": "29c64d8b93c5af154a7ca9c663f01e01",
".git/objects/4a/2d506c324fa177779e8cb31507cb232565e038": "15818c0ee325b7151343e5fb90d3314a",
".git/objects/4b/230fca1d2551a45057a9bf7f9ac9f402cdee31": "9c84499ac84a0060218579bd5e88d484",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4c/6dd5f0768f1e35eb16c7fc86b3422bd3dedeef": "239b6d558f80ab5ca66de054ea5378f1",
".git/objects/54/63b3dc84aefa976586c6832d2be221e7586f8f": "6226832f2898923430de0f7a29ef448a",
".git/objects/54/76cbe21d8d389151c0aa7a10d6463212ece565": "6969f8b4e936f8e7f262277fce8c45dc",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/5d/7dd2c4a401f225940e0e7220468e1048c446d1": "a1d61a8fe661494b857358e9219a8124",
".git/objects/5e/1d31bc4cd639245998f95297b813a29187dcb2": "3815e1ca3e8f6aa28bcab42a08a81f0a",
".git/objects/5e/3ae271665d35d3930b1d9544fd2966082cb614": "2876d7e27b4ba349ccd01f9663607820",
".git/objects/60/0ace9da307c329bfbe0fed840d6698b24ed658": "b17f0b5f21b977e58d71641767edb959",
".git/objects/61/371ad5de730d55bd7f54abe368837a2feed0bb": "e29128ed3120ae00343e7c16bfd5e3f1",
".git/objects/61/94a26a5d0b153e314c1b8f8b361ce98b328935": "93534ce717105a95432e430e686b2be7",
".git/objects/62/74d802f02109e504dbe96193e34c0542d17d02": "ebe6323ba1c4854aa0728e8a590b6643",
".git/objects/64/60316f69366338c51deca38432072176e18de9": "13f089ecadc481ee202ede2a1de49821",
".git/objects/64/b2cab5aada8be6a52cd2a5534768d312df591e": "703dc4ef98e0fdab32010eab33d37664",
".git/objects/64/c94a392f5f9c53fd1a53c4b45bc35866a2aedb": "e3f8ac11d1fbe97f771e47591d900fd1",
".git/objects/66/512966a71dfb9aa6e8eca11fc2b7eeac2add34": "265e6f202fa958fcf1ee8bd2d9c1e850",
".git/objects/68/6916aa047c82843df3cf14791d5aca5876791a": "da6bbc0e51ab1104289f56c79eb10522",
".git/objects/69/bb68a2db3b69faa5c3820e4a67d8fde48fd4de": "596f59fe92628d2f740857aef91b0cfc",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/71002b6c5b47ca11d85b0921cd2cbbe3eb279b": "f5c339ddf21ce129040bad1380e154f1",
".git/objects/6d/064f25976edc9098542c4a05c18e1834dc4460": "cdcac6cdcdb1a4158633c4a6939e7e02",
".git/objects/72/381c5f7aff70500dad78ecb8b57a069c8f3601": "436d5cd171ac1f06ad9382b766f07a3f",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/76/dacc7d9ce50d1da90738f6b9c06f4d7f99f13e": "fa8ae32bb9d06780f2b737c7035d82d7",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/b3b7ee0a3a8247454780beafc300e421c34334": "8f64748addb054f5991896b962fee0b3",
".git/objects/7b/b798dfe33e7f0b16d2ae1ed836dbe71fa27c2b": "be633c56b4f7b0ea33e29f820e67eb4f",
".git/objects/7b/f1ad0deb26d26d79b51d00bd7346a2a646da3d": "71a1292f14b18c5cd2a7331ce8c55e39",
".git/objects/7e/bfe51f5b0e98a24bf25f4931405c38f55b8481": "a4f8da49b100ccfeaf5c6f0890aab1e0",
".git/objects/7f/c6d7829aeb04de85b663fda80328c74a6fc21c": "2f2c8a9ff53b1bf7e01913b0676151c9",
".git/objects/80/135347a3d828e857ecd2364954924f325308c7": "0c6dd3c4f7d6b35f27ba66db62cf1d95",
".git/objects/84/bc502ffe50faf85a8702de94472d900a967551": "3cebd5de1eb4938c93d580b5fd126f23",
".git/objects/87/95380c75cba4c39f978c34ff24d45d51676ef5": "9b6b894875182e6a7e17e260aa25bbed",
".git/objects/88/b1d0868005e3a23269a46d79fe2f9b13f1a82e": "7d7badfd65df8af91012843f65b5ad01",
".git/objects/8c/8d6ca9407d456d60731283a5d4ef2efc5a3c61": "791269198195d7cd7267f9ed30b5c09d",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/90/934d7a959cae9445a633e924830e24c40791a4": "c16bd0675a32eb71f0f6e3c290497f3a",
".git/objects/92/71c2d055987cb34247298f89764ca31f620ef7": "9178df3e0a978ee3984371962d3a7b2b",
".git/objects/94/2a1ee337587db2ccf6e8512e5c756baca67cbd": "3e12533478087ca6fd6a842d412caad5",
".git/objects/98/da16e5c524f42515380b5c693b04856e3d23a6": "05e5144e7b02f0fa5c2e6b0fe09eec15",
".git/objects/99/93d99e696e3be06ae5931418e28a339189e87c": "e551e71f72a9c578b8df5a91f3b593c5",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/587bc82be0f6adfa9bac7c873281c8c4c3a4de": "69d1937528d947229cfd172d51734ec2",
".git/objects/a2/5fd42b6779849c1cb3c193b62751646c9592b2": "83bf182b460df5dc7d7932e2b6b53290",
".git/objects/a3/c1d1f2909775cc30d4a2b82ea8be2ba4d6d47a": "d5d92b5191102d1530e7ffb2b9a20748",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ac/112f715cc5b9c75692fd03278e3e4b29d48e45": "724dbfbfe7631ef7114860b0657bca84",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ad/95df3928462a254a051aec9c835d90ccf67e0d": "705b2ca126c4254b298a5d0523c66a29",
".git/objects/ae/49e7433ec5d5e0efac5a08703fd723f9069178": "93d62f07d47951e0ce800eebfb39a0e9",
".git/objects/b1/935f4c1dae1c8ed2e29997f581114fa2730e45": "66a2b0089eecbbe88ddb553f7d48154d",
".git/objects/b4/702e9f48e39a2f00c1c8f1e8abe68bb8e9ccb4": "a526ea5f255b18df3c1894d4de1c44e7",
".git/objects/b7/237f118f7799a89d222bf704a106a4043b83cc": "6a5580fdf784d8a516afca7f522a8094",
".git/objects/bb/27939a01037553588e40b8b1a521126407e3a4": "13f4cfb65d65532d2495894121afd1bc",
".git/objects/c7/98b922341905eebea1d4645db47c763089f594": "9b5935151d9c52901132240055d42e85",
".git/objects/c9/eaf0cdeae62f825afe32096e3df8c9df6b9034": "e62f1c3198bbdaa08426e388bfa1c1ac",
".git/objects/ca/ca71c402d1755653058f85cafa24573605313c": "2e7f0f271d0872b0c528fdaee8225ff8",
".git/objects/d5/1c9610fbf860c1db3f23f79dcdb814a01cb58d": "df98d695f2695a831b2de83e7a93a315",
".git/objects/da/2b6ebb8a1f276a29c4fb9ea2d5279cf4e91ab1": "102fb71ff76f1b0457c3a71844b68aaf",
".git/objects/dc/00a375378d4aa4c1dccbc8b3080eb4a6e5e245": "9cc80f55d8864add04ed7c48b5c65650",
".git/objects/dd/23d83be10cd830972da03c2b93849c860bacf6": "d082da3f974d0168dbb34349632702d9",
".git/objects/dd/dbd8cc36c653f7c7172ef26a94857cee41ff28": "0f45b82aa48582ea1601e3a2048db34e",
".git/objects/e3/1d544972260ed57f1f665cabd474e1e204a463": "ea60c1359ee778c3e603f8813a715fd3",
".git/objects/e3/4bd1ea79e901b9bbc7aa16eaf571d54b9fc8dc": "795b348b799006e2c400801e23393919",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/67a43e105988e02e357bb4e0f22a4c2b85766a": "7c97f0bebaed2328e39f04c6eaa25378",
".git/objects/ea/3200a791af93f7921289698d24acae2a1c1b19": "b7fa123a3a97b89bf312249170df1b26",
".git/objects/ea/82ac655a0e20b8f2044a95cdbfb0ba0b44feb1": "d5c532f28e732b512051558164a52ff3",
".git/objects/ec/2ab5568393726eae80e20ba5b6b3127c83a528": "00eb32327842eab404788281fc28f5a6",
".git/objects/f0/8b6aa27971c9dcf6b5acb894c0b701b3ed6ef3": "43620d5bbfbb2cb1ce4de74ca1f68bd0",
".git/objects/f1/f9159a37e24af66d17dc88f7813293317544b5": "f3b8d30512694f3f54167f90ff7c5f81",
".git/objects/f4/86fc571b09db1d47e5d1db8a117181a5da6b66": "e5eca1d2e73fde5720c2ba645ef90e7d",
".git/objects/f6/48c9723629fd2a58cfd79b98b0082fbcfa4e76": "51b6d171d8eb5a67c83fa1d19f612ac3",
".git/objects/f9/11205f3867a077e435a714e96bc336481e962c": "fb206692d5e1b0ed2c2e65a1248d521a",
".git/refs/heads/main": "0d95cec500c39a751f1dce28d9b7d046",
".git/refs/remotes/origin/main": "0d95cec500c39a751f1dce28d9b7d046",
"assets/AssetManifest.json": "34eca2a8a667716bf49c6c1d997396a9",
"assets/assets/icons/admin.png": "dbb4f6a59b023180b28ff2166c72ebf5",
"assets/assets/icons/admin_cover.png": "2a3dbb7ad1a38da4f9fcc8f6958760c9",
"assets/assets/icons/bottom.png": "529bff0049ca05ea3cd046ab387a0e51",
"assets/assets/icons/empty.png": "7e1870a2fea6ef715c96655d5d5cf17e",
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
"assets/NOTICES": "3641e864da428d10187aca6828a44663",
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
"index.html": "9bf1c987ec1faf79d9a5c1cf3ffae0da",
"/": "9bf1c987ec1faf79d9a5c1cf3ffae0da",
"main.dart.js": "8c482e8343e48aaafe7e54479bf61b2a",
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
