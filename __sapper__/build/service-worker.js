<<<<<<< HEAD
!function(){"use strict";const e=1618315460289,t=`cache${e}`,n=["/client/client.a7fe2b82.js","/client/inject_styles.5607aec6.js","/client/index.64fe3e03.js","/client/SvelteSeo.bb62bdd9.js","/client/index.d5229a69.js","/client/index.b7ee26ea.js","/client/bundle.esm.a297de33.js","/client/index.54c25559.js","/client/index.4848155b.js","/client/snarkdown.es.257e5e6b.js","/client/index.56a46ae3.js","/client/[slug].61fd81f0.js","/client/index.f123a089.js","/client/index.34d8aacf.js","/client/index.8ea92d26.js","/client/index.95fa0795.js"].concat(["/service-worker-index.html","/Symbioses-Article-UrbanArts-Blast.pdf","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/logo.png","/logo_R4L.webp","/manifest.json","/pirate.jpg","/sitemap.xml"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),c=n.protocol.startsWith("http"),a=n.hostname===self.location.hostname&&n.port!==self.location.port,i=n.host===self.location.host&&s.has(n.pathname),l="only-if-cached"===t.request.cache&&!i;!c||a||l||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const s=await n.match(t);if(s)return s;throw e}}(t.request))())}))}();
=======
!function(){"use strict";const e=1618231937977,t=`cache${e}`,n=["/client/client.536ab311.js","/client/inject_styles.5607aec6.js","/client/index.463cdbde.js","/client/SvelteSeo.cb2df035.js","/client/index.7348b027.js","/client/index.f18db00b.js","/client/bundle.esm.a297de33.js","/client/index.6acc75f7.js","/client/index.dd7e3def.js","/client/snarkdown.es.257e5e6b.js","/client/index.04f9eef9.js","/client/[slug].6676bc9f.js","/client/index.24dba38b.js","/client/index.f4f80b8b.js","/client/index.6f4600bf.js","/client/index.e2f315fc.js"].concat(["/service-worker-index.html","/Symbioses-Article-UrbanArts-Blast.pdf","/favicon.png","/global.css","/logo-192.png","/logo-512.png","/logo.png","/logo_R4L.webp","/manifest.json","/pirate.jpg","/sitemap.xml"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),c=n.protocol.startsWith("http"),i=n.hostname===self.location.hostname&&n.port!==self.location.port,a=n.host===self.location.host&&s.has(n.pathname),l="only-if-cached"===t.request.cache&&!a;!c||i||l||t.respondWith((async()=>a&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const s=await n.match(t);if(s)return s;throw e}}(t.request))())}))}();
>>>>>>> 1f9a40b5c99f0eae01aa05ff77c3b9178dd1ef94
