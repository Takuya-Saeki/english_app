import{s as me,k as fe,n as ce,r as Ee}from"../chunks/scheduler.ed73829c.js";import{S as we,i as be,s as d,g as r,m as C,B as Pe,f as o,c as h,h as p,z as ve,j as E,n as U,k as P,a as Q,A as e,C as W,D as oe,o as g}from"../chunks/index.974ab56c.js";function je(s){let j,n,f="<title>英語の長文教材を作ろう</title>",w,a,u,y,_,D,b,T="URLの記事を英訳",X,k,q,Y,Z,I,M,x,i,L,N=s[0].input_url+"",V,$,c,ee,z,te,O,S=s[0].text_english+"",J,ae,A,B=s[0].text_japanese+"",F,se,H,R=s[0].word_list+"",G,le,ne;return{c(){j=d(),n=r("head"),n.innerHTML=f,w=d(),a=r("body"),u=r("input"),y=d(),_=r("input"),D=d(),b=r("button"),b.textContent=T,X=d(),k=r("div"),q=r("p"),Y=C(s[1]),Z=d(),I=r("p"),M=C(s[2]),x=d(),i=r("div"),L=r("p"),V=C(N),$=d(),c=r("audio"),ee=C("Your browser does not support the audio element."),te=d(),O=r("p"),J=C(S),ae=d(),A=r("p"),F=C(B),se=d(),H=r("p"),G=C(R),this.h()},l(t){Pe("svelte-1bvvn5d",document.head).forEach(o),j=h(t),n=p(t,"HEAD",{"data-svelte-h":!0}),ve(n)!=="svelte-1olfqp6"&&(n.innerHTML=f),w=h(t),a=p(t,"BODY",{});var v=E(a);u=p(v,"INPUT",{type:!0,placeholder:!0,class:!0}),y=h(v),_=p(v,"INPUT",{type:!0,placeholder:!0,class:!0}),D=h(v),b=p(v,"BUTTON",{"data-svelte-h":!0}),ve(b)!=="svelte-10315tw"&&(b.textContent=T),X=h(v),k=p(v,"DIV",{});var K=E(k);q=p(K,"P",{});var re=E(q);Y=U(re,s[1]),re.forEach(o),Z=h(K),I=p(K,"P",{});var pe=E(I);M=U(pe,s[2]),pe.forEach(o),K.forEach(o),x=h(v),i=p(v,"DIV",{});var m=E(i);L=p(m,"P",{});var ue=E(L);V=U(ue,N),ue.forEach(o),$=h(m),c=p(m,"AUDIO",{src:!0});var ie=E(c);ee=U(ie,"Your browser does not support the audio element."),ie.forEach(o),te=h(m),O=p(m,"P",{});var _e=E(O);J=U(_e,S),_e.forEach(o),ae=h(m),A=p(m,"P",{});var de=E(A);F=U(de,B),de.forEach(o),se=h(m),H=p(m,"P",{});var he=E(H);G=U(he,R),he.forEach(o),m.forEach(o),v.forEach(o),this.h()},h(){document.title="英訳",P(u,"type","text"),P(u,"placeholder","英訳したいページのURLを入れてね"),P(u,"class","serch-text"),P(_,"type","text"),P(_,"placeholder","英訳したい日本語を入れてね"),P(_,"class","serch-text"),fe(c.src,z=s[3])||P(c,"src",z),c.controls=!0},m(t,l){Q(t,j,l),Q(t,n,l),Q(t,w,l),Q(t,a,l),e(a,u),W(u,s[1]),e(a,y),e(a,_),W(_,s[2]),e(a,D),e(a,b),e(a,X),e(a,k),e(k,q),e(q,Y),e(k,Z),e(k,I),e(I,M),e(a,x),e(a,i),e(i,L),e(L,V),e(i,$),e(i,c),e(c,ee),e(i,te),e(i,O),e(O,J),e(i,ae),e(i,A),e(A,F),e(i,se),e(i,H),e(H,G),le||(ne=[oe(u,"input",s[5]),oe(_,"input",s[6]),oe(b,"click",s[4])],le=!0)},p(t,[l]){l&2&&u.value!==t[1]&&W(u,t[1]),l&4&&_.value!==t[2]&&W(_,t[2]),l&2&&g(Y,t[1]),l&4&&g(M,t[2]),l&1&&N!==(N=t[0].input_url+"")&&g(V,N),l&8&&!fe(c.src,z=t[3])&&P(c,"src",z),l&1&&S!==(S=t[0].text_english+"")&&g(J,S),l&1&&B!==(B=t[0].text_japanese+"")&&g(F,B),l&1&&R!==(R=t[0].word_list+"")&&g(G,R)},i:ce,o:ce,d(t){t&&(o(j),o(n),o(w),o(a)),le=!1,Ee(ne)}}}function Te(s,j,n){let f={input_url:"",text_japanese:"",text_english:"",word_list:[]},w="",a="",u="";async function y(){const b="/api/create_textbook";n(0,f.input_url=w,f),n(0,f.text_japanese=a,f);try{const T=await fetch(b,{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(f)});if(!T.ok)throw new Error("Network response was not ok!");n(0,f=await T.json()),n(3,u="http://127.0.0.1:8000/api/audio")}catch(T){console.log("faild to request",T)}}function _(){w=this.value,n(1,w)}function D(){a=this.value,n(2,a)}return[f,w,a,u,y,_,D]}class Ue extends we{constructor(j){super(),be(this,j,Te,je,me,{})}}export{Ue as component};