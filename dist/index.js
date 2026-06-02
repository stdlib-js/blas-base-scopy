"use strict";var q=function(u,r){return function(){return r||u((r={exports:{}}).exports,r),r.exports}};var p=q(function(F,j){
var o=8;function d(u,r,n,s,e,v,f){var a,i,c,t;if(u<=0)return e;if(a=s,i=f,n===1&&v===1){if(c=u%o,c>0)for(t=0;t<c;t++)e[i]=r[a],a+=n,i+=v;if(u<o)return e;for(t=c;t<u;t+=o)e[i]=r[a],e[i+1]=r[a+1],e[i+2]=r[a+2],e[i+3]=r[a+3],e[i+4]=r[a+4],e[i+5]=r[a+5],e[i+6]=r[a+6],e[i+7]=r[a+7],a+=o,i+=o;return e}for(t=0;t<u;t++)e[i]=r[a],a+=n,i+=v;return e}j.exports=d
});var _=q(function(G,R){
var l=require('@stdlib/strided-base-stride2offset/dist'),g=p();function h(u,r,n,s,e){var v,f;return u<=0?s:(v=l(u,n),f=l(u,e),g(u,r,n,v,s,e,f))}R.exports=h
});var O=q(function(H,M){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=_(),w=p();k(E,"ndarray",w);M.exports=E
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=O(),m,b=A(z(__dirname,"./native.js"));B(b)?m=C:m=b;module.exports=m;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
