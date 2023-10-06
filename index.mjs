// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";function n(r,n,e,f,t){var i,o,u,a;if(r<=0)return f;if(1===e&&1===t){if((u=r%8)>0)for(a=0;a<u;a++)f[a]=n[a];if(r<8)return f;for(a=u;a<r;a+=8)f[a]=n[a],f[a+1]=n[a+1],f[a+2]=n[a+2],f[a+3]=n[a+3],f[a+4]=n[a+4],f[a+5]=n[a+5],f[a+6]=n[a+6],f[a+7]=n[a+7];return f}for(i=e<0?(1-r)*e:0,o=t<0?(1-r)*t:0,a=0;a<r;a++)f[o]=n[i],i+=e,o+=t;return f}function e(r,n,e,f,t,i,o){var u,a,d,s;if(r<=0)return t;if(u=f,a=o,1===e&&1===i){if((d=r%8)>0)for(s=0;s<d;s++)t[a]=n[u],u+=e,a+=i;if(r<8)return t;for(s=d;s<r;s+=8)t[a]=n[u],t[a+1]=n[u+1],t[a+2]=n[u+2],t[a+3]=n[u+3],t[a+4]=n[u+4],t[a+5]=n[u+5],t[a+6]=n[u+6],t[a+7]=n[u+7],u+=8,a+=8;return t}for(s=0;s<r;s++)t[a]=n[u],u+=e,a+=i;return t}r(n,"ndarray",e);export{n as default,e as ndarray};
//# sourceMappingURL=index.mjs.map