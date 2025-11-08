
const CACHE_NAME = 'damprite-cache-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/learn.html',
  '/style.css',
  '/script.js',
  '/manifest.json',
  '/assets/DampRite_251108_201012.jpg',
  '/assets/icon-192.png',
  '/assets/icon-512.png',
  '/guides/Rising Damp.pdf'
];
self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));
});
self.addEventListener('activate', (e)=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));
});
self.addEventListener('fetch', (e)=>{
  e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request)));
});
