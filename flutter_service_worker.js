'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "3a78de4beff9fa9bd16bccd32dc70d17",
".git/config": "0cc6732b6f1e55f8f491641c773e9a77",
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
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b609edc3d528a74c11581bcb7c4d6e27",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9805d013deff9808cc8b6c14658cfe22",
".git/logs/refs/heads/main": "9805d013deff9808cc8b6c14658cfe22",
".git/logs/refs/remotes/origin/main": "3c377eed0650a024c78d0fd9eb7a364d",
".git/objects/04/4edeb9596c5ea3af2ae3f121f5c7b8e383bb94": "240abd0b0423649b4e9396604df10920",
".git/objects/04/9149cc6ab557f8db36a51d32538b15ddf5f5a4": "bb5ea4639e9597e4dc30e0fe729a025b",
".git/objects/05/1a5dc8c2fb16e2720a5d4f95822575de8113e7": "7db26eb914cd81f09ec297daea056627",
".git/objects/0a/61e1a0cdc1814fa52b74527ac48997417a9672": "5f746eca3a1beb16cf0e89f297e4e82c",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/10/edde10bfc890b9c66091053c8679fffc66ff03": "ed06fb43c4154a66490a892a7614308d",
".git/objects/11/f55adc848dac88fe6e97aa69481e5cb800c8f0": "dba1ba26e768ef7dc15c4cc1ab61f7cf",
".git/objects/13/0cd82676596ac6ce3dbd14879cc426e63d1602": "bc4251a6562339e2d0939c1c01a50260",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/26/c7c86701affc656a686abc8152b7faaf7402da": "745b26d21dfb4c008d7b37e90c6b90db",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2a/1088819b045309eaac457c5815a61f9ae48cd7": "fca0e8378a0ecf21f842650ed02fe1c9",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/31/13917010e89a3e968feedbfa615eb318af88ca": "30174130b26c9087c7f6a2f0b40ca493",
".git/objects/36/c06386f095a6e1d4b80adb36d883d56d73bdb3": "f9f80ee6aaf605da30be11f81626287f",
".git/objects/39/86137c70f0bcea67c00af088a3164a22eb44da": "e1ae2a34e6e4ece693560b3c7930e939",
".git/objects/3b/aebdd2e78dd50d4efb2ea689cfb87bbc94ab9a": "a677d3bb5eab9e4e8609b9f75ce3f8f7",
".git/objects/3c/b207c13704b4365fd30bc4294aac0acf4a0289": "2cd8e27ba48ad84c13a4943ca4cd56b4",
".git/objects/3e/d661a3929c981f37507a4b4e8878b74a739fdd": "cc348b074c2c194876b8f2cdf3a621da",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/18fd075a5f28d91053e42f32df28f4f2da6cc1": "4db496332745f21c583bdb7b4d8a442b",
".git/objects/42/562f7901c2e7325a4ca03115e4bdc86103f175": "35da0896b00d017c709389a6ef8164b0",
".git/objects/44/fb1edf4d3fb9348e69dec0ca2a9d190211fabf": "a22f761a21064f2e215c4c4909ddea19",
".git/objects/45/a8b6fd815cb8f52ff6e536252ab3be9924caa0": "4944831676c6dfdc6a380914ef5f0fe2",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/53/e8da534c42f9733f1c0d292b9c04337f523f0f": "9322115e73f23587d90c0a6a495f18ec",
".git/objects/54/40a30827afae62b67893f72e65ecaa6eb74797": "5f80cbe3f55b582384b4e359bb2539e5",
".git/objects/54/c518110145c5f62f408017a1562c13a85810a5": "5b37ceadd2552094abee2a24709fd13c",
".git/objects/55/883d4a90c060c7aa71e0414051cd258678a5e1": "a651f633e0dbf567e7e37dc856cd2cff",
".git/objects/58/3f764e7b7f1a750301d68965a18ef80a945324": "9fcbbe1ba27cbfcc171efbc50944be68",
".git/objects/59/30492082f96dc4a5254db210fb4ae13095d4a3": "71bde08b82203b2a77a00cd55f0f53ad",
".git/objects/60/fe9bfa7856f928e5e05df3273e160ab0340836": "1b4485acb6aa270516e14b336fe7c56a",
".git/objects/64/771bc70b1e723da26948bb255e43c38b558064": "873ab3404a175521c51afe19d65580d9",
".git/objects/67/63aa0233e4abc5518453ca11b5a7ce94cb107b": "e8bc0575bd86c2efd60ff4d185c21393",
".git/objects/68/76477d19ddc10d13316d2873f870c52093450b": "f61c81c6f713b602b215571dc24c3ff8",
".git/objects/6a/0fcfb1ea38a800023acaaa56d9c4a296a3bdbd": "c79de20c5824c8c33c9548dfdcc3ce19",
".git/objects/6b/f4898d853d2ef21d9158052ac1ceb00ea1a044": "fd58a686abbcfcba47df978ce29b5b03",
".git/objects/6c/b27dfd4029211dbd37408189f87e682f6f848b": "e3c9a458d624a92b2c9be55bdeac4e9f",
".git/objects/6e/48e7c63e6f5f8c894a70e5e572fb10509e77f4": "4b9a14a19f760ba2fa73c35fcd68c8bc",
".git/objects/6f/0822966a331cb0f69e41ed0bb6de44de95b74a": "bd304d2715cff8d7cc40da4acdd4cb5b",
".git/objects/72/d611dc874bb16252ff03dbb7cc5da9a231483c": "0be1cafd15d1bb6cbb3398b059b4df8f",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7f/34db58f548394912b63c1a8aeffdd686f363f9": "3d053c01974e23cc384aadceadd71abc",
".git/objects/81/29f457af1868c9bab98196cf2b82fdd9488820": "d6bd5e2f323c1301fb0929d2f0a89499",
".git/objects/81/c8aea91ae2a3496b2dcbd9ab6febf400e97f8e": "5cdc6eda2ba29319db4d9590aa10b92c",
".git/objects/83/9b64258b9c60f30aecf7f65e326948902951ee": "5d29e03dc762576241d7de985343f760",
".git/objects/85/039e5af8f42fb3832d3e0b4469cf6066fcd2c4": "757409438c712528d04def194a8e9b50",
".git/objects/85/6e4cec86c0f18057c1e2daafa86f5c59974619": "6d73876887c1aa9891aa05bd8a70702b",
".git/objects/86/778f4835bb8d30253811fb2291392f65c08c77": "4a607c35011fe985eb440cbd8c39b6f5",
".git/objects/87/9ebf26f96bf6ff54ff54fe7abe1565c2a3c4d6": "cf299d70dfcbb5d13968ae1dd4e8a57f",
".git/objects/8a/7f7d767f7935156623d7868674af7458b48b46": "70981b969b20b7ed398924f20be8322e",
".git/objects/90/1bfa8ca086dc124c9927b8c80a50d7374a5a96": "fbd5df1ab5a062bf62b07cc3a358864d",
".git/objects/91/561d6abcb23f6914fe70c338516087389d90ad": "0b2f5ef85f0231686e57dbd4bc7be784",
".git/objects/91/d522b7b624f89a129dd3d04652246ab78a0b05": "c885c59d208f558cb76ccc384dfa6116",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9a/2dad0aa683a1f4fecca79c3be9ac28a92f796d": "a3c5b050a41484b14e7388346f74fe7a",
".git/objects/9b/849e9374dc7871296d19629967858dace17304": "844fe98257d1e27fe68d3e4e2df24f1a",
".git/objects/9b/a05c9beb7990e6e2f233f85de4664ba05a9d22": "13fe5b973f51daae0f6033499cc31cd0",
".git/objects/9d/ca93d22fdaa0dbf0e2f9a5994550aadeb1e8ac": "10ec8885462938357a93acf1a62b6951",
".git/objects/9d/fa3609759231365d50e5e8f4dcd7c01ba5552a": "3ba06a809c4a8b6a961f1450cb11c54a",
".git/objects/9e/21d3d702b1606f23bbb6b6be90ea1dd30695a0": "5320c2a744ac95e8b927ed64c38458d3",
".git/objects/9f/c138b9d5c477823b9a591328fced6badf76bd4": "13b9b7fa699103b14e6006ee0ce9d123",
".git/objects/a3/06c7310feec4694d8889f866cc28476c06aeee": "0c3ed85aeb91599a2af6a91a96721d38",
".git/objects/a5/b3c63daa91a504093eec8a7fdc9128a9f2f9bd": "6f3e54ef7afadf5ec397c29b7b8fb141",
".git/objects/ac/ec5422ae5932e3aabf802db859e88ea5f34584": "461264a288a24484b2bb57915aa59ffd",
".git/objects/b7/357e9ebb2869c6ecf80d3615ca5072e44b0a68": "a92e39bd2ca610e78a11fb60dfb3e3c4",
".git/objects/ba/212b4bcd4716d7c80d2c7844f805b8a5027301": "a1a6778dbaaa08c7d88ebf77688d65d4",
".git/objects/bf/d61bf836a3bc6c3be34f51b1d10c60b4711efa": "29424427ae459ca69f8c5311d70540a4",
".git/objects/c0/f4d6e7cfc168c68388e2c2e9f2b14ee087a656": "0ad95cc508364a02a4bea75c316dc609",
".git/objects/c4/00f5799c940dfa2c1c83d3cd837288331b29b2": "ab669b3e7ae7a6c48cfbe3c1c7194485",
".git/objects/c8/08197535bb949644e02c1f7eafb16ff0bc81ba": "d19be2646528d46be0c3d055e4d83c5a",
".git/objects/ca/4f8ef52b5bf7443334f8c3153e08de3e82207e": "de5158cb7522eed21d09cb3608699405",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/d8cc306c08be6fffbac81f58ce54ee9f63923e": "06bbcc6cc99535cc8002107407faa554",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d1/e1b0aec3d2d97d9bfa6289dc9960349b3e8d73": "ab32b29a34cb0fd397d2453d36e24de1",
".git/objects/d2/62c7594bff89613e8c4fa281143810268faf68": "5b8de6bc6ad307dd3e5bb5cbd32a7b9d",
".git/objects/d4/a4fe5dd4aeebf0da2d176fba46a66c3ea08b02": "c1f31f3ed91cbe154353f2db42b243f5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/94d2f44274e0a5bece8a42e762c9fbe2bb5bc1": "0442d611053bad1c20ce20d21baeee68",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/2f4429603a268b2eb8ca5ca5ea44cd1e3bc438": "8039db89f5467cebfa751394de4a6b35",
".git/objects/e4/d63c0e63218be67debce837d0f11017414b3ba": "8ccfbb828bc38ed7c4c38819bb98e68c",
".git/objects/e7/2c453b9ccc2dc52cb3e348d7e9ec1b99c3be99": "994a1eac8ea2828660e425662783ee7b",
".git/objects/e7/9a4c1c36c227890bdfba2c42d8e1bd7ed7332c": "03d28a9cbd90515fe632654c8a08b54a",
".git/objects/e8/a722c2f6e3aae389f788c0f03b5a596b24ae66": "917d999f27e1616eade1ff93ca7edae8",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/87a94ad6a9e4c5b2b495211ebe5862bdf0174b": "867730edf9ae8938c2e628df5af2ce3a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/88c5c09e954ac68f918b2f3ce5d5cef888b60b": "2e362c97e119762c5fa92f0c64249165",
".git/objects/f9/90bfa7e8ec0441ee1fe0c795cc588923b7ccdb": "d0cb39072fd3c2a65eb314f020efb65c",
".git/objects/f9/b56fc87101bcabeeea0dd76d393b82d3506b4c": "a40b931e5397417e49012bc26089ecb7",
".git/objects/fb/4f9001c36973f6dee659df4a8e271939fc0e0f": "21d0dd2aa266fd3a11cac7ffdee051bd",
".git/objects/fb/df5a2e3a2a3faede070df812a21001bd1b1c32": "5888598d8bf537c466758d119b601a6a",
".git/objects/fd/f214df2a2e7da278418723f357515e45c9e87f": "052a5fd16f4fef0a541197158046a927",
".git/refs/heads/main": "41f351b5723ad6a3977d352075358ac4",
".git/refs/remotes/origin/main": "41f351b5723ad6a3977d352075358ac4",
"assets/AssetManifest.json": "cfe35442eb15fd93d5b11c4707e14704",
"assets/assets/fonts/BebasNeue.ttf": "54413459a5adf3f82686db50595cba5a",
"assets/assets/images/avatar.png": "65ca7030c51e129a3567bd1b9a6b775e",
"assets/assets/images/bottle_outline_image.png": "a533075f785c730ff81e9e6978436700",
"assets/assets/images/camera_bg.png": "69bd693d6203440491c89f61eac319b4",
"assets/assets/images/categories_icon.png": "83b81d8915921fd7d55445122d3c74a4",
"assets/assets/images/cheers_outline_image.png": "1a6c3fa1d157409c4e43345251773675",
"assets/assets/images/dummy_image.png": "3422c63b142d42bd93d3e5b7e10caf36",
"assets/assets/images/empty_ing.png": "69257eb6a9c3c447e4251fc270c4e91e",
"assets/assets/images/empty_recipy_cal.png": "c54b04141d0c6fabe0006c0d459b4026",
"assets/assets/images/home_icon.png": "fb877d6f5847c8b3c0e5aa4bba9ab6ac",
"assets/assets/images/image.png": "4baee5f30d9d815a35d01bfb08efcd32",
"assets/assets/images/ingredients_icon.png": "f8e891f7bc58ce40f0e4fd083beb4048",
"assets/assets/images/logout.png": "02419bb395c3bf801efd141ade3274f9",
"assets/assets/images/menu_icon.png": "bd267c64217fd716c5bf31586ffe5efe",
"assets/assets/images/pf_main_logo.png": "3f8fea152da15187c226102c6abb84c4",
"assets/assets/images/photo_camera.png": "3e3c28e77288b7ba320accfba4c6aaa2",
"assets/assets/images/purple_fizz_logo.png": "769b4bd6474145496bc64335c4ed59c9",
"assets/assets/images/recipe_cal_icon.png": "5424a9f02385bed19fb799e1d16f9d8c",
"assets/assets/images/recipe_icon.png": "2c51b50acd4f5b46dd362fe148893585",
"assets/assets/images/shopping_icon.png": "0fb13ac9695ba59b164bf51c21d4cfbd",
"assets/assets/images/sort.png": "d3c20c93fa8651fd8a07ae7fbdd38e9e",
"assets/assets/images/toggle.png": "ed6ce00b48dbcca7927ee9ab65adacd9",
"assets/assets/images/user_icon.png": "4671f2d1c8d097033d043777460fa013",
"assets/assets/images/user_icon_filled.png": "087125a4ae76ea67e41cceff7f64dbf8",
"assets/assets/translations/en.json": "01ee20677d695153edf8e98074fd3bf7",
"assets/FontManifest.json": "2925f17b036f844d8e42ff3efb302520",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "2ac13d37bf1a0bc520fa06b4c0d10da1",
"assets/shaders/ink_sparkle.frag": "1fcc9df519c326512ef510f6d084f4fb",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.ico": "a03d1b491d94e7c027cceb44e78d00c8",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "2e30ba2f88603b8102582bd5545632be",
"icons/Icon-512.png": "8accb4bfad61d1af803786add0e59844",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cdc94e092f83ada6d4c6c9cdad729ae8",
"/": "cdc94e092f83ada6d4c6c9cdad729ae8",
"main.dart.js": "e0f1cfd4b7212acf79192a65c41a2178",
"manifest.json": "eea368b6f7e39add243a75b1aa23b934",
"version.json": "cc3dc05be9d4243cc14d7b6c7e034111"
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
