import{s as ie,n as le,c as de,d as ve,u as _e,g as fe,e as pe}from"../chunks/scheduler.ed73829c.js";import{S as ce,i as he,g as c,x as T,s as I,h,j as v,y as V,f as o,c as W,z,k as e,a as oe,A as s,r as me,u as ge,v as $e,d as ne,t as ue,w as qe}from"../chunks/index.974ab56c.js";import{p as Ce}from"../chunks/stores.bcf4cbc3.js";const xe=""+new URL("../assets/github.1ea8d62e.svg",import.meta.url).href;function Ee(d){let t,r,i,n,_,u,l,a,f="Home",y,N,$,q,J="Sverdle",M,R,C,x,K="Translate",B,U,E,L,O="words_book",D,Z,b,w,P="text_add_list",S,G,A,k,F,H,Q=`<a href="https://github.com/sveltejs/kit" class="svelte-1uhh5cq"><img src="${xe}" alt="GitHub"/></a>`;return{c(){t=c("header"),r=c("nav"),i=T("svg"),n=T("path"),_=I(),u=c("ul"),l=c("li"),a=c("a"),a.textContent=f,N=I(),$=c("li"),q=c("a"),q.textContent=J,R=I(),C=c("li"),x=c("a"),x.textContent=K,U=I(),E=c("li"),L=c("a"),L.textContent=O,Z=I(),b=c("li"),w=c("a"),w.textContent=P,G=I(),A=T("svg"),k=T("path"),F=I(),H=c("div"),H.innerHTML=Q,this.h()},l(m){t=h(m,"HEADER",{class:!0});var p=v(t);r=h(p,"NAV",{class:!0});var j=v(r);i=V(j,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var X=v(i);n=V(X,"path",{d:!0,class:!0}),v(n).forEach(o),X.forEach(o),_=W(j),u=h(j,"UL",{class:!0});var g=v(u);l=h(g,"LI",{"aria-current":!0,class:!0});var Y=v(l);a=h(Y,"A",{href:!0,class:!0,"data-svelte-h":!0}),z(a)!=="svelte-5a0zws"&&(a.textContent=f),Y.forEach(o),N=W(g),$=h(g,"LI",{"aria-current":!0,class:!0});var ee=v($);q=h(ee,"A",{href:!0,class:!0,"data-svelte-h":!0}),z(q)!=="svelte-1mtf8rh"&&(q.textContent=J),ee.forEach(o),R=W(g),C=h(g,"LI",{"aria-current":!0,class:!0});var te=v(C);x=h(te,"A",{href:!0,class:!0,"data-svelte-h":!0}),z(x)!=="svelte-exej5v"&&(x.textContent=K),te.forEach(o),U=W(g),E=h(g,"LI",{"aria-current":!0,class:!0});var ae=v(E);L=h(ae,"A",{href:!0,class:!0,"data-svelte-h":!0}),z(L)!=="svelte-czzhd3"&&(L.textContent=O),ae.forEach(o),Z=W(g),b=h(g,"LI",{"aria-current":!0,class:!0});var se=v(b);w=h(se,"A",{href:!0,class:!0,"data-svelte-h":!0}),z(w)!=="svelte-a9dlq7"&&(w.textContent=P),se.forEach(o),g.forEach(o),G=W(j),A=V(j,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var re=v(A);k=V(re,"path",{d:!0,class:!0}),v(k).forEach(o),re.forEach(o),j.forEach(o),F=W(p),H=h(p,"DIV",{class:!0,"data-svelte-h":!0}),z(H)!=="svelte-1ue6hiz"&&(H.innerHTML=Q),p.forEach(o),this.h()},h(){e(n,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),e(n,"class","svelte-1uhh5cq"),e(i,"viewBox","0 0 2 3"),e(i,"aria-hidden","true"),e(i,"class","svelte-1uhh5cq"),e(a,"href","/"),e(a,"class","svelte-1uhh5cq"),e(l,"aria-current",y=d[0].url.pathname==="/"?"page":void 0),e(l,"class","svelte-1uhh5cq"),e(q,"href","/sverdle"),e(q,"class","svelte-1uhh5cq"),e($,"aria-current",M=d[0].url.pathname.startsWith("/sverdle")?"page":void 0),e($,"class","svelte-1uhh5cq"),e(x,"href","/translate"),e(x,"class","svelte-1uhh5cq"),e(C,"aria-current",B=d[0].url.pathname.startsWith("/translate")?"page":void 0),e(C,"class","svelte-1uhh5cq"),e(L,"href","/words_book"),e(L,"class","svelte-1uhh5cq"),e(E,"aria-current",D=d[0].url.pathname.startsWith("/words_book")?"page":void 0),e(E,"class","svelte-1uhh5cq"),e(w,"href","/text_add_list"),e(w,"class","svelte-1uhh5cq"),e(b,"aria-current",S=d[0].url.pathname.startsWith("/text_add_list")?"page":void 0),e(b,"class","svelte-1uhh5cq"),e(u,"class","svelte-1uhh5cq"),e(k,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),e(k,"class","svelte-1uhh5cq"),e(A,"viewBox","0 0 2 3"),e(A,"aria-hidden","true"),e(A,"class","svelte-1uhh5cq"),e(r,"class","svelte-1uhh5cq"),e(H,"class","corner svelte-1uhh5cq"),e(t,"class","svelte-1uhh5cq")},m(m,p){oe(m,t,p),s(t,r),s(r,i),s(i,n),s(r,_),s(r,u),s(u,l),s(l,a),s(u,N),s(u,$),s($,q),s(u,R),s(u,C),s(C,x),s(u,U),s(u,E),s(E,L),s(u,Z),s(u,b),s(b,w),s(r,G),s(r,A),s(A,k),s(t,F),s(t,H)},p(m,[p]){p&1&&y!==(y=m[0].url.pathname==="/"?"page":void 0)&&e(l,"aria-current",y),p&1&&M!==(M=m[0].url.pathname.startsWith("/sverdle")?"page":void 0)&&e($,"aria-current",M),p&1&&B!==(B=m[0].url.pathname.startsWith("/translate")?"page":void 0)&&e(C,"aria-current",B),p&1&&D!==(D=m[0].url.pathname.startsWith("/words_book")?"page":void 0)&&e(E,"aria-current",D),p&1&&S!==(S=m[0].url.pathname.startsWith("/text_add_list")?"page":void 0)&&e(b,"aria-current",S)},i:le,o:le,d(m){m&&o(t)}}}function Le(d,t,r){let i;return de(d,Ce,n=>r(0,i=n)),[i]}class be extends ce{constructor(t){super(),he(this,t,Le,Ee,ie,{})}}function we(d){let t,r,i,n,_;r=new be({});const u=d[1].default,l=ve(u,d,d[0],null);return{c(){t=c("div"),me(r.$$.fragment),i=I(),n=c("main"),l&&l.c(),this.h()},l(a){t=h(a,"DIV",{class:!0});var f=v(t);ge(r.$$.fragment,f),i=W(f),n=h(f,"MAIN",{class:!0});var y=v(n);l&&l.l(y),y.forEach(o),f.forEach(o),this.h()},h(){e(n,"class","svelte-195cvbj"),e(t,"class","app svelte-195cvbj")},m(a,f){oe(a,t,f),$e(r,t,null),s(t,i),s(t,n),l&&l.m(n,null),_=!0},p(a,[f]){l&&l.p&&(!_||f&1)&&_e(l,u,a,a[0],_?pe(u,a[0],f,null):fe(a[0]),null)},i(a){_||(ne(r.$$.fragment,a),ne(l,a),_=!0)},o(a){ue(r.$$.fragment,a),ue(l,a),_=!1},d(a){a&&o(t),qe(r),l&&l.d(a)}}}function Ae(d,t,r){let{$$slots:i={},$$scope:n}=t;return d.$$set=_=>{"$$scope"in _&&r(0,n=_.$$scope)},[n,i]}class He extends ce{constructor(t){super(),he(this,t,Ae,we,ie,{})}}export{He as component};
