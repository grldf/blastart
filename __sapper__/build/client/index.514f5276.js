import{S as t,i as s,s as e,e as l,t as a,a as r,c,b as n,d as o,f as i,g as h,h as u,B as d,k as m,l as f,m as g,C as p,n as w,y as v}from"./client.ab037dde.js";import{g as b,D as k}from"./bundle.esm.a297de33.js";function y(t,s,e){const l=t.slice();return l[1]=s[e],l[3]=e,l}function E(t){let s,e,a;return{c(){s=l("img"),this.h()},l(t){s=c(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){s.src!==(e=L+t[1].image.url)&&u(s,"src",e),u(s,"alt",a=t[1].titre),u(s,"class","svelte-okwbmd")},m(t,e){m(t,s,e)},p(t,l){1&l&&s.src!==(e=L+t[1].image.url)&&u(s,"src",e),1&l&&a!==(a=t[1].titre)&&u(s,"alt",a)},d(t){t&&i(s)}}}function I(t){let s,e;return{c(){s=l("img"),this.h()},l(t){s=c(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){s.src!==(e="logo-512.png")&&u(s,"src","logo-512.png"),u(s,"alt","Blast logo"),u(s,"class","svelte-okwbmd")},m(t,e){m(t,s,e)},p:w,d(t){t&&i(s)}}}function x(t){let s,e,p,w,v,b,k,y,x,q,D=t[1].titre+"",j=t[1].contenu+"";function L(t,s){return null===t[1].image?I:E}let z=L(t),A=z(t);return{c(){s=l("div"),e=l("article"),p=l("h2"),w=a(D),v=r(),b=l("p"),k=a(j),y=r(),x=l("aside"),A.c(),q=r(),this.h()},l(t){s=c(t,"DIV",{class:!0});var l=n(s);e=c(l,"ARTICLE",{class:!0});var a=n(e);p=c(a,"H2",{class:!0});var r=n(p);w=o(r,D),r.forEach(i),v=h(a),b=c(a,"P",{class:!0});var u=n(b);k=o(u,j),u.forEach(i),a.forEach(i),y=h(l),x=c(l,"ASIDE",{class:!0});var d=n(x);A.l(d),d.forEach(i),q=h(l),l.forEach(i),this.h()},h(){u(p,"class","svelte-okwbmd"),u(b,"class","svelte-okwbmd"),u(e,"class","svelte-okwbmd"),u(x,"class","svelte-okwbmd"),u(s,"class",d(t[3]%2==0?"impair":"pair")+" svelte-okwbmd")},m(t,l){m(t,s,l),f(s,e),f(e,p),f(p,w),f(e,v),f(e,b),f(b,k),f(s,y),f(s,x),A.m(x,null),f(s,q)},p(t,s){1&s&&D!==(D=t[1].titre+"")&&g(w,D),1&s&&j!==(j=t[1].contenu+"")&&g(k,j),z===(z=L(t))&&A?A.p(t,s):(A.d(1),A=z(t),A&&(A.c(),A.m(x,null)))},d(t){t&&i(s),A.d()}}}function q(t){let s,e,a,o=t[0],d=[];for(let s=0;s<o.length;s+=1)d[s]=x(y(t,o,s));return{c(){s=l("link"),e=r(),a=l("div");for(let t=0;t<d.length;t+=1)d[t].c();this.h()},l(t){const l=p('[data-svelte="svelte-de5yl2"]',document.head);s=c(l,"LINK",{rel:!0,href:!0}),l.forEach(i),e=h(t),a=c(t,"DIV",{class:!0});var r=n(a);for(let t=0;t<d.length;t+=1)d[t].l(r);r.forEach(i),this.h()},h(){document.title="Le collectif",u(s,"rel","stylesheet"),u(s,"href","https://use.typekit.net/ixn1cjn.css"),u(a,"class","content svelte-okwbmd")},m(t,l){f(document.head,s),m(t,e,l),m(t,a,l);for(let t=0;t<d.length;t+=1)d[t].m(a,null)},p(t,[s]){if(1&s){let e;for(o=t[0],e=0;e<o.length;e+=1){const l=y(t,o,e);d[e]?d[e].p(l,s):(d[e]=x(l),d[e].c(),d[e].m(a,null))}for(;e<d.length;e+=1)d[e].d(1);d.length=o.length}},i:w,o:w,d(t){i(s),t&&i(e),t&&i(a),v(d,t)}}}const D=b`
    query membre {
      nouvelles(sort: "id:asc") {
        id
        titre
        contenu
        datePublication
        image {
          url
        }
      }
    }
  `;async function j(){const t=new k({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch});return{news:(await t.query({query:D})).data.nouvelles}}let L="https://www.grldfaure.xyz";function z(t,s,e){let{news:l}=s;return t.$$set=t=>{"news"in t&&e(0,l=t.news)},[l]}export default class extends t{constructor(t){super(),s(this,t,z,q,e,{news:0})}}export{j as preload};
