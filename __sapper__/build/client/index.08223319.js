import{S as a,i as e,s,e as t,t as o,a as r,c as l,b as n,d as c,f as i,g as h,h as f,k as u,l as p,m,n as v}from"./client.0e6fe5b6.js";import{g as d,D as E}from"./bundle.esm.a297de33.js";function b(a){let e,s,d,E,b,g,z,q,y,D,j,B,P,x,I,w,A,C,N,O,T,V,$,k=a[0].telephone+"",G=a[0].emailcontact+"";return{c(){e=t("div"),s=t("h1"),d=o("Contactez-Nous!"),E=r(),b=t("img"),z=r(),q=t("div"),y=t("p"),D=o("Thibault"),j=r(),B=t("p"),P=t("a"),x=o(k),w=r(),A=t("p"),C=o("Ou par Email"),N=r(),O=t("p"),T=t("a"),V=o(G),this.h()},l(a){e=l(a,"DIV",{class:!0});var t=n(e);s=l(t,"H1",{class:!0});var o=n(s);d=c(o,"Contactez-Nous!"),o.forEach(i),E=h(t),b=l(t,"IMG",{src:!0,alt:!0,class:!0}),z=h(t),q=l(t,"DIV",{class:!0});var r=n(q);y=l(r,"P",{});var f=n(y);D=c(f,"Thibault"),f.forEach(i),j=h(r),B=l(r,"P",{});var u=n(B);P=l(u,"A",{href:!0,class:!0});var p=n(P);x=c(p,k),p.forEach(i),u.forEach(i),w=h(r),A=l(r,"P",{});var m=n(A);C=c(m,"Ou par Email"),m.forEach(i),N=h(r),O=l(r,"P",{});var v=n(O);T=l(v,"A",{href:!0,class:!0});var g=n(T);V=c(g,G),g.forEach(i),v.forEach(i),r.forEach(i),t.forEach(i),this.h()},h(){f(s,"class","svelte-z3i04o"),b.src!==(g="logo-512.png")&&f(b,"src","logo-512.png"),f(b,"alt","une oeuvre d'un membre de Blast"),f(b,"class","svelte-z3i04o"),f(P,"href",I="tel:+33"+a[0].telephone),f(P,"class","svelte-z3i04o"),f(T,"href",$="mailto:"+a[0].telephone+"?subject=Deamnde infos"),f(T,"class","svelte-z3i04o"),f(q,"class","info svelte-z3i04o"),f(e,"class","container svelte-z3i04o")},m(a,t){u(a,e,t),p(e,s),p(s,d),p(e,E),p(e,b),p(e,z),p(e,q),p(q,y),p(y,D),p(q,j),p(q,B),p(B,P),p(P,x),p(q,w),p(q,A),p(A,C),p(q,N),p(q,O),p(O,T),p(T,V)},p(a,[e]){1&e&&k!==(k=a[0].telephone+"")&&m(x,k),1&e&&I!==(I="tel:+33"+a[0].telephone)&&f(P,"href",I),1&e&&G!==(G=a[0].emailcontact+"")&&m(V,G),1&e&&$!==($="mailto:"+a[0].telephone+"?subject=Deamnde infos")&&f(T,"href",$)},i:v,o:v,d(a){a&&i(e)}}}const g=d`
      query infoBlast {
        infoBlast(id:"1"){
            telephone
            emailcontact
        }
      }
    `;async function z({params:a,query:e}){const s=new E({uri:"http://51.210.96.39:1337/graphql",fetch:this.fetch});return{info:(await s.query({query:g})).data.infoBlast}}function q(a,e,s){let{info:t}=e;return a.$$set=a=>{"info"in a&&s(0,t=a.info)},[t]}export default class extends a{constructor(a){super(),e(this,a,q,b,s,{info:0})}}export{z as preload};
