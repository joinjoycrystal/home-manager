const CACHE='home-manager-v08';
self.addEventListener('install',event=>{self.skipWaiting();});
self.addEventListener('activate',event=>{
  event.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});
self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.mode==='navigate' || req.destination==='document'){
    event.respondWith(
      fetch(req,{cache:'no-store'}).catch(()=>caches.match(req))
    );
  }else{
    event.respondWith(
      fetch(req).catch(()=>caches.match(req))
    );
  }
});
