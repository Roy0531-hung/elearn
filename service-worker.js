// 添加 Service Worker 支援離線訪問
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('v1').then(cache => {
            return cache.addAll([
                '/',
                '/styles/main.css',
                '/js/main.js',
                '/images/common/hero-bg.jpg'
            ]);
        })
    );
}); 