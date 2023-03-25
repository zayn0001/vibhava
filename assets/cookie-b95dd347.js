function w(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var y=v,S=m,d=decodeURIComponent,l=encodeURIComponent,u=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function v(t,o){if(typeof t!="string")throw new TypeError("argument str must be a string");for(var n={},e=o||{},a=t.split(";"),s=e.decode||d,r=0;r<a.length;r++){var i=a[r],p=i.indexOf("=");if(!(p<0)){var c=i.substring(0,p).trim();if(n[c]==null){var f=i.substring(p+1,i.length).trim();f[0]==='"'&&(f=f.slice(1,-1)),n[c]=h(f,s)}}}return n}function m(t,o,n){var e=n||{},a=e.encode||l;if(typeof a!="function")throw new TypeError("option encode is invalid");if(!u.test(t))throw new TypeError("argument name is invalid");var s=a(o);if(s&&!u.test(s))throw new TypeError("argument val is invalid");var r=t+"="+s;if(e.maxAge!=null){var i=e.maxAge-0;if(isNaN(i)||!isFinite(i))throw new TypeError("option maxAge is invalid");r+="; Max-Age="+Math.floor(i)}if(e.domain){if(!u.test(e.domain))throw new TypeError("option domain is invalid");r+="; Domain="+e.domain}if(e.path){if(!u.test(e.path))throw new TypeError("option path is invalid");r+="; Path="+e.path}if(e.expires){if(typeof e.expires.toUTCString!="function")throw new TypeError("option expires is invalid");r+="; Expires="+e.expires.toUTCString()}if(e.httpOnly&&(r+="; HttpOnly"),e.secure&&(r+="; Secure"),e.sameSite){var p=typeof e.sameSite=="string"?e.sameSite.toLowerCase():e.sameSite;switch(p){case!0:r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"strict":r+="; SameSite=Strict";break;case"none":r+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return r}function h(t,o){try{return o(t)}catch{return t}}export{w as g,y as p,S as s};