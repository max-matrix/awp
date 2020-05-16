self.addEventListener('install', e => {
  console.log('sw install');
})
//
self.addEventListener('activate', e => {
  console.log('sw activate');
})
// verifico qué hago cuando estoy offline.
self.addEventListener('fetch', e => {
  console.log('sw fetch');
  console.log(e.request.url);
})