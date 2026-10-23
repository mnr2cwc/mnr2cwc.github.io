(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ua(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const fe={},ui=[],Vt=()=>{},su=()=>!1,Mr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Lr=t=>t.startsWith("onUpdate:"),Se=Object.assign,da=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},rh=Object.prototype.hasOwnProperty,se=(t,e)=>rh.call(t,e),K=Array.isArray,di=t=>gs(t)==="[object Map]",Fr=t=>gs(t)==="[object Set]",pl=t=>gs(t)==="[object Date]",Y=t=>typeof t=="function",me=t=>typeof t=="string",Ut=t=>typeof t=="symbol",ae=t=>t!==null&&typeof t=="object",ru=t=>(ae(t)||Y(t))&&Y(t.then)&&Y(t.catch),ou=Object.prototype.toString,gs=t=>ou.call(t),oh=t=>gs(t).slice(8,-1),au=t=>gs(t)==="[object Object]",fa=t=>me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Bi=ua(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ur=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},ah=/-\w/g,bt=Ur(t=>t.replace(ah,e=>e.slice(1).toUpperCase())),lh=/\B([A-Z])/g,ii=Ur(t=>t.replace(lh,"-$1").toLowerCase()),lu=Ur(t=>t.charAt(0).toUpperCase()+t.slice(1)),ho=Ur(t=>t?`on${lu(t)}`:""),Ot=(t,e)=>!Object.is(t,e),Hs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},cu=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},$r=t=>{const e=parseFloat(t);return isNaN(e)?t:e},ch=t=>{const e=me(t)?Number(t):NaN;return isNaN(e)?t:e};let ml;const Br=()=>ml||(ml=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ha(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=me(i)?hh(i):ha(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(me(t)||ae(t))return t}const uh=/;(?![^(]*\))/g,dh=/:([^]+)/,fh=/\/\*[^]*?\*\//g;function hh(t){const e={};return t.replace(fh,"").split(uh).forEach(n=>{if(n){const i=n.split(dh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function mt(t){let e="";if(me(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const i=mt(t[n]);i&&(e+=i+" ")}else if(ae(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ph="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",mh=ua(ph);function uu(t){return!!t||t===""}function gh(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=vs(t[i],e[i]);return n}function vs(t,e){if(t===e)return!0;let n=pl(t),i=pl(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Ut(t),i=Ut(e),n||i)return t===e;if(n=K(t),i=K(e),n||i)return n&&i?gh(t,e):!1;if(n=ae(t),i=ae(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!vs(t[o],e[o]))return!1}}return String(t)===String(e)}function vh(t,e){return t.findIndex(n=>vs(n,e))}const du=t=>!!(t&&t.__v_isRef===!0),Ie=t=>me(t)?t:t==null?"":K(t)||ae(t)&&(t.toString===ou||!Y(t.toString))?du(t)?Ie(t.value):JSON.stringify(t,fu,2):String(t),fu=(t,e)=>du(e)?fu(t,e.value):di(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[po(i,r)+" =>"]=s,n),{})}:Fr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>po(n))}:Ut(e)?po(e):ae(e)&&!K(e)&&!au(e)?String(e):e,po=(t,e="")=>{var n;return Ut(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Re;class yh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Re&&(Re.active?(this.parent=Re,this.index=(Re.scopes||(Re.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Re;try{return Re=this,e()}finally{Re=n}}}on(){++this._on===1&&(this.prevScope=Re,Re=this)}off(){if(this._on>0&&--this._on===0){if(Re===this)Re=this.prevScope;else{let e=Re;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function bh(){return Re}let pe;const mo=new WeakSet;class hu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Re&&(Re.active?Re.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,mo.has(this)&&(mo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||mu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,gl(this),gu(this);const e=pe,n=_t;pe=this,_t=!0;try{return this.fn()}finally{vu(this),pe=e,_t=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ga(e);this.deps=this.depsTail=void 0,gl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?mo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Mo(this)&&this.run()}get dirty(){return Mo(this)}}let pu=0,ji,Hi;function mu(t,e=!1){if(t.flags|=8,e){t.next=Hi,Hi=t;return}t.next=ji,ji=t}function pa(){pu++}function ma(){if(--pu>0)return;if(Hi){let e=Hi;for(Hi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ji;){let e=ji;for(ji=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function gu(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function vu(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),ga(i),_h(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function Mo(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(yu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function yu(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Zi)||(t.globalVersion=Zi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Mo(t))))return;t.flags|=2;const e=t.dep,n=pe,i=_t;pe=t,_t=!0;try{gu(t);const s=t.fn(t._value);(e.version===0||Ot(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{pe=n,_t=i,vu(t),t.flags&=-3}}function ga(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)ga(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function _h(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let _t=!0;const bu=[];function sn(){bu.push(_t),_t=!1}function rn(){const t=bu.pop();_t=t===void 0?!0:t}function gl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=pe;pe=void 0;try{e()}finally{pe=n}}}let Zi=0;class wh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class va{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!pe||!_t||pe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==pe)n=this.activeLink=new wh(pe,this),pe.deps?(n.prevDep=pe.depsTail,pe.depsTail.nextDep=n,pe.depsTail=n):pe.deps=pe.depsTail=n,_u(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=pe.depsTail,n.nextDep=void 0,pe.depsTail.nextDep=n,pe.depsTail=n,pe.deps===n&&(pe.deps=i)}return n}trigger(e){this.version++,Zi++,this.notify(e)}notify(e){pa();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ma()}}}function _u(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)_u(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Lo=new WeakMap,Hn=Symbol(""),Fo=Symbol(""),Qi=Symbol("");function Le(t,e,n){if(_t&&pe){let i=Lo.get(t);i||Lo.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new va),s.map=i,s.key=n),s.track()}}function Kt(t,e,n,i,s,r){const o=Lo.get(t);if(!o){Zi++;return}const a=l=>{l&&l.trigger()};if(pa(),e==="clear")o.forEach(a);else{const l=K(t),c=l&&fa(n);if(l&&n==="length"){const u=Number(i);o.forEach((d,m)=>{(m==="length"||m===Qi||!Ut(m)&&m>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Qi)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Hn)),di(t)&&a(o.get(Fo)));break;case"delete":l||(a(o.get(Hn)),di(t)&&a(o.get(Fo)));break;case"set":di(t)&&a(o.get(Hn));break}}ma()}function ri(t){const e=ie(t);return e===t?e:(Le(e,"iterate",Qi),dt(t)?e:e.map(It))}function jr(t){return Le(t=ie(t),"iterate",Qi),t}function Rt(t,e){return on(t)?vi(Wn(t)?It(e):e):It(e)}const Eh={__proto__:null,[Symbol.iterator](){return go(this,Symbol.iterator,t=>Rt(this,t))},concat(...t){return ri(this).concat(...t.map(e=>K(e)?ri(e):e))},entries(){return go(this,"entries",t=>(t[1]=Rt(this,t[1]),t))},every(t,e){return jt(this,"every",t,e,void 0,arguments)},filter(t,e){return jt(this,"filter",t,e,n=>n.map(i=>Rt(this,i)),arguments)},find(t,e){return jt(this,"find",t,e,n=>Rt(this,n),arguments)},findIndex(t,e){return jt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return jt(this,"findLast",t,e,n=>Rt(this,n),arguments)},findLastIndex(t,e){return jt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return jt(this,"forEach",t,e,void 0,arguments)},includes(...t){return vo(this,"includes",t)},indexOf(...t){return vo(this,"indexOf",t)},join(t){return ri(this).join(t)},lastIndexOf(...t){return vo(this,"lastIndexOf",t)},map(t,e){return jt(this,"map",t,e,void 0,arguments)},pop(){return xi(this,"pop")},push(...t){return xi(this,"push",t)},reduce(t,...e){return vl(this,"reduce",t,e)},reduceRight(t,...e){return vl(this,"reduceRight",t,e)},shift(){return xi(this,"shift")},some(t,e){return jt(this,"some",t,e,void 0,arguments)},splice(...t){return xi(this,"splice",t)},toReversed(){return ri(this).toReversed()},toSorted(t){return ri(this).toSorted(t)},toSpliced(...t){return ri(this).toSpliced(...t)},unshift(...t){return xi(this,"unshift",t)},values(){return go(this,"values",t=>Rt(this,t))}};function go(t,e,n){const i=jr(t),s=i[e]();return i!==t&&!dt(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const Ih=Array.prototype;function jt(t,e,n,i,s,r){const o=jr(t),a=o!==t&&!dt(t),l=o[e];if(l!==Ih[e]){const d=l.apply(t,r);return a?It(d):d}let c=n;o!==t&&(a?c=function(d,m){return n.call(this,Rt(t,d),m,t)}:n.length>2&&(c=function(d,m){return n.call(this,d,m,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function vl(t,e,n,i){const s=jr(t),r=s!==t&&!dt(t);let o=n,a=!1;s!==t&&(r?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=Rt(t,c)),n.call(this,c,Rt(t,u),d,t)}):n.length>3&&(o=function(c,u,d){return n.call(this,c,u,d,t)}));const l=s[e](o,...i);return a?Rt(t,l):l}function vo(t,e,n){const i=ie(t);Le(i,"iterate",Qi);const s=i[e](...n);return(s===-1||s===!1)&&_a(n[0])?(n[0]=ie(n[0]),i[e](...n)):s}function xi(t,e,n=[]){sn(),pa();const i=ie(t)[e].apply(t,n);return ma(),rn(),i}const Th=ua("__proto__,__v_isRef,__isVue"),wu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ut));function Ah(t){Ut(t)||(t=String(t));const e=ie(this);return Le(e,"has",t),e.hasOwnProperty(t)}class Eu{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?Vh:Su:r?Au:Tu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=K(e);if(!s){let l;if(o&&(l=Eh[n]))return l;if(n==="hasOwnProperty")return Ah}const a=Reflect.get(e,n,$e(e)?e:i);if((Ut(n)?wu.has(n):Th(n))||(s||Le(e,"get",n),r))return a;if($e(a)){const l=o&&fa(n)?a:a.value;return s&&ae(l)?$o(l):l}return ae(a)?s?$o(a):Hr(a):a}}class Iu extends Eu{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];const o=K(e)&&fa(n);if(!this._isShallow){const c=on(r);if(!dt(i)&&!on(i)&&(r=ie(r),i=ie(i)),!o&&$e(r)&&!$e(i))return c||(r.value=i),!0}const a=o?Number(n)<e.length:se(e,n),l=Reflect.set(e,n,i,$e(e)?e:s);return e===ie(s)&&(a?Ot(i,r)&&Kt(e,"set",n,i):Kt(e,"add",n,i)),l}deleteProperty(e,n){const i=se(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&Kt(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Ut(n)||!wu.has(n))&&Le(e,"has",n),i}ownKeys(e){return Le(e,"iterate",K(e)?"length":Hn),Reflect.ownKeys(e)}}class Sh extends Eu{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ph=new Iu,kh=new Sh,Ch=new Iu(!0);const Uo=t=>t,Vs=t=>Reflect.getPrototypeOf(t);function xh(t,e,n){return function(...i){const s=this.__v_raw,r=ie(s),o=di(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?Uo:e?vi:It;return!e&&Le(r,"iterate",l?Fo:Hn),Se(Object.create(c),{next(){const{value:d,done:m}=c.next();return m?{value:d,done:m}:{value:a?[u(d[0]),u(d[1])]:u(d),done:m}}})}}function Ms(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Rh(t,e){const n={get(s){const r=this.__v_raw,o=ie(r),a=ie(s);t||(Ot(s,a)&&Le(o,"get",s),Le(o,"get",a));const{has:l}=Vs(o),c=e?Uo:t?vi:It;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&Le(ie(s),"iterate",Hn),s.size},has(s){const r=this.__v_raw,o=ie(r),a=ie(s);return t||(Ot(s,a)&&Le(o,"has",s),Le(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ie(a),c=e?Uo:t?vi:It;return!t&&Le(l,"iterate",Hn),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return Se(n,t?{add:Ms("add"),set:Ms("set"),delete:Ms("delete"),clear:Ms("clear")}:{add(s){const r=ie(this),o=Vs(r),a=ie(s),l=!e&&!dt(s)&&!on(s)?a:s;return o.has.call(r,l)||Ot(s,l)&&o.has.call(r,s)||Ot(a,l)&&o.has.call(r,a)||(r.add(l),Kt(r,"add",l,l)),this},set(s,r){!e&&!dt(r)&&!on(r)&&(r=ie(r));const o=ie(this),{has:a,get:l}=Vs(o);let c=a.call(o,s);c||(s=ie(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Ot(r,u)&&Kt(o,"set",s,r):Kt(o,"add",s,r),this},delete(s){const r=ie(this),{has:o,get:a}=Vs(r);let l=o.call(r,s);l||(s=ie(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Kt(r,"delete",s,void 0),c},clear(){const s=ie(this),r=s.size!==0,o=s.clear();return r&&Kt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=xh(s,t,e)}),n}function ya(t,e){const n=Rh(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(se(n,s)&&s in i?n:i,s,r)}const Nh={get:ya(!1,!1)},Dh={get:ya(!1,!0)},Oh={get:ya(!0,!1)};const Tu=new WeakMap,Au=new WeakMap,Su=new WeakMap,Vh=new WeakMap;function Mh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Hr(t){return on(t)?t:ba(t,!1,Ph,Nh,Tu)}function Lh(t){return ba(t,!1,Ch,Dh,Au)}function $o(t){return ba(t,!0,kh,Oh,Su)}function ba(t,e,n,i,s){if(!ae(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const r=s.get(t);if(r)return r;const o=Mh(oh(t));if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function Wn(t){return on(t)?Wn(t.__v_raw):!!(t&&t.__v_isReactive)}function on(t){return!!(t&&t.__v_isReadonly)}function dt(t){return!!(t&&t.__v_isShallow)}function _a(t){return t?!!t.__v_raw:!1}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function Fh(t){return!se(t,"__v_skip")&&Object.isExtensible(t)&&cu(t,"__v_skip",!0),t}const It=t=>ae(t)?Hr(t):t,vi=t=>ae(t)?$o(t):t;function $e(t){return t?t.__v_isRef===!0:!1}function re(t){return Uh(t,!1)}function Uh(t,e){return $e(t)?t:new $h(t,e)}class $h{constructor(e,n){this.dep=new va,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ie(e),this._value=n?e:It(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||dt(e)||on(e);e=i?e:ie(e),Ot(e,n)&&(this._rawValue=e,this._value=i?e:It(e),this.dep.trigger())}}function H(t){return $e(t)?t.value:t}const Bh={get:(t,e,n)=>e==="__v_raw"?t:H(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return $e(s)&&!$e(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function Pu(t){return Wn(t)?t:new Proxy(t,Bh)}class jh{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new va(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&pe!==this)return mu(this,!0),!0}get value(){const e=this.dep.track();return yu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Hh(t,e,n=!1){let i,s;return Y(t)?i=t:(i=t.get,s=t.set),new jh(i,s,n)}const Ls={},ir=new WeakMap;let Vn;function Wh(t,e=!1,n=Vn){if(n){let i=ir.get(n);i||ir.set(n,i=[]),i.push(t)}}function zh(t,e,n=fe){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=U=>s?U:dt(U)||s===!1||s===0?Gt(U,1):Gt(U);let u,d,m,E,x=!1,R=!1;if($e(t)?(d=()=>t.value,x=dt(t)):Wn(t)?(d=()=>c(t),x=!0):K(t)?(R=!0,x=t.some(U=>Wn(U)||dt(U)),d=()=>t.map(U=>{if($e(U))return U.value;if(Wn(U))return c(U);if(Y(U))return l?l(U,2):U()})):Y(t)?e?d=l?()=>l(t,2):t:d=()=>{if(m){sn();try{m()}finally{rn()}}const U=Vn;Vn=u;try{return l?l(t,3,[E]):t(E)}finally{Vn=U}}:d=Vt,e&&s){const U=d,Z=s===!0?1/0:s;d=()=>Gt(U(),Z)}const D=bh(),S=()=>{u.stop(),D&&D.active&&da(D.effects,u)};if(r&&e){const U=e;e=(...Z)=>{const te=U(...Z);return S(),te}}let N=R?new Array(t.length).fill(Ls):Ls;const X=U=>{if(!(!(u.flags&1)||!u.dirty&&!U))if(e){const Z=u.run();if(U||s||x||(R?Z.some((te,y)=>Ot(te,N[y])):Ot(Z,N))){m&&m();const te=Vn;Vn=u;try{const y=[Z,N===Ls?void 0:R&&N[0]===Ls?[]:N,E];N=Z,l?l(e,3,y):e(...y)}finally{Vn=te}}}else u.run()};return a&&a(X),u=new hu(d),u.scheduler=o?()=>o(X,!1):X,E=U=>Wh(U,!1,u),m=u.onStop=()=>{const U=ir.get(u);if(U){if(l)l(U,4);else for(const Z of U)Z();ir.delete(u)}},e?i?X(!0):N=u.run():o?o(X.bind(null,!0),!0):u.run(),S.pause=u.pause.bind(u),S.resume=u.resume.bind(u),S.stop=S,S}function Gt(t,e=1/0,n){if(e<=0||!ae(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,$e(t))Gt(t.value,e,n);else if(K(t))for(let i=0;i<t.length;i++)Gt(t[i],e,n);else if(Fr(t)||di(t))t.forEach(i=>{Gt(i,e,n)});else if(au(t)){for(const i in t)Gt(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Gt(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ys(t,e,n,i){try{return i?t(...i):t()}catch(s){Wr(s,e,n)}}function ft(t,e,n,i){if(Y(t)){const s=ys(t,e,n,i);return s&&ru(s)&&s.catch(r=>{Wr(r,e,n)}),s}if(K(t)){const s=[];for(let r=0;r<t.length;r++)s.push(ft(t[r],e,n,i));return s}}function Wr(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||fe;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(r){sn(),ys(r,null,10,[t,l,c]),rn();return}}Kh(t,n,s,i,o)}function Kh(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const He=[];let Ct=-1;const fi=[];let bn=null,oi=0;const ku=Promise.resolve();let sr=null;function Cu(t){const e=sr||ku;return t?e.then(this?t.bind(this):t):e}function Gh(t){let e=Ct+1,n=He.length;for(;e<n;){const i=e+n>>>1,s=He[i],r=es(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function wa(t){if(!(t.flags&1)){const e=es(t),n=He[He.length-1];!n||!(t.flags&2)&&e>=es(n)?He.push(t):He.splice(Gh(e),0,t),t.flags|=1,xu()}}function xu(){sr||(sr=ku.then(Nu))}function qh(t){K(t)?fi.push(...t):bn&&t.id===-1?bn.splice(oi+1,0,t):t.flags&1||(fi.push(t),t.flags|=1),xu()}function yl(t,e,n=Ct+1){for(;n<He.length;n++){const i=He[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;He.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Ru(t){if(fi.length){const e=[...new Set(fi)].sort((n,i)=>es(n)-es(i));if(fi.length=0,bn){bn.push(...e);return}for(bn=e,oi=0;oi<bn.length;oi++){const n=bn[oi];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}bn=null,oi=0}}const es=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Nu(t){try{for(Ct=0;Ct<He.length;Ct++){const e=He[Ct];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ys(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ct<He.length;Ct++){const e=He[Ct];e&&(e.flags&=-2)}Ct=-1,He.length=0,Ru(),sr=null,(He.length||fi.length)&&Nu()}}let ct=null,Du=null;function rr(t){const e=ct;return ct=t,Du=t&&t.type.__scopeId||null,e}function Ou(t,e=ct,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&lr(-1);const r=rr(e);let o;try{o=t(...s)}finally{rr(r),i._d&&lr(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ut(t,e){if(ct===null)return t;const n=Xr(ct),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=fe]=e[s];r&&(Y(r)&&(r={mounted:r,updated:r}),r.deep&&Gt(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Rn(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(sn(),ft(l,n,8,[t.el,a,t,e]),rn())}}function Jh(t,e){if(ze){let n=ze.provides;const i=ze.parent&&ze.parent.provides;i===n&&(n=ze.provides=Object.create(i)),n[t]=e}}function Ws(t,e,n=!1){const i=fd();if(i||hi){let s=hi?hi._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Y(e)?e.call(i&&i.proxy):e}}const Yh=Symbol.for("v-scx"),Xh=()=>Ws(Yh);function yo(t,e,n){return Vu(t,e,n)}function Vu(t,e,n=fe){const{immediate:i,deep:s,flush:r,once:o}=n,a=Se({},n),l=e&&i||!e&&r!=="post";let c;if(is){if(r==="sync"){const E=Xh();c=E.__watcherHandles||(E.__watcherHandles=[])}else if(!l){const E=()=>{};return E.stop=Vt,E.resume=Vt,E.pause=Vt,E}}const u=ze;a.call=(E,x,R)=>ft(E,u,x,R);let d=!1;r==="post"?a.scheduler=E=>{je(E,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(E,x)=>{x?E():wa(E)}),a.augmentJob=E=>{e&&(E.flags|=4),d&&(E.flags|=2,u&&(E.id=u.uid,E.i=u))};const m=zh(t,e,a);return is&&(c?c.push(m):l&&m()),m}function Zh(t,e,n){const i=this.proxy,s=me(t)?t.includes(".")?Mu(i,t):()=>i[t]:t.bind(i,i);let r;Y(e)?r=e:(r=e.handler,n=e);const o=bs(this),a=Vu(s,r.bind(i),n);return o(),a}function Mu(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const yn=new WeakMap,Lu=Symbol("_vte"),Fu=t=>t.__isTeleport,Ln=t=>t&&(t.disabled||t.disabled===""),Qh=t=>t&&(t.defer||t.defer===""),bl=t=>typeof SVGElement<"u"&&t instanceof SVGElement,_l=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Bo=(t,e)=>{const n=t&&t.to;return me(n)?e?e(n):null:n},ep={name:"Teleport",__isTeleport:!0,process(t,e,n,i,s,r,o,a,l,c){const{mc:u,pc:d,pbc:m,o:{insert:E,querySelector:x,createText:R,createComment:D,parentNode:S}}=c,N=Ln(e.props);let{dynamicChildren:X}=e;const U=(y,h,f)=>{y.shapeFlag&16&&u(y.children,h,f,s,r,o,a,l)},Z=(y=e)=>{const h=Ln(y.props),f=y.target=Bo(y.props,x),b=jo(f,y,R,E);f&&(o!=="svg"&&bl(f)?o="svg":o!=="mathml"&&_l(f)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(f),h||(U(y,f,b),Di(y,!1)))},te=y=>{const h=()=>{if(yn.get(y)===h){if(yn.delete(y),Ln(y.props)){const f=S(y.el)||n;U(y,f,y.anchor),Di(y,!0)}Z(y)}};yn.set(y,h),je(h,r)};if(t==null){const y=e.el=R(""),h=e.anchor=R("");if(E(y,n,i),E(h,n,i),Qh(e.props)||r&&r.pendingBranch){te(e);return}N&&(U(e,n,h),Di(e,!0)),Z()}else{e.el=t.el;const y=e.anchor=t.anchor,h=yn.get(t);if(h){h.flags|=8,yn.delete(t),te(e);return}e.targetStart=t.targetStart;const f=e.target=t.target,b=e.targetAnchor=t.targetAnchor,_=Ln(t.props),v=_?n:f,p=_?y:b;if(o==="svg"||bl(f)?o="svg":(o==="mathml"||_l(f))&&(o="mathml"),X?(m(t.dynamicChildren,X,v,s,r,o,a),Ta(t,e,!0)):l||d(t,e,v,p,s,r,o,a,!1),N)_?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Fs(e,n,y,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const ce=e.target=Bo(e.props,x);ce&&Fs(e,ce,null,c,0)}else _&&Fs(e,f,b,c,1);Di(e,N)}},remove(t,e,n,{um:i,o:{remove:s}},r){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:d,props:m}=t,E=r||!Ln(m),x=yn.get(t);if(x&&(x.flags|=8,yn.delete(t)),d&&(s(c),s(u)),r&&s(l),!x&&o&16)for(let R=0;R<a.length;R++){const D=a[R];i(D,e,n,E,!!D.dynamicChildren)}},move:Fs,hydrate:tp};function Fs(t,e,n,{o:{insert:i},m:s},r=2){r===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,d=r===2;if(d&&i(o,e,n),!yn.has(t)&&(!d||Ln(u))&&l&16)for(let m=0;m<c.length;m++)s(c[m],e,n,2);d&&i(a,e,n)}function tp(t,e,n,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},d){function m(D,S){let N=S;for(;N;){if(N&&N.nodeType===8){if(N.data==="teleport start anchor")e.targetStart=N;else if(N.data==="teleport anchor"){e.targetAnchor=N,D._lpa=e.targetAnchor&&o(e.targetAnchor);break}}N=o(N)}}function E(D,S){S.anchor=d(o(D),S,a(D),n,i,s,r)}const x=e.target=Bo(e.props,l),R=Ln(e.props);if(x){const D=x._lpa||x.firstChild;e.shapeFlag&16&&(R?(E(t,e),m(x,D),e.targetAnchor||jo(x,e,u,c,a(t)===x?t:null)):(e.anchor=o(t),m(x,D),e.targetAnchor||jo(x,e,u,c),d(D&&o(D),e,x,n,i,s,r))),Di(e,R)}else R&&e.shapeFlag&16&&(E(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const Uu=ep;function Di(t,e){const n=t.ctx;if(n&&n.ut){let i,s;for(e?(i=t.el,s=t.anchor):(i=t.targetStart,s=t.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function jo(t,e,n,i,s=null){const r=e.targetStart=n(""),o=e.targetAnchor=n("");return r[Lu]=o,t&&(i(r,t,s),i(o,t,s)),o}const lt=Symbol("_leaveCb"),Ri=Symbol("_enterCb");function np(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Gr(()=>{t.isMounted=!0}),Gu(()=>{t.isUnmounting=!0}),t}const rt=[Function,Array],$u={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:rt,onEnter:rt,onAfterEnter:rt,onEnterCancelled:rt,onBeforeLeave:rt,onLeave:rt,onAfterLeave:rt,onLeaveCancelled:rt,onBeforeAppear:rt,onAppear:rt,onAfterAppear:rt,onAppearCancelled:rt},Bu=t=>{const e=t.subTree;return e.component?Bu(e.component):e},ip={name:"BaseTransition",props:$u,setup(t,{slots:e}){const n=fd(),i=np();return()=>{const s=e.default&&Wu(e.default(),!0),r=s&&s.length?ju(s):n.subTree?Fe():void 0;if(!r)return;const o=ie(t),{mode:a}=o;if(i.isLeaving)return bo(r);const l=wl(r);if(!l)return bo(r);let c=Ho(l,o,i,n,d=>c=d);l.type!==We&&ts(l,c);let u=n.subTree&&wl(n.subTree);if(u&&u.type!==We&&!Fn(u,l)&&Bu(n).type!==We){let d=Ho(u,o,i,n);if(ts(u,d),a==="out-in"&&l.type!==We)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},bo(r);a==="in-out"&&l.type!==We?d.delayLeave=(m,E,x)=>{const R=Hu(i,u);R[String(u.key)]=u,m[lt]=()=>{E(),m[lt]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{x(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function ju(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==We){e=n;break}}return e}const sp=ip;function Hu(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Ho(t,e,n,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:m,onLeave:E,onAfterLeave:x,onLeaveCancelled:R,onBeforeAppear:D,onAppear:S,onAfterAppear:N,onAppearCancelled:X}=e,U=String(t.key),Z=Hu(n,t),te=(f,b)=>{f&&ft(f,i,9,b)},y=(f,b)=>{const _=b[1];te(f,b),K(f)?f.every(v=>v.length<=1)&&_():f.length<=1&&_()},h={mode:o,persisted:a,beforeEnter(f){let b=l;if(!n.isMounted)if(r)b=D||l;else return;f[lt]&&f[lt](!0);const _=Z[U];_&&Fn(t,_)&&_.el[lt]&&_.el[lt](),te(b,[f])},enter(f){if(Z[U]===t)return;let b=c,_=u,v=d;if(!n.isMounted)if(r)b=S||c,_=N||u,v=X||d;else return;let p=!1;f[Ri]=st=>{p||(p=!0,st?te(v,[f]):te(_,[f]),h.delayedLeave&&h.delayedLeave(),f[Ri]=void 0)};const ce=f[Ri].bind(null,!1);b?y(b,[f,ce]):ce()},leave(f,b){const _=String(t.key);if(f[Ri]&&f[Ri](!0),n.isUnmounting)return b();te(m,[f]);let v=!1;f[lt]=ce=>{v||(v=!0,b(),ce?te(R,[f]):te(x,[f]),f[lt]=void 0,Z[_]===t&&delete Z[_])};const p=f[lt].bind(null,!1);Z[_]=t,E?y(E,[f,p]):p()},clone(f){const b=Ho(f,e,n,i,s);return s&&s(b),b}};return h}function bo(t){if(zr(t))return t=kn(t),t.children=null,t}function wl(t){if(!zr(t))return Fu(t.type)&&t.children?ju(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Y(n.default))return n.default()}}function ts(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ts(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Wu(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Ye?(o.patchFlag&128&&s++,i=i.concat(Wu(o.children,e,a))):(e||o.type!==We)&&i.push(a!=null?kn(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function un(t,e){return Y(t)?Se({name:t.name},e,{setup:t}):t}function zu(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function El(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const or=new WeakMap;function Wi(t,e,n,i,s=!1){if(K(t)){t.forEach((R,D)=>Wi(R,e&&(K(e)?e[D]:e),n,i,s));return}if(zi(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Wi(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Xr(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===fe?a.refs={}:a.refs,d=a.setupState,m=ie(d),E=d===fe?su:R=>El(u,R)?!1:se(m,R),x=(R,D)=>!(D&&El(u,D));if(c!=null&&c!==l){if(Il(e),me(c))u[c]=null,E(c)&&(d[c]=null);else if($e(c)){const R=e;x(c,R.k)&&(c.value=null),R.k&&(u[R.k]=null)}}if(Y(l))ys(l,a,12,[o,u]);else{const R=me(l),D=$e(l);if(R||D){const S=()=>{if(t.f){const N=R?E(l)?d[l]:u[l]:x()||!t.k?l.value:u[t.k];if(s)K(N)&&da(N,r);else if(K(N))N.includes(r)||N.push(r);else if(R)u[l]=[r],E(l)&&(d[l]=u[l]);else{const X=[r];x(l,t.k)&&(l.value=X),t.k&&(u[t.k]=X)}}else R?(u[l]=o,E(l)&&(d[l]=o)):D&&(x(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const N=()=>{S(),or.delete(t)};N.id=-1,or.set(t,N),je(N,n)}else Il(t),S()}}}function Il(t){const e=or.get(t);e&&(e.flags|=8,or.delete(t))}Br().requestIdleCallback;Br().cancelIdleCallback;const zi=t=>!!t.type.__asyncLoader,zr=t=>t.type.__isKeepAlive;function rp(t,e){Ku(t,"a",e)}function op(t,e){Ku(t,"da",e)}function Ku(t,e,n=ze){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Kr(e,i,n),n){let s=n.parent;for(;s&&s.parent;)zr(s.parent.vnode)&&ap(i,e,n,s),s=s.parent}}function ap(t,e,n,i){const s=Kr(e,t,i,!0);qr(()=>{da(i[e],s)},n)}function Kr(t,e,n=ze,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{sn();const a=bs(n),l=ft(e,n,t,o);return a(),rn(),l});return i?s.unshift(r):s.push(r),r}}const dn=t=>(e,n=ze)=>{(!is||t==="sp")&&Kr(t,(...i)=>e(...i),n)},lp=dn("bm"),Gr=dn("m"),cp=dn("bu"),up=dn("u"),Gu=dn("bum"),qr=dn("um"),dp=dn("sp"),fp=dn("rtg"),hp=dn("rtc");function pp(t,e=ze){Kr("ec",t,e)}const mp=Symbol.for("v-ndc");function gp(t,e,n,i){let s;const r=n,o=K(t);if(o||me(t)){const a=o&&Wn(t);let l=!1,c=!1;a&&(l=!dt(t),c=on(t),t=jr(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(l?c?vi(It(t[u])):It(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(ae(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}const Wo=t=>t?hd(t)?Xr(t):Wo(t.parent):null,Ki=Se(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Wo(t.parent),$root:t=>Wo(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ju(t),$forceUpdate:t=>t.f||(t.f=()=>{wa(t.update)}),$nextTick:t=>t.n||(t.n=Cu.bind(t.proxy)),$watch:t=>Zh.bind(t)}),_o=(t,e)=>t!==fe&&!t.__isScriptSetup&&se(t,e),vp={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(_o(i,e))return o[e]=1,i[e];if(s!==fe&&se(s,e))return o[e]=2,s[e];if(se(r,e))return o[e]=3,r[e];if(n!==fe&&se(n,e))return o[e]=4,n[e];zo&&(o[e]=0)}}const c=Ki[e];let u,d;if(c)return e==="$attrs"&&Le(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==fe&&se(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,se(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return _o(s,e)?(s[e]=n,!0):i!==fe&&se(i,e)?(i[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(n[a]||t!==fe&&a[0]!=="$"&&se(t,a)||_o(e,a)||se(r,a)||se(i,a)||se(Ki,a)||se(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Tl(t){return K(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let zo=!0;function yp(t){const e=Ju(t),n=t.proxy,i=t.ctx;zo=!1,e.beforeCreate&&Al(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:m,beforeUpdate:E,updated:x,activated:R,deactivated:D,beforeDestroy:S,beforeUnmount:N,destroyed:X,unmounted:U,render:Z,renderTracked:te,renderTriggered:y,errorCaptured:h,serverPrefetch:f,expose:b,inheritAttrs:_,components:v,directives:p,filters:ce}=e;if(c&&bp(c,i,null),o)for(const ge in o){const he=o[ge];Y(he)&&(i[ge]=he.bind(n))}if(s){const ge=s.call(n,n);ae(ge)&&(t.data=Hr(ge))}if(zo=!0,r)for(const ge in r){const he=r[ge],Cn=Y(he)?he.bind(n,n):Y(he.get)?he.get.bind(n,n):Vt,Ds=!Y(he)&&Y(he.set)?he.set.bind(n):Vt,xn=Zr({get:Cn,set:Ds});Object.defineProperty(i,ge,{enumerable:!0,configurable:!0,get:()=>xn.value,set:Tt=>xn.value=Tt})}if(a)for(const ge in a)qu(a[ge],i,n,ge);if(l){const ge=Y(l)?l.call(n):l;Reflect.ownKeys(ge).forEach(he=>{Jh(he,ge[he])})}u&&Al(u,t,"c");function ke(ge,he){K(he)?he.forEach(Cn=>ge(Cn.bind(n))):he&&ge(he.bind(n))}if(ke(lp,d),ke(Gr,m),ke(cp,E),ke(up,x),ke(rp,R),ke(op,D),ke(pp,h),ke(hp,te),ke(fp,y),ke(Gu,N),ke(qr,U),ke(dp,f),K(b))if(b.length){const ge=t.exposed||(t.exposed={});b.forEach(he=>{Object.defineProperty(ge,he,{get:()=>n[he],set:Cn=>n[he]=Cn,enumerable:!0})})}else t.exposed||(t.exposed={});Z&&t.render===Vt&&(t.render=Z),_!=null&&(t.inheritAttrs=_),v&&(t.components=v),p&&(t.directives=p),f&&zu(t)}function bp(t,e,n=Vt){K(t)&&(t=Ko(t));for(const i in t){const s=t[i];let r;ae(s)?"default"in s?r=Ws(s.from||i,s.default,!0):r=Ws(s.from||i):r=Ws(s),$e(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Al(t,e,n){ft(K(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function qu(t,e,n,i){let s=i.includes(".")?Mu(n,i):()=>n[i];if(me(t)){const r=e[t];Y(r)&&yo(s,r)}else if(Y(t))yo(s,t.bind(n));else if(ae(t))if(K(t))t.forEach(r=>qu(r,e,n,i));else{const r=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(r)&&yo(s,r,t)}}function Ju(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>ar(l,c,o,!0)),ar(l,e,o)),ae(e)&&r.set(e,l),l}function ar(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&ar(t,r,n,!0),s&&s.forEach(o=>ar(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=_p[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const _p={data:Sl,props:Pl,emits:Pl,methods:Oi,computed:Oi,beforeCreate:Be,created:Be,beforeMount:Be,mounted:Be,beforeUpdate:Be,updated:Be,beforeDestroy:Be,beforeUnmount:Be,destroyed:Be,unmounted:Be,activated:Be,deactivated:Be,errorCaptured:Be,serverPrefetch:Be,components:Oi,directives:Oi,watch:Ep,provide:Sl,inject:wp};function Sl(t,e){return e?t?function(){return Se(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function wp(t,e){return Oi(Ko(t),Ko(e))}function Ko(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Be(t,e){return t?[...new Set([].concat(t,e))]:e}function Oi(t,e){return t?Se(Object.create(null),t,e):e}function Pl(t,e){return t?K(t)&&K(e)?[...new Set([...t,...e])]:Se(Object.create(null),Tl(t),Tl(e??{})):e}function Ep(t,e){if(!t)return e;if(!e)return t;const n=Se(Object.create(null),t);for(const i in e)n[i]=Be(t[i],e[i]);return n}function Yu(){return{app:null,config:{isNativeTag:su,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ip=0;function Tp(t,e){return function(i,s=null){Y(i)||(i=Se({},i)),s!=null&&!ae(s)&&(s=null);const r=Yu(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Ip++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:nm,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&Y(u.install)?(o.add(u),u.install(c,...d)):Y(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,m){if(!l){const E=c._ceVNode||Me(i,s);return E.appContext=r,m===!0?m="svg":m===!1&&(m=void 0),t(E,u,m),l=!0,c._container=u,u.__vue_app__=c,Xr(E.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ft(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=hi;hi=c;try{return u()}finally{hi=d}}};return c}}let hi=null;const Ap=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${bt(e)}Modifiers`]||t[`${ii(e)}Modifiers`];function Sp(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||fe;let s=n;const r=e.startsWith("update:"),o=r&&Ap(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>me(u)?u.trim():u)),o.number&&(s=n.map($r)));let a,l=i[a=ho(e)]||i[a=ho(bt(e))];!l&&r&&(l=i[a=ho(ii(e))]),l&&ft(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ft(c,t,6,s)}}const Pp=new WeakMap;function Xu(t,e,n=!1){const i=n?Pp:e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!Y(t)){const l=c=>{const u=Xu(c,e,!0);u&&(a=!0,Se(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(ae(t)&&i.set(t,null),null):(K(r)?r.forEach(l=>o[l]=null):Se(o,r),ae(t)&&i.set(t,o),o)}function Jr(t,e){return!t||!Mr(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,ii(e))||se(t,e))}function kl(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:m,setupState:E,ctx:x,inheritAttrs:R}=t,D=rr(t);let S,N;try{if(n.shapeFlag&4){const U=s||i,Z=U;S=Nt(c.call(Z,U,u,d,E,m,x)),N=a}else{const U=e;S=Nt(U.length>1?U(d,{attrs:a,slots:o,emit:l}):U(d,null)),N=e.props?a:kp(a)}}catch(U){Gi.length=0,Wr(U,t,1),S=Me(We)}let X=S;if(N&&R!==!1){const U=Object.keys(N),{shapeFlag:Z}=X;U.length&&Z&7&&(r&&U.some(Lr)&&(N=Cp(N,r)),X=kn(X,N,!1,!0))}return n.dirs&&(X=kn(X,null,!1,!0),X.dirs=X.dirs?X.dirs.concat(n.dirs):n.dirs),n.transition&&ts(X,n.transition),S=X,rr(D),S}const kp=t=>{let e;for(const n in t)(n==="class"||n==="style"||Mr(n))&&((e||(e={}))[n]=t[n]);return e},Cp=(t,e)=>{const n={};for(const i in t)(!Lr(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function xp(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Cl(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const m=u[d];if(Zu(o,i,m)&&!Jr(c,m))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Cl(i,o,c):!0:!!o;return!1}function Cl(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Zu(e,t,r)&&!Jr(n,r))return!0}return!1}function Zu(t,e,n){const i=t[n],s=e[n];return n==="style"&&ae(i)&&ae(s)?!vs(i,s):i!==s}function Rp({vnode:t,parent:e,suspense:n},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=i,t=s),s===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}const Qu={},ed=()=>Object.create(Qu),td=t=>Object.getPrototypeOf(t)===Qu;function Np(t,e,n,i=!1){const s={},r=ed();t.propsDefaults=Object.create(null),nd(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Lh(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Dp(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=ie(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let m=u[d];if(Jr(t.emitsOptions,m))continue;const E=e[m];if(l)if(se(r,m))E!==r[m]&&(r[m]=E,c=!0);else{const x=bt(m);s[x]=Go(l,a,x,E,t,!1)}else E!==r[m]&&(r[m]=E,c=!0)}}}else{nd(t,e,s,r)&&(c=!0);let u;for(const d in a)(!e||!se(e,d)&&((u=ii(d))===d||!se(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=Go(l,a,d,void 0,t,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!se(e,d))&&(delete r[d],c=!0)}c&&Kt(t.attrs,"set","")}function nd(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Bi(l))continue;const c=e[l];let u;s&&se(s,u=bt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Jr(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ie(n),c=a||fe;for(let u=0;u<r.length;u++){const d=r[u];n[d]=Go(s,l,d,c[d],t,!se(c,d))}}return o}function Go(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=se(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Y(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=bs(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ii(n))&&(i=!0))}return i}const Op=new WeakMap;function id(t,e,n=!1){const i=n?Op:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!Y(t)){const u=d=>{l=!0;const[m,E]=id(d,e,!0);Se(o,m),E&&a.push(...E)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return ae(t)&&i.set(t,ui),ui;if(K(r))for(let u=0;u<r.length;u++){const d=bt(r[u]);xl(d)&&(o[d]=fe)}else if(r)for(const u in r){const d=bt(u);if(xl(d)){const m=r[u],E=o[d]=K(m)||Y(m)?{type:m}:Se({},m),x=E.type;let R=!1,D=!0;if(K(x))for(let S=0;S<x.length;++S){const N=x[S],X=Y(N)&&N.name;if(X==="Boolean"){R=!0;break}else X==="String"&&(D=!1)}else R=Y(x)&&x.name==="Boolean";E[0]=R,E[1]=D,(R||se(E,"default"))&&a.push(d)}}const c=[o,a];return ae(t)&&i.set(t,c),c}function xl(t){return t[0]!=="$"&&!Bi(t)}const Ea=t=>t==="_"||t==="_ctx"||t==="$stable",Ia=t=>K(t)?t.map(Nt):[Nt(t)],Vp=(t,e,n)=>{if(e._n)return e;const i=Ou((...s)=>Ia(e(...s)),n);return i._c=!1,i},sd=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Ea(s))continue;const r=t[s];if(Y(r))e[s]=Vp(s,r,i);else if(r!=null){const o=Ia(r);e[s]=()=>o}}},rd=(t,e)=>{const n=Ia(e);t.slots.default=()=>n},od=(t,e,n)=>{for(const i in e)(n||!Ea(i))&&(t[i]=e[i])},Mp=(t,e,n)=>{const i=t.slots=ed();if(t.vnode.shapeFlag&32){const s=e._;s?(od(i,e,n),n&&cu(i,"_",s,!0)):sd(e,i)}else e&&rd(t,e)},Lp=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=fe;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:od(s,e,n):(r=!e.$stable,sd(e,s)),o=e}else e&&(rd(t,e),o={default:1});if(r)for(const a in s)!Ea(a)&&o[a]==null&&delete s[a]},je=jp;function Fp(t){return Up(t)}function Up(t,e){const n=Br();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:m,setScopeId:E=Vt,insertStaticContent:x}=t,R=(g,w,T,C=null,P=null,A=null,M=void 0,V=null,O=!!w.dynamicChildren)=>{if(g===w)return;g&&!Fn(g,w)&&(C=Os(g),Tt(g,P,A,!0),g=null),w.patchFlag===-2&&(O=!1,w.dynamicChildren=null);const{type:k,ref:z,shapeFlag:F}=w;switch(k){case Yr:D(g,w,T,C);break;case We:S(g,w,T,C);break;case zs:g==null&&N(w,T,C,M);break;case Ye:v(g,w,T,C,P,A,M,V,O);break;default:F&1?Z(g,w,T,C,P,A,M,V,O):F&6?p(g,w,T,C,P,A,M,V,O):(F&64||F&128)&&k.process(g,w,T,C,P,A,M,V,O,ki)}z!=null&&P?Wi(z,g&&g.ref,A,w||g,!w):z==null&&g&&g.ref!=null&&Wi(g.ref,null,A,g,!0)},D=(g,w,T,C)=>{if(g==null)i(w.el=a(w.children),T,C);else{const P=w.el=g.el;w.children!==g.children&&c(P,w.children)}},S=(g,w,T,C)=>{g==null?i(w.el=l(w.children||""),T,C):w.el=g.el},N=(g,w,T,C)=>{[g.el,g.anchor]=x(g.children,w,T,C,g.el,g.anchor)},X=({el:g,anchor:w},T,C)=>{let P;for(;g&&g!==w;)P=m(g),i(g,T,C),g=P;i(w,T,C)},U=({el:g,anchor:w})=>{let T;for(;g&&g!==w;)T=m(g),s(g),g=T;s(w)},Z=(g,w,T,C,P,A,M,V,O)=>{if(w.type==="svg"?M="svg":w.type==="math"&&(M="mathml"),g==null)te(w,T,C,P,A,M,V,O);else{const k=g.el&&g.el._isVueCE?g.el:null;try{k&&k._beginPatch(),f(g,w,P,A,M,V,O)}finally{k&&k._endPatch()}}},te=(g,w,T,C,P,A,M,V)=>{let O,k;const{props:z,shapeFlag:F,transition:j,dirs:J}=g;if(O=g.el=o(g.type,A,z&&z.is,z),F&8?u(O,g.children):F&16&&h(g.children,O,null,C,P,wo(g,A),M,V),J&&Rn(g,null,C,"created"),y(O,g,g.scopeId,M,C),z){for(const ue in z)ue!=="value"&&!Bi(ue)&&r(O,ue,null,z[ue],A,C);"value"in z&&r(O,"value",null,z.value,A),(k=z.onVnodeBeforeMount)&&kt(k,C,g)}J&&Rn(g,null,C,"beforeMount");const ne=$p(P,j);ne&&j.beforeEnter(O),i(O,w,T),((k=z&&z.onVnodeMounted)||ne||J)&&je(()=>{try{k&&kt(k,C,g),ne&&j.enter(O),J&&Rn(g,null,C,"mounted")}finally{}},P)},y=(g,w,T,C,P)=>{if(T&&E(g,T),C)for(let A=0;A<C.length;A++)E(g,C[A]);if(P){let A=P.subTree;if(w===A||cd(A.type)&&(A.ssContent===w||A.ssFallback===w)){const M=P.vnode;y(g,M,M.scopeId,M.slotScopeIds,P.parent)}}},h=(g,w,T,C,P,A,M,V,O=0)=>{for(let k=O;k<g.length;k++){const z=g[k]=V?zt(g[k]):Nt(g[k]);R(null,z,w,T,C,P,A,M,V)}},f=(g,w,T,C,P,A,M)=>{const V=w.el=g.el;let{patchFlag:O,dynamicChildren:k,dirs:z}=w;O|=g.patchFlag&16;const F=g.props||fe,j=w.props||fe;let J;if(T&&Nn(T,!1),(J=j.onVnodeBeforeUpdate)&&kt(J,T,w,g),z&&Rn(w,g,T,"beforeUpdate"),T&&Nn(T,!0),(F.innerHTML&&j.innerHTML==null||F.textContent&&j.textContent==null)&&u(V,""),k?b(g.dynamicChildren,k,V,T,C,wo(w,P),A):M||he(g,w,V,null,T,C,wo(w,P),A,!1),O>0){if(O&16)_(V,F,j,T,P);else if(O&2&&F.class!==j.class&&r(V,"class",null,j.class,P),O&4&&r(V,"style",F.style,j.style,P),O&8){const ne=w.dynamicProps;for(let ue=0;ue<ne.length;ue++){const le=ne[ue],Ee=F[le],xe=j[le];(xe!==Ee||le==="value")&&r(V,le,Ee,xe,P,T)}}O&1&&g.children!==w.children&&u(V,w.children)}else!M&&k==null&&_(V,F,j,T,P);((J=j.onVnodeUpdated)||z)&&je(()=>{J&&kt(J,T,w,g),z&&Rn(w,g,T,"updated")},C)},b=(g,w,T,C,P,A,M)=>{for(let V=0;V<w.length;V++){const O=g[V],k=w[V],z=O.el&&(O.type===Ye||!Fn(O,k)||O.shapeFlag&198)?d(O.el):T;R(O,k,z,null,C,P,A,M,!0)}},_=(g,w,T,C,P)=>{if(w!==T){if(w!==fe)for(const A in w)!Bi(A)&&!(A in T)&&r(g,A,w[A],null,P,C);for(const A in T){if(Bi(A))continue;const M=T[A],V=w[A];M!==V&&A!=="value"&&r(g,A,V,M,P,C)}"value"in T&&r(g,"value",w.value,T.value,P)}},v=(g,w,T,C,P,A,M,V,O)=>{const k=w.el=g?g.el:a(""),z=w.anchor=g?g.anchor:a("");let{patchFlag:F,dynamicChildren:j,slotScopeIds:J}=w;J&&(V=V?V.concat(J):J),g==null?(i(k,T,C),i(z,T,C),h(w.children||[],T,z,P,A,M,V,O)):F>0&&F&64&&j&&g.dynamicChildren&&g.dynamicChildren.length===j.length?(b(g.dynamicChildren,j,T,P,A,M,V),(w.key!=null||P&&w===P.subTree)&&Ta(g,w,!0)):he(g,w,T,z,P,A,M,V,O)},p=(g,w,T,C,P,A,M,V,O)=>{w.slotScopeIds=V,g==null?w.shapeFlag&512?P.ctx.activate(w,T,C,M,O):ce(w,T,C,P,A,M,O):st(g,w,O)},ce=(g,w,T,C,P,A,M)=>{const V=g.component=Jp(g,C,P);if(zr(g)&&(V.ctx.renderer=ki),Yp(V,!1,M),V.asyncDep){if(P&&P.registerDep(V,ke,M),!g.el){const O=V.subTree=Me(We);S(null,O,w,T),g.placeholder=O.el}}else ke(V,g,w,T,P,A,M)},st=(g,w,T)=>{const C=w.component=g.component;if(xp(g,w,T))if(C.asyncDep&&!C.asyncResolved){ge(C,w,T);return}else C.next=w,C.update();else w.el=g.el,C.vnode=w},ke=(g,w,T,C,P,A,M)=>{const V=()=>{if(g.isMounted){let{next:F,bu:j,u:J,parent:ne,vnode:ue}=g;{const St=ad(g);if(St){F&&(F.el=ue.el,ge(g,F,M)),St.asyncDep.then(()=>{je(()=>{g.isUnmounted||k()},P)});return}}let le=F,Ee;Nn(g,!1),F?(F.el=ue.el,ge(g,F,M)):F=ue,j&&Hs(j),(Ee=F.props&&F.props.onVnodeBeforeUpdate)&&kt(Ee,ne,F,ue),Nn(g,!0);const xe=kl(g),At=g.subTree;g.subTree=xe,R(At,xe,d(At.el),Os(At),g,P,A),F.el=xe.el,le===null&&Rp(g,xe.el),J&&je(J,P),(Ee=F.props&&F.props.onVnodeUpdated)&&je(()=>kt(Ee,ne,F,ue),P)}else{let F;const{el:j,props:J}=w,{bm:ne,m:ue,parent:le,root:Ee,type:xe}=g,At=zi(w);Nn(g,!1),ne&&Hs(ne),!At&&(F=J&&J.onVnodeBeforeMount)&&kt(F,le,w),Nn(g,!0);{Ee.ce&&Ee.ce._hasShadowRoot()&&Ee.ce._injectChildStyle(xe,g.parent?g.parent.type:void 0);const St=g.subTree=kl(g);R(null,St,T,C,g,P,A),w.el=St.el}if(ue&&je(ue,P),!At&&(F=J&&J.onVnodeMounted)){const St=w;je(()=>kt(F,le,St),P)}(w.shapeFlag&256||le&&zi(le.vnode)&&le.vnode.shapeFlag&256)&&g.a&&je(g.a,P),g.isMounted=!0,w=T=C=null}};g.scope.on();const O=g.effect=new hu(V);g.scope.off();const k=g.update=O.run.bind(O),z=g.job=O.runIfDirty.bind(O);z.i=g,z.id=g.uid,O.scheduler=()=>wa(z),Nn(g,!0),k()},ge=(g,w,T)=>{w.component=g;const C=g.vnode.props;g.vnode=w,g.next=null,Dp(g,w.props,C,T),Lp(g,w.children,T),sn(),yl(g),rn()},he=(g,w,T,C,P,A,M,V,O=!1)=>{const k=g&&g.children,z=g?g.shapeFlag:0,F=w.children,{patchFlag:j,shapeFlag:J}=w;if(j>0){if(j&128){Ds(k,F,T,C,P,A,M,V,O);return}else if(j&256){Cn(k,F,T,C,P,A,M,V,O);return}}J&8?(z&16&&Pi(k,P,A),F!==k&&u(T,F)):z&16?J&16?Ds(k,F,T,C,P,A,M,V,O):Pi(k,P,A,!0):(z&8&&u(T,""),J&16&&h(F,T,C,P,A,M,V,O))},Cn=(g,w,T,C,P,A,M,V,O)=>{g=g||ui,w=w||ui;const k=g.length,z=w.length,F=Math.min(k,z);let j;for(j=0;j<F;j++){const J=w[j]=O?zt(w[j]):Nt(w[j]);R(g[j],J,T,null,P,A,M,V,O)}k>z?Pi(g,P,A,!0,!1,F):h(w,T,C,P,A,M,V,O,F)},Ds=(g,w,T,C,P,A,M,V,O)=>{let k=0;const z=w.length;let F=g.length-1,j=z-1;for(;k<=F&&k<=j;){const J=g[k],ne=w[k]=O?zt(w[k]):Nt(w[k]);if(Fn(J,ne))R(J,ne,T,null,P,A,M,V,O);else break;k++}for(;k<=F&&k<=j;){const J=g[F],ne=w[j]=O?zt(w[j]):Nt(w[j]);if(Fn(J,ne))R(J,ne,T,null,P,A,M,V,O);else break;F--,j--}if(k>F){if(k<=j){const J=j+1,ne=J<z?w[J].el:C;for(;k<=j;)R(null,w[k]=O?zt(w[k]):Nt(w[k]),T,ne,P,A,M,V,O),k++}}else if(k>j)for(;k<=F;)Tt(g[k],P,A,!0),k++;else{const J=k,ne=k,ue=new Map;for(k=ne;k<=j;k++){const Je=w[k]=O?zt(w[k]):Nt(w[k]);Je.key!=null&&ue.set(Je.key,k)}let le,Ee=0;const xe=j-ne+1;let At=!1,St=0;const Ci=new Array(xe);for(k=0;k<xe;k++)Ci[k]=0;for(k=J;k<=F;k++){const Je=g[k];if(Ee>=xe){Tt(Je,P,A,!0);continue}let Pt;if(Je.key!=null)Pt=ue.get(Je.key);else for(le=ne;le<=j;le++)if(Ci[le-ne]===0&&Fn(Je,w[le])){Pt=le;break}Pt===void 0?Tt(Je,P,A,!0):(Ci[Pt-ne]=k+1,Pt>=St?St=Pt:At=!0,R(Je,w[Pt],T,null,P,A,M,V,O),Ee++)}const dl=At?Bp(Ci):ui;for(le=dl.length-1,k=xe-1;k>=0;k--){const Je=ne+k,Pt=w[Je],fl=w[Je+1],hl=Je+1<z?fl.el||ld(fl):C;Ci[k]===0?R(null,Pt,T,hl,P,A,M,V,O):At&&(le<0||k!==dl[le]?xn(Pt,T,hl,2):le--)}}},xn=(g,w,T,C,P=null)=>{const{el:A,type:M,transition:V,children:O,shapeFlag:k}=g;if(k&6){xn(g.component.subTree,w,T,C);return}if(k&128){g.suspense.move(w,T,C);return}if(k&64){M.move(g,w,T,ki);return}if(M===Ye){i(A,w,T);for(let F=0;F<O.length;F++)xn(O[F],w,T,C);i(g.anchor,w,T);return}if(M===zs){X(g,w,T);return}if(C!==2&&k&1&&V)if(C===0)V.persisted&&!A[lt]?i(A,w,T):(V.beforeEnter(A),i(A,w,T),je(()=>V.enter(A),P));else{const{leave:F,delayLeave:j,afterLeave:J}=V,ne=()=>{g.ctx.isUnmounted?s(A):i(A,w,T)},ue=()=>{const le=A._isLeaving||!!A[lt];A._isLeaving&&A[lt](!0),V.persisted&&!le?ne():F(A,()=>{ne(),J&&J()})};j?j(A,ne,ue):ue()}else i(A,w,T)},Tt=(g,w,T,C=!1,P=!1)=>{const{type:A,props:M,ref:V,children:O,dynamicChildren:k,shapeFlag:z,patchFlag:F,dirs:j,cacheIndex:J,memo:ne}=g;if(F===-2&&(P=!1),V!=null&&(sn(),Wi(V,null,T,g,!0),rn()),J!=null&&(w.renderCache[J]=void 0),z&256){w.ctx.deactivate(g);return}const ue=z&1&&j,le=!zi(g);let Ee;if(le&&(Ee=M&&M.onVnodeBeforeUnmount)&&kt(Ee,w,g),z&6)sh(g.component,T,C);else{if(z&128){g.suspense.unmount(T,C);return}ue&&Rn(g,null,w,"beforeUnmount"),z&64?g.type.remove(g,w,T,ki,C):k&&!k.hasOnce&&(A!==Ye||F>0&&F&64)?Pi(k,w,T,!1,!0):(A===Ye&&F&384||!P&&z&16)&&Pi(O,w,T),C&&cl(g)}const xe=ne!=null&&J==null;(le&&(Ee=M&&M.onVnodeUnmounted)||ue||xe)&&je(()=>{Ee&&kt(Ee,w,g),ue&&Rn(g,null,w,"unmounted"),xe&&(g.el=null)},T)},cl=g=>{const{type:w,el:T,anchor:C,transition:P}=g;if(w===Ye){ih(T,C);return}if(w===zs){U(g);return}const A=()=>{s(T),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(g.shapeFlag&1&&P&&!P.persisted){const{leave:M,delayLeave:V}=P,O=()=>M(T,A);V?V(g.el,A,O):O()}else A()},ih=(g,w)=>{let T;for(;g!==w;)T=m(g),s(g),g=T;s(w)},sh=(g,w,T)=>{const{bum:C,scope:P,job:A,subTree:M,um:V,m:O,a:k}=g;Rl(O),Rl(k),C&&Hs(C),P.stop(),A&&(A.flags|=8,Tt(M,g,w,T)),V&&je(V,w),je(()=>{g.isUnmounted=!0},w)},Pi=(g,w,T,C=!1,P=!1,A=0)=>{for(let M=A;M<g.length;M++)Tt(g[M],w,T,C,P)},Os=g=>{if(g.shapeFlag&6)return Os(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const w=m(g.anchor||g.el),T=w&&w[Lu];return T?m(T):w};let fo=!1;const ul=(g,w,T)=>{let C;g==null?w._vnode&&(Tt(w._vnode,null,null,!0),C=w._vnode.component):R(w._vnode||null,g,w,null,null,null,T),w._vnode=g,fo||(fo=!0,yl(C),Ru(),fo=!1)},ki={p:R,um:Tt,m:xn,r:cl,mt:ce,mc:h,pc:he,pbc:b,n:Os,o:t};return{render:ul,hydrate:void 0,createApp:Tp(ul)}}function wo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Nn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function $p(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ta(t,e,n=!1){const i=t.children,s=e.children;if(K(i)&&K(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=zt(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Ta(o,a)),a.type===Yr&&(a.patchFlag===-1&&(a=s[r]=zt(a)),a.el=o.el),a.type===We&&!a.el&&(a.el=o.el)}}function Bp(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function ad(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ad(e)}function Rl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function ld(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?ld(e.subTree):null}const cd=t=>t.__isSuspense;function jp(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):qh(t)}const Ye=Symbol.for("v-fgt"),Yr=Symbol.for("v-txt"),We=Symbol.for("v-cmt"),zs=Symbol.for("v-stc"),Gi=[];let et=null;function q(t=!1){Gi.push(et=t?null:[])}function Hp(){Gi.pop(),et=Gi[Gi.length-1]||null}let ns=1;function lr(t,e=!1){ns+=t,t<0&&et&&e&&(et.hasOnce=!0)}function ud(t){return t.dynamicChildren=ns>0?et||ui:null,Hp(),ns>0&&et&&et.push(t),t}function Q(t,e,n,i,s,r){return ud(I(t,e,n,i,s,r,!0))}function at(t,e,n,i,s){return ud(Me(t,e,n,i,s,!0))}function cr(t){return t?t.__v_isVNode===!0:!1}function Fn(t,e){return t.type===e.type&&t.key===e.key}const dd=({key:t})=>t??null,Ks=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?me(t)||$e(t)||Y(t)?{i:ct,r:t,k:e,f:!!n}:t:null);function I(t,e=null,n=null,i=0,s=null,r=t===Ye?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&dd(e),ref:e&&Ks(e),scopeId:Du,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:ct};return a?(Aa(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=me(n)?8:16),ns>0&&!o&&et&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&et.push(l),l}const Me=Wp;function Wp(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===mp)&&(t=We),cr(t)){const a=kn(t,e,!0);return n&&Aa(a,n),ns>0&&!r&&et&&(a.shapeFlag&6?et[et.indexOf(t)]=a:et.push(a)),a.patchFlag=-2,a}if(em(t)&&(t=t.__vccOpts),e){e=zp(e);let{class:a,style:l}=e;a&&!me(a)&&(e.class=mt(a)),ae(l)&&(_a(l)&&!K(l)&&(l=Se({},l)),e.style=ha(l))}const o=me(t)?1:cd(t)?128:Fu(t)?64:ae(t)?4:Y(t)?2:0;return I(t,e,n,i,s,o,r,!0)}function zp(t){return t?_a(t)||td(t)?Se({},t):t:null}function kn(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?Kp(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&dd(c),ref:e&&e.ref?n&&r?K(r)?r.concat(Ks(e)):[r,Ks(e)]:Ks(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ye?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&kn(t.ssContent),ssFallback:t.ssFallback&&kn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&ts(u,l.clone(u)),u}function we(t=" ",e=0){return Me(Yr,null,t,e)}function gt(t,e){const n=Me(zs,null,t);return n.staticCount=e,n}function Fe(t="",e=!1){return e?(q(),at(We,null,t)):Me(We,null,t)}function Nt(t){return t==null||typeof t=="boolean"?Me(We):K(t)?Me(Ye,null,t.slice()):cr(t)?zt(t):Me(Yr,null,String(t))}function zt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:kn(t)}function Aa(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Aa(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!td(e)?e._ctx=ct:s===3&&ct&&(ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:ct},n=32):(e=String(e),i&64?(n=16,e=[we(e)]):n=8);t.children=e,t.shapeFlag|=n}function Kp(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=mt([e.class,i.class]));else if(s==="style")e.style=ha([e.style,i.style]);else if(Mr(s)){const r=e[s],o=i[s];o&&r!==o&&!(K(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!Lr(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function kt(t,e,n,i=null){ft(t,e,7,[n,i])}const Gp=Yu();let qp=0;function Jp(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Gp,r={uid:qp++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:id(i,s),emitsOptions:Xu(i,s),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:i.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Sp.bind(null,r),t.ce&&t.ce(r),r}let ze=null;const fd=()=>ze||ct;let ur,qo;{const t=Br(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ur=e("__VUE_INSTANCE_SETTERS__",n=>ze=n),qo=e("__VUE_SSR_SETTERS__",n=>is=n)}const bs=t=>{const e=ze;return ur(t),t.scope.on(),()=>{t.scope.off(),ur(e)}},Nl=()=>{ze&&ze.scope.off(),ur(null)};function hd(t){return t.vnode.shapeFlag&4}let is=!1;function Yp(t,e=!1,n=!1){e&&qo(e);const{props:i,children:s}=t.vnode,r=hd(t);Np(t,i,r,e),Mp(t,s,n||e);const o=r?Xp(t,e):void 0;return e&&qo(!1),o}function Xp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,vp);const{setup:i}=n;if(i){sn();const s=t.setupContext=i.length>1?Qp(t):null,r=bs(t),o=ys(i,t,0,[t.props,s]),a=ru(o);if(rn(),r(),(a||t.sp)&&!zi(t)&&zu(t),a){if(o.then(Nl,Nl),e)return o.then(l=>{Dl(t,l)}).catch(l=>{Wr(l,t,0)});t.asyncDep=o}else Dl(t,o)}else pd(t)}function Dl(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ae(e)&&(t.setupState=Pu(e)),pd(t)}function pd(t,e,n){const i=t.type;t.render||(t.render=i.render||Vt);{const s=bs(t);sn();try{yp(t)}finally{rn(),s()}}}const Zp={get(t,e){return Le(t,"get",""),t[e]}};function Qp(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Zp),slots:t.slots,emit:t.emit,expose:e}}function Xr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Pu(Fh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ki)return Ki[n](t)},has(e,n){return n in e||n in Ki}})):t.proxy}function em(t){return Y(t)&&"__vccOpts"in t}const Zr=(t,e)=>Hh(t,e,is);function tm(t,e,n){try{lr(-1);const i=arguments.length;return i===2?ae(e)&&!K(e)?cr(e)?Me(t,null,[e]):Me(t,e):Me(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&cr(n)&&(n=[n]),Me(t,e,n))}finally{lr(1)}}const nm="3.5.38";/**
* @vue/runtime-dom v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Jo;const Ol=typeof window<"u"&&window.trustedTypes;if(Ol)try{Jo=Ol.createPolicy("vue",{createHTML:t=>t})}catch{}const md=Jo?t=>Jo.createHTML(t):t=>t,im="http://www.w3.org/2000/svg",sm="http://www.w3.org/1998/Math/MathML",Wt=typeof document<"u"?document:null,Vl=Wt&&Wt.createElement("template"),rm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Wt.createElementNS(im,t):e==="mathml"?Wt.createElementNS(sm,t):n?Wt.createElement(t,{is:n}):Wt.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Wt.createTextNode(t),createComment:t=>Wt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Vl.innerHTML=md(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Vl.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},gn="transition",Ni="animation",ss=Symbol("_vtc"),gd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},om=Se({},$u,gd),am=t=>(t.displayName="Transition",t.props=om,t),lm=am((t,{slots:e})=>tm(sp,cm(t),e)),Dn=(t,e=[])=>{K(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ml=t=>t?K(t)?t.some(e=>e.length>1):t.length>1:!1;function cm(t){const e={};for(const v in t)v in gd||(e[v]=t[v]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:E=`${n}-leave-to`}=t,x=um(s),R=x&&x[0],D=x&&x[1],{onBeforeEnter:S,onEnter:N,onEnterCancelled:X,onLeave:U,onLeaveCancelled:Z,onBeforeAppear:te=S,onAppear:y=N,onAppearCancelled:h=X}=e,f=(v,p,ce,st)=>{v._enterCancelled=st,On(v,p?u:a),On(v,p?c:o),ce&&ce()},b=(v,p)=>{v._isLeaving=!1,On(v,d),On(v,E),On(v,m),p&&p()},_=v=>(p,ce)=>{const st=v?y:N,ke=()=>f(p,v,ce);Dn(st,[p,ke]),Ll(()=>{On(p,v?l:r),Ht(p,v?u:a),Ml(st)||Fl(p,i,R,ke)})};return Se(e,{onBeforeEnter(v){Dn(S,[v]),Ht(v,r),Ht(v,o)},onBeforeAppear(v){Dn(te,[v]),Ht(v,l),Ht(v,c)},onEnter:_(!1),onAppear:_(!0),onLeave(v,p){v._isLeaving=!0;const ce=()=>b(v,p);Ht(v,d),v._enterCancelled?(Ht(v,m),Bl(v)):(Bl(v),Ht(v,m)),Ll(()=>{v._isLeaving&&(On(v,d),Ht(v,E),Ml(U)||Fl(v,i,D,ce))}),Dn(U,[v,ce])},onEnterCancelled(v){f(v,!1,void 0,!0),Dn(X,[v])},onAppearCancelled(v){f(v,!0,void 0,!0),Dn(h,[v])},onLeaveCancelled(v){b(v),Dn(Z,[v])}})}function um(t){if(t==null)return null;if(ae(t))return[Eo(t.enter),Eo(t.leave)];{const e=Eo(t);return[e,e]}}function Eo(t){return ch(t)}function Ht(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ss]||(t[ss]=new Set)).add(e)}function On(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[ss];n&&(n.delete(e),n.size||(t[ss]=void 0))}function Ll(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let dm=0;function Fl(t,e,n,i){const s=t._endId=++dm,r=()=>{s===t._endId&&i()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=fm(t,e);if(!o)return i();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,m),r()},m=E=>{E.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,m)}function fm(t,e){const n=window.getComputedStyle(t),i=x=>(n[x]||"").split(", "),s=i(`${gn}Delay`),r=i(`${gn}Duration`),o=Ul(s,r),a=i(`${Ni}Delay`),l=i(`${Ni}Duration`),c=Ul(a,l);let u=null,d=0,m=0;e===gn?o>0&&(u=gn,d=o,m=r.length):e===Ni?c>0&&(u=Ni,d=c,m=l.length):(d=Math.max(o,c),u=d>0?o>c?gn:Ni:null,m=u?u===gn?r.length:l.length:0);const E=u===gn&&/\b(?:transform|all)(?:,|$)/.test(i(`${gn}Property`).toString());return{type:u,timeout:d,propCount:m,hasTransform:E}}function Ul(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>$l(n)+$l(t[i])))}function $l(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Bl(t){return(t?t.ownerDocument:document).body.offsetHeight}function hm(t,e,n){const i=t[ss];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const jl=Symbol("_vod"),pm=Symbol("_vsh"),mm=Symbol(""),gm=/(?:^|;)\s*display\s*:/;function vm(t,e,n){const i=t.style,s=me(n);let r=!1;if(n&&!s){if(e)if(me(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Vi(i,a,"")}else for(const o in e)n[o]==null&&Vi(i,o,"");for(const o in n){o==="display"&&(r=!0);const a=n[o];a!=null?bm(t,o,!me(e)&&e?e[o]:void 0,a)||Vi(i,o,a):Vi(i,o,"")}}else if(s){if(e!==n){const o=i[mm];o&&(n+=";"+o),i.cssText=n,r=gm.test(n)}}else e&&t.removeAttribute("style");jl in t&&(t[jl]=r?i.display:"",t[pm]&&(i.display="none"))}const Hl=/\s*!important$/;function Vi(t,e,n){if(K(n))n.forEach(i=>Vi(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=ym(t,e);Hl.test(n)?t.setProperty(ii(i),n.replace(Hl,""),"important"):t[i]=n}}const Wl=["Webkit","Moz","ms"],Io={};function ym(t,e){const n=Io[e];if(n)return n;let i=bt(e);if(i!=="filter"&&i in t)return Io[e]=i;i=lu(i);for(let s=0;s<Wl.length;s++){const r=Wl[s]+i;if(r in t)return Io[e]=r}return e}function bm(t,e,n,i){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&me(i)&&n===i}const zl="http://www.w3.org/1999/xlink";function Kl(t,e,n,i,s,r=mh(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(zl,e.slice(6,e.length)):t.setAttributeNS(zl,e,n):n==null||r&&!uu(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Ut(n)?String(n):n)}function Gl(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?md(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=uu(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Un(t,e,n,i){t.addEventListener(e,n,i)}function _m(t,e,n,i){t.removeEventListener(e,n,i)}const ql=Symbol("_vei");function wm(t,e,n,i,s=null){const r=t[ql]||(t[ql]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=Em(e);if(i){const c=r[e]=Am(i,s);Un(t,a,c,l)}else o&&(_m(t,a,o,l),r[e]=void 0)}}const Jl=/(?:Once|Passive|Capture)$/;function Em(t){let e;if(Jl.test(t)){e={};let i;for(;i=t.match(Jl);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ii(t.slice(2)),e]}let To=0;const Im=Promise.resolve(),Tm=()=>To||(Im.then(()=>To=0),To=Date.now());function Am(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const s=n.value;if(K(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&ft(c,e,5,a)}}else ft(s,e,5,[i])};return n.value=t,n.attached=Tm(),n}const Yl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Sm=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?hm(t,i,o):e==="style"?vm(t,n,i):Mr(e)?Lr(e)||wm(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pm(t,e,i,o))?(Gl(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Kl(t,e,i,o,r,e!=="value")):t._isVueCE&&(km(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!me(i)))?Gl(t,bt(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Kl(t,e,i,o))};function Pm(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Yl(e)&&Y(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Yl(e)&&me(n)?!1:e in t}function km(t,e){const n=t._def.props;if(!n)return!1;const i=bt(e);return Array.isArray(n)?n.some(s=>bt(s)===i):Object.keys(n).some(s=>bt(s)===i)}const dr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return K(e)?n=>Hs(e,n):e};function Cm(t){t.target.composing=!0}function Xl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const pi=Symbol("_assign");function Zl(t,e,n){return e&&(t=t.trim()),n&&(t=$r(t)),t}const Mt={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[pi]=dr(s);const r=i||s.props&&s.props.type==="number";Un(t,e?"change":"input",o=>{o.target.composing||t[pi](Zl(t.value,n,r))}),(n||r)&&Un(t,"change",()=>{t.value=Zl(t.value,n,r)}),e||(Un(t,"compositionstart",Cm),Un(t,"compositionend",Xl),Un(t,"change",Xl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[pi]=dr(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?$r(t.value):t.value,l=e??"";if(a===l)return;const c=t.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l)}},vd={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=Fr(e);Un(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?$r(fr(o)):fr(o));t[pi](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,Cu(()=>{t._assigning=!1})}),t[pi]=dr(i)},mounted(t,{value:e}){Ql(t,e)},beforeUpdate(t,e,n){t[pi]=dr(n)},updated(t,{value:e}){t._assigning||Ql(t,e)}};function Ql(t,e){const n=t.multiple,i=K(e);if(!(n&&!i&&!Fr(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=fr(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=vh(e,a)>-1}else o.selected=e.has(a);else if(vs(fr(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function fr(t){return"_value"in t?t._value:t.value}const xm=["ctrl","shift","alt","meta"],Rm={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>xm.some(n=>t[`${n}Key`]&&!e.includes(n))},Sa=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=Rm[e[o]];if(a&&a(s,e))return}return t(s,...r)}))},Nm=Se({patchProp:Sm},rm);let ec;function Dm(){return ec||(ec=Fp(Nm))}const Om=((...t)=>{const e=Dm().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=Mm(i);if(!s)return;const r=e._component;!Y(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Vm(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Vm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Mm(t){return me(t)?document.querySelector(t):t}const Lm=()=>{};var tc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Fm=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},bd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let m=(a&15)<<2|c>>6,E=c&63;l||(E=64,o||(m=64)),i.push(n[u],n[d],n[m],n[E])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(yd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Fm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw new Um;const m=r<<2|a>>4;if(i.push(m),c!==64){const E=a<<4&240|c>>2;if(i.push(E),d!==64){const x=c<<6&192|d;i.push(x)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Um extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $m=function(t){const e=yd(t);return bd.encodeByteArray(e,!0)},hr=function(t){return $m(t).replace(/\./g,"")},_d=function(t){try{return bd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=()=>Bm().__FIREBASE_DEFAULTS__,Hm=()=>{if(typeof process>"u"||typeof tc>"u")return;const t=tc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Wm=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_d(t[1]);return e&&JSON.parse(e)},Pa=()=>{try{return Lm()||jm()||Hm()||Wm()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wd=t=>{var e,n;return(n=(e=Pa())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},zm=t=>{const e=wd(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},Ed=()=>{var t;return(t=Pa())==null?void 0:t.config},Id=t=>{var e;return(e=Pa())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...t};return[hr(JSON.stringify(n)),hr(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function qm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Jm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ym(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Xm(){const t=Ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Zm(){try{return typeof indexedDB=="object"}catch{return!1}}function Qm(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)==null?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg="FirebaseError";class fn extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=eg,Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_s.prototype.create)}}class _s{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?tg(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new fn(s,a,i)}}function tg(t,e){try{let n=0,i="";for(;n<t.length;){const s=t.indexOf("{$",n);if(s===-1){i+=t.substring(n);break}const r=t.indexOf("}",s+2);if(r===-1){i+=t.substring(n);break}const o=t.substring(s+2,r),a=e[o];i+=t.substring(n,s)+(a!=null?String(a):`<${o}?>`),n=r+1}return i}catch{return t}}function ng(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Kn(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(nc(r)&&nc(o)){if(!Kn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function nc(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Mi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Li(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ig(t,e){const n=new sg(t,e);return n.subscribe.bind(n)}class sg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");rg(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Ao),s.error===void 0&&(s.error=Ao),s.complete===void 0&&(s.complete=Ao);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ao(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ad(t){return(await fetch(t,{credentials:"include"})).ok}class Gn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new Td;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lg(e))try{this.getOrInitializeService({instanceIdentifier:Mn})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Mn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mn){return this.instances.has(e)}getOptions(e=Mn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ag(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Mn){return this.component?this.component.multipleInstances?e:Mn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ag(t){return t===Mn?void 0:t}function lg(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new og(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const ug={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},dg=oe.INFO,fg={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},hg=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=fg[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ka{constructor(e){this.name=e,this._logLevel=dg,this._logHandler=hg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ug[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const pg=(t,e)=>e.some(n=>t instanceof n);let ic,sc;function mg(){return ic||(ic=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gg(){return sc||(sc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sd=new WeakMap,Yo=new WeakMap,Pd=new WeakMap,So=new WeakMap,Ca=new WeakMap;function vg(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(An(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Sd.set(n,t)}).catch(()=>{}),Ca.set(e,t),e}function yg(t){if(Yo.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Yo.set(t,e)}let Xo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return An(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bg(t){Xo=t(Xo)}function _g(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Po(this),e,...n);return Pd.set(i,e.sort?e.sort():[e]),An(i)}:gg().includes(t)?function(...e){return t.apply(Po(this),e),An(Sd.get(this))}:function(...e){return An(t.apply(Po(this),e))}}function wg(t){return typeof t=="function"?_g(t):(t instanceof IDBTransaction&&yg(t),pg(t,mg())?new Proxy(t,Xo):t)}function An(t){if(t instanceof IDBRequest)return vg(t);if(So.has(t))return So.get(t);const e=wg(t);return e!==t&&(So.set(t,e),Ca.set(e,t)),e}const Po=t=>Ca.get(t);function Eg(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=An(o);return i&&o.addEventListener("upgradeneeded",l=>{i(An(o.result),l.oldVersion,l.newVersion,An(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Ig=["get","getKey","getAll","getAllKeys","count"],Tg=["put","add","delete","clear"],ko=new Map;function rc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ko.get(e))return ko.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Tg.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Ig.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return ko.set(e,r),r}bg(t=>({...t,get:(e,n,i)=>rc(e,n)||t.get(e,n,i),has:(e,n)=>!!rc(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Sg(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Sg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zo="@firebase/app",oc="0.16.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new ka("@firebase/app"),Pg="@firebase/app-compat",kg="@firebase/analytics-compat",Cg="@firebase/analytics",xg="@firebase/app-check-compat",Rg="@firebase/app-check",Ng="@firebase/auth",Dg="@firebase/auth-compat",Og="@firebase/database",Vg="@firebase/data-connect",Mg="@firebase/database-compat",Lg="@firebase/functions",Fg="@firebase/functions-compat",Ug="@firebase/installations",$g="@firebase/installations-compat",Bg="@firebase/messaging",jg="@firebase/messaging-compat",Hg="@firebase/performance",Wg="@firebase/performance-compat",zg="@firebase/remote-config",Kg="@firebase/remote-config-compat",Gg="@firebase/storage",qg="@firebase/storage-compat",Jg="@firebase/firestore",Yg="@firebase/ai",Xg="@firebase/firestore-compat",Zg="firebase",Qg="13.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo="[DEFAULT]",ev={[Zo]:"fire-core",[Pg]:"fire-core-compat",[Cg]:"fire-analytics",[kg]:"fire-analytics-compat",[Rg]:"fire-app-check",[xg]:"fire-app-check-compat",[Ng]:"fire-auth",[Dg]:"fire-auth-compat",[Og]:"fire-rtdb",[Vg]:"fire-data-connect",[Mg]:"fire-rtdb-compat",[Lg]:"fire-fn",[Fg]:"fire-fn-compat",[Ug]:"fire-iid",[$g]:"fire-iid-compat",[Bg]:"fire-fcm",[jg]:"fire-fcm-compat",[Hg]:"fire-perf",[Wg]:"fire-perf-compat",[zg]:"fire-rc",[Kg]:"fire-rc-compat",[Gg]:"fire-gcs",[qg]:"fire-gcs-compat",[Jg]:"fire-fst",[Xg]:"fire-fst-compat",[Yg]:"fire-vertex","fire-js":"fire-js",[Zg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=new Map,tv=new Map,ea=new Map;function ac(t,e){try{t.container.addComponent(e)}catch(n){an.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yi(t){const e=t.name;if(ea.has(e))return an.debug(`There were multiple attempts to register component ${e}.`),!1;ea.set(e,t);for(const n of rs.values())ac(n,t);for(const n of tv.values())ac(n,t);return!0}function xa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xe(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Jt=new _s("app","Firebase",nv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=Qg;function kd(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:Qo,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw Jt.create("bad-app-name",{appName:String(s)});if(n||(n=Ed()),!n)throw Jt.create("no-options");const r=rs.get(s);if(r)if(Kn(n,r.options)){if(Kn(i,r.config))return r;throw Jt.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(r.config),newValue:JSON.stringify(i)})}else throw Jt.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(r.options),newValue:JSON.stringify(n)});const o=new cg(s);for(const l of ea.values())o.addComponent(l);const a=new iv(n,i,o);return rs.set(s,a),a}function Cd(t=Qo){const e=rs.get(t);if(!e&&t===Qo&&Ed())return kd();if(!e)throw Jt.create("no-app",{appName:t});return e}function sv(){return Array.from(rs.values())}function Sn(t,e,n){let i=ev[t]??t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),an.warn(o.join(" "));return}yi(new Gn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv="firebase-heartbeat-database",ov=1,os="firebase-heartbeat-store";let Co=null;function xd(){return Co||(Co=Eg(rv,ov,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(os)}catch(n){console.warn(n)}}}}).catch(t=>{throw Jt.create("idb-open",{originalErrorMessage:t.message})})),Co}async function av(t){try{const n=(await xd()).transaction(os),i=await n.objectStore(os).get(Rd(t));return await n.done,i}catch(e){if(e instanceof fn)an.warn(e.message);else{const n=Jt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});an.warn(n.message)}}}async function lc(t,e){try{const i=(await xd()).transaction(os,"readwrite");await i.objectStore(os).put(e,Rd(t)),await i.done}catch(n){if(n instanceof fn)an.warn(n.message);else{const i=Jt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});an.warn(i.message)}}}function Rd(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lv=1024,cv=30;class uv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fv(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=cc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>cv){const o=hv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){an.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=cc(),{heartbeatsToSend:i,unsentEntries:s}=dv(this._heartbeatsCache.heartbeats),r=hr(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return an.warn(n),""}}}function cc(){return new Date().toISOString().substring(0,10)}function dv(t,e=lv){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),uc(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),uc(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class fv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Zm()?Qm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await av(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return lc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return lc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function uc(t){return hr(JSON.stringify({version:2,heartbeats:t})).length}function hv(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(t){yi(new Gn("platform-logger",e=>new Ag(e),"PRIVATE")),yi(new Gn("heartbeat",e=>new uv(e),"PRIVATE")),Sn(Zo,oc,t),Sn(Zo,oc,"esm2020"),Sn("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pv("");function Nd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mv=Nd,Dd=new _s("auth","Firebase",Nd());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new ka("@firebase/auth");function Gs(t,...e){pr.logLevel<=oe.WARN&&pr.warn(`Auth (${Ii}): ${t}`,...e)}function qs(t,...e){pr.logLevel<=oe.ERROR&&pr.error(`Auth (${Ii}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,...e){throw Ra(t,...e)}function wt(t,...e){return Ra(t,...e)}function Qr(t,e,n){const i={...mv(),[e]:n};return new _s("auth","Firebase",i).create(e,{appName:t.name})}function en(t){return Qr(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gv(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&ht(t,"argument-error"),Qr(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ra(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Dd.create(t,...e)}function G(t,e,...n){if(!t)throw Ra(e,...n)}function Yt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qs(e),new Error(e)}function ln(t,e){t||Yt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function vv(){return dc()==="http:"||dc()==="https:"}function dc(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(vv()||Jm()||"connection"in navigator)?navigator.onLine:!0}function bv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n){this.shortDelay=e,this.longDelay=n,ln(n>e,"Short delay should be less than long delay!"),this.isMobile=Gm()||Ym()}get(){return yv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(t,e){ln(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Ev=new Is(3e4,6e4);function hn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function $t(t,e,n,i,s={}){return Vd(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=ws({...o,key:t.config.apiKey}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...r};return qm()||(c.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&Es(t.emulatorConfig.host)&&(c.credentials="include"),Od.fetch()(await Md(t,t.config.apiHost,n,a),c)})}async function Vd(t,e,n){t._canInitEmulator=!1;const i={..._v,...e};try{const s=new Tv(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Us(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Us(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Us(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Us(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Qr(t,u,c);ht(t,u)}}catch(s){if(s instanceof fn)throw s;ht(t,"network-request-failed",{message:String(s)})}}async function Ts(t,e,n,i,s={}){const r=await $t(t,e,n,i,s);return"mfaPendingCredential"in r&&ht(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function Md(t,e,n,i){const s=`${e}${n}?${i}`,r=t,o=r.config.emulator?Na(t.config,s):`${t.config.apiScheme}://${s}`;return wv.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function Iv(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Tv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(wt(this.auth,"network-request-failed")),Ev.get())})}}function Us(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=wt(t,e,i);return s.customData._tokenResponse=n,s}function fc(t){return t!==void 0&&t.enterprise!==void 0}class Av{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Iv(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Sv(t,e){return $t(t,"GET","/v2/recaptchaConfig",hn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pv(t,e){return $t(t,"POST","/v1/accounts:delete",e)}async function mr(t,e){return $t(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kv(t,e=!1){const n=Pe(t),i=await n.getIdToken(e),s=Da(i);G(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:qi(xo(s.auth_time)),issuedAtTime:qi(xo(s.iat)),expirationTime:qi(xo(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function xo(t){return Number(t)*1e3}function Da(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return qs("JWT malformed, contained fewer than 3 sections"),null;try{const s=_d(n);return s?JSON.parse(s):(qs("Failed to decode base64 JWT payload"),null)}catch(s){return qs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function hc(t){const e=Da(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw Ld(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Ld(t){return t instanceof fn?t.code==="auth/user-disabled"||t.code==="auth/user-token-expired":!1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qi(this.lastLoginAt),this.creationTime=qi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gr(t){var d;const e=t.auth,n=await t.getIdToken(),i=await bi(t,mr(e,{idToken:n}));G(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const r=(d=s.providerUserInfo)!=null&&d.length?Fd(s.providerUserInfo):[],o=Rv(t.providerData,r),a=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=a?l:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new na(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,u)}async function xv(t){const e=Pe(t);await gr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Rv(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Fd(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nv(t,e){const n=await Vd(t,{},async()=>{const i=ws({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=await Md(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:i};return t.emulatorConfig&&Es(t.emulatorConfig.host)&&(l.credentials="include"),Od.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Dv(t,e){return $t(t,"POST","/v2/accounts:revokeToken",hn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=hc(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await Nv(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new mi;return i&&(G(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(G(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(G(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new mi,this.toJSON())}_performRefresh(){return Yt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vt{constructor({uid:e,auth:n,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new Cv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new na(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await bi(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kv(this,e)}reload(){return xv(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await gr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xe(this.auth.app))return Promise.reject(en(this.auth));const e=await this.getIdToken();return await bi(this,Pv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,s=n.email??void 0,r=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:d,emailVerified:m,isAnonymous:E,providerData:x,stsTokenManager:R}=n;G(d&&R,e,"internal-error");const D=mi.fromJSON(this.name,R);G(typeof d=="string",e,"internal-error"),vn(i,e.name),vn(s,e.name),G(typeof m=="boolean",e,"internal-error"),G(typeof E=="boolean",e,"internal-error"),vn(r,e.name),vn(o,e.name),vn(a,e.name),vn(l,e.name),vn(c,e.name),vn(u,e.name);const S=new vt({uid:d,auth:e,email:s,emailVerified:m,displayName:i,isAnonymous:E,photoURL:o,phoneNumber:r,tenantId:a,stsTokenManager:D,createdAt:c,lastLoginAt:u});return x&&Array.isArray(x)&&(S.providerData=x.map(N=>({...N}))),l&&(S._redirectEventId=l),S}static async _fromIdTokenResponse(e,n,i=!1){const s=new mi;s.updateFromServerResponse(n);const r=new vt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await gr(r),r}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];G(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Fd(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new mi;a.updateFromIdToken(i);const l=new vt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new na(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=new Map;function Xt(t){ln(t instanceof Function,"Expected a class definition");let e=pc.get(t);return e?(ln(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pc.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ud.type="NONE";const mc=Ud;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t,e,n){return`firebase:${t}:${e}:${n}`}class zn{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Js(this.userKey,s.apiKey,r),this.fullPersistenceKey=Js("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await mr(this.auth,{idToken:e}).catch(()=>{});return n?vt._fromGetAccountInfoResponse(this.auth,n,e):null}return vt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,n,i="authUser"){if(!n.length)return new zn(Xt(mc),e,i);const s=(await Promise.all(n.map(async c=>{try{if(await c._isAvailable())return c}catch{return}}))).filter(c=>c);let r=s[0]||Xt(mc);const o=Js(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){let d;if(typeof u=="string"){const m=await mr(e,{idToken:u}).catch(()=>{});if(!m)break;d=await vt._fromGetAccountInfoResponse(e,m,u)}else d=vt._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new zn(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new zn(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($d(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zd(e))return"Blackberry";if(Kd(e))return"Webos";if(Bd(e))return"Safari";if((e.includes("chrome/")||jd(e))&&!e.includes("edge/"))return"Chrome";if(Wd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function $d(t=Ke()){return/firefox\//i.test(t)}function Bd(t=Ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jd(t=Ke()){return/crios\//i.test(t)}function Hd(t=Ke()){return/iemobile/i.test(t)}function Wd(t=Ke()){return/android/i.test(t)}function zd(t=Ke()){return/blackberry/i.test(t)}function Kd(t=Ke()){return/webos/i.test(t)}function Oa(t=Ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ov(t=Ke()){var e;return Oa(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Vv(){return Xm()&&document.documentMode===10}function Gd(t=Ke()){return Oa(t)||Wd(t)||Kd(t)||zd(t)||/windows phone/i.test(t)||Hd(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qd(t,e=[]){let n;switch(t){case"Browser":n=gc(Ke());break;case"Worker":n=`${gc(Ke())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ii}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lv(t,e={}){return $t(t,"GET","/v2/passwordPolicy",hn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv=6;class Uv{constructor(e){var i;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Fv,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $v{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vc(this),this.idTokenSubscription=new vc(this),this.beforeStateQueue=new Mv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xt(n)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted){try{this.persistenceManager=await zn.create(this,e)}catch(o){Gs(`Failed to initialize persistence: ${o}`),this.persistenceManager=await zn.create(this,[])}finally{(i=this._resolvePersistenceManagerAvailable)==null||i.call(this)}if(!this._deleted){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(n)}catch(o){Gs(`Failed to initialize current user: ${o}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await mr(this,{idToken:e}),i=await vt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(Xe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await gr(e)}catch(n){if(Ld(n))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xe(this.app))return Promise.reject(en(this));const n=e?Pe(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xe(this.app)?Promise.reject(en(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xe(this.app)?Promise.reject(en(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Lv(this),n=new Uv(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _s("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await Dv(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xt(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await zn.create(this,[Xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}).catch(l=>{if(!o)if(typeof n!="function"&&n.error)n.error(l);else if(i)i(l);else throw l}),typeof n=="function"){const l=e.addObserver(n,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(n){const i=(n==null?void 0:n.message)||String(n),s=Qr(this,"internal-error",`An internal AuthError has occurred: ${i}`);throw s.customData={originalError:n},s}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var n;if(Xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&Gs(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function pn(t){return Pe(t)}class vc{constructor(e){this.auth=e,this.observer=null,this.addObserver=ig(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Bv(t){eo=t}function Jd(t){return eo.loadJS(t)}function jv(){return eo.recaptchaEnterpriseScript}function Hv(){return eo.gapiScript}function Wv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class zv{constructor(){this.enterprise=new Kv}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Kv{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv="recaptcha-enterprise",Yd="NO_RECAPTCHA",yc="onFirebaseAuthREInstanceReady";class _n{constructor(e){this.type=Gv,this.auth=pn(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Sv(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new Av(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;fc(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Yd)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new zv().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(async a=>{if(!n&&fc(window.grecaptcha)&&_n.scriptInjectionDeferred)await _n.scriptInjectionDeferred.promise,s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=jv();l.length!==0&&(l+=a+`&onload=${yc}`),_n.scriptInjectionDeferred=new Td,window[yc]=()=>{var c;(c=_n.scriptInjectionDeferred)==null||c.resolve()},Jd(l).then(()=>{var c;return(c=_n.scriptInjectionDeferred)==null?void 0:c.promise}).then(()=>{s(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}_n.scriptInjectionDeferred=null;async function bc(t,e,n,i=!1,s=!1){const r=new _n(t);let o;if(s)o=Yd;else try{o=await r.verify(n)}catch{o=await r.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function vr(t,e,n,i,s){var r;if((r=t._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await bc(t,e,n,n==="getOobCode");return i(t,o)}else return i(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await bc(t,e,n,n==="getOobCode");return i(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(t,e){const n=xa(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(Kn(r,e??{}))return s;ht(s,"already-initialized")}return n.initialize({options:e})}function Jv(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Yv(t,e,n){const i=pn(t);G(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=Xd(e),{host:o,port:a}=Xv(e),l=a===null?"":`:${a}`,c={url:`${r}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){G(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),G(Kn(c,i.config.emulator)&&Kn(u,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=c,i.emulatorConfig=u,i.settings.appVerificationDisabledForTesting=!0,Es(o)?Ad(`${r}//${o}${l}`):Zv()}function Xd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Xv(t){const e=Xd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:_c(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:_c(o)}}}function _c(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Zv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yt("not implemented")}_getIdTokenResponse(e){return Yt("not implemented")}_linkToIdToken(e,n){return Yt("not implemented")}_getReauthenticationResolver(e){return Yt("not implemented")}}async function Qv(t,e){return $t(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e0(t,e){return Ts(t,"POST","/v1/accounts:signInWithPassword",hn(t,e))}async function t0(t,e){return $t(t,"POST","/v1/accounts:sendOobCode",hn(t,e))}async function n0(t,e){return t0(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i0(t,e){return Ts(t,"POST","/v1/accounts:signInWithEmailLink",hn(t,e))}async function s0(t,e){return Ts(t,"POST","/v1/accounts:signInWithEmailLink",hn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends Va{constructor(e,n,i,s=null){super("password",i),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new as(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new as(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vr(e,n,"signInWithPassword",e0);case"emailLink":return i0(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return vr(e,i,"signUpPassword",Qv);case"emailLink":return s0(e,{idToken:n,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(t,e){return Ts(t,"POST","/v1/accounts:signInWithIdp",hn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0="http://localhost";class qn extends Va{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...r}=n;if(!i||!s)return null;const o=new qn(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gi(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,gi(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gi(e,n)}buildRequest(){const e={requestUri:r0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ws(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function a0(t){const e=Mi(Li(t)).link,n=e?Mi(Li(e)).deep_link_id:null,i=Mi(Li(t)).deep_link_id;return(i?Mi(Li(i)).link:null)||i||n||e||t}class Ma{constructor(e){const n=Mi(Li(e)),i=n.apiKey??null,s=n.oobCode??null,r=o0(n.mode??null);G(i&&s&&r,"argument-error"),this.apiKey=i,this.operation=r,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=a0(e);try{return new Ma(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(){this.providerId=Ti.PROVIDER_ID}static credential(e,n){return as._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Ma.parseLink(n);return G(i,"argument-error"),as._fromEmailAndCode(e,i.code,i.tenantId)}}Ti.PROVIDER_ID="password";Ti.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ti.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As extends La{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends As{constructor(){super("facebook.com")}static credential(e){return qn._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt extends As{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qn._fromParams({providerId:qt.PROVIDER_ID,signInMethod:qt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qt.credentialFromTaggedObject(e)}static credentialFromError(e){return qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return qt.credential(n,i)}catch{return null}}}qt.GOOGLE_SIGN_IN_METHOD="google.com";qt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends As{constructor(){super("github.com")}static credential(e){return qn._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends As{constructor(){super("twitter.com")}static credential(e,n){return qn._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return In.credential(n,i)}catch{return null}}}In.TWITTER_SIGN_IN_METHOD="twitter.com";In.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l0(t,e){return Ts(t,"POST","/v1/accounts:signUp",hn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await vt._fromIdTokenResponse(e,i,s),o=wc(i);return new Jn({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=wc(i);return new Jn({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function wc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends fn{constructor(e,n,i,s){super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,yr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new yr(e,n,i,s)}}function Zd(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?yr._fromErrorAndOperation(t,r,e,i):r})}async function c0(t,e,n=!1){const i=await bi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jn._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u0(t,e,n=!1){const{auth:i}=t;if(Xe(i.app))return Promise.reject(en(i));const s="reauthenticate";try{const r=await bi(t,Zd(i,s,e,t),n);G(r.idToken,i,"internal-error");const o=Da(r.idToken);G(o,i,"internal-error");const{sub:a}=o;return G(t.uid===a,i,"user-mismatch"),Jn._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ht(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qd(t,e,n=!1){if(Xe(t.app))return Promise.reject(en(t));const i="signIn",s=await Zd(t,i,e),r=await Jn._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function d0(t,e){return Qd(pn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ef(t){const e=pn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function f0(t,e,n){const i=pn(t);await vr(i,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",n0)}async function h0(t,e,n){if(Xe(t.app))return Promise.reject(en(t));const i=pn(t),o=await vr(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",l0).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&ef(t),l}),a=await Jn._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function p0(t,e,n){return Xe(t.app)?Promise.reject(en(t)):d0(Pe(t),Ti.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&ef(t),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m0(t,e){return $t(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g0(t,e){const{displayName:n,photoURL:i}=e;if(n===void 0&&i===void 0)return;const s=Pe(t),o={idToken:await s.getIdToken(),displayName:n,photoUrl:i,returnSecureToken:!0},a=await bi(s,m0(s.auth,o));s.displayName=a.displayName||null,s.photoURL=a.photoUrl||null;const l=s.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=s.displayName,l.photoURL=s.photoURL),await s._updateTokensIfNecessary(a)}function v0(t,e,n,i){return Pe(t).onIdTokenChanged(e,n,i)}function y0(t,e,n){return Pe(t).beforeAuthStateChanged(e,n)}function b0(t,e,n,i){return Pe(t).onAuthStateChanged(e,n,i)}function _0(t){return Pe(t).signOut()}const br="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(br,"1"),this.storage.removeItem(br),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0=1e3,E0=10;class nf extends tf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Gd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Vv()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,E0):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},w0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}nf.type="LOCAL";const I0=nf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf extends tf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}sf.type="SESSION";const rf=sf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new to(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await T0(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}to.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Fa("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const m=d;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(m.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return window}function S0(t){Lt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function P0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function k0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function C0(){return of()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af="firebaseLocalStorageDb",x0=1,_r="firebaseLocalStorage",lf="fbase_key";class Ss{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function no(t,e){return t.transaction([_r],e?"readwrite":"readonly").objectStore(_r)}function R0(){const t=indexedDB.deleteDatabase(af);return new Ss(t).toPromise()}function cf(){const t=indexedDB.open(af,x0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(_r,{keyPath:lf})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(_r)?e(i):(i.close(),await R0(),e(await cf()))})})}async function Ec(t,e,n){const i=no(t,!0).put({[lf]:e,value:n});return new Ss(i).toPromise()}async function N0(t,e){const n=no(t,!1).get(e),i=await new Ss(n).toPromise();return i===void 0?null:i.value}function Ic(t,e){const n=no(t,!0).delete(e);return new Ss(n).toPromise()}const D0=800,O0=3;class uf{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=cf(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>O0)throw i;if(this.dbPromise){const s=this.dbPromise;this.dbPromise=null;try{(await s).close()}catch{}}}}async initializeServiceWorkerMessaging(){return of()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=to._getInstance(C0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await P0(),!this.activeServiceWorker)return;this.sender=new A0(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||k0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Ec(e,br,"1"),await Ic(e,br)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Ec(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>N0(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ic(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(s=>{const r=no(s,!1).getAll();return new Ss(r).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}catch(e){return this.isClosing||Gs(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),D0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}uf.type="LOCAL";const V0=uf;new Is(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(t,e){return e?Xt(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends Va{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function M0(t){return Qd(t.auth,new Ua(t),t.bypassAuthState)}function L0(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),u0(n,new Ua(t),t.bypassAuthState)}async function F0(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),c0(n,new Ua(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return M0;case"linkViaPopup":case"linkViaRedirect":return F0;case"reauthViaPopup":case"reauthViaRedirect":return L0;default:ht(this.auth,"internal-error")}}resolve(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=new Is(2e3,1e4);async function $0(t,e,n){if(Xe(t.app))return Promise.reject(wt(t,"operation-not-supported-in-this-environment"));const i=pn(t);gv(t,e,La);const s=df(i,n);return new $n(i,"signInViaPopup",e,s).executeNotNull()}class $n extends ff{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,$n.currentPopupAction&&$n.currentPopupAction.cancel(),$n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){ln(this.filter.length===1,"Popup operations only handle one event");const e=Fa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)==null?void 0:n.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,U0.get())};e()}}$n.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0="pendingRedirect",Ys=new Map;class j0 extends ff{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Ys.get(this.auth._key());if(!e){try{const i=await H0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Ys.set(this.auth._key(),e)}return this.bypassAuthState||Ys.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function H0(t,e){const n=K0(e),i=z0(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function W0(t,e){Ys.set(t._key(),e)}function z0(t){return Xt(t._redirectPersistence)}function K0(t){return Js(B0,t.config.apiKey,t.name)}async function G0(t,e,n=!1){if(Xe(t.app))return Promise.reject(en(t));const i=pn(t),s=df(i,e),o=await new j0(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=600*1e3;class J0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Y0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!hf(e)){const s=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";n.onError(wt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=q0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tc(e))}saveEventToCache(e){this.cachedEventUids.add(Tc(e)),this.lastProcessedEventTime=Date.now()}}function Tc(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function hf({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Y0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hf(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X0(t,e={}){return $t(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Q0=/^https?/;async function ey(t){if(t.config.emulator)return;const{authorizedDomains:e}=await X0(t);for(const n of e)try{if(ty(n))return}catch{}ht(t,"unauthorized-domain")}function ty(t){const e=ta(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!Q0.test(n))return!1;if(Z0.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny=new Is(3e4,6e4);function Ac(){const t=Lt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function iy(t){return new Promise((e,n)=>{var s,r,o;function i(){Ac(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ac(),n(wt(t,"network-request-failed"))},timeout:ny.get()})}if((r=(s=Lt().gapi)==null?void 0:s.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=Lt().gapi)!=null&&o.load)i();else{const a=Wv("iframefcb");return Lt()[a]=()=>{gapi.load?i():n(wt(t,"network-request-failed"))},Jd(`${Hv()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Xs=null,e})}let Xs=null;function sy(t){return Xs=Xs||iy(t),Xs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=new Is(5e3,15e3),oy="__/auth/iframe",ay="emulator/auth/iframe",ly={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uy(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Na(e,ay):`https://${t.config.authDomain}/${oy}`,i={apiKey:e.apiKey,appName:t.name,v:Ii},s=cy.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${ws(i).slice(1)}`}async function dy(t){const e=await sy(t),n=Lt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:uy(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ly,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=wt(t,"network-request-failed"),a=Lt().setTimeout(()=>{r(o)},ry.get());function l(){Lt().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hy=500,py=600,my="_blank",gy="http://localhost";class Sc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vy(t,e,n,i=hy,s=py){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l={...fy,width:i.toString(),height:s.toString(),top:r,left:o},c=Ke().toLowerCase();n&&(a=jd(c)?my:n),$d(c)&&(e=e||gy,l.scrollbars="yes");const u=Object.entries(l).reduce((m,[E,x])=>`${m}${E}=${x},`,"");if(Ov(c)&&a!=="_self")return yy(e||"",a),new Sc(null);const d=window.open(e||"",a,u);G(d,t,"popup-blocked");try{d.focus()}catch{}return new Sc(d)}function yy(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by="__/auth/handler",_y="emulator/auth/handler",wy=encodeURIComponent("fac");async function Pc(t,e,n,i,s,r){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Ii,eventId:s};if(e instanceof La){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ng(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof As){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${wy}=${encodeURIComponent(l)}`:"";return`${Ey(t)}?${ws(a).slice(1)}${c}`}function Ey({config:t}){return t.emulator?Na(t,_y):`https://${t.authDomain}/${by}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro="webStorageSupport";class Iy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rf,this._completeRedirectFn=G0,this._overrideRedirectResult=W0}async _openPopup(e,n,i,s){var o;ln((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await Pc(e,n,i,ta(),s);return vy(e,r,Fa())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await Pc(e,n,i,ta(),s);return S0(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(ln(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await dy(e),i=new J0(e);return n.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ro,{type:Ro},s=>{var o;const r=(o=s==null?void 0:s[0])==null?void 0:o[Ro];r!==void 0&&n(!!r),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ey(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Gd()||Bd()||Oa()}}const Ty=Iy;var kc="@firebase/auth",Cc="1.13.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Py(t){yi(new Gn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qd(t)},c=new $v(i,s,r,l);return Jv(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),yi(new Gn("auth-internal",e=>{const n=pn(e.getProvider("auth").getImmediate());return(i=>new Ay(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(kc,Cc,Sy(t)),Sn(kc,Cc,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=300,Cy=Id("authIdTokenMaxAge")||ky;let xc=null;const xy=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Cy)return;const s=n==null?void 0:n.token;xc!==s&&(xc=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function _i(t=Cd()){const e=xa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qv(t,{popupRedirectResolver:Ty,persistence:[V0,I0,rf]}),i=Id("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=xy(r.toString());y0(n,o,()=>o(n.currentUser)),v0(n,a=>o(a))}}const s=wd("auth");return s&&Yv(n,`http://${s}`),n}function Ry(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Bv({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=wt("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",Ry().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Py("Browser");var Ny="firebase",Dy="13.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn(Ny,Dy,"app");var Rc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pf;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,h){function f(){}f.prototype=h.prototype,y.F=h.prototype,y.prototype=new f,y.prototype.constructor=y,y.D=function(b,_,v){for(var p=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)p[ce-2]=arguments[ce];return h.prototype[_].apply(b,p)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,n),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(y,h,f){f||(f=0);const b=Array(16);if(typeof h=="string")for(var _=0;_<16;++_)b[_]=h.charCodeAt(f++)|h.charCodeAt(f++)<<8|h.charCodeAt(f++)<<16|h.charCodeAt(f++)<<24;else for(_=0;_<16;++_)b[_]=h[f++]|h[f++]<<8|h[f++]<<16|h[f++]<<24;h=y.g[0],f=y.g[1],_=y.g[2];let v=y.g[3],p;p=h+(v^f&(_^v))+b[0]+3614090360&4294967295,h=f+(p<<7&4294967295|p>>>25),p=v+(_^h&(f^_))+b[1]+3905402710&4294967295,v=h+(p<<12&4294967295|p>>>20),p=_+(f^v&(h^f))+b[2]+606105819&4294967295,_=v+(p<<17&4294967295|p>>>15),p=f+(h^_&(v^h))+b[3]+3250441966&4294967295,f=_+(p<<22&4294967295|p>>>10),p=h+(v^f&(_^v))+b[4]+4118548399&4294967295,h=f+(p<<7&4294967295|p>>>25),p=v+(_^h&(f^_))+b[5]+1200080426&4294967295,v=h+(p<<12&4294967295|p>>>20),p=_+(f^v&(h^f))+b[6]+2821735955&4294967295,_=v+(p<<17&4294967295|p>>>15),p=f+(h^_&(v^h))+b[7]+4249261313&4294967295,f=_+(p<<22&4294967295|p>>>10),p=h+(v^f&(_^v))+b[8]+1770035416&4294967295,h=f+(p<<7&4294967295|p>>>25),p=v+(_^h&(f^_))+b[9]+2336552879&4294967295,v=h+(p<<12&4294967295|p>>>20),p=_+(f^v&(h^f))+b[10]+4294925233&4294967295,_=v+(p<<17&4294967295|p>>>15),p=f+(h^_&(v^h))+b[11]+2304563134&4294967295,f=_+(p<<22&4294967295|p>>>10),p=h+(v^f&(_^v))+b[12]+1804603682&4294967295,h=f+(p<<7&4294967295|p>>>25),p=v+(_^h&(f^_))+b[13]+4254626195&4294967295,v=h+(p<<12&4294967295|p>>>20),p=_+(f^v&(h^f))+b[14]+2792965006&4294967295,_=v+(p<<17&4294967295|p>>>15),p=f+(h^_&(v^h))+b[15]+1236535329&4294967295,f=_+(p<<22&4294967295|p>>>10),p=h+(_^v&(f^_))+b[1]+4129170786&4294967295,h=f+(p<<5&4294967295|p>>>27),p=v+(f^_&(h^f))+b[6]+3225465664&4294967295,v=h+(p<<9&4294967295|p>>>23),p=_+(h^f&(v^h))+b[11]+643717713&4294967295,_=v+(p<<14&4294967295|p>>>18),p=f+(v^h&(_^v))+b[0]+3921069994&4294967295,f=_+(p<<20&4294967295|p>>>12),p=h+(_^v&(f^_))+b[5]+3593408605&4294967295,h=f+(p<<5&4294967295|p>>>27),p=v+(f^_&(h^f))+b[10]+38016083&4294967295,v=h+(p<<9&4294967295|p>>>23),p=_+(h^f&(v^h))+b[15]+3634488961&4294967295,_=v+(p<<14&4294967295|p>>>18),p=f+(v^h&(_^v))+b[4]+3889429448&4294967295,f=_+(p<<20&4294967295|p>>>12),p=h+(_^v&(f^_))+b[9]+568446438&4294967295,h=f+(p<<5&4294967295|p>>>27),p=v+(f^_&(h^f))+b[14]+3275163606&4294967295,v=h+(p<<9&4294967295|p>>>23),p=_+(h^f&(v^h))+b[3]+4107603335&4294967295,_=v+(p<<14&4294967295|p>>>18),p=f+(v^h&(_^v))+b[8]+1163531501&4294967295,f=_+(p<<20&4294967295|p>>>12),p=h+(_^v&(f^_))+b[13]+2850285829&4294967295,h=f+(p<<5&4294967295|p>>>27),p=v+(f^_&(h^f))+b[2]+4243563512&4294967295,v=h+(p<<9&4294967295|p>>>23),p=_+(h^f&(v^h))+b[7]+1735328473&4294967295,_=v+(p<<14&4294967295|p>>>18),p=f+(v^h&(_^v))+b[12]+2368359562&4294967295,f=_+(p<<20&4294967295|p>>>12),p=h+(f^_^v)+b[5]+4294588738&4294967295,h=f+(p<<4&4294967295|p>>>28),p=v+(h^f^_)+b[8]+2272392833&4294967295,v=h+(p<<11&4294967295|p>>>21),p=_+(v^h^f)+b[11]+1839030562&4294967295,_=v+(p<<16&4294967295|p>>>16),p=f+(_^v^h)+b[14]+4259657740&4294967295,f=_+(p<<23&4294967295|p>>>9),p=h+(f^_^v)+b[1]+2763975236&4294967295,h=f+(p<<4&4294967295|p>>>28),p=v+(h^f^_)+b[4]+1272893353&4294967295,v=h+(p<<11&4294967295|p>>>21),p=_+(v^h^f)+b[7]+4139469664&4294967295,_=v+(p<<16&4294967295|p>>>16),p=f+(_^v^h)+b[10]+3200236656&4294967295,f=_+(p<<23&4294967295|p>>>9),p=h+(f^_^v)+b[13]+681279174&4294967295,h=f+(p<<4&4294967295|p>>>28),p=v+(h^f^_)+b[0]+3936430074&4294967295,v=h+(p<<11&4294967295|p>>>21),p=_+(v^h^f)+b[3]+3572445317&4294967295,_=v+(p<<16&4294967295|p>>>16),p=f+(_^v^h)+b[6]+76029189&4294967295,f=_+(p<<23&4294967295|p>>>9),p=h+(f^_^v)+b[9]+3654602809&4294967295,h=f+(p<<4&4294967295|p>>>28),p=v+(h^f^_)+b[12]+3873151461&4294967295,v=h+(p<<11&4294967295|p>>>21),p=_+(v^h^f)+b[15]+530742520&4294967295,_=v+(p<<16&4294967295|p>>>16),p=f+(_^v^h)+b[2]+3299628645&4294967295,f=_+(p<<23&4294967295|p>>>9),p=h+(_^(f|~v))+b[0]+4096336452&4294967295,h=f+(p<<6&4294967295|p>>>26),p=v+(f^(h|~_))+b[7]+1126891415&4294967295,v=h+(p<<10&4294967295|p>>>22),p=_+(h^(v|~f))+b[14]+2878612391&4294967295,_=v+(p<<15&4294967295|p>>>17),p=f+(v^(_|~h))+b[5]+4237533241&4294967295,f=_+(p<<21&4294967295|p>>>11),p=h+(_^(f|~v))+b[12]+1700485571&4294967295,h=f+(p<<6&4294967295|p>>>26),p=v+(f^(h|~_))+b[3]+2399980690&4294967295,v=h+(p<<10&4294967295|p>>>22),p=_+(h^(v|~f))+b[10]+4293915773&4294967295,_=v+(p<<15&4294967295|p>>>17),p=f+(v^(_|~h))+b[1]+2240044497&4294967295,f=_+(p<<21&4294967295|p>>>11),p=h+(_^(f|~v))+b[8]+1873313359&4294967295,h=f+(p<<6&4294967295|p>>>26),p=v+(f^(h|~_))+b[15]+4264355552&4294967295,v=h+(p<<10&4294967295|p>>>22),p=_+(h^(v|~f))+b[6]+2734768916&4294967295,_=v+(p<<15&4294967295|p>>>17),p=f+(v^(_|~h))+b[13]+1309151649&4294967295,f=_+(p<<21&4294967295|p>>>11),p=h+(_^(f|~v))+b[4]+4149444226&4294967295,h=f+(p<<6&4294967295|p>>>26),p=v+(f^(h|~_))+b[11]+3174756917&4294967295,v=h+(p<<10&4294967295|p>>>22),p=_+(h^(v|~f))+b[2]+718787259&4294967295,_=v+(p<<15&4294967295|p>>>17),p=f+(v^(_|~h))+b[9]+3951481745&4294967295,y.g[0]=y.g[0]+h&4294967295,y.g[1]=y.g[1]+(_+(p<<21&4294967295|p>>>11))&4294967295,y.g[2]=y.g[2]+_&4294967295,y.g[3]=y.g[3]+v&4294967295}i.prototype.v=function(y,h){h===void 0&&(h=y.length);const f=h-this.blockSize,b=this.C;let _=this.h,v=0;for(;v<h;){if(_==0)for(;v<=f;)s(this,y,v),v+=this.blockSize;if(typeof y=="string"){for(;v<h;)if(b[_++]=y.charCodeAt(v++),_==this.blockSize){s(this,b),_=0;break}}else for(;v<h;)if(b[_++]=y[v++],_==this.blockSize){s(this,b),_=0;break}}this.h=_,this.o+=h},i.prototype.A=function(){var y=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);y[0]=128;for(var h=1;h<y.length-8;++h)y[h]=0;h=this.o*8;for(var f=y.length-8;f<y.length;++f)y[f]=h&255,h/=256;for(this.v(y),y=Array(16),h=0,f=0;f<4;++f)for(let b=0;b<32;b+=8)y[h++]=this.g[f]>>>b&255;return y};function r(y,h){var f=a;return Object.prototype.hasOwnProperty.call(f,y)?f[y]:f[y]=h(y)}function o(y,h){this.h=h;const f=[];let b=!0;for(let _=y.length-1;_>=0;_--){const v=y[_]|0;b&&v==h||(f[_]=v,b=!1)}this.g=f}var a={};function l(y){return-128<=y&&y<128?r(y,function(h){return new o([h|0],h<0?-1:0)}):new o([y|0],y<0?-1:0)}function c(y){if(isNaN(y)||!isFinite(y))return d;if(y<0)return D(c(-y));const h=[];let f=1;for(let b=0;y>=f;b++)h[b]=y/f|0,f*=4294967296;return new o(h,0)}function u(y,h){if(y.length==0)throw Error("number format error: empty string");if(h=h||10,h<2||36<h)throw Error("radix out of range: "+h);if(y.charAt(0)=="-")return D(u(y.substring(1),h));if(y.indexOf("-")>=0)throw Error('number format error: interior "-" character');const f=c(Math.pow(h,8));let b=d;for(let v=0;v<y.length;v+=8){var _=Math.min(8,y.length-v);const p=parseInt(y.substring(v,v+_),h);_<8?(_=c(Math.pow(h,_)),b=b.j(_).add(c(p))):(b=b.j(f),b=b.add(c(p)))}return b}var d=l(0),m=l(1),E=l(16777216);t=o.prototype,t.m=function(){if(R(this))return-D(this).m();let y=0,h=1;for(let f=0;f<this.g.length;f++){const b=this.i(f);y+=(b>=0?b:4294967296+b)*h,h*=4294967296}return y},t.toString=function(y){if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(x(this))return"0";if(R(this))return"-"+D(this).toString(y);const h=c(Math.pow(y,6));var f=this;let b="";for(;;){const _=U(f,h).g;f=S(f,_.j(h));let v=((f.g.length>0?f.g[0]:f.h)>>>0).toString(y);if(f=_,x(f))return v+b;for(;v.length<6;)v="0"+v;b=v+b}},t.i=function(y){return y<0?0:y<this.g.length?this.g[y]:this.h};function x(y){if(y.h!=0)return!1;for(let h=0;h<y.g.length;h++)if(y.g[h]!=0)return!1;return!0}function R(y){return y.h==-1}t.l=function(y){return y=S(this,y),R(y)?-1:x(y)?0:1};function D(y){const h=y.g.length,f=[];for(let b=0;b<h;b++)f[b]=~y.g[b];return new o(f,~y.h).add(m)}t.abs=function(){return R(this)?D(this):this},t.add=function(y){const h=Math.max(this.g.length,y.g.length),f=[];let b=0;for(let _=0;_<=h;_++){let v=b+(this.i(_)&65535)+(y.i(_)&65535),p=(v>>>16)+(this.i(_)>>>16)+(y.i(_)>>>16);b=p>>>16,v&=65535,p&=65535,f[_]=p<<16|v}return new o(f,f[f.length-1]&-2147483648?-1:0)};function S(y,h){return y.add(D(h))}t.j=function(y){if(x(this)||x(y))return d;if(R(this))return R(y)?D(this).j(D(y)):D(D(this).j(y));if(R(y))return D(this.j(D(y)));if(this.l(E)<0&&y.l(E)<0)return c(this.m()*y.m());const h=this.g.length+y.g.length,f=[];for(var b=0;b<2*h;b++)f[b]=0;for(b=0;b<this.g.length;b++)for(let _=0;_<y.g.length;_++){const v=this.i(b)>>>16,p=this.i(b)&65535,ce=y.i(_)>>>16,st=y.i(_)&65535;f[2*b+2*_]+=p*st,N(f,2*b+2*_),f[2*b+2*_+1]+=v*st,N(f,2*b+2*_+1),f[2*b+2*_+1]+=p*ce,N(f,2*b+2*_+1),f[2*b+2*_+2]+=v*ce,N(f,2*b+2*_+2)}for(y=0;y<h;y++)f[y]=f[2*y+1]<<16|f[2*y];for(y=h;y<2*h;y++)f[y]=0;return new o(f,0)};function N(y,h){for(;(y[h]&65535)!=y[h];)y[h+1]+=y[h]>>>16,y[h]&=65535,h++}function X(y,h){this.g=y,this.h=h}function U(y,h){if(x(h))throw Error("division by zero");if(x(y))return new X(d,d);if(R(y))return h=U(D(y),h),new X(D(h.g),D(h.h));if(R(h))return h=U(y,D(h)),new X(D(h.g),h.h);if(y.g.length>30){if(R(y)||R(h))throw Error("slowDivide_ only works with positive integers.");for(var f=m,b=h;b.l(y)<=0;)f=Z(f),b=Z(b);var _=te(f,1),v=te(b,1);for(b=te(b,2),f=te(f,2);!x(b);){var p=v.add(b);p.l(y)<=0&&(_=_.add(f),v=p),b=te(b,1),f=te(f,1)}return h=S(y,_.j(h)),new X(_,h)}for(_=d;y.l(h)>=0;){for(f=Math.max(1,Math.floor(y.m()/h.m())),b=Math.ceil(Math.log(f)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),v=c(f),p=v.j(h);R(p)||p.l(y)>0;)f-=b,v=c(f),p=v.j(h);x(v)&&(v=m),_=_.add(v),y=S(y,p)}return new X(_,y)}t.B=function(y){return U(this,y).h},t.and=function(y){const h=Math.max(this.g.length,y.g.length),f=[];for(let b=0;b<h;b++)f[b]=this.i(b)&y.i(b);return new o(f,this.h&y.h)},t.or=function(y){const h=Math.max(this.g.length,y.g.length),f=[];for(let b=0;b<h;b++)f[b]=this.i(b)|y.i(b);return new o(f,this.h|y.h)},t.xor=function(y){const h=Math.max(this.g.length,y.g.length),f=[];for(let b=0;b<h;b++)f[b]=this.i(b)^y.i(b);return new o(f,this.h^y.h)};function Z(y){const h=y.g.length+1,f=[];for(let b=0;b<h;b++)f[b]=y.i(b)<<1|y.i(b-1)>>>31;return new o(f,y.h)}function te(y,h){const f=h>>5;h%=32;const b=y.g.length-f,_=[];for(let v=0;v<b;v++)_[v]=h>0?y.i(v+f)>>>h|y.i(v+f+1)<<32-h:y.i(v+f);return new o(_,y.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=u,pf=o}).apply(typeof Rc<"u"?Rc:typeof self<"u"?self:typeof window<"u"?window:{});function Ne(t,e,n,i){if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?i:n==="a"?i.call(t):i?i.value:e.get(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ai="13.1.0";function Oy(t){Ai=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new ka("@firebase/firestore");function wr(t,...e){if(wi.logLevel<=oe.DEBUG){const n=e.map(Ba);wi.debug(`Firestore (${Ai}): ${t}`,...n)}}function $a(t,...e){if(wi.logLevel<=oe.ERROR){const n=e.map(Ba);wi.error(`Firestore (${Ai}): ${t}`,...n)}}function mf(t,...e){if(wi.logLevel<=oe.WARN){const n=e.map(Ba);wi.warn(`Firestore (${Ai}): ${t}`,...n)}}function Ba(t){if(typeof t=="string")return t;try{return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,gf(t,i,n)}function gf(t,e,n){let i=`FIRESTORE (${Ai}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw $a(i),new Error(i)}function nt(t,e,n,i){let s="Unexpected state";typeof n=="string"?s=n:i=n,t||gf(e,s,i)}function Ps(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable"};class W extends fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Vy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Ge.UNAUTHENTICATED)))}shutdown(){}}class My{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class Ly{constructor(e){this.auth=null,e.onInit((n=>{this.auth=n}))}getToken(){return this.auth?this.auth.getToken().then((e=>e?(nt(typeof e.accessToken=="string",42297,{Z:e}),new vf(e.accessToken,new Ge(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class Fy{constructor(e,n,i){this.ee=e,this.te=n,this.re=i,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.ne=new Map}ie(){return this.re?this.re():null}get headers(){this.ne.set("X-Goog-AuthUser",this.ee);const e=this.ie();return e&&this.ne.set("Authorization",e),this.te&&this.ne.set("X-Goog-Iam-Authorization-Token",this.te),this.ne}}class Uy{constructor(e,n,i){this.ee=e,this.te=n,this.re=i}getToken(){return Promise.resolve(new Fy(this.ee,this.te,this.re))}start(e,n){e.enqueueRetryable((()=>n(Ge.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Nc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $y{constructor(e,n){this.se=n,this.appCheck=null,this.oe=null,Xe(e)&&e.settings.appCheckToken&&(this.oe=e.settings.appCheckToken),n.onInit((i=>{this.appCheck=i}))}getToken(){return this.oe?Promise.resolve(new Nc(this.oe)):this.appCheck?this.appCheck.getToken().then((e=>e?(nt(typeof e.token=="string",3470,{tokenResult:e}),new Nc(e.token)):null)):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,n,i,s,r,o,a,l,c,u,d,m,E){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c,this.isUsingEmulator=u,this.apiKey=d,this._customHeaders=m,this.grpcFlowControlWindow=E}}const ia="(default)";class ls{constructor(e,n){this.projectId=e,this.database=n||ia}static empty(){return new ls("","")}get isDefaultDatabase(){return this.database===ia}isEqual(e){return e instanceof ls&&e.projectId===this.projectId&&e.database===this.database}}function jy(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new W(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ls(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=Hy(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%62))}return i}}function ye(t,e){return t<e?-1:t>e?1:0}function cs(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const s=t.charAt(i),r=e.charAt(i);if(s!==r)return No(s)===No(r)?ye(s,r):No(s)?1:-1}return ye(t.length,e.length)}const zy=55296,Ky=57343;function No(t){const e=t.charCodeAt(0);return e>=zy&&e<=Ky}function yf(t,e,n){return t.length===e.length&&t.every(((i,s)=>n(i,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="__name__";class xt{constructor(e,n,i){n===void 0?n=0:n>e.length&&be(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&be(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return xt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof xt?e.forEach((i=>{n.push(i)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=xt.compareSegments(e.get(s),n.get(s));if(r!==0)return r}return ye(e.length,n.length)}static compareSegments(e,n){const i=xt.isNumericId(e),s=xt.isNumericId(n);return i&&!s?-1:!i&&s?1:i&&s?xt.extractNumericId(e).compare(xt.extractNumericId(n)):cs(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return pf.fromString(e.substring(4,e.length-2))}}class Te extends xt{construct(e,n,i){return new Te(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new W(L.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter((s=>s.length>0)))}return new Te(n)}static emptyPath(){return new Te([])}}const Gy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let Pn=class ai extends xt{construct(e,n,i){return new ai(e,n,i)}static isValidIdentifier(e){return Gy.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ai.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Dc}static keyField(){return new ai([Dc])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new W(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new W(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ai(n)}static emptyPath(){return new ai([])}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.path=e}static fromPath(e){return new Ue(Te.fromString(e))}static fromName(e){return new Ue(Te.fromString(e).popFirst(5))}static empty(){return new Ue(Te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Te.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Te.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ue(new Te(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(t,e,n){if(!n)throw new W(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Oc(t){if(!Ue.isDocumentKey(t))throw new W(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Vc(t){if(Ue.isDocumentKey(t))throw new W(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _f(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ja(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":be(12329,{type:typeof t})}function Si(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ja(t);throw new W(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $s=null;function qy(){return $s===null?$s=(function(){return 268435456+Math.round(2147483648*Math.random())})():$s++,"0x"+$s.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jy(t){return t==null}function Er(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do="RestConnection",Yy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Xy{get ae(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.ue=n+"://"+e.host,this._e=`projects/${i}/databases/${s}`,this.ce=this.databaseId.database===ia?`project_id=${i}`:`project_id=${i}&database_id=${s}`}le(e,n,i,s,r){const o=qy(),a=this.fe(e,n.toUriEncodedString());wr(Do,`Sending RPC '${e}' ${o}:`,a,i);const l={"google-cloud-resource-prefix":this._e,"x-goog-request-params":this.ce};this.he(l,s,r);const{host:c}=new URL(a),u=Es(c);return this.de(e,a,l,i,u).then((d=>(wr(Do,`Received RPC '${e}' ${o}: `,d),d)),(d=>{throw mf(Do,`RPC '${e}' ${o} failed with error: `,d,"url: ",a,"request:",i),d}))}me(e,n,i,s,r,o){return this.le(e,n,i,s,r)}he(e,n,i){if(e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ai})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,r)=>e[r]=s)),i&&i.headers.forEach(((s,r)=>e[r]=s)),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))e[s]=this.databaseInfo._customHeaders[s]}fe(e,n){const i=Yy[e];let s=`${this.ue}/v1/${n}:${i}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mc,ee,Ce,ci,sa,Zs,Qs,Fi;function Lc(t){if(t===void 0)return $a("RPC_ERROR","HTTP error has no status"),L.UNKNOWN;switch(t){case 200:return L.OK;case 400:return L.FAILED_PRECONDITION;case 401:return L.UNAUTHENTICATED;case 403:return L.PERMISSION_DENIED;case 404:return L.NOT_FOUND;case 409:return L.ABORTED;case 416:return L.OUT_OF_RANGE;case 429:return L.RESOURCE_EXHAUSTED;case 499:return L.CANCELLED;case 500:return L.UNKNOWN;case 501:return L.UNIMPLEMENTED;case 503:return L.UNAVAILABLE;case 504:return L.DEADLINE_EXCEEDED;default:return t>=200&&t<300?L.OK:t>=400&&t<500?L.FAILED_PRECONDITION:t>=500&&t<600?L.INTERNAL:L.UNKNOWN}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ee=Mc||(Mc={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";class Zy extends Xy{Ee(e,n){throw new Error("Not supported by FetchConnection")}async de(e,n,i,s,r){var l;const o=JSON.stringify(s);let a;try{const c={method:"POST",headers:i,body:o};r&&(c.credentials="include"),a=await fetch(n,c)}catch(c){const u=c,d=u==null?void 0:u.message,m=u!=null&&u.cause?String(u.cause):void 0,E=(d&&m?`${d} (${m})`:d??m)??(u==null?void 0:u.statusText)??String(c);throw new W(Lc(u==null?void 0:u.status),`Request failed with error: ${E}`)}if(!a.ok){let c=await a.json();Array.isArray(c)&&(c=c[0]);const u=(l=c==null?void 0:c.error)==null?void 0:l.message;throw new W(Lc(a.status),`Request failed with error: ${u??a.statusText}`)}return a.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new Qy("Invalid base64 string: "+r):r}})(e);return new pt(n)}static fromUint8Array(e){const n=(function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r})(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}function us(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ks(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}pt.EMPTY_BYTE_STRING=new pt("");/**
 * Copyright 2021 M.Vokhmentsev
 *
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(){this.exponent=0,this.Ve=0n,this.Te=0n,this.Ie=new Array(4).fill(0n),this.Ae=new Array(6).fill(0n),this.Re=new Array(6).fill(0n),this.Pe=new Array(6).fill(0n),this.pe=new Array(12).fill(0n)}static ye(e,n){let i=new B;return i.parse(e,n),i}parse(e,n){n+=e.length-1,this.exponent=0,this.Ve=0n,this.Te=0n;let i=this.Pe,s=this.be(e,i);if(s==0&&this.isEmpty(i)||(n+=s)<B.we)return;if(n>B.ge)return void(this.exponent=Number(B.Fe));let r=this.ve(n,i);this.xe(n,r,i)}be(e,n){for(let r=0;r<6;r++)n[r]=0n;let i=0;for(;i<e.length&&e[i]==0;)i+=1;if(i==e.length)return 0;let s=-i;if(e.length-i>B.De){let r=e[B.De]>=5,o=new Array(B.De).fill(0);for(let a=0;a<B.De;a++)o[a]=e[a+i];r&&(s+=this.Ne(o)),e=o,i=0}for(let r=e.length-1;r>=i;r--)n[0]|=BigInt(e[r])<<32n,this.Se(n);return s}Se(e){let n=e.length;for(let i=0;i<n;i++){let s=e[i]%10n;e[i]=e[i]/10n,i+1<n&&(e[i+1]+=s<<32n)}}isEmpty(e){for(let n=0;n<e.length;n++)if(e[n]!=0n)return!1;return!0}Ne(e){for(let n=e.length-1;n>=0;n--){if(e[n]!=9)return e[n]=e[n]+1,0;e[n]=0}return e[0]=1,1}ve(e,n){let i=n[0]<<31n|n[1]>>1n,s=Number(i)/B.Ce;return Math.floor(Number(e)*B.Be+this.log2(s))}log2(e){return B.Qe*Math.log(e)}xe(e,n,i){let s=this.Ie;this.Oe(-n,s);let r=this.pe;this.Me(i,s,r),this.qe(r),BigInt(s[0])!=BigInt(-e)&&this.qe(r),n+=this.Le(r),(n+=B.Ue)<=0||(n+=this.$e(r),BigInt(n)>=B.Fe?this.exponent=Number(B.Fe):(this.exponent=Number(n),this.Ve=(r[0]<<32n)+r[1]&0xffffffffffffffffn,this.Te=(r[2]<<32n)+r[3]&0xffffffffffffffffn))}Oe(e,n){if(e==0)return void this.ke(B.je[0],n);let i=B.je;e<0&&(e=-e,i=B.Ke);let s=B.ze,r=32,o=!0;for(;e>0;)e>=s&&(o?(this.ke(i[r],n),o=!1):this.We(n,i[r],n),e-=s),r-=1,s*=.5}ke(e,n){for(let i=0;i<n.length;i++)n[i]=e[i]}We(e,n,i){this.Ge(e,n,this.pe);let s=this.Je(this.pe);this.He(this.pe,i),i[0]=e[0]+n[0]+BigInt(s)}Ge(e,n,i){for(let s=0;s<i.length;s++)i[s]=0n;this.Ye(e,this.Ae),this.Ye(n,this.Re);for(let s=5;s>=0;s--)for(let r=5;r>=0;r--){let o=this.Ae[s]*this.Re[r];i[r+s+1]=i[r+s+1]+(o&B.Xe)&0xffffffffffffffffn,i[r+s]=i[r+s]+(o>>32n)&0xffffffffffffffffn}for(let s=11;s>=1;s--)i[s-1]=i[s-1]+(i[s]>>32n)&0xffffffffffffffffn,i[s]&=B.Xe}Je(e){let n=0;for(;this.Ze(e);)this.qe(e),n-=1;return n}Ze(e){if(e[0]<0x19999999n)return!0;if(e[0]>0x19999999n)return!1;for(let n=1;n<e.length;n++){if(e[n]<0x99999999n)return!0;if(e[n]>0x99999999n)return!1}return!1}Me(e,n,i){for(let o=0;o<i.length;o++)i[o]=0n;let s=this.Re;this.Ye(n,s);let r=e.length;for(let o=r-1;o>=0;o--)for(let a=r-1;a>=0;a--){let l=e[o]*s[a];i[a+o+1]=i[a+o+1]+(l&B.Xe)&0xffffffffffffffffn,i[a+o]=i[a+o]+(l>>32n)&0xffffffffffffffffn}for(let o=11;o>=1;o--)i[o-1]=i[o-1]+(i[o]>>32n)&0xffffffffffffffffn,i[o]&=B.Xe}qe(e){let n=e.length-1;e[0]&=B.Xe,e[n]*=10n;for(let i=n-1;i>=0;i--)e[i]=10n*e[i]+(e[i+1]>>32n)&0xffffffffffffffffn,e[i+1]&=B.Xe}Le(e){let n=31-B.et(e[0]);return n!=0&&this.tt(e,n),n}$e(e){return this.rt(e,5,100n),this.rt(e,4,0x80000000n),(e[0]&B.nt<<1n)!=0n?(this.tt(e,1),1):0}He(e,n){n[1]=(e[0]<<32n)+e[1],n[2]=(e[2]<<32n)+e[3],n[3]=(e[4]<<32n)+e[5]}Ye(e,n){n[0]=e[1]>>32n,n[1]=e[1]&B.Xe,n[2]=e[2]>>32n,n[3]=e[2]&B.Xe,n[4]=e[3]>>32n,n[5]=e[3]&B.Xe}tt(e,n){let i=e.length-1,s=BigInt(32-Math.abs(n));if(n>0){let r=BigInt(n);for(let o=i+1-1;o>=1;o--)e[o]=e[o]>>r|e[o-1]<<s&B.Xe;e[0]=e[0]>>r}else if(n<0){let r=BigInt(-n);e[0]=0xffffffffffffffffn&(e[0]<<r|e[1]>>s);for(let o=1;o<i;o++)e[o]=0xffffffffffffffffn&(e[o]<<r&B.Xe|e[o+1]>>s);e[i]=e[i]<<r&B.Xe}}rt(e,n,i){let s=n;e[s]=e[s]+i&0xffffffffffffffffn;for(let r=s+1-1;r>=1&&(e[r]&B.nt)!=0n;r--)e[r]&=B.Xe,e[r-1]+=1n}static et(e){let n=Number(e>>32n);return n==0?32+Math.clz32(Number(BigInt.asUintN(32,e))):Math.clz32(n)}}B.De=59,B.ge=646456993,B.we=-646457032,B.Ce=0xccccccccccccd00,B.it=0x8000000000000000n,B.ze=2147483648,B.Xe=0x00000000ffffffffn,B.nt=0xffffffff00000000n,B.Be=Math.log(10)/Math.log(2),B.Qe=1/Math.log(2),B.Ue=2147483647,B.Fe=0xffffffffn,B.je=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[1n,0x3333333333333333n,0x3333333333333333n,0x3333333333333334n],[1n,0x6666666666666666n,0x6666666666666666n,0x6666666666666667n],[2n,0x28f5c28f5c28f5c2n,0x8f5c28f5c28f5c28n,0xf5c28f5c28f5c290n],[3n,0x4189374bc6a7ef9dn,0xb22d0e5604189374n,0xbc6a7ef9db22d0e6n],[5n,0xa7c5ac471b478423n,0x0fcf80dc33721d53n,0xcddd6e04c0592104n],[10n,0x6df37f675ef6eadfn,0x5ab9a2072d44268dn,0x97df837e6748956en],[20n,0x2f394219248446ban,0xa23d2ec729af3d61n,0x0607aa0167dd94cbn],[39n,0x571cbec554b60dbbn,0xd5f64baf0506840dn,0x451db70d5904029bn],[78n,0x1da48ce468e7c702n,0x6520247d3556476dn,0x1469caf6db224cfan],[155n,0x2252f0e5b39769dcn,0x9ae2eea30ca3ade0n,0xeeaa3c08dfe84e30n],[309n,0x2e055c9a3f6ba793n,0x16583a816eb60a59n,0x22c4b0826cf1ebf7n],[617n,0x52bb45e9cf23f17fn,0x7688c07606e50364n,0xb34479aa9d449a57n],[1234n,0x1abc81c8ff5f846cn,0x8f5e3c9853e38c97n,0x45060097f3bf9296n],[2467n,0x1bec53b510daa7b4n,0x48369ed77dbb0eb1n,0x3b05587b2187b41en],[4933n,0x1e75063a5ba91326n,0x8abfb8e460016ae3n,0x28008702d29e8a3cn],[9865n,0x243c5d8bb5c5fa55n,0x40c6d248c5881915n,0x4c0fd99fd5befc22n],[19729n,0x334a5570c3f4ef3cn,0xa13c36c43f979c90n,0xda7ac473555fb7a8n],[39457n,0x66c304445dd98f3bn,0xa8c293a20e47a41bn,0x4c5b03dc12604964n],[78914n,0x293ffbf5fb028cc4n,0x89d3e5ff44238406n,0x369a339e1bfe8c9bn],[157827n,0x427792fbb68e5d20n,0x7b297cd9fc154b62n,0xf09142114aa9a20cn],[315653n,0xac92bc65ad5c08fcn,0x00beeb115a566c19n,0x4ba882d8a4622437n],[631306n,0x745581440f92e80en,0x4da822cf7f896f41n,0x509d598678164ecdn],[1262612n,0x34dd99b4c69523a5n,0x64bc2e8f0d8b1044n,0xb03b1c96da5dd349n],[2525223n,0x6d2bbea9d6d25a08n,0xa0a4606a88e96b70n,0x182063bbc2fe8520n],[5050446n,0x2e8e47d63bfdd6e3n,0x2b55fa8976eaa3e9n,0x1a6b9d3086412a73n],[10100891n,0x54aa68efa1d719dfn,0xd8505806612c5c8fn,0xad068837fee8b43an],[20201782n,0x1c00464ccb7bae77n,0x9e3877784c77982cn,0xd94af3b61717404fn],[40403563n,0x1ea099c8be2b6cd0n,0x8bfb6d539fa50466n,0x6d3bc37e69a84218n],[80807125n,0x24a457f466ce8d18n,0xf2c8f3b81bc6bb59n,0xa78c757692e02d49n],[161614249n,0x347256677aba6b53n,0x3fbf90d30611a67cn,0x1e039d87e0bdb32bn],[323228497n,0x6b727daf0fd3432an,0x71f71121f9e4200fn,0x8fcd9942d486c10cn],[646456994n,0x2d18e84484d91f78n,0x4079bfe7829dec6fn,0x21551643e365abc6n]],B.Ke=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[0n,0x8000000000000000n,0x0000000000000000n,0x0000000000000000n],[0n,0x4000000000000000n,0x0000000000000000n,0x0000000000000001n],[-1n,0xa000000000000000n,0x0000000000000000n,0x0000000000000000n],[-2n,0x6400000000000000n,0x0000000000000000n,0x0000000000000000n],[-4n,0x2710000000000000n,0x0000000000000000n,0x0000000000000001n],[-9n,0x3b9aca0000000000n,0x0000000000000000n,0x0000000000000001n],[-19n,0x8ac7230489e80000n,0x0000000000000000n,0x0000000000000000n],[-38n,0x4b3b4ca85a86c47an,0x098a224000000000n,0x0000000000000001n],[-77n,0xdd15fe86affad912n,0x49ef0eb713f39eben,0xaa987b6e6fd2a002n],[-154n,0xbeeefb584aff8603n,0xaafb550ffacfd8fan,0x5ca47e4f88d45371n],[-308n,0x8e679c2f5e44ff8fn,0x570f09eaa7ea7648n,0x5961db50c6d2b888n],[-616n,0x4f371b3399fc2ab0n,0x8170041c9feb05aan,0xc7c343447c75bcf6n],[-1233n,0xf51e928179013fd3n,0xde4bd12cde4d985cn,0x4a573ca6f94bff14n],[-2466n,0xeab388127bccaff7n,0x1667639142b9fbaen,0x775ec9995e1039fbn],[-4932n,0xd72cb2a95c7ef6ccn,0xe81bf1e825ba7515n,0xc2feb521d6cb5dcdn],[-9864n,0xb4dc1be6604502dcn,0xd491079b8eef6535n,0x578d3965d24de84dn],[-19728n,0x7fc6447bee60ea43n,0x2548da5c8b125b27n,0x5f42d1142f41d349n],[-39456n,0x3fc65180f88af8fbn,0x6a6915f383349413n,0x063c3708b6ceb291n],[-78913n,0x9ee0197c8dcd55bfn,0x2b2b9b942c38f4a2n,0x0f8ba634e9c706aen],[-157826n,0x629963a25b8b2d79n,0xd00b9d2286f70876n,0xe97004700c3644fcn],[-315652n,0x25f9cc308ceef4f3n,0x40f19543911a4546n,0xa2cd389452cfc366n],[-631305n,0x385597b0d47e76b8n,0x1b9f67e103bf2329n,0xc3119848595985f7n],[-1262611n,0x7bf795d276c12f66n,0x66a61d62a446659an,0xa1a4d73bebf093d5n],[-2525222n,0x3c07d96ab1ed7799n,0xcb7355c22cc05ac0n,0x4ffc0ab73b1f6a49n],[-5050445n,0x8cc4cd8c3edefb9an,0x6c8ff86a90a97e0cn,0x166cfddbf98b71bfn],[-10100890n,0x4d67d81cc88e1228n,0x1d7cfb06666b79b3n,0x7b916728aaa4e70dn],[-20201781n,0xea0c55494e7a552dn,0xb88cb9484bb86c61n,0x8d44893c610bb7dfn],[-40403562n,0xd5fa8c821ec0c24an,0xa80e46e764e0f8b0n,0xa7276bfa432fac7en],[-80807124n,0xb2dae307426f6791n,0xc970b82f58b12918n,0x0472592f7f39190en],[-161614248n,0x7cf51edd8a15f1c9n,0x656dab3498f8e697n,0x12daa2a80e53c807n],[-323228496n,0x3cfe609ab5883c50n,0xbec8b5d22b198871n,0xe18477703b4622b4n],[-646456993n,0x9152447b9d7cda9an,0x3b4d3f6110d77aadn,0xfa81bad1c394adb4n]];class ${constructor(e,n,i,s){this.negative=e,this.st=n,this.Ve=i,this.Te=s}exponent(){return this.st-B.Ue}ot(){return this.st===0&&this.Ve===0n&&this.Te===0n}ut(){return this.st===Ne($,Ce,"f",ci)&&this.Ve===0n&&this.Te===0n}isNaN(){return this.st===Ne($,Ce,"f",ci)&&!(this.Ve===0n&&this.Te===0n)}compareTo(e){if(this.isNaN())return e.isNaN()?0:1;if(e.isNaN())return-1;let n,i;if(this.negative){if(!e.negative)return-1;n=1,i=-1}else{if(e.negative)return 1;n=-1,i=1}return this.st<e.st?n:this.st>e.st?i:this.Ve<e.Ve?n:this.Ve>e.Ve?i:this.Te<e.Te?n:this.Te>e.Te?i:0}debug(){return(this.negative?"+":"-")+Ne($,Ce,"m",sa).call($,this.Ve)+Ne($,Ce,"m",sa).call($,this.Te)+"*2^"+this.exponent()}static fromNumber(e){if(isNaN(e))return $.NaN;if(!isFinite(e))return e<0?$._t:$.ct;if(e===0)return Math.sign(1/e)>0?$.lt:$.ft;const n=new DataView(new ArrayBuffer(8));n.setFloat64(0,e);const i=n.getBigUint64(0);let s=BigInt.asUintN(64,i<<12n),r=2047&Number(i>>52n);if(r===0){const o=B.et(s);s=o<63?s<<BigInt(o+1):0n,r=-o}return new $(e<0,Ne($,Ce,"m",Fi).call($,r-1023),s,0n)}static fromString(e){if(e==="NaN")return $.NaN;if(e==="-Infinity")return $._t;if(e==="Infinity"||e==="+Infinity")return $.ct;const n=new Array(e.length).fill(0);let i=0,s=0,r=0,o=!1;for(e[i]==="-"?(o=!0,i++):e[i]==="+"&&i++;Ne($,Ce,"m",Zs).call($,e,i);)n[s++]=Ne($,Ce,"m",Qs).call($,e,i++);if(e[i]==="."){const l=++i;for(;Ne($,Ce,"m",Zs).call($,e,i);)n[s++]=Ne($,Ce,"m",Qs).call($,e,i++);r=l-i}if(e[i]==="e"||e[i]==="E"){let l=0;i++;let c=1;e[i]==="-"?(c=-1,i++):e[i]==="+"&&i++;const u=i;for(;Ne($,Ce,"m",Zs).call($,e,i);)if(l=10*l+Ne($,Ce,"m",Qs).call($,e,i++),i-u>9)throw new Error("Exponent too large "+e);if(i===u)throw new Error("Invalid number "+e);r+=l*c}if(s===0||i!==e.length)throw new Error("Invalid number "+e);const a=B.ye(n.slice(0,s),r);return new $(o,a.exponent,a.Ve,a.Te)}}Ce=$,sa=function(e){return e.toString(16).padStart(16,"0")},Zs=function(e,n){const i=e.codePointAt(n);return i!==void 0&&i>=48&&i<=57},Qs=function(e,n){return e.codePointAt(n)-48},Fi=function(e){return e+B.Ue},ci={value:Number(B.Fe)},$.lt=new $(!1,0,0n,0n),$.ft=new $(!0,0,0n,0n),$.NaN=new $(!1,Ne($,Ce,"f",ci),1n<<63n,0n),$._t=new $(!0,Ne($,Ce,"f",ci),0n,0n),$.ct=new $(!1,Ne($,Ce,"f",ci),0n,0n),new $(!0,Ne($,Ce,"m",Fi).call($,63),0n,0n),new $(!1,Ne($,Ce,"m",Fi).call($,0),0n,0n),new $(!0,Ne($,Ce,"m",Fi).call($,0),0n,0n);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yn(t){if(nt(!!t,39018),typeof t=="string"){let e=0;const n=eb.exec(t);if(nt(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ir(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t,e){const n={typeString:t};return e&&(n.value=e),n}function Cs(t,e){if(!_f(t))throw new W(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in e)if(e[i]){const s=e[i].typeString,r="value"in e[i]?{value:e[i].value}:void 0,o=e[i].optional;if(!(i in t)){if(o)continue;n=`JSON missing required field: '${i}'`;break}const a=t[i];if(s&&typeof a!==s){n=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&a!==r.value){n=`Expected '${i}' field to equal '${r.value}'`;break}}if(n)throw new W(L.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=-62135596800,Uc=1e6;class ve{static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*Uc);return new ve(n,i)}static fromInstant(e){if(!e||typeof e.ht!="bigint")throw new W(L.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return ve._fromEpochNanoseconds(e.ht)}static _fromEpochNanoseconds(e){let n,i;if(e>=0n)n=Number(e/1000000000n),i=Number(e%1000000000n);else{const s=e%1000000000n;s===0n?(n=Number(e/1000000000n),i=0):(n=Number(e/1000000000n-1n),i=Number(s+1000000000n))}return new ve(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Fc)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Uc}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new W(L.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ve._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Cs(e,ve._jsonSchema))return new ve(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Fc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ve._jsonSchemaVersion="firestore/timestamp/1.0",ve._jsonSchema={type:it("string",ve._jsonSchemaVersion),seconds:it("number"),nanoseconds:it("number")};function tb(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{}).__type__)==null?void 0:i.stringValue)==="server_timestamp"}function Ef(t){const e=t.mapValue.fields.__previous_value__;return tb(e)?Ef(e):e}function ds(t){const e=Yn(t.mapValue.fields.__local_write_time__.timestampValue);return new ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If="__type__",Tf="__vector__",Tr="value",nb="server_timestamp",Af="__min__",Ha="__max__",Tn="__regex__",Ar="pattern",Sr="options",fs="__oid__",xs="__int__",Ei="__decimal128__",Bn="__request_timestamp__",Pr="seconds",kr="increment",io="__binary__",Bs={};var de,ot;(ot=de||(de={})).dt="regexValue",ot.Et="bsonObjectIdValue",ot.Vt="int32Value",ot.Tt="decimal128Value",ot.It="bsonTimestampValue",ot.At="bsonBinaryValue",ot.Rt="minKeyValue",ot.Pt="maxKeyValue",ot.yt="maxValue",ot.bt="vectorValue",ot.wt="serverTimestampValue",ot.gt="regularMapValue";const $c={[Tf]:de.bt,[Ha]:de.yt,[nb]:de.wt},Sf={[Tn]:de.dt,[fs]:de.Et,[xs]:de.Vt,[Ei]:de.Tt,[Bn]:de.It,[io]:de.At,[Af]:de.Rt,[Ha]:de.Pt};function Xn(t){if("nullValue"in t)return 0;if("booleanValue"in t)return 2;if("integerValue"in t||"doubleValue"in t)return 3;if("timestampValue"in t)return 4;if("stringValue"in t)return 7;if("bytesValue"in t)return 8;if("referenceValue"in t)return 9;if("geoPointValue"in t)return 11;if("arrayValue"in t)return 13;if(!("mapValue"in t))return be(28295,{value:t});switch((function(i){var o,a;if(!((o=i.mapValue)!=null&&o.fields))return de.gt;const s=i.mapValue.fields,r=(a=s[If])==null?void 0:a.stringValue;if(r&&$c[r])return $c[r];if(us(s)===1){const l=Object.keys(s);return Sf[l[0]]??de.gt}return de.gt})(t)){case de.wt:return 6;case de.yt:return 9007199254740991;case de.bt:return 14;case de.dt:return 12;case de.Et:return 10;case de.Vt:case de.Tt:return 3;case de.It:return 5;case de.At:return 8;case de.Rt:return 1;case de.Pt:return 16;default:return 15}}function Cr(t,e,n){if(t===e)return!0;const i=Xn(t);if(i!==Xn(e))return!1;switch(i){case 0:case 9007199254740991:case 16:case 1:return!0;case 2:return t.booleanValue===e.booleanValue;case 6:return ds(t).isEqual(ds(e));case 4:return(function(r,o){if(typeof r.timestampValue=="string"&&typeof o.timestampValue=="string"&&r.timestampValue.length===o.timestampValue.length)return r.timestampValue===o.timestampValue;const a=Yn(r.timestampValue),l=Yn(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(t,e);case 7:return t.stringValue===e.stringValue;case 8:return(function(r,o){return xf(r,o)===0})(t,e);case 9:return t.referenceValue===e.referenceValue;case 11:return(function(r,o){return Ve(r.geoPointValue.latitude)===Ve(o.geoPointValue.latitude)&&Ve(r.geoPointValue.longitude)===Ve(o.geoPointValue.longitude)})(t,e);case 3:return(function(r,o,a){if(Zn(r)&&Zn(o))return kf(r,o)===0;if("integerValue"in r&&"integerValue"in o||Rr(r)&&Rr(o))return ps(r)===ps(o);let l,c;return!("doubleValue"in r)||!("doubleValue"in o)?!1:(l=Ve(r.doubleValue),c=Ve(o.doubleValue),l===c?Er(l)===Er(c):!!(a===void 0||a.vt)&&isNaN(l)&&isNaN(c))})(t,e,n);case 13:return yf(t.arrayValue.values||[],e.arrayValue.values||[],((s,r)=>Cr(s,r,n)));case 14:case 15:return(function(r,o,a){const l=r.mapValue.fields||{},c=o.mapValue.fields||{};if(us(l)!==us(c))return!1;for(const u in l)if(l.hasOwnProperty(u)&&(c[u]===void 0||!Cr(l[u],c[u],a)))return!1;return!0})(t,e,n);case 5:return Cf(t,e)===0;case 12:return Rf(t,e)===0;case 10:return Nf(t,e)===0;default:return be(52216,{left:t})}}function hs(t,e){return(t.values||[]).find((n=>Cr(n,e)))!==void 0}function xr(t,e){if(t===e)return 0;const n=Xn(t),i=Xn(e);if(n!==i)return ye(n,i);switch(n){case 0:case 1:case 16:case 9007199254740991:return 0;case 2:return ye(t.booleanValue,e.booleanValue);case 3:return ra(t,e);case 4:return jc(t.timestampValue,e.timestampValue);case 6:return jc(ds(t),ds(e));case 7:return cs(t.stringValue,e.stringValue);case 8:return xf(t,e);case 9:return(function(r,o){const a=r.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ye(a[c],l[c]);if(u!==0)return u}return ye(a.length,l.length)})(t.referenceValue,e.referenceValue);case 11:return(function(r,o){const a=ye(Ve(r.latitude),Ve(o.latitude));return a!==0?a:ye(Ve(r.longitude),Ve(o.longitude))})(t.geoPointValue,e.geoPointValue);case 13:return Hc(t.arrayValue,e.arrayValue);case 14:return(function(r,o){var m,E,x,R;const a=r.fields||{},l=o.fields||{},c=(m=a[Tr])==null?void 0:m.arrayValue,u=(E=l[Tr])==null?void 0:E.arrayValue,d=ye(((x=c==null?void 0:c.values)==null?void 0:x.length)||0,((R=u==null?void 0:u.values)==null?void 0:R.length)||0);return d!==0?d:Hc(c,u)})(t.mapValue,e.mapValue);case 15:return(function(r,o){if(r===Bs&&o===Bs)return 0;if(r===Bs)return 1;if(o===Bs)return-1;const a=r.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let d=0;d<l.length&&d<u.length;++d){const m=cs(l[d],u[d]);if(m!==0)return m;const E=xr(a[l[d]],c[u[d]]);if(E!==0)return E}return ye(l.length,u.length)})(t.mapValue,e.mapValue);case 5:return Cf(t,e);case 12:return Rf(t,e);case 10:return Nf(t,e);default:throw be(23264,{xt:n})}}function ps(t){let e;return e=Rr(t)?t.mapValue.fields[xs].integerValue:t.integerValue||t.doubleValue,Ve(e)}function Pf(t){return t.mapValue.fields[Ei].stringValue}function ra(t,e){if(Zn(t)||Zn(e))return kf(t,e);const n=ps(t),i=ps(e);return isNaN(n)?isNaN(i)?0:-1:isNaN(i)?1:ye(n,i)}function kf(t,e){const n=Bc(t),i=Bc(e);return n.ot()&&i.ot()?0:n.isNaN()?i.isNaN()?0:-1:i.isNaN()?1:n.compareTo(i)}function Bc(t){return Zn(t)?$.fromString(Pf(t)):$.fromNumber(ps(t))}function jc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=Yn(t),i=Yn(e),s=ye(n.seconds,i.seconds);return s!==0?s:ye(n.nanos,i.nanos)}function Hc(t,e){const n=t.values||[],i=e.values||[];for(let s=0;s<n.length&&s<i.length;++s){const r=xr(n[s],i[s]);if(r!==void 0&&r!==0)return r}return ye(n.length,i.length)}function Cf(t,e){var a,l,c,u,d,m,E,x,R,D,S,N;const n=(c=(l=(a=t.mapValue.fields)==null?void 0:a[Bn].mapValue)==null?void 0:l.fields)==null?void 0:c[Pr],i=(m=(d=(u=e.mapValue.fields)==null?void 0:u[Bn].mapValue)==null?void 0:d.fields)==null?void 0:m[Pr],s=(R=(x=(E=t.mapValue.fields)==null?void 0:E[Bn].mapValue)==null?void 0:x.fields)==null?void 0:R[kr],r=(N=(S=(D=e.mapValue.fields)==null?void 0:D[Bn].mapValue)==null?void 0:S.fields)==null?void 0:N[kr],o=ra(n,i);return o!==0?o:ra(s,r)}function Wc(t){var a;if("bytesValue"in t)return{subtype:0,bytes:Ir(t.bytesValue)};const e=(a=t.mapValue)==null?void 0:a.fields,n=e==null?void 0:e[io],i=n==null?void 0:n.bytesValue;if(!i)throw new Error("Received incorrect value for BsonBinaryData");const s=Ir(i).toUint8Array();if(s.length===0)throw new Error("Received empty bytesValue for BsonBinaryData");const r=s[0],o=s.slice(1);return{subtype:r,bytes:pt.fromUint8Array(o)}}function xf(t,e){const n=Wc(t),i=Wc(e);return n.subtype!==i.subtype?n.subtype<i.subtype?-1:1:n.bytes.compareTo(i.bytes)}function Rf(t,e){var c,u,d,m,E,x,R,D,S,N,X,U,Z,te,y,h;const n=t.mapValue.fields,i=((m=(d=(u=(c=n==null?void 0:n[Tn])==null?void 0:c.mapValue)==null?void 0:u.fields)==null?void 0:d[Ar])==null?void 0:m.stringValue)??"",s=((D=(R=(x=(E=n==null?void 0:n[Tn])==null?void 0:E.mapValue)==null?void 0:x.fields)==null?void 0:R[Sr])==null?void 0:D.stringValue)??"",r=e.mapValue.fields,o=((U=(X=(N=(S=r==null?void 0:r[Tn])==null?void 0:S.mapValue)==null?void 0:N.fields)==null?void 0:X[Ar])==null?void 0:U.stringValue)??"",a=((h=(y=(te=(Z=r==null?void 0:r[Tn])==null?void 0:Z.mapValue)==null?void 0:te.fields)==null?void 0:y[Sr])==null?void 0:h.stringValue)??"",l=cs(i,o);return l!==0?l:ye(s,a)}function Nf(t,e){var n,i,s,r;return cs(((i=(n=t.mapValue.fields)==null?void 0:n[fs])==null?void 0:i.stringValue)??"",((r=(s=e.mapValue.fields)==null?void 0:s[fs])==null?void 0:r.stringValue)??"")}function Zn(t){var n;if(!((n=t.mapValue)!=null&&n.fields))return!1;const e=t.mapValue.fields;return us(e)===1&&e[Ei]&&!!e[Ei].stringValue}function Rr(t){var n,i;if(!((n=t.mapValue)!=null&&n.fields))return!1;const e=t.mapValue.fields;return us(e)===1&&((i=e[xs])==null?void 0:i.integerValue)!==void 0}function Df(t){return!!t&&"arrayValue"in t}function zc(t){return!!t&&"nullValue"in t}function Kc(t){return!(!(function(n){return!!n&&"doubleValue"in n})(t)||!isNaN(Number(t.doubleValue)))||!(!Zn(t)||Pf(t)!=="NaN")}function Oo(t){return!!t&&"mapValue"in t}function Ji(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ks(t.mapValue.fields,((n,i)=>e.mapValue.fields[n]=Ji(i))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ji(t.arrayValue.values[n]);return e}return{...t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Set(Object.values(Sf));class Gc{constructor(e,n){this.position=e,this.inclusive=n}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{}class Bt extends Of{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new ib(e,n,i):n==="array-contains"?new ob(e,i):n==="in"?new ab(e,i):n==="not-in"?new lb(e,i):n==="array-contains-any"?new cb(e,i):new Bt(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new sb(e,i):new rb(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(xr(n,this.value)):n!==null&&Xn(this.value)===Xn(n)&&this.matchesComparison(xr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return be(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class so extends Of{constructor(e,n){super(),this.filters=e,this.op=n,this.Dt=null}static create(e,n){return new so(e,n)}matches(e){return(function(i){return i.op==="and"})(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Dt!==null||(this.Dt=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Dt}getFilters(){return Object.assign([],this.filters)}}class ib extends Bt{constructor(e,n,i){super(e,n,i),this.key=Ue.fromName(i.referenceValue)}matches(e){const n=Ue.comparator(e.key,this.key);return this.matchesComparison(n)}}class sb extends Bt{constructor(e,n){super(e,"in",n),this.keys=Vf("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class rb extends Bt{constructor(e,n){super(e,"not-in",n),this.keys=Vf("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Vf(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map((i=>Ue.fromName(i.referenceValue)))}class ob extends Bt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Df(n)&&hs(n.arrayValue,this.value)}}class ab extends Bt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&hs(this.value.arrayValue,n)}}class lb extends Bt{constructor(e,n){super(e,"not-in",n)}matches(e){if(hs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!hs(this.value.arrayValue,n)}}class cb extends Bt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Df(n)||!n.arrayValue.values)&&n.arrayValue.values.some((i=>hs(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{static fromTimestamp(e){return new De(e)}static min(){return new De(new ve(0,0))}static max(){return new De(new ve(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e,n){this.comparator=e,this.root=n||Oe.EMPTY}insert(e,n){return new Nr(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Oe.BLACK,null,null))}remove(e){return new Nr(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Oe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,i)=>(e(n,i),!1)))}toString(){const e=[];return this.inorderTraversal(((n,i)=>(e.push(`${n}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new js(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new js(this.root,e,this.comparator,!1)}getReverseIterator(){return new js(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new js(this.root,e,this.comparator,!0)}}class js{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Oe{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Oe.RED,this.left=s??Oe.EMPTY,this.right=r??Oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new Oe(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Oe.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw be(43730,{key:this.key,value:this.value});if(this.right.isRed())throw be(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw be(27949);return e+(this.isRed()?0:1)}}Oe.EMPTY=null,Oe.RED=!0,Oe.BLACK=!1;Oe.EMPTY=new class{constructor(){this.size=0}get key(){throw be(57766)}get value(){throw be(16141)}get color(){throw be(16727)}get left(){throw be(29726)}get right(){throw be(36894)}copy(e,n,i,s,r){return this}insert(e,n,i){return new Oe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.comparator=e,this.data=new Nr(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,i)=>(e(n),!1)))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new qc(this.data.getIterator())}getIteratorFrom(e){return new qc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((i=>{n=n.add(i)})),n}isEqual(e){if(!(e instanceof ms)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new ms(this.comparator);return n.data=e,n}}class qc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this.fields=e,e.sort(Pn.comparator)}static empty(){return new Qn([])}unionWith(e){let n=new ms(Pn.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Qn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return yf(this.fields,e.fields,((n,i)=>n.isEqual(i)))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.value=e}static empty(){return new Ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Oo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ji(n)}setAll(e){let n=Pn.emptyPath(),i={},s=[];e.forEach(((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=Ji(o):s.push(a.lastSegment())}));const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());Oo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];Oo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){ks(n,((s,r)=>e[s]=r));for(const s of i)delete e[s]}clone(){return new Ze(Ji(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n,i,s,r,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Dt(e,0,De.min(),De.min(),De.min(),Ze.empty(),0)}static newFoundDocument(e,n,i,s){return new Dt(e,1,n,De.min(),i,s,0)}static newNoDocument(e,n){return new Dt(e,2,n,De.min(),De.min(),Ze.empty(),0)}static newUnknownDocument(e,n){return new Dt(e,3,n,De.min(),De.min(),Ze.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(De.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=De.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ub{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.Nt=null}}function Jc(t,e=null,n=[],i=[],s=null,r=null,o=null){return new ub(t,e,n,i,s,r,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.St=null,this.Ct=null,this.Bt=null,this.startAt,this.endAt}}function fb(t){const e=Ps(t);if(e.St===null){e.St=[];const n=new Set;for(const r of e.explicitOrderBy)e.St.push(r),n.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ms(Pn.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((c=>{c.isInequality()&&(a=a.add(c.field))}))})),a})(e).forEach((r=>{n.has(r.canonicalString())||r.isKeyField()||e.St.push(new oa(r,i))})),n.has(Pn.keyField().canonicalString())||e.St.push(new oa(Pn.keyField(),i))}return e.St}function hb(t){const e=Ps(t);return e.Ct||(e.Ct=pb(e,fb(t))),e.Ct}function pb(t,e){if(t.limitType==="F")return Jc(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const r=s.dir==="desc"?"asc":"desc";return new oa(s.field,r)}));const n=t.endAt?new Gc(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Gc(t.startAt.position,t.startAt.inclusive):null;return Jc(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Er(e)?"-0":e}}function er(t){return{integerValue:""+t}}function mb(t,e,n){return(function(s){return typeof s=="number"&&Number.isInteger(s)&&!Er(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER})(e)?er(e):Mf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this._=void 0}}class Lf extends ro{}class gb extends ro{constructor(e){super(),this.elements=e}}class vb extends ro{constructor(e){super(),this.elements=e}}class Wa extends ro{constructor(e,n){super(),this.serializer=e,this.Qt=n}}class yb extends Wa{}class bb extends Wa{}class _b extends Wa{}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,n){this.field=e,this.transform=n}}class tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class oo{}class Ff extends oo{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class za extends oo{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}class Uf extends oo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Eb extends oo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib={asc:"ASCENDING",desc:"DESCENDING"},Tb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ab={and:"AND",or:"OR"};class Sb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function tr(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Yc(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Pb(t,e){return tr(t,e.toTimestamp())}function Yi(t){return nt(!!t,49232),De.fromTimestamp((function(n){const i=Yn(n);return new ve(i.seconds,i.nanos)})(t))}function Ka(t,e){return aa(t,e).canonicalString()}function aa(t,e){const n=(function(s){return new Te(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function Dr(t,e){return Ka(t.databaseId,e.path)}function la(t,e){const n=(function(s){const r=Te.fromString(s);return nt(Bf(r),10190,{key:r.toString()}),r})(e);if(n.get(1)!==t.databaseId.projectId)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ue((function(s){return nt(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)})(n))}function Xc(t,e,n){return{name:Dr(t,e),fields:n.value.mapValue.fields}}function kb(t,e){return"found"in e?(function(i,s){nt(!!s.found,43571),s.found.name,s.found.updateTime;const r=la(i,s.found.name),o=Yi(s.found.updateTime),a=s.found.createTime?Yi(s.found.createTime):De.min(),l=new Ze({mapValue:{fields:s.found.fields}});return Dt.newFoundDocument(r,o,a,l)})(t,e):"missing"in e?(function(i,s){nt(!!s.missing,3894),nt(!!s.readTime,22933);const r=la(i,s.missing),o=Yi(s.readTime);return Dt.newNoDocument(r,o)})(t,e):be(7234,{result:e})}function Cb(t,e){let n;if(e instanceof Ff)n={update:Xc(t,e.key,e.value)};else if(e instanceof Uf)n={delete:Dr(t,e.key)};else if(e instanceof za)n={update:Xc(t,e.key,e.data),updateMask:Ob(e.fieldMask)};else{if(!(e instanceof Eb))return be(16599,{Ot:e.type});n={verify:Dr(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((i=>(function(r,o){const a=o.transform;if(a instanceof Lf)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof gb)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof vb)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof yb)return{fieldPath:o.field.canonicalString(),increment:a.Qt};if(a instanceof bb)return{fieldPath:o.field.canonicalString(),minimum:a.Qt};if(a instanceof _b)return{fieldPath:o.field.canonicalString(),maximum:a.Qt};throw be(20930,{transform:o.transform})})(0,i)))),e.precondition.isNone||(n.currentDocument=(function(s,r){return r.updateTime!==void 0?{updateTime:Pb(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:be(27497)})(t,e.precondition)),n}function xb(t,e){const n={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=(function(c,u){return Ka(c.databaseId,u)})(t,s);const r=(function(c){if(c.length!==0)return $f(so.create(c,"and"))})(e.filters);r&&(n.structuredQuery.where=r);const o=(function(c){if(c.length!==0)return c.map((u=>(function(m){return{field:li(m.field),direction:Rb(m.dir)}})(u)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=(function(c,u){return c.useProto3Json||Jy(u)?u:{value:u}})(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=(function(c){return{before:c.inclusive,values:c.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(c){return{before:!c.inclusive,values:c.position}})(e.endAt)),{Mt:n,parent:s}}function Rb(t){return Ib[t]}function Nb(t){return Tb[t]}function Db(t){return Ab[t]}function li(t){return{fieldPath:t.canonicalString()}}function $f(t){return t instanceof Bt?(function(n){if(n.op==="=="){if(Kc(n.value))return{unaryFilter:{field:li(n.field),op:"IS_NAN"}};if(zc(n.value))return{unaryFilter:{field:li(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Kc(n.value))return{unaryFilter:{field:li(n.field),op:"IS_NOT_NAN"}};if(zc(n.value))return{unaryFilter:{field:li(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:li(n.field),op:Nb(n.op),value:n.value}}})(t):t instanceof so?(function(n){const i=n.getFilters().map((s=>$f(s)));return i.length===1?i[0]:{compositeFilter:{op:Db(n.op),filters:i}}})(t):be(54877,{filter:t})}function Ob(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function Bf(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function jf(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(t){return new Sb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{}class Mb extends Vb{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.qt=!1}Lt(){if(this.qt)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.")}le(e,n,i,s){return this.Lt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.le(e,aa(n,i),s,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new W(L.UNKNOWN,r.toString())}))}me(e,n,i,s,r){return this.Lt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.me(e,aa(n,i),s,o,a,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(L.UNKNOWN,o.toString())}))}terminate(){this.qt=!0,this.connection.terminate()}}async function qa(t,e){const n=Ps(t),i={writes:e.map((s=>Cb(n.serializer,s)))};await n.le("Commit",n.serializer.databaseId,Te.emptyPath(),i)}async function Lb(t,e){const n=Ps(t),i={documents:e.map((a=>Dr(n.serializer,a)))},s=await n.me("BatchGetDocuments",n.serializer.databaseId,Te.emptyPath(),i,e.length),r=new Map;s.forEach((a=>{const l=kb(n.serializer,a);r.set(l.key.toString(),l)}));const o=[];return e.forEach((a=>{const l=r.get(a.toString());nt(!!l,55234,{key:a}),o.push(l)})),o}async function Fb(t,e){const n=Ps(t),{Mt:i,parent:s}=xb(n.serializer,hb(e));return(await n.me("RunQuery",n.serializer.databaseId,s,{structuredQuery:i.structuredQuery})).filter((r=>!!r.document)).map((r=>(function(a,l,c){const u=la(a,l.name),d=Yi(l.updateTime),m=l.createTime?Yi(l.createTime):De.min(),E=new Ze({mapValue:{fields:l.fields}}),x=Dt.newFoundDocument(u,d,m,E);return c?x.setHasCommittedMutations():x})(n.serializer,r.document,void 0)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf="ComponentProvider",Xi=new Map;function Rs(t){if(t._terminated)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.");if(!Xi.has(t)){wr(Hf,"Initializing Datastore");const e=(function(r){return new Zy(r)})((function(r,o,a,l,c){return new By(r,o,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,wf(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator,l,c._customHeaders,c.grpcFlowControlWindow)})(t._databaseId,t.app.options.appId||"",t._persistenceKey,t.app.options.apiKey,t._freezeSettings())),n=Ga(t._databaseId),i=(function(r,o,a,l){return new Mb(r,o,a,l)})(t._authCredentials,t._appCheckCredentials,e,n);Xi.set(t,i)}return Xi.get(t)}const Ub=1048576,Wf="firestore.googleapis.com",Zc=!0;class Qc{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Wf,this.ssl=Zc}else this.host=e.host,this.ssl=e.ssl??Zc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Ub)throw new W(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if((function(i,s,r,o){if(s===!0&&o===!0)throw new W(L.INVALID_ARGUMENT,`${i} and ${r} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wf(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new W(L.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&(function(i,s){if(i===s)return!0;if(!i||!s)return!1;const r=Object.keys(i),o=Object.keys(s);if(r.length!==o.length)return!1;for(const a of r)if(i[a]!==s[a])return!1;return!0})(this._customHeaders,e._customHeaders)}}class Ns{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new Vy;switch(i.type){case"firstParty":return new Uy(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new W(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const i=Xi.get(n);i&&(wr(Hf,"Removing Datastore"),Xi.delete(n),i.terminate())})(this),Promise.resolve()}}function $b(t,e){const n=typeof t=="object"?t:Cd(),i=typeof t=="string"?t:"(default)",s=xa(n,"firestore/lite").getImmediate({identifier:i});if(!s._initialized){const r=zm("firestore");r&&Bb(s,...r)}return s}function Bb(t,e,n,i={}){var c;t=Si(t,Ns);const s=Es(e),r=t._getSettings(),o={...r,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&Ad(`https://${a}`),r.host!==Wf&&r.host!==a&&mf("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...r,host:a,ssl:s,emulatorOptions:i};if(!Kn(l,o)&&(t._setSettings(l),i.mockUserToken)){let u,d;if(typeof i.mockUserToken=="string")u=i.mockUserToken,d=Ge.MOCK_USER;else{u=Km(i.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=i.mockUserToken.sub||i.mockUserToken.user_id;if(!m)throw new W(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Ge(m)}t._authCredentials=new My(new vf(u,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new ao(this.firestore,e,this._query)}}class Ae{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ae(this.firestore,e,this._key)}toJSON(){return{type:Ae._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,i){if(Cs(n,Ae._jsonSchema))return new Ae(e,i||null,new Ue(Te.fromString(n.referencePath)))}}Ae._jsonSchemaVersion="firestore/documentReference/1.0",Ae._jsonSchema={type:it("string",Ae._jsonSchemaVersion),referencePath:it("string")};class nn extends ao{constructor(e,n,i){super(e,n,(function(r){return new db(r)})(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ae(this.firestore,null,new Ue(e))}withConverter(e){return new nn(this.firestore,e,this._path)}}function Ja(t,e,...n){if(t=Pe(t),bf("collection","path",e),t instanceof Ns){const i=Te.fromString(e,...n);return Vc(i),new nn(t,null,i)}{if(!(t instanceof Ae||t instanceof nn))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Te.fromString(e,...n));return Vc(i),new nn(t.firestore,null,i)}}function cn(t,e,...n){if(t=Pe(t),arguments.length===1&&(e=Wy.newId()),bf("doc","path",e),t instanceof Ns){const i=Te.fromString(e,...n);return Oc(i),new Ae(t,null,new Ue(i))}{if(!(t instanceof Ae||t instanceof nn))throw new W(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Te.fromString(e,...n));return Oc(i),new Ae(t.firestore,t instanceof nn?t.converter:null,new Ue(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n=0){if(this.subtype=n,!Number.isInteger(n)||n<0||n>255)throw new W(L.INVALID_ARGUMENT,"The subtype for Bytes must be a value in the inclusive [0, 255] range.");this._byteString=e}static fromBase64String(e,n=0){try{return new Qe(pt.fromBase64String(e),n)}catch(i){throw new W(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(e,n=0){return new Qe(pt.fromUint8Array(e),n)}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}get data(){return this.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+", subtype: "+this.subtype+")"}isEqual(e){return this.subtype===e.subtype&&this._byteString.isEqual(e._byteString)}toJSON(){const e={type:Qe._jsonSchemaVersion,bytes:this.toBase64()};return this.subtype!==0&&(e.subtype=this.subtype),e}static fromJSON(e){if(Cs(e,Qe._jsonSchema)){const n=e.subtype??0;return Qe.fromBase64String(e.bytes,n)}}}Qe._jsonSchemaVersion="firestore/bytes/1.0",Qe._jsonSchema={type:it("string",Qe._jsonSchemaVersion),bytes:it("string"),subtype:{...it("number"),optional:!0}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e){this.value=e}isEqual(e){return this.value===e.value}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,n){if(this.seconds=e,this.increment=n,!Number.isInteger(e)||e<0||e>4294967295)throw new Error("BsonTimestamp 'seconds' must be in the range of a 32-bit unsigned integer (0-4294967295).");if(!Number.isInteger(n)||n<0||n>4294967295)throw new Error("BsonTimestamp 'increment' must be in the range of a 32-bit unsigned integer (0-4294967295).")}isEqual(e){return this.seconds===e.seconds&&this.increment===e.increment}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e){this.stringValue=e,this.value=$.fromString(e)}isEqual(e){return!(!this.value.ot()||!e.value.ot())||this.value.compareTo(e.value)===0}toJSON(){return{$t:{stringValue:this.stringValue}}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ft._jsonSchemaVersion}}static fromJSON(e){if(Cs(e,Ft._jsonSchema))return new Ft(e.latitude,e.longitude)}}Ft._jsonSchemaVersion="firestore/geoPoint/1.0",Ft._jsonSchema={type:it("string",Ft._jsonSchemaVersion),latitude:it("number"),longitude:it("number")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.value=e}isEqual(e){return this.value===e.value}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(){this.type="MaxKey"}static instance(){return Zt.MAX_KEY_VALUE_INSTANCE||(Zt.MAX_KEY_VALUE_INSTANCE=new Zt),Zt.MAX_KEY_VALUE_INSTANCE}}Zt.MAX_KEY_VALUE_INSTANCE=null;/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(){this.type="MinKey"}static instance(){return Qt.MIN_KEY_VALUE_INSTANCE||(Qt.MIN_KEY_VALUE_INSTANCE=new Qt),Qt.MIN_KEY_VALUE_INSTANCE}}Qt.MIN_KEY_VALUE_INSTANCE=null;/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n){this.pattern=e,this.options=n}isEqual(e){return this.pattern===e.pattern&&this.options===e.options}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Et._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Cs(e,Et._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Et(e.vectorValues);throw new W(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Et._jsonSchemaVersion="firestore/vectorValue/1.0",Et._jsonSchema={type:it("string",Et._jsonSchemaVersion),vectorValues:it("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=/^__.*__$/;class Hb{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new za(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ff(e,this.data,n,this.fieldTransforms)}}class zf{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new za(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Kf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw be(40011,{dataSource:t})}}class nl{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.validatePath(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new nl({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),i=this.contextWith({path:n,arrayElement:!1});return i.validatePathSegment(e),i}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),i=this.contextWith({path:n,arrayElement:!1});return i.validatePath(),i}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Vr(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Kf(this.dataSource)&&jb.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class Wb{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Ga(e)}createContext(e,n,i,s=!1){return new nl({dataSource:e,methodName:n,targetDoc:i,path:Pn.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function il(t){const e=t._freezeSettings(),n=Ga(t._databaseId);return new Wb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sl(t,e,n,i,s,r={}){const o=t.createContext(r.merge||r.mergeFields?2:0,e,n,s);ol("Data must be an object, but it was:",o,i);const a=Gf(i,o);let l,c;if(r.merge)l=new Qn(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const d of r.mergeFields){const m=Or(e,d,n);if(!o.contains(m))throw new W(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Xf(u,m)||u.push(m)}l=new Qn(u),c=o.fieldTransforms.filter((d=>l.covers(d.field)))}else l=null,c=o.fieldTransforms;return new Hb(new Ze(a),l,c)}class co extends lo{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof co}}class rl extends lo{_toFieldTransform(e){return new wb(e.path,new Lf)}isEqual(e){return e instanceof rl}}function zb(t,e,n,i){const s=t.createContext(1,e,n);ol("Data must be an object, but it was:",s,i);const r=[],o=Ze.empty();ks(i,((l,c)=>{const u=Yf(e,l,n);c=Pe(c);const d=s.childContextForFieldPath(u);if(c instanceof co)r.push(u);else{const m=uo(c,d);m!=null&&(r.push(u),o.set(u,m))}}));const a=new Qn(r);return new zf(o,a,s.fieldTransforms)}function Kb(t,e,n,i,s,r){const o=t.createContext(1,e,n),a=[Or(e,i,n)],l=[s];if(r.length%2!=0)throw new W(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<r.length;m+=2)a.push(Or(e,r[m])),l.push(r[m+1]);const c=[],u=Ze.empty();for(let m=a.length-1;m>=0;--m)if(!Xf(c,a[m])){const E=a[m];let x=l[m];x=Pe(x);const R=o.childContextForFieldPath(E);if(x instanceof co)c.push(E);else{const D=uo(x,R);D!=null&&(c.push(E),u.set(E,D))}}const d=new Qn(c);return new zf(u,d,o.fieldTransforms)}function uo(t,e,n){if(Jf(t=Pe(t)))return ol("Unsupported field value:",e,t),Gf(t,e);if(t instanceof lo)return(function(s,r){if(!Kf(r.dataSource))throw r.createError(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.createError(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(r);o&&r.fieldTransforms.push(o)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,r){const o=[];let a=0;for(const l of s){let c=uo(l,r.childContextForArray(a));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),a++}return{arrayValue:{values:o}}})(t,e)}return(function(s,r,o){if((s=Pe(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return mb(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const a=ve.fromDate(s);return{timestampValue:tr(r.serializer,a)}}if(s instanceof ve){const a=new ve(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:tr(r.serializer,a)}}if(qf(s)){const a=ve.fromInstant(s),l=new ve(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:tr(r.serializer,l)}}if(s instanceof Ft)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Qe)return s.subtype===0?{bytesValue:Yc(r.serializer,s._byteString)}:(function(l,c){const u=c.toUint8Array(),d=new Uint8Array(u.length+1);return d[0]=c.subtype,d.set(u,1),{mapValue:{fields:{[io]:{bytesValue:Yc(l,pt.fromUint8Array(d))}}}}})(r.serializer,s);if(s instanceof Ae){const a=r.databaseId,l=s.firestore._databaseId;if(!l.isEqual(a))throw r.createError(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Ka(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof Et)return(function(l,c){const u=l instanceof Et?l.toArray():l;return{mapValue:{fields:{[If]:{stringValue:Tf},[Tr]:{arrayValue:{values:u.map((m=>{if(typeof m!="number")throw c.createError("VectorValues must only contain numeric values.");return Mf(c.serializer,m)}))}}}}}})(s,r);if(s instanceof tl)return(function(l){return{mapValue:{fields:{[Tn]:{mapValue:{fields:{[Ar]:{stringValue:l.pattern},[Sr]:{stringValue:l.options}}}}}}}})(s);if(s instanceof Xa)return(function(l){return{mapValue:{fields:{[fs]:{stringValue:l.value}}}}})(s);if(s instanceof el)return(function(l){return{mapValue:{fields:{[xs]:er(l.value)}}}})(s);if(s instanceof Qa)return(function(l){return{mapValue:{fields:{[Ei]:{stringValue:l.stringValue}}}}})(s);if(s instanceof Za)return(function(l){return{mapValue:{fields:{[Bn]:{mapValue:{fields:{[Pr]:er(l.seconds),[kr]:er(l.increment)}}}}}}})(s);if(s instanceof Qt)return(function(){return{mapValue:{fields:{[Af]:{nullValue:"NULL_VALUE"}}}}})();if(s instanceof Zt)return(function(){return{mapValue:{fields:{[Ha]:{nullValue:"NULL_VALUE"}}}}})();if(jf(s))return s._toProto(r.serializer);throw r.createError(`Unsupported field value: ${ja(s)}`)})(t,e)}function Gf(t,e){const n={};return(function(s){for(const r in s)if(Object.prototype.hasOwnProperty.call(s,r))return!1;return!0})(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ks(t,((i,s)=>{const r=uo(s,e.childContextForField(i));r!=null&&(n[i]=r)})),{mapValue:{fields:n}}}function qf(t){if(typeof t!="object"||t===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&t instanceof Temporal.Instant)return!0;const e=t;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.ht=="bigint"}function Jf(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ve||t instanceof Ft||t instanceof Qe||t instanceof Ae||t instanceof lo||t instanceof Et||t instanceof Qt||t instanceof Zt||t instanceof el||t instanceof Qa||t instanceof tl||t instanceof Xa||t instanceof Za||qf(t)||jf(t))}function ol(t,e,n){if(!Jf(n)||!_f(n)){const i=ja(n);throw i==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+i)}}function Or(t,e,n){if((e=Pe(e))instanceof Ya)return e._internalPath;if(typeof e=="string")return Yf(t,e);throw Vr("Field path arguments must be of type string or ",t,!1,void 0,n)}const Gb=new RegExp("[~\\*/\\[\\]]");function Yf(t,e,n){if(e.search(Gb)>=0)throw Vr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ya(...e.split("."))._internalPath}catch{throw Vr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Vr(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new W(L.INVALID_ARGUMENT,a+t+l)}function Xf(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Qf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Or("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Qf extends Zf{data(){return super.data()}}class qb{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}class Jb{convertValue(e,n="none"){switch(Xn(e)){case 0:return null;case 2:return e.booleanValue;case 3:if("mapValue"in e){if(Rr(e))return this.convertToInt32Value(e.mapValue);if(Zn(e))return this.convertToDecimal128Value(e.mapValue)}return Ve(e.integerValue||e.doubleValue);case 4:return this.convertTimestamp(e.timestampValue);case 6:return this.convertServerTimestamp(e,n);case 7:return e.stringValue;case 8:return"bytesValue"in e?this.convertBytes(Ir(e.bytesValue)):this.convertToBytesWithSubtype(e.mapValue);case 9:return this.convertReference(e.referenceValue);case 11:return this.convertGeoPoint(e.geoPointValue);case 13:return this.convertArray(e.arrayValue,n);case 15:return this.convertObject(e.mapValue,n);case 14:return this.convertVectorValue(e.mapValue);case 12:return this.convertToRegexValue(e.mapValue);case 10:return this.convertToBsonObjectId(e.mapValue);case 5:return this.convertToBsonTimestamp(e.mapValue);case 16:return Zt.instance();case 1:return Qt.instance();default:throw be(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return ks(e,((s,r)=>{i[s]=this.convertValue(r,n)})),i}convertVectorValue(e){var i,s,r;const n=(r=(s=(i=e.fields)==null?void 0:i[Tr].arrayValue)==null?void 0:s.values)==null?void 0:r.map((o=>Ve(o.doubleValue)));return new Et(n)}convertToBsonObjectId(e){var i,s;const n=((s=(i=e.fields)==null?void 0:i[fs])==null?void 0:s.stringValue)??"";return new Xa(n)}convertToBytesWithSubtype(e){var a;const n=(a=e.fields)==null?void 0:a[io],i=n==null?void 0:n.bytesValue;if(!i)throw new Error("Received incorrect bytesValue for Bytes with subtype");const s=Ir(i).toUint8Array();if(s.length===0)throw new Error("Received empty bytesValue for Bytes with subtype");const r=s[0],o=s.slice(1);return new Qe(pt.fromUint8Array(o),r)}convertToBsonTimestamp(e){var r,o,a,l,c,u,d;const n=(r=e.fields)==null?void 0:r[Bn],i=Number((l=(a=(o=n==null?void 0:n.mapValue)==null?void 0:o.fields)==null?void 0:a[Pr])==null?void 0:l.integerValue),s=Number((d=(u=(c=n==null?void 0:n.mapValue)==null?void 0:c.fields)==null?void 0:u[kr])==null?void 0:d.integerValue);return new Za(i,s)}convertToRegexValue(e){var s,r,o,a,l,c,u,d,m,E;const n=((l=(a=(o=(r=(s=e.fields)==null?void 0:s[Tn])==null?void 0:r.mapValue)==null?void 0:o.fields)==null?void 0:a[Ar])==null?void 0:l.stringValue)??"",i=((E=(m=(d=(u=(c=e.fields)==null?void 0:c[Tn])==null?void 0:u.mapValue)==null?void 0:d.fields)==null?void 0:m[Sr])==null?void 0:E.stringValue)??"";return new tl(n,i)}convertToInt32Value(e){var i,s;const n=Number((s=(i=e.fields)==null?void 0:i[xs])==null?void 0:s.integerValue);return new el(n)}convertToDecimal128Value(e){var i,s;const n=((s=(i=e.fields)==null?void 0:i[Ei])==null?void 0:s.stringValue)??"";return new Qa(n)}convertGeoPoint(e){return new Ft(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map((i=>this.convertValue(i,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const i=Ef(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(ds(e));default:return null}}convertTimestamp(e){const n=Yn(e);return new ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Te.fromString(e);nt(Bf(i),9688,{name:e});const s=new ls(i.get(1),i.get(3)),r=new Ue(i.popFirst(5));return s.isEqual(n)||$a(`A document reference to ${r} refers to a different database (${s.projectId}/${s.database}), which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class eh extends Jb{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qe(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ae(this.firestore,null,n)}}function ca(t){const e=Rs((t=Si(t,Ae)).firestore),n=new eh(t.firestore);return Lb(e,[t._key]).then((i=>{nt(i.length===1,15618);const s=i[0];return new Zf(t.firestore,n,t._key,s.isFoundDocument()?s:null,t.converter)}))}function Yb(t){(function(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new W(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")})((t=Si(t,ao))._query);const e=Rs(t.firestore),n=new eh(t.firestore);return Fb(e,t._query).then((i=>{const s=i.map((r=>new Qf(t.firestore,n,r.key,r,t.converter)));return t._query.limitType==="L"&&s.reverse(),new qb(t,s)}))}function Xb(t,e,n){const i=al((t=Si(t,Ae)).converter,e,n),s=sl(il(t.firestore),"setDoc",t._key,i,t.converter!==null,n);return qa(Rs(t.firestore),[s.toMutation(t._key,tn.none())])}function Zb(t,e){const n=cn(t=Si(t,nn)),i=al(t.converter,e),s=sl(il(t.firestore),"addDoc",n._key,i,n.converter!==null,{});return qa(Rs(t.firestore),[s.toMutation(n._key,tn.exists(!1))]).then((()=>n))}function ei(){return new rl("serverTimestamp")}const eu="4.19.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=il(e)}set(e,n,i){this._verifyNotCommitted();const s=Vo(e,this._firestore),r=al(s.converter,n,i),o=sl(this._dataReader,"WriteBatch.set",s._key,r,s.converter!==null,i);return this._mutations.push(o.toMutation(s._key,tn.none())),this}update(e,n,i,...s){this._verifyNotCommitted();const r=Vo(e,this._firestore);let o;return o=typeof(n=Pe(n))=="string"||n instanceof Ya?Kb(this._dataReader,"WriteBatch.update",r._key,n,i,s):zb(this._dataReader,"WriteBatch.update",r._key,n),this._mutations.push(o.toMutation(r._key,tn.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Vo(e,this._firestore);return this._mutations=this._mutations.concat(new Uf(n._key,tn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new W(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Vo(t,e){if((t=Pe(t)).firestore!==e)throw new W(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function ll(t){t=Si(t,Ns);const e=Rs(t);return new Qb(t,(n=>qa(e,n)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){Oy(`${Ii}_lite`),yi(new Gn("firestore/lite",((e,{instanceIdentifier:n,options:i})=>{const s=e.getProvider("app").getImmediate(),r=new Ns(new Ly(e.getProvider("auth-internal")),new $y(s,e.getProvider("app-check-internal")),jy(s,n),s);return i&&r._setSettings(i),r}),"PUBLIC").setMultipleInstances(!0)),Sn("firestore-lite",eu,""),Sn("firestore-lite",eu,"esm2020")})();function ti(){return sv().find(s=>s.name==="trip")??kd({apiKey:"AIzaSyAVSVgO7VlNcYF8CCYIRzzZtJcpWwYh0vQ",projectId:"indonesia-trip-dcae8",appId:"1:354229712104:web:ac93f3905807aeafa7055d",authDomain:"indonesia-trip-dcae8.firebaseapp.com"},"trip")}function si(){return $b(ti())}function th(){const t=_i(ti()).currentUser;if(!t)throw new Error("Please sign in to edit your profile.");return cn(si(),"Trips","indonesia-2027","people",t.uid)}async function e_(){const t=th(),[e,n]=await Promise.all([ca(t),ca(cn(t,"private","contact"))]);if(!e.exists())throw new Error("Your profile could not be found.");const i=e.data(),s=n.data()||{};return{name:i.name,status:i.status,phone:s.phone||"",email:s.email||""}}async function t_(t){const e=th(),n=t.name.trim();if(!n||n.length>120||!["invited","committed","interested"].includes(t.status)||t.phone.trim().length>40||t.email.trim().length>254)throw new Error("Check your name, status, and contact details.");const i=ll(si());i.update(e,{name:n,status:t.status,updatedAt:ei()}),i.set(cn(e,"private","contact"),{phone:t.phone.trim(),email:t.email.trim()}),await i.commit()}async function n_(t,e,n="",i=""){const s=_i(ti()).currentUser;if(!s)throw new Error("Please sign in to add a person.");const r=t.trim();if(!r||r.length>120||!["invited","committed","interested"].includes(e))throw new Error("Enter a name of 1–120 characters and select a status.");const o=si(),a=cn(Ja(o,"Trips","indonesia-2027","people")),l=ll(o);if(l.set(a,{name:r,status:e,ownerUid:s.uid,createdAt:ei(),updatedAt:ei()}),n.trim()||i.trim()){const c={};n.trim()&&(c.phone=n.trim()),i.trim()&&(c.email=i.trim()),l.set(cn(a,"private","contact"),c)}return await l.commit(),{id:a.id,name:r,status:e}}async function i_(){return(await Yb(Ja(si(),"Trips","indonesia-2027","people"))).docs.map(e=>{const n=e.data(),i=n.status==="commited"?"committed":n.status==="interest"?"interested":n.status;if(typeof n.name!="string"||!n.name.trim()||!["invited","committed","interested"].includes(i))throw new Error("A guest entry has an invalid name or status. Please check the guest list.");return{id:e.id,name:n.name.trim(),status:i}}).sort((e,n)=>e.name.localeCompare(n.name))}async function s_(t){const e=si(),n=cn(e,"Trips","indonesia-2027","people",t.uid),i=await ca(n);if(i.exists()){const o=i.data();return{id:i.id,name:o.name,status:o.status}}const s=(t.displayName||"Traveler").trim().slice(0,120),r=ll(e);return r.set(n,{name:s,status:"interested",ownerUid:t.uid,createdAt:ei(),updatedAt:ei()}),t.email&&r.set(cn(n,"private","contact"),{email:t.email}),await r.commit(),{id:n.id,name:s,status:"interested"}}async function r_(){await Zb(Ja(si(),"Trips","indonesia-2027","guestEntries"),{enteredAt:ei()})}async function o_(t){await Xb(cn(si(),"Trips","indonesia-2027","memberActivity",t),{lastSignedInAt:ei()})}const tt=re(null),ni=re(null),Ui=re(!1),yt=re(""),jn=Zr(()=>{var t;return!!(ni.value&&((t=tt.value)==null?void 0:t.id)===ni.value.uid)}),$i=re(!1);let tu=!1;async function nr(t,e=!1){ni.value=t;const n=await s_(t);tt.value={id:t.uid,name:n.name},e&&o_(t.uid).catch(()=>{console.warn("The sign-in activity could not be recorded.")})}function nu(){tt.value={id:null,name:"Guest"},r_().catch(()=>{console.warn("The guest entry could not be recorded.")})}function a_(){if(!tu){tu=!0;try{b0(_i(ti()),async t=>{if(ni.value=t,$i.value){Ui.value=!0;return}try{t?await nr(t):tt.value=null}catch{yt.value="Signed in, but unable to load your guest profile. Check the connection and try signing in again.",tt.value=null}finally{Ui.value=!0}},()=>{yt.value="Unable to restore your session. Please reload and try again.",Ui.value=!0})}catch{yt.value="Sign-in is not configured yet. You can continue as a guest.",Ui.value=!0}}}async function iu(){yt.value="";try{ni.value&&await _0(_i(ti())),tt.value=null}catch{yt.value="Unable to sign out. Please try again."}}const _e=re("home");function qe(t){_e.value=(t==="people"||t==="profile")&&!jn.value?"home":t,window.scrollTo({top:0,behavior:"smooth"})}const l_={class:"profile-page"},c_={key:0,role:"status"},u_={key:1,role:"alert"},d_=["disabled"],f_={class:"hint"},h_={class:"primary"},p_={key:0,role:"alert"},m_={class:"profile-notice",role:"status","aria-live":"polite"},g_={key:0,class:"notice"},v_=un({__name:"ProfilePage",setup(t){const e=Hr({name:"",status:"interested",phone:"",email:""}),n=re(!0),i=re(!1),s=re(""),r=re(""),o=re("");let a;async function l(){n.value=!0,s.value="";try{Object.assign(e,await e_())}catch{s.value="Unable to load your profile. Please try again."}finally{n.value=!1}}async function c(){var u,d;if(!i.value){i.value=!0,r.value="",o.value="",clearTimeout(a);try{await t_(e),e.name=e.name.trim(),((u=tt.value)==null?void 0:u.id)===((d=ni.value)==null?void 0:d.uid)&&tt.value&&(tt.value.name=e.name),o.value="Your profile has been updated.",a=setTimeout(()=>{o.value=""},5e3)}catch(m){r.value=(m==null?void 0:m.code)==="permission-denied"?"Profile updates are not enabled yet. Please ask the site owner to deploy the updated rules.":"Unable to save your profile. Your changes are still here; please try again."}finally{i.value=!1}}}return Gr(l),qr(()=>clearTimeout(a)),(u,d)=>{var m;return q(),Q("main",l_,[I("button",{class:"back",onClick:d[0]||(d[0]=E=>H(qe)("home"))},"← Back to overview"),d[13]||(d[13]=I("div",{class:"section-eyebrow"},"Your Adventure",-1)),d[14]||(d[14]=I("h1",{class:"section-title"},[we("My "),I("em",null,"Profile")],-1)),d[15]||(d[15]=I("p",{class:"intro"},"Keep your RSVP and contact details up to date.",-1)),n.value?(q(),Q("p",c_,"Loading your profile…")):s.value?(q(),Q("div",u_,[I("p",null,Ie(s.value),1),I("button",{class:"primary",onClick:l},"Try again")])):(q(),Q("form",{key:2,onSubmit:Sa(c,["prevent"])},[I("fieldset",{disabled:i.value},[I("label",null,[d[6]||(d[6]=we("Name",-1)),ut(I("input",{"onUpdate:modelValue":d[1]||(d[1]=E=>e.name=E),required:"",maxlength:"120",pattern:".*\\S.*",autocomplete:"name"},null,512),[[Mt,e.name]])]),I("label",null,[d[8]||(d[8]=we("Status",-1)),ut(I("select",{"onUpdate:modelValue":d[2]||(d[2]=E=>e.status=E),required:""},[...d[7]||(d[7]=[I("option",{value:"invited"},"Invited",-1),I("option",{value:"committed"},"Committed",-1),I("option",{value:"interested"},"Interested",-1)])],512),[[vd,e.status]])]),I("label",null,[d[9]||(d[9]=we("Phone Number (optional)",-1)),ut(I("input",{"onUpdate:modelValue":d[3]||(d[3]=E=>e.phone=E),type:"tel",maxlength:"40",autocomplete:"tel"},null,512),[[Mt,e.phone]])]),I("label",null,[d[10]||(d[10]=we("Contact Email (optional)",-1)),ut(I("input",{"onUpdate:modelValue":d[4]||(d[4]=E=>e.email=E),type:"email",maxlength:"254",autocomplete:"email"},null,512),[[Mt,e.email]])]),d[11]||(d[11]=I("p",{class:"hint"},"Your name and status appear on the attendants list. Your phone and contact email stay private.",-1)),I("p",f_,"Sign-in email: "+Ie((m=H(ni))==null?void 0:m.email)+". Changing your contact email does not change your sign-in email.",1),I("button",h_,Ie(i.value?"Saving…":"Save Changes"),1)],8,d_),r.value?(q(),Q("p",p_,Ie(r.value),1)):Fe("",!0)],32)),(q(),at(Uu,{to:"body"},[I("div",m_,[o.value?(q(),Q("div",g_,[d[12]||(d[12]=I("span",{"aria-hidden":"true"},"✓",-1)),we(" "+Ie(o.value),1),I("button",{"aria-label":"Dismiss notification",onClick:d[5]||(d[5]=E=>o.value="")},"×")])):Fe("",!0)])]))])}}}),mn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},y_=mn(v_,[["__scopeId","data-v-7023cb50"]]),b_={class:"flights-page"},__={class:"flight-card","aria-label":"Search flights to Bali"},w_={action:"https://www.google.com/travel/flights",method:"get",target:"_blank",rel:"noopener noreferrer"},E_=["value"],I_=un({__name:"FlightsPage",setup(t){const e=re(""),n=Zr(()=>`Round trip flights from ${e.value.trim().toUpperCase()} to DPS departing June 25 2027 returning July 11 2027`);return(i,s)=>(q(),Q("main",b_,[s[7]||(s[7]=I("div",{class:"section-eyebrow"},"Getting There",-1)),s[8]||(s[8]=I("h1",{class:"section-title"},[we("Find Your "),I("em",null,"Flight")],-1)),s[9]||(s[9]=I("p",{class:"intro"},"One destination. Wherever you're starting from.",-1)),I("section",__,[s[6]||(s[6]=gt('<div class="destination" data-v-c5e6a347><span aria-hidden="true" data-v-c5e6a347>✈</span><div data-v-c5e6a347><h2 data-v-c5e6a347>Bali, Indonesia</h2><p data-v-c5e6a347>Ngurah Rai International Airport · DPS</p></div></div><dl class="dates" data-v-c5e6a347><div data-v-c5e6a347><dt data-v-c5e6a347>Departure</dt><dd data-v-c5e6a347>June 25, 2027</dd></div><div data-v-c5e6a347><dt data-v-c5e6a347>Return</dt><dd data-v-c5e6a347>July 11, 2027</dd></div></dl><p class="date-note" data-v-c5e6a347>Searching June 25–July 11. Our trip dates are flexible by a day; you can adjust them in Google Flights.</p>',3)),I("form",w_,[s[1]||(s[1]=I("label",{for:"origin-airport"},"Your origin airport",-1)),ut(I("input",{id:"origin-airport","onUpdate:modelValue":s[0]||(s[0]=r=>e.value=r),required:"",pattern:"[A-Za-z]{3}",minlength:"3",maxlength:"3",placeholder:"e.g. IND",title:"Enter a three-letter airport code, such as IND, JFK, or LAX.",autocomplete:"off",autocapitalize:"characters",spellcheck:"false","aria-describedby":"origin-help"},null,512),[[Mt,e.value]]),s[2]||(s[2]=I("p",{id:"origin-help",class:"hint"},"Enter the three-letter airport code you want to depart from.",-1)),I("input",{type:"hidden",name:"q",value:n.value},null,8,E_),s[3]||(s[3]=I("input",{type:"hidden",name:"curr",value:"USD"},null,-1)),s[4]||(s[4]=I("button",{type:"submit"},[we("Search Google Flights "),I("span",{"aria-hidden":"true"},"↗")],-1)),s[5]||(s[5]=I("p",{class:"hint"},"Opens Google Flights in a new tab with your route and dates. Review the search details there for current prices and availability.",-1))])])]))}}),T_=mn(I_,[["__scopeId","data-v-c5e6a347"]]),A_=["aria-current"],S_=["aria-current"],P_=un({__name:"NavBar",setup(t){const e=Zr(()=>_e.value==="bali"||_e.value==="bali-housing");return(n,i)=>(q(),Q("nav",null,[i[8]||(i[8]=I("div",{class:"nav-logo"},"🌴 Indonesia Trip",-1)),I("button",{class:mt(["nav-btn",{active:H(_e)==="home"}]),onClick:i[0]||(i[0]=s=>H(qe)("home"))}," Overview ",2),I("button",{class:mt(["nav-btn",{active:H(_e)==="komodo"}]),onClick:i[1]||(i[1]=s=>H(qe)("komodo"))}," Komodo ",2),I("button",{class:mt(["nav-btn",{active:e.value}]),onClick:i[2]||(i[2]=s=>H(qe)("bali"))}," Bali ",2),I("button",{class:mt(["nav-btn",{active:H(_e)==="java"}]),onClick:i[3]||(i[3]=s=>H(qe)("java"))}," East Java ",2),I("button",{class:mt(["nav-btn",{active:H(_e)==="flights"}]),onClick:i[4]||(i[4]=s=>H(qe)("flights"))}," Flights ",2),H(jn)?(q(),Q("button",{key:0,class:mt(["nav-btn",{active:H(_e)==="people"}]),"aria-current":H(_e)==="people"?"page":void 0,onClick:i[5]||(i[5]=s=>H(qe)("people"))}," attendants ",10,A_)):Fe("",!0),H(jn)?(q(),Q("button",{key:1,class:mt(["nav-btn nav-profile",{active:H(_e)==="profile"}]),"aria-current":H(_e)==="profile"?"page":void 0,onClick:i[6]||(i[6]=s=>H(qe)("profile"))},[...i[7]||(i[7]=[I("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[I("circle",{cx:"12",cy:"12",r:"10"}),I("circle",{cx:"12",cy:"9",r:"3"}),I("path",{d:"M5 19a7 7 0 0 1 14 0"})],-1),we(" Profile ",-1)])],10,S_)):Fe("",!0)]))}}),k_=mn(P_,[["__scopeId","data-v-d7a131cd"]]),C_={};function x_(t,e){return q(),Q("footer",null,[...e[0]||(e[0]=[I("span",null,"🌴 Indonesia Trip",-1),we(" · Made with love for the group · Adventure awaits ✈️ ",-1)])])}const R_=mn(C_,[["render",x_]]),N_="/images/home1.jpg",D_={class:"hero"},O_={class:"hero-inner"},V_={class:"hero-cards"},M_={class:"map-section"},L_={class:"map-frame"},F_={class:"map-svg-wrap"},U_={viewBox:"0 0 700 320",xmlns:"http://www.w3.org/2000/svg",style:{width:"100%",height:"auto"}},$_=un({__name:"HomePage",setup(t){return(e,n)=>(q(),Q("div",null,[I("section",D_,[n[4]||(n[4]=I("div",{class:"hero-pattern"},null,-1)),I("div",O_,[n[3]||(n[3]=gt('<div class="hero-stamp">Group Adventure · Indonesia</div><h1>The<br><em>Gang Goes to </em><br>Indonesia</h1><div class="image-container java1-img"><img src="'+N_+'"></div><p class="hero-sub"> Dragons, temples, volcanoes, and a whole lot of rice wine.<br>Our bucket-list trip is officially happening. </p><div class="hero-details"><div class="hero-detail"><div class="num">9–14</div><div class="label">Total Days</div></div><div class="hero-detail"><div class="num">3</div><div class="label">Destinations</div></div><div class="hero-detail"><div class="num">$35</div><div class="label">Avg / Night</div></div><div class="hero-detail"><div class="num">∞</div><div class="label">Memories</div></div><div class="hero-detail"><div class="num">0?</div><div class="label">Food Poisoning</div></div><div class="hero-detail"><div class="num">Hopefully</div><div class="label">LadyBoys</div></div></div>',5)),I("div",V_,[I("div",{class:"dest-card",onClick:n[0]||(n[0]=i=>H(qe)("komodo"))}," 🦎 Komodo Island "),I("div",{class:"dest-card",onClick:n[1]||(n[1]=i=>H(qe)("bali"))},"🌺 Bali"),I("div",{class:"dest-card",onClick:n[2]||(n[2]=i=>H(qe)("java"))},"🌋 East Java")])])]),n[8]||(n[8]=gt('<section class="itinerary-strip"><div class="itin-row"><div class="itin-stop"><div class="itin-dot"></div><div class="itin-label">Indianapolis</div><div class="itin-days">Fly Out · 23-35 hrs</div></div><div class="itin-line"></div><div class="itin-stop"><div class="itin-dot"></div><div class="itin-label">Bali (DPS)</div><div class="itin-days">Arrive · Base Camp</div></div><div class="itin-line"></div><div class="itin-stop"><div class="itin-dot"></div><div class="itin-label">Labuan Bajo</div><div class="itin-days">Komodo · 2–3 nights</div></div><div class="itin-line"></div><div class="itin-stop"><div class="itin-dot"></div><div class="itin-label">Bali</div><div class="itin-days">Explore · 3–4 nights</div></div><div class="itin-line"></div><div class="itin-stop"><div class="itin-dot"></div><div class="itin-label">East Java</div><div class="itin-days">Volcanoes · 3–4 nights</div></div><div class="itin-line"></div><div class="itin-stop"><div class="itin-dot"></div><div class="itin-label">Fly Home</div><div class="itin-days">Back to Indy</div></div></div></section>',1)),I("section",M_,[n[6]||(n[6]=I("div",{class:"map-section-title"},"Where We're Going",-1)),n[7]||(n[7]=I("h2",null,"The Route",-1)),I("div",L_,[I("div",F_,[(q(),Q("svg",U_,[...n[5]||(n[5]=[gt('<rect width="700" height="320" fill="#0D2B38"></rect><g stroke="#1B4F5A" stroke-width="0.5" opacity="0.4"><line x1="0" y1="40" x2="700" y2="40"></line><line x1="0" y1="80" x2="700" y2="80"></line><line x1="0" y1="120" x2="700" y2="120"></line><line x1="0" y1="160" x2="700" y2="160"></line><line x1="0" y1="200" x2="700" y2="200"></line><line x1="0" y1="240" x2="700" y2="240"></line><line x1="0" y1="280" x2="700" y2="280"></line></g><path d="M80,170 C100,155 140,148 190,150 C240,152 300,145 360,148 C400,150 430,155 450,165 C440,178 420,182 390,180 C350,178 300,175 260,178 C220,180 180,178 150,175 C120,172 90,180 80,170Z" fill="#3D7A5C" opacity="0.85"></path><text x="265" y="168" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="11" text-anchor="middle" letter-spacing="2" opacity="0.9"> JAVA </text><circle cx="390" cy="162" r="6" fill="#E8714A" opacity="0.9"></circle><circle cx="390" cy="162" r="10" fill="none" stroke="#E8714A" stroke-width="1.5" opacity="0.5"></circle><text x="390" y="145" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="9" text-anchor="middle" letter-spacing="1"> EAST JAVA </text><text x="390" y="135" fill="#E8714A" font-family="Special Elite, monospace" font-size="8" text-anchor="middle"> 🌋 Bromo · Ijen </text><path d="M470,158 C480,152 505,150 520,153 C530,156 525,165 515,168 C500,170 478,168 470,158Z" fill="#3D7A5C" opacity="0.85"></path><text x="495" y="163" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="9" text-anchor="middle" letter-spacing="1"> BALI </text><circle cx="495" cy="155" r="6" fill="#C9A84C" opacity="0.9"></circle><circle cx="495" cy="155" r="10" fill="none" stroke="#C9A84C" stroke-width="1.5" opacity="0.5"></circle><text x="495" y="138" fill="#C9A84C" font-family="Special Elite, monospace" font-size="8" text-anchor="middle"> 🌺 Temples · Rice </text><text x="495" y="128" fill="#C9A84C" font-family="Special Elite, monospace" font-size="8" text-anchor="middle"> Terraces · Adventure </text><path d="M535,155 C543,150 555,150 562,155 C558,163 545,165 535,160 C533,158 533,157 535,155Z" fill="#3D7A5C" opacity="0.7"></path><path d="M575,152 C590,147 615,147 630,153 C628,162 612,165 595,163 C582,160 574,158 575,152Z" fill="#3D7A5C" opacity="0.7"></path><path d="M590,185 C610,178 640,175 665,178 C668,187 655,192 635,193 C610,193 593,192 590,185Z" fill="#3D7A5C" opacity="0.8"></path><text x="630" y="188" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="9" text-anchor="middle" letter-spacing="1" opacity="0.8"> FLORES </text><circle cx="580" cy="185" r="6" fill="#E8714A" opacity="0.9"></circle><circle cx="580" cy="185" r="10" fill="none" stroke="#E8714A" stroke-width="1.5" opacity="0.5"></circle><text x="580" y="208" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="9" text-anchor="middle" letter-spacing="1"> KOMODO </text><text x="580" y="218" fill="#E8714A" font-family="Special Elite, monospace" font-size="8" text-anchor="middle"> 🦎 Liveaboard </text><text x="580" y="168" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="7.5" text-anchor="middle" opacity="0.7"> Labuan Bajo </text><path d="M30,30 Q200,60 495,155" stroke="#E8714A" stroke-width="1.5" fill="none" stroke-dasharray="5,4" opacity="0.5"></path><circle cx="30" cy="30" r="4" fill="#E8714A" opacity="0.7"></circle><text x="30" y="20" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="8" text-anchor="middle" opacity="0.7"> IND </text><path d="M495,155 Q540,170 580,185" stroke="#C9A84C" stroke-width="1.5" fill="none" stroke-dasharray="3,3" opacity="0.6"></path><path d="M580,185 Q540,170 495,155" stroke="#C9A84C" stroke-width="1.5" fill="none" stroke-dasharray="3,3" opacity="0.6"></path><path d="M495,155 Q445,158 390,162" stroke="#C9A84C" stroke-width="1.5" fill="none" stroke-dasharray="3,3" opacity="0.6"></path><rect x="10" y="270" width="200" height="42" fill="rgba(0,0,0,0.3)" rx="2"></rect><circle cx="25" cy="283" r="4" fill="#E8714A"></circle><text x="35" y="287" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="8"> Destination </text><circle cx="25" cy="300" r="4" fill="#C9A84C"></circle><text x="35" y="304" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="8"> Base (Bali) </text><line x1="110" y1="283" x2="130" y2="283" stroke="#E8714A" stroke-width="1.5" stroke-dasharray="4,3"></line><text x="135" y="287" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="8"> Flight </text><line x1="110" y1="300" x2="130" y2="300" stroke="#C9A84C" stroke-width="1.5" stroke-dasharray="3,3"></line><text x="135" y="304" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="8"> Route </text><text x="690" y="20" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="9" text-anchor="end" opacity="0.5" letter-spacing="2"> INDONESIA · TRIP MAP </text>',39)])]))])])]),n[9]||(n[9]=gt('<section style="background:var(--teal);padding:4rem 2rem;"><div style="max-width:1000px;margin:0 auto;"><div class="section-eyebrow" style="color:#faf6f0;">Save the Date</div><h2 class="section-title" style="color:#faf6f0;"> June – July <em>2027</em></h2><p style="color:#faf6f0;text-align:center;"> June 25/26 – July 10/11 · Exact travel dates to be confirmed. Faded dates mark the flexible start and end days. </p><table style="width:100%;max-width:560px;margin:2rem auto 0;border-collapse:collapse;color:#faf6f0;font-family:&quot;Special Elite&quot;, monospace;text-align:center;"><thead><tr><th style="padding:0.75rem 0;opacity:0.6;font-weight:normal;letter-spacing:2px;border-bottom:1px solid rgba(250, 246, 240, 0.25);"> SUN </th><th style="padding:0.75rem 0;opacity:0.6;font-weight:normal;letter-spacing:2px;border-bottom:1px solid rgba(250, 246, 240, 0.25);"> MON </th><th style="padding:0.75rem 0;opacity:0.6;font-weight:normal;letter-spacing:2px;border-bottom:1px solid rgba(250, 246, 240, 0.25);"> TUE </th><th style="padding:0.75rem 0;opacity:0.6;font-weight:normal;letter-spacing:2px;border-bottom:1px solid rgba(250, 246, 240, 0.25);"> WED </th><th style="padding:0.75rem 0;opacity:0.6;font-weight:normal;letter-spacing:2px;border-bottom:1px solid rgba(250, 246, 240, 0.25);"> THU </th><th style="padding:0.75rem 0;opacity:0.6;font-weight:normal;letter-spacing:2px;border-bottom:1px solid rgba(250, 246, 240, 0.25);"> FRI </th><th style="padding:0.75rem 0;opacity:0.6;font-weight:normal;letter-spacing:2px;border-bottom:1px solid rgba(250, 246, 240, 0.25);"> SAT </th></tr></thead><tbody><tr><td style="padding:0.9rem 0;"><span style="display:block;font-size:0.55em;letter-spacing:1px;opacity:0.8;">JUN</span>20</td><td style="padding:0.9rem 0;">21</td><td style="padding:0.9rem 0;">22</td><td style="padding:0.9rem 0;">23</td><td style="padding:0.9rem 0;">24</td><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;opacity:0.6;">25</td><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;">26</td></tr><tr><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;">27</td><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;">28</td><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;">29</td><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;">30</td><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;"><span style="display:block;font-size:0.55em;letter-spacing:1px;opacity:0.8;">JUL</span>1</td><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;">2</td><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;">3</td></tr><tr><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;">4</td><td style="padding:0.9rem 0;background:linear-gradient(135deg, var(--coral) 0%, var(--coral) 50%, var(--gold) 50%, var(--gold) 100%);color:#faf6f0;">5</td><td style="padding:0.9rem 0;background:var(--gold);color:var(--teal);">6</td><td style="padding:0.9rem 0;background:var(--gold);color:var(--teal);">7</td><td style="padding:0.9rem 0;background:var(--gold);color:var(--teal);">8</td><td style="padding:0.9rem 0;background:var(--gold);color:var(--teal);">9</td><td style="padding:0.9rem 0;background:var(--gold);color:var(--teal);">10</td></tr><tr><td style="padding:0.9rem 0;background:var(--gold);color:var(--teal);opacity:0.6;">11</td><td style="padding:0.9rem 0;">12</td><td style="padding:0.9rem 0;">13</td><td style="padding:0.9rem 0;">14</td><td style="padding:0.9rem 0;">15</td><td style="padding:0.9rem 0;">16</td><td style="padding:0.9rem 0;">17</td></tr></tbody></table><div style="display:flex;gap:2rem;justify-content:center;flex-wrap:wrap;margin-top:1.5rem;color:#faf6f0;font-family:&quot;Special Elite&quot;, monospace;font-size:0.85rem;"><div style="display:flex;align-items:center;gap:0.5rem;"><span style="width:1rem;height:1rem;background:var(--coral);display:inline-block;border-radius:2px;"></span> June 25/26 – July 5 </div><div style="display:flex;align-items:center;gap:0.5rem;"><span style="width:1rem;height:1rem;background:var(--gold);display:inline-block;border-radius:2px;"></span> July 5 – 10/11 </div></div></div></section><section style="background:var(--cream);padding:4rem 2rem;"><div style="max-width:1000px;margin:0 auto;"><div class="section-eyebrow">Before You Go</div><h2 class="section-title">Trip <em>Essentials</em></h2><div class="tips-grid" style="margin-top:2rem;"><div class="tip-card"><div class="tip-icon">✈️</div><div class="tip-title">Getting There</div><div class="tip-text"> Fly from Indianapolis (IND) to Bali&#39;s Ngurah Rai Airport (DPS). Expect 23–35 hours with 1–2 layovers, typically through Tokyo, Singapore, or Seoul. </div></div><div class="tip-card"><div class="tip-icon">🏠</div><div class="tip-title">Where We Stay</div><div class="tip-text"> Private luxury villas &amp; Airbnbs with pools — just $10–30/person/night in a big group. Bali has incredible villa options that rival 5-star hotels at a fraction of the cost. </div></div><div class="tip-card"><div class="tip-icon">🚗</div><div class="tip-title">Getting Around</div><div class="tip-text"> Rent private drivers throughout Bali and East Java. A full day with a driver runs around $35 USD and they often double as knowledgeable local guides. </div></div><div class="tip-card"><div class="tip-icon">💰</div><div class="tip-title">Budget Tips</div><div class="tip-text"> Eat at local warungs ($1–2/meal). Temple entrance fees are typically $3–6 USD. The more people in the group, the cheaper accommodation and drivers get per person. </div></div><div class="tip-card"><div class="tip-icon">📋</div><div class="tip-title">Visa &amp; Entry</div><div class="tip-text"> Visa on Arrival costs $35 USD, valid for 30 days. Bali also requires a $10 tourist levy — pay online before arrival at lovebali.baliprov.go.id for convenience. </div></div><div class="tip-card"><div class="tip-icon">🌡️</div><div class="tip-title">Best Time to Go</div><div class="tip-text"> Dry season (May–October) is ideal. July–August is peak season; book villas 2–3 months ahead. Shoulder months like May or September offer great weather with fewer crowds. </div></div></div></div></section>',2))]))}}),B_="/images/komodo1.webp",j_="/images/komodo2.webp",H_="/images/komodo3.jpeg",W_="/images/komodo4.jpeg",z_="/images/komodo5.jpeg",K_={};function G_(t,e){return q(),Q("div",null,[...e[0]||(e[0]=[gt('<div class="komodo-hero"><div class="dest-hero-inner"><div class="dest-hero-top"><div class="dest-hero-text"><div class="dest-page-stamp">Stop 01 · Komodo Islands</div><h1 class="dest-h1"> Komodo<em>Dragon</em>Country <div class="image-container"><img src="'+B_+'"></div></h1><p class="dest-tagline">Indonesia&#39;s most primal corner — ancient reptiles, electric-blue waters, and the feeling that you&#39;ve sailed off the edge of the map.</p><div class="dest-stats"><div class="dest-stat"><div class="s-num">2–3</div><div class="s-label">Nights Liveaboard</div></div><div class="dest-stat"><div class="s-num">$255</div><div class="s-label">Per Person</div></div><div class="dest-stat"><div class="s-num">UNESCO</div><div class="s-label">World Heritage Site</div></div></div></div></div></div></div><div class="page-content"><div class="tape">Liveaboard · Budget Shared Cabin</div><p class="section-intro">We&#39;re sailing from Labuan Bajo on a budget liveaboard — exploring Komodo National Park by boat, sleeping under the stars, and waking up to new islands every morning.</p><div class="highlight-box"><h3>The Liveaboard Plan</h3><p>A 3D/2N budget liveaboard with shared cabins from Labuan Bajo — similar to the GetYourGuide option you found. The boat takes care of everything: meals, snorkeling gear, national park entry, and all travel between islands. Just show up and adventure begins.</p></div><hr class="dashed-divider"><div class="section-eyebrow">Day by Day</div><h2 class="section-title">The <em>Itinerary</em></h2><div class="day-list"><div class="day-row"><div class="day-num">1</div><div class="day-content"><div class="day-title">Arrive Labuan Bajo → Board the Boat</div><div class="day-desc">Fly from Bali to Labuan Bajo (LBJ) — about 1.5 hrs. Board your liveaboard in the afternoon. Sail toward Komodo with sunset over the Lesser Sundas. First dinner on deck.</div></div></div><div class="day-row"><div class="day-num">2</div><div class="day-content"><div class="day-title">Komodo Island — Dragon Trek &amp; Snorkeling</div><div class="day-desc">Morning hike through Komodo Island with a park ranger to spot the famous Komodo Dragons in the wild. Afternoon snorkeling at the famous Pink Beach — one of just a handful of pink sand beaches on earth. Incredible coral and marine life.</div></div></div><div class="day-row"><div class="day-num">3</div><div class="day-content"><div class="day-title">Rinca Island, Manta Point &amp; Padar</div><div class="day-desc">Optional second dragon trek on Rinca Island (smaller crowds). Snorkel or dive at Manta Point for a chance to swim with manta rays. Late afternoon hike up Padar Island for one of Indonesia&#39;s most photographed panoramas — multi-colored beaches below on three sides.</div></div></div><div class="day-row"><div class="day-num">4</div><div class="day-content"><div class="day-title">Return to Labuan Bajo → Fly back to Bali</div><div class="day-desc">Morning sail back to Labuan Bajo. Afternoon flight back to Bali. Check into the villa, collapse into a pool, and debrief over Bintang beers.</div></div></div></div><hr class="dashed-divider"><div class="section-eyebrow">What&#39;s Included</div><h2 class="section-title">On the <em>Boat</em></h2><div class="activities-grid"><div class="activity-card"><div class="card-color-bar" style="background:var(--jungle);"></div><div class="card-body"><div class="card-tag">Wildlife</div><div class="card-name">Komodo Dragon Trek</div><div class="card-desc">Guided walk through Komodo National Park with a licensed ranger. The Komodo Dragon is the world&#39;s largest living lizard — up to 10 feet long and genuinely prehistoric-looking. They roam freely.</div><div class="card-footer"><span class="card-price">Included</span><span class="card-duration">2–3 hrs</span></div><div class="image-container"><img src="'+j_+'"></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--teal);"></div><div class="card-body"><div class="card-tag">Snorkeling / Diving</div><div class="card-name">Pink Beach Snorkel</div><div class="card-desc">Snorkel the pristine coral reefs of Pink Beach — named for the rosy tint of its sand, caused by red coral fragments. One of Indonesia&#39;s most magical stretches of coast, with turtles and reef sharks.</div><div class="card-footer"><span class="card-price">Included</span><span class="card-duration">Afternoon</span></div><div class="image-container"><img src="'+H_+'"></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--coral);"></div><div class="card-body"><div class="card-tag">Marine Life</div><div class="card-name">Manta Point Dive / Snorkel</div><div class="card-desc">Swim with giant oceanic manta rays with wingspans up to 5.5 meters. Komodo&#39;s waters are part of the Coral Triangle — the planet&#39;s most biodiverse marine zone. Truly once-in-a-lifetime.</div><div class="card-footer"><span class="card-price">Included</span><span class="card-duration">2 hrs</span></div><div class="image-container"><img src="'+W_+'"></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--gold);"></div><div class="card-body"><div class="card-tag">Hiking</div><div class="card-name">Padar Island Summit</div><div class="card-desc">Hike 30–45 minutes up to the island&#39;s ridge for the iconic three-beach panorama — arguably the most photographed view in all of Indonesia. Absolutely worth the sweat. Plan for sunrise.</div><div class="card-footer"><span class="card-price">Included</span><span class="card-duration">1 hr hike</span></div><div class="image-container"><img src="'+z_+'"></div></div></div></div><hr class="dashed-divider"><div class="info-band"><div class="section-eyebrow" style="text-align:center;margin-bottom:1.2rem;">Trip Logistics</div><div class="info-grid"><div class="info-item"><div class="i-label">Departs From</div><div class="i-val">Labuan Bajo, Flores</div></div><div class="info-item"><div class="i-label">Cost Per Person</div><div class="i-val">~$255 USD</div></div><div class="info-item"><div class="i-label">Duration</div><div class="i-val">3 Days / 2 Nights</div></div><div class="info-item"><div class="i-label">Accommodation</div><div class="i-val">Shared Cabin, Boat</div></div><div class="info-item"><div class="i-label">Included</div><div class="i-val">Meals, Gear, Park Entry</div></div><div class="info-item"><div class="i-label">Book Via</div><div class="i-val">GetYourGuide</div></div></div></div><a href="https://www.getyourguide.com/labuan-bajo-l106237/3d2n-budget-komodo-liveaboard-with-shared-cabin-t1185898/" target="_blank" class="booking-cta">→ Book the Liveaboard on GetYourGuide</a><div class="tips-grid" style="margin-top:2.5rem;"><div class="tip-card"><div class="tip-icon">🤿</div><div class="tip-title">Bring Your Own Mask</div><div class="tip-text">Shared snorkel gear on budget boats varies in quality. Bringing your own mask and snorkel makes a big difference. Fins are usually fine shared.</div></div><div class="tip-card"><div class="tip-icon">🧴</div><div class="tip-title">Reef-Safe Sunscreen Only</div><div class="tip-text">Komodo is a UNESCO site with protected coral. Use reef-safe sunscreen only — it protects the ecosystem and you won&#39;t get hassled by rangers.</div></div><div class="tip-card"><div class="tip-icon">🌊</div><div class="tip-title">Check Sea Conditions</div><div class="tip-text">Aug–Sept are best for calm seas and manta ray sightings. April–July is still excellent. Dec–Feb can be rougher in the Flores Sea.</div></div><div class="tip-card"><div class="tip-icon">👟</div><div class="tip-title">Closed-Toe Shoes for Treks</div><div class="tip-text">Required for dragon treks. Sandals won&#39;t cut it — the terrain is rocky and you&#39;re walking near large reptiles that can run 12 mph. Pack trail shoes.</div></div></div></div>',2)])])}const q_=mn(K_,[["render",G_]]),nh="/images/bali1.jpg",J_={class:"page-content"},Y_=un({__name:"BaliPage",setup(t){return(e,n)=>(q(),Q("div",null,[n[2]||(n[2]=gt('<div class="bali-hero"><div class="dest-hero-inner"><div class="dest-hero-top"><div class="dest-hero-text"><div class="dest-page-stamp">Stop 02 · Island of the Gods</div><h1 class="dest-h1"> Bali<em>Untamed</em><div class="image-container"><img src="'+nh+'"></div></h1><p class="dest-tagline">Rice terraces, sea temples, jungle swings, and the best $2 meal you&#39;ll ever eat. The relaxing (and occasionally adrenaline-fueled) heart of our trip.</p><div class="dest-stats"><div class="dest-stat"><div class="s-num">3–4</div><div class="s-label">Nights</div></div><div class="dest-stat"><div class="s-num">$10–30</div><div class="s-label">Villa / Person / Night</div></div><div class="dest-stat"><div class="s-num">$35</div><div class="s-label">Driver / Full Day</div></div></div></div></div></div></div>',1)),I("div",J_,[n[1]||(n[1]=gt('<div class="tape">Activities · Culture · Adventure</div><p class="section-intro">Bali is our home base and relaxation zone — but there&#39;s nothing passive about it. Between ancient temples, jungle ATVs, sacred springs, and epic sunsets, every day here earns its place.</p><div class="section-eyebrow">Day by Day</div><h2 class="section-title">Sample <em>Itinerary</em></h2><div class="day-list"><div class="day-row"><div class="day-num">1</div><div class="day-content"><div class="day-title">Arrive &amp; Settle In Ubud</div><div class="day-desc">Check into your villa in Ubud — the cultural heart of Bali. Evening walk through the Ubud Art Market. Dinner at a warung (local Indonesian diner) for around $2–5 USD. Early night — jet lag is real after 30+ hours of travel.</div></div></div><div class="day-row"><div class="day-num">2</div><div class="day-content"><div class="day-title">Ubud Cultural Day — Temples, Terraces &amp; Monkeys</div><div class="day-desc">Start early at Tegallalang Rice Terraces before the tour buses arrive. Visit Sacred Monkey Forest Sanctuary (hold your sunglasses). Afternoon: Tirta Empul Holy Spring Temple for a traditional purification ceremony. Sunset at Tanah Lot Sea Temple. Private driver all day — ~$35.</div></div></div><div class="day-row"><div class="day-num">3</div><div class="day-content"><div class="day-title">Adventure Day — ATV &amp; Whitewater Rafting</div><div class="day-desc">Morning ATV quad bike ride through rice paddies, jungle tunnels, and muddy rivers. Afternoon: whitewater rafting down the Ayung River through tropical rainforest, past stone carvings and hidden waterfalls. Buffet lunch included. Full-day combo package ~$60/person.</div></div></div><div class="day-row"><div class="day-num">4</div><div class="day-content"><div class="day-title">Mt. Batur Sunrise Hike (Optional) or Beach Day</div><div class="day-desc">For the early risers: pre-dawn drive to Mt. Batur for a 2-hour guided sunrise hike to the volcano rim. Back by 11am. OR: beach day in Seminyak or Nusa Penida snorkel trip. Evening: Uluwatu Temple sunset + Kecak fire dance show for the ultimate Bali finale.</div></div></div></div><hr class="dashed-divider"><div class="section-eyebrow">Top Activities with Prices</div><h2 class="section-title">Things to <em>Do</em></h2><div class="activities-grid"><div class="activity-card"><div class="card-color-bar" style="background:var(--jungle);"></div><div class="card-body"><div class="card-tag">Culture · Temples</div><div class="card-name">Ubud Cultural Full-Day Tour</div><div class="card-desc">Private driver takes you to Tegallalang Rice Terraces, Sacred Monkey Forest, Tirta Empul Holy Spring, and Tanah Lot Sea Temple. A Balinese dress is often included for photos at the temple. One of the best ways to see Bali with a first-time group.</div><div class="card-footer"><span class="card-price">$45–$80/person</span><span class="card-duration">Full Day</span></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--coral);"></div><div class="card-body"><div class="card-tag">Adventure · Outdoors</div><div class="card-name">ATV Quad Bike + Rafting Combo</div><div class="card-desc">1.5 hrs of off-road ATV through rice paddies, jungle tunnels, and river crossings. Then 2 hrs rafting the 12-km Ayung River with Class II–III rapids. Hotel transfers and buffet lunch included. Epic group activity — great for laughs and photos.</div><div class="card-footer"><span class="card-price">~$55–$65/person</span><span class="card-duration">Full Day</span></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--teal);"></div><div class="card-body"><div class="card-tag">Hiking · Volcano</div><div class="card-name">Mt. Batur Sunrise Hike</div><div class="card-desc">Pre-dawn hike up Bali&#39;s most accessible volcano for one of Southeast Asia&#39;s great sunrises. The 2-hour trek reaches the rim at 1,717m. Breakfast of eggs cooked in volcanic steam at the top. Back at your villa by mid-morning.</div><div class="card-footer"><span class="card-price">$17–$45/person</span><span class="card-duration">5–6 hrs total</span></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--gold);"></div><div class="card-body"><div class="card-tag">Island Day Trip</div><div class="card-name">Nusa Penida Snorkeling Tour</div><div class="card-desc">A quick boat ride to Nusa Penida — a rugged island off Bali&#39;s coast with rainforested hills and crystal-clear water. Swim with manta rays at Manta Point, visit the iconic Kelingking Beach cliff, and snorkel Diamond Beach. Full day from Bali.</div><div class="card-footer"><span class="card-price">~$50–$70/person</span><span class="card-duration">Full Day</span></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:#7D6B5C;"></div><div class="card-body"><div class="card-tag">Culture · Spiritual</div><div class="card-name">Tirta Empul Purification Ceremony</div><div class="card-desc">Bali&#39;s holiest site — a 10th-century water temple where locals and visitors bathe in sacred spring pools for purification. One of the most unique cultural experiences in Bali. Sarong rental included. Entrance ~$3 USD.</div><div class="card-footer"><span class="card-price">~$3 entry</span><span class="card-duration">2 hrs</span></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--stamp-red);"></div><div class="card-body"><div class="card-tag">Sunset · Culture</div><div class="card-name">Uluwatu Temple + Kecak Dance</div><div class="card-desc">The Uluwatu Temple perches dramatically on a sea cliff 70m above the Indian Ocean. As the sun sets, watch a traditional Kecak fire dance performance on the cliff&#39;s edge — one of Bali&#39;s most atmospheric experiences. Memorable evening for the whole group.</div><div class="card-footer"><span class="card-price">$10–$20/person</span><span class="card-duration">Evening</span></div></div></div></div><hr class="dashed-divider"><div class="highlight-box"><h3>Spa Day Reminder 💆</h3><p>Don&#39;t skip a Balinese massage. A 60-minute traditional massage at a local spa runs $5–10 USD. The same treatment at a resort costs $50+. We&#39;re going local. Book a group session at a Ubud spa — most fit 6–10 people and can be arranged through your driver.</p></div><div class="tips-grid" style="margin-top:2.5rem;"><div class="tip-card"><div class="tip-icon">🐒</div><div class="tip-title">Monkey Forest Warning</div><div class="tip-text">The monkeys at Sacred Monkey Forest are not shy. Hold your phone, sunglasses, and any snacks tightly. They will take your things and show zero remorse.</div></div><div class="tip-card"><div class="tip-icon">🕌</div><div class="tip-title">Temple Dress Code</div><div class="tip-text">Shoulders and knees must be covered at all temples. Sarong rentals are available at entrances for a small fee (often included in your tour).</div></div><div class="tip-card"><div class="tip-icon">🍜</div><div class="tip-title">Eat at Warungs</div><div class="tip-text">Local family-run warungs serve incredible nasi goreng (fried rice) for $1–2 USD. Don&#39;t eat tourist-area restaurants every night or you&#39;ll blow your budget for no reason.</div></div><div class="tip-card"><div class="tip-icon">🌅</div><div class="tip-title">Book Activities Early</div><div class="tip-text">Bali fills up, especially in July–August. Book the Mt. Batur hike and Nusa Penida tours at least a few days in advance to get preferred times.</div></div></div><hr class="dashed-divider"><div class="section-eyebrow">Where We Stay</div><h2 class="section-title">Housing <em>Options</em></h2><p class="section-intro">From private pool villas in Ubud to beachfront stays in Seminyak — here&#39;s the full breakdown of where the group can stay, with prices and trade-offs.</p>',16)),I("button",{class:"booking-cta",style:{background:"var(--teal)"},onClick:n[0]||(n[0]=i=>H(qe)("bali-housing"))},"→ Explore Housing Options")])]))}}),X_="/images/BaliVilla1.avif",Z_={class:"page-content"},Q_=un({__name:"BaliHousingPage",setup(t){return(e,n)=>(q(),Q("div",null,[n[2]||(n[2]=gt('<div class="bali-hero"><div class="dest-hero-inner"><div class="dest-hero-top"><div class="dest-hero-text"><div class="dest-page-stamp">Stop 02 · Bali · Housing</div><h1 class="dest-h1"> Where We<em>Stay</em><div class="image-container"><img src="'+nh+'"></div></h1><p class="dest-tagline"></p><div class="dest-stats"><div class="dest-stat"><div class="s-num"></div><div class="s-label"></div></div><div class="dest-stat"><div class="s-num"></div><div class="s-label"></div></div><div class="dest-stat"><div class="s-num"></div><div class="s-label"></div></div></div></div></div></div></div>',1)),I("div",Z_,[I("button",{class:"booking-cta",style:{background:"var(--teal)","margin-bottom":"1.5rem"},onClick:n[0]||(n[0]=i=>H(qe)("bali"))},"← Back to Bali"),n[1]||(n[1]=gt('<div class="tape">Villas · Airbnbs · Where to Sleep</div><p class="section-intro"></p><div class="section-eyebrow">Compare Your Options</div><h2 class="section-title">Housing <em>Options</em></h2><div class="activities-grid"><div class="activity-card"><div class="card-color-bar" style="background:var(--jungle);"></div><div class="card-body"><div class="card-tag"></div><div class="card-name">Luxury Beach Front Villa with Infinity Pool, Staff and Breathtaking Views!</div><div class="card-desc"><p>Private villa with 5 bedrooms, infinity pool, and direct beach access. Includes daily staff for cleaning and breakfast. Perfect for groups looking for luxury and privacy.</p><ul><li>5 Bedrooms</li><li>5 Bathrooms</li><li>Infinity Pool</li><li>Beach Access</li><li>Daily Staff Service</li></ul></div><div class="card-footer"><span class="card-price">$336 a night</span><span class="card-duration">$100pp for 3 nights for 10 people <a href="https://www.vrbo.com/497641ha?chkin=2027-04-30&amp;chkout=2027-05-03&amp;d1=2027-04-30&amp;d2=2027-05-03&amp;startDate=2027-04-30&amp;endDate=2027-05-03&amp;flexibility=2_DAY_LOWER&amp;flexibility=3_DAY_UPPER&amp;searchRange=2026-07-01_2026-07-31&amp;searchRange=2027-05-01_2027-05-31&amp;x_pwa=1&amp;rfrr=HSR&amp;pwa_ts=1782167714867&amp;referrerUrl=aHR0cHM6Ly93d3cudnJiby5jb20vSG90ZWwtU2VhcmNo&amp;useRewards=true&amp;adults=10&amp;regionId=602651&amp;destination=Bali%2C+Indonesia&amp;destType=MARKET&amp;latLong=-8.340539%2C115.09195&amp;searchId=254f5d1d-249c-46fb-aa1b-23d751d87e5d&amp;sort=RECOMMENDED&amp;top_dp=336&amp;top_cur=USD&amp;userIntent=&amp;selectedRoomType=29491463&amp;selectedRatePlan=00012ef2b62974b14101a7853eeee38d3e6e&amp;expediaPropertyId=29491463">(VRBO Link)</a></span></div><div class="image-container"><img src="'+X_+'"></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--coral);"></div><div class="card-body"><div class="card-tag"></div><div class="card-name"></div><div class="card-desc"></div><div class="card-footer"><span class="card-price"></span><span class="card-duration"></span></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--gold);"></div><div class="card-body"><div class="card-tag"></div><div class="card-name"></div><div class="card-desc"></div><div class="card-footer"><span class="card-price"></span><span class="card-duration"></span></div></div></div></div><hr class="dashed-divider"><div class="highlight-box"><h3>adawd</h3><p></p></div><div class="tips-grid" style="margin-top:2.5rem;"><div class="tip-card"><div class="tip-icon"></div><div class="tip-title">QSQSQS</div><div class="tip-text"></div></div><div class="tip-card"><div class="tip-icon"></div><div class="tip-title"></div><div class="tip-text"></div></div></div>',8))])]))}}),ew="/images/java1.jpeg",tw="/images/MtIjen.jpg",nw="/images/mtbromo.jpeg",iw="/images/tumpak-sewu-waterfalls1.jpg",sw={};function rw(t,e){return q(),Q("div",null,[...e[0]||(e[0]=[gt('<div class="java-hero"><div class="dest-hero-inner"><div class="dest-hero-top"><div class="dest-hero-text"><div class="dest-page-stamp">Stop 03 · East Java, Indonesia</div><h1 class="dest-h1"> East<em>Java</em><div class="image-container"><img src="'+ew+'"></div></h1><p class="dest-tagline">Blue fire, sulfur mines, alien caldera landscapes, and a waterfall so big they call it Indonesia&#39;s Niagara. This is the hiking chapter.</p><div class="dest-stats"><div class="dest-stat"><div class="s-num">3–4</div><div class="s-label">Days Hiking</div></div><div class="dest-stat"><div class="s-num">3</div><div class="s-label">Major Hikes</div></div><div class="dest-stat"><div class="s-num">~$250</div><div class="s-label">Full 3D2N Tour</div></div></div></div></div></div></div><div class="page-content"><div class="tape">Tumpak Sewu · Mt. Bromo · Mt. Ijen</div><p class="section-intro">East Java is the adventure finale — three of Indonesia&#39;s most dramatic natural wonders packed into 3–4 days of early mornings, jeep rides, and unforgettable volcanic landscapes.</p><div class="highlight-box"><h3>Recommended: The 3D/2N East Java Tour</h3><p>The most efficient way to hit all three highlights is a pre-booked 3-day, 2-night guided tour from Bali or Surabaya. These tours handle all transportation (including the Bali ferry), accommodation, breakfast, and expert local guides — starting around $250/person. Single-day Bromo trips start around $40.</p></div><div class="section-eyebrow">Day by Day</div><h2 class="section-title">The <em>Itinerary</em></h2><div class="day-list"><div class="day-row"><div class="day-num">1</div><div class="day-content"><div class="day-title">Bali → Ferry → Ijen Area (Banyuwangi)</div><div class="day-desc">Early morning drive from Bali to Gilimanuk Harbor. Take the ferry across the Bali Strait to East Java. Drive 6–7 hours to the Ijen area in Banyuwangi. Check in at your guesthouse. Rest up — you&#39;ll be waking up at 1:00am for the main event.</div></div></div><div class="day-row"><div class="day-num">2</div><div class="day-content"><div class="day-title">Mt. Ijen Blue Fire (1am) → Mt. Bromo Sunrise</div><div class="day-desc">1:00am: depart for Paltuding. 2-hour trek up Mt. Ijen in the dark. Descend into the crater to witness the extraordinary blue fire — sulfuric gas igniting into electric blue flames, visible only before dawn. After sunrise over the turquoise acid lake, drive 5–6 hrs to the Bromo area. Check in. Rest.</div></div></div><div class="day-row"><div class="day-num">3</div><div class="day-content"><div class="day-title">Mt. Bromo Sunrise Jeep → Tumpak Sewu Waterfall</div><div class="day-desc">2:30am: jeep to Penanjakan viewpoint for Bromo&#39;s iconic sunrise — the caldera fills with mist as the active cone of Mt. Bromo glows orange. Hike the 248 stairs to the crater rim. Then drive to the Sea of Sand and Savanna. Afternoon: Tumpak Sewu waterfall. Back to Bali or Surabaya.</div></div></div></div><hr class="dashed-divider"><div class="section-eyebrow">The Three Highlights</div><h2 class="section-title">Where We&#39;re <em>Hiking</em></h2><div class="activities-grid"><div class="activity-card"><div class="card-color-bar" style="background:var(--coral);"></div><div class="card-body"><div class="card-tag">Volcano · Night Hike</div><div class="card-name">Mt. Ijen — Blue Fire</div><div class="card-desc">Mt. Ijen is home to one of the rarest natural phenomena on earth: electric-blue fire produced by igniting sulfuric gases. It glows only before dawn. The hike descends into a massive caldera with a stunning turquoise acid lake — and you can watch sulfur miners carrying 80kg loads up the crater walls.</div><div class="card-footer"><span class="card-price">Included in tour</span><span class="card-duration">Start 1am · 4–5 hrs</span></div><div class="image-container"><img src="'+tw+'"></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--gold);"></div><div class="card-body"><div class="card-tag">Volcano · Sunrise</div><div class="card-name">Mt. Bromo — Sea of Sand Sunrise</div><div class="card-desc">Mt. Bromo is Java&#39;s most iconic landscape — an active volcano smoking inside a vast caldera filled with black volcanic sand. The Penanjakan viewpoint at sunrise, with Mt. Semeru in the background, is pure cinema. Jeep ride across the Sea of Sand, then hike the 248 stairs to the crater lip.</div><div class="card-footer"><span class="card-price">$40 (day trip) or included in tour</span><span class="card-duration">Start 2:30am · Full day</span></div><div class="image-container"><img src="'+nw+'"></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--teal);"></div><div class="card-body"><div class="card-tag">Waterfall · Jungle</div><div class="card-name">Tumpak Sewu — Indonesia&#39;s Niagara</div><div class="card-desc">A jaw-dropping multi-tiered curtain waterfall plunging into a lush jungle valley — often called the &quot;Niagara of Indonesia.&quot; The descent into the valley takes about 45 minutes and rewards with a view of dozens of individual falls spanning the entire cliff face. Bring dry bags for cameras.</div><div class="card-footer"><span class="card-price">Included in tour</span><span class="card-duration">Half Day</span></div><div class="image-container"><img src="'+iw+'"></div></div></div></div><hr class="dashed-divider"><div class="info-band"><div class="section-eyebrow" style="text-align:center;margin-bottom:1.2rem;">Tour Options</div><div class="info-grid"><div class="info-item"><div class="i-label">Budget 3D/2N Tour (All 3 Sites)</div><div class="i-val">~$250/person</div></div><div class="info-item"><div class="i-label">Single-Day Bromo from Surabaya</div><div class="i-val">~$40–$50/person</div></div><div class="info-item"><div class="i-label">Private Bromo Jeep</div><div class="i-val">~$60–$80 total</div></div><div class="info-item"><div class="i-label">Ijen Standalone Tour</div><div class="i-val">~$40–$60/person</div></div><div class="info-item"><div class="i-label">Recommended Base City</div><div class="i-val">Malang or Surabaya</div></div><div class="info-item"><div class="i-label">Book Via</div><div class="i-val">GetYourGuide / Local Agents</div></div></div></div><div style="display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:2.5rem;"><a href="https://www.getyourguide.com/java-l164347/east-java-3d2n-ijen-crater-bromo-tumpak-sewu-waterfall-t847467/" target="_blank" class="booking-cta">→ Book 3D2N East Java Tour</a><a href="https://www.getyourguide.com/mount-bromo-l88315/" target="_blank" class="booking-cta" style="background:var(--teal);">→ Browse Bromo Day Trips</a></div><div class="tips-grid"><div class="tip-card"><div class="tip-icon">😷</div><div class="tip-title">Gas Masks for Ijen</div><div class="tip-text">The sulfur fumes at Ijen Crater are intense. Bring a proper gas mask — not just a bandana. Rental masks are available at the trailhead but quality varies. Serious hikers bring their own.</div></div><div class="tip-card"><div class="tip-icon">🧥</div><div class="tip-title">Layer Up — It Gets Cold</div><div class="tip-text">Both Ijen and Bromo are above 2,000m and you&#39;re hiking at 1–3am. It will be cold — bring a fleece or light jacket. You&#39;ll warm up fast on the ascent but the crater rim is windy.</div></div><div class="tip-card"><div class="tip-icon">💡</div><div class="tip-title">Bring a Headlamp</div><div class="tip-text">You&#39;re hiking in the dark at both Ijen and Bromo. A headlamp is essential — not just a phone flashlight. Extra batteries recommended.</div></div><div class="tip-card"><div class="tip-icon">📷</div><div class="tip-title">Camera for the Blue Fire</div><div class="tip-text">The blue fire at Ijen is very difficult to photograph on a phone in the dark. Bring a camera if you have one, or just enjoy the moment — it&#39;s more impressive in person anyway.</div></div><div class="tip-card"><div class="tip-icon">🚌</div><div class="tip-title">Lots of Driving</div><div class="tip-text">East Java involves long drives. Day 1 can be 6–7 hours from Bali. Sleep in the car. Pack snacks, download offline maps (Maps.me), and consider motion sickness tablets for bumpy roads.</div></div><div class="tip-card"><div class="tip-icon">🌄</div><div class="tip-title">Weather Can Change Everything</div><div class="tip-text">Bromo sunrise can be hidden by cloud cover — it happens. Good guides know alternate viewpoints and will adjust. Don&#39;t be devastated if conditions aren&#39;t perfect; the landscape is stunning regardless.</div></div></div></div>',2)])])}const ow=mn(sw,[["render",rw]]),aw={class:"people-page"},lw={class:"toast-region",role:"status","aria-live":"polite","aria-atomic":"true"},cw={key:0,class:"success-toast"},uw={key:0,role:"status"},dw={key:1,role:"alert"},fw={key:2},hw={key:0},pw={class:"add-person-row"},mw={colspan:"2",class:"guest-panel"},gw=["aria-expanded","disabled"],vw=["disabled"],yw={class:"panel-button",type:"submit"},bw={key:1,role:"alert"},_w=un({__name:"PeoplePage",setup(t){const e=re([]),n=re(!0),i=re(""),s=re(""),r=re(""),o=re(""),a=re(!1),l=re("invited"),c=re(!1),u=re(""),d=re("");let m;function E(){clearTimeout(m),d.value=""}qr(()=>clearTimeout(m));async function x(){if(!c.value){c.value=!0,u.value="",E();try{const D=await n_(s.value,l.value,r.value,o.value);e.value=[...e.value,D].sort((S,N)=>S.name.localeCompare(N.name)),d.value=`${D.name} has been added to the guest list.`,m=setTimeout(E,5e3),s.value="",r.value="",o.value="",l.value="invited",a.value=!1}catch(D){u.value=(D==null?void 0:D.code)==="permission-denied"?"Saving is not enabled yet. Please ask the site owner to check the guest list access settings.":"Unable to add this person. Check your connection and try again."}finally{c.value=!1}}}async function R(){n.value=!0,i.value="";try{e.value=await i_()}catch(D){const S=D==null?void 0:D.code;i.value=S==="permission-denied"?"The guest list is not available. Please ask the organizer to check its access settings.":S?"Unable to load the guest list. Please try again.":D instanceof Error?D.message:"Unable to load the guest list."}finally{n.value=!1}}return Gr(R),(D,S)=>(q(),Q("main",aw,[(q(),at(Uu,{to:"body"},[I("div",lw,[Me(lm,{name:"toast"},{default:Ou(()=>[d.value?(q(),Q("div",cw,[S[8]||(S[8]=I("span",{class:"toast-icon","aria-hidden":"true"},"✓",-1)),I("div",null,[S[7]||(S[7]=I("strong",null,"Person added",-1)),I("p",null,Ie(d.value),1)]),I("button",{class:"toast-close",type:"button","aria-label":"Dismiss notification",onClick:E},"×")])):Fe("",!0)]),_:1})])])),I("button",{class:"back-button",onClick:S[0]||(S[0]=N=>H(qe)("home"))},"← Back to overview"),S[19]||(S[19]=I("div",{class:"section-eyebrow"},"The Gang",-1)),S[20]||(S[20]=I("h1",{class:"section-title"},[we("Who's "),I("em",null,"Going?")],-1)),S[21]||(S[21]=I("p",{class:"people-intro"},"The crew for our Indonesia adventure.",-1)),n.value?(q(),Q("p",uw,"Loading the guest list…")):i.value?(q(),Q("div",dw,[I("p",null,Ie(i.value),1),I("button",{class:"back-button retry-button",onClick:R},"Try again")])):(q(),Q("table",fw,[S[17]||(S[17]=I("caption",{class:"sr-only"},"People going to Indonesia and their attendance status",-1)),S[18]||(S[18]=I("thead",null,[I("tr",null,[I("th",{scope:"col"},"Name"),I("th",{scope:"col"},"Status")])],-1)),I("tbody",null,[(q(!0),Q(Ye,null,gp(e.value,N=>(q(),Q("tr",{key:N.id},[I("td",null,Ie(N.name),1),I("td",null,[I("span",{class:mt(["status",N.status])},Ie(N.status),3)])]))),128)),e.value.length===0?(q(),Q("tr",hw,[...S[9]||(S[9]=[I("td",{colspan:"2",class:"empty-state"},"The guest list is coming soon.",-1)])])):Fe("",!0),I("tr",pw,[I("td",mw,[I("button",{class:"add-person-button","aria-expanded":a.value,"aria-controls":"add-person-form",disabled:c.value,onClick:S[1]||(S[1]=N=>{a.value=!a.value,u.value="",d.value=""})},[...S[10]||(S[10]=[I("span",{"aria-hidden":"true"},"＋",-1),we(" Add Person",-1)])],8,gw),a.value?(q(),Q(Ye,{key:0},[S[16]||(S[16]=I("h2",null,"Add Person",-1)),I("form",{id:"add-person-form",class:"person-form",onSubmit:Sa(x,["prevent"])},[I("fieldset",{disabled:c.value},[I("label",null,[S[11]||(S[11]=we("Name",-1)),ut(I("input",{"onUpdate:modelValue":S[2]||(S[2]=N=>s.value=N),required:"",maxlength:"120",pattern:".*\\S.*",autocomplete:"name"},null,512),[[Mt,s.value]])]),I("label",null,[S[13]||(S[13]=we("Status ",-1)),ut(I("select",{"onUpdate:modelValue":S[3]||(S[3]=N=>l.value=N)},[...S[12]||(S[12]=[I("option",{value:"invited"},"Invited",-1),I("option",{value:"committed"},"Committed",-1),I("option",{value:"interested"},"Interested",-1)])],512),[[vd,l.value]])]),I("label",null,[S[14]||(S[14]=we("Phone Number (optional)",-1)),ut(I("input",{"onUpdate:modelValue":S[4]||(S[4]=N=>r.value=N),type:"tel",autocomplete:"tel",maxlength:"40"},null,512),[[Mt,r.value]])]),I("label",null,[S[15]||(S[15]=we("Email (optional)",-1)),ut(I("input",{"onUpdate:modelValue":S[5]||(S[5]=N=>o.value=N),type:"email",autocomplete:"email",maxlength:"254"},null,512),[[Mt,o.value]])]),I("button",yw,Ie(c.value?"Saving…":"Save Person"),1),I("button",{class:"panel-button secondary",type:"button",onClick:S[6]||(S[6]=N=>a.value=!1)},"Cancel")],8,vw)],32)],64)):Fe("",!0),u.value?(q(),Q("p",bw,Ie(u.value),1)):Fe("",!0)])])])]))]))}}),ww=mn(_w,[["__scopeId","data-v-a4b1efea"]]),Ew={class:"welcome-screen"},Iw={class:"welcome-card","aria-labelledby":"welcome-title"},Tw=["disabled"],Aw={key:0},Sw={key:1},Pw=["minlength","autocomplete"],kw={class:"primary"},Cw={key:0,role:"alert"},xw={key:1,class:"confirmation",role:"status"},Rw=["disabled"],Nw=["disabled"],Dw=["disabled"],Ow=["disabled"],Vw=un({__name:"WelcomePage",setup(t){const e=re("signin"),n=re(""),i=re(""),s=re(""),r=re(!1),o=re(""),a=re("");function l(d){const m=d==null?void 0:d.code;return m==="auth/email-already-in-use"?"An account already exists for this email. Sign in or use Forgot password to reset it.":m==="auth/invalid-email"?"Enter a valid email address.":m==="auth/network-request-failed"||m==="unavailable"?"Unable to reach Firebase. Check your connection and try again.":m==="auth/invalid-credential"||m==="auth/wrong-password"||m==="auth/user-not-found"?"The email or password is incorrect. Try again or use Forgot password.":m==="auth/user-disabled"?"This account has been disabled. Please contact the site owner.":m==="auth/account-exists-with-different-credential"?"This email already uses another sign-in method. Sign in with your original method.":m==="permission-denied"?"Your account is signed in, but the guest list permissions need updating. Please contact the site owner.":m==="auth/popup-closed-by-user"||m==="auth/cancelled-popup-request"?"Sign-in was cancelled. You can try again.":m==="auth/popup-blocked"?"Allow popups for this site and try again.":m==="auth/operation-not-allowed"?"This sign-in method is not enabled yet. Please contact the site owner.":m==="auth/unauthorized-domain"?"This website domain needs to be enabled for sign-in by the site owner.":m==="auth/weak-password"||m==="auth/password-does-not-meet-requirements"?"Choose a stronger password that meets the site’s password policy.":m==="auth/too-many-requests"?"Too many attempts. Please wait a little before trying again.":`Unable to complete sign-in. Please try again${m?` (${m})`:""}.`}async function c(){if(r.value)return;r.value=!0,o.value="",yt.value="",a.value="",$i.value=!0;let d=!1;try{const m=_i(ti());if(e.value==="reset")await f0(m,i.value.trim()),a.value="If an account exists for this email, you’ll receive a password reset link.";else if(e.value==="signup"){if(!n.value.trim())throw new Error("Name required");const E=await h0(m,i.value.trim(),s.value);d=!0,await g0(E.user,{displayName:n.value.trim()}),await nr(E.user,!0)}else{const E=await p0(m,i.value.trim(),s.value);await nr(E.user,!0)}s.value=""}catch(m){o.value=d?`Your account was created, but setup could not finish. ${l(m)} Sign in again to retry setup; you don’t need to create another account.`:l(m)}finally{$i.value=!1,r.value=!1}}async function u(){if(!r.value){r.value=!0,o.value="",yt.value="",$i.value=!0;try{const d=new qt;d.setCustomParameters({prompt:"select_account"});const m=await $0(_i(ti()),d);await nr(m.user,!0)}catch(d){o.value=l(d)}finally{$i.value=!1,r.value=!1}}}return(d,m)=>(q(),Q("main",Ew,[I("section",Iw,[m[9]||(m[9]=I("div",{class:"hero-stamp"},"The Gang Goes to Indonesia",-1)),m[10]||(m[10]=I("h1",{id:"welcome-title"},[we("Ready for "),I("em",null,"adventure?")],-1)),m[11]||(m[11]=I("p",{class:"intro"},"Sign in to join the crew, or explore as a guest.",-1)),I("h2",null,Ie(e.value==="signup"?"Create your account":e.value==="reset"?"Reset your password":"Welcome back"),1),I("form",{onSubmit:Sa(c,["prevent"])},[I("fieldset",{disabled:r.value},[e.value==="signup"?(q(),Q("label",Aw,[m[6]||(m[6]=we("Name",-1)),ut(I("input",{"onUpdate:modelValue":m[0]||(m[0]=E=>n.value=E),required:"",maxlength:"120",pattern:".*\\S.*",autocomplete:"name"},null,512),[[Mt,n.value]])])):Fe("",!0),I("label",null,[m[7]||(m[7]=we("Email",-1)),ut(I("input",{"onUpdate:modelValue":m[1]||(m[1]=E=>i.value=E),required:"",type:"email",autocomplete:"email"},null,512),[[Mt,i.value]])]),e.value!=="reset"?(q(),Q("label",Sw,[m[8]||(m[8]=we("Password",-1)),ut(I("input",{"onUpdate:modelValue":m[2]||(m[2]=E=>s.value=E),required:"",type:"password",minlength:e.value==="signup"?6:void 0,autocomplete:e.value==="signup"?"new-password":"current-password"},null,8,Pw),[[Mt,s.value]])])):Fe("",!0),I("button",kw,Ie(r.value?"Please wait…":e.value==="signup"?"Create Account":e.value==="reset"?"Send Reset Link":"Sign In"),1)],8,Tw)],32),o.value||H(yt)?(q(),Q("p",Cw,Ie(o.value||H(yt)),1)):Fe("",!0),a.value?(q(),Q("p",xw,Ie(a.value),1)):Fe("",!0),e.value==="signin"?(q(),Q("button",{key:2,class:"text-button",disabled:r.value,onClick:m[3]||(m[3]=E=>{e.value="reset",o.value="",a.value=""})},"Forgot password?",8,Rw)):Fe("",!0),m[12]||(m[12]=I("div",{class:"divider"},"or",-1)),I("button",{class:"secondary",disabled:r.value,onClick:u},"Continue with Google",8,Nw),I("button",{class:"text-button",disabled:r.value,onClick:m[4]||(m[4]=E=>{e.value=e.value==="signin"?"signup":"signin",o.value="",a.value="",s.value=""})},Ie(e.value==="signin"?"Create an account":"Back to sign in"),9,Dw),I("button",{class:"text-button guest-button",disabled:r.value,onClick:m[5]||(m[5]=(...E)=>H(nu)&&H(nu)(...E))},"Continue as a Guest →",8,Ow),m[13]||(m[13]=I("p",{class:"privacy-note activity-note"},"We record guest entries and members’ latest sign-in times to understand use of the trip site.",-1))])]))}}),Mw=mn(Vw,[["__scopeId","data-v-c753fd39"]]),Lw={key:0,class:"visitor-bar",role:"status"},Fw={class:"visitor-bar"},Uw={key:0,role:"alert"},$w=un({__name:"App",setup(t){return a_(),(e,n)=>H(Ui)?H(tt)?(q(),Q(Ye,{key:2},[Me(k_),I("div",Fw,[I("span",null,Ie(H(tt).name==="Guest"&&!H(tt).id?"Browsing as a guest":`Welcome, ${H(tt).name}`),1),I("button",{onClick:n[0]||(n[0]=(...i)=>H(iu)&&H(iu)(...i))},Ie(H(jn)?"Sign out":"Sign in"),1),H(yt)?(q(),Q("p",Uw,Ie(H(yt)),1)):Fe("",!0)]),H(_e)==="home"||(H(_e)==="people"||H(_e)==="profile")&&!H(jn)?(q(),at($_,{key:0})):H(_e)==="komodo"?(q(),at(q_,{key:1})):H(_e)==="bali"?(q(),at(Y_,{key:2})):H(_e)==="bali-housing"?(q(),at(Q_,{key:3})):H(_e)==="java"?(q(),at(ow,{key:4})):H(_e)==="flights"?(q(),at(T_,{key:5})):H(_e)==="people"&&H(jn)?(q(),at(ww,{key:6})):H(_e)==="profile"&&H(jn)?(q(),at(y_,{key:7})):Fe("",!0),Me(R_)],64)):(q(),at(Mw,{key:1})):(q(),Q("p",Lw,"Restoring your session…"))}}),Bw=mn($w,[["__scopeId","data-v-5280d418"]]);Om(Bw).mount("#app");
