// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-integer@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-int32-max@esm/index.mjs";function i(i,o){return t(i)||t(o)||i===r||o===r||i===n||o===n?NaN:s(i)&&s(o)?(i<0&&(i=-i),o<0&&(o=-o),i<=e&&o<=e?function(t,s){var r,n=0;if(0===t)return s;if(0===s)return t;for(;0==(1&t)&&0==(1&s);)t>>>=1,s>>>=1,n+=1;for(;0==(1&t);)t>>>=1;for(;s;){for(;0==(1&s);)s>>>=1;t>s&&(r=s,s=t,t=r),s-=t}return t<<n}(i,o):function(t,s){var r,n=1;if(0===t)return s;if(0===s)return t;for(;t%2==0&&s%2==0;)t/=2,s/=2,n*=2;for(;t%2==0;)t/=2;for(;s;){for(;s%2==0;)s/=2;t>s&&(r=s,s=t,t=r),s-=t}return n*t}(i,o)):NaN}export{i as default};
//# sourceMappingURL=index.mjs.map