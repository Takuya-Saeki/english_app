import{s as L,n as E,r as N}from"../chunks/scheduler.ed73829c.js";import{S as P,i as R,s as v,g as _,m as b,B as g,f as o,c as w,h as f,z as B,j as T,n as D,k as y,a as d,C as U,A as j,D as q,o as I}from"../chunks/index.dd39e2fe.js";function S(i){let u,t,l,s,h="URLを英訳",p,r,a,c,m,C;return{c(){u=v(),t=_("input"),l=v(),s=_("button"),s.textContent=h,p=v(),r=_("div"),a=_("p"),c=b(i[1]),this.h()},l(e){g("svelte-6rdflx",document.head).forEach(o),u=w(e),t=f(e,"INPUT",{type:!0,placeholder:!0,class:!0}),l=w(e),s=f(e,"BUTTON",{"data-svelte-h":!0}),B(s)!=="svelte-60j7s3"&&(s.textContent=h),p=w(e),r=f(e,"DIV",{});var k=T(r);a=f(k,"P",{});var x=T(a);c=D(x,i[1]),x.forEach(o),k.forEach(o),this.h()},h(){document.title="サンプル：大文字に変換",y(t,"type","text"),y(t,"placeholder","英訳したいページのURLを入れてね"),y(t,"class","serch-text")},m(e,n){d(e,u,n),d(e,t,n),U(t,i[0]),d(e,l,n),d(e,s,n),d(e,p,n),d(e,r,n),j(r,a),j(a,c),m||(C=[q(t,"input",i[3]),q(s,"click",i[2])],m=!0)},p(e,[n]){n&1&&t.value!==e[0]&&U(t,e[0]),n&2&&I(c,e[1])},i:E,o:E,d(e){e&&(o(u),o(t),o(l),o(s),o(p),o(r)),m=!1,N(C)}}}function $(i,u,t){let l="",s="";async function h(){const r="/demo_english_text";try{const a=await fetch(r,{headers:{"Content-Type":"application/json"},method:"GET"});if(!a.ok)throw new Error("Network response was not ok!");const c=await a.json();t(1,s=c.message)}catch(a){console.log("faild to request",a)}return s}function p(){l=this.value,t(0,l)}return[l,s,h,p]}class G extends P{constructor(u){super(),R(this,u,$,S,L,{})}}export{G as component};
