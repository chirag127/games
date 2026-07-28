const CACHE = 'oriz-games-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/manifest.json',
  '/games/2048.html',
  '/games/minesweeper.html',
  '/games/sudoku.html',
  '/games/sliding-puzzle.html',
  '/games/snake.html',
  '/games/tetris.html',
  '/games/flappy-bird.html',
  '/games/breakout.html',
  '/games/wordle.html',
  '/games/trivia.html',
  '/games/hangman.html',
  '/games/tic-tac-toe.html',
  '/games/connect-four.html',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
