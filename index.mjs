// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";var t=8;function n(r,e,n,s,i,d,f){var o,a,u,m;if(r<=0)return i;if(o=s,a=f,1===n&&1===d){if((u=r%t)>0)for(m=0;m<u;m++)i[a]=e[o],o+=n,a+=d;if(r<t)return i;for(m=u;m<r;m+=t)i[a]=e[o],i[a+1]=e[o+1],i[a+2]=e[o+2],i[a+3]=e[o+3],i[a+4]=e[o+4],i[a+5]=e[o+5],i[a+6]=e[o+6],i[a+7]=e[o+7],o+=t,a+=t;return i}for(m=0;m<r;m++)i[a]=e[o],o+=n,a+=d;return i}function s(r,t,s,i,d){return r<=0?i:n(r,t,s,e(r,s),i,d,e(r,d))}r(s,"ndarray",n);export{s as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
