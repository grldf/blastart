!function(){"use strict";const e=1615482097933,t=`cache${e}`,n=["/client/client.0e6fe5b6.js","/client/inject_styles.5607aec6.js","/client/index.5c6da1ce.js","/client/bundle.esm.a297de33.js","/client/index.d2edff2c.js","/client/index.7f5c1577.js","/client/index.08223319.js","/client/index.adfdd0fa.js","/client/[slug].3eb4b6da.js","/client/snarkdown.es.257e5e6b.js","/client/index.7d999a76.js","/client/index.81f18725.js","/client/index.05992124.js"].concat(["/service-worker-index.html","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/logo.png","/manifest.json"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),c=n.protocol.startsWith("http"),a=n.hostname===self.location.hostname&&n.port!==self.location.port,i=n.host===self.location.host&&s.has(n.pathname),l="only-if-cached"===t.request.cache&&!i;!c||a||l||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const s=await n.match(t);if(s)return s;throw e}}(t.request))())}))}();