import{S as e,i as t,s,e as a,t as l,a as r,c as n,b as i,k as o,d as c,f as h,g as f,p as g,h as u,j as d,m,n as v,x as p,y as w,z as S,w as x,A as y,B as $,u as E,C as D,o as b,D as j,E as I}from"./client.9bad1d0a.js";import{g as N,D as T}from"./bundle.esm.a297de33.js";function U(e){let t,s,p,w,S,x,y,$,E,D,b,j,I;return{c(){t=a("div"),s=a("div"),p=l(e[2]),w=l(" / "),S=l(e[3]),x=r(),y=a("img"),E=r(),D=a("div"),b=a("p"),j=a("a"),I=l(e[5]),this.h()},l(a){t=n(a,"DIV",{class:!0});var l=i(t);s=n(l,"DIV",{class:!0});var r=i(s);p=o(r,e[2]),w=o(r," / "),S=o(r,e[3]),r.forEach(c),x=h(l),y=n(l,"IMG",{src:!0,alt:!0,class:!0}),E=h(l),D=n(l,"DIV",{class:!0});var f=i(D);b=n(f,"P",{});var g=i(b);j=n(g,"A",{href:!0,class:!0});var u=i(j);I=o(u,e[5]),u.forEach(c),g.forEach(c),f.forEach(c),l.forEach(c),this.h()},h(){f(s,"class","numbertext svelte-yw9v5s"),y.src!==($=e[0])&&f(y,"src",$),f(y,"alt",e[1]),f(y,"class","svelte-yw9v5s"),f(j,"href",e[6]),f(j,"class","link svelte-yw9v5s"),f(D,"class","infos svelte-yw9v5s"),f(t,"class","mySlides svelte-yw9v5s"),g(t,"show",e[4])},m(e,a){u(e,t,a),d(t,s),d(s,p),d(s,w),d(s,S),d(t,x),d(t,y),d(t,E),d(t,D),d(D,b),d(b,j),d(j,I)},p(e,[s]){4&s&&m(p,e[2]),8&s&&m(S,e[3]),1&s&&y.src!==($=e[0])&&f(y,"src",$),2&s&&f(y,"alt",e[1]),32&s&&m(I,e[5]),64&s&&f(j,"href",e[6]),16&s&&g(t,"show",e[4])},i:v,o:v,d(e){e&&c(t)}}}function V(e,t,s){let{imageUrl:a}=t,{alternText:l}=t,{slideNo:r}=t,{totalSlide:n}=t,{imageShowing:i}=t,{infos:o}=t,{slug:c}=t;return e.$$set=e=>{"imageUrl"in e&&s(0,a=e.imageUrl),"alternText"in e&&s(1,l=e.alternText),"slideNo"in e&&s(2,r=e.slideNo),"totalSlide"in e&&s(3,n=e.totalSlide),"imageShowing"in e&&s(4,i=e.imageShowing),"infos"in e&&s(5,o=e.infos),"slug"in e&&s(6,c=e.slug)},[a,l,r,n,i,o,c]}class k extends e{constructor(e){super(),t(this,e,V,U,s,{imageUrl:0,alternText:1,slideNo:2,totalSlide:3,imageShowing:4,infos:5,slug:6})}}function q(e,t,s){const a=e.slice();return a[4]=t[s],a}function A(e){let t,s;return t=new k({props:{imageUrl:C+e[4].cover.url,alternText:e[4].titre,slideNo:e[1],totalSlide:e[0].length,imageShowing:-1*e[4].idP+e[0].length+1===e[1],infos:e[4].titre,slug:G+e[4].Slug}}),{c(){p(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,a){S(t,e,a),s=!0},p(e,s){const a={};1&s&&(a.imageUrl=C+e[4].cover.url),1&s&&(a.alternText=e[4].titre),2&s&&(a.slideNo=e[1]),1&s&&(a.totalSlide=e[0].length),3&s&&(a.imageShowing=-1*e[4].idP+e[0].length+1===e[1]),1&s&&(a.infos=e[4].titre),1&s&&(a.slug=G+e[4].Slug),t.$set(a)},i(e){s||(x(t.$$.fragment,e),s=!0)},o(e){y(t.$$.fragment,e),s=!1},d(e){$(t,e)}}}function P(e){let t,s,g,m,v,p,w,S,$,N,T,U=e[0],V=[];for(let t=0;t<U.length;t+=1)V[t]=A(q(e,U,t));const k=e=>y(V[e],1,1,(()=>{V[e]=null}));return{c(){t=a("div"),s=a("div");for(let e=0;e<V.length;e+=1)V[e].c();g=r(),m=a("a"),v=l("❮"),p=r(),w=a("a"),S=l("❯"),this.h()},l(e){t=n(e,"DIV",{});var a=i(t);s=n(a,"DIV",{class:!0});var l=i(s);for(let e=0;e<V.length;e+=1)V[e].l(l);l.forEach(c),g=h(a),m=n(a,"A",{href:!0,class:!0});var r=i(m);v=o(r,"❮"),r.forEach(c),p=h(a),w=n(a,"A",{href:!0,class:!0});var f=i(w);S=o(f,"❯"),f.forEach(c),a.forEach(c),this.h()},h(){f(s,"class","container svelte-1mpw5tt"),f(m,"href","blast/#arrowL"),f(m,"class","prev svelte-1mpw5tt"),f(w,"href","blast/#arrowR"),f(w,"class","next svelte-1mpw5tt")},m(a,l){u(a,t,l),d(t,s);for(let e=0;e<V.length;e+=1)V[e].m(s,null);d(t,g),d(t,m),d(m,v),d(t,p),d(t,w),d(w,S),$=!0,N||(T=[E(m,"click",e[2]),E(w,"click",e[3])],N=!0)},p(e,[t]){if(3&t){let a;for(U=e[0],a=0;a<U.length;a+=1){const l=q(e,U,a);V[a]?(V[a].p(l,t),x(V[a],1)):(V[a]=A(l),V[a].c(),x(V[a],1),V[a].m(s,null))}for(I(),a=U.length;a<V.length;a+=1)k(a);D()}},i(e){if(!$){for(let e=0;e<U.length;e+=1)x(V[e]);$=!0}},o(e){V=V.filter(Boolean);for(let e=0;e<V.length;e+=1)y(V[e]);$=!1},d(e){e&&c(t),b(V,e),N=!1,j(T)}}}const z=N`
   query cover{
     projets(sort:"date:desc"){
       id
       idP
       titre
       cover {
         url
       }
       Slug
     }
   }
 `;async function B(){const e=new T({uri:"https://grldfaure.xyz/graphql",fetch:this.fetch});return{presentation:(await e.query({query:z})).data.projets}}const C="https://grldfaure.xyz",G="projet/";function L(e,t,s){let{presentation:a}=t,l=1;return e.$$set=e=>{"presentation"in e&&s(0,a=e.presentation)},[a,l,()=>{s(1,1===l?l=a.length:l-=1)},()=>{l===a.length?s(1,l=1):s(1,l+=1)}]}export default class extends e{constructor(e){super(),t(this,e,L,P,s,{presentation:0})}}export{B as preload};
