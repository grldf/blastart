import{S as e,i as s,s as t,e as r,a,t as l,c as n,b as c,f as i,k as o,d as h,g as f,h as m,j as u,m as g,q as d,n as p,o as v}from"./client.9bad1d0a.js";import{g as w,D as E}from"./bundle.esm.a297de33.js";function y(e,s,t){const r=e.slice();return r[1]=s[t],r}function b(e){let s,t,d,p,v,w,E,y,b,q,x,S,P,A,I=e[1].commentaire+"";return{c(){s=r("article"),t=r("img"),v=a(),w=r("p"),E=r("a"),y=l(I),b=r("br"),q=a(),x=r("span"),S=l("☞"),A=a(),this.h()},l(e){s=n(e,"ARTICLE",{class:!0});var r=c(s);t=n(r,"IMG",{src:!0,alt:!0,class:!0}),v=i(r),w=n(r,"P",{class:!0});var a=c(w);E=n(a,"A",{href:!0,target:!0,class:!0});var l=c(E);y=o(l,I),b=n(l,"BR",{}),q=i(l),x=n(l,"SPAN",{class:!0});var f=c(x);S=o(f,"☞"),f.forEach(h),l.forEach(h),a.forEach(h),A=i(r),r.forEach(h),this.h()},h(){t.src!==(d=j+e[1].logoSite.url)&&f(t,"src",d),f(t,"alt",p=e[1].commentaire),f(t,"class","svelte-gtmipr"),f(x,"class","svelte-gtmipr"),f(E,"href",P=e[1].lien),f(E,"target","_blank"),f(E,"class","svelte-gtmipr"),f(w,"class","svelte-gtmipr"),f(s,"class","svelte-gtmipr")},m(e,r){m(e,s,r),u(s,t),u(s,v),u(s,w),u(w,E),u(E,y),u(E,b),u(E,q),u(E,x),u(x,S),u(s,A)},p(e,s){1&s&&t.src!==(d=j+e[1].logoSite.url)&&f(t,"src",d),1&s&&p!==(p=e[1].commentaire)&&f(t,"alt",p),1&s&&I!==(I=e[1].commentaire+"")&&g(y,I),1&s&&P!==(P=e[1].lien)&&f(E,"href",P)},d(e){e&&h(s)}}}function q(e){let s,t,l=e[0],o=[];for(let s=0;s<l.length;s+=1)o[s]=b(y(e,l,s));return{c(){s=a(),t=r("div");for(let e=0;e<o.length;e+=1)o[e].c();this.h()},l(e){d('[data-svelte="svelte-j7ddmf"]',document.head).forEach(h),s=i(e),t=n(e,"DIV",{class:!0});var r=c(t);for(let e=0;e<o.length;e+=1)o[e].l(r);r.forEach(h),this.h()},h(){document.title="Presse",f(t,"class","container svelte-gtmipr")},m(e,r){m(e,s,r),m(e,t,r);for(let e=0;e<o.length;e+=1)o[e].m(t,null)},p(e,[s]){if(1&s){let r;for(l=e[0],r=0;r<l.length;r+=1){const a=y(e,l,r);o[r]?o[r].p(a,s):(o[r]=b(a),o[r].c(),o[r].m(t,null))}for(;r<o.length;r+=1)o[r].d(1);o.length=l.length}},i:p,o:p,d(e){e&&h(s),e&&h(t),v(o,e)}}}const x=w`
      query presse {
        presses(sort:"dateParution:desc"){
            id
            commentaire
            lien
            logoSite{
                url
  	        }
        }
    }
    `;async function S(){const e=new E({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch});return{liens:(await e.query({query:x})).data.presses}}let j="https://www.grldfaure.xyz";function P(e,s,t){let{liens:r}=s;return e.$$set=e=>{"liens"in e&&t(0,r=e.liens)},[r]}export default class extends e{constructor(e){super(),s(this,e,P,q,t,{liens:0})}}export{S as preload};