import{u as n,_ as t,a as e,b as r,c as s,i as a,d as c,S as o,s as i,e as l,f as u,t as f,g as h,h as v,k as p,p as m,j as d,l as g,m as y,n as w,y as x,q as E,w as R,o as b,z as q}from"./client.c34d161b.js";import{g as P,_ as S,a as j,D as k}from"./bundle.esm.278479c9.js";var z;function A(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var s,a=e(n);if(t){var c=e(this).constructor;s=Reflect.construct(a,arguments,c)}else s=a.apply(this,arguments);return r(this,s)}}function B(n,t,e){var r=n.slice();return r[1]=t[e],r}function I(n){var t,e,r,s,a,c,o,i,E,R,b,q,P,S,j=n[1].commentaire+"";return{c:function(){t=l("article"),e=l("img"),a=u(),c=l("p"),o=l("a"),i=f(j),E=l("br"),R=u(),b=l("span"),q=f("☞"),S=u(),this.h()},l:function(n){t=h(n,"ARTICLE",{class:!0});var r=v(t);e=h(r,"IMG",{src:!0,alt:!0,class:!0}),a=p(r),c=h(r,"P",{class:!0});var s=v(c);o=h(s,"A",{href:!0,target:!0,class:!0});var l=v(o);i=m(l,j),E=h(l,"BR",{}),R=p(l),b=h(l,"SPAN",{class:!0});var u=v(b);q=m(u,"☞"),u.forEach(d),l.forEach(d),s.forEach(d),S=p(r),r.forEach(d),this.h()},h:function(){e.src!==(r=G+n[1].logoSite.url)&&g(e,"src",r),g(e,"alt",s=n[1].commentaire),g(e,"class","svelte-17nn021"),g(b,"class","svelte-17nn021"),g(o,"href",P=n[1].lien),g(o,"target","_blank"),g(o,"class","svelte-17nn021"),g(c,"class","svelte-17nn021"),g(t,"class","svelte-17nn021")},m:function(n,r){y(n,t,r),w(t,e),w(t,a),w(t,c),w(c,o),w(o,i),w(o,E),w(o,R),w(o,b),w(b,q),w(t,S)},p:function(n,t){1&t&&e.src!==(r=G+n[1].logoSite.url)&&g(e,"src",r),1&t&&s!==(s=n[1].commentaire)&&g(e,"alt",s),1&t&&j!==(j=n[1].commentaire+"")&&x(i,j),1&t&&P!==(P=n[1].lien)&&g(o,"href",P)},d:function(n){n&&d(t)}}}function _(n){for(var t,e,r=n[0],s=[],a=0;a<r.length;a+=1)s[a]=I(B(n,r,a));return{c:function(){t=u(),e=l("div");for(var n=0;n<s.length;n+=1)s[n].c();this.h()},l:function(n){E('[data-svelte="svelte-j7ddmf"]',document.head).forEach(d),t=p(n),e=h(n,"DIV",{class:!0});for(var r=v(e),a=0;a<s.length;a+=1)s[a].l(r);r.forEach(d),this.h()},h:function(){document.title="Presse",g(e,"class","container svelte-17nn021")},m:function(n,r){y(n,t,r),y(n,e,r);for(var a=0;a<s.length;a+=1)s[a].m(e,null)},p:function(n,t){var a=R(t,1)[0];if(1&a){var c;for(r=n[0],c=0;c<r.length;c+=1){var o=B(n,r,c);s[c]?s[c].p(o,a):(s[c]=I(o),s[c].c(),s[c].m(e,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=r.length}},i:b,o:b,d:function(n){n&&d(t),n&&d(e),q(s,n)}}}var D=P(z||(z=S(['\n      query presse {\n        presses(sort:"dateParution:desc"){\n            id\n            commentaire\n            lien\n            logoSite{\n                url\n  \t        }\n        }\n    }\n    '])));function $(){return C.apply(this,arguments)}function C(){return(C=j(n.mark((function t(){var e,r;return n.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new k({uri:"https://www.grldfaure.xyz/graphql",fetch:this.fetch}),n.next=3,e.query({query:D});case 3:return r=n.sent,n.abrupt("return",{liens:r.data.presses});case 5:case"end":return n.stop()}}),t,this)})))).apply(this,arguments)}var G="https://www.grldfaure.xyz";function L(n,t,e){var r=t.liens;return n.$$set=function(n){"liens"in n&&e(0,r=n.liens)},[r]}var M=function(n){t(r,o);var e=A(r);function r(n){var t;return s(this,r),t=e.call(this),a(c(t),n,L,_,i,{liens:0}),t}return r}();export default M;export{$ as preload};
