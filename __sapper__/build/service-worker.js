!function(){"use strict";const e=1618223629615,t=`cache${e}`,n=["/client/client.0d53ae70.js","/client/inject_styles.5607aec6.js","/client/index.06ce891f.js","/client/SvelteSeo.89042faa.js","/client/index.6533c74e.js","/client/index.d37eaf89.js","/client/bundle.esm.a297de33.js","/client/index.cdf6758f.js","/client/index.96df9572.js","/client/snarkdown.es.257e5e6b.js","/client/index.db61427c.js","/client/[slug].5de51c2e.js","/client/index.1018b0f6.js","/client/index.913d8b74.js","/client/index.c7233700.js","/client/index.1424c25e.js"].concat(["/service-worker-index.html","/Symbioses-Article-UrbanArts-Blast.pdf","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/logo.png","/logo_R4L.webp","/manifest.json","/pirate.jpg","/sitemap.xml"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),c=n.protocol.startsWith("http"),i=n.hostname===self.location.hostname&&n.port!==self.location.port,a=n.host===self.location.host&&s.has(n.pathname),l="only-if-cached"===t.request.cache&&!a;!c||i||l||t.respondWith((async()=>a&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const s=await n.match(t);if(s)return s;throw e}}(t.request))())}))}();
