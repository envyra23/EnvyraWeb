/* A001 — service worker: shell offline + actualización por red primero */
const V = 'a001-v3';
const SHELL = ['ai.html', 'a001-logo.png', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png', 'apple-touch-icon.png'];
const SHELL_URLS = SHELL.map(f => new URL(f, self.registration.scope).href);
const CDN = ['fonts.googleapis.com', 'fonts.gstatic.com', 'cdn.jsdelivr.net'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(V)
      .then(c => Promise.allSettled(SHELL.map(f => c.add(f))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== V).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

const swr = async req => {
  const cache = await caches.open(V);
  const hit = await cache.match(req);
  const net = fetch(req).then(res => {
    if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
    return res;
  }).catch(() => hit);
  return hit || net;
};

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Páginas: solo ai.html, red primero y caché si no hay conexión
  if (req.mode === 'navigate') {
    if (url.origin !== location.origin || !url.pathname.endsWith('/ai.html')) return;
    e.respondWith(
      fetch(req).then(res => {
        if (res.ok) caches.open(V).then(c => c.put(req, res.clone()));
        return res;
      }).catch(async () => (await caches.match(req, { ignoreSearch: true })) || (await caches.match(SHELL_URLS[0])) || Response.error())
    );
    return;
  }

  // Archivos de la app y recursos estáticos externos
  if (SHELL_URLS.includes(url.href.split('?')[0]) || CDN.includes(url.hostname)) {
    e.respondWith(swr(req));
  }
  // Todo lo demás (Supabase, API de A001) pasa directo a la red
});
