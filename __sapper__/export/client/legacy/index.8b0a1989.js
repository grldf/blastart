import{v as t,_ as n,a as r,b as s,c as e,i as a,d as c,S as o,s as u,f as i,e as f,t as l,C as p,k as h,l as v,g as d,h as m,j as y,m as g,N as q,o as b,p as k,q as w,r as x,u as R}from"./client.74155e3b.js";import{g as j,_ as C,a as E,D as B}from"./bundle.esm.d755f267.js";import{t as D}from"./snarkdown.es.927b5927.js";var $;function _(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,a=r(t);if(n){var c=r(this).constructor;e=Reflect.construct(a,arguments,c)}else e=a.apply(this,arguments);return s(this,e)}}function H(t){var n,r,s,e,a,c,o=t[0].titre+"",u=D(t[0].conditions)+"";return{c:function(){n=i(),r=f("div"),s=f("h1"),e=l(o),a=i(),this.h()},l:function(t){p('[data-svelte="svelte-1067mrn"]',document.head).forEach(h),n=v(t),r=d(t,"DIV",{class:!0});var c=m(r);s=d(c,"H1",{class:!0});var u=m(s);e=y(u,o),u.forEach(h),a=v(c),c.forEach(h),this.h()},h:function(){document.title="",g(s,"class","svelte-1neoukf"),c=new q(null),g(r,"class","content svelte-1neoukf")},m:function(t,o){b(t,n,o),b(t,r,o),k(r,s),k(s,e),k(r,a),c.m(u,r)},p:function(t,n){var r=w(n,1)[0];1&r&&o!==(o=t[0].titre+"")&&x(e,o),1&r&&u!==(u=D(t[0].conditions)+"")&&c.p(u)},i:R,o:R,d:function(t){t&&h(n),t&&h(r)}}}var I=j($||($=C(['\n\tquery cgv {\n        ccvCgu(id:"1"){\n            id\n            titre\n            conditions\n      }\n    }   \n  '])));function N(t){return O.apply(this,arguments)}function O(){return(O=E(t.mark((function n(r){var s,e;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.params,r.query,s=new B({uri:"http://51.210.96.39:1337/graphql",fetch:this.fetch}),t.next=4,s.query({query:I});case 4:return e=t.sent,t.abrupt("return",{posts:e.data.ccvCgu});case 6:case"end":return t.stop()}}),n,this)})))).apply(this,arguments)}function P(t,n,r){var s=n.posts;return t.$$set=function(t){"posts"in t&&r(0,s=t.posts)},[s]}var S=function(t){n(s,o);var r=_(s);function s(t){var n;return e(this,s),n=r.call(this),a(c(n),t,P,H,u,{posts:0}),n}return s}();export default S;export{N as preload};