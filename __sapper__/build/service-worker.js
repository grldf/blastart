!function(){"use strict";const e=1615936966600,t=`cache${e}`,n=["/client/client.9bad1d0a.js","/client/inject_styles.5607aec6.js","/client/index.1dd37f7d.js","/client/index.21aa07b0.js","/client/index.175ba6e4.js","/client/bundle.esm.a297de33.js","/client/index.e31f8223.js","/client/index.d2dd4407.js","/client/snarkdown.es.257e5e6b.js","/client/index.48fc543e.js","/client/[slug].ab07ab0c.js","/client/index.8a00adfa.js","/client/index.6bd6c6f5.js","/client/index.1521b8ad.js"].concat(["/service-worker-index.html","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/logo.png","/manifest.json","/vidtext.mp4"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),c=n.protocol.startsWith("http"),a=n.hostname===self.location.hostname&&n.port!==self.location.port,i=n.host===self.location.host&&s.has(n.pathname),l="only-if-cached"===t.request.cache&&!i;!c||a||l||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const s=await n.match(t);if(s)return s;throw e}}(t.request))())}))}();
