// キャッシュ名を変えると、次回オンライン時に強制的にファイルが更新されます。
// index.html や master-data.js を修正したときは、末尾の数字を1つ上げてください。
const CACHE_NAME = "spr-calculator-v6";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./master-data.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

// インストール時に必要なファイルを一括でキャッシュ
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// 古いキャッシュ(古いバージョン)を削除
self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys
          .filter(function(key) { return key !== CACHE_NAME; })
          .map(function(key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

// オフライン時はキャッシュから返す(キャッシュになければネットワークを試す)
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      return cached || fetch(event.request);
    })
  );
});
