self.addEventListener('install', (event) => {
    self.skipWaiting();
    });

    self.addEventListener('activate', (event) => {
      event.waitUntil(clients.claim());
      });

      self.addEventListener('fetch', (event) => {
        // Просто пропускает запросы, но формально активирует PWA
          event.respondWith(fetch(event.request));
          });
          
})