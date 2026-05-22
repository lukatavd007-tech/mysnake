const CACHE_NAME = 'snake-v1.4';
const ASSETS = [
  'index.html',
    'manifest.json',
      'sw.js'
      ];

      // Установка приложения и кэширование файлов
      self.addEventListener('install', (event) => {
        event.waitUntil(
            caches.open(CACHE_NAME).then((cache) => {
                  return cache.addAll(ASSETS);
                      })
                        );
                        });

                        // Активация и очистка старого кэша
                        self.addEventListener('activate', (event) => {
                          event.waitUntil(
                              caches.keys().then((keys) => {
                                    return Promise.all(
                                            keys.map((key) => {
                                                      if (key !== CACHE_NAME) {
                                                                  return caches.delete(key);
                                                                            }
                                                                                    })
                                                                                          );
                                                                                              })
                                                                                                );
                                                                                                });

                                                                                                // Запрос файлов из кэша для работы в офлайне
                                                                                                self.addEventListener('fetch', (event) => {
                                                                                                  event.respondWith(
                                                                                                      caches.match(event.request).then((cachedResponse) => {
                                                                                                            return cachedResponse || fetch(event.request);
                                                                                                                })
                                                                                                                  );
                                                                                                                  });
                                                                                                                  