import{r as t,_ as n,a as r,b as e,c as s,i as a,d as c,S as i,s as l,e as u,t as o,f,g as h,h as v,p,j as d,k as m,l as g,m as y,n as w,u as b,v as j,w as x,o as E,x as I}from"./client.012925d2.js";import{g as R,_ as k,a as q,D}from"./bundle.esm.7381ddec.js";var B;function L(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,a=r(t);if(n){var c=r(this).constructor;s=Reflect.construct(a,arguments,c)}else s=a.apply(this,arguments);return e(this,s)}}function P(t,n,r){var e=t.slice();return e[1]=n[r],e[3]=r,e}function z(t){var n,r,e;return{c:function(){n=u("img"),this.h()},l:function(t){n=h(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h:function(){n.src!==(r=_+t[1].image.url)&&g(n,"src",r),g(n,"alt",e=t[1].titre),g(n,"class","svelte-r57j7b")},m:function(t,r){y(t,n,r)},p:function(t,s){1&s&&n.src!==(r=_+t[1].image.url)&&g(n,"src",r),1&s&&e!==(e=t[1].titre)&&g(n,"alt",e)},d:function(t){t&&d(n)}}}function A(t){var n;return{c:function(){n=u("img"),this.h()},l:function(t){n=h(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h:function(){n.src!=="logo-512.png"&&g(n,"src","logo-512.png"),g(n,"alt","Blast logo"),g(n,"class","svelte-r57j7b")},m:function(t,r){y(t,n,r)},p:E,d:function(t){t&&d(n)}}}function G(t){var n,r,e,s,a,c,i,l,j,x,E=t[1].titre+"",I=t[1].contenu+"";function R(t,n){return null===t[1].image?A:z}var k=R(t),q=k(t);return{c:function(){n=u("div"),r=u("article"),e=u("h2"),s=o(E),a=f(),c=u("p"),i=o(I),l=f(),j=u("aside"),q.c(),x=f(),this.h()},l:function(t){n=h(t,"DIV",{class:!0});var u=v(n);r=h(u,"ARTICLE",{class:!0});var o=v(r);e=h(o,"H2",{class:!0});var f=v(e);s=p(f,E),f.forEach(d),a=m(o),c=h(o,"P",{class:!0});var g=v(c);i=p(g,I),g.forEach(d),o.forEach(d),l=m(u),j=h(u,"ASIDE",{class:!0});var y=v(j);q.l(y),y.forEach(d),x=m(u),u.forEach(d),this.h()},h:function(){g(e,"class","svelte-r57j7b"),g(c,"class","svelte-r57j7b"),g(r,"class","svelte-r57j7b"),g(j,"class","svelte-r57j7b"),g(n,"class","impair svelte-r57j7b")},m:function(t,u){y(t,n,u),w(n,r),w(r,e),w(e,s),w(r,a),w(r,c),w(c,i),w(n,l),w(n,j),q.m(j,null),w(n,x)},p:function(t,n){1&n&&E!==(E=t[1].titre+"")&&b(s,E),1&n&&I!==(I=t[1].contenu+"")&&b(i,I),k===(k=R(t))&&q?q.p(t,n):(q.d(1),(q=k(t))&&(q.c(),q.m(j,null)))},d:function(t){t&&d(n),q.d()}}}function M(t){for(var n,r,e,s=t[0],a=[],c=0;c<s.length;c+=1)a[c]=G(P(t,s,c));return{c:function(){n=u("link"),r=f(),e=u("div");for(var t=0;t<a.length;t+=1)a[t].c();this.h()},l:function(t){var s=j('[data-svelte="svelte-de5yl2"]',document.head);n=h(s,"LINK",{rel:!0,href:!0}),s.forEach(d),r=m(t),e=h(t,"DIV",{class:!0});for(var c=v(e),i=0;i<a.length;i+=1)a[i].l(c);c.forEach(d),this.h()},h:function(){document.title="Le collectif",g(n,"rel","stylesheet"),g(n,"href","https://use.typekit.net/ixn1cjn.css"),g(e,"class","content svelte-r57j7b")},m:function(t,s){w(document.head,n),y(t,r,s),y(t,e,s);for(var c=0;c<a.length;c+=1)a[c].m(e,null)},p:function(t,n){var r=x(n,1)[0];if(1&r){var c;for(s=t[0],c=0;c<s.length;c+=1){var i=P(t,s,c);a[c]?a[c].p(i,r):(a[c]=G(i),a[c].c(),a[c].m(e,null))}for(;c<a.length;c+=1)a[c].d(1);a.length=s.length}},i:E,o:E,d:function(t){d(n),t&&d(r),t&&d(e),I(a,t)}}}var S=R(B||(B=k(['\n    query membre {\n      nouvelles(sort: "id:desc") {\n        id\n        titre\n        contenu\n        datePublication\n        image {\n          url\n        }\n      }\n    }\n  '])));function V(){return $.apply(this,arguments)}function $(){return($=q(t.mark((function n(){var r,e;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new D({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch}),t.next=3,r.query({query:S});case 3:return e=t.sent,t.abrupt("return",{news:e.data.nouvelles});case 5:case"end":return t.stop()}}),n,this)})))).apply(this,arguments)}var _="https://www.grldfaure.xyz";function C(t,n,r){var e=n.news;return t.$$set=function(t){"news"in t&&r(0,e=t.news)},[e]}var H=function(t){n(e,i);var r=L(e);function e(t){var n;return s(this,e),n=r.call(this),a(c(n),t,C,M,l,{news:0}),n}return e}();export default H;export{V as preload};
