import{j as f,a as e,A as x,F as A,C as D,b as J,c as M,T as R,d as W,B as q}from"./@mui-b28be1df.js";import{r as o}from"./react-350bdb9d.js";import{c as P}from"./react-dom-94ea3d16.js";import"./firebase-bc03635d.js";import{i as U,g as z,a as K,b as m,c as b,o as I,s as B}from"./@firebase-d04186ae.js";import{a as G,b as V}from"./react-router-26ec1537.js";import{B as X}from"./react-router-dom-afba2f4c.js";import{C as _}from"./react-cookie-e5ea0301.js";import"./react-is-1aacdabe.js";import"./@babel-5d790daf.js";import"./clsx-1229b3e0.js";import"./@emotion-391e7349.js";import"./hoist-non-react-statics-691fe6cb.js";import"./stylis-581c9ed0.js";import"./react-transition-group-6db5c6ce.js";import"./cookie-b95dd347.js";import"./scheduler-04ce0582.js";import"./idb-f62f60ab.js";import"./tslib-4b8363ab.js";import"./@remix-run-b63dde2e.js";import"./universal-cookie-0a366c1a.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const Y={apiKey:"AIzaSyD5j0ty3niJ2Cplj-DIh5XHS7PT6WoUke0",authDomain:"vibhava-cfb29.firebaseapp.com",projectId:"vibhava-cfb29",storageBucket:"vibhava-cfb29.appspot.com",messagingSenderId:"113566592625",appId:"1:113566592625:web:38a5a3e02a03bbd3a575d0",measurementId:"G-BQ4J5TTPLF",databaseURL:"https://vibhava-cfb29-default-rtdb.asia-southeast1.firebasedatabase.app"},O=U(Y);z(O);K(O);m(O);function Z(g){const[a,n]=o.useState([]),s=window.location.hash.split("/")[1];o.useState(["sdFFkIIsNN6DD83","asefMMfd89mel8","amfo38rcIIsdfm9","liuSSfax38d6","sldfm823HHcr23j","mxieAAwr8m34y53","jaytvLLu33v6"]);const[t,r]=o.useState(""),[l,h]=o.useState(""),d=10,[p,y]=o.useState(),[N,C]=o.useState(),[v,F]=o.useState(0),[w,L]=o.useState({Question:"",Answer:""}),u=i=>JSON.parse(localStorage.getItem(i));o.useEffect(()=>{const i=u(s);if(i&&L(i),!u(s)){const c=Math.floor(Math.random()*d);L(S=>({...S,Question:c})),console.log(c,"ran"),window.location.reload(!1)}console.log(s),E(),H(u("login").Name)},[]),o.useEffect(()=>{localStorage.setItem(s,JSON.stringify(w)),(!w.Question||!w.Answer)&&localStorage.setItem(s,JSON.stringify(w)),console.log(localStorage)},[w]),o.useEffect(()=>{u(s).Answer&&(r(u(s).Answer),j());let i=a[u(s).Question];i&&h(i.question)},[a]);const H=async i=>{const c=m(),S=b(c,"users/"+i);I(S,T=>{const k=T.val();k&&F(k.score)})},E=async()=>{const i=m(),c=b(i,"questions/");I(c,S=>{const T=S.val();n(T)})},Q=i=>{const c=m();B(b(c,"users/"+i),{score:v+1})},j=()=>{y(!0),C(f("div",{style:{marginTop:20},children:[e(x,{severity:"success",children:"That's Right"}),e(x,{style:{marginTop:20},severity:"info",children:"Clue to next answer"})]}))};return f(A,{children:[e(D,{sx:{maxWidth:500,maxHeight:500},children:e(J,{children:f(M,{children:[e(R,{gutterBottom:!0,variant:"h5",component:"div",children:"?"}),e(R,{variant:"h6",color:"text.secondary",children:l})]})})}),f("div",{style:{marginTop:20,display:"flex",justifyContent:"space-between"},children:[e(W,{value:t,disabled:p,style:{maxWidth:500,minWidth:200,width:"80%",borderRadius:"5px",background:"white"},onChange:i=>r(i.target.value),variant:"outlined"}),e(q,{disabled:p,variant:"outlined",onClick:i=>{a[u(s).Question].answer===t.toLowerCase()?(j(),L(c=>({...c,Answer:t})),Q(u("login").Name)):(y(!1),C(e("div",{style:{marginTop:20},children:e(x,{severity:"error",children:"Wrong Answer"})})))},style:{backgroundColor:"white",minWidth:40,minHeight:40,maxWidth:40,marginLeft:"auto",marginTop:"auto",marginBottom:"auto",maxHeight:40},children:"✓"})]}),N]})}function $(){const[g,a]=o.useState(""),[n,s]=o.useState({}),[t,r]=o.useState();o.useEffect(()=>{localStorage.setItem("login",JSON.stringify(n)),(!n.Name||!n.SignedIn)&&localStorage.setItem("login",JSON.stringify(n)),console.log(localStorage)},[n]);const l=async d=>{const p=m(),y=b(p,"users/"+d);I(y,N=>{N.val()?(console.log("user exists"),r(e("div",{style:{marginTop:20},children:e(x,{severity:"error",children:"User already exists. Try another"})}))):(s(v=>({...v,Name:g})),s(v=>({...v,SignedIn:!0})),window.location.reload(!1))})};return f(A,{children:[f("div",{style:{marginTop:20,display:"flex",justifyContent:"space-between"},children:[e(W,{label:"Name",style:{maxWidth:500,minWidth:200,width:"80%",borderRadius:"5px",background:"white"},onChange:d=>a(d.target.value),variant:"filled"}),e(q,{variant:"outlined",onClick:()=>{l(g)},style:{minWidth:40,minHeight:40,maxWidth:40,marginLeft:"auto",borderRadius:"5px",background:"white",marginTop:"auto",marginBottom:"auto",maxHeight:40},children:"✓"})]}),t]})}function ee(){return e(A,{children:f("div",{id:"error",children:[e("div",{id:"box"}),e("h3",{children:"ERROR 404"}),f("p",{children:["Things are a little ",e("span",{children:"unstable"})," here."]}),e("p",{children:"Congrats on finding this btw."})]})})}function te(){const[g,a]=o.useState({}),n=()=>JSON.parse(localStorage.getItem("login")),s=window.location.hash.split("/")[1],[t,r]=o.useState(["sdFFkIIsNN6DD83","asefMMfd89mel8","amfo38rcIIsdfm9","liuSSfax38d6","sldfm823HHcr23j","mxieAAwr8m34y53","jaytvLLu33v6"]);if(console.log(s),!t.includes(s))return e(ee,{});function l(h){const d=m();B(b(d,"users/"+h),{score:0})}if(o.useEffect(()=>{if(n()){const h=m(),d=b(h,"users/"+n().Name);I(d,p=>{const y=p.val();n().Name&&!y&&l(n().Name)})}},[g]),n()==null||Object.keys(n()).length==0)return e($,{});if(n().SignedIn)return e(G,{children:e(V,{path:"/vibhava",element:e(Z,{})})})}P.createRoot(document.getElementById("root")).render(e(A,{children:e(X,{children:e(_,{children:e(te,{})})})}));