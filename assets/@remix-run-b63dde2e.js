/**
 * @remix-run/router v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}var g;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(g||(g={}));const I="popstate";function ee(e){e===void 0&&(e={});function t(r,a){let{pathname:i,search:s,hash:l}=r.location;return S("",{pathname:i,search:s,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:L(a)}return V(t,n,null,e)}function R(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function $(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function H(){return Math.random().toString(36).substr(2,8)}function U(e,t){return{usr:e.state,key:e.key,idx:t}}function S(e,t,n,r){return n===void 0&&(n=null),v({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?O(t):t,{state:n,key:t&&t.key||r||H()})}function L(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function O(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function V(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,s=a.history,l=g.Pop,o=null,u=h();u==null&&(u=0,s.replaceState(v({},s.state,{idx:u}),""));function h(){return(s.state||{idx:null}).idx}function m(){l=g.Pop;let c=h(),f=c==null?null:c-u;u=c,o&&o({action:l,location:p.location,delta:f})}function x(c,f){l=g.Push;let d=S(p.location,c,f);n&&n(d,c),u=h()+1;let P=U(d,u),y=p.createHref(d);try{s.pushState(P,"",y)}catch{a.location.assign(y)}i&&o&&o({action:l,location:p.location,delta:1})}function C(c,f){l=g.Replace;let d=S(p.location,c,f);n&&n(d,c),u=h();let P=U(d,u),y=p.createHref(d);s.replaceState(P,"",y),i&&o&&o({action:l,location:p.location,delta:0})}function b(c){let f=a.location.origin!=="null"?a.location.origin:a.location.href,d=typeof c=="string"?c:L(c);return R(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let p={get action(){return l},get location(){return e(a,s)},listen(c){if(o)throw new Error("A history only accepts one active listener");return a.addEventListener(I,m),o=c,()=>{a.removeEventListener(I,m),o=null}},createHref(c){return t(a,c)},createURL:b,encodeLocation(c){let f=b(c);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:x,replace:C,go(c){return s.go(c)}};return p}var B;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(B||(B={}));function te(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?O(t):t,a=X(r.pathname||"/",n);if(a==null)return null;let i=j(e);A(i);let s=null;for(let l=0;s==null&&l<i.length;++l)s=K(i[l],J(a));return s}function j(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,s,l)=>{let o={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(R(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let u=w([r,o.relativePath]),h=n.concat(o);i.children&&i.children.length>0&&(R(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),j(i.children,t,h,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:z(u,i.index),routesMeta:h})};return e.forEach((i,s)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))a(i,s);else for(let o of W(i.path))a(i,s,o)}),t}function W(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let s=W(r.join("/")),l=[];return l.push(...s.map(o=>o===""?i:[i,o].join("/"))),a&&l.push(...s),l.map(o=>e.startsWith("/")&&o===""?"/":o)}function A(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:G(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const T=/^:\w+$/,k=3,M=2,_=1,D=10,q=-2,E=e=>e==="*";function z(e,t){let n=e.split("/"),r=n.length;return n.some(E)&&(r+=q),t&&(r+=M),n.filter(a=>!E(a)).reduce((a,i)=>a+(T.test(i)?k:i===""?_:D),r)}function G(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function K(e,t){let{routesMeta:n}=e,r={},a="/",i=[];for(let s=0;s<n.length;++s){let l=n[s],o=s===n.length-1,u=a==="/"?t:t.slice(a.length)||"/",h=N({path:l.relativePath,caseSensitive:l.caseSensitive,end:o},u);if(!h)return null;Object.assign(r,h.params);let m=l.route;i.push({params:r,pathname:w([a,h.pathname]),pathnameBase:Y(w([a,h.pathnameBase])),route:m}),h.pathnameBase!=="/"&&(a=w([a,h.pathnameBase]))}return i}function N(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=F(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],s=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((u,h,m)=>{if(h==="*"){let x=l[m]||"";s=i.slice(0,i.length-x.length).replace(/(.)\/+$/,"$1")}return u[h]=Q(l[m]||"",h),u},{}),pathname:i,pathnameBase:s,pattern:e}}function F(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),$(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function J(e){try{return decodeURI(e)}catch(t){return $(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Q(e,t){try{return decodeURIComponent(e)}catch(n){return $(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function X(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const w=e=>e.join("/").replace(/\/\/+/g,"/"),Y=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");function ne(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}export{g as A,ne as a,ee as c,R as i,w as j,te as m,O as p,X as s};