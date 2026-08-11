self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('fetch', (e) => {
  // Service worker minimal requis par Chrome pour l'installation PWA
});

