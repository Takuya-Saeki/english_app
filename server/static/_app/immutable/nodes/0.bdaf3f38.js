import{s as q,n as U,c as K,d as O,u as P,g as Q,e as X}from"../chunks/scheduler.81fe3219.js";import{S as G,i as F,g as _,x as A,s as C,h as f,j as h,y as I,f as o,c as w,z as D,k as s,a as J,A as u,r as Y,u as ee,v as te,d as W,t as Z,w as se}from"../chunks/index.69393c5a.js";import{p as ae}from"../chunks/stores.edf5b013.js";const re=""+new URL("../assets/github.1ea8d62e.svg",import.meta.url).href;function le(c){let e,a,n,l,i,d,r,t,v="Home",z,M,m,g,S="Sverdle",x,j,b,L,B,E,V=`<a href="https://github.com/sveltejs/kit" class="svelte-3dz6bu"><img src="${re}" alt="GitHub"/></a>`;return{c(){e=_("header"),a=_("nav"),n=A("svg"),l=A("path"),i=C(),d=_("ul"),r=_("li"),t=_("a"),t.textContent=v,M=C(),m=_("li"),g=_("a"),g.textContent=S,j=C(),b=A("svg"),L=A("path"),B=C(),E=_("div"),E.innerHTML=V,this.h()},l($){e=f($,"HEADER",{class:!0});var p=h(e);a=f(p,"NAV",{class:!0});var y=h(a);n=I(y,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var k=h(n);l=I(k,"path",{d:!0,class:!0}),h(l).forEach(o),k.forEach(o),i=w(y),d=f(y,"UL",{class:!0});var H=h(d);r=f(H,"LI",{"aria-current":!0,class:!0});var N=h(r);t=f(N,"A",{href:!0,class:!0,"data-svelte-h":!0}),D(t)!=="svelte-5a0zws"&&(t.textContent=v),N.forEach(o),M=w(H),m=f(H,"LI",{"aria-current":!0,class:!0});var R=h(m);g=f(R,"A",{href:!0,class:!0,"data-svelte-h":!0}),D(g)!=="svelte-1mtf8rh"&&(g.textContent=S),R.forEach(o),H.forEach(o),j=w(y),b=I(y,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var T=h(b);L=I(T,"path",{d:!0,class:!0}),h(L).forEach(o),T.forEach(o),y.forEach(o),B=w(p),E=f(p,"DIV",{class:!0,"data-svelte-h":!0}),D(E)!=="svelte-1gilmbv"&&(E.innerHTML=V),p.forEach(o),this.h()},h(){s(l,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),s(l,"class","svelte-3dz6bu"),s(n,"viewBox","0 0 2 3"),s(n,"aria-hidden","true"),s(n,"class","svelte-3dz6bu"),s(t,"href","/"),s(t,"class","svelte-3dz6bu"),s(r,"aria-current",z=c[0].url.pathname==="/"?"page":void 0),s(r,"class","svelte-3dz6bu"),s(g,"href","/sverdle"),s(g,"class","svelte-3dz6bu"),s(m,"aria-current",x=c[0].url.pathname.startsWith("/sverdle")?"page":void 0),s(m,"class","svelte-3dz6bu"),s(d,"class","svelte-3dz6bu"),s(L,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),s(L,"class","svelte-3dz6bu"),s(b,"viewBox","0 0 2 3"),s(b,"aria-hidden","true"),s(b,"class","svelte-3dz6bu"),s(a,"class","svelte-3dz6bu"),s(E,"class","corner svelte-3dz6bu"),s(e,"class","svelte-3dz6bu")},m($,p){J($,e,p),u(e,a),u(a,n),u(n,l),u(a,i),u(a,d),u(d,r),u(r,t),u(d,M),u(d,m),u(m,g),u(a,j),u(a,b),u(b,L),u(e,B),u(e,E)},p($,[p]){p&1&&z!==(z=$[0].url.pathname==="/"?"page":void 0)&&s(r,"aria-current",z),p&1&&x!==(x=$[0].url.pathname.startsWith("/sverdle")?"page":void 0)&&s(m,"aria-current",x)},i:U,o:U,d($){$&&o(e)}}}function ne(c,e,a){let n;return K(c,ae,l=>a(0,n=l)),[n]}class ue extends G{constructor(e){super(),F(this,e,ne,le,q,{})}}function ie(c){let e,a,n,l,i;a=new ue({});const d=c[1].default,r=O(d,c,c[0],null);return{c(){e=_("div"),Y(a.$$.fragment),n=C(),l=_("main"),r&&r.c(),this.h()},l(t){e=f(t,"DIV",{class:!0});var v=h(e);ee(a.$$.fragment,v),n=w(v),l=f(v,"MAIN",{class:!0});var z=h(l);r&&r.l(z),z.forEach(o),v.forEach(o),this.h()},h(){s(l,"class","svelte-195cvbj"),s(e,"class","app svelte-195cvbj")},m(t,v){J(t,e,v),te(a,e,null),u(e,n),u(e,l),r&&r.m(l,null),i=!0},p(t,[v]){r&&r.p&&(!i||v&1)&&P(r,d,t,t[0],i?X(d,t[0],v,null):Q(t[0]),null)},i(t){i||(W(a.$$.fragment,t),W(r,t),i=!0)},o(t){Z(a.$$.fragment,t),Z(r,t),i=!1},d(t){t&&o(e),se(a),r&&r.d(t)}}}function oe(c,e,a){let{$$slots:n={},$$scope:l}=e;return c.$$set=i=>{"$$scope"in i&&a(0,l=i.$$scope)},[l,n]}class he extends G{constructor(e){super(),F(this,e,oe,ie,q,{})}}export{he as component};