import{u as t,_ as e,a,b as n,c as s,i as r,d as o,S as c,s as l,e as i,f,t as u,q as h,g as p,h as v,j as m,o as d,p as b,k as y,l as E,m as g,w,y as x,n as B}from"./client.5c79a4e0.js";import{g as j,_ as q,a as D,D as P}from"./bundle.esm.30b4581a.js";var R;function z(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,r=a(t);if(e){var o=a(this).constructor;s=Reflect.construct(r,arguments,o)}else s=r.apply(this,arguments);return n(this,s)}}function A(t){var e,a,n,s,r,o,c,l,j,q,D,P,R,z,A,C,I,O,T,k,M,N,V,$,_=t[0].telephone+"",G=t[0].emailcontact+"";return{c:function(){e=i("meta"),a=f(),n=i("div"),s=i("h1"),r=u("Contactez-Nous!"),o=f(),c=i("img"),l=f(),j=i("div"),q=i("p"),D=u("Thibault"),P=f(),R=i("p"),z=i("a"),A=u(_),I=f(),O=i("p"),T=u("Ou par Email"),k=f(),M=i("p"),N=i("a"),V=u(G),this.h()},l:function(t){var i=h('[data-svelte="svelte-14c9pc3"]',document.head);e=p(i,"META",{name:!0,content:!0}),i.forEach(v),a=m(t),n=p(t,"DIV",{class:!0});var f=d(n);s=p(f,"H1",{class:!0});var u=d(s);r=b(u,"Contactez-Nous!"),u.forEach(v),o=m(f),c=p(f,"IMG",{src:!0,alt:!0,class:!0}),l=m(f),j=p(f,"DIV",{class:!0});var y=d(j);q=p(y,"P",{});var E=d(q);D=b(E,"Thibault"),E.forEach(v),P=m(y),R=p(y,"P",{});var g=d(R);z=p(g,"A",{href:!0,class:!0});var w=d(z);A=b(w,_),w.forEach(v),g.forEach(v),I=m(y),O=p(y,"P",{});var x=d(O);T=b(x,"Ou par Email"),x.forEach(v),k=m(y),M=p(y,"P",{});var B=d(M);N=p(B,"A",{href:!0,class:!0});var C=d(N);V=b(C,G),C.forEach(v),B.forEach(v),y.forEach(v),f.forEach(v),this.h()},h:function(){y(e,"name","robots"),y(e,"content","noindex"),document.title="Contact",y(s,"class","svelte-1lb7h3s"),c.src!=="logo-512.png"&&y(c,"src","logo-512.png"),y(c,"alt","une oeuvre d'un membre de Blast"),y(c,"class","svelte-1lb7h3s"),y(z,"href",C="tel:+33"+t[0].telephone),y(z,"class","svelte-1lb7h3s"),y(N,"href",$="mailto:"+t[0].telephone+"?subject=Deamnde infos"),y(N,"class","svelte-1lb7h3s"),y(j,"class","info svelte-1lb7h3s"),y(n,"class","container svelte-1lb7h3s")},m:function(t,i){E(document.head,e),g(t,a,i),g(t,n,i),E(n,s),E(s,r),E(n,o),E(n,c),E(n,l),E(n,j),E(j,q),E(q,D),E(j,P),E(j,R),E(R,z),E(z,A),E(j,I),E(j,O),E(O,T),E(j,k),E(j,M),E(M,N),E(N,V)},p:function(t,e){var a=w(e,1)[0];1&a&&_!==(_=t[0].telephone+"")&&x(A,_),1&a&&C!==(C="tel:+33"+t[0].telephone)&&y(z,"href",C),1&a&&G!==(G=t[0].emailcontact+"")&&x(V,G),1&a&&$!==($="mailto:"+t[0].telephone+"?subject=Deamnde infos")&&y(N,"href",$)},i:B,o:B,d:function(t){v(e),t&&v(a),t&&v(n)}}}var C=j(R||(R=q(['\n    query infoBlast {\n      infoBlast(id: "1") {\n        telephone\n        emailcontact\n      }\n    }\n  '])));function I(){return O.apply(this,arguments)}function O(){return(O=D(t.mark((function e(){var a,n;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=new P({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch}),t.next=3,a.query({query:C});case 3:return n=t.sent,t.abrupt("return",{info:n.data.infoBlast});case 5:case"end":return t.stop()}}),e,this)})))).apply(this,arguments)}function T(t,e,a){var n=e.info;return t.$$set=function(t){"info"in t&&a(0,n=t.info)},[n]}var k=function(t){e(n,c);var a=z(n);function n(t){var e;return s(this,n),e=a.call(this),r(o(e),t,T,A,l,{info:0}),e}return n}();export default k;export{I as preload};
