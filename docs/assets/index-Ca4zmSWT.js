(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
* @vue/shared v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Va(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const be={},Tr=[],Kt=()=>{},Hu=()=>!1,co=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),uo=t=>t.startsWith("onUpdate:"),Ve=Object.assign,Oa=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Zh=Object.prototype.hasOwnProperty,de=(t,e)=>Zh.call(t,e),X=Array.isArray,Ar=t=>Ui(t)==="[object Map]",Fr=t=>Ui(t)==="[object Set]",Wl=t=>Ui(t)==="[object Date]",ie=t=>typeof t=="function",Ee=t=>typeof t=="string",Zt=t=>typeof t=="symbol",he=t=>t!==null&&typeof t=="object",Wu=t=>(he(t)||ie(t))&&ie(t.then)&&ie(t.catch),qu=Object.prototype.toString,Ui=t=>qu.call(t),Qh=t=>Ui(t).slice(8,-1),zu=t=>Ui(t)==="[object Object]",La=t=>Ee(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,li=Va(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fo=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},ep=/-\w/g,Pt=fo(t=>t.replace(ep,e=>e.slice(1).toUpperCase())),tp=/\B([A-Z])/g,vr=fo(t=>t.replace(tp,"-$1").toLowerCase()),Gu=fo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Fo=fo(t=>t?`on${Gu(t)}`:""),zt=(t,e)=>!Object.is(t,e),hs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ku=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ho=t=>{const e=parseFloat(t);return isNaN(e)?t:e},np=t=>{const e=Ee(t)?Number(t):NaN;return isNaN(e)?t:e};let ql;const po=()=>ql||(ql=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ma(t){if(X(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=Ee(r)?op(r):Ma(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(Ee(t)||he(t))return t}const rp=/;(?![^(]*\))/g,ip=/:([^]+)/,sp=/\/\*[^]*?\*\//g;function op(t){const e={};return t.replace(sp,"").split(rp).forEach(n=>{if(n){const r=n.split(ip);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function vt(t){let e="";if(Ee(t))e=t;else if(X(t))for(let n=0;n<t.length;n++){const r=vt(t[n]);r&&(e+=r+" ")}else if(he(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ap="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lp=Va(ap);function Ju(t){return!!t||t===""}function cp(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ur(t[r],e[r]);return n}function Ur(t,e){if(t===e)return!0;let n=Wl(t),r=Wl(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Zt(t),r=Zt(e),n||r)return t===e;if(n=X(t),r=X(e),n||r)return n&&r?cp(t,e):!1;if(n=he(t),r=he(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ur(t[o],e[o]))return!1}}return String(t)===String(e)}function Fa(t,e){return t.findIndex(n=>Ur(n,e))}const Yu=t=>!!(t&&t.__v_isRef===!0),H=t=>Ee(t)?t:t==null?"":X(t)||he(t)&&(t.toString===qu||!ie(t.toString))?Yu(t)?H(t.value):JSON.stringify(t,Xu,2):String(t),Xu=(t,e)=>Yu(e)?Xu(t,e.value):Ar(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],s)=>(n[Uo(r,s)+" =>"]=i,n),{})}:Fr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Uo(n))}:Zt(e)?Uo(e):he(e)&&!X(e)&&!zu(e)?String(e):e,Uo=(t,e="")=>{var n;return Zt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Be;class up{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Be&&(Be.active?(this.parent=Be,this.index=(Be.scopes||(Be.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Be;try{return Be=this,e()}finally{Be=n}}}on(){++this._on===1&&(this.prevScope=Be,Be=this)}off(){if(this._on>0&&--this._on===0){if(Be===this)Be=this.prevScope;else{let e=Be;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function dp(){return Be}let _e;const $o=new WeakSet;class Zu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Be&&(Be.active?Be.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$o.has(this)&&($o.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ed(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,zl(this),td(this);const e=_e,n=Ct;_e=this,Ct=!0;try{return this.fn()}finally{nd(this),_e=e,Ct=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ba(e);this.deps=this.depsTail=void 0,zl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$o.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){aa(this)&&this.run()}get dirty(){return aa(this)}}let Qu=0,ci,ui;function ed(t,e=!1){if(t.flags|=8,e){t.next=ui,ui=t;return}t.next=ci,ci=t}function Ua(){Qu++}function $a(){if(--Qu>0)return;if(ui){let e=ui;for(ui=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ci;){let e=ci;for(ci=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function td(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function nd(t){let e,n=t.depsTail,r=n;for(;r;){const i=r.prevDep;r.version===-1?(r===n&&(n=i),Ba(r),fp(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}t.deps=e,t.depsTail=n}function aa(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(rd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function rd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===bi)||(t.globalVersion=bi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!aa(t))))return;t.flags|=2;const e=t.dep,n=_e,r=Ct;_e=t,Ct=!0;try{td(t);const i=t.fn(t._value);(e.version===0||zt(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{_e=n,Ct=r,nd(t),t.flags&=-3}}function Ba(t,e=!1){const{dep:n,prevSub:r,nextSub:i}=t;if(r&&(r.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Ba(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function fp(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ct=!0;const id=[];function vn(){id.push(Ct),Ct=!1}function yn(){const t=id.pop();Ct=t===void 0?!0:t}function zl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=_e;_e=void 0;try{e()}finally{_e=n}}}let bi=0;class hp{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ja{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!_e||!Ct||_e===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==_e)n=this.activeLink=new hp(_e,this),_e.deps?(n.prevDep=_e.depsTail,_e.depsTail.nextDep=n,_e.depsTail=n):_e.deps=_e.depsTail=n,sd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=_e.depsTail,n.nextDep=void 0,_e.depsTail.nextDep=n,_e.depsTail=n,_e.deps===n&&(_e.deps=r)}return n}trigger(e){this.version++,bi++,this.notify(e)}notify(e){Ua();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{$a()}}}function sd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)sd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const la=new WeakMap,or=Symbol(""),ca=Symbol(""),_i=Symbol("");function Je(t,e,n){if(Ct&&_e){let r=la.get(t);r||la.set(t,r=new Map);let i=r.get(n);i||(r.set(n,i=new ja),i.map=r,i.key=n),i.track()}}function sn(t,e,n,r,i,s){const o=la.get(t);if(!o){bi++;return}const a=l=>{l&&l.trigger()};if(Ua(),e==="clear")o.forEach(a);else{const l=X(t),c=l&&La(n);if(l&&n==="length"){const u=Number(r);o.forEach((h,p)=>{(p==="length"||p===_i||!Zt(p)&&p>=u)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(_i)),e){case"add":l?c&&a(o.get("length")):(a(o.get(or)),Ar(t)&&a(o.get(ca)));break;case"delete":l||(a(o.get(or)),Ar(t)&&a(o.get(ca)));break;case"set":Ar(t)&&a(o.get(or));break}}$a()}function br(t){const e=ue(t);return e===t?e:(Je(e,"iterate",_i),_t(t)?e:e.map(Dt))}function mo(t){return Je(t=ue(t),"iterate",_i),t}function Ht(t,e){return bn(t)?xr(ar(t)?Dt(e):e):Dt(e)}const pp={__proto__:null,[Symbol.iterator](){return Bo(this,Symbol.iterator,t=>Ht(this,t))},concat(...t){return br(this).concat(...t.map(e=>X(e)?br(e):e))},entries(){return Bo(this,"entries",t=>(t[1]=Ht(this,t[1]),t))},every(t,e){return en(this,"every",t,e,void 0,arguments)},filter(t,e){return en(this,"filter",t,e,n=>n.map(r=>Ht(this,r)),arguments)},find(t,e){return en(this,"find",t,e,n=>Ht(this,n),arguments)},findIndex(t,e){return en(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return en(this,"findLast",t,e,n=>Ht(this,n),arguments)},findLastIndex(t,e){return en(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return en(this,"forEach",t,e,void 0,arguments)},includes(...t){return jo(this,"includes",t)},indexOf(...t){return jo(this,"indexOf",t)},join(t){return br(this).join(t)},lastIndexOf(...t){return jo(this,"lastIndexOf",t)},map(t,e){return en(this,"map",t,e,void 0,arguments)},pop(){return Jr(this,"pop")},push(...t){return Jr(this,"push",t)},reduce(t,...e){return Gl(this,"reduce",t,e)},reduceRight(t,...e){return Gl(this,"reduceRight",t,e)},shift(){return Jr(this,"shift")},some(t,e){return en(this,"some",t,e,void 0,arguments)},splice(...t){return Jr(this,"splice",t)},toReversed(){return br(this).toReversed()},toSorted(t){return br(this).toSorted(t)},toSpliced(...t){return br(this).toSpliced(...t)},unshift(...t){return Jr(this,"unshift",t)},values(){return Bo(this,"values",t=>Ht(this,t))}};function Bo(t,e,n){const r=mo(t),i=r[e]();return r!==t&&!_t(t)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.done||(s.value=n(s.value)),s}),i}const mp=Array.prototype;function en(t,e,n,r,i,s){const o=mo(t),a=o!==t&&!_t(t),l=o[e];if(l!==mp[e]){const h=l.apply(t,s);return a?Dt(h):h}let c=n;o!==t&&(a?c=function(h,p){return n.call(this,Ht(t,h),p,t)}:n.length>2&&(c=function(h,p){return n.call(this,h,p,t)}));const u=l.call(o,c,r);return a&&i?i(u):u}function Gl(t,e,n,r){const i=mo(t),s=i!==t&&!_t(t);let o=n,a=!1;i!==t&&(s?(a=r.length===0,o=function(c,u,h){return a&&(a=!1,c=Ht(t,c)),n.call(this,c,Ht(t,u),h,t)}):n.length>3&&(o=function(c,u,h){return n.call(this,c,u,h,t)}));const l=i[e](o,...r);return a?Ht(t,l):l}function jo(t,e,n){const r=ue(t);Je(r,"iterate",_i);const i=r[e](...n);return(i===-1||i===!1)&&qa(n[0])?(n[0]=ue(n[0]),r[e](...n)):i}function Jr(t,e,n=[]){vn(),Ua();const r=ue(t)[e].apply(t,n);return $a(),yn(),r}const gp=Va("__proto__,__v_isRef,__isVue"),od=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Zt));function vp(t){Zt(t)||(t=String(t));const e=ue(this);return Je(e,"has",t),e.hasOwnProperty(t)}class ad{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?kp:dd:s?ud:cd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=X(e);if(!i){let l;if(o&&(l=pp[n]))return l;if(n==="hasOwnProperty")return vp}const a=Reflect.get(e,n,Ye(e)?e:r);if((Zt(n)?od.has(n):gp(n))||(i||Je(e,"get",n),s))return a;if(Ye(a)){const l=o&&La(n)?a:a.value;return i&&he(l)?da(l):l}return he(a)?i?da(a):$r(a):a}}class ld extends ad{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];const o=X(e)&&La(n);if(!this._isShallow){const c=bn(s);if(!_t(r)&&!bn(r)&&(s=ue(s),r=ue(r)),!o&&Ye(s)&&!Ye(r))return c||(s.value=r),!0}const a=o?Number(n)<e.length:de(e,n),l=Reflect.set(e,n,r,Ye(e)?e:i);return e===ue(i)&&(a?zt(r,s)&&sn(e,"set",n,r):sn(e,"add",n,r)),l}deleteProperty(e,n){const r=de(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&sn(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!Zt(n)||!od.has(n))&&Je(e,"has",n),r}ownKeys(e){return Je(e,"iterate",X(e)?"length":or),Reflect.ownKeys(e)}}class yp extends ad{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const bp=new ld,_p=new yp,wp=new ld(!0);const ua=t=>t,is=t=>Reflect.getPrototypeOf(t);function Ip(t,e,n){return function(...r){const i=this.__v_raw,s=ue(i),o=Ar(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...r),u=n?ua:e?xr:Dt;return!e&&Je(s,"iterate",l?ca:or),Ve(Object.create(c),{next(){const{value:h,done:p}=c.next();return p?{value:h,done:p}:{value:a?[u(h[0]),u(h[1])]:u(h),done:p}}})}}function ss(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Ep(t,e){const n={get(i){const s=this.__v_raw,o=ue(s),a=ue(i);t||(zt(i,a)&&Je(o,"get",i),Je(o,"get",a));const{has:l}=is(o),c=e?ua:t?xr:Dt;if(l.call(o,i))return c(s.get(i));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(i)},get size(){const i=this.__v_raw;return!t&&Je(ue(i),"iterate",or),i.size},has(i){const s=this.__v_raw,o=ue(s),a=ue(i);return t||(zt(i,a)&&Je(o,"has",i),Je(o,"has",a)),i===a?s.has(i):s.has(i)||s.has(a)},forEach(i,s){const o=this,a=o.__v_raw,l=ue(a),c=e?ua:t?xr:Dt;return!t&&Je(l,"iterate",or),a.forEach((u,h)=>i.call(s,c(u),c(h),o))}};return Ve(n,t?{add:ss("add"),set:ss("set"),delete:ss("delete"),clear:ss("clear")}:{add(i){const s=ue(this),o=is(s),a=ue(i),l=!e&&!_t(i)&&!bn(i)?a:i;return o.has.call(s,l)||zt(i,l)&&o.has.call(s,i)||zt(a,l)&&o.has.call(s,a)||(s.add(l),sn(s,"add",l,l)),this},set(i,s){!e&&!_t(s)&&!bn(s)&&(s=ue(s));const o=ue(this),{has:a,get:l}=is(o);let c=a.call(o,i);c||(i=ue(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,s),c?zt(s,u)&&sn(o,"set",i,s):sn(o,"add",i,s),this},delete(i){const s=ue(this),{has:o,get:a}=is(s);let l=o.call(s,i);l||(i=ue(i),l=o.call(s,i)),a&&a.call(s,i);const c=s.delete(i);return l&&sn(s,"delete",i,void 0),c},clear(){const i=ue(this),s=i.size!==0,o=i.clear();return s&&sn(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Ip(i,t,e)}),n}function Ha(t,e){const n=Ep(t,e);return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(de(n,i)&&i in r?n:r,i,s)}const Tp={get:Ha(!1,!1)},Ap={get:Ha(!1,!0)},Sp={get:Ha(!0,!1)};const cd=new WeakMap,ud=new WeakMap,dd=new WeakMap,kp=new WeakMap;function Pp(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $r(t){return bn(t)?t:Wa(t,!1,bp,Tp,cd)}function Cp(t){return Wa(t,!1,wp,Ap,ud)}function da(t){return Wa(t,!0,_p,Sp,dd)}function Wa(t,e,n,r,i){if(!he(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const s=i.get(t);if(s)return s;const o=Pp(Qh(t));if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function ar(t){return bn(t)?ar(t.__v_raw):!!(t&&t.__v_isReactive)}function bn(t){return!!(t&&t.__v_isReadonly)}function _t(t){return!!(t&&t.__v_isShallow)}function qa(t){return t?!!t.__v_raw:!1}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function xp(t){return!de(t,"__v_skip")&&Object.isExtensible(t)&&Ku(t,"__v_skip",!0),t}const Dt=t=>he(t)?$r(t):t,xr=t=>he(t)?da(t):t;function Ye(t){return t?t.__v_isRef===!0:!1}function z(t){return Rp(t,!1)}function Rp(t,e){return Ye(t)?t:new Np(t,e)}class Np{constructor(e,n){this.dep=new ja,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ue(e),this._value=n?e:Dt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||_t(e)||bn(e);e=r?e:ue(e),zt(e,n)&&(this._rawValue=e,this._value=r?e:Dt(e),this.dep.trigger())}}function D(t){return Ye(t)?t.value:t}const Dp={get:(t,e,n)=>e==="__v_raw"?t:D(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Ye(i)&&!Ye(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function fd(t){return ar(t)?t:new Proxy(t,Dp)}class Vp{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ja(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=bi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&_e!==this)return ed(this,!0),!0}get value(){const e=this.dep.track();return rd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Op(t,e,n=!1){let r,i;return ie(t)?r=t:(r=t.get,i=t.set),new Vp(r,i,n)}const os={},Ps=new WeakMap;let Qn;function Lp(t,e=!1,n=Qn){if(n){let r=Ps.get(n);r||Ps.set(n,r=[]),r.push(t)}}function Mp(t,e,n=be){const{immediate:r,deep:i,once:s,scheduler:o,augmentJob:a,call:l}=n,c=M=>i?M:_t(M)||i===!1||i===0?on(M,1):on(M);let u,h,p,E,A=!1,T=!1;if(Ye(t)?(h=()=>t.value,A=_t(t)):ar(t)?(h=()=>c(t),A=!0):X(t)?(T=!0,A=t.some(M=>ar(M)||_t(M)),h=()=>t.map(M=>{if(Ye(M))return M.value;if(ar(M))return c(M);if(ie(M))return l?l(M,2):M()})):ie(t)?e?h=l?()=>l(t,2):t:h=()=>{if(p){vn();try{p()}finally{yn()}}const M=Qn;Qn=u;try{return l?l(t,3,[E]):t(E)}finally{Qn=M}}:h=Kt,e&&i){const M=h,ne=i===!0?1/0:i;h=()=>on(M(),ne)}const C=dp(),S=()=>{u.stop(),C&&C.active&&Oa(C.effects,u)};if(s&&e){const M=e;e=(...ne)=>{const G=M(...ne);return S(),G}}let x=T?new Array(t.length).fill(os):os;const W=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const ne=u.run();if(M||i||A||(T?ne.some((G,f)=>zt(G,x[f])):zt(ne,x))){p&&p();const G=Qn;Qn=u;try{const f=[ne,x===os?void 0:T&&x[0]===os?[]:x,E];x=ne,l?l(e,3,f):e(...f)}finally{Qn=G}}}else u.run()};return a&&a(W),u=new Zu(h),u.scheduler=o?()=>o(W,!1):W,E=M=>Lp(M,!1,u),p=u.onStop=()=>{const M=Ps.get(u);if(M){if(l)l(M,4);else for(const ne of M)ne();Ps.delete(u)}},e?r?W(!0):x=u.run():o?o(W.bind(null,!0),!0):u.run(),S.pause=u.pause.bind(u),S.resume=u.resume.bind(u),S.stop=S,S}function on(t,e=1/0,n){if(e<=0||!he(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ye(t))on(t.value,e,n);else if(X(t))for(let r=0;r<t.length;r++)on(t[r],e,n);else if(Fr(t)||Ar(t))t.forEach(r=>{on(r,e,n)});else if(zu(t)){for(const r in t)on(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&on(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $i(t,e,n,r){try{return r?t(...r):t()}catch(i){go(i,e,n)}}function wt(t,e,n,r){if(ie(t)){const i=$i(t,e,n,r);return i&&Wu(i)&&i.catch(s=>{go(s,e,n)}),i}if(X(t)){const i=[];for(let s=0;s<t.length;s++)i.push(wt(t[s],e,n,r));return i}}function go(t,e,n,r=!0){const i=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||be;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,l,c)===!1)return}a=a.parent}if(s){vn(),$i(s,null,10,[t,l,c]),yn();return}}Fp(t,n,i,r,o)}function Fp(t,e,n,r=!0,i=!1){if(i)throw t;console.error(t)}const Qe=[];let Bt=-1;const Sr=[];let Nn=null,_r=0;const hd=Promise.resolve();let Cs=null;function vo(t){const e=Cs||hd;return t?e.then(this?t.bind(this):t):e}function Up(t){let e=Bt+1,n=Qe.length;for(;e<n;){const r=e+n>>>1,i=Qe[r],s=wi(i);s<t||s===t&&i.flags&2?e=r+1:n=r}return e}function za(t){if(!(t.flags&1)){const e=wi(t),n=Qe[Qe.length-1];!n||!(t.flags&2)&&e>=wi(n)?Qe.push(t):Qe.splice(Up(e),0,t),t.flags|=1,pd()}}function pd(){Cs||(Cs=hd.then(gd))}function $p(t){X(t)?Sr.push(...t):Nn&&t.id===-1?Nn.splice(_r+1,0,t):t.flags&1||(Sr.push(t),t.flags|=1),pd()}function Kl(t,e,n=Bt+1){for(;n<Qe.length;n++){const r=Qe[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Qe.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function md(t){if(Sr.length){const e=[...new Set(Sr)].sort((n,r)=>wi(n)-wi(r));if(Sr.length=0,Nn){Nn.push(...e);return}for(Nn=e,_r=0;_r<Nn.length;_r++){const n=Nn[_r];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Nn=null,_r=0}}const wi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function gd(t){try{for(Bt=0;Bt<Qe.length;Bt++){const e=Qe[Bt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),$i(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Bt<Qe.length;Bt++){const e=Qe[Bt];e&&(e.flags&=-2)}Bt=-1,Qe.length=0,md(),Cs=null,(Qe.length||Sr.length)&&gd()}}let bt=null,vd=null;function xs(t){const e=bt;return bt=t,vd=t&&t.type.__scopeId||null,e}function yd(t,e=bt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Ds(-1);const s=xs(e);let o;try{o=t(...i)}finally{xs(s),r._d&&Ds(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function oe(t,e){if(bt===null)return t;const n=Io(bt),r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[s,o,a,l=be]=e[i];s&&(ie(s)&&(s={mounted:s,updated:s}),s.deep&&on(o),r.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Gn(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(vn(),wt(l,n,8,[t.el,a,t,e]),yn())}}function Bp(t,e){if(tt){let n=tt.provides;const r=tt.parent&&tt.parent.provides;r===n&&(n=tt.provides=Object.create(r)),n[t]=e}}function ps(t,e,n=!1){const r=Xa();if(r||kr){let i=kr?kr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ie(e)?e.call(r&&r.proxy):e}}const jp=Symbol.for("v-scx"),Hp=()=>ps(jp);function xt(t,e,n){return bd(t,e,n)}function bd(t,e,n=be){const{immediate:r,deep:i,flush:s,once:o}=n,a=Ve({},n),l=e&&r||!e&&s!=="post";let c;if(Ti){if(s==="sync"){const E=Hp();c=E.__watcherHandles||(E.__watcherHandles=[])}else if(!l){const E=()=>{};return E.stop=Kt,E.resume=Kt,E.pause=Kt,E}}const u=tt;a.call=(E,A,T)=>wt(E,u,A,T);let h=!1;s==="post"?a.scheduler=E=>{Ze(E,u&&u.suspense)}:s!=="sync"&&(h=!0,a.scheduler=(E,A)=>{A?E():za(E)}),a.augmentJob=E=>{e&&(E.flags|=4),h&&(E.flags|=2,u&&(E.id=u.uid,E.i=u))};const p=Mp(t,e,a);return Ti&&(c?c.push(p):l&&p()),p}function Wp(t,e,n){const r=this.proxy,i=Ee(t)?t.includes(".")?_d(r,t):()=>r[t]:t.bind(r,r);let s;ie(e)?s=e:(s=e.handler,n=e);const o=ji(this),a=bd(i,s.bind(r),n);return o(),a}function _d(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}const Rn=new WeakMap,wd=Symbol("_vte"),Id=t=>t.__isTeleport,tr=t=>t&&(t.disabled||t.disabled===""),qp=t=>t&&(t.defer||t.defer===""),Jl=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Yl=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,fa=(t,e)=>{const n=t&&t.to;return Ee(n)?e?e(n):null:n},zp={name:"Teleport",__isTeleport:!0,process(t,e,n,r,i,s,o,a,l,c){const{mc:u,pc:h,pbc:p,o:{insert:E,querySelector:A,createText:T,createComment:C,parentNode:S}}=c,x=tr(e.props);let{dynamicChildren:W}=e;const M=(f,m,d)=>{f.shapeFlag&16&&u(f.children,m,d,i,s,o,a,l)},ne=(f=e)=>{const m=tr(f.props),d=f.target=fa(f.props,A),b=ha(d,f,T,E);d&&(o!=="svg"&&Jl(d)?o="svg":o!=="mathml"&&Yl(d)&&(o="mathml"),i&&i.isCE&&(i.ce._teleportTargets||(i.ce._teleportTargets=new Set)).add(d),m||(M(f,d,b),ei(f,!1)))},G=f=>{const m=()=>{if(Rn.get(f)===m){if(Rn.delete(f),tr(f.props)){const d=S(f.el)||n;M(f,d,f.anchor),ei(f,!0)}ne(f)}};Rn.set(f,m),Ze(m,s)};if(t==null){const f=e.el=T(""),m=e.anchor=T("");if(E(f,n,r),E(m,n,r),qp(e.props)||s&&s.pendingBranch){G(e);return}x&&(M(e,n,m),ei(e,!0)),ne()}else{e.el=t.el;const f=e.anchor=t.anchor,m=Rn.get(t);if(m){m.flags|=8,Rn.delete(t),G(e);return}e.targetStart=t.targetStart;const d=e.target=t.target,b=e.targetAnchor=t.targetAnchor,y=tr(t.props),_=y?n:d,v=y?f:b;if(o==="svg"||Jl(d)?o="svg":(o==="mathml"||Yl(d))&&(o="mathml"),W?(p(t.dynamicChildren,W,_,i,s,o,a),Ja(t,e,!0)):l||h(t,e,_,v,i,s,o,a,!1),x)y?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):as(e,n,f,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const se=e.target=fa(e.props,A);se&&as(e,se,null,c,0)}else y&&as(e,d,b,c,1);ei(e,x)}},remove(t,e,n,{um:r,o:{remove:i}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:h,props:p}=t,E=s||!tr(p),A=Rn.get(t);if(A&&(A.flags|=8,Rn.delete(t)),h&&(i(c),i(u)),s&&i(l),!A&&o&16)for(let T=0;T<a.length;T++){const C=a[T];r(C,e,n,E,!!C.dynamicChildren)}},move:as,hydrate:Gp};function as(t,e,n,{o:{insert:r},m:i},s=2){s===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,h=s===2;if(h&&r(o,e,n),!Rn.has(t)&&(!h||tr(u))&&l&16)for(let p=0;p<c.length;p++)i(c[p],e,n,2);h&&r(a,e,n)}function Gp(t,e,n,r,i,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},h){function p(C,S){let x=S;for(;x;){if(x&&x.nodeType===8){if(x.data==="teleport start anchor")e.targetStart=x;else if(x.data==="teleport anchor"){e.targetAnchor=x,C._lpa=e.targetAnchor&&o(e.targetAnchor);break}}x=o(x)}}function E(C,S){S.anchor=h(o(C),S,a(C),n,r,i,s)}const A=e.target=fa(e.props,l),T=tr(e.props);if(A){const C=A._lpa||A.firstChild;e.shapeFlag&16&&(T?(E(t,e),p(A,C),e.targetAnchor||ha(A,e,u,c,a(t)===A?t:null)):(e.anchor=o(t),p(A,C),e.targetAnchor||ha(A,e,u,c),h(C&&o(C),e,A,n,r,i,s))),ei(e,T)}else T&&e.shapeFlag&16&&(E(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const Ed=zp;function ei(t,e){const n=t.ctx;if(n&&n.ut){let r,i;for(e?(r=t.el,i=t.anchor):(r=t.targetStart,i=t.targetAnchor);r&&r!==i;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function ha(t,e,n,r,i=null){const s=e.targetStart=n(""),o=e.targetAnchor=n("");return s[wd]=o,t&&(r(s,t,i),r(o,t,i)),o}const yt=Symbol("_leaveCb"),Yr=Symbol("_enterCb");function Kp(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Br(()=>{t.isMounted=!0}),Rd(()=>{t.isUnmounting=!0}),t}const mt=[Function,Array],Td={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:mt,onEnter:mt,onAfterEnter:mt,onEnterCancelled:mt,onBeforeLeave:mt,onLeave:mt,onAfterLeave:mt,onLeaveCancelled:mt,onBeforeAppear:mt,onAppear:mt,onAfterAppear:mt,onAppearCancelled:mt},Ad=t=>{const e=t.subTree;return e.component?Ad(e.component):e},Jp={name:"BaseTransition",props:Td,setup(t,{slots:e}){const n=Xa(),r=Kp();return()=>{const i=e.default&&Pd(e.default(),!0),s=i&&i.length?Sd(i):n.subTree?te():void 0;if(!s)return;const o=ue(t),{mode:a}=o;if(r.isLeaving)return Ho(s);const l=Xl(s);if(!l)return Ho(s);let c=pa(l,o,r,n,h=>c=h);l.type!==et&&Ii(l,c);let u=n.subTree&&Xl(n.subTree);if(u&&u.type!==et&&!nr(u,l)&&Ad(n).type!==et){let h=pa(u,o,r,n);if(Ii(u,h),a==="out-in"&&l.type!==et)return r.isLeaving=!0,h.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave,u=void 0},Ho(s);a==="in-out"&&l.type!==et?h.delayLeave=(p,E,A)=>{const T=kd(r,u);T[String(u.key)]=u,p[yt]=()=>{E(),p[yt]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{A(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Sd(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==et){e=n;break}}return e}const Yp=Jp;function kd(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function pa(t,e,n,r,i){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:p,onLeave:E,onAfterLeave:A,onLeaveCancelled:T,onBeforeAppear:C,onAppear:S,onAfterAppear:x,onAppearCancelled:W}=e,M=String(t.key),ne=kd(n,t),G=(d,b)=>{d&&wt(d,r,9,b)},f=(d,b)=>{const y=b[1];G(d,b),X(d)?d.every(_=>_.length<=1)&&y():d.length<=1&&y()},m={mode:o,persisted:a,beforeEnter(d){let b=l;if(!n.isMounted)if(s)b=C||l;else return;d[yt]&&d[yt](!0);const y=ne[M];y&&nr(t,y)&&y.el[yt]&&y.el[yt](),G(b,[d])},enter(d){if(ne[M]===t)return;let b=c,y=u,_=h;if(!n.isMounted)if(s)b=S||c,y=x||u,_=W||h;else return;let v=!1;d[Yr]=Oe=>{v||(v=!0,Oe?G(_,[d]):G(y,[d]),m.delayedLeave&&m.delayedLeave(),d[Yr]=void 0)};const se=d[Yr].bind(null,!1);b?f(b,[d,se]):se()},leave(d,b){const y=String(t.key);if(d[Yr]&&d[Yr](!0),n.isUnmounting)return b();G(p,[d]);let _=!1;d[yt]=se=>{_||(_=!0,b(),se?G(T,[d]):G(A,[d]),d[yt]=void 0,ne[y]===t&&delete ne[y])};const v=d[yt].bind(null,!1);ne[y]=t,E?f(E,[d,v]):v()},clone(d){const b=pa(d,e,n,r,i);return i&&i(b),b}};return m}function Ho(t){if(yo(t))return t=jn(t),t.children=null,t}function Xl(t){if(!yo(t))return Id(t.type)&&t.children?Sd(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ie(n.default))return n.default()}}function Ii(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ii(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Pd(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Se?(o.patchFlag&128&&i++,r=r.concat(Pd(o.children,e,a))):(e||o.type!==et)&&r.push(a!=null?jn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function ht(t,e){return ie(t)?Ve({name:t.name},e,{setup:t}):t}function Xp(){const t=Xa();return t?(t.appContext.config.idPrefix||"v")+"-"+t.ids[0]+t.ids[1]++:""}function Cd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Zl(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Rs=new WeakMap;function di(t,e,n,r,i=!1){if(X(t)){t.forEach((T,C)=>di(T,e&&(X(e)?e[C]:e),n,r,i));return}if(fi(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&di(t,e,n,r.component.subTree);return}const s=r.shapeFlag&4?Io(r.component):r.el,o=i?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===be?a.refs={}:a.refs,h=a.setupState,p=ue(h),E=h===be?Hu:T=>Zl(u,T)?!1:de(p,T),A=(T,C)=>!(C&&Zl(u,C));if(c!=null&&c!==l){if(Ql(e),Ee(c))u[c]=null,E(c)&&(h[c]=null);else if(Ye(c)){const T=e;A(c,T.k)&&(c.value=null),T.k&&(u[T.k]=null)}}if(ie(l))$i(l,a,12,[o,u]);else{const T=Ee(l),C=Ye(l);if(T||C){const S=()=>{if(t.f){const x=T?E(l)?h[l]:u[l]:A()||!t.k?l.value:u[t.k];if(i)X(x)&&Oa(x,s);else if(X(x))x.includes(s)||x.push(s);else if(T)u[l]=[s],E(l)&&(h[l]=u[l]);else{const W=[s];A(l,t.k)&&(l.value=W),t.k&&(u[t.k]=W)}}else T?(u[l]=o,E(l)&&(h[l]=o)):C&&(A(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const x=()=>{S(),Rs.delete(t)};x.id=-1,Rs.set(t,x),Ze(x,n)}else Ql(t),S()}}}function Ql(t){const e=Rs.get(t);e&&(e.flags|=8,Rs.delete(t))}po().requestIdleCallback;po().cancelIdleCallback;const fi=t=>!!t.type.__asyncLoader,yo=t=>t.type.__isKeepAlive;function Zp(t,e){xd(t,"a",e)}function Qp(t,e){xd(t,"da",e)}function xd(t,e,n=tt){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(bo(e,r,n),n){let i=n.parent;for(;i&&i.parent;)yo(i.parent.vnode)&&em(r,e,n,i),i=i.parent}}function em(t,e,n,r){const i=bo(e,t,r,!0);Bi(()=>{Oa(r[e],i)},n)}function bo(t,e,n=tt,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{vn();const a=ji(n),l=wt(e,n,t,o);return a(),yn(),l});return r?i.unshift(s):i.push(s),s}}const Tn=t=>(e,n=tt)=>{(!Ti||t==="sp")&&bo(t,(...r)=>e(...r),n)},tm=Tn("bm"),Br=Tn("m"),nm=Tn("bu"),rm=Tn("u"),Rd=Tn("bum"),Bi=Tn("um"),im=Tn("sp"),sm=Tn("rtg"),om=Tn("rtc");function am(t,e=tt){bo("ec",t,e)}const lm=Symbol.for("v-ndc");function hn(t,e,n,r){let i;const s=n,o=X(t);if(o||Ee(t)){const a=o&&ar(t);let l=!1,c=!1;a&&(l=!_t(t),c=bn(t),t=mo(t)),i=new Array(t.length);for(let u=0,h=t.length;u<h;u++)i[u]=e(l?c?xr(Dt(t[u])):Dt(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,s)}else if(he(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,s)}}else i=[];return i}const ma=t=>t?Yd(t)?Io(t):ma(t.parent):null,hi=Ve(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ma(t.parent),$root:t=>ma(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Dd(t),$forceUpdate:t=>t.f||(t.f=()=>{za(t.update)}),$nextTick:t=>t.n||(t.n=vo.bind(t.proxy)),$watch:t=>Wp.bind(t)}),Wo=(t,e)=>t!==be&&!t.__isScriptSetup&&de(t,e),cm={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(Wo(r,e))return o[e]=1,r[e];if(i!==be&&de(i,e))return o[e]=2,i[e];if(de(s,e))return o[e]=3,s[e];if(n!==be&&de(n,e))return o[e]=4,n[e];ga&&(o[e]=0)}}const c=hi[e];let u,h;if(c)return e==="$attrs"&&Je(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==be&&de(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,de(h,e))return h[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return Wo(i,e)?(i[e]=n,!0):r!==be&&de(r,e)?(r[e]=n,!0):de(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,props:s,type:o}},a){let l;return!!(n[a]||t!==be&&a[0]!=="$"&&de(t,a)||Wo(e,a)||de(s,a)||de(r,a)||de(hi,a)||de(i.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:de(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ec(t){return X(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ga=!0;function um(t){const e=Dd(t),n=t.proxy,r=t.ctx;ga=!1,e.beforeCreate&&tc(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:p,beforeUpdate:E,updated:A,activated:T,deactivated:C,beforeDestroy:S,beforeUnmount:x,destroyed:W,unmounted:M,render:ne,renderTracked:G,renderTriggered:f,errorCaptured:m,serverPrefetch:d,expose:b,inheritAttrs:y,components:_,directives:v,filters:se}=e;if(c&&dm(c,r,null),o)for(const we in o){const pe=o[we];ie(pe)&&(r[we]=pe.bind(n))}if(i){const we=i.call(n,n);he(we)&&(t.data=$r(we))}if(ga=!0,s)for(const we in s){const pe=s[we],Tt=ie(pe)?pe.bind(n,n):ie(pe.get)?pe.get.bind(n,n):Kt,qn=!ie(pe)&&ie(pe.set)?pe.set.bind(n):Kt,zn=st({get:Tt,set:qn});Object.defineProperty(r,we,{enumerable:!0,configurable:!0,get:()=>zn.value,set:Lt=>zn.value=Lt})}if(a)for(const we in a)Nd(a[we],r,n,we);if(l){const we=ie(l)?l.call(n):l;Reflect.ownKeys(we).forEach(pe=>{Bp(pe,we[pe])})}u&&tc(u,t,"c");function Pe(we,pe){X(pe)?pe.forEach(Tt=>we(Tt.bind(n))):pe&&we(pe.bind(n))}if(Pe(tm,h),Pe(Br,p),Pe(nm,E),Pe(rm,A),Pe(Zp,T),Pe(Qp,C),Pe(am,m),Pe(om,G),Pe(sm,f),Pe(Rd,x),Pe(Bi,M),Pe(im,d),X(b))if(b.length){const we=t.exposed||(t.exposed={});b.forEach(pe=>{Object.defineProperty(we,pe,{get:()=>n[pe],set:Tt=>n[pe]=Tt,enumerable:!0})})}else t.exposed||(t.exposed={});ne&&t.render===Kt&&(t.render=ne),y!=null&&(t.inheritAttrs=y),_&&(t.components=_),v&&(t.directives=v),d&&Cd(t)}function dm(t,e,n=Kt){X(t)&&(t=va(t));for(const r in t){const i=t[r];let s;he(i)?"default"in i?s=ps(i.from||r,i.default,!0):s=ps(i.from||r):s=ps(i),Ye(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function tc(t,e,n){wt(X(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Nd(t,e,n,r){let i=r.includes(".")?_d(n,r):()=>n[r];if(Ee(t)){const s=e[t];ie(s)&&xt(i,s)}else if(ie(t))xt(i,t.bind(n));else if(he(t))if(X(t))t.forEach(s=>Nd(s,e,n,r));else{const s=ie(t.handler)?t.handler.bind(n):e[t.handler];ie(s)&&xt(i,s,t)}}function Dd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>Ns(l,c,o,!0)),Ns(l,e,o)),he(e)&&s.set(e,l),l}function Ns(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Ns(t,s,n,!0),i&&i.forEach(o=>Ns(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=fm[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const fm={data:nc,props:rc,emits:rc,methods:ti,computed:ti,beforeCreate:Xe,created:Xe,beforeMount:Xe,mounted:Xe,beforeUpdate:Xe,updated:Xe,beforeDestroy:Xe,beforeUnmount:Xe,destroyed:Xe,unmounted:Xe,activated:Xe,deactivated:Xe,errorCaptured:Xe,serverPrefetch:Xe,components:ti,directives:ti,watch:pm,provide:nc,inject:hm};function nc(t,e){return e?t?function(){return Ve(ie(t)?t.call(this,this):t,ie(e)?e.call(this,this):e)}:e:t}function hm(t,e){return ti(va(t),va(e))}function va(t){if(X(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Xe(t,e){return t?[...new Set([].concat(t,e))]:e}function ti(t,e){return t?Ve(Object.create(null),t,e):e}function rc(t,e){return t?X(t)&&X(e)?[...new Set([...t,...e])]:Ve(Object.create(null),ec(t),ec(e??{})):e}function pm(t,e){if(!t)return e;if(!e)return t;const n=Ve(Object.create(null),t);for(const r in e)n[r]=Xe(t[r],e[r]);return n}function Vd(){return{app:null,config:{isNativeTag:Hu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mm=0;function gm(t,e){return function(r,i=null){ie(r)||(r=Ve({},r)),i!=null&&!he(i)&&(i=null);const s=Vd(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:mm++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Km,get config(){return s.config},set config(u){},use(u,...h){return o.has(u)||(u&&ie(u.install)?(o.add(u),u.install(c,...h)):ie(u)&&(o.add(u),u(c,...h))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,h){return h?(s.components[u]=h,c):s.components[u]},directive(u,h){return h?(s.directives[u]=h,c):s.directives[u]},mount(u,h,p){if(!l){const E=c._ceVNode||ze(r,i);return E.appContext=s,p===!0?p="svg":p===!1&&(p=void 0),t(E,u,p),l=!0,c._container=u,u.__vue_app__=c,Io(E.component)}},onUnmount(u){a.push(u)},unmount(){l&&(wt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,h){return s.provides[u]=h,c},runWithContext(u){const h=kr;kr=c;try{return u()}finally{kr=h}}};return c}}let kr=null;const vm=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Pt(e)}Modifiers`]||t[`${vr(e)}Modifiers`];function ym(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||be;let i=n;const s=e.startsWith("update:"),o=s&&vm(r,e.slice(7));o&&(o.trim&&(i=n.map(u=>Ee(u)?u.trim():u)),o.number&&(i=n.map(ho)));let a,l=r[a=Fo(e)]||r[a=Fo(Pt(e))];!l&&s&&(l=r[a=Fo(vr(e))]),l&&wt(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,wt(c,t,6,i)}}const bm=new WeakMap;function Od(t,e,n=!1){const r=n?bm:e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!ie(t)){const l=c=>{const u=Od(c,e,!0);u&&(a=!0,Ve(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(he(t)&&r.set(t,null),null):(X(s)?s.forEach(l=>o[l]=null):Ve(o,s),he(t)&&r.set(t,o),o)}function _o(t,e){return!t||!co(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(t,e[0].toLowerCase()+e.slice(1))||de(t,vr(e))||de(t,e))}function ic(t){const{type:e,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:p,setupState:E,ctx:A,inheritAttrs:T}=t,C=xs(t);let S,x;try{if(n.shapeFlag&4){const M=i||r,ne=M;S=Wt(c.call(ne,M,u,h,E,p,A)),x=a}else{const M=e;S=Wt(M.length>1?M(h,{attrs:a,slots:o,emit:l}):M(h,null)),x=e.props?a:_m(a)}}catch(M){pi.length=0,go(M,t,1),S=ze(et)}let W=S;if(x&&T!==!1){const M=Object.keys(x),{shapeFlag:ne}=W;M.length&&ne&7&&(s&&M.some(uo)&&(x=wm(x,s)),W=jn(W,x,!1,!0))}return n.dirs&&(W=jn(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(n.dirs):n.dirs),n.transition&&Ii(W,n.transition),S=W,xs(C),S}const _m=t=>{let e;for(const n in t)(n==="class"||n==="style"||co(n))&&((e||(e={}))[n]=t[n]);return e},wm=(t,e)=>{const n={};for(const r in t)(!uo(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Im(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?sc(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(Ld(o,r,p)&&!_o(c,p))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?sc(r,o,c):!0:!!o;return!1}function sc(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(Ld(e,t,s)&&!_o(n,s))return!0}return!1}function Ld(t,e,n){const r=t[n],i=e[n];return n==="style"&&he(r)&&he(i)?!Ur(r,i):r!==i}function Em({vnode:t,parent:e,suspense:n},r){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.suspense.vnode.el=i.el=r,t=i),i===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const Md={},Fd=()=>Object.create(Md),Ud=t=>Object.getPrototypeOf(t)===Md;function Tm(t,e,n,r=!1){const i={},s=Fd();t.propsDefaults=Object.create(null),$d(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:Cp(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function Am(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=ue(i),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(_o(t.emitsOptions,p))continue;const E=e[p];if(l)if(de(s,p))E!==s[p]&&(s[p]=E,c=!0);else{const A=Pt(p);i[A]=ya(l,a,A,E,t,!1)}else E!==s[p]&&(s[p]=E,c=!0)}}}else{$d(t,e,i,s)&&(c=!0);let u;for(const h in a)(!e||!de(e,h)&&((u=vr(h))===h||!de(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=ya(l,a,h,void 0,t,!0)):delete i[h]);if(s!==a)for(const h in s)(!e||!de(e,h))&&(delete s[h],c=!0)}c&&sn(t.attrs,"set","")}function $d(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(li(l))continue;const c=e[l];let u;i&&de(i,u=Pt(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:_o(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=ue(n),c=a||be;for(let u=0;u<s.length;u++){const h=s[u];n[h]=ya(i,l,h,c[h],t,!de(c,h))}}return o}function ya(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=de(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ie(l)){const{propsDefaults:c}=i;if(n in c)r=c[n];else{const u=ji(i);r=c[n]=l.call(null,e),u()}}else r=l;i.ce&&i.ce._setProp(n,r)}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===vr(n))&&(r=!0))}return r}const Sm=new WeakMap;function Bd(t,e,n=!1){const r=n?Sm:e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!ie(t)){const u=h=>{l=!0;const[p,E]=Bd(h,e,!0);Ve(o,p),E&&a.push(...E)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return he(t)&&r.set(t,Tr),Tr;if(X(s))for(let u=0;u<s.length;u++){const h=Pt(s[u]);oc(h)&&(o[h]=be)}else if(s)for(const u in s){const h=Pt(u);if(oc(h)){const p=s[u],E=o[h]=X(p)||ie(p)?{type:p}:Ve({},p),A=E.type;let T=!1,C=!0;if(X(A))for(let S=0;S<A.length;++S){const x=A[S],W=ie(x)&&x.name;if(W==="Boolean"){T=!0;break}else W==="String"&&(C=!1)}else T=ie(A)&&A.name==="Boolean";E[0]=T,E[1]=C,(T||de(E,"default"))&&a.push(h)}}const c=[o,a];return he(t)&&r.set(t,c),c}function oc(t){return t[0]!=="$"&&!li(t)}const Ga=t=>t==="_"||t==="_ctx"||t==="$stable",Ka=t=>X(t)?t.map(Wt):[Wt(t)],km=(t,e,n)=>{if(e._n)return e;const r=yd((...i)=>Ka(e(...i)),n);return r._c=!1,r},jd=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Ga(i))continue;const s=t[i];if(ie(s))e[i]=km(i,s,r);else if(s!=null){const o=Ka(s);e[i]=()=>o}}},Hd=(t,e)=>{const n=Ka(e);t.slots.default=()=>n},Wd=(t,e,n)=>{for(const r in e)(n||!Ga(r))&&(t[r]=e[r])},Pm=(t,e,n)=>{const r=t.slots=Fd();if(t.vnode.shapeFlag&32){const i=e._;i?(Wd(r,e,n),n&&Ku(r,"_",i,!0)):jd(e,r)}else e&&Hd(t,e)},Cm=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=be;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:Wd(i,e,n):(s=!e.$stable,jd(e,i)),o=e}else e&&(Hd(t,e),o={default:1});if(s)for(const a in i)!Ga(a)&&o[a]==null&&delete i[a]},Ze=Vm;function xm(t){return Rm(t)}function Rm(t,e){const n=po();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:p,setScopeId:E=Kt,insertStaticContent:A}=t,T=(w,I,k,L=null,N=null,R=null,B=void 0,$=null,F=!!I.dynamicChildren)=>{if(w===I)return;w&&!nr(w,I)&&(L=rs(w),Lt(w,N,R,!0),w=null),I.patchFlag===-2&&(F=!1,I.dynamicChildren=null);const{type:V,ref:Z,shapeFlag:j}=I;switch(V){case wo:C(w,I,k,L);break;case et:S(w,I,k,L);break;case ms:w==null&&x(I,k,L,B);break;case Se:_(w,I,k,L,N,R,B,$,F);break;default:j&1?ne(w,I,k,L,N,R,B,$,F):j&6?v(w,I,k,L,N,R,B,$,F):(j&64||j&128)&&V.process(w,I,k,L,N,R,B,$,F,Gr)}Z!=null&&N?di(Z,w&&w.ref,R,I||w,!I):Z==null&&w&&w.ref!=null&&di(w.ref,null,R,w,!0)},C=(w,I,k,L)=>{if(w==null)r(I.el=a(I.children),k,L);else{const N=I.el=w.el;I.children!==w.children&&c(N,I.children)}},S=(w,I,k,L)=>{w==null?r(I.el=l(I.children||""),k,L):I.el=w.el},x=(w,I,k,L)=>{[w.el,w.anchor]=A(w.children,I,k,L,w.el,w.anchor)},W=({el:w,anchor:I},k,L)=>{let N;for(;w&&w!==I;)N=p(w),r(w,k,L),w=N;r(I,k,L)},M=({el:w,anchor:I})=>{let k;for(;w&&w!==I;)k=p(w),i(w),w=k;i(I)},ne=(w,I,k,L,N,R,B,$,F)=>{if(I.type==="svg"?B="svg":I.type==="math"&&(B="mathml"),w==null)G(I,k,L,N,R,B,$,F);else{const V=w.el&&w.el._isVueCE?w.el:null;try{V&&V._beginPatch(),d(w,I,N,R,B,$,F)}finally{V&&V._endPatch()}}},G=(w,I,k,L,N,R,B,$)=>{let F,V;const{props:Z,shapeFlag:j,transition:Y,dirs:re}=w;if(F=w.el=o(w.type,R,Z&&Z.is,Z),j&8?u(F,w.children):j&16&&m(w.children,F,null,L,N,qo(w,R),B,$),re&&Gn(w,null,L,"created"),f(F,w,w.scopeId,B,L),Z){for(const ge in Z)ge!=="value"&&!li(ge)&&s(F,ge,null,Z[ge],R,L);"value"in Z&&s(F,"value",null,Z.value,R),(V=Z.onVnodeBeforeMount)&&$t(V,L,w)}re&&Gn(w,null,L,"beforeMount");const le=Nm(N,Y);le&&Y.beforeEnter(F),r(F,I,k),((V=Z&&Z.onVnodeMounted)||le||re)&&Ze(()=>{try{V&&$t(V,L,w),le&&Y.enter(F),re&&Gn(w,null,L,"mounted")}finally{}},N)},f=(w,I,k,L,N)=>{if(k&&E(w,k),L)for(let R=0;R<L.length;R++)E(w,L[R]);if(N){let R=N.subTree;if(I===R||Gd(R.type)&&(R.ssContent===I||R.ssFallback===I)){const B=N.vnode;f(w,B,B.scopeId,B.slotScopeIds,N.parent)}}},m=(w,I,k,L,N,R,B,$,F=0)=>{for(let V=F;V<w.length;V++){const Z=w[V]=$?rn(w[V]):Wt(w[V]);T(null,Z,I,k,L,N,R,B,$)}},d=(w,I,k,L,N,R,B)=>{const $=I.el=w.el;let{patchFlag:F,dynamicChildren:V,dirs:Z}=I;F|=w.patchFlag&16;const j=w.props||be,Y=I.props||be;let re;if(k&&Kn(k,!1),(re=Y.onVnodeBeforeUpdate)&&$t(re,k,I,w),Z&&Gn(I,w,k,"beforeUpdate"),k&&Kn(k,!0),(j.innerHTML&&Y.innerHTML==null||j.textContent&&Y.textContent==null)&&u($,""),V?b(w.dynamicChildren,V,$,k,L,qo(I,N),R):B||pe(w,I,$,null,k,L,qo(I,N),R,!1),F>0){if(F&16)y($,j,Y,k,N);else if(F&2&&j.class!==Y.class&&s($,"class",null,Y.class,N),F&4&&s($,"style",j.style,Y.style,N),F&8){const le=I.dynamicProps;for(let ge=0;ge<le.length;ge++){const me=le[ge],Re=j[me],$e=Y[me];($e!==Re||me==="value")&&s($,me,Re,$e,N,k)}}F&1&&w.children!==I.children&&u($,I.children)}else!B&&V==null&&y($,j,Y,k,N);((re=Y.onVnodeUpdated)||Z)&&Ze(()=>{re&&$t(re,k,I,w),Z&&Gn(I,w,k,"updated")},L)},b=(w,I,k,L,N,R,B)=>{for(let $=0;$<I.length;$++){const F=w[$],V=I[$],Z=F.el&&(F.type===Se||!nr(F,V)||F.shapeFlag&198)?h(F.el):k;T(F,V,Z,null,L,N,R,B,!0)}},y=(w,I,k,L,N)=>{if(I!==k){if(I!==be)for(const R in I)!li(R)&&!(R in k)&&s(w,R,I[R],null,N,L);for(const R in k){if(li(R))continue;const B=k[R],$=I[R];B!==$&&R!=="value"&&s(w,R,$,B,N,L)}"value"in k&&s(w,"value",I.value,k.value,N)}},_=(w,I,k,L,N,R,B,$,F)=>{const V=I.el=w?w.el:a(""),Z=I.anchor=w?w.anchor:a("");let{patchFlag:j,dynamicChildren:Y,slotScopeIds:re}=I;re&&($=$?$.concat(re):re),w==null?(r(V,k,L),r(Z,k,L),m(I.children||[],k,Z,N,R,B,$,F)):j>0&&j&64&&Y&&w.dynamicChildren&&w.dynamicChildren.length===Y.length?(b(w.dynamicChildren,Y,k,N,R,B,$),(I.key!=null||N&&I===N.subTree)&&Ja(w,I,!0)):pe(w,I,k,Z,N,R,B,$,F)},v=(w,I,k,L,N,R,B,$,F)=>{I.slotScopeIds=$,w==null?I.shapeFlag&512?N.ctx.activate(I,k,L,B,F):se(I,k,L,N,R,B,F):Oe(w,I,F)},se=(w,I,k,L,N,R,B)=>{const $=w.component=Bm(w,L,N);if(yo(w)&&($.ctx.renderer=Gr),jm($,!1,B),$.asyncDep){if(N&&N.registerDep($,Pe,B),!w.el){const F=$.subTree=ze(et);S(null,F,I,k),w.placeholder=F.el}}else Pe($,w,I,k,N,R,B)},Oe=(w,I,k)=>{const L=I.component=w.component;if(Im(w,I,k))if(L.asyncDep&&!L.asyncResolved){we(L,I,k);return}else L.next=I,L.update();else I.el=w.el,L.vnode=I},Pe=(w,I,k,L,N,R,B)=>{const $=()=>{if(w.isMounted){let{next:j,bu:Y,u:re,parent:le,vnode:ge}=w;{const Ft=qd(w);if(Ft){j&&(j.el=ge.el,we(w,j,B)),Ft.asyncDep.then(()=>{Ze(()=>{w.isUnmounted||V()},N)});return}}let me=j,Re;Kn(w,!1),j?(j.el=ge.el,we(w,j,B)):j=ge,Y&&hs(Y),(Re=j.props&&j.props.onVnodeBeforeUpdate)&&$t(Re,le,j,ge),Kn(w,!0);const $e=ic(w),Mt=w.subTree;w.subTree=$e,T(Mt,$e,h(Mt.el),rs(Mt),w,N,R),j.el=$e.el,me===null&&Em(w,$e.el),re&&Ze(re,N),(Re=j.props&&j.props.onVnodeUpdated)&&Ze(()=>$t(Re,le,j,ge),N)}else{let j;const{el:Y,props:re}=I,{bm:le,m:ge,parent:me,root:Re,type:$e}=w,Mt=fi(I);Kn(w,!1),le&&hs(le),!Mt&&(j=re&&re.onVnodeBeforeMount)&&$t(j,me,I),Kn(w,!0);{Re.ce&&Re.ce._hasShadowRoot()&&Re.ce._injectChildStyle($e,w.parent?w.parent.type:void 0);const Ft=w.subTree=ic(w);T(null,Ft,k,L,w,N,R),I.el=Ft.el}if(ge&&Ze(ge,N),!Mt&&(j=re&&re.onVnodeMounted)){const Ft=I;Ze(()=>$t(j,me,Ft),N)}(I.shapeFlag&256||me&&fi(me.vnode)&&me.vnode.shapeFlag&256)&&w.a&&Ze(w.a,N),w.isMounted=!0,I=k=L=null}};w.scope.on();const F=w.effect=new Zu($);w.scope.off();const V=w.update=F.run.bind(F),Z=w.job=F.runIfDirty.bind(F);Z.i=w,Z.id=w.uid,F.scheduler=()=>za(Z),Kn(w,!0),V()},we=(w,I,k)=>{I.component=w;const L=w.vnode.props;w.vnode=I,w.next=null,Am(w,I.props,L,k),Cm(w,I.children,k),vn(),Kl(w),yn()},pe=(w,I,k,L,N,R,B,$,F=!1)=>{const V=w&&w.children,Z=w?w.shapeFlag:0,j=I.children,{patchFlag:Y,shapeFlag:re}=I;if(Y>0){if(Y&128){qn(V,j,k,L,N,R,B,$,F);return}else if(Y&256){Tt(V,j,k,L,N,R,B,$,F);return}}re&8?(Z&16&&zr(V,N,R),j!==V&&u(k,j)):Z&16?re&16?qn(V,j,k,L,N,R,B,$,F):zr(V,N,R,!0):(Z&8&&u(k,""),re&16&&m(j,k,L,N,R,B,$,F))},Tt=(w,I,k,L,N,R,B,$,F)=>{w=w||Tr,I=I||Tr;const V=w.length,Z=I.length,j=Math.min(V,Z);let Y;for(Y=0;Y<j;Y++){const re=I[Y]=F?rn(I[Y]):Wt(I[Y]);T(w[Y],re,k,null,N,R,B,$,F)}V>Z?zr(w,N,R,!0,!1,j):m(I,k,L,N,R,B,$,F,j)},qn=(w,I,k,L,N,R,B,$,F)=>{let V=0;const Z=I.length;let j=w.length-1,Y=Z-1;for(;V<=j&&V<=Y;){const re=w[V],le=I[V]=F?rn(I[V]):Wt(I[V]);if(nr(re,le))T(re,le,k,null,N,R,B,$,F);else break;V++}for(;V<=j&&V<=Y;){const re=w[j],le=I[Y]=F?rn(I[Y]):Wt(I[Y]);if(nr(re,le))T(re,le,k,null,N,R,B,$,F);else break;j--,Y--}if(V>j){if(V<=Y){const re=Y+1,le=re<Z?I[re].el:L;for(;V<=Y;)T(null,I[V]=F?rn(I[V]):Wt(I[V]),k,le,N,R,B,$,F),V++}}else if(V>Y)for(;V<=j;)Lt(w[V],N,R,!0),V++;else{const re=V,le=V,ge=new Map;for(V=le;V<=Y;V++){const ot=I[V]=F?rn(I[V]):Wt(I[V]);ot.key!=null&&ge.set(ot.key,V)}let me,Re=0;const $e=Y-le+1;let Mt=!1,Ft=0;const Kr=new Array($e);for(V=0;V<$e;V++)Kr[V]=0;for(V=re;V<=j;V++){const ot=w[V];if(Re>=$e){Lt(ot,N,R,!0);continue}let Ut;if(ot.key!=null)Ut=ge.get(ot.key);else for(me=le;me<=Y;me++)if(Kr[me-le]===0&&nr(ot,I[me])){Ut=me;break}Ut===void 0?Lt(ot,N,R,!0):(Kr[Ut-le]=V+1,Ut>=Ft?Ft=Ut:Mt=!0,T(ot,I[Ut],k,null,N,R,B,$,F),Re++)}const Bl=Mt?Dm(Kr):Tr;for(me=Bl.length-1,V=$e-1;V>=0;V--){const ot=le+V,Ut=I[ot],jl=I[ot+1],Hl=ot+1<Z?jl.el||zd(jl):L;Kr[V]===0?T(null,Ut,k,Hl,N,R,B,$,F):Mt&&(me<0||V!==Bl[me]?zn(Ut,k,Hl,2):me--)}}},zn=(w,I,k,L,N=null)=>{const{el:R,type:B,transition:$,children:F,shapeFlag:V}=w;if(V&6){zn(w.component.subTree,I,k,L);return}if(V&128){w.suspense.move(I,k,L);return}if(V&64){B.move(w,I,k,Gr);return}if(B===Se){r(R,I,k);for(let j=0;j<F.length;j++)zn(F[j],I,k,L);r(w.anchor,I,k);return}if(B===ms){W(w,I,k);return}if(L!==2&&V&1&&$)if(L===0)$.persisted&&!R[yt]?r(R,I,k):($.beforeEnter(R),r(R,I,k),Ze(()=>$.enter(R),N));else{const{leave:j,delayLeave:Y,afterLeave:re}=$,le=()=>{w.ctx.isUnmounted?i(R):r(R,I,k)},ge=()=>{const me=R._isLeaving||!!R[yt];R._isLeaving&&R[yt](!0),$.persisted&&!me?le():j(R,()=>{le(),re&&re()})};Y?Y(R,le,ge):ge()}else r(R,I,k)},Lt=(w,I,k,L=!1,N=!1)=>{const{type:R,props:B,ref:$,children:F,dynamicChildren:V,shapeFlag:Z,patchFlag:j,dirs:Y,cacheIndex:re,memo:le}=w;if(j===-2&&(N=!1),$!=null&&(vn(),di($,null,k,w,!0),yn()),re!=null&&(I.renderCache[re]=void 0),Z&256){I.ctx.deactivate(w);return}const ge=Z&1&&Y,me=!fi(w);let Re;if(me&&(Re=B&&B.onVnodeBeforeUnmount)&&$t(Re,I,w),Z&6)Xh(w.component,k,L);else{if(Z&128){w.suspense.unmount(k,L);return}ge&&Gn(w,null,I,"beforeUnmount"),Z&64?w.type.remove(w,I,k,Gr,L):V&&!V.hasOnce&&(R!==Se||j>0&&j&64)?zr(V,I,k,!1,!0):(R===Se&&j&384||!N&&Z&16)&&zr(F,I,k),L&&Ul(w)}const $e=le!=null&&re==null;(me&&(Re=B&&B.onVnodeUnmounted)||ge||$e)&&Ze(()=>{Re&&$t(Re,I,w),ge&&Gn(w,null,I,"unmounted"),$e&&(w.el=null)},k)},Ul=w=>{const{type:I,el:k,anchor:L,transition:N}=w;if(I===Se){Yh(k,L);return}if(I===ms){M(w);return}const R=()=>{i(k),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(w.shapeFlag&1&&N&&!N.persisted){const{leave:B,delayLeave:$}=N,F=()=>B(k,R);$?$(w.el,R,F):F()}else R()},Yh=(w,I)=>{let k;for(;w!==I;)k=p(w),i(w),w=k;i(I)},Xh=(w,I,k)=>{const{bum:L,scope:N,job:R,subTree:B,um:$,m:F,a:V}=w;ac(F),ac(V),L&&hs(L),N.stop(),R&&(R.flags|=8,Lt(B,w,I,k)),$&&Ze($,I),Ze(()=>{w.isUnmounted=!0},I)},zr=(w,I,k,L=!1,N=!1,R=0)=>{for(let B=R;B<w.length;B++)Lt(w[B],I,k,L,N)},rs=w=>{if(w.shapeFlag&6)return rs(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const I=p(w.anchor||w.el),k=I&&I[wd];return k?p(k):I};let Mo=!1;const $l=(w,I,k)=>{let L;w==null?I._vnode&&(Lt(I._vnode,null,null,!0),L=I._vnode.component):T(I._vnode||null,w,I,null,null,null,k),I._vnode=w,Mo||(Mo=!0,Kl(L),md(),Mo=!1)},Gr={p:T,um:Lt,m:zn,r:Ul,mt:se,mc:m,pc:pe,pbc:b,n:rs,o:t};return{render:$l,hydrate:void 0,createApp:gm($l)}}function qo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Kn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Nm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ja(t,e,n=!1){const r=t.children,i=e.children;if(X(r)&&X(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=rn(i[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Ja(o,a)),a.type===wo&&(a.patchFlag===-1&&(a=i[s]=rn(a)),a.el=o.el),a.type===et&&!a.el&&(a.el=o.el)}}function Dm(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function qd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:qd(e)}function ac(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function zd(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?zd(e.subTree):null}const Gd=t=>t.__isSuspense;function Vm(t,e){e&&e.pendingBranch?X(t)?e.effects.push(...t):e.effects.push(t):$p(t)}const Se=Symbol.for("v-fgt"),wo=Symbol.for("v-txt"),et=Symbol.for("v-cmt"),ms=Symbol.for("v-stc"),pi=[];let ut=null;function P(t=!1){pi.push(ut=t?null:[])}function Om(){pi.pop(),ut=pi[pi.length-1]||null}let Ei=1;function Ds(t,e=!1){Ei+=t,t<0&&ut&&e&&(ut.hasOnce=!0)}function Kd(t){return t.dynamicChildren=Ei>0?ut||Tr:null,Om(),Ei>0&&ut&&ut.push(t),t}function O(t,e,n,r,i,s){return Kd(g(t,e,n,r,i,s,!0))}function Me(t,e,n,r,i){return Kd(ze(t,e,n,r,i,!0))}function Vs(t){return t?t.__v_isVNode===!0:!1}function nr(t,e){return t.type===e.type&&t.key===e.key}const Jd=({key:t})=>t??null,gs=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ee(t)||Ye(t)||ie(t)?{i:bt,r:t,k:e,f:!!n}:t:null);function g(t,e=null,n=null,r=0,i=null,s=t===Se?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Jd(e),ref:e&&gs(e),scopeId:vd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:bt};return a?(Ya(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Ee(n)?8:16),Ei>0&&!o&&ut&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&ut.push(l),l}const ze=Lm;function Lm(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===lm)&&(t=et),Vs(t)){const a=jn(t,e,!0);return n&&Ya(a,n),Ei>0&&!s&&ut&&(a.shapeFlag&6?ut[ut.indexOf(t)]=a:ut.push(a)),a.patchFlag=-2,a}if(zm(t)&&(t=t.__vccOpts),e){e=Mm(e);let{class:a,style:l}=e;a&&!Ee(a)&&(e.class=vt(a)),he(l)&&(qa(l)&&!X(l)&&(l=Ve({},l)),e.style=Ma(l))}const o=Ee(t)?1:Gd(t)?128:Id(t)?64:he(t)?4:ie(t)?2:0;return g(t,e,n,r,i,o,s,!0)}function Mm(t){return t?qa(t)||Ud(t)?Ve({},t):t:null}function jn(t,e,n=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?Fm(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Jd(c),ref:e&&e.ref?n&&s?X(s)?s.concat(gs(e)):[s,gs(e)]:gs(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Se?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&jn(t.ssContent),ssFallback:t.ssFallback&&jn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Ii(u,l.clone(u)),u}function Q(t=" ",e=0){return ze(wo,null,t,e)}function At(t,e){const n=ze(ms,null,t);return n.staticCount=e,n}function te(t="",e=!1){return e?(P(),Me(et,null,t)):ze(et,null,t)}function Wt(t){return t==null||typeof t=="boolean"?ze(et):X(t)?ze(Se,null,t.slice()):Vs(t)?rn(t):ze(wo,null,String(t))}function rn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:jn(t)}function Ya(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(X(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Ya(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Ud(e)?e._ctx=bt:i===3&&bt&&(bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:bt},n=32):(e=String(e),r&64?(n=16,e=[Q(e)]):n=8);t.children=e,t.shapeFlag|=n}function Fm(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=vt([e.class,r.class]));else if(i==="style")e.style=Ma([e.style,r.style]);else if(co(i)){const s=e[i],o=r[i];o&&s!==o&&!(X(s)&&s.includes(o))?e[i]=s?[].concat(s,o):o:o==null&&s==null&&!uo(i)&&(e[i]=o)}else i!==""&&(e[i]=r[i])}return e}function $t(t,e,n,r=null){wt(t,e,7,[n,r])}const Um=Vd();let $m=0;function Bm(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Um,s={uid:$m++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new up(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bd(r,i),emitsOptions:Od(r,i),emit:null,emitted:null,propsDefaults:be,inheritAttrs:r.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=ym.bind(null,s),t.ce&&t.ce(s),s}let tt=null;const Xa=()=>tt||bt;let Os,ba;{const t=po(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};Os=e("__VUE_INSTANCE_SETTERS__",n=>tt=n),ba=e("__VUE_SSR_SETTERS__",n=>Ti=n)}const ji=t=>{const e=tt;return Os(t),t.scope.on(),()=>{t.scope.off(),Os(e)}},lc=()=>{tt&&tt.scope.off(),Os(null)};function Yd(t){return t.vnode.shapeFlag&4}let Ti=!1;function jm(t,e=!1,n=!1){e&&ba(e);const{props:r,children:i}=t.vnode,s=Yd(t);Tm(t,r,s,e),Pm(t,i,n||e);const o=s?Hm(t,e):void 0;return e&&ba(!1),o}function Hm(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,cm);const{setup:r}=n;if(r){vn();const i=t.setupContext=r.length>1?qm(t):null,s=ji(t),o=$i(r,t,0,[t.props,i]),a=Wu(o);if(yn(),s(),(a||t.sp)&&!fi(t)&&Cd(t),a){if(o.then(lc,lc),e)return o.then(l=>{cc(t,l)}).catch(l=>{go(l,t,0)});t.asyncDep=o}else cc(t,o)}else Xd(t)}function cc(t,e,n){ie(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:he(e)&&(t.setupState=fd(e)),Xd(t)}function Xd(t,e,n){const r=t.type;t.render||(t.render=r.render||Kt);{const i=ji(t);vn();try{um(t)}finally{yn(),i()}}}const Wm={get(t,e){return Je(t,"get",""),t[e]}};function qm(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Wm),slots:t.slots,emit:t.emit,expose:e}}function Io(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(fd(xp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in hi)return hi[n](t)},has(e,n){return n in e||n in hi}})):t.proxy}function zm(t){return ie(t)&&"__vccOpts"in t}const st=(t,e)=>Op(t,e,Ti);function Gm(t,e,n){try{Ds(-1);const r=arguments.length;return r===2?he(e)&&!X(e)?Vs(e)?ze(t,null,[e]):ze(t,e):ze(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Vs(n)&&(n=[n]),ze(t,e,n))}finally{Ds(1)}}const Km="3.5.38";/**
* @vue/runtime-dom v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _a;const uc=typeof window<"u"&&window.trustedTypes;if(uc)try{_a=uc.createPolicy("vue",{createHTML:t=>t})}catch{}const Zd=_a?t=>_a.createHTML(t):t=>t,Jm="http://www.w3.org/2000/svg",Ym="http://www.w3.org/1998/Math/MathML",nn=typeof document<"u"?document:null,dc=nn&&nn.createElement("template"),Xm={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?nn.createElementNS(Jm,t):e==="mathml"?nn.createElementNS(Ym,t):n?nn.createElement(t,{is:n}):nn.createElement(t);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>nn.createTextNode(t),createComment:t=>nn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>nn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{dc.innerHTML=Zd(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=dc.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Cn="transition",Xr="animation",Ai=Symbol("_vtc"),Qd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Zm=Ve({},Td,Qd),Qm=t=>(t.displayName="Transition",t.props=Zm,t),eg=Qm((t,{slots:e})=>Gm(Yp,tg(t),e)),Jn=(t,e=[])=>{X(t)?t.forEach(n=>n(...e)):t&&t(...e)},fc=t=>t?X(t)?t.some(e=>e.length>1):t.length>1:!1;function tg(t){const e={};for(const _ in t)_ in Qd||(e[_]=t[_]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:E=`${n}-leave-to`}=t,A=ng(i),T=A&&A[0],C=A&&A[1],{onBeforeEnter:S,onEnter:x,onEnterCancelled:W,onLeave:M,onLeaveCancelled:ne,onBeforeAppear:G=S,onAppear:f=x,onAppearCancelled:m=W}=e,d=(_,v,se,Oe)=>{_._enterCancelled=Oe,Yn(_,v?u:a),Yn(_,v?c:o),se&&se()},b=(_,v)=>{_._isLeaving=!1,Yn(_,h),Yn(_,E),Yn(_,p),v&&v()},y=_=>(v,se)=>{const Oe=_?f:x,Pe=()=>d(v,_,se);Jn(Oe,[v,Pe]),hc(()=>{Yn(v,_?l:s),tn(v,_?u:a),fc(Oe)||pc(v,r,T,Pe)})};return Ve(e,{onBeforeEnter(_){Jn(S,[_]),tn(_,s),tn(_,o)},onBeforeAppear(_){Jn(G,[_]),tn(_,l),tn(_,c)},onEnter:y(!1),onAppear:y(!0),onLeave(_,v){_._isLeaving=!0;const se=()=>b(_,v);tn(_,h),_._enterCancelled?(tn(_,p),vc(_)):(vc(_),tn(_,p)),hc(()=>{_._isLeaving&&(Yn(_,h),tn(_,E),fc(M)||pc(_,r,C,se))}),Jn(M,[_,se])},onEnterCancelled(_){d(_,!1,void 0,!0),Jn(W,[_])},onAppearCancelled(_){d(_,!0,void 0,!0),Jn(m,[_])},onLeaveCancelled(_){b(_),Jn(ne,[_])}})}function ng(t){if(t==null)return null;if(he(t))return[zo(t.enter),zo(t.leave)];{const e=zo(t);return[e,e]}}function zo(t){return np(t)}function tn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ai]||(t[Ai]=new Set)).add(e)}function Yn(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Ai];n&&(n.delete(e),n.size||(t[Ai]=void 0))}function hc(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let rg=0;function pc(t,e,n,r){const i=t._endId=++rg,s=()=>{i===t._endId&&r()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=ig(t,e);if(!o)return r();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,p),s()},p=E=>{E.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,p)}function ig(t,e){const n=window.getComputedStyle(t),r=A=>(n[A]||"").split(", "),i=r(`${Cn}Delay`),s=r(`${Cn}Duration`),o=mc(i,s),a=r(`${Xr}Delay`),l=r(`${Xr}Duration`),c=mc(a,l);let u=null,h=0,p=0;e===Cn?o>0&&(u=Cn,h=o,p=s.length):e===Xr?c>0&&(u=Xr,h=c,p=l.length):(h=Math.max(o,c),u=h>0?o>c?Cn:Xr:null,p=u?u===Cn?s.length:l.length:0);const E=u===Cn&&/\b(?:transform|all)(?:,|$)/.test(r(`${Cn}Property`).toString());return{type:u,timeout:h,propCount:p,hasTransform:E}}function mc(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>gc(n)+gc(t[r])))}function gc(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function vc(t){return(t?t.ownerDocument:document).body.offsetHeight}function sg(t,e,n){const r=t[Ai];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ls=Symbol("_vod"),ef=Symbol("_vsh"),tf={name:"show",beforeMount(t,{value:e},{transition:n}){t[Ls]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Zr(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Zr(t,!0),r.enter(t)):r.leave(t,()=>{Zr(t,!1)}):Zr(t,e))},beforeUnmount(t,{value:e}){Zr(t,e)}};function Zr(t,e){t.style.display=e?t[Ls]:"none",t[ef]=!e}const og=Symbol(""),ag=/(?:^|;)\s*display\s*:/;function lg(t,e,n){const r=t.style,i=Ee(n);let s=!1;if(n&&!i){if(e)if(Ee(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&ni(r,a,"")}else for(const o in e)n[o]==null&&ni(r,o,"");for(const o in n){o==="display"&&(s=!0);const a=n[o];a!=null?ug(t,o,!Ee(e)&&e?e[o]:void 0,a)||ni(r,o,a):ni(r,o,"")}}else if(i){if(e!==n){const o=r[og];o&&(n+=";"+o),r.cssText=n,s=ag.test(n)}}else e&&t.removeAttribute("style");Ls in t&&(t[Ls]=s?r.display:"",t[ef]&&(r.display="none"))}const yc=/\s*!important$/;function ni(t,e,n){if(X(n))n.forEach(r=>ni(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=cg(t,e);yc.test(n)?t.setProperty(vr(r),n.replace(yc,""),"important"):t[r]=n}}const bc=["Webkit","Moz","ms"],Go={};function cg(t,e){const n=Go[e];if(n)return n;let r=Pt(e);if(r!=="filter"&&r in t)return Go[e]=r;r=Gu(r);for(let i=0;i<bc.length;i++){const s=bc[i]+r;if(s in t)return Go[e]=s}return e}function ug(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Ee(r)&&n===r}const _c="http://www.w3.org/1999/xlink";function wc(t,e,n,r,i,s=lp(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(_c,e.slice(6,e.length)):t.setAttributeNS(_c,e,n):n==null||s&&!Ju(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Zt(n)?String(n):n)}function Ic(t,e,n,r,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Zd(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Ju(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function Dn(t,e,n,r){t.addEventListener(e,n,r)}function dg(t,e,n,r){t.removeEventListener(e,n,r)}const Ec=Symbol("_vei");function fg(t,e,n,r,i=null){const s=t[Ec]||(t[Ec]={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=hg(e);if(r){const c=s[e]=gg(r,i);Dn(t,a,c,l)}else o&&(dg(t,a,o,l),s[e]=void 0)}}const Tc=/(?:Once|Passive|Capture)$/;function hg(t){let e;if(Tc.test(t)){e={};let r;for(;r=t.match(Tc);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):vr(t.slice(2)),e]}let Ko=0;const pg=Promise.resolve(),mg=()=>Ko||(pg.then(()=>Ko=0),Ko=Date.now());function gg(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const i=n.value;if(X(i)){const s=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{s.call(r),r._stopped=!0};const o=i.slice(),a=[r];for(let l=0;l<o.length&&!r._stopped;l++){const c=o[l];c&&wt(c,e,5,a)}}else wt(i,e,5,[r])};return n.value=t,n.attached=mg(),n}const Ac=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,vg=(t,e,n,r,i,s)=>{const o=i==="svg";e==="class"?sg(t,r,o):e==="style"?lg(t,n,r):co(e)?uo(e)||fg(t,e,n,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yg(t,e,r,o))?(Ic(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&wc(t,e,r,o,s,e!=="value")):t._isVueCE&&(bg(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ee(r)))?Ic(t,Pt(e),r,s,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),wc(t,e,r,o))};function yg(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Ac(e)&&ie(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Ac(e)&&Ee(n)?!1:e in t}function bg(t,e){const n=t._def.props;if(!n)return!1;const r=Pt(e);return Array.isArray(n)?n.some(i=>Pt(i)===r):Object.keys(n).some(i=>Pt(i)===r)}const Rr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return X(e)?n=>hs(e,n):e};function _g(t){t.target.composing=!0}function Sc(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const pn=Symbol("_assign");function kc(t,e,n){return e&&(t=t.trim()),n&&(t=ho(t)),t}const ce={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t[pn]=Rr(i);const s=r||i.props&&i.props.type==="number";Dn(t,e?"change":"input",o=>{o.target.composing||t[pn](kc(t.value,n,s))}),(n||s)&&Dn(t,"change",()=>{t.value=kc(t.value,n,s)}),e||(Dn(t,"compositionstart",_g),Dn(t,"compositionend",Sc),Dn(t,"change",Sc))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:i,number:s}},o){if(t[pn]=Rr(o),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?ho(t.value):t.value,l=e??"";if(a===l)return;const c=t.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===t&&t.type!=="range"&&(r&&e===n||i&&t.value.trim()===l)||(t.value=l)}},wg={deep:!0,created(t,e,n){t[pn]=Rr(n),Dn(t,"change",()=>{const r=t._modelValue,i=Si(t),s=t.checked,o=t[pn];if(X(r)){const a=Fa(r,i),l=a!==-1;if(s&&!l)o(r.concat(i));else if(!s&&l){const c=[...r];c.splice(a,1),o(c)}}else if(Fr(r)){const a=new Set(r);s?a.add(i):a.delete(i),o(a)}else o(rf(t,s))})},mounted:Pc,beforeUpdate(t,e,n){t[pn]=Rr(n),Pc(t,e,n)}};function Pc(t,{value:e,oldValue:n},r){t._modelValue=e;let i;if(X(e))i=Fa(e,r.props.value)>-1;else if(Fr(e))i=e.has(r.props.value);else{if(e===n)return;i=Ur(e,rf(t,!0))}t.checked!==i&&(t.checked=i)}const nf={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=Fr(e);Dn(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ho(Si(o)):Si(o));t[pn](t.multiple?i?new Set(s):s:s[0]),t._assigning=!0,vo(()=>{t._assigning=!1})}),t[pn]=Rr(r)},mounted(t,{value:e}){Cc(t,e)},beforeUpdate(t,e,n){t[pn]=Rr(n)},updated(t,{value:e}){t._assigning||Cc(t,e)}};function Cc(t,e){const n=t.multiple,r=X(e);if(!(n&&!r&&!Fr(e))){for(let i=0,s=t.options.length;i<s;i++){const o=t.options[i],a=Si(o);if(n)if(r){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Fa(e,a)>-1}else o.selected=e.has(a);else if(Ur(Si(o),e)){t.selectedIndex!==i&&(t.selectedIndex=i);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Si(t){return"_value"in t?t._value:t.value}function rf(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Ig=["ctrl","shift","alt","meta"],Eg={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ig.some(n=>t[`${n}Key`]&&!e.includes(n))},Nr=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((i,...s)=>{for(let o=0;o<e.length;o++){const a=Eg[e[o]];if(a&&a(i,e))return}return t(i,...s)}))},Tg=Ve({patchProp:vg},Xm);let xc;function Ag(){return xc||(xc=xm(Tg))}const Sg=((...t)=>{const e=Ag().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=Pg(r);if(!i)return;const s=e._component;!ie(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,kg(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e});function kg(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Pg(t){return Ee(t)?document.querySelector(t):t}const Cg=()=>{};var Rc={};/**
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
 */const sf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xg=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},of={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,h=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,E=c&63;l||(E=64,o||(p=64)),r.push(n[u],n[h],n[p],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||h==null)throw new Rg;const p=s<<2|a>>4;if(r.push(p),c!==64){const E=a<<4&240|c>>2;if(r.push(E),h!==64){const A=c<<6&192|h;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Rg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ng=function(t){const e=sf(t);return of.encodeByteArray(e,!0)},Ms=function(t){return Ng(t).replace(/\./g,"")},af=function(t){try{return of.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Dg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Vg=()=>Dg().__FIREBASE_DEFAULTS__,Og=()=>{if(typeof process>"u"||typeof Rc>"u")return;const t=Rc.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Lg=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&af(t[1]);return e&&JSON.parse(e)},Za=()=>{try{return Cg()||Vg()||Og()||Lg()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lf=t=>{var e,n;return(n=(e=Za())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Mg=t=>{const e=lf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},cf=()=>{var t;return(t=Za())==null?void 0:t.config},uf=t=>{var e;return(e=Za())==null?void 0:e[`_${t}`]};/**
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
 */class df{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Fg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[Ms(JSON.stringify(n)),Ms(JSON.stringify(o)),""].join(".")}/**
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
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ug(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function $g(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Bg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Hg(){const t=nt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Wg(){try{return typeof indexedDB=="object"}catch{return!1}}function qg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const zg="FirebaseError";class An extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zg,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hi.prototype.create)}}class Hi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Gg(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new An(i,a,r)}}function Gg(t,e){try{let n=0,r="";for(;n<t.length;){const i=t.indexOf("{$",n);if(i===-1){r+=t.substring(n);break}const s=t.indexOf("}",i+2);if(s===-1){r+=t.substring(n);break}const o=t.substring(i+2,s),a=e[o];r+=t.substring(n,i)+(a!=null?String(a):`<${o}?>`),n=s+1}return r}catch{return t}}function Kg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function cr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Nc(s)&&Nc(o)){if(!cr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Nc(t){return t!==null&&typeof t=="object"}/**
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
 */function Wi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ri(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ii(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Jg(t,e){const n=new Yg(t,e);return n.subscribe.bind(n)}class Yg{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Xg(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Jo),i.error===void 0&&(i.error=Jo),i.complete===void 0&&(i.complete=Jo);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jo(){}/**
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
 */function Ne(t){return t&&t._delegate?t._delegate:t}/**
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
 */function qi(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ff(t){return(await fetch(t,{credentials:"include"})).ok}class ur{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const er="[DEFAULT]";/**
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
 */class Zg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new df;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ev(e))try{this.getOrInitializeService({instanceIdentifier:er})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=er){return this.instances.has(e)}getOptions(e=er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Qg(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=er){return this.component?this.component.multipleInstances?e:er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qg(t){return t===er?void 0:t}function ev(t){return t.instantiationMode==="EAGER"}/**
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
 */class tv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Zg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const nv={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},rv=fe.INFO,iv={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},sv=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=iv[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qa{constructor(e){this.name=e,this._logLevel=rv,this._logHandler=sv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const ov=(t,e)=>e.some(n=>t instanceof n);let Dc,Vc;function av(){return Dc||(Dc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lv(){return Vc||(Vc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hf=new WeakMap,wa=new WeakMap,pf=new WeakMap,Yo=new WeakMap,el=new WeakMap;function cv(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Un(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&hf.set(n,t)}).catch(()=>{}),el.set(e,t),e}function uv(t){if(wa.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});wa.set(t,e)}let Ia={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wa.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Un(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dv(t){Ia=t(Ia)}function fv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xo(this),e,...n);return pf.set(r,e.sort?e.sort():[e]),Un(r)}:lv().includes(t)?function(...e){return t.apply(Xo(this),e),Un(hf.get(this))}:function(...e){return Un(t.apply(Xo(this),e))}}function hv(t){return typeof t=="function"?fv(t):(t instanceof IDBTransaction&&uv(t),ov(t,av())?new Proxy(t,Ia):t)}function Un(t){if(t instanceof IDBRequest)return cv(t);if(Yo.has(t))return Yo.get(t);const e=hv(t);return e!==t&&(Yo.set(t,e),el.set(e,t)),e}const Xo=t=>el.get(t);function pv(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Un(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Un(o.result),l.oldVersion,l.newVersion,Un(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const mv=["get","getKey","getAll","getAllKeys","count"],gv=["put","add","delete","clear"],Zo=new Map;function Oc(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zo.get(e))return Zo.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=gv.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||mv.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Zo.set(e,s),s}dv(t=>({...t,get:(e,n,r)=>Oc(e,n)||t.get(e,n,r),has:(e,n)=>!!Oc(e,n)||t.has(e,n)}));/**
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
 */class vv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yv(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ea="@firebase/app",Lc="0.16.4";/**
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
 */const _n=new Qa("@firebase/app"),bv="@firebase/app-compat",_v="@firebase/analytics-compat",wv="@firebase/analytics",Iv="@firebase/app-check-compat",Ev="@firebase/app-check",Tv="@firebase/auth",Av="@firebase/auth-compat",Sv="@firebase/database",kv="@firebase/data-connect",Pv="@firebase/database-compat",Cv="@firebase/functions",xv="@firebase/functions-compat",Rv="@firebase/installations",Nv="@firebase/installations-compat",Dv="@firebase/messaging",Vv="@firebase/messaging-compat",Ov="@firebase/performance",Lv="@firebase/performance-compat",Mv="@firebase/remote-config",Fv="@firebase/remote-config-compat",Uv="@firebase/storage",$v="@firebase/storage-compat",Bv="@firebase/firestore",jv="@firebase/ai",Hv="@firebase/firestore-compat",Wv="firebase",qv="13.1.0";/**
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
 */const Ta="[DEFAULT]",zv={[Ea]:"fire-core",[bv]:"fire-core-compat",[wv]:"fire-analytics",[_v]:"fire-analytics-compat",[Ev]:"fire-app-check",[Iv]:"fire-app-check-compat",[Tv]:"fire-auth",[Av]:"fire-auth-compat",[Sv]:"fire-rtdb",[kv]:"fire-data-connect",[Pv]:"fire-rtdb-compat",[Cv]:"fire-fn",[xv]:"fire-fn-compat",[Rv]:"fire-iid",[Nv]:"fire-iid-compat",[Dv]:"fire-fcm",[Vv]:"fire-fcm-compat",[Ov]:"fire-perf",[Lv]:"fire-perf-compat",[Mv]:"fire-rc",[Fv]:"fire-rc-compat",[Uv]:"fire-gcs",[$v]:"fire-gcs-compat",[Bv]:"fire-fst",[Hv]:"fire-fst-compat",[jv]:"fire-vertex","fire-js":"fire-js",[Wv]:"fire-js-all"};/**
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
 */const ki=new Map,Gv=new Map,Aa=new Map;function Mc(t,e){try{t.container.addComponent(e)}catch(n){_n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Dr(t){const e=t.name;if(Aa.has(e))return _n.debug(`There were multiple attempts to register component ${e}.`),!1;Aa.set(e,t);for(const n of ki.values())Mc(n,t);for(const n of Gv.values())Mc(n,t);return!0}function tl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function at(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Kv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ln=new Hi("app","Firebase",Kv);/**
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
 */class Jv{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ur("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ln.create("app-deleted",{appName:this._name})}}/**
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
 */const jr=qv;function mf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Ta,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw ln.create("bad-app-name",{appName:String(i)});if(n||(n=cf()),!n)throw ln.create("no-options");const s=ki.get(i);if(s)if(cr(n,s.options)){if(cr(r,s.config))return s;throw ln.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(s.config),newValue:JSON.stringify(r)})}else throw ln.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(s.options),newValue:JSON.stringify(n)});const o=new tv(i);for(const l of Aa.values())o.addComponent(l);const a=new Jv(n,r,o);return ki.set(i,a),a}function gf(t=Ta){const e=ki.get(t);if(!e&&t===Ta&&cf())return mf();if(!e)throw ln.create("no-app",{appName:t});return e}function Yv(){return Array.from(ki.values())}function $n(t,e,n){let r=zv[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),_n.warn(o.join(" "));return}Dr(new ur(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Xv="firebase-heartbeat-database",Zv=1,Pi="firebase-heartbeat-store";let Qo=null;function vf(){return Qo||(Qo=pv(Xv,Zv,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Pi)}catch(n){console.warn(n)}}}}).catch(t=>{throw ln.create("idb-open",{originalErrorMessage:t.message})})),Qo}async function Qv(t){try{const n=(await vf()).transaction(Pi),r=await n.objectStore(Pi).get(yf(t));return await n.done,r}catch(e){if(e instanceof An)_n.warn(e.message);else{const n=ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});_n.warn(n.message)}}}async function Fc(t,e){try{const r=(await vf()).transaction(Pi,"readwrite");await r.objectStore(Pi).put(e,yf(t)),await r.done}catch(n){if(n instanceof An)_n.warn(n.message);else{const r=ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});_n.warn(r.message)}}}function yf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ey=1024,ty=30;class ny{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iy(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Uc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>ty){const o=sy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){_n.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Uc(),{heartbeatsToSend:r,unsentEntries:i}=ry(this._heartbeatsCache.heartbeats),s=Ms(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return _n.warn(n),""}}}function Uc(){return new Date().toISOString().substring(0,10)}function ry(t,e=ey){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),$c(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),$c(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class iy{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wg()?qg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Qv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Fc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function $c(t){return Ms(JSON.stringify({version:2,heartbeats:t})).length}function sy(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function oy(t){Dr(new ur("platform-logger",e=>new vv(e),"PRIVATE")),Dr(new ur("heartbeat",e=>new ny(e),"PRIVATE")),$n(Ea,Lc,t),$n(Ea,Lc,"esm2020"),$n("fire-js","")}/**
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
 */oy("");function bf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ay=bf,_f=new Hi("auth","Firebase",bf());/**
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
 */const Fs=new Qa("@firebase/auth");function vs(t,...e){Fs.logLevel<=fe.WARN&&Fs.warn(`Auth (${jr}): ${t}`,...e)}function ys(t,...e){Fs.logLevel<=fe.ERROR&&Fs.error(`Auth (${jr}): ${t}`,...e)}/**
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
 */function It(t,...e){throw nl(t,...e)}function Rt(t,...e){return nl(t,...e)}function Eo(t,e,n){const r={...ay(),[e]:n};return new Hi("auth","Firebase",r).create(e,{appName:t.name})}function mn(t){return Eo(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ly(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&It(t,"argument-error"),Eo(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function nl(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _f.create(t,...e)}function ee(t,e,...n){if(!t)throw nl(e,...n)}function cn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ys(e),new Error(e)}function wn(t,e){t||cn(e)}/**
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
 */function Sa(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function cy(){return Bc()==="http:"||Bc()==="https:"}function Bc(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function uy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cy()||Bg()||"connection"in navigator)?navigator.onLine:!0}function dy(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class zi{constructor(e,n){this.shortDelay=e,this.longDelay=n,wn(n>e,"Short delay should be less than long delay!"),this.isMobile=Ug()||jg()}get(){return uy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function rl(t,e){wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class wf{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;cn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;cn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;cn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const fy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const hy=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],py=new zi(3e4,6e4);function Sn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Qt(t,e,n,r,i={}){return If(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Wi({...o,key:t.config.apiKey}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...s};return $g()||(c.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&qi(t.emulatorConfig.host)&&(c.credentials="include"),wf.fetch()(await Ef(t,t.config.apiHost,n,a),c)})}async function If(t,e,n){t._canInitEmulator=!1;const r={...fy,...e};try{const i=new gy(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ls(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ls(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ls(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ls(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Eo(t,u,c);It(t,u)}}catch(i){if(i instanceof An)throw i;It(t,"network-request-failed",{message:String(i)})}}async function Gi(t,e,n,r,i={}){const s=await Qt(t,e,n,r,i);return"mfaPendingCredential"in s&&It(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Ef(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?rl(t.config,i):`${t.config.apiScheme}://${i}`;return hy.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function my(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gy{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rt(this.auth,"network-request-failed")),py.get())})}}function ls(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Rt(t,e,r);return i.customData._tokenResponse=n,i}function jc(t){return t!==void 0&&t.enterprise!==void 0}class vy{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return my(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function yy(t,e){return Qt(t,"GET","/v2/recaptchaConfig",Sn(t,e))}/**
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
 */async function by(t,e){return Qt(t,"POST","/v1/accounts:delete",e)}async function Us(t,e){return Qt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function mi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _y(t,e=!1){const n=Ne(t),r=await n.getIdToken(e),i=il(r);ee(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:mi(ea(i.auth_time)),issuedAtTime:mi(ea(i.iat)),expirationTime:mi(ea(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ea(t){return Number(t)*1e3}function il(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ys("JWT malformed, contained fewer than 3 sections"),null;try{const i=af(n);return i?JSON.parse(i):(ys("Failed to decode base64 JWT payload"),null)}catch(i){return ys("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Hc(t){const e=il(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Vr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw Tf(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Tf(t){return t instanceof An?t.code==="auth/user-disabled"||t.code==="auth/user-token-expired":!1}/**
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
 */class wy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ka{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=mi(this.lastLoginAt),this.creationTime=mi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $s(t){var h;const e=t.auth,n=await t.getIdToken(),r=await Vr(t,Us(e,{idToken:n}));ee(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(h=i.providerUserInfo)!=null&&h.length?Af(i.providerUserInfo):[],o=Ey(t.providerData,s),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),c=a?l:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new ka(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(t,u)}async function Iy(t){const e=Ne(t);await $s(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ey(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Af(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Ty(t,e){const n=await If(t,{},async()=>{const r=Wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Ef(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return t.emulatorConfig&&qi(t.emulatorConfig.host)&&(l.credentials="include"),wf.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Ay(t,e){return Qt(t,"POST","/v2/accounts:revokeToken",Sn(t,e))}/**
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
 */class Pr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=Hc(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Ty(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Pr;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ee(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ee(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pr,this.toJSON())}_performRefresh(){return cn("not implemented")}}/**
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
 */function xn(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class St{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new wy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ka(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Vr(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _y(this,e)}reload(){return Iy(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new St({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $s(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(at(this.auth.app))return Promise.reject(mn(this.auth));const e=await this.getIdToken();return await Vr(this,by(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:h,emailVerified:p,isAnonymous:E,providerData:A,stsTokenManager:T}=n;ee(h&&T,e,"internal-error");const C=Pr.fromJSON(this.name,T);ee(typeof h=="string",e,"internal-error"),xn(r,e.name),xn(i,e.name),ee(typeof p=="boolean",e,"internal-error"),ee(typeof E=="boolean",e,"internal-error"),xn(s,e.name),xn(o,e.name),xn(a,e.name),xn(l,e.name),xn(c,e.name),xn(u,e.name);const S=new St({uid:h,auth:e,email:i,emailVerified:p,displayName:r,isAnonymous:E,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:C,createdAt:c,lastLoginAt:u});return A&&Array.isArray(A)&&(S.providerData=A.map(x=>({...x}))),l&&(S._redirectEventId=l),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new Pr;i.updateFromServerResponse(n);const s=new St({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await $s(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ee(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Af(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Pr;a.updateFromIdToken(r);const l=new St({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ka(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const Wc=new Map;function un(t){wn(t instanceof Function,"Expected a class definition");let e=Wc.get(t);return e?(wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Wc.set(t,e),e)}/**
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
 */class Sf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Sf.type="NONE";const qc=Sf;/**
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
 */function bs(t,e,n){return`firebase:${t}:${e}:${n}`}class lr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=bs(this.userKey,i.apiKey,s),this.fullPersistenceKey=bs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Us(this.auth,{idToken:e}).catch(()=>{});return n?St._fromGetAccountInfoResponse(this.auth,n,e):null}return St._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,n,r="authUser"){if(!n.length)return new lr(un(qc),e,r);const i=(await Promise.all(n.map(async c=>{try{if(await c._isAvailable())return c}catch{return}}))).filter(c=>c);let s=i[0]||un(qc);const o=bs(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){let h;if(typeof u=="string"){const p=await Us(e,{idToken:u}).catch(()=>{});if(!p)break;h=await St._fromGetAccountInfoResponse(e,p,u)}else h=St._fromJSON(e,u);c!==s&&(a=h),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new lr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new lr(s,e,r))}}/**
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
 */function zc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xf(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Nf(e))return"Blackberry";if(Df(e))return"Webos";if(Pf(e))return"Safari";if((e.includes("chrome/")||Cf(e))&&!e.includes("edge/"))return"Chrome";if(Rf(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function kf(t=nt()){return/firefox\//i.test(t)}function Pf(t=nt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cf(t=nt()){return/crios\//i.test(t)}function xf(t=nt()){return/iemobile/i.test(t)}function Rf(t=nt()){return/android/i.test(t)}function Nf(t=nt()){return/blackberry/i.test(t)}function Df(t=nt()){return/webos/i.test(t)}function sl(t=nt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Sy(t=nt()){var e;return sl(t)&&!!((e=window.navigator)!=null&&e.standalone)}function ky(){return Hg()&&document.documentMode===10}function Vf(t=nt()){return sl(t)||Rf(t)||Df(t)||Nf(t)||/windows phone/i.test(t)||xf(t)}/**
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
 */function Of(t,e=[]){let n;switch(t){case"Browser":n=zc(nt());break;case"Worker":n=`${zc(nt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${jr}/${r}`}/**
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
 */class Py{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Cy(t,e={}){return Qt(t,"GET","/v2/passwordPolicy",Sn(t,e))}/**
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
 */const xy=6;class Ry{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??xy,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Ny{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gc(this),this.idTokenSubscription=new Gc(this),this.beforeStateQueue=new Py(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_f,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=un(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted){try{this.persistenceManager=await lr.create(this,e)}catch(o){vs(`Failed to initialize persistence: ${o}`),this.persistenceManager=await lr.create(this,[])}finally{(r=this._resolvePersistenceManagerAvailable)==null||r.call(this)}if(!this._deleted){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(n)}catch(o){vs(`Failed to initialize current user: ${o}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Us(this,{idToken:e}),r=await St._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(at(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $s(e)}catch(n){if(Tf(n))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(at(this.app))return Promise.reject(mn(this));const n=e?Ne(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return at(this.app)?Promise.reject(mn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return at(this.app)?Promise.reject(mn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Cy(this),n=new Ry(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Hi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ay(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&un(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await lr.create(this,[un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}).catch(l=>{if(!o)if(typeof n!="function"&&n.error)n.error(l);else if(r)r(l);else throw l}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(n){const r=(n==null?void 0:n.message)||String(n),i=Eo(this,"internal-error",`An internal AuthError has occurred: ${r}`);throw i.customData={originalError:n},i}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Of(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(at(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&vs(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function kn(t){return Ne(t)}class Gc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jg(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let To={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Dy(t){To=t}function Lf(t){return To.loadJS(t)}function Vy(){return To.recaptchaEnterpriseScript}function Oy(){return To.gapiScript}function Ly(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class My{constructor(){this.enterprise=new Fy}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Fy{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}/**
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
 */const Uy="recaptcha-enterprise",Mf="NO_RECAPTCHA",Kc="onFirebaseAuthREInstanceReady";class Vn{constructor(e){this.type=Uy,this.auth=kn(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{yy(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new vy(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;jc(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Mf)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new My().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(async a=>{if(!n&&jc(window.grecaptcha)&&Vn.scriptInjectionDeferred)await Vn.scriptInjectionDeferred.promise,i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Vy();l.length!==0&&(l+=a+`&onload=${Kc}`),Vn.scriptInjectionDeferred=new df,window[Kc]=()=>{var c;(c=Vn.scriptInjectionDeferred)==null||c.resolve()},Lf(l).then(()=>{var c;return(c=Vn.scriptInjectionDeferred)==null?void 0:c.promise}).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}Vn.scriptInjectionDeferred=null;async function Jc(t,e,n,r=!1,i=!1){const s=new Vn(t);let o;if(i)o=Mf;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Bs(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Jc(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Jc(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function $y(t,e){const n=tl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(cr(s,e??{}))return i;It(i,"already-initialized")}return n.initialize({options:e})}function By(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function jy(t,e,n){const r=kn(t);ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Ff(e),{host:o,port:a}=Hy(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){ee(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ee(cr(c,r.config.emulator)&&cr(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,qi(o)?ff(`${s}//${o}${l}`):Wy()}function Ff(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Hy(t){const e=Ff(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Yc(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Yc(o)}}}function Yc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Wy(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class ol{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return cn("not implemented")}_getIdTokenResponse(e){return cn("not implemented")}_linkToIdToken(e,n){return cn("not implemented")}_getReauthenticationResolver(e){return cn("not implemented")}}async function qy(t,e){return Qt(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function zy(t,e){return Gi(t,"POST","/v1/accounts:signInWithPassword",Sn(t,e))}async function Gy(t,e){return Qt(t,"POST","/v1/accounts:sendOobCode",Sn(t,e))}async function Ky(t,e){return Gy(t,e)}/**
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
 */async function Jy(t,e){return Gi(t,"POST","/v1/accounts:signInWithEmailLink",Sn(t,e))}async function Yy(t,e){return Gi(t,"POST","/v1/accounts:signInWithEmailLink",Sn(t,e))}/**
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
 */class Ci extends ol{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ci(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ci(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bs(e,n,"signInWithPassword",zy);case"emailLink":return Jy(e,{email:this._email,oobCode:this._password});default:It(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Bs(e,r,"signUpPassword",qy);case"emailLink":return Yy(e,{idToken:n,email:this._email,oobCode:this._password});default:It(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Cr(t,e){return Gi(t,"POST","/v1/accounts:signInWithIdp",Sn(t,e))}/**
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
 */const Xy="http://localhost";class dr extends ol{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new dr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):It("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new dr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Cr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Cr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Cr(e,n)}buildRequest(){const e={requestUri:Xy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wi(n)}return e}}/**
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
 */function Zy(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Qy(t){const e=ri(ii(t)).link,n=e?ri(ii(e)).deep_link_id:null,r=ri(ii(t)).deep_link_id;return(r?ri(ii(r)).link:null)||r||n||e||t}class al{constructor(e){const n=ri(ii(e)),r=n.apiKey??null,i=n.oobCode??null,s=Zy(n.mode??null);ee(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Qy(e);try{return new al(n)}catch{return null}}}/**
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
 */class Hr{constructor(){this.providerId=Hr.PROVIDER_ID}static credential(e,n){return Ci._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=al.parseLink(n);return ee(r,"argument-error"),Ci._fromEmailAndCode(e,r.code,r.tenantId)}}Hr.PROVIDER_ID="password";Hr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ll{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ki extends ll{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class On extends Ki{constructor(){super("facebook.com")}static credential(e){return dr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.FACEBOOK_SIGN_IN_METHOD="facebook.com";On.PROVIDER_ID="facebook.com";/**
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
 */class an extends Ki{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return dr._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return an.credential(n,r)}catch{return null}}}an.GOOGLE_SIGN_IN_METHOD="google.com";an.PROVIDER_ID="google.com";/**
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
 */class Ln extends Ki{constructor(){super("github.com")}static credential(e){return dr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.GITHUB_SIGN_IN_METHOD="github.com";Ln.PROVIDER_ID="github.com";/**
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
 */class Mn extends Ki{constructor(){super("twitter.com")}static credential(e,n){return dr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
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
 */async function e0(t,e){return Gi(t,"POST","/v1/accounts:signUp",Sn(t,e))}/**
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
 */class fr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await St._fromIdTokenResponse(e,r,i),o=Xc(r);return new fr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Xc(r);return new fr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Xc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class js extends An{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,js.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new js(e,n,r,i)}}function Uf(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?js._fromErrorAndOperation(t,s,e,r):s})}async function t0(t,e,n=!1){const r=await Vr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fr._forOperation(t,"link",r)}/**
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
 */async function n0(t,e,n=!1){const{auth:r}=t;if(at(r.app))return Promise.reject(mn(r));const i="reauthenticate";try{const s=await Vr(t,Uf(r,i,e,t),n);ee(s.idToken,r,"internal-error");const o=il(s.idToken);ee(o,r,"internal-error");const{sub:a}=o;return ee(t.uid===a,r,"user-mismatch"),fr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&It(r,"user-mismatch"),s}}/**
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
 */async function $f(t,e,n=!1){if(at(t.app))return Promise.reject(mn(t));const r="signIn",i=await Uf(t,r,e),s=await fr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function r0(t,e){return $f(kn(t),e)}/**
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
 */async function Bf(t){const e=kn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function i0(t,e,n){const r=kn(t);await Bs(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Ky)}async function s0(t,e,n){if(at(t.app))return Promise.reject(mn(t));const r=kn(t),o=await Bs(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",e0).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Bf(t),l}),a=await fr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function o0(t,e,n){return at(t.app)?Promise.reject(mn(t)):r0(Ne(t),Hr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Bf(t),r})}/**
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
 */async function a0(t,e){return Qt(t,"POST","/v1/accounts:update",e)}/**
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
 */async function l0(t,e){const{displayName:n,photoURL:r}=e;if(n===void 0&&r===void 0)return;const i=Ne(t),o={idToken:await i.getIdToken(),displayName:n,photoUrl:r,returnSecureToken:!0},a=await Vr(i,a0(i.auth,o));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const l=i.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=i.displayName,l.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function c0(t,e,n,r){return Ne(t).onIdTokenChanged(e,n,r)}function u0(t,e,n){return Ne(t).beforeAuthStateChanged(e,n)}function d0(t,e,n,r){return Ne(t).onAuthStateChanged(e,n,r)}function f0(t){return Ne(t).signOut()}const Hs="__sak";/**
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
 */class jf{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hs,"1"),this.storage.removeItem(Hs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const h0=1e3,p0=10;class Hf extends jf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ky()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,p0):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},h0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hf.type="LOCAL";const m0=Hf;/**
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
 */class Wf extends jf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wf.type="SESSION";const qf=Wf;/**
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
 */function g0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ao{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ao(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await g0(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ao.receivers=[];/**
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
 */function cl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class v0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=cl("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Jt(){return window}function y0(t){Jt().location.href=t}/**
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
 */function zf(){return typeof Jt().WorkerGlobalScope<"u"&&typeof Jt().importScripts=="function"}async function b0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function w0(){return zf()?self:null}/**
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
 */const Gf="firebaseLocalStorageDb",I0=1,Ws="firebaseLocalStorage",Kf="fbase_key";class Ji{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function So(t,e){return t.transaction([Ws],e?"readwrite":"readonly").objectStore(Ws)}function E0(){const t=indexedDB.deleteDatabase(Gf);return new Ji(t).toPromise()}function Jf(){const t=indexedDB.open(Gf,I0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ws,{keyPath:Kf})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ws)?e(r):(r.close(),await E0(),e(await Jf()))})})}async function Zc(t,e,n){const r=So(t,!0).put({[Kf]:e,value:n});return new Ji(r).toPromise()}async function T0(t,e){const n=So(t,!1).get(e),r=await new Ji(n).toPromise();return r===void 0?null:r.value}function Qc(t,e){const n=So(t,!0).delete(e);return new Ji(n).toPromise()}const A0=800,S0=3;class Yf{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=Jf(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>S0)throw r;if(this.dbPromise){const i=this.dbPromise;this.dbPromise=null;try{(await i).close()}catch{}}}}async initializeServiceWorkerMessaging(){return zf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ao._getInstance(w0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await b0(),!this.activeServiceWorker)return;this.sender=new v0(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Zc(e,Hs,"1"),await Qc(e,Hs)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Zc(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>T0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(i=>{const s=So(i,!1).getAll();return new Ji(s).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}catch(e){return this.isClosing||vs(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),A0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}Yf.type="LOCAL";const k0=Yf;new zi(3e4,6e4);/**
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
 */function Xf(t,e){return e?un(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ul extends ol{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Cr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Cr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Cr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function P0(t){return $f(t.auth,new ul(t),t.bypassAuthState)}function C0(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),n0(n,new ul(t),t.bypassAuthState)}async function x0(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),t0(n,new ul(t),t.bypassAuthState)}/**
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
 */class Zf{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return P0;case"linkViaPopup":case"linkViaRedirect":return x0;case"reauthViaPopup":case"reauthViaRedirect":return C0;default:It(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const R0=new zi(2e3,1e4);async function N0(t,e,n){if(at(t.app))return Promise.reject(Rt(t,"operation-not-supported-in-this-environment"));const r=kn(t);ly(t,e,ll);const i=Xf(r,n);return new rr(r,"signInViaPopup",e,i).executeNotNull()}class rr extends Zf{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,rr.currentPopupAction&&rr.currentPopupAction.cancel(),rr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=cl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,R0.get())};e()}}rr.currentPopupAction=null;/**
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
 */const D0="pendingRedirect",_s=new Map;class V0 extends Zf{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_s.get(this.auth._key());if(!e){try{const r=await O0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_s.set(this.auth._key(),e)}return this.bypassAuthState||_s.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function O0(t,e){const n=F0(e),r=M0(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function L0(t,e){_s.set(t._key(),e)}function M0(t){return un(t._redirectPersistence)}function F0(t){return bs(D0,t.config.apiKey,t.name)}async function U0(t,e,n=!1){if(at(t.app))return Promise.reject(mn(t));const r=kn(t),i=Xf(r,e),o=await new V0(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const $0=600*1e3;class B0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!j0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Qf(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$0&&this.cachedEventUids.clear(),this.cachedEventUids.has(eu(e))}saveEventToCache(e){this.cachedEventUids.add(eu(e)),this.lastProcessedEventTime=Date.now()}}function eu(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Qf({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function j0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qf(t);default:return!1}}/**
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
 */async function H0(t,e={}){return Qt(t,"GET","/v1/projects",e)}/**
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
 */const W0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,q0=/^https?/;async function z0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await H0(t);for(const n of e)try{if(G0(n))return}catch{}It(t,"unauthorized-domain")}function G0(t){const e=Sa(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!q0.test(n))return!1;if(W0.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const K0=new zi(3e4,6e4);function tu(){const t=Jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function J0(t){return new Promise((e,n)=>{var i,s,o;function r(){tu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tu(),n(Rt(t,"network-request-failed"))},timeout:K0.get()})}if((s=(i=Jt().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=Jt().gapi)!=null&&o.load)r();else{const a=Ly("iframefcb");return Jt()[a]=()=>{gapi.load?r():n(Rt(t,"network-request-failed"))},Lf(`${Oy()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ws=null,e})}let ws=null;function Y0(t){return ws=ws||J0(t),ws}/**
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
 */const X0=new zi(5e3,15e3),Z0="__/auth/iframe",Q0="emulator/auth/iframe",eb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nb(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?rl(e,Q0):`https://${t.config.authDomain}/${Z0}`,r={apiKey:e.apiKey,appName:t.name,v:jr},i=tb.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Wi(r).slice(1)}`}async function rb(t){const e=await Y0(t),n=Jt().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:nb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Rt(t,"network-request-failed"),a=Jt().setTimeout(()=>{s(o)},X0.get());function l(){Jt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const ib={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sb=500,ob=600,ab="_blank",lb="http://localhost";class nu{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cb(t,e,n,r=sb,i=ob){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...ib,width:r.toString(),height:i.toString(),top:s,left:o},c=nt().toLowerCase();n&&(a=Cf(c)?ab:n),kf(c)&&(e=e||lb,l.scrollbars="yes");const u=Object.entries(l).reduce((p,[E,A])=>`${p}${E}=${A},`,"");if(Sy(c)&&a!=="_self")return ub(e||"",a),new nu(null);const h=window.open(e||"",a,u);ee(h,t,"popup-blocked");try{h.focus()}catch{}return new nu(h)}function ub(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const db="__/auth/handler",fb="emulator/auth/handler",hb=encodeURIComponent("fac");async function ru(t,e,n,r,i,s){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:jr,eventId:i};if(e instanceof ll){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Kg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))o[u]=h}if(e instanceof Ki){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${hb}=${encodeURIComponent(l)}`:"";return`${pb(t)}?${Wi(a).slice(1)}${c}`}function pb({config:t}){return t.emulator?rl(t,fb):`https://${t.authDomain}/${db}`}/**
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
 */const ta="webStorageSupport";class mb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qf,this._completeRedirectFn=U0,this._overrideRedirectResult=L0}async _openPopup(e,n,r,i){var o;wn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await ru(e,n,r,Sa(),i);return cb(e,s,cl())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ru(e,n,r,Sa(),i);return y0(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(wn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await rb(e),r=new B0(e);return n.register("authEvent",i=>(ee(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ta,{type:ta},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[ta];s!==void 0&&n(!!s),It(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=z0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vf()||Pf()||sl()}}const gb=mb;var iu="@firebase/auth",su="1.13.8";/**
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
 */class vb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function yb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function bb(t){Dr(new ur("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Of(t)},c=new Ny(r,i,s,l);return By(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Dr(new ur("auth-internal",e=>{const n=kn(e.getProvider("auth").getImmediate());return(r=>new vb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),$n(iu,su,yb(t)),$n(iu,su,"esm2020")}/**
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
 */const _b=300,wb=uf("authIdTokenMaxAge")||_b;let ou=null;const Ib=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>wb)return;const i=n==null?void 0:n.token;ou!==i&&(ou=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Hn(t=gf()){const e=tl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$y(t,{popupRedirectResolver:gb,persistence:[k0,m0,qf]}),r=uf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Ib(s.toString());u0(n,o,()=>o(n.currentUser)),c0(n,a=>o(a))}}const i=lf("auth");return i&&jy(n,`http://${i}`),n}function Eb(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Dy({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Rt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Eb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});bb("Browser");var Tb="firebase",Ab="13.1.0";/**
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
 */$n(Tb,Ab,"app");var au=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var eh;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(f,m){function d(){}d.prototype=m.prototype,f.F=m.prototype,f.prototype=new d,f.prototype.constructor=f,f.D=function(b,y,_){for(var v=Array(arguments.length-2),se=2;se<arguments.length;se++)v[se-2]=arguments[se];return m.prototype[y].apply(b,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(f,m,d){d||(d=0);const b=Array(16);if(typeof m=="string")for(var y=0;y<16;++y)b[y]=m.charCodeAt(d++)|m.charCodeAt(d++)<<8|m.charCodeAt(d++)<<16|m.charCodeAt(d++)<<24;else for(y=0;y<16;++y)b[y]=m[d++]|m[d++]<<8|m[d++]<<16|m[d++]<<24;m=f.g[0],d=f.g[1],y=f.g[2];let _=f.g[3],v;v=m+(_^d&(y^_))+b[0]+3614090360&4294967295,m=d+(v<<7&4294967295|v>>>25),v=_+(y^m&(d^y))+b[1]+3905402710&4294967295,_=m+(v<<12&4294967295|v>>>20),v=y+(d^_&(m^d))+b[2]+606105819&4294967295,y=_+(v<<17&4294967295|v>>>15),v=d+(m^y&(_^m))+b[3]+3250441966&4294967295,d=y+(v<<22&4294967295|v>>>10),v=m+(_^d&(y^_))+b[4]+4118548399&4294967295,m=d+(v<<7&4294967295|v>>>25),v=_+(y^m&(d^y))+b[5]+1200080426&4294967295,_=m+(v<<12&4294967295|v>>>20),v=y+(d^_&(m^d))+b[6]+2821735955&4294967295,y=_+(v<<17&4294967295|v>>>15),v=d+(m^y&(_^m))+b[7]+4249261313&4294967295,d=y+(v<<22&4294967295|v>>>10),v=m+(_^d&(y^_))+b[8]+1770035416&4294967295,m=d+(v<<7&4294967295|v>>>25),v=_+(y^m&(d^y))+b[9]+2336552879&4294967295,_=m+(v<<12&4294967295|v>>>20),v=y+(d^_&(m^d))+b[10]+4294925233&4294967295,y=_+(v<<17&4294967295|v>>>15),v=d+(m^y&(_^m))+b[11]+2304563134&4294967295,d=y+(v<<22&4294967295|v>>>10),v=m+(_^d&(y^_))+b[12]+1804603682&4294967295,m=d+(v<<7&4294967295|v>>>25),v=_+(y^m&(d^y))+b[13]+4254626195&4294967295,_=m+(v<<12&4294967295|v>>>20),v=y+(d^_&(m^d))+b[14]+2792965006&4294967295,y=_+(v<<17&4294967295|v>>>15),v=d+(m^y&(_^m))+b[15]+1236535329&4294967295,d=y+(v<<22&4294967295|v>>>10),v=m+(y^_&(d^y))+b[1]+4129170786&4294967295,m=d+(v<<5&4294967295|v>>>27),v=_+(d^y&(m^d))+b[6]+3225465664&4294967295,_=m+(v<<9&4294967295|v>>>23),v=y+(m^d&(_^m))+b[11]+643717713&4294967295,y=_+(v<<14&4294967295|v>>>18),v=d+(_^m&(y^_))+b[0]+3921069994&4294967295,d=y+(v<<20&4294967295|v>>>12),v=m+(y^_&(d^y))+b[5]+3593408605&4294967295,m=d+(v<<5&4294967295|v>>>27),v=_+(d^y&(m^d))+b[10]+38016083&4294967295,_=m+(v<<9&4294967295|v>>>23),v=y+(m^d&(_^m))+b[15]+3634488961&4294967295,y=_+(v<<14&4294967295|v>>>18),v=d+(_^m&(y^_))+b[4]+3889429448&4294967295,d=y+(v<<20&4294967295|v>>>12),v=m+(y^_&(d^y))+b[9]+568446438&4294967295,m=d+(v<<5&4294967295|v>>>27),v=_+(d^y&(m^d))+b[14]+3275163606&4294967295,_=m+(v<<9&4294967295|v>>>23),v=y+(m^d&(_^m))+b[3]+4107603335&4294967295,y=_+(v<<14&4294967295|v>>>18),v=d+(_^m&(y^_))+b[8]+1163531501&4294967295,d=y+(v<<20&4294967295|v>>>12),v=m+(y^_&(d^y))+b[13]+2850285829&4294967295,m=d+(v<<5&4294967295|v>>>27),v=_+(d^y&(m^d))+b[2]+4243563512&4294967295,_=m+(v<<9&4294967295|v>>>23),v=y+(m^d&(_^m))+b[7]+1735328473&4294967295,y=_+(v<<14&4294967295|v>>>18),v=d+(_^m&(y^_))+b[12]+2368359562&4294967295,d=y+(v<<20&4294967295|v>>>12),v=m+(d^y^_)+b[5]+4294588738&4294967295,m=d+(v<<4&4294967295|v>>>28),v=_+(m^d^y)+b[8]+2272392833&4294967295,_=m+(v<<11&4294967295|v>>>21),v=y+(_^m^d)+b[11]+1839030562&4294967295,y=_+(v<<16&4294967295|v>>>16),v=d+(y^_^m)+b[14]+4259657740&4294967295,d=y+(v<<23&4294967295|v>>>9),v=m+(d^y^_)+b[1]+2763975236&4294967295,m=d+(v<<4&4294967295|v>>>28),v=_+(m^d^y)+b[4]+1272893353&4294967295,_=m+(v<<11&4294967295|v>>>21),v=y+(_^m^d)+b[7]+4139469664&4294967295,y=_+(v<<16&4294967295|v>>>16),v=d+(y^_^m)+b[10]+3200236656&4294967295,d=y+(v<<23&4294967295|v>>>9),v=m+(d^y^_)+b[13]+681279174&4294967295,m=d+(v<<4&4294967295|v>>>28),v=_+(m^d^y)+b[0]+3936430074&4294967295,_=m+(v<<11&4294967295|v>>>21),v=y+(_^m^d)+b[3]+3572445317&4294967295,y=_+(v<<16&4294967295|v>>>16),v=d+(y^_^m)+b[6]+76029189&4294967295,d=y+(v<<23&4294967295|v>>>9),v=m+(d^y^_)+b[9]+3654602809&4294967295,m=d+(v<<4&4294967295|v>>>28),v=_+(m^d^y)+b[12]+3873151461&4294967295,_=m+(v<<11&4294967295|v>>>21),v=y+(_^m^d)+b[15]+530742520&4294967295,y=_+(v<<16&4294967295|v>>>16),v=d+(y^_^m)+b[2]+3299628645&4294967295,d=y+(v<<23&4294967295|v>>>9),v=m+(y^(d|~_))+b[0]+4096336452&4294967295,m=d+(v<<6&4294967295|v>>>26),v=_+(d^(m|~y))+b[7]+1126891415&4294967295,_=m+(v<<10&4294967295|v>>>22),v=y+(m^(_|~d))+b[14]+2878612391&4294967295,y=_+(v<<15&4294967295|v>>>17),v=d+(_^(y|~m))+b[5]+4237533241&4294967295,d=y+(v<<21&4294967295|v>>>11),v=m+(y^(d|~_))+b[12]+1700485571&4294967295,m=d+(v<<6&4294967295|v>>>26),v=_+(d^(m|~y))+b[3]+2399980690&4294967295,_=m+(v<<10&4294967295|v>>>22),v=y+(m^(_|~d))+b[10]+4293915773&4294967295,y=_+(v<<15&4294967295|v>>>17),v=d+(_^(y|~m))+b[1]+2240044497&4294967295,d=y+(v<<21&4294967295|v>>>11),v=m+(y^(d|~_))+b[8]+1873313359&4294967295,m=d+(v<<6&4294967295|v>>>26),v=_+(d^(m|~y))+b[15]+4264355552&4294967295,_=m+(v<<10&4294967295|v>>>22),v=y+(m^(_|~d))+b[6]+2734768916&4294967295,y=_+(v<<15&4294967295|v>>>17),v=d+(_^(y|~m))+b[13]+1309151649&4294967295,d=y+(v<<21&4294967295|v>>>11),v=m+(y^(d|~_))+b[4]+4149444226&4294967295,m=d+(v<<6&4294967295|v>>>26),v=_+(d^(m|~y))+b[11]+3174756917&4294967295,_=m+(v<<10&4294967295|v>>>22),v=y+(m^(_|~d))+b[2]+718787259&4294967295,y=_+(v<<15&4294967295|v>>>17),v=d+(_^(y|~m))+b[9]+3951481745&4294967295,f.g[0]=f.g[0]+m&4294967295,f.g[1]=f.g[1]+(y+(v<<21&4294967295|v>>>11))&4294967295,f.g[2]=f.g[2]+y&4294967295,f.g[3]=f.g[3]+_&4294967295}r.prototype.v=function(f,m){m===void 0&&(m=f.length);const d=m-this.blockSize,b=this.C;let y=this.h,_=0;for(;_<m;){if(y==0)for(;_<=d;)i(this,f,_),_+=this.blockSize;if(typeof f=="string"){for(;_<m;)if(b[y++]=f.charCodeAt(_++),y==this.blockSize){i(this,b),y=0;break}}else for(;_<m;)if(b[y++]=f[_++],y==this.blockSize){i(this,b),y=0;break}}this.h=y,this.o+=m},r.prototype.A=function(){var f=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);f[0]=128;for(var m=1;m<f.length-8;++m)f[m]=0;m=this.o*8;for(var d=f.length-8;d<f.length;++d)f[d]=m&255,m/=256;for(this.v(f),f=Array(16),m=0,d=0;d<4;++d)for(let b=0;b<32;b+=8)f[m++]=this.g[d]>>>b&255;return f};function s(f,m){var d=a;return Object.prototype.hasOwnProperty.call(d,f)?d[f]:d[f]=m(f)}function o(f,m){this.h=m;const d=[];let b=!0;for(let y=f.length-1;y>=0;y--){const _=f[y]|0;b&&_==m||(d[y]=_,b=!1)}this.g=d}var a={};function l(f){return-128<=f&&f<128?s(f,function(m){return new o([m|0],m<0?-1:0)}):new o([f|0],f<0?-1:0)}function c(f){if(isNaN(f)||!isFinite(f))return h;if(f<0)return C(c(-f));const m=[];let d=1;for(let b=0;f>=d;b++)m[b]=f/d|0,d*=4294967296;return new o(m,0)}function u(f,m){if(f.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(f.charAt(0)=="-")return C(u(f.substring(1),m));if(f.indexOf("-")>=0)throw Error('number format error: interior "-" character');const d=c(Math.pow(m,8));let b=h;for(let _=0;_<f.length;_+=8){var y=Math.min(8,f.length-_);const v=parseInt(f.substring(_,_+y),m);y<8?(y=c(Math.pow(m,y)),b=b.j(y).add(c(v))):(b=b.j(d),b=b.add(c(v)))}return b}var h=l(0),p=l(1),E=l(16777216);t=o.prototype,t.m=function(){if(T(this))return-C(this).m();let f=0,m=1;for(let d=0;d<this.g.length;d++){const b=this.i(d);f+=(b>=0?b:4294967296+b)*m,m*=4294967296}return f},t.toString=function(f){if(f=f||10,f<2||36<f)throw Error("radix out of range: "+f);if(A(this))return"0";if(T(this))return"-"+C(this).toString(f);const m=c(Math.pow(f,6));var d=this;let b="";for(;;){const y=M(d,m).g;d=S(d,y.j(m));let _=((d.g.length>0?d.g[0]:d.h)>>>0).toString(f);if(d=y,A(d))return _+b;for(;_.length<6;)_="0"+_;b=_+b}},t.i=function(f){return f<0?0:f<this.g.length?this.g[f]:this.h};function A(f){if(f.h!=0)return!1;for(let m=0;m<f.g.length;m++)if(f.g[m]!=0)return!1;return!0}function T(f){return f.h==-1}t.l=function(f){return f=S(this,f),T(f)?-1:A(f)?0:1};function C(f){const m=f.g.length,d=[];for(let b=0;b<m;b++)d[b]=~f.g[b];return new o(d,~f.h).add(p)}t.abs=function(){return T(this)?C(this):this},t.add=function(f){const m=Math.max(this.g.length,f.g.length),d=[];let b=0;for(let y=0;y<=m;y++){let _=b+(this.i(y)&65535)+(f.i(y)&65535),v=(_>>>16)+(this.i(y)>>>16)+(f.i(y)>>>16);b=v>>>16,_&=65535,v&=65535,d[y]=v<<16|_}return new o(d,d[d.length-1]&-2147483648?-1:0)};function S(f,m){return f.add(C(m))}t.j=function(f){if(A(this)||A(f))return h;if(T(this))return T(f)?C(this).j(C(f)):C(C(this).j(f));if(T(f))return C(this.j(C(f)));if(this.l(E)<0&&f.l(E)<0)return c(this.m()*f.m());const m=this.g.length+f.g.length,d=[];for(var b=0;b<2*m;b++)d[b]=0;for(b=0;b<this.g.length;b++)for(let y=0;y<f.g.length;y++){const _=this.i(b)>>>16,v=this.i(b)&65535,se=f.i(y)>>>16,Oe=f.i(y)&65535;d[2*b+2*y]+=v*Oe,x(d,2*b+2*y),d[2*b+2*y+1]+=_*Oe,x(d,2*b+2*y+1),d[2*b+2*y+1]+=v*se,x(d,2*b+2*y+1),d[2*b+2*y+2]+=_*se,x(d,2*b+2*y+2)}for(f=0;f<m;f++)d[f]=d[2*f+1]<<16|d[2*f];for(f=m;f<2*m;f++)d[f]=0;return new o(d,0)};function x(f,m){for(;(f[m]&65535)!=f[m];)f[m+1]+=f[m]>>>16,f[m]&=65535,m++}function W(f,m){this.g=f,this.h=m}function M(f,m){if(A(m))throw Error("division by zero");if(A(f))return new W(h,h);if(T(f))return m=M(C(f),m),new W(C(m.g),C(m.h));if(T(m))return m=M(f,C(m)),new W(C(m.g),m.h);if(f.g.length>30){if(T(f)||T(m))throw Error("slowDivide_ only works with positive integers.");for(var d=p,b=m;b.l(f)<=0;)d=ne(d),b=ne(b);var y=G(d,1),_=G(b,1);for(b=G(b,2),d=G(d,2);!A(b);){var v=_.add(b);v.l(f)<=0&&(y=y.add(d),_=v),b=G(b,1),d=G(d,1)}return m=S(f,y.j(m)),new W(y,m)}for(y=h;f.l(m)>=0;){for(d=Math.max(1,Math.floor(f.m()/m.m())),b=Math.ceil(Math.log(d)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),_=c(d),v=_.j(m);T(v)||v.l(f)>0;)d-=b,_=c(d),v=_.j(m);A(_)&&(_=p),y=y.add(_),f=S(f,v)}return new W(y,f)}t.B=function(f){return M(this,f).h},t.and=function(f){const m=Math.max(this.g.length,f.g.length),d=[];for(let b=0;b<m;b++)d[b]=this.i(b)&f.i(b);return new o(d,this.h&f.h)},t.or=function(f){const m=Math.max(this.g.length,f.g.length),d=[];for(let b=0;b<m;b++)d[b]=this.i(b)|f.i(b);return new o(d,this.h|f.h)},t.xor=function(f){const m=Math.max(this.g.length,f.g.length),d=[];for(let b=0;b<m;b++)d[b]=this.i(b)^f.i(b);return new o(d,this.h^f.h)};function ne(f){const m=f.g.length+1,d=[];for(let b=0;b<m;b++)d[b]=f.i(b)<<1|f.i(b-1)>>>31;return new o(d,f.h)}function G(f,m){const d=m>>5;m%=32;const b=f.g.length-d,y=[];for(let _=0;_<b;_++)y[_]=m>0?f.i(_+d)>>>m|f.i(_+d+1)<<32-m:f.i(_+d);return new o(y,f.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=u,eh=o}).apply(typeof au<"u"?au:typeof self<"u"?self:typeof window<"u"?window:{});function je(t,e,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(t):r?r.value:e.get(t)}/**
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
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
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
 */let Wr="13.1.0";function Sb(t){Wr=t}/**
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
 */const Or=new Qa("@firebase/firestore");function qs(t,...e){if(Or.logLevel<=fe.DEBUG){const n=e.map(fl);Or.debug(`Firestore (${Wr}): ${t}`,...n)}}function dl(t,...e){if(Or.logLevel<=fe.ERROR){const n=e.map(fl);Or.error(`Firestore (${Wr}): ${t}`,...n)}}function th(t,...e){if(Or.logLevel<=fe.WARN){const n=e.map(fl);Or.warn(`Firestore (${Wr}): ${t}`,...n)}}function fl(t){if(typeof t=="string")return t;try{return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
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
 */function ke(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,nh(t,r,n)}function nh(t,e,n){let r=`FIRESTORE (${Wr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw dl(r),new Error(r)}function dt(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||nh(e,i,r)}function Yi(t,e){return t}/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable"};class q extends An{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class rh{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(it.UNAUTHENTICATED)))}shutdown(){}}class Pb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class Cb{constructor(e){this.auth=null,e.onInit((n=>{this.auth=n}))}getToken(){return this.auth?this.auth.getToken().then((e=>e?(dt(typeof e.accessToken=="string",42297,{Z:e}),new rh(e.accessToken,new it(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class xb{constructor(e,n,r){this.ee=e,this.te=n,this.re=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.ne=new Map}ie(){return this.re?this.re():null}get headers(){this.ne.set("X-Goog-AuthUser",this.ee);const e=this.ie();return e&&this.ne.set("Authorization",e),this.te&&this.ne.set("X-Goog-Iam-Authorization-Token",this.te),this.ne}}class Rb{constructor(e,n,r){this.ee=e,this.te=n,this.re=r}getToken(){return Promise.resolve(new xb(this.ee,this.te,this.re))}start(e,n){e.enqueueRetryable((()=>n(it.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class lu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Nb{constructor(e,n){this.se=n,this.appCheck=null,this.oe=null,at(e)&&e.settings.appCheckToken&&(this.oe=e.settings.appCheckToken),n.onInit((r=>{this.appCheck=r}))}getToken(){return this.oe?Promise.resolve(new lu(this.oe)):this.appCheck?this.appCheck.getToken().then((e=>e?(dt(typeof e.token=="string",3470,{tokenResult:e}),new lu(e.token)):null)):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */class Db{constructor(e,n,r,i,s,o,a,l,c,u,h,p,E){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c,this.isUsingEmulator=u,this.apiKey=h,this._customHeaders=p,this.grpcFlowControlWindow=E}}const Pa="(default)";class xi{constructor(e,n){this.projectId=e,this.database=n||Pa}static empty(){return new xi("","")}get isDefaultDatabase(){return this.database===Pa}isEqual(e){return e instanceof xi&&e.projectId===this.projectId&&e.database===this.database}}function Vb(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new q(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xi(t.options.projectId,e)}/**
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
 */function Ob(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Lb{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Ob(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function Ae(t,e){return t<e?-1:t>e?1:0}function Ri(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return na(i)===na(s)?Ae(i,s):na(i)?1:-1}return Ae(t.length,e.length)}const Mb=55296,Fb=57343;function na(t){const e=t.charCodeAt(0);return e>=Mb&&e<=Fb}function ih(t,e,n){return t.length===e.length&&t.every(((r,i)=>n(r,e[i])))}/**
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
 */const cu="__name__";class jt{constructor(e,n,r){n===void 0?n=0:n>e.length&&ke(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ke(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return jt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof jt?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=jt.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return Ae(e.length,n.length)}static compareSegments(e,n){const r=jt.isNumericId(e),i=jt.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?jt.extractNumericId(e).compare(jt.extractNumericId(n)):Ri(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return eh.fromString(e.substring(4,e.length-2))}}class Ce extends jt{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((i=>i.length>0)))}return new Ce(n)}static emptyPath(){return new Ce([])}}const Ub=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let Bn=class wr extends jt{construct(e,n,r){return new wr(e,n,r)}static isValidIdentifier(e){return Ub.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wr.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===cu}static keyField(){return new wr([cu])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new q(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new q(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new wr(n)}static emptyPath(){return new wr([])}};/**
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
 */class Ue{constructor(e){this.path=e}static fromPath(e){return new Ue(Ce.fromString(e))}static fromName(e){return new Ue(Ce.fromString(e).popFirst(5))}static empty(){return new Ue(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ue(new Ce(e.slice()))}}/**
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
 */function sh(t,e,n){if(!n)throw new q(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uu(t){if(!Ue.isDocumentKey(t))throw new q(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function du(t){if(Ue.isDocumentKey(t))throw new q(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function oh(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ko(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ke(12329,{type:typeof t})}function yr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new q(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ko(t);throw new q(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function ah(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */let cs=null;function $b(){return cs===null?cs=(function(){return 268435456+Math.round(2147483648*Math.random())})():cs++,"0x"+cs.toString(16)}/**
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
 */function Bb(t){return t==null}function zs(t){return t===0&&1/t==-1/0}/**
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
 */const ra="RestConnection",jb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Hb{get ae(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.ue=n+"://"+e.host,this._e=`projects/${r}/databases/${i}`,this.ce=this.databaseId.database===Pa?`project_id=${r}`:`project_id=${r}&database_id=${i}`}le(e,n,r,i,s){const o=$b(),a=this.fe(e,n.toUriEncodedString());qs(ra,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this._e,"x-goog-request-params":this.ce};this.he(l,i,s);const{host:c}=new URL(a),u=qi(c);return this.de(e,a,l,r,u).then((h=>(qs(ra,`Received RPC '${e}' ${o}: `,h),h)),(h=>{throw th(ra,`RPC '${e}' ${o} failed with error: `,h,"url: ",a,"request:",r),h}))}me(e,n,r,i,s,o){return this.le(e,n,r,i,s)}he(e,n,r){if(e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Wr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((i,s)=>e[s]=i)),r&&r.headers.forEach(((i,s)=>e[s]=i)),this.databaseInfo._customHeaders)for(const i of Object.keys(this.databaseInfo._customHeaders))e[i]=this.databaseInfo._customHeaders[i]}fe(e,n){const r=jb[e];let i=`${this.ue}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */var fu,ae,Le,Er,Ca,Is,Es,si;function hu(t){if(t===void 0)return dl("RPC_ERROR","HTTP error has no status"),U.UNKNOWN;switch(t){case 200:return U.OK;case 400:return U.FAILED_PRECONDITION;case 401:return U.UNAUTHENTICATED;case 403:return U.PERMISSION_DENIED;case 404:return U.NOT_FOUND;case 409:return U.ABORTED;case 416:return U.OUT_OF_RANGE;case 429:return U.RESOURCE_EXHAUSTED;case 499:return U.CANCELLED;case 500:return U.UNKNOWN;case 501:return U.UNIMPLEMENTED;case 503:return U.UNAVAILABLE;case 504:return U.DEADLINE_EXCEEDED;default:return t>=200&&t<300?U.OK:t>=400&&t<500?U.FAILED_PRECONDITION:t>=500&&t<600?U.INTERNAL:U.UNKNOWN}}/**
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
 */(ae=fu||(fu={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";class Wb extends Hb{Ee(e,n){throw new Error("Not supported by FetchConnection")}async de(e,n,r,i,s){var l;const o=JSON.stringify(i);let a;try{const c={method:"POST",headers:r,body:o};s&&(c.credentials="include"),a=await fetch(n,c)}catch(c){const u=c,h=u==null?void 0:u.message,p=u!=null&&u.cause?String(u.cause):void 0,E=(h&&p?`${h} (${p})`:h??p)??(u==null?void 0:u.statusText)??String(c);throw new q(hu(u==null?void 0:u.status),`Request failed with error: ${E}`)}if(!a.ok){let c=await a.json();Array.isArray(c)&&(c=c[0]);const u=(l=c==null?void 0:c.error)==null?void 0:l.message;throw new q(hu(a.status),`Request failed with error: ${u??a.statusText}`)}return a.json()}}/**
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
 */class qb extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new qb("Invalid base64 string: "+s):s}})(e);return new Et(n)}static fromUint8Array(e){const n=(function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s})(e);return new Et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}function Ni(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}Et.EMPTY_BYTE_STRING=new Et("");/**
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
 */class J{constructor(){this.exponent=0,this.Ve=0n,this.Te=0n,this.Ie=new Array(4).fill(0n),this.Ae=new Array(6).fill(0n),this.Re=new Array(6).fill(0n),this.Pe=new Array(6).fill(0n),this.pe=new Array(12).fill(0n)}static ye(e,n){let r=new J;return r.parse(e,n),r}parse(e,n){n+=e.length-1,this.exponent=0,this.Ve=0n,this.Te=0n;let r=this.Pe,i=this.be(e,r);if(i==0&&this.isEmpty(r)||(n+=i)<J.we)return;if(n>J.ge)return void(this.exponent=Number(J.Fe));let s=this.ve(n,r);this.xe(n,s,r)}be(e,n){for(let s=0;s<6;s++)n[s]=0n;let r=0;for(;r<e.length&&e[r]==0;)r+=1;if(r==e.length)return 0;let i=-r;if(e.length-r>J.De){let s=e[J.De]>=5,o=new Array(J.De).fill(0);for(let a=0;a<J.De;a++)o[a]=e[a+r];s&&(i+=this.Ne(o)),e=o,r=0}for(let s=e.length-1;s>=r;s--)n[0]|=BigInt(e[s])<<32n,this.Se(n);return i}Se(e){let n=e.length;for(let r=0;r<n;r++){let i=e[r]%10n;e[r]=e[r]/10n,r+1<n&&(e[r+1]+=i<<32n)}}isEmpty(e){for(let n=0;n<e.length;n++)if(e[n]!=0n)return!1;return!0}Ne(e){for(let n=e.length-1;n>=0;n--){if(e[n]!=9)return e[n]=e[n]+1,0;e[n]=0}return e[0]=1,1}ve(e,n){let r=n[0]<<31n|n[1]>>1n,i=Number(r)/J.Ce;return Math.floor(Number(e)*J.Be+this.log2(i))}log2(e){return J.Qe*Math.log(e)}xe(e,n,r){let i=this.Ie;this.Oe(-n,i);let s=this.pe;this.Me(r,i,s),this.qe(s),BigInt(i[0])!=BigInt(-e)&&this.qe(s),n+=this.Le(s),(n+=J.Ue)<=0||(n+=this.$e(s),BigInt(n)>=J.Fe?this.exponent=Number(J.Fe):(this.exponent=Number(n),this.Ve=(s[0]<<32n)+s[1]&0xffffffffffffffffn,this.Te=(s[2]<<32n)+s[3]&0xffffffffffffffffn))}Oe(e,n){if(e==0)return void this.ke(J.je[0],n);let r=J.je;e<0&&(e=-e,r=J.Ke);let i=J.ze,s=32,o=!0;for(;e>0;)e>=i&&(o?(this.ke(r[s],n),o=!1):this.We(n,r[s],n),e-=i),s-=1,i*=.5}ke(e,n){for(let r=0;r<n.length;r++)n[r]=e[r]}We(e,n,r){this.Ge(e,n,this.pe);let i=this.Je(this.pe);this.He(this.pe,r),r[0]=e[0]+n[0]+BigInt(i)}Ge(e,n,r){for(let i=0;i<r.length;i++)r[i]=0n;this.Ye(e,this.Ae),this.Ye(n,this.Re);for(let i=5;i>=0;i--)for(let s=5;s>=0;s--){let o=this.Ae[i]*this.Re[s];r[s+i+1]=r[s+i+1]+(o&J.Xe)&0xffffffffffffffffn,r[s+i]=r[s+i]+(o>>32n)&0xffffffffffffffffn}for(let i=11;i>=1;i--)r[i-1]=r[i-1]+(r[i]>>32n)&0xffffffffffffffffn,r[i]&=J.Xe}Je(e){let n=0;for(;this.Ze(e);)this.qe(e),n-=1;return n}Ze(e){if(e[0]<0x19999999n)return!0;if(e[0]>0x19999999n)return!1;for(let n=1;n<e.length;n++){if(e[n]<0x99999999n)return!0;if(e[n]>0x99999999n)return!1}return!1}Me(e,n,r){for(let o=0;o<r.length;o++)r[o]=0n;let i=this.Re;this.Ye(n,i);let s=e.length;for(let o=s-1;o>=0;o--)for(let a=s-1;a>=0;a--){let l=e[o]*i[a];r[a+o+1]=r[a+o+1]+(l&J.Xe)&0xffffffffffffffffn,r[a+o]=r[a+o]+(l>>32n)&0xffffffffffffffffn}for(let o=11;o>=1;o--)r[o-1]=r[o-1]+(r[o]>>32n)&0xffffffffffffffffn,r[o]&=J.Xe}qe(e){let n=e.length-1;e[0]&=J.Xe,e[n]*=10n;for(let r=n-1;r>=0;r--)e[r]=10n*e[r]+(e[r+1]>>32n)&0xffffffffffffffffn,e[r+1]&=J.Xe}Le(e){let n=31-J.et(e[0]);return n!=0&&this.tt(e,n),n}$e(e){return this.rt(e,5,100n),this.rt(e,4,0x80000000n),(e[0]&J.nt<<1n)!=0n?(this.tt(e,1),1):0}He(e,n){n[1]=(e[0]<<32n)+e[1],n[2]=(e[2]<<32n)+e[3],n[3]=(e[4]<<32n)+e[5]}Ye(e,n){n[0]=e[1]>>32n,n[1]=e[1]&J.Xe,n[2]=e[2]>>32n,n[3]=e[2]&J.Xe,n[4]=e[3]>>32n,n[5]=e[3]&J.Xe}tt(e,n){let r=e.length-1,i=BigInt(32-Math.abs(n));if(n>0){let s=BigInt(n);for(let o=r+1-1;o>=1;o--)e[o]=e[o]>>s|e[o-1]<<i&J.Xe;e[0]=e[0]>>s}else if(n<0){let s=BigInt(-n);e[0]=0xffffffffffffffffn&(e[0]<<s|e[1]>>i);for(let o=1;o<r;o++)e[o]=0xffffffffffffffffn&(e[o]<<s&J.Xe|e[o+1]>>i);e[r]=e[r]<<s&J.Xe}}rt(e,n,r){let i=n;e[i]=e[i]+r&0xffffffffffffffffn;for(let s=i+1-1;s>=1&&(e[s]&J.nt)!=0n;s--)e[s]&=J.Xe,e[s-1]+=1n}static et(e){let n=Number(e>>32n);return n==0?32+Math.clz32(Number(BigInt.asUintN(32,e))):Math.clz32(n)}}J.De=59,J.ge=646456993,J.we=-646457032,J.Ce=0xccccccccccccd00,J.it=0x8000000000000000n,J.ze=2147483648,J.Xe=0x00000000ffffffffn,J.nt=0xffffffff00000000n,J.Be=Math.log(10)/Math.log(2),J.Qe=1/Math.log(2),J.Ue=2147483647,J.Fe=0xffffffffn,J.je=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[1n,0x3333333333333333n,0x3333333333333333n,0x3333333333333334n],[1n,0x6666666666666666n,0x6666666666666666n,0x6666666666666667n],[2n,0x28f5c28f5c28f5c2n,0x8f5c28f5c28f5c28n,0xf5c28f5c28f5c290n],[3n,0x4189374bc6a7ef9dn,0xb22d0e5604189374n,0xbc6a7ef9db22d0e6n],[5n,0xa7c5ac471b478423n,0x0fcf80dc33721d53n,0xcddd6e04c0592104n],[10n,0x6df37f675ef6eadfn,0x5ab9a2072d44268dn,0x97df837e6748956en],[20n,0x2f394219248446ban,0xa23d2ec729af3d61n,0x0607aa0167dd94cbn],[39n,0x571cbec554b60dbbn,0xd5f64baf0506840dn,0x451db70d5904029bn],[78n,0x1da48ce468e7c702n,0x6520247d3556476dn,0x1469caf6db224cfan],[155n,0x2252f0e5b39769dcn,0x9ae2eea30ca3ade0n,0xeeaa3c08dfe84e30n],[309n,0x2e055c9a3f6ba793n,0x16583a816eb60a59n,0x22c4b0826cf1ebf7n],[617n,0x52bb45e9cf23f17fn,0x7688c07606e50364n,0xb34479aa9d449a57n],[1234n,0x1abc81c8ff5f846cn,0x8f5e3c9853e38c97n,0x45060097f3bf9296n],[2467n,0x1bec53b510daa7b4n,0x48369ed77dbb0eb1n,0x3b05587b2187b41en],[4933n,0x1e75063a5ba91326n,0x8abfb8e460016ae3n,0x28008702d29e8a3cn],[9865n,0x243c5d8bb5c5fa55n,0x40c6d248c5881915n,0x4c0fd99fd5befc22n],[19729n,0x334a5570c3f4ef3cn,0xa13c36c43f979c90n,0xda7ac473555fb7a8n],[39457n,0x66c304445dd98f3bn,0xa8c293a20e47a41bn,0x4c5b03dc12604964n],[78914n,0x293ffbf5fb028cc4n,0x89d3e5ff44238406n,0x369a339e1bfe8c9bn],[157827n,0x427792fbb68e5d20n,0x7b297cd9fc154b62n,0xf09142114aa9a20cn],[315653n,0xac92bc65ad5c08fcn,0x00beeb115a566c19n,0x4ba882d8a4622437n],[631306n,0x745581440f92e80en,0x4da822cf7f896f41n,0x509d598678164ecdn],[1262612n,0x34dd99b4c69523a5n,0x64bc2e8f0d8b1044n,0xb03b1c96da5dd349n],[2525223n,0x6d2bbea9d6d25a08n,0xa0a4606a88e96b70n,0x182063bbc2fe8520n],[5050446n,0x2e8e47d63bfdd6e3n,0x2b55fa8976eaa3e9n,0x1a6b9d3086412a73n],[10100891n,0x54aa68efa1d719dfn,0xd8505806612c5c8fn,0xad068837fee8b43an],[20201782n,0x1c00464ccb7bae77n,0x9e3877784c77982cn,0xd94af3b61717404fn],[40403563n,0x1ea099c8be2b6cd0n,0x8bfb6d539fa50466n,0x6d3bc37e69a84218n],[80807125n,0x24a457f466ce8d18n,0xf2c8f3b81bc6bb59n,0xa78c757692e02d49n],[161614249n,0x347256677aba6b53n,0x3fbf90d30611a67cn,0x1e039d87e0bdb32bn],[323228497n,0x6b727daf0fd3432an,0x71f71121f9e4200fn,0x8fcd9942d486c10cn],[646456994n,0x2d18e84484d91f78n,0x4079bfe7829dec6fn,0x21551643e365abc6n]],J.Ke=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[0n,0x8000000000000000n,0x0000000000000000n,0x0000000000000000n],[0n,0x4000000000000000n,0x0000000000000000n,0x0000000000000001n],[-1n,0xa000000000000000n,0x0000000000000000n,0x0000000000000000n],[-2n,0x6400000000000000n,0x0000000000000000n,0x0000000000000000n],[-4n,0x2710000000000000n,0x0000000000000000n,0x0000000000000001n],[-9n,0x3b9aca0000000000n,0x0000000000000000n,0x0000000000000001n],[-19n,0x8ac7230489e80000n,0x0000000000000000n,0x0000000000000000n],[-38n,0x4b3b4ca85a86c47an,0x098a224000000000n,0x0000000000000001n],[-77n,0xdd15fe86affad912n,0x49ef0eb713f39eben,0xaa987b6e6fd2a002n],[-154n,0xbeeefb584aff8603n,0xaafb550ffacfd8fan,0x5ca47e4f88d45371n],[-308n,0x8e679c2f5e44ff8fn,0x570f09eaa7ea7648n,0x5961db50c6d2b888n],[-616n,0x4f371b3399fc2ab0n,0x8170041c9feb05aan,0xc7c343447c75bcf6n],[-1233n,0xf51e928179013fd3n,0xde4bd12cde4d985cn,0x4a573ca6f94bff14n],[-2466n,0xeab388127bccaff7n,0x1667639142b9fbaen,0x775ec9995e1039fbn],[-4932n,0xd72cb2a95c7ef6ccn,0xe81bf1e825ba7515n,0xc2feb521d6cb5dcdn],[-9864n,0xb4dc1be6604502dcn,0xd491079b8eef6535n,0x578d3965d24de84dn],[-19728n,0x7fc6447bee60ea43n,0x2548da5c8b125b27n,0x5f42d1142f41d349n],[-39456n,0x3fc65180f88af8fbn,0x6a6915f383349413n,0x063c3708b6ceb291n],[-78913n,0x9ee0197c8dcd55bfn,0x2b2b9b942c38f4a2n,0x0f8ba634e9c706aen],[-157826n,0x629963a25b8b2d79n,0xd00b9d2286f70876n,0xe97004700c3644fcn],[-315652n,0x25f9cc308ceef4f3n,0x40f19543911a4546n,0xa2cd389452cfc366n],[-631305n,0x385597b0d47e76b8n,0x1b9f67e103bf2329n,0xc3119848595985f7n],[-1262611n,0x7bf795d276c12f66n,0x66a61d62a446659an,0xa1a4d73bebf093d5n],[-2525222n,0x3c07d96ab1ed7799n,0xcb7355c22cc05ac0n,0x4ffc0ab73b1f6a49n],[-5050445n,0x8cc4cd8c3edefb9an,0x6c8ff86a90a97e0cn,0x166cfddbf98b71bfn],[-10100890n,0x4d67d81cc88e1228n,0x1d7cfb06666b79b3n,0x7b916728aaa4e70dn],[-20201781n,0xea0c55494e7a552dn,0xb88cb9484bb86c61n,0x8d44893c610bb7dfn],[-40403562n,0xd5fa8c821ec0c24an,0xa80e46e764e0f8b0n,0xa7276bfa432fac7en],[-80807124n,0xb2dae307426f6791n,0xc970b82f58b12918n,0x0472592f7f39190en],[-161614248n,0x7cf51edd8a15f1c9n,0x656dab3498f8e697n,0x12daa2a80e53c807n],[-323228496n,0x3cfe609ab5883c50n,0xbec8b5d22b198871n,0xe18477703b4622b4n],[-646456993n,0x9152447b9d7cda9an,0x3b4d3f6110d77aadn,0xfa81bad1c394adb4n]];class K{constructor(e,n,r,i){this.negative=e,this.st=n,this.Ve=r,this.Te=i}exponent(){return this.st-J.Ue}ot(){return this.st===0&&this.Ve===0n&&this.Te===0n}ut(){return this.st===je(K,Le,"f",Er)&&this.Ve===0n&&this.Te===0n}isNaN(){return this.st===je(K,Le,"f",Er)&&!(this.Ve===0n&&this.Te===0n)}compareTo(e){if(this.isNaN())return e.isNaN()?0:1;if(e.isNaN())return-1;let n,r;if(this.negative){if(!e.negative)return-1;n=1,r=-1}else{if(e.negative)return 1;n=-1,r=1}return this.st<e.st?n:this.st>e.st?r:this.Ve<e.Ve?n:this.Ve>e.Ve?r:this.Te<e.Te?n:this.Te>e.Te?r:0}debug(){return(this.negative?"+":"-")+je(K,Le,"m",Ca).call(K,this.Ve)+je(K,Le,"m",Ca).call(K,this.Te)+"*2^"+this.exponent()}static fromNumber(e){if(isNaN(e))return K.NaN;if(!isFinite(e))return e<0?K._t:K.ct;if(e===0)return Math.sign(1/e)>0?K.lt:K.ft;const n=new DataView(new ArrayBuffer(8));n.setFloat64(0,e);const r=n.getBigUint64(0);let i=BigInt.asUintN(64,r<<12n),s=2047&Number(r>>52n);if(s===0){const o=J.et(i);i=o<63?i<<BigInt(o+1):0n,s=-o}return new K(e<0,je(K,Le,"m",si).call(K,s-1023),i,0n)}static fromString(e){if(e==="NaN")return K.NaN;if(e==="-Infinity")return K._t;if(e==="Infinity"||e==="+Infinity")return K.ct;const n=new Array(e.length).fill(0);let r=0,i=0,s=0,o=!1;for(e[r]==="-"?(o=!0,r++):e[r]==="+"&&r++;je(K,Le,"m",Is).call(K,e,r);)n[i++]=je(K,Le,"m",Es).call(K,e,r++);if(e[r]==="."){const l=++r;for(;je(K,Le,"m",Is).call(K,e,r);)n[i++]=je(K,Le,"m",Es).call(K,e,r++);s=l-r}if(e[r]==="e"||e[r]==="E"){let l=0;r++;let c=1;e[r]==="-"?(c=-1,r++):e[r]==="+"&&r++;const u=r;for(;je(K,Le,"m",Is).call(K,e,r);)if(l=10*l+je(K,Le,"m",Es).call(K,e,r++),r-u>9)throw new Error("Exponent too large "+e);if(r===u)throw new Error("Invalid number "+e);s+=l*c}if(i===0||r!==e.length)throw new Error("Invalid number "+e);const a=J.ye(n.slice(0,i),s);return new K(o,a.exponent,a.Ve,a.Te)}}Le=K,Ca=function(e){return e.toString(16).padStart(16,"0")},Is=function(e,n){const r=e.codePointAt(n);return r!==void 0&&r>=48&&r<=57},Es=function(e,n){return e.codePointAt(n)-48},si=function(e){return e+J.Ue},Er={value:Number(J.Fe)},K.lt=new K(!1,0,0n,0n),K.ft=new K(!0,0,0n,0n),K.NaN=new K(!1,je(K,Le,"f",Er),1n<<63n,0n),K._t=new K(!0,je(K,Le,"f",Er),0n,0n),K.ct=new K(!1,je(K,Le,"f",Er),0n,0n),new K(!0,je(K,Le,"m",si).call(K,63),0n,0n),new K(!1,je(K,Le,"m",si).call(K,0),0n,0n),new K(!0,je(K,Le,"m",si).call(K,0),0n,0n);/**
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
 */const zb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function hr(t){if(dt(!!t,39018),typeof t=="string"){let e=0;const n=zb.exec(t);if(dt(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Gs(t){return typeof t=="string"?Et.fromBase64String(t):Et.fromUint8Array(t)}/**
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
 */function ft(t,e){const n={typeString:t};return e&&(n.value=e),n}function Zi(t,e){if(!oh(t))throw new q(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0,o=e[r].optional;if(!(r in t)){if(o)continue;n=`JSON missing required field: '${r}'`;break}const a=t[r];if(i&&typeof a!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&a!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new q(U.INVALID_ARGUMENT,n);return!0}/**
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
 */const pu=-62135596800,mu=1e6;class Ie{static now(){return Ie.fromMillis(Date.now())}static fromDate(e){return Ie.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*mu);return new Ie(n,r)}static fromInstant(e){if(!e||typeof e.ht!="bigint")throw new q(U.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return Ie._fromEpochNanoseconds(e.ht)}static _fromEpochNanoseconds(e){let n,r;if(e>=0n)n=Number(e/1000000000n),r=Number(e%1000000000n);else{const i=e%1000000000n;i===0n?(n=Number(e/1000000000n),r=0):(n=Number(e/1000000000n-1n),r=Number(i+1000000000n))}return new Ie(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new q(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<pu)throw new q(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/mu}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new q(U.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ie._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Zi(e,Ie._jsonSchema))return new Ie(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-pu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ie._jsonSchemaVersion="firestore/timestamp/1.0",Ie._jsonSchema={type:ft("string",Ie._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};function Gb(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{}).__type__)==null?void 0:r.stringValue)==="server_timestamp"}function lh(t){const e=t.mapValue.fields.__previous_value__;return Gb(e)?lh(e):e}function Di(t){const e=hr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ie(e.seconds,e.nanos)}/**
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
 */const ch="__type__",uh="__vector__",Ks="value",Kb="server_timestamp",dh="__min__",hl="__max__",Fn="__regex__",Js="pattern",Ys="options",Vi="__oid__",Qi="__int__",Lr="__decimal128__",ir="__request_timestamp__",Xs="seconds",Zs="increment",Po="__binary__",us={};var ve,gt;(gt=ve||(ve={})).dt="regexValue",gt.Et="bsonObjectIdValue",gt.Vt="int32Value",gt.Tt="decimal128Value",gt.It="bsonTimestampValue",gt.At="bsonBinaryValue",gt.Rt="minKeyValue",gt.Pt="maxKeyValue",gt.yt="maxValue",gt.bt="vectorValue",gt.wt="serverTimestampValue",gt.gt="regularMapValue";const gu={[uh]:ve.bt,[hl]:ve.yt,[Kb]:ve.wt},fh={[Fn]:ve.dt,[Vi]:ve.Et,[Qi]:ve.Vt,[Lr]:ve.Tt,[ir]:ve.It,[Po]:ve.At,[dh]:ve.Rt,[hl]:ve.Pt};function pr(t){if("nullValue"in t)return 0;if("booleanValue"in t)return 2;if("integerValue"in t||"doubleValue"in t)return 3;if("timestampValue"in t)return 4;if("stringValue"in t)return 7;if("bytesValue"in t)return 8;if("referenceValue"in t)return 9;if("geoPointValue"in t)return 11;if("arrayValue"in t)return 13;if(!("mapValue"in t))return ke(28295,{value:t});switch((function(r){var o,a;if(!((o=r.mapValue)!=null&&o.fields))return ve.gt;const i=r.mapValue.fields,s=(a=i[ch])==null?void 0:a.stringValue;if(s&&gu[s])return gu[s];if(Ni(i)===1){const l=Object.keys(i);return fh[l[0]]??ve.gt}return ve.gt})(t)){case ve.wt:return 6;case ve.yt:return 9007199254740991;case ve.bt:return 14;case ve.dt:return 12;case ve.Et:return 10;case ve.Vt:case ve.Tt:return 3;case ve.It:return 5;case ve.At:return 8;case ve.Rt:return 1;case ve.Pt:return 16;default:return 15}}function Qs(t,e,n){if(t===e)return!0;const r=pr(t);if(r!==pr(e))return!1;switch(r){case 0:case 9007199254740991:case 16:case 1:return!0;case 2:return t.booleanValue===e.booleanValue;case 6:return Di(t).isEqual(Di(e));case 4:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=hr(s.timestampValue),l=hr(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(t,e);case 7:return t.stringValue===e.stringValue;case 8:return(function(s,o){return gh(s,o)===0})(t,e);case 9:return t.referenceValue===e.referenceValue;case 11:return(function(s,o){return qe(s.geoPointValue.latitude)===qe(o.geoPointValue.latitude)&&qe(s.geoPointValue.longitude)===qe(o.geoPointValue.longitude)})(t,e);case 3:return(function(s,o,a){if(mr(s)&&mr(o))return ph(s,o)===0;if("integerValue"in s&&"integerValue"in o||to(s)&&to(o))return Li(s)===Li(o);let l,c;return!("doubleValue"in s)||!("doubleValue"in o)?!1:(l=qe(s.doubleValue),c=qe(o.doubleValue),l===c?zs(l)===zs(c):!!(a===void 0||a.vt)&&isNaN(l)&&isNaN(c))})(t,e,n);case 13:return ih(t.arrayValue.values||[],e.arrayValue.values||[],((i,s)=>Qs(i,s,n)));case 14:case 15:return(function(s,o,a){const l=s.mapValue.fields||{},c=o.mapValue.fields||{};if(Ni(l)!==Ni(c))return!1;for(const u in l)if(l.hasOwnProperty(u)&&(c[u]===void 0||!Qs(l[u],c[u],a)))return!1;return!0})(t,e,n);case 5:return mh(t,e)===0;case 12:return vh(t,e)===0;case 10:return yh(t,e)===0;default:return ke(52216,{left:t})}}function Oi(t,e){return(t.values||[]).find((n=>Qs(n,e)))!==void 0}function eo(t,e){if(t===e)return 0;const n=pr(t),r=pr(e);if(n!==r)return Ae(n,r);switch(n){case 0:case 1:case 16:case 9007199254740991:return 0;case 2:return Ae(t.booleanValue,e.booleanValue);case 3:return xa(t,e);case 4:return yu(t.timestampValue,e.timestampValue);case 6:return yu(Di(t),Di(e));case 7:return Ri(t.stringValue,e.stringValue);case 8:return gh(t,e);case 9:return(function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=Ae(a[c],l[c]);if(u!==0)return u}return Ae(a.length,l.length)})(t.referenceValue,e.referenceValue);case 11:return(function(s,o){const a=Ae(qe(s.latitude),qe(o.latitude));return a!==0?a:Ae(qe(s.longitude),qe(o.longitude))})(t.geoPointValue,e.geoPointValue);case 13:return bu(t.arrayValue,e.arrayValue);case 14:return(function(s,o){var p,E,A,T;const a=s.fields||{},l=o.fields||{},c=(p=a[Ks])==null?void 0:p.arrayValue,u=(E=l[Ks])==null?void 0:E.arrayValue,h=Ae(((A=c==null?void 0:c.values)==null?void 0:A.length)||0,((T=u==null?void 0:u.values)==null?void 0:T.length)||0);return h!==0?h:bu(c,u)})(t.mapValue,e.mapValue);case 15:return(function(s,o){if(s===us&&o===us)return 0;if(s===us)return 1;if(o===us)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const p=Ri(l[h],u[h]);if(p!==0)return p;const E=eo(a[l[h]],c[u[h]]);if(E!==0)return E}return Ae(l.length,u.length)})(t.mapValue,e.mapValue);case 5:return mh(t,e);case 12:return vh(t,e);case 10:return yh(t,e);default:throw ke(23264,{xt:n})}}function Li(t){let e;return e=to(t)?t.mapValue.fields[Qi].integerValue:t.integerValue||t.doubleValue,qe(e)}function hh(t){return t.mapValue.fields[Lr].stringValue}function xa(t,e){if(mr(t)||mr(e))return ph(t,e);const n=Li(t),r=Li(e);return isNaN(n)?isNaN(r)?0:-1:isNaN(r)?1:Ae(n,r)}function ph(t,e){const n=vu(t),r=vu(e);return n.ot()&&r.ot()?0:n.isNaN()?r.isNaN()?0:-1:r.isNaN()?1:n.compareTo(r)}function vu(t){return mr(t)?K.fromString(hh(t)):K.fromNumber(Li(t))}function yu(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ae(t,e);const n=hr(t),r=hr(e),i=Ae(n.seconds,r.seconds);return i!==0?i:Ae(n.nanos,r.nanos)}function bu(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=eo(n[i],r[i]);if(s!==void 0&&s!==0)return s}return Ae(n.length,r.length)}function mh(t,e){var a,l,c,u,h,p,E,A,T,C,S,x;const n=(c=(l=(a=t.mapValue.fields)==null?void 0:a[ir].mapValue)==null?void 0:l.fields)==null?void 0:c[Xs],r=(p=(h=(u=e.mapValue.fields)==null?void 0:u[ir].mapValue)==null?void 0:h.fields)==null?void 0:p[Xs],i=(T=(A=(E=t.mapValue.fields)==null?void 0:E[ir].mapValue)==null?void 0:A.fields)==null?void 0:T[Zs],s=(x=(S=(C=e.mapValue.fields)==null?void 0:C[ir].mapValue)==null?void 0:S.fields)==null?void 0:x[Zs],o=xa(n,r);return o!==0?o:xa(i,s)}function _u(t){var a;if("bytesValue"in t)return{subtype:0,bytes:Gs(t.bytesValue)};const e=(a=t.mapValue)==null?void 0:a.fields,n=e==null?void 0:e[Po],r=n==null?void 0:n.bytesValue;if(!r)throw new Error("Received incorrect value for BsonBinaryData");const i=Gs(r).toUint8Array();if(i.length===0)throw new Error("Received empty bytesValue for BsonBinaryData");const s=i[0],o=i.slice(1);return{subtype:s,bytes:Et.fromUint8Array(o)}}function gh(t,e){const n=_u(t),r=_u(e);return n.subtype!==r.subtype?n.subtype<r.subtype?-1:1:n.bytes.compareTo(r.bytes)}function vh(t,e){var c,u,h,p,E,A,T,C,S,x,W,M,ne,G,f,m;const n=t.mapValue.fields,r=((p=(h=(u=(c=n==null?void 0:n[Fn])==null?void 0:c.mapValue)==null?void 0:u.fields)==null?void 0:h[Js])==null?void 0:p.stringValue)??"",i=((C=(T=(A=(E=n==null?void 0:n[Fn])==null?void 0:E.mapValue)==null?void 0:A.fields)==null?void 0:T[Ys])==null?void 0:C.stringValue)??"",s=e.mapValue.fields,o=((M=(W=(x=(S=s==null?void 0:s[Fn])==null?void 0:S.mapValue)==null?void 0:x.fields)==null?void 0:W[Js])==null?void 0:M.stringValue)??"",a=((m=(f=(G=(ne=s==null?void 0:s[Fn])==null?void 0:ne.mapValue)==null?void 0:G.fields)==null?void 0:f[Ys])==null?void 0:m.stringValue)??"",l=Ri(r,o);return l!==0?l:Ae(i,a)}function yh(t,e){var n,r,i,s;return Ri(((r=(n=t.mapValue.fields)==null?void 0:n[Vi])==null?void 0:r.stringValue)??"",((s=(i=e.mapValue.fields)==null?void 0:i[Vi])==null?void 0:s.stringValue)??"")}function wu(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function mr(t){var n;if(!((n=t.mapValue)!=null&&n.fields))return!1;const e=t.mapValue.fields;return Ni(e)===1&&e[Lr]&&!!e[Lr].stringValue}function to(t){var n,r;if(!((n=t.mapValue)!=null&&n.fields))return!1;const e=t.mapValue.fields;return Ni(e)===1&&((r=e[Qi])==null?void 0:r.integerValue)!==void 0}function bh(t){return!!t&&"arrayValue"in t}function Iu(t){return!!t&&"nullValue"in t}function Eu(t){return!(!(function(n){return!!n&&"doubleValue"in n})(t)||!isNaN(Number(t.doubleValue)))||!(!mr(t)||hh(t)!=="NaN")}function ia(t){return!!t&&"mapValue"in t}function gi(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Xi(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=gi(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gi(t.arrayValue.values[n]);return e}return{...t}}/**
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
 */new Set(Object.values(fh));class Tu{constructor(e,n){this.position=e,this.inclusive=n}}/**
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
 */class _h{}class Ot extends _h{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Jb(e,n,r):n==="array-contains"?new Zb(e,r):n==="in"?new Qb(e,r):n==="not-in"?new e_(e,r):n==="array-contains-any"?new t_(e,r):new Ot(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Yb(e,r):new Xb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(eo(n,this.value)):n!==null&&pr(this.value)===pr(n)&&this.matchesComparison(eo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ke(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class es extends _h{constructor(e,n){super(),this.filters=e,this.op=n,this.Dt=null}static create(e,n){return new es(e,n)}matches(e){return(function(r){return r.op==="and"})(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Dt!==null||(this.Dt=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Dt}getFilters(){return Object.assign([],this.filters)}}class Jb extends Ot{constructor(e,n,r){super(e,n,r),this.key=Ue.fromName(r.referenceValue)}matches(e){const n=Ue.comparator(e.key,this.key);return this.matchesComparison(n)}}class Yb extends Ot{constructor(e,n){super(e,"in",n),this.keys=wh("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class Xb extends Ot{constructor(e,n){super(e,"not-in",n),this.keys=wh("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function wh(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map((r=>Ue.fromName(r.referenceValue)))}class Zb extends Ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bh(n)&&Oi(n.arrayValue,this.value)}}class Qb extends Ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Oi(this.value.arrayValue,n)}}class e_ extends Ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(Oi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Oi(this.value.arrayValue,n)}}class t_ extends Ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bh(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Oi(this.value.arrayValue,r)))}}/**
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
 */class no{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
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
 */class He{static fromTimestamp(e){return new He(e)}static min(){return new He(new Ie(0,0))}static max(){return new He(new Ie(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ro{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new ro(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new ro(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ds(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ds(this.root,e,this.comparator,!1)}getReverseIterator(){return new ds(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ds(this.root,e,this.comparator,!0)}}class ds{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??We.RED,this.left=i??We.EMPTY,this.right=s??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new We(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return We.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ke(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ke(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ke(27949);return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw ke(57766)}get value(){throw ke(16141)}get color(){throw ke(16727)}get left(){throw ke(29726)}get right(){throw ke(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Mi{constructor(e){this.comparator=e,this.data=new ro(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Au(this.data.getIterator())}getIteratorFrom(e){return new Au(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof Mi)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Mi(this.comparator);return n.data=e,n}}class Au{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class gr{constructor(e){this.fields=e,e.sort(Bn.comparator)}static empty(){return new gr([])}unionWith(e){let n=new Mi(Bn.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new gr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ih(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class lt{constructor(e){this.value=e}static empty(){return new lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ia(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=gi(n)}setAll(e){let n=Bn.emptyPath(),r={},i=[];e.forEach(((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=gi(o):i.push(a.lastSegment())}));const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ia(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Qs(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ia(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Xi(n,((i,s)=>e[i]=s));for(const i of r)delete e[i]}clone(){return new lt(gi(this.value))}}/**
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
 */class qt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new qt(e,0,He.min(),He.min(),He.min(),lt.empty(),0)}static newFoundDocument(e,n,r,i){return new qt(e,1,n,He.min(),r,i,0)}static newNoDocument(e,n){return new qt(e,2,n,He.min(),He.min(),lt.empty(),0)}static newUnknownDocument(e,n){return new qt(e,3,n,He.min(),He.min(),lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(He.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=He.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class n_{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.Nt=null}}function Su(t,e=null,n=[],r=[],i=null,s=null,o=null){return new n_(t,e,n,r,i,s,o)}/**
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
 */class Co{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.St=null,this.Ct=null,this.Bt=null,this.startAt,this.endAt}}function r_(t){return t.collectionGroup!==null}function i_(t){const e=Yi(t);if(e.St===null){e.St=[];const n=new Set;for(const s of e.explicitOrderBy)e.St.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Mi(Bn.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((c=>{c.isInequality()&&(a=a.add(c.field))}))})),a})(e).forEach((s=>{n.has(s.canonicalString())||s.isKeyField()||e.St.push(new no(s,r))})),n.has(Bn.keyField().canonicalString())||e.St.push(new no(Bn.keyField(),r))}return e.St}function s_(t){const e=Yi(t);return e.Ct||(e.Ct=o_(e,i_(t))),e.Ct}function o_(t,e){if(t.limitType==="F")return Su(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((i=>{const s=i.dir==="desc"?"asc":"desc";return new no(i.field,s)}));const n=t.endAt?new Tu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Tu(t.startAt.position,t.startAt.inclusive):null;return Su(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ra(t,e){const n=t.filters.concat([e]);return new Co(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}/**
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
 */function Ih(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zs(e)?"-0":e}}function Ts(t){return{integerValue:""+t}}function a_(t,e,n){return(function(i){return typeof i=="number"&&Number.isInteger(i)&&!zs(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER})(e)?Ts(e):Ih(t,e)}/**
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
 */class xo{constructor(){this._=void 0}}class Eh extends xo{}class l_ extends xo{constructor(e){super(),this.elements=e}}class c_ extends xo{constructor(e){super(),this.elements=e}}class pl extends xo{constructor(e,n){super(),this.serializer=e,this.Qt=n}}class u_ extends pl{}class d_ extends pl{}class f_ extends pl{}/**
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
 */class h_{constructor(e,n){this.field=e,this.transform=n}}class Yt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Yt}static exists(e){return new Yt(void 0,e)}static updateTime(e){return new Yt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Ro{}class Th extends Ro{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ml extends Ro{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class gl extends Ro{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class p_ extends Ro{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const m_={asc:"ASCENDING",desc:"DESCENDING"},g_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},v_={and:"AND",or:"OR"};class y_{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function As(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ku(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function b_(t,e){return As(t,e.toTimestamp())}function vi(t){return dt(!!t,49232),He.fromTimestamp((function(n){const r=hr(n);return new Ie(r.seconds,r.nanos)})(t))}function vl(t,e){return Na(t,e).canonicalString()}function Na(t,e){const n=(function(i){return new Ce(["projects",i.projectId,"databases",i.database])})(t).child("documents");return e===void 0?n:n.child(e)}function io(t,e){return vl(t.databaseId,e.path)}function Da(t,e){const n=(function(i){const s=Ce.fromString(i);return dt(Sh(s),10190,{key:s.toString()}),s})(e);if(n.get(1)!==t.databaseId.projectId)throw new q(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new q(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ue((function(i){return dt(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)})(n))}function Pu(t,e,n){return{name:io(t,e),fields:n.value.mapValue.fields}}function __(t,e){return"found"in e?(function(r,i){dt(!!i.found,43571),i.found.name,i.found.updateTime;const s=Da(r,i.found.name),o=vi(i.found.updateTime),a=i.found.createTime?vi(i.found.createTime):He.min(),l=new lt({mapValue:{fields:i.found.fields}});return qt.newFoundDocument(s,o,a,l)})(t,e):"missing"in e?(function(r,i){dt(!!i.missing,3894),dt(!!i.readTime,22933);const s=Da(r,i.missing),o=vi(i.readTime);return qt.newNoDocument(s,o)})(t,e):ke(7234,{result:e})}function w_(t,e){let n;if(e instanceof Th)n={update:Pu(t,e.key,e.value)};else if(e instanceof gl)n={delete:io(t,e.key)};else if(e instanceof ml)n={update:Pu(t,e.key,e.data),updateMask:S_(e.fieldMask)};else{if(!(e instanceof p_))return ke(16599,{Ot:e.type});n={verify:io(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(s,o){const a=o.transform;if(a instanceof Eh)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof l_)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof c_)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof u_)return{fieldPath:o.field.canonicalString(),increment:a.Qt};if(a instanceof d_)return{fieldPath:o.field.canonicalString(),minimum:a.Qt};if(a instanceof f_)return{fieldPath:o.field.canonicalString(),maximum:a.Qt};throw ke(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(i,s){return s.updateTime!==void 0?{updateTime:b_(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ke(27497)})(t,e.precondition)),n}function I_(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=(function(c,u){return vl(c.databaseId,u)})(t,i);const s=(function(c){if(c.length!==0)return Ah(es.create(c,"and"))})(e.filters);s&&(n.structuredQuery.where=s);const o=(function(c){if(c.length!==0)return c.map((u=>(function(p){return{field:Ir(p.field),direction:E_(p.dir)}})(u)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=(function(c,u){return c.useProto3Json||Bb(u)?u:{value:u}})(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=(function(c){return{before:c.inclusive,values:c.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(c){return{before:!c.inclusive,values:c.position}})(e.endAt)),{Mt:n,parent:i}}function E_(t){return m_[t]}function T_(t){return g_[t]}function A_(t){return v_[t]}function Ir(t){return{fieldPath:t.canonicalString()}}function Ah(t){return t instanceof Ot?(function(n){if(n.op==="=="){if(Eu(n.value))return{unaryFilter:{field:Ir(n.field),op:"IS_NAN"}};if(Iu(n.value))return{unaryFilter:{field:Ir(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Eu(n.value))return{unaryFilter:{field:Ir(n.field),op:"IS_NOT_NAN"}};if(Iu(n.value))return{unaryFilter:{field:Ir(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ir(n.field),op:T_(n.op),value:n.value}}})(t):t instanceof es?(function(n){const r=n.getFilters().map((i=>Ah(i)));return r.length===1?r[0]:{compositeFilter:{op:A_(n.op),filters:r}}})(t):ke(54877,{filter:t})}function S_(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function Sh(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function kh(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */function yl(t){return new y_(t,!0)}/**
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
 */class k_{}class P_ extends k_{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.qt=!1}Lt(){if(this.qt)throw new q(U.FAILED_PRECONDITION,"The client has already been terminated.")}le(e,n,r,i){return this.Lt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.le(e,Na(n,r),i,s,o))).catch((s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(U.UNKNOWN,s.toString())}))}me(e,n,r,i,s){return this.Lt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.me(e,Na(n,r),i,o,a,s))).catch((o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new q(U.UNKNOWN,o.toString())}))}terminate(){this.qt=!0,this.connection.terminate()}}async function No(t,e){const n=Yi(t),r={writes:e.map((i=>w_(n.serializer,i)))};await n.le("Commit",n.serializer.databaseId,Ce.emptyPath(),r)}async function C_(t,e){const n=Yi(t),r={documents:e.map((a=>io(n.serializer,a)))},i=await n.me("BatchGetDocuments",n.serializer.databaseId,Ce.emptyPath(),r,e.length),s=new Map;i.forEach((a=>{const l=__(n.serializer,a);s.set(l.key.toString(),l)}));const o=[];return e.forEach((a=>{const l=s.get(a.toString());dt(!!l,55234,{key:a}),o.push(l)})),o}async function x_(t,e){const n=Yi(t),{Mt:r,parent:i}=I_(n.serializer,s_(e));return(await n.me("RunQuery",n.serializer.databaseId,i,{structuredQuery:r.structuredQuery})).filter((s=>!!s.document)).map((s=>(function(a,l,c){const u=Da(a,l.name),h=vi(l.updateTime),p=l.createTime?vi(l.createTime):He.min(),E=new lt({mapValue:{fields:l.fields}}),A=qt.newFoundDocument(u,h,p,E);return c?A.setHasCommittedMutations():A})(n.serializer,s.document,void 0)))}/**
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
 */const Ph="ComponentProvider",yi=new Map;function qr(t){if(t._terminated)throw new q(U.FAILED_PRECONDITION,"The client has already been terminated.");if(!yi.has(t)){qs(Ph,"Initializing Datastore");const e=(function(s){return new Wb(s)})((function(s,o,a,l,c){return new Db(s,o,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,ah(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator,l,c._customHeaders,c.grpcFlowControlWindow)})(t._databaseId,t.app.options.appId||"",t._persistenceKey,t.app.options.apiKey,t._freezeSettings())),n=yl(t._databaseId),r=(function(s,o,a,l){return new P_(s,o,a,l)})(t._authCredentials,t._appCheckCredentials,e,n);yi.set(t,r)}return yi.get(t)}const R_=1048576,Ch="firestore.googleapis.com",Cu=!0;class xu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new q(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ch,this.ssl=Cu}else this.host=e.host,this.ssl=e.ssl??Cu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<R_)throw new q(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if((function(r,i,s,o){if(i===!0&&o===!0)throw new q(U.INVALID_ARGUMENT,`${r} and ${s} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ah(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new q(U.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&(function(r,i){if(r===i)return!0;if(!r||!i)return!1;const s=Object.keys(r),o=Object.keys(i);if(s.length!==o.length)return!1;for(const a of s)if(r[a]!==i[a])return!1;return!0})(this._customHeaders,e._customHeaders)}}class ts{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new q(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new q(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new kb;switch(r.type){case"firstParty":return new Rb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=yi.get(n);r&&(qs(Ph,"Removing Datastore"),yi.delete(n),r.terminate())})(this),Promise.resolve()}}function N_(t,e){const n=typeof t=="object"?t:gf(),r=typeof t=="string"?t:"(default)",i=tl(n,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=Mg("firestore");s&&D_(i,...s)}return i}function D_(t,e,n,r={}){var c;t=yr(t,ts);const i=qi(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;i&&ff(`https://${a}`),s.host!==Ch&&s.host!==a&&th("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...s,host:a,ssl:i,emulatorOptions:r};if(!cr(l,o)&&(t._setSettings(l),r.mockUserToken)){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=it.MOCK_USER;else{u=Fg(r.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new q(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new it(p)}t._authCredentials=new Pb(new rh(u,h))}}/**
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
 */class Wn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Wn(this.firestore,e,this._query)}}class xe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xe(this.firestore,e,this._key)}toJSON(){return{type:xe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Zi(n,xe._jsonSchema))return new xe(e,r||null,new Ue(Ce.fromString(n.referencePath)))}}xe._jsonSchemaVersion="firestore/documentReference/1.0",xe._jsonSchema={type:ft("string",xe._jsonSchemaVersion),referencePath:ft("string")};class gn extends Wn{constructor(e,n,r){super(e,n,(function(s){return new Co(s)})(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xe(this.firestore,null,new Ue(e))}withConverter(e){return new gn(this.firestore,e,this._path)}}function Do(t,e,...n){if(t=Ne(t),sh("collection","path",e),t instanceof ts){const r=Ce.fromString(e,...n);return du(r),new gn(t,null,r)}{if(!(t instanceof xe||t instanceof gn))throw new q(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return du(r),new gn(t.firestore,null,r)}}function Vt(t,e,...n){if(t=Ne(t),arguments.length===1&&(e=Lb.newId()),sh("doc","path",e),t instanceof ts){const r=Ce.fromString(e,...n);return uu(r),new xe(t,null,new Ue(r))}{if(!(t instanceof xe||t instanceof gn))throw new q(U.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return uu(r),new xe(t.firestore,t instanceof gn?t.converter:null,new Ue(r))}}/**
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
 */class ct{constructor(e,n=0){if(this.subtype=n,!Number.isInteger(n)||n<0||n>255)throw new q(U.INVALID_ARGUMENT,"The subtype for Bytes must be a value in the inclusive [0, 255] range.");this._byteString=e}static fromBase64String(e,n=0){try{return new ct(Et.fromBase64String(e),n)}catch(r){throw new q(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(e,n=0){return new ct(Et.fromUint8Array(e),n)}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}get data(){return this.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+", subtype: "+this.subtype+")"}isEqual(e){return this.subtype===e.subtype&&this._byteString.isEqual(e._byteString)}toJSON(){const e={type:ct._jsonSchemaVersion,bytes:this.toBase64()};return this.subtype!==0&&(e.subtype=this.subtype),e}static fromJSON(e){if(Zi(e,ct._jsonSchema)){const n=e.subtype??0;return ct.fromBase64String(e.bytes,n)}}}ct._jsonSchemaVersion="firestore/bytes/1.0",ct._jsonSchema={type:ft("string",ct._jsonSchemaVersion),bytes:ft("string"),subtype:{...ft("number"),optional:!0}};/**
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
 */class bl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new q(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Bn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class _l{constructor(e){this.value=e}isEqual(e){return this.value===e.value}}/**
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
 */class wl{constructor(e,n){if(this.seconds=e,this.increment=n,!Number.isInteger(e)||e<0||e>4294967295)throw new Error("BsonTimestamp 'seconds' must be in the range of a 32-bit unsigned integer (0-4294967295).");if(!Number.isInteger(n)||n<0||n>4294967295)throw new Error("BsonTimestamp 'increment' must be in the range of a 32-bit unsigned integer (0-4294967295).")}isEqual(e){return this.seconds===e.seconds&&this.increment===e.increment}}/**
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
 */class Il{constructor(e){this.stringValue=e,this.value=K.fromString(e)}isEqual(e){return!(!this.value.ot()||!e.value.ot())||this.value.compareTo(e.value)===0}toJSON(){return{$t:{stringValue:this.stringValue}}}}/**
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
 */class Vo{constructor(e){this._methodName=e}}/**
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
 */class Xt{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new q(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new q(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xt._jsonSchemaVersion}}static fromJSON(e){if(Zi(e,Xt._jsonSchema))return new Xt(e.latitude,e.longitude)}}Xt._jsonSchemaVersion="firestore/geoPoint/1.0",Xt._jsonSchema={type:ft("string",Xt._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};/**
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
 */class El{constructor(e){this.value=e}isEqual(e){return this.value===e.value}}/**
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
 */class dn{constructor(){this.type="MaxKey"}static instance(){return dn.MAX_KEY_VALUE_INSTANCE||(dn.MAX_KEY_VALUE_INSTANCE=new dn),dn.MAX_KEY_VALUE_INSTANCE}}dn.MAX_KEY_VALUE_INSTANCE=null;/**
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
 */class fn{constructor(){this.type="MinKey"}static instance(){return fn.MIN_KEY_VALUE_INSTANCE||(fn.MIN_KEY_VALUE_INSTANCE=new fn),fn.MIN_KEY_VALUE_INSTANCE}}fn.MIN_KEY_VALUE_INSTANCE=null;/**
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
 */class Tl{constructor(e,n){this.pattern=e,this.options=n}isEqual(e){return this.pattern===e.pattern&&this.options===e.options}}/**
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
 */class Nt{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Nt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Zi(e,Nt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Nt(e.vectorValues);throw new q(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Nt._jsonSchemaVersion="firestore/vectorValue/1.0",Nt._jsonSchema={type:ft("string",Nt._jsonSchemaVersion),vectorValues:ft("object")};/**
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
 */const V_=/^__.*__$/;class O_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ml(e,this.data,this.fieldMask,n,this.fieldTransforms):new Th(e,this.data,n,this.fieldTransforms)}}class xh{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ml(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Rh(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ke(40011,{dataSource:t})}}class Al{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Al({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.contextWith({path:n,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return so(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Rh(this.dataSource)&&V_.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class L_{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||yl(e)}createContext(e,n,r,i=!1){return new Al({dataSource:e,methodName:n,targetDoc:r,path:Bn.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Oo(t){const e=t._freezeSettings(),n=yl(t._databaseId);return new L_(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Sl(t,e,n,r,i,s={}){const o=t.createContext(s.merge||s.mergeFields?2:0,e,n,i);Pl("Data must be an object, but it was:",o,r);const a=Nh(r,o);let l,c;if(s.merge)l=new gr(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const h of s.mergeFields){const p=Fi(e,h,n);if(!o.contains(p))throw new q(U.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Lh(u,p)||u.push(p)}l=new gr(u),c=o.fieldTransforms.filter((h=>l.covers(h.field)))}else l=null,c=o.fieldTransforms;return new O_(new lt(a),l,c)}class Lo extends Vo{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Lo}}class kl extends Vo{_toFieldTransform(e){return new h_(e.path,new Eh)}isEqual(e){return e instanceof kl}}function M_(t,e,n,r){const i=t.createContext(1,e,n);Pl("Data must be an object, but it was:",i,r);const s=[],o=lt.empty();Xi(r,((l,c)=>{const u=Oh(e,l,n);c=Ne(c);const h=i.childContextForFieldPath(u);if(c instanceof Lo)s.push(u);else{const p=ns(c,h);p!=null&&(s.push(u),o.set(u,p))}}));const a=new gr(s);return new xh(o,a,i.fieldTransforms)}function F_(t,e,n,r,i,s){const o=t.createContext(1,e,n),a=[Fi(e,r,n)],l=[i];if(s.length%2!=0)throw new q(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(Fi(e,s[p])),l.push(s[p+1]);const c=[],u=lt.empty();for(let p=a.length-1;p>=0;--p)if(!Lh(c,a[p])){const E=a[p];let A=l[p];A=Ne(A);const T=o.childContextForFieldPath(E);if(A instanceof Lo)c.push(E);else{const C=ns(A,T);C!=null&&(c.push(E),u.set(E,C))}}const h=new gr(c);return new xh(u,h,o.fieldTransforms)}function U_(t,e,n,r=!1){return ns(n,t.createContext(r?4:3,e))}function ns(t,e,n){if(Vh(t=Ne(t)))return Pl("Unsupported field value:",e,t),Nh(t,e);if(t instanceof Vo)return(function(i,s){if(!Rh(s.dataSource))throw s.createError(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${i._methodName}() is not currently supported inside arrays`);const o=i._toFieldTransform(s);o&&s.fieldTransforms.push(o)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(i,s){const o=[];let a=0;for(const l of i){let c=ns(l,s.childContextForArray(a));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),a++}return{arrayValue:{values:o}}})(t,e)}return(function(i,s,o){if((i=Ne(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return a_(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const a=Ie.fromDate(i);return{timestampValue:As(s.serializer,a)}}if(i instanceof Ie){const a=new Ie(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:As(s.serializer,a)}}if(Dh(i)){const a=Ie.fromInstant(i),l=new Ie(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:As(s.serializer,l)}}if(i instanceof Xt)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof ct)return i.subtype===0?{bytesValue:ku(s.serializer,i._byteString)}:(function(l,c){const u=c.toUint8Array(),h=new Uint8Array(u.length+1);return h[0]=c.subtype,h.set(u,1),{mapValue:{fields:{[Po]:{bytesValue:ku(l,Et.fromUint8Array(h))}}}}})(s.serializer,i);if(i instanceof xe){const a=s.databaseId,l=i.firestore._databaseId;if(!l.isEqual(a))throw s.createError(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:vl(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof Nt)return(function(l,c){const u=l instanceof Nt?l.toArray():l;return{mapValue:{fields:{[ch]:{stringValue:uh},[Ks]:{arrayValue:{values:u.map((p=>{if(typeof p!="number")throw c.createError("VectorValues must only contain numeric values.");return Ih(c.serializer,p)}))}}}}}})(i,s);if(i instanceof Tl)return(function(l){return{mapValue:{fields:{[Fn]:{mapValue:{fields:{[Js]:{stringValue:l.pattern},[Ys]:{stringValue:l.options}}}}}}}})(i);if(i instanceof _l)return(function(l){return{mapValue:{fields:{[Vi]:{stringValue:l.value}}}}})(i);if(i instanceof El)return(function(l){return{mapValue:{fields:{[Qi]:Ts(l.value)}}}})(i);if(i instanceof Il)return(function(l){return{mapValue:{fields:{[Lr]:{stringValue:l.stringValue}}}}})(i);if(i instanceof wl)return(function(l){return{mapValue:{fields:{[ir]:{mapValue:{fields:{[Xs]:Ts(l.seconds),[Zs]:Ts(l.increment)}}}}}}})(i);if(i instanceof fn)return(function(){return{mapValue:{fields:{[dh]:{nullValue:"NULL_VALUE"}}}}})();if(i instanceof dn)return(function(){return{mapValue:{fields:{[hl]:{nullValue:"NULL_VALUE"}}}}})();if(kh(i))return i._toProto(s.serializer);throw s.createError(`Unsupported field value: ${ko(i)}`)})(t,e)}function Nh(t,e){const n={};return(function(i){for(const s in i)if(Object.prototype.hasOwnProperty.call(i,s))return!1;return!0})(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xi(t,((r,i)=>{const s=ns(i,e.childContextForField(r));s!=null&&(n[r]=s)})),{mapValue:{fields:n}}}function Dh(t){if(typeof t!="object"||t===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&t instanceof Temporal.Instant)return!0;const e=t;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.ht=="bigint"}function Vh(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ie||t instanceof Xt||t instanceof ct||t instanceof xe||t instanceof Vo||t instanceof Nt||t instanceof fn||t instanceof dn||t instanceof El||t instanceof Il||t instanceof Tl||t instanceof _l||t instanceof wl||Dh(t)||kh(t))}function Pl(t,e,n){if(!Vh(n)||!oh(n)){const r=ko(n);throw r==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Fi(t,e,n){if((e=Ne(e))instanceof bl)return e._internalPath;if(typeof e=="string")return Oh(t,e);throw so("Field path arguments must be of type string or ",t,!1,void 0,n)}const $_=new RegExp("[~\\*/\\[\\]]");function Oh(t,e,n){if(e.search($_)>=0)throw so(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bl(...e.split("."))._internalPath}catch{throw so(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function so(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new q(U.INVALID_ARGUMENT,a+t+l)}function Lh(t,e){return t.some((n=>n.isEqual(e)))}/**
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
 */class Mh{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Fh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Fi("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Fh extends Mh{data(){return super.data()}}class B_{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}/**
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
 */class Cl{}class xl extends Cl{}function j_(t,e,...n){let r=[];e instanceof Cl&&r.push(e),r=r.concat(n),(function(s){const o=s.filter((l=>l instanceof Nl)).length,a=s.filter((l=>l instanceof Rl)).length;if(o>1||o>0&&a>0)throw new q(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const i of r)t=i._apply(t);return t}class Rl extends xl{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Rl(e,n,r)}_apply(e){const n=this._parse(e);return Uh(e._query,n),new Wn(e.firestore,e.converter,Ra(e._query,n))}_parse(e){const n=Oo(e.firestore);return(function(s,o,a,l,c,u,h){let p;if((function(T,C){if(typeof T=="number"&&isNaN(T)&&C!=="=="&&C!=="!="&&C!=="array-contains")throw new Error("Invalid query. You can only perform '==' and '!=' comparisons on NaN.");if(T===null&&C!=="=="&&C!=="!="&&C!=="array-contains")throw new Error("Invalid query. You can only perform '==' and '!=' comparisons on Null.")})(h,u),c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new q(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Nu(h,u);const A=[];for(const T of h)A.push(Ru(l,s,T));p={arrayValue:{values:A}}}else p=Ru(l,s,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Nu(h,u),p=U_(a,o,h,u==="in"||u==="not-in");return Ot.create(c,u,p)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Nl extends Cl{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Nl(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:es.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)Uh(o,l),o=Ra(o,l)})(e._query,n),new Wn(e.firestore,e.converter,Ra(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Dl extends xl{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Dl(e,n)}_apply(e){const n=(function(i,s,o){if(i.startAt!==null)throw new q(U.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new q(U.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new no(s,o)})(e._query,this._field,this._direction);return new Wn(e.firestore,e.converter,(function(i,s){const o=i.explicitOrderBy.concat([s]);return new Co(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)})(e._query,n))}}function H_(t,e="asc"){const n=e,r=Fi("orderBy",t);return Dl._create(r,n)}class Vl extends xl{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Vl(e,n,r)}_apply(e){return new Wn(e.firestore,e.converter,(function(r,i,s){return new Co(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),i,s,r.startAt,r.endAt)})(e._query,this._limit,this._limitType))}}function W_(t){return Vl._create("limit",t,"F")}function Ru(t,e,n){if(typeof(n=Ne(n))=="string"){if(n==="")throw new q(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!r_(e)&&n.indexOf("/")!==-1)throw new q(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ce.fromString(n));if(!Ue.isDocumentKey(r))throw new q(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return wu(t,new Ue(r))}if(n instanceof xe)return wu(t,n._key);throw new q(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ko(n)}.`)}function Nu(t,e){if(!Array.isArray(t)||t.length===0)throw new q(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Uh(t,e){const n=(function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null})(t.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new q(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new q(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class q_{convertValue(e,n="none"){switch(pr(e)){case 0:return null;case 2:return e.booleanValue;case 3:if("mapValue"in e){if(to(e))return this.convertToInt32Value(e.mapValue);if(mr(e))return this.convertToDecimal128Value(e.mapValue)}return qe(e.integerValue||e.doubleValue);case 4:return this.convertTimestamp(e.timestampValue);case 6:return this.convertServerTimestamp(e,n);case 7:return e.stringValue;case 8:return"bytesValue"in e?this.convertBytes(Gs(e.bytesValue)):this.convertToBytesWithSubtype(e.mapValue);case 9:return this.convertReference(e.referenceValue);case 11:return this.convertGeoPoint(e.geoPointValue);case 13:return this.convertArray(e.arrayValue,n);case 15:return this.convertObject(e.mapValue,n);case 14:return this.convertVectorValue(e.mapValue);case 12:return this.convertToRegexValue(e.mapValue);case 10:return this.convertToBsonObjectId(e.mapValue);case 5:return this.convertToBsonTimestamp(e.mapValue);case 16:return dn.instance();case 1:return fn.instance();default:throw ke(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Xi(e,((i,s)=>{r[i]=this.convertValue(s,n)})),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[Ks].arrayValue)==null?void 0:i.values)==null?void 0:s.map((o=>qe(o.doubleValue)));return new Nt(n)}convertToBsonObjectId(e){var r,i;const n=((i=(r=e.fields)==null?void 0:r[Vi])==null?void 0:i.stringValue)??"";return new _l(n)}convertToBytesWithSubtype(e){var a;const n=(a=e.fields)==null?void 0:a[Po],r=n==null?void 0:n.bytesValue;if(!r)throw new Error("Received incorrect bytesValue for Bytes with subtype");const i=Gs(r).toUint8Array();if(i.length===0)throw new Error("Received empty bytesValue for Bytes with subtype");const s=i[0],o=i.slice(1);return new ct(Et.fromUint8Array(o),s)}convertToBsonTimestamp(e){var s,o,a,l,c,u,h;const n=(s=e.fields)==null?void 0:s[ir],r=Number((l=(a=(o=n==null?void 0:n.mapValue)==null?void 0:o.fields)==null?void 0:a[Xs])==null?void 0:l.integerValue),i=Number((h=(u=(c=n==null?void 0:n.mapValue)==null?void 0:c.fields)==null?void 0:u[Zs])==null?void 0:h.integerValue);return new wl(r,i)}convertToRegexValue(e){var i,s,o,a,l,c,u,h,p,E;const n=((l=(a=(o=(s=(i=e.fields)==null?void 0:i[Fn])==null?void 0:s.mapValue)==null?void 0:o.fields)==null?void 0:a[Js])==null?void 0:l.stringValue)??"",r=((E=(p=(h=(u=(c=e.fields)==null?void 0:c[Fn])==null?void 0:u.mapValue)==null?void 0:h.fields)==null?void 0:p[Ys])==null?void 0:E.stringValue)??"";return new Tl(n,r)}convertToInt32Value(e){var r,i;const n=Number((i=(r=e.fields)==null?void 0:r[Qi])==null?void 0:i.integerValue);return new El(n)}convertToDecimal128Value(e){var r,i;const n=((i=(r=e.fields)==null?void 0:r[Lr])==null?void 0:i.stringValue)??"";return new Il(n)}convertGeoPoint(e){return new Xt(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=lh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Di(e));default:return null}}convertTimestamp(e){const n=hr(e);return new Ie(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);dt(Sh(r),9688,{name:e});const i=new xi(r.get(1),r.get(3)),s=new Ue(r.popFirst(5));return i.isEqual(n)||dl(`A document reference to ${s} refers to a different database (${i.projectId}/${i.database}), which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function Ol(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class $h extends q_{constructor(e){super(),this.firestore=e}convertBytes(e){return new ct(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xe(this.firestore,null,n)}}function oo(t){const e=qr((t=yr(t,xe)).firestore),n=new $h(t.firestore);return C_(e,[t._key]).then((r=>{dt(r.length===1,15618);const i=r[0];return new Mh(t.firestore,n,t._key,i.isFoundDocument()?i:null,t.converter)}))}function Bh(t){(function(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new q(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")})((t=yr(t,Wn))._query);const e=qr(t.firestore),n=new $h(t.firestore);return x_(e,t._query).then((r=>{const i=r.map((s=>new Fh(t.firestore,n,s.key,s,t.converter)));return t._query.limitType==="L"&&i.reverse(),new B_(t,i)}))}function jh(t,e,n){const r=Ol((t=yr(t,xe)).converter,e,n),i=Sl(Oo(t.firestore),"setDoc",t._key,r,t.converter!==null,n);return No(qr(t.firestore),[i.toMutation(t._key,Yt.none())])}function z_(t){return No(qr((t=yr(t,xe)).firestore),[new gl(t._key,Yt.none())])}function Hh(t,e){const n=Vt(t=yr(t,gn)),r=Ol(t.converter,e),i=Sl(Oo(t.firestore),"addDoc",n._key,r,n.converter!==null,{});return No(qr(t.firestore),[i.toMutation(n._key,Yt.exists(!1))]).then((()=>n))}function In(){return new kl("serverTimestamp")}const Du="4.19.0";/**
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
 */class G_{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Oo(e)}set(e,n,r){this._verifyNotCommitted();const i=sa(e,this._firestore),s=Ol(i.converter,n,r),o=Sl(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Yt.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=sa(e,this._firestore);let o;return o=typeof(n=Ne(n))=="string"||n instanceof bl?F_(this._dataReader,"WriteBatch.update",s._key,n,r,i):M_(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Yt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=sa(e,this._firestore);return this._mutations=this._mutations.concat(new gl(n._key,Yt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new q(U.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function sa(t,e){if((t=Ne(t)).firestore!==e)throw new q(U.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function Ll(t){t=yr(t,ts);const e=qr(t);return new G_(t,(n=>No(e,n)))}/**
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
 */(function(){Sb(`${jr}_lite`),Dr(new ur("firestore/lite",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new ts(new Cb(e.getProvider("auth-internal")),new Nb(i,e.getProvider("app-check-internal")),Vb(i,n),i);return r&&s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),$n("firestore-lite",Du,""),$n("firestore-lite",Du,"esm2020")})();function En(){return Yv().find(i=>i.name==="trip")??mf({apiKey:"AIzaSyAVSVgO7VlNcYF8CCYIRzzZtJcpWwYh0vQ",projectId:"indonesia-trip-dcae8",appId:"1:354229712104:web:ac93f3905807aeafa7055d",authDomain:"indonesia-trip-dcae8.firebaseapp.com"},"trip")}function Pn(){return N_(En())}function Wh(){const t=Hn(En()).currentUser;if(!t)throw new Error("Please sign in to edit your profile.");return Vt(Pn(),"Trips","indonesia-2027","people",t.uid)}async function K_(){const t=Wh(),[e,n]=await Promise.all([oo(t),oo(Vt(t,"private","contact"))]);if(!e.exists())throw new Error("Your profile could not be found.");const r=e.data(),i=n.data()||{};return{name:r.name,status:r.status,phone:i.phone||"",email:i.email||""}}async function J_(t){const e=Wh(),n=t.name.trim();if(!n||n.length>120||!["invited","committed","interested"].includes(t.status)||t.phone.trim().length>40||t.email.trim().length>254)throw new Error("Check your name, status, and contact details.");const r=Ll(Pn());r.update(e,{name:n,status:t.status,updatedAt:In()}),r.set(Vt(e,"private","contact"),{phone:t.phone.trim(),email:t.email.trim()}),await r.commit()}async function Y_(t,e,n="",r=""){const i=Hn(En()).currentUser;if(!i)throw new Error("Please sign in to add a person.");const s=t.trim();if(!s||s.length>120||!["invited","committed","interested"].includes(e))throw new Error("Enter a name of 1–120 characters and select a status.");const o=Pn(),a=Vt(Do(o,"Trips","indonesia-2027","people")),l=Ll(o);if(l.set(a,{name:s,status:e,ownerUid:i.uid,createdAt:In(),updatedAt:In()}),n.trim()||r.trim()){const c={};n.trim()&&(c.phone=n.trim()),r.trim()&&(c.email=r.trim()),l.set(Vt(a,"private","contact"),c)}return await l.commit(),{id:a.id,name:s,status:e}}async function X_(){return(await Bh(Do(Pn(),"Trips","indonesia-2027","people"))).docs.map(e=>{const n=e.data(),r=n.status==="commited"?"committed":n.status==="interest"?"interested":n.status;if(typeof n.name!="string"||!n.name.trim()||!["invited","committed","interested"].includes(r))throw new Error("A guest entry has an invalid name or status. Please check the guest list.");return{id:e.id,name:n.name.trim(),status:r}}).sort((e,n)=>e.name.localeCompare(n.name))}async function Z_(t){const e=Pn(),n=Vt(e,"Trips","indonesia-2027","people",t.uid),r=await oo(n);if(r.exists()){const o=r.data();return{id:r.id,name:o.name,status:o.status}}const i=(t.displayName||"Traveler").trim().slice(0,120),s=Ll(e);return s.set(n,{name:i,status:"interested",ownerUid:t.uid,createdAt:In(),updatedAt:In()}),t.email&&s.set(Vt(n,"private","contact"),{email:t.email}),await s.commit(),{id:n.id,name:i,status:"interested"}}async function Q_(){await Hh(Do(Pn(),"Trips","indonesia-2027","guestEntries"),{enteredAt:In()})}async function ew(t){await jh(Vt(Pn(),"Trips","indonesia-2027","people",t,"private","activity"),{lastSignedInAt:In()})}const Fe=z(null),De=z(null),sr=z(!1),kt=z(""),Gt=st(()=>{var t;return!!(De.value&&((t=Fe.value)==null?void 0:t.id)===De.value.uid)}),oi=z(!1);let Vu=!1;async function Ss(t,e=!1){De.value=t;const n=await Z_(t);Fe.value={id:t.uid,name:n.name},e&&ew(t.uid).catch(()=>{console.warn("The sign-in activity could not be recorded.")})}function Ou(){Fe.value={id:null,name:"Guest"},Q_().catch(()=>{console.warn("The guest entry could not be recorded.")})}function tw(){if(!Vu){Vu=!0;try{d0(Hn(En()),async t=>{if(De.value=t,oi.value){sr.value=!0;return}try{t?await Ss(t):Fe.value=null}catch{kt.value="Signed in, but unable to load your guest profile. Check the connection and try signing in again.",Fe.value=null}finally{sr.value=!0}},()=>{kt.value="Unable to restore your session. Please reload and try again.",sr.value=!0})}catch{kt.value="Sign-in is not configured yet. You can continue as a guest.",sr.value=!0}}}async function Mr(){kt.value="";try{De.value&&await f0(Hn(En())),Fe.value=null}catch{kt.value="Unable to sign out. Please try again."}}const ye=z(new URLSearchParams(window.location.search).has("flightSearch")?"flights":"home");function Ke(t){ye.value=t==="profile"&&!Gt.value?"home":t,window.scrollTo({top:0,behavior:"smooth"})}const ai=20;function qh(t){return{city:t.city.trim(),departureAirports:[...new Set(t.departureAirports.map(e=>e.trim().toUpperCase()))]}}function ao(t){if(!t||typeof t!="object")return!1;const e=t;return typeof e.city=="string"&&e.city.trim().length>0&&e.city.length<=120&&Array.isArray(e.departureAirports)&&e.departureAirports.length>0&&e.departureAirports.length<=ai&&e.departureAirports.every(n=>typeof n=="string"&&/^[A-Z]{3}$/.test(n))&&new Set(e.departureAirports).size===e.departureAirports.length}function zh(t){var e;if(((e=Hn(En()).currentUser)==null?void 0:e.uid)!==t)throw new Error("Please sign in to manage your departure preferences.");return Vt(Pn(),"Trips","indonesia-2027","people",t,"private","travel")}async function nw(t){const e=await oo(zh(t));if(!e.exists())return null;const n=e.data();if(!ao(n))throw new Error("Your saved departure preferences could not be read. Please ask the organizer to check your account.");return{city:n.city,departureAirports:[...n.departureAirports]}}async function rw(t,e){const n=qh(e);if(!ao(n))throw new Error("Enter a city and select 1–20 departure airports.");await jh(zh(t),{...n,updatedAt:In()})}function iw(t){const e=z(null),n=z(null),r=z(!1),i=z(!1),s=z(!1),o=z("");let a=0,l=0,c=null;function u(A){A!==e.value&&(a++,l++,e.value=A,n.value=null,r.value=!1,i.value=!1,s.value=!1,o.value="",c=null)}function h(A=!1){if(!e.value)return Promise.resolve();if(c)return c;if(r.value&&!A)return Promise.resolve();const T=e.value,C=a,S=++l;return i.value=!0,o.value="",c=(async()=>{try{const x=await t.load(T);if(C!==a||S!==l)return;n.value=x,r.value=!0}catch{C===a&&S===l&&(r.value=!1,o.value="Unable to load your departure preferences. Please check your connection and try again.")}finally{C===a&&S===l&&(i.value=!1,c=null)}})(),c}async function p(A){if(!e.value)throw new Error("Please sign in to save your departure preferences.");if(s.value)throw new Error("Your departure preferences are already being saved.");const T=qh(A);if(!ao(T))throw new Error("Enter a city and select 1–20 departure airports.");const C=e.value,S=a;++l,c=null,i.value=!1,s.value=!0;try{if(await t.save(C,T),S!==a)throw new Error("Your account changed. Please sign in and try again.");n.value=T,r.value=!0,o.value=""}finally{S===a&&(s.value=!1)}}const E=st(()=>!!(e.value&&r.value&&!i.value&&!o.value&&ao(n.value)));return{uid:e,preferences:n,loaded:r,loading:i,saving:s,error:o,ready:E,setUser:u,load:h,save:p}}const Te=iw({load:nw,save:rw});xt(()=>{var t;return((t=De.value)==null?void 0:t.uid)??null},t=>Te.setUser(t),{immediate:!0,flush:"sync"});let fs;function sw(){return fs||(fs=fetch("/data/airports.json").then(async t=>{if(!t.ok)throw new Error("Airport list unavailable");return await t.json()}).catch(t=>{throw fs=void 0,t})),fs}const Lu=t=>t.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();function ow(t,e,n){const r=Lu(e.trim());return r.length<2?[]:t.filter(i=>!n.includes(i.code)&&Lu(`${i.code} ${i.city} ${i.name} ${i.country}`).includes(r)).sort((i,s)=>+(s.code.toLowerCase()===r)-+(i.code.toLowerCase()===r)||i.city.localeCompare(s.city)||i.code.localeCompare(s.code)).slice(0,12)}const aw=["aria-labelledby"],lw=["id"],cw={class:"intro"},uw={key:0,role:"status"},dw={key:1,role:"alert"},fw=["disabled"],hw=["for"],pw=["id","aria-describedby"],mw=["id"],gw=["for"],vw={class:"airport-search"},yw=["id","aria-expanded","aria-controls","aria-activedescendant","aria-describedby","disabled"],bw=["id"],_w=["id","aria-selected","onClick"],ww={key:0,class:"hint",role:"status"},Iw={key:1,role:"alert"},Ew={key:2,class:"hint",role:"status"},Tw={key:3,class:"selected-airports","aria-label":"Selected departure airports"},Aw={key:0},Sw=["aria-label","onClick"],kw=["aria-label","onClick"],Pw=["id"],Cw={class:"primary",type:"submit"},xw={key:0,class:"message",role:"alert"},Rw={key:1,class:"message",role:"status"},Nw=ht({__name:"DeparturePreferencesEditor",props:{setup:{type:Boolean,default:!1}},emits:["saved"],setup(t,{emit:e}){const n=t,r=e,i=Xp(),s=$r({city:"",departureAirports:[]}),o=z(""),a=z([]),l=z(!1),c=z(""),u=z(""),h=z(""),p=z(!1),E=z(-1),A=st(()=>ow(a.value,o.value,s.departureAirports)),T=st(()=>new Map(a.value.map(f=>[f.code,f]))),C=st(()=>p.value&&o.value.trim().length>=2&&s.departureAirports.length<ai);xt(()=>Te.preferences.value,f=>{s.city=(f==null?void 0:f.city)??"",s.departureAirports=[...(f==null?void 0:f.departureAirports)??[]]},{immediate:!0}),xt(()=>{var f;return(f=De.value)==null?void 0:f.uid},()=>{o.value="",u.value="",h.value=""}),xt(o,()=>{E.value=-1,h.value=""});async function S(){l.value=!0,c.value="";try{a.value=await sw()}catch{c.value="Unable to load airport choices. Please try again."}finally{l.value=!1}}function x(f){s.departureAirports.length>=ai||s.departureAirports.includes(f.code)||(s.departureAirports.push(f.code),o.value="",E.value=-1,u.value="",h.value="")}function W(f){s.departureAirports=s.departureAirports.filter(m=>m!==f),h.value=""}function M(f){s.departureAirports=[f,...s.departureAirports.filter(m=>m!==f)],h.value=""}function ne(f){if(f.key==="ArrowDown"||f.key==="ArrowUp"){f.preventDefault(),p.value=!0;const m=A.value.length;E.value=m?(E.value+(f.key==="ArrowDown"?1:-1)+m)%m:-1}else if(f.key==="Enter"){f.preventDefault();const m=A.value[Math.max(0,E.value)];C.value&&m&&x(m)}else f.key==="Escape"&&(p.value=!1,E.value=-1)}async function G(){if(!Te.saving.value){if(u.value="",h.value="",o.value.trim()){u.value="Choose an airport from the search results, or clear the airport search before saving.";return}try{await Te.save(s),h.value="Your departure preferences have been saved.",r("saved")}catch(f){u.value=f.code==="permission-denied"?"Unable to save your departure preferences. Please ask the organizer to check account access settings.":f.code?"Unable to save. Your changes are still here; check your connection and try again.":f instanceof Error?f.message:"Unable to save your departure preferences. Please try again."}}}return Br(()=>{Te.load(),S()}),(f,m)=>(P(),O("section",{class:"departure-editor","aria-labelledby":`${D(i)}-heading`},[g("h2",{id:`${D(i)}-heading`},H(n.setup?"Where are you leaving from?":"Departure preferences"),9,lw),g("p",cw,H(n.setup?"Save your city and at least one departure airport to use Flights.":"Update the city and airports you would be willing to leave from."),1),D(Te).loading.value?(P(),O("p",uw,"Loading your departure preferences…")):D(Te).error.value?(P(),O("div",dw,[g("p",null,H(D(Te).error.value),1),g("button",{type:"button",class:"secondary",onClick:m[0]||(m[0]=d=>D(Te).load(!0))},"Try again")])):(P(),O("form",{key:2,onSubmit:Nr(G,["prevent"])},[g("fieldset",{disabled:D(Te).saving.value},[g("label",{for:`${D(i)}-city`},"Departure city",8,hw),oe(g("input",{id:`${D(i)}-city`,"onUpdate:modelValue":m[1]||(m[1]=d=>s.city=d),required:"",maxlength:"120",autocomplete:"address-level2",placeholder:"e.g. Lexington","aria-describedby":`${D(i)}-city-help`},null,8,pw),[[ce,s.city]]),g("p",{id:`${D(i)}-city-help`,class:"hint"},"Just the city you’re leaving from. Your departure preferences stay private.",8,mw),g("label",{for:`${D(i)}-airports`},[...m[7]||(m[7]=[Q("Acceptable departure airports ",-1),g("span",{class:"hint"},"(select at least one)",-1)])],8,gw),g("div",vw,[oe(g("input",{id:`${D(i)}-airports`,"onUpdate:modelValue":m[2]||(m[2]=d=>o.value=d),type:"search",role:"combobox",autocomplete:"off",spellcheck:"false",placeholder:"Search a city, airport name, or code","aria-expanded":C.value&&A.value.length>0,"aria-controls":`${D(i)}-results`,"aria-activedescendant":C.value&&E.value>=0&&A.value[E.value]?`${D(i)}-option-${E.value}`:void 0,"aria-autocomplete":"list","aria-describedby":`${D(i)}-airports-help`,disabled:s.departureAirports.length>=D(ai),onInput:m[3]||(m[3]=d=>p.value=!0),onFocus:m[4]||(m[4]=d=>p.value=!0),onBlur:m[5]||(m[5]=d=>p.value=!1),onKeydown:ne},null,40,yw),[[ce,o.value]]),C.value&&A.value.length?(P(),O("ul",{key:0,id:`${D(i)}-results`,class:"airport-results",role:"listbox","aria-label":"Matching airports"},[(P(!0),O(Se,null,hn(A.value,(d,b)=>(P(),O("li",{id:`${D(i)}-option-${b}`,key:d.code,role:"option","aria-selected":E.value===b,class:vt({highlighted:E.value===b}),onMousedown:m[6]||(m[6]=Nr(()=>{},["prevent"])),onClick:y=>x(d)},[g("strong",null,H(d.code),1),g("span",null,[Q(H(d.name),1),g("small",null,H(d.city||d.name)+" · "+H(d.country),1)])],42,_w))),128))],8,bw)):te("",!0)]),l.value?(P(),O("p",ww,"Loading airport choices…")):c.value?(P(),O("p",Iw,[Q(H(c.value)+" ",1),g("button",{type:"button",class:"text-button",onClick:S},"Retry")])):C.value&&!A.value.length?(P(),O("p",Ew,"No matching airports. Try the three-letter airport code or another city.")):te("",!0),s.departureAirports.length?(P(),O("ul",Tw,[(P(!0),O(Se,null,hn(s.departureAirports,(d,b)=>{var y;return P(),O("li",{key:d},[g("div",null,[g("strong",null,H(d),1),g("span",null,H(((y=T.value.get(d))==null?void 0:y.name)||d),1),b===0?(P(),O("small",Aw,"Default search origin")):te("",!0)]),b!==0?(P(),O("button",{key:0,type:"button",class:"text-button","aria-label":`Use ${d} as default airport`,onClick:_=>M(d)},"Make default",8,Sw)):te("",!0),g("button",{type:"button",class:"remove-airport","aria-label":`Remove ${d}`,onClick:_=>W(d)},"×",8,kw)])}),128))])):te("",!0),g("p",{id:`${D(i)}-airports-help`,class:"hint"},"Save up to "+H(D(ai))+" airports. Your default is a starting point; you can search from any airport in the Flights tool.",9,Pw),g("button",Cw,H(D(Te).saving.value?"Saving…":n.setup?"Save and continue to Flights":"Save departure preferences"),1)],8,fw),u.value?(P(),O("p",xw,H(u.value),1)):te("",!0),h.value?(P(),O("p",Rw,H(h.value),1)):te("",!0)],32))],8,aw))}}),pt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},Gh=pt(Nw,[["__scopeId","data-v-8bde7e0f"]]),Dw={class:"profile-page"},Vw={key:0,role:"status"},Ow={key:1,role:"alert"},Lw=["disabled"],Mw={class:"hint"},Fw={class:"primary"},Uw={key:0,role:"alert"},$w={class:"profile-notice",role:"status","aria-live":"polite"},Bw={key:0,class:"notice"},jw=ht({__name:"ProfilePage",setup(t){const e=$r({name:"",status:"interested",phone:"",email:""}),n=z(!0),r=z(!1),i=z(""),s=z(""),o=z("");let a;async function l(){n.value=!0,i.value="";try{Object.assign(e,await K_())}catch{i.value="Unable to load your profile. Please try again."}finally{n.value=!1}}async function c(){var u,h;if(!r.value){r.value=!0,s.value="",o.value="",clearTimeout(a);try{await J_(e),e.name=e.name.trim(),((u=Fe.value)==null?void 0:u.id)===((h=De.value)==null?void 0:h.uid)&&Fe.value&&(Fe.value.name=e.name),o.value="Your profile has been updated.",a=setTimeout(()=>{o.value=""},5e3)}catch(p){s.value=(p==null?void 0:p.code)==="permission-denied"?"Profile updates are not enabled yet. Please ask the site owner to deploy the updated rules.":"Unable to save your profile. Your changes are still here; please try again."}finally{r.value=!1}}}return Br(l),Bi(()=>clearTimeout(a)),(u,h)=>{var p,E;return P(),O("main",Dw,[g("button",{class:"back",onClick:h[0]||(h[0]=A=>D(Ke)("home"))},"← Back to overview"),h[13]||(h[13]=g("div",{class:"section-eyebrow"},"Your Adventure",-1)),h[14]||(h[14]=g("h1",{class:"section-title"},[Q("My "),g("em",null,"Profile")],-1)),h[15]||(h[15]=g("p",{class:"intro"},"Keep your RSVP and contact details up to date.",-1)),n.value?(P(),O("p",Vw,"Loading your profile…")):i.value?(P(),O("div",Ow,[g("p",null,H(i.value),1),g("button",{class:"primary",onClick:l},"Try again")])):(P(),O("form",{key:2,onSubmit:Nr(c,["prevent"])},[g("fieldset",{disabled:r.value},[g("label",null,[h[6]||(h[6]=Q("Name",-1)),oe(g("input",{"onUpdate:modelValue":h[1]||(h[1]=A=>e.name=A),required:"",maxlength:"120",pattern:".*\\S.*",autocomplete:"name"},null,512),[[ce,e.name]])]),g("label",null,[h[8]||(h[8]=Q("Status",-1)),oe(g("select",{"onUpdate:modelValue":h[2]||(h[2]=A=>e.status=A),required:""},[...h[7]||(h[7]=[g("option",{value:"invited"},"Invited",-1),g("option",{value:"committed"},"Committed",-1),g("option",{value:"interested"},"Interested",-1)])],512),[[nf,e.status]])]),g("label",null,[h[9]||(h[9]=Q("Phone Number (optional)",-1)),oe(g("input",{"onUpdate:modelValue":h[3]||(h[3]=A=>e.phone=A),type:"tel",maxlength:"40",autocomplete:"tel"},null,512),[[ce,e.phone]])]),g("label",null,[h[10]||(h[10]=Q("Contact Email (optional)",-1)),oe(g("input",{"onUpdate:modelValue":h[4]||(h[4]=A=>e.email=A),type:"email",maxlength:"254",autocomplete:"email"},null,512),[[ce,e.email]])]),h[11]||(h[11]=g("p",{class:"hint"},"Your name and status appear on the attendants list. Your phone and contact email stay private.",-1)),g("p",Mw,"Sign-in email: "+H((p=D(De))==null?void 0:p.email)+". Changing your contact email does not change your sign-in email.",1),g("button",Fw,H(r.value?"Saving…":"Save Changes"),1)],8,Lw),s.value?(P(),O("p",Uw,H(s.value),1)):te("",!0)],32)),(P(),Me(Gh,{key:(E=D(De))==null?void 0:E.uid})),(P(),Me(Ed,{to:"body"},[g("div",$w,[o.value?(P(),O("div",Bw,[h[12]||(h[12]=g("span",{"aria-hidden":"true"},"✓",-1)),Q(" "+H(o.value),1),g("button",{"aria-label":"Dismiss notification",onClick:h[5]||(h[5]=A=>o.value="")},"×")])):te("",!0)])]))])}}}),Hw=pt(jw,[["__scopeId","data-v-1005cb6e"]]),Mu=["origin","destination","originCity","destinationCity","departureTime","arrivalTime","departureDate","arrivalDate","duration","stops"],Qr=(t,e)=>typeof t=="string"&&t.length<=e,Fu=t=>typeof t=="string"&&/^(?:[A-Z]{3})?$/.test(t),Uu=t=>typeof t=="string"&&/^(?:\d{4}-\d{2}-\d{2})?$/.test(t);function Ww(t){if(!t||typeof t!="object")return!1;const e=t;return Object.keys(e).length===Mu.length&&Mu.every(n=>n in e)&&Fu(e.origin)&&Fu(e.destination)&&Qr(e.originCity,120)&&Qr(e.destinationCity,120)&&Qr(e.departureTime,30)&&Qr(e.arrivalTime,30)&&Uu(e.departureDate)&&Uu(e.arrivalDate)&&Qr(e.duration,80)&&Array.isArray(e.stops)&&e.stops.length<=6&&e.stops.every(n=>typeof n=="string"&&/^[A-Z]{3}$/.test(n))}function Ml(t){return Array.isArray(t)&&t.length<=2&&t.every(Ww)}function qw(t){if(Ml(t.legs)&&t.legs.length)return t.legs;const e={originCity:"",destinationCity:"",departureTime:"",arrivalTime:"",arrivalDate:"",duration:"",stops:[]},n={...e,origin:t.origin,destination:t.destination,departureDate:t.departure};return t.returnDate?[n,{...e,origin:t.destination,destination:t.origin,departureDate:t.returnDate}]:[n]}const Fl=()=>Do(Pn(),"Trips","indonesia-2027","flights");function Kh(t){try{const e=new URL(t);return e.protocol==="https:"&&!e.username&&!e.password?e.href:""}catch{return""}}function $u(t){const e=new Date(`${t}T00:00:00Z`);return/^\d{4}-\d{2}-\d{2}$/.test(t)&&Number.isFinite(e.getTime())&&e.toISOString().slice(0,10)===t}async function zw(t){var i;const e=Hn(En()).currentUser;if(!e)throw new Error("Please sign in to save a flight.");const n={...t,origin:t.origin.trim().toUpperCase(),destination:t.destination.trim().toUpperCase(),airline:t.airline.trim(),flightNumbers:t.flightNumbers.trim(),currency:t.currency.trim().toUpperCase(),link:t.link.trim(),notes:t.notes.trim(),legs:t.legs??[],fareSummary:((i=t.fareSummary)==null?void 0:i.trim())??""};if(!/^[A-Z]{3}$/.test(n.origin)||!/^[A-Z]{3}$/.test(n.destination)||n.origin===n.destination||!$u(n.departure)||n.returnDate!==""&&(!$u(n.returnDate)||n.returnDate<n.departure)||!n.airline||n.airline.length>120||n.flightNumbers.length>120||!Number.isFinite(n.price)||n.price<=0||n.price>1e6||!/^[A-Z]{3}$/.test(n.currency)||n.link.length>2e3||n.link!==""&&!Kh(n.link)||n.notes.length>2e3||!Ml(n.legs)||n.fareSummary.length>240)throw new Error("Check the airports, dates, airline, price, and HTTPS link before saving.");const r=await Hh(Fl(),{...n,ownerUid:e.uid,savedAt:In()});return{...n,id:r.id,ownerUid:e.uid,savedAt:null}}async function Gw(){return(await Bh(j_(Fl(),H_("savedAt","desc"),W_(100)))).docs.map(e=>{const n=e.data();return{...n,legs:Ml(n.legs)?n.legs:[],fareSummary:typeof n.fareSummary=="string"?n.fareSummary:"",id:e.id,savedAt:n.savedAt instanceof Ie?n.savedAt.toDate():null}})}async function Kw(t){await z_(Vt(Fl(),t))}const Jw=["aria-label"],Yw={class:"fare-panel"},Xw={class:"snapshot-badge"},Zw={class:"fare-price"},Qw={class:"currency"},e1={key:0,class:"fare-pill"},t1=["href"],n1={key:2,class:"missing-link"},r1=["disabled"],i1={class:"itinerary-panel"},s1={class:"airline"},o1={class:"airline-mark","aria-hidden":"true"},a1=["aria-label"],l1={class:"direction"},c1={class:"endpoint origin"},u1={class:"flight-time"},d1={class:"city"},f1={class:"flight-date"},h1=["aria-label"],p1={class:"route-caption"},m1={key:0},g1={key:1},v1={class:"route-track","aria-hidden":"true"},y1={class:"airport-row"},b1={class:"endpoint arrival"},_1={class:"flight-time"},w1={class:"city"},I1={class:"flight-date"},E1={key:0,class:"extra-details"},T1={key:0},A1={key:1,class:"notes"},S1={key:1,class:"saved-at"},k1=ht({__name:"SavedFlightCard",props:{flight:{},preview:{type:Boolean,default:!1},canRemove:{type:Boolean,default:!1},removing:{type:Boolean,default:!1},disableRemove:{type:Boolean,default:!1}},emits:["remove"],setup(t){const e=t,n=st(()=>qw(e.flight)),r=st(()=>Kh(e.flight.link)),i=st(()=>{if(!e.flight.price)return"Add price";try{return new Intl.NumberFormat(void 0,{style:"currency",currency:e.flight.currency,maximumFractionDigits:2,minimumFractionDigits:0}).format(e.flight.price)}catch{return`${e.flight.currency} ${e.flight.price}`}}),s=st(()=>e.flight.airline.trim().split(/\s+/).slice(0,2).map(a=>a[0]).join("").toUpperCase()||"✈");function o(a){if(!a)return"";const l=new Date(`${a}T12:00:00`);return Number.isNaN(l.getTime())?"":l.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric",year:"numeric"})}return(a,l)=>(P(),O("article",{class:"flight-option","aria-label":`${t.flight.airline||"Flight"}: ${t.flight.origin} to ${t.flight.destination}`},[g("div",Yw,[g("span",Xw,H(t.preview?"Preview":"Saved flight"),1),g("strong",Zw,H(i.value),1),g("span",Qw,H(t.flight.currency)+" · "+H(t.flight.returnDate?"Round trip":"One way"),1),t.flight.fareSummary?(P(),O("div",e1,[l[1]||(l[1]=g("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7","aria-hidden":"true"},[g("rect",{x:"5",y:"6",width:"14",height:"15",rx:"3"}),g("path",{d:"M9 6V3h6v3M9 10v7m6-7v7"})],-1)),g("span",null,H(t.flight.fareSummary),1)])):te("",!0),r.value&&!t.preview?(P(),O("a",{key:1,class:"view-button",href:r.value,target:"_blank",rel:"noopener noreferrer"},[...l[2]||(l[2]=[Q("View flight ",-1),g("span",{"aria-hidden":"true"},"↗",-1)])],8,t1)):t.preview?te("",!0):(P(),O("p",n1,"No provider link saved")),t.canRemove?(P(),O("button",{key:3,type:"button",class:"remove-button",disabled:t.disableRemove,onClick:l[0]||(l[0]=c=>a.$emit("remove"))},H(t.removing?"Removing…":"Remove saved flight"),9,r1)):te("",!0)]),g("div",i1,[g("header",s1,[g("span",o1,H(s.value),1),g("h3",null,H(t.flight.airline||"Add airline"),1)]),(P(!0),O(Se,null,hn(n.value,(c,u)=>(P(),O("div",{key:u,class:"journey","aria-label":u===0?"Outbound flight":"Return flight"},[g("span",l1,H(u===0?"Outbound":"Return"),1),g("div",c1,[g("strong",u1,H(c.departureTime||"Time not saved"),1),g("span",d1,H(c.originCity||c.origin),1),g("span",f1,H(o(c.departureDate)||"Add date"),1)]),g("div",{class:"route","aria-label":[c.origin,...c.stops,c.destination].filter(Boolean).join(" → ")},[g("div",p1,[c.duration?(P(),O("span",m1,"Travel time: "+H(c.duration),1)):(P(),O("span",g1,"Travel time not saved"))]),g("div",v1,[(P(!0),O(Se,null,hn(c.stops.length+1,h=>(P(),O("span",{key:h}))),128))]),g("div",y1,[(P(!0),O(Se,null,hn([c.origin,...c.stops,c.destination],(h,p)=>(P(),O("span",{key:p},H(h||"—"),1))),128))])],8,h1),g("div",b1,[g("strong",_1,H(c.arrivalTime||"Time not saved"),1),g("span",w1,H(c.destinationCity||c.destination),1),g("span",I1,H(o(c.arrivalDate)),1)])],8,a1))),128)),t.flight.notes||t.flight.flightNumbers?(P(),O("details",E1,[l[3]||(l[3]=g("summary",null,"Flight details and notes",-1)),t.flight.flightNumbers?(P(),O("p",T1,"Flight numbers: "+H(t.flight.flightNumbers),1)):te("",!0),t.flight.notes?(P(),O("p",A1,H(t.flight.notes),1)):te("",!0)])):te("",!0),t.preview?te("",!0):(P(),O("p",S1,"Saved "+H(t.flight.savedAt?t.flight.savedAt.toLocaleString():"just now")+" · Price and availability may have changed.",1))])],8,Jw))}}),Bu=pt(k1,[["__scopeId","data-v-8fd9ed8b"]]),P1={class:"saved-flights","aria-labelledby":"saved-flights-title"},C1=["aria-expanded","disabled"],x1={key:1,class:"hint"},R1={key:0,class:"capture-review",role:"status"},N1=["disabled"],D1=["required","min"],V1={class:"wide"},O1={class:"wide"},L1={key:0,class:"wide itinerary-editor"},M1=["aria-label"],F1={key:0},U1=["onUpdate:modelValue"],$1={key:1},B1=["onUpdate:modelValue"],j1=["onUpdate:modelValue"],H1=["onUpdate:modelValue"],W1=["onUpdate:modelValue"],q1=["onUpdate:modelValue"],z1=["onUpdate:modelValue","min"],G1=["onUpdate:modelValue"],K1={class:"wide"},J1=["value","onChange"],Y1={key:1,class:"wide review-check"},X1={type:"submit"},Z1={key:3,role:"status"},Q1={key:4,role:"alert"},eI={class:"list-heading"},tI=["disabled"],nI={key:5,role:"alert"},rI={key:6},iI={key:7,class:"hint"},sI={class:"flight-list"},oI=ht({__name:"SavedFlights",setup(t,{expose:e}){const n=z([]),r=z(!1),i=z(!1),s=z(""),o=z(""),a=z(""),l=z(""),c=z(!1),u=z([]),h=z(null),p=z(!1),E=z(!1),A=()=>({origin:"",destination:"DPS",departure:"2027-06-25",returnDate:"2027-07-11",airline:"",flightNumbers:"",price:0,currency:"USD",link:"",notes:"",legs:[],fareSummary:""}),T=$r(A()),C=st(()=>{var G;return{...T,legs:(G=T.legs)==null?void 0:G.map((f,m)=>({...f,...m===0?{origin:T.origin.trim().toUpperCase(),destination:T.destination.trim().toUpperCase()}:{},departureDate:m===0?T.departure:T.returnDate}))}});function S(G,f){var m;(m=T.legs)!=null&&m[G]&&(T.legs[G].stops=f.target.value.toUpperCase().split(/[\s,]+/).filter(Boolean))}async function x(G){var f,m,d;i.value||(Object.assign(T,G.details),u.value=G.warnings,E.value=G.returnExpected,p.value=!1,a.value="",l.value="",c.value=!0,await vo(),(f=h.value)==null||f.scrollIntoView({behavior:"smooth",block:"start"}),(d=(m=h.value)==null?void 0:m.querySelector("input"))==null||d.focus({preventScroll:!0}))}e({reviewCapture:x});async function W(){r.value=!0,o.value="";try{n.value=await Gw()}catch{o.value="Unable to load saved flights. Check your connection and try again."}finally{r.value=!1}}async function M(){if(!i.value){if(u.value.length&&!p.value){a.value="Review the captured details and confirm they are correct before saving.";return}i.value=!0,a.value="",l.value="";try{const G=await zw(C.value);n.value=[G,...n.value].slice(0,100),Object.assign(T,A()),u.value=[],E.value=!1,p.value=!1,c.value=!1,l.value="Flight saved and shared with the group."}catch(G){a.value=G.code?"Unable to save this flight. Check your connection and ask the organizer to check flight access settings if this continues.":G instanceof Error?G.message:"Unable to save this flight."}finally{i.value=!1}}}async function ne(G){if(!s.value){s.value=G.id,a.value="",l.value="";try{await Kw(G.id),n.value=n.value.filter(f=>f.id!==G.id),l.value="Saved flight removed."}catch{a.value="Unable to remove this flight. Please try again."}finally{s.value=""}}}return Br(W),(G,f)=>{var m;return P(),O("section",P1,[f[36]||(f[36]=g("h2",{id:"saved-flights-title"},"Flights to share",-1)),f[37]||(f[37]=g("p",null,"Found a flight you like? Save its details below so everyone can compare options. Saved flights are visible to everyone who visits this site.",-1)),f[38]||(f[38]=g("p",{class:"hint"},"Open a search result’s full details and choose Capture this flight to fill this form automatically. You can also enter a flight manually. Saved prices may change; check the provider for current fares and availability.",-1)),D(De)?(P(),O("button",{key:0,type:"button","aria-expanded":c.value,"aria-controls":"save-flight-form",disabled:i.value,onClick:f[0]||(f[0]=d=>c.value=!c.value)},H(c.value?"Close form":"Enter a flight manually"),9,C1)):(P(),O("p",x1,"Sign in to save a flight for the group.")),c.value&&D(De)?(P(),O("form",{key:2,id:"save-flight-form",ref_key:"formElement",ref:h,onSubmit:Nr(M,["prevent"])},[u.value.length?(P(),O("div",R1,[f[13]||(f[13]=g("h3",null,"Review captured flight",-1)),g("ul",null,[(P(!0),O(Se,null,hn(u.value,d=>(P(),O("li",{key:d},H(d),1))),128))])])):te("",!0),u.value.length?(P(),Me(Bu,{key:1,flight:C.value,preview:"",class:"capture-preview"},null,8,["flight"])):te("",!0),g("fieldset",{disabled:i.value},[g("label",null,[f[14]||(f[14]=Q("From (airport code)",-1)),oe(g("input",{"onUpdate:modelValue":f[1]||(f[1]=d=>T.origin=d),required:"",pattern:"[A-Za-z]{3}",maxlength:"3",placeholder:"IND"},null,512),[[ce,T.origin]])]),g("label",null,[f[15]||(f[15]=Q("To (airport code)",-1)),oe(g("input",{"onUpdate:modelValue":f[2]||(f[2]=d=>T.destination=d),required:"",pattern:"[A-Za-z]{3}",maxlength:"3"},null,512),[[ce,T.destination]])]),g("label",null,[f[16]||(f[16]=Q("Departure date",-1)),oe(g("input",{"onUpdate:modelValue":f[3]||(f[3]=d=>T.departure=d),type:"date",required:""},null,512),[[ce,T.departure]])]),g("label",null,[Q("Return date"+H(E.value?"":" (optional)"),1),oe(g("input",{"onUpdate:modelValue":f[4]||(f[4]=d=>T.returnDate=d),type:"date",required:E.value,min:T.departure},null,8,D1),[[ce,T.returnDate]])]),g("label",null,[f[17]||(f[17]=Q("Airline(s)",-1)),oe(g("input",{"onUpdate:modelValue":f[5]||(f[5]=d=>T.airline=d),required:"",maxlength:"120",placeholder:"e.g. Qatar Airways"},null,512),[[ce,T.airline]])]),g("label",null,[f[18]||(f[18]=Q("Flight numbers (optional)",-1)),oe(g("input",{"onUpdate:modelValue":f[6]||(f[6]=d=>T.flightNumbers=d),maxlength:"120",placeholder:"e.g. QR 706, QR 960"},null,512),[[ce,T.flightNumbers]])]),g("label",null,[f[19]||(f[19]=Q("Total price shown",-1)),oe(g("input",{"onUpdate:modelValue":f[7]||(f[7]=d=>T.price=d),type:"number",required:"",min:"0.01",max:"1000000",step:"0.01"},null,512),[[ce,T.price,void 0,{number:!0}]])]),g("label",null,[f[20]||(f[20]=Q("Currency code",-1)),oe(g("input",{"onUpdate:modelValue":f[8]||(f[8]=d=>T.currency=d),required:"",pattern:"[A-Za-z]{3}",maxlength:"3",placeholder:"USD"},null,512),[[ce,T.currency]])]),g("label",V1,[f[21]||(f[21]=Q("Flight or search link (optional, HTTPS)",-1)),oe(g("input",{"onUpdate:modelValue":f[9]||(f[9]=d=>T.link=d),type:"url",pattern:"https://.*",maxlength:"2000",placeholder:"https://…"},null,512),[[ce,T.link]])]),g("label",O1,[f[22]||(f[22]=Q("Details (optional)",-1)),oe(g("textarea",{"onUpdate:modelValue":f[10]||(f[10]=d=>T.notes=d),maxlength:"2000",rows:"4",placeholder:"Departure/arrival times, layovers, cabin, baggage, passengers included in the price…"},null,512),[[ce,T.notes]])]),(m=T.legs)!=null&&m.length?(P(),O("details",L1,[f[33]||(f[33]=g("summary",null,"Adjust captured times, cities, and stops",-1)),(P(!0),O(Se,null,hn(T.legs,(d,b)=>(P(),O("section",{key:b,class:"leg-editor","aria-label":b===0?"Outbound details":"Return details"},[g("h3",null,H(b===0?"Outbound":"Return")+" details",1),b>0?(P(),O("label",F1,[f[23]||(f[23]=Q("Return origin airport",-1)),oe(g("input",{"onUpdate:modelValue":y=>d.origin=y,pattern:"[A-Za-z]{3}",maxlength:"3"},null,8,U1),[[ce,d.origin]])])):te("",!0),b>0?(P(),O("label",$1,[f[24]||(f[24]=Q("Return destination airport",-1)),oe(g("input",{"onUpdate:modelValue":y=>d.destination=y,pattern:"[A-Za-z]{3}",maxlength:"3"},null,8,B1),[[ce,d.destination]])])):te("",!0),g("label",null,[f[25]||(f[25]=Q("Departure city",-1)),oe(g("input",{"onUpdate:modelValue":y=>d.originCity=y,maxlength:"120"},null,8,j1),[[ce,d.originCity]])]),g("label",null,[f[26]||(f[26]=Q("Arrival city",-1)),oe(g("input",{"onUpdate:modelValue":y=>d.destinationCity=y,maxlength:"120"},null,8,H1),[[ce,d.destinationCity]])]),g("label",null,[f[27]||(f[27]=Q("Departure time",-1)),oe(g("input",{"onUpdate:modelValue":y=>d.departureTime=y,maxlength:"30",placeholder:"e.g. 12:30 pm"},null,8,W1),[[ce,d.departureTime]])]),g("label",null,[f[28]||(f[28]=Q("Arrival time",-1)),oe(g("input",{"onUpdate:modelValue":y=>d.arrivalTime=y,maxlength:"30",placeholder:"e.g. 11:50 pm"},null,8,q1),[[ce,d.arrivalTime]])]),g("label",null,[f[29]||(f[29]=Q("Arrival date",-1)),oe(g("input",{"onUpdate:modelValue":y=>d.arrivalDate=y,type:"date",min:b===0?T.departure:T.returnDate},null,8,z1),[[ce,d.arrivalDate]])]),g("label",null,[f[30]||(f[30]=Q("Travel time",-1)),oe(g("input",{"onUpdate:modelValue":y=>d.duration=y,maxlength:"80",placeholder:"e.g. 22h 20m"},null,8,G1),[[ce,d.duration]])]),g("label",K1,[f[31]||(f[31]=Q("Connection airports (comma separated)",-1)),g("input",{value:d.stops.join(", "),maxlength:"28",pattern:"(?:[A-Za-z]{3}(?:[, ]+[A-Za-z]{3})*)?",placeholder:"e.g. ICN",onChange:y=>S(b,y)},null,40,J1)])],8,M1))),128)),g("label",null,[f[32]||(f[32]=Q("Fare / baggage summary",-1)),oe(g("input",{"onUpdate:modelValue":f[11]||(f[11]=d=>T.fareSummary=d),maxlength:"240"},null,512),[[ce,T.fareSummary]])])])):te("",!0),u.value.length?(P(),O("label",Y1,[oe(g("input",{"onUpdate:modelValue":f[12]||(f[12]=d=>p.value=d),type:"checkbox",required:""},null,512),[[wg,p.value]]),f[34]||(f[34]=Q(" I checked the captured details and corrected anything missing.",-1))])):te("",!0),g("button",X1,H(i.value?"Saving…":"Save and share flight"),1)],8,N1)],544)):te("",!0),l.value?(P(),O("p",Z1,H(l.value),1)):te("",!0),a.value?(P(),O("p",Q1,H(a.value),1)):te("",!0),g("div",eI,[f[35]||(f[35]=g("h3",null,"Saved flights",-1)),g("button",{type:"button",disabled:r.value||i.value,onClick:W},H(r.value?"Loading…":"Refresh"),9,tI)]),o.value?(P(),O("p",nI,H(o.value),1)):!r.value&&!n.value.length?(P(),O("p",rI,"No flights saved yet. Share the first option for the trip.")):te("",!0),n.value.length?(P(),O("p",iI,"Showing the "+H(n.value.length)+" most recent saved flights.",1)):te("",!0),g("div",sI,[(P(!0),O(Se,null,hn(n.value,d=>{var b;return P(),Me(Bu,{key:d.id,flight:d,"can-remove":((b=D(De))==null?void 0:b.uid)===d.ownerUid,removing:s.value===d.id,"disable-remove":!!s.value,onRemove:y=>ne(d)},null,8,["flight","can-remove","removing","disable-remove","onRemove"])}),128))])])}}}),aI=pt(oI,[["__scopeId","data-v-0dc7ee9f"]]),lo=t=>`[class*="${t}___"]`,Ge=(t,e)=>t.querySelector(lo(e)),Xn=(t,e)=>Array.from(t.querySelectorAll(lo(e))),rt=t=>{var e;return((e=t==null?void 0:t.textContent)==null?void 0:e.replace(/\s+/g," ").trim())??""};function ju(t){const e=t.replace(/[^\d.,]/g,"");if(!e)return 0;const n=/[.,](\d{1,2})$/.exec(e),r=n?+`${e.slice(0,n.index).replace(/\D/g,"")}.${n[1]}`:Number(e.replace(/\D/g,""));return Number.isFinite(r)?r:0}function oa(t,e){var h,p,E;const n=(h=/\b(\d{4}-\d{2}-\d{2})\b/.exec(t))==null?void 0:h[1];if(n)return n;const i=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"].findIndex(A=>t.toLowerCase().includes(A)),s=Number((p=t.match(/\b\d{1,2}\b/))==null?void 0:p[0]);if(i<0||!s)return"";const o=(E=t.match(/\b20\d{2}\b/))==null?void 0:E[0];let a=o?Number(o):e.getFullYear(),l=new Date(a,i,s);if(!o&&l<new Date(e.getFullYear(),e.getMonth(),e.getDate())&&(l=new Date(++a,i,s)),l.getMonth()!==i||l.getDate()!==s)return"";const u=["sun","mon","tue","wed","thu","fri","sat"].findIndex(A=>t.toLowerCase().includes(A));return u>=0&&u!==l.getDay()?"":`${a}-${String(i+1).padStart(2,"0")}-${String(s).padStart(2,"0")}`}function Zn(t){var e,n;return((n=(e=rt(t?Ge(t,"FlightItem-module__airport"):null).match(/\b[A-Z]{3}\s*$/))==null?void 0:e[0])==null?void 0:n.trim())??""}function lI(t){return["day","time","city","airport"].map(e=>rt(Ge(t,`FlightItem-module__${e}`))).filter(Boolean).join(" · ")}function ks(t){return t?Array.from(t.childNodes).map(e=>e.nodeType===3?e.textContent:e.nodeType===1?ks(e):"").join(" ").replace(/\s+/g," ").trim():""}function cI(t,e){var f,m,d;const n=Xn(t,"TicketFlights-module__root");if(!n.length)throw new Error("Flight details are still loading or could not be read. Open a flight’s full details and try again, or use the manual form.");if(n.length>2)throw new Error("This itinerary has multiple destinations. Please use the manual form and include all legs in the notes.");const r=n.map(b=>Xn(b,"FlightItem-module__root"));if(r.some(b=>b.length<2))throw new Error("The itinerary is incomplete. Wait for the flight details to finish loading and try again.");const i=Zn(r[0][0]),s=Zn(r[0][r[0].length-1]),o=[...new Set(Xn(t,"ItineraryFlight-module__airlineName").map(rt).filter(Boolean))],a=e.now??new Date,l=oa(rt(Ge(r[0][0],"FlightItem-module__day")),a),c=r[1]?oa(rt(Ge(r[1][0],"FlightItem-module__day")),l?new Date(`${l}T12:00:00`):a):"",h=Xn(t,"ProposaCard-module__root").find(b=>{const y=Ge(b,"ProposaCard-module__price");return y&&!y.className.includes("ProposaCard-module__disabled___")}),p=h?rt(Ge(h,"ProposaCard-module__price")):"",E=((m=(f=e.currency)==null?void 0:f.match(/^[A-Z]{3}$/))==null?void 0:m[0])??((d=p.match(/\b[A-Z]{3}\b/))==null?void 0:d[0])??"",A=["Check the captured dates (including the year), price, currency, and passengers before sharing."];(!i||!s||!l||n.length===2&&!c||!o.length||!ju(p)||!E)&&A.push("Some details could not be read. Complete the blank fields before saving."),r[1]&&(Zn(r[1][0])!==s||Zn(r[1][r[1].length-1])!==i)&&A.push("The return uses different airports. Review both legs in the notes.");const T=n.map((b,y)=>{const _=Xn(b,"ItineraryFlight-module__root").map(se=>{const Oe=Xn(se,"FlightItem-module__root");return[rt(Ge(se,"ItineraryFlight-module__airlineName")),...Oe.map(lI)].filter(Boolean).join(`
`)}),v=Xn(b,"ItineraryTransfer-module__root").map(se=>`Layover: ${ks(se)}`);return[y===0?"Outbound":"Return",..._,...v].join(`
`)}),C=n.map((b,y)=>{const _=r[y],v=_[0],se=_[_.length-1],Oe=y===0?l:c,Pe=_.map(Tt=>Zn(Tt)).filter(Boolean),pe=Pe.filter((Tt,qn)=>qn===0||Tt!==Pe[qn-1]).slice(1,-1);return pe.length>6&&A.push("Only the first six connection airports fit on the card; check the full itinerary notes."),{origin:Zn(v),destination:Zn(se),originCity:rt(Ge(v,"FlightItem-module__city")).slice(0,120),destinationCity:rt(Ge(se,"FlightItem-module__city")).slice(0,120),departureTime:rt(Ge(v,"FlightItem-module__time")).slice(0,30),arrivalTime:rt(Ge(se,"FlightItem-module__time")).slice(0,30),departureDate:Oe,arrivalDate:oa(rt(Ge(se,"FlightItem-module__day")),Oe?new Date(`${Oe}T12:00:00`):a),duration:rt(Ge(b,"FlightHead-module__time")).replace(/^Travel time:\s*/i,"").slice(0,80),stops:pe.slice(0,6)}}),S=ks(Ge(t,"TicketFare-module__root"));S&&T.push(`Fare shown: ${S}`),h&&T.push(`Displayed offer: ${ks(Ge(h,"ProposaCard-module__name"))} ${p}`),T.push("Flight numbers and passenger count may need to be added from the provider.");const x=new URL(e.url),W=new URLSearchParams;for(const b of["flightSearch","origin_airports","destination_airports","language","locale"]){const y=x.searchParams.get(b);y&&W.set(b,y)}let M="";for(const b of t.querySelectorAll("a[href]"))try{const y=new URL(b.href).searchParams.get("fallback_url");if(!y)continue;const _=new URL(y);if(_.origin===x.origin&&_.pathname===x.pathname&&_.searchParams.get("flightSearch")===x.searchParams.get("flightSearch")&&(M=_.searchParams.get("ticketId")??"",M))break}catch{}M&&W.set("ticketId",M),E&&W.set("currency",E);const ne=x.protocol==="https:"&&W.has("flightSearch")?`${x.origin}${x.pathname}?${W}`:"";M||A.push("The link reopens the search; the selected flight could not be identified.");const G=T.join(`

`);return G.length>2e3&&A.push("The itinerary notes were shortened. Review them before saving."),{details:{origin:i,destination:s,departure:l,returnDate:c,airline:o.join(", ").slice(0,120),flightNumbers:"",price:ju(p),currency:E,link:ne.length<=2e3?ne:"",notes:G.slice(0,2e3),legs:C,fareSummary:S.slice(0,240)},warnings:A,returnExpected:n.length===2}}function uI(t){let e=null,n=!1;const r=new Set,i=new MutationObserver(()=>s());function s(){var l;if(n)return;for(const c of r)c.isConnected||r.delete(c);const a=(l=document.getElementById("tpwl-modals"))==null?void 0:l.shadowRoot;if(a){a!==e&&(i.disconnect(),e=a,i.observe(a,{subtree:!0,childList:!0}));for(const c of a.querySelectorAll(lo("TicketDetail-module__root"))){let u=c.querySelector("[data-trip-capture]");const h=Ge(c,"TicketDetail-module__head");if(!h)continue;if(!u){u=document.createElement("button"),u.type="button",u.dataset.tripCapture="",u.style.cssText="font:inherit;font-size:14px;font-weight:600;line-height:1.3;padding:10px 14px;border:2px solid #1b4f5a;border-radius:8px;background:#1b4f5a;color:#fff;cursor:pointer;max-width:180px;flex-shrink:0;white-space:normal",u.addEventListener("click",A=>{var T,C;if(A.stopPropagation(),!(!t.canCapture()||!t.isActive()))try{const S=(T=document.getElementById("tpwl-search"))==null?void 0:T.shadowRoot,x=window.TPWL_BACKEND_CONFIGURATION,W=rt((S==null?void 0:S.querySelector('[data-testid="localization-button-currencies"]'))??null)||new URL(window.location.href).searchParams.get("currency")||(x==null?void 0:x.defaultCurrency)||"",M=cI(c,{url:window.location.href,currency:W});t.onCapture(M),(C=c.querySelector(lo("TicketDetail-module__close")))==null||C.click()}catch(S){let x=h.querySelector("[data-trip-capture-error]");x||(x=document.createElement("p"),x.dataset.tripCaptureError="",x.setAttribute("role","alert"),x.style.cssText="font-size:14px;line-height:1.4;color:#8c291e;flex-basis:100%",h.append(x)),x.textContent=S instanceof Error?S.message:"Could not capture this flight. Please try again.",t.onError(x.textContent)}}),h.append(u);const E=h;E.style.flexWrap="wrap",E.style.gap="12px",r.add(u)}const p=t.canCapture()?"Capture this flight":"Sign in to capture";u.textContent!==p&&(u.textContent=p),u.disabled=!t.canCapture()||!t.isActive()}}}const o=window.setInterval(()=>{var a;((a=document.getElementById("tpwl-modals"))==null?void 0:a.shadowRoot)!==e&&s()},500);return s(),{refresh:s,stop(){n=!0,window.clearInterval(o),i.disconnect();for(const a of r)a.remove();r.clear()}}}const dI={class:"flights-page"},fI={key:0,class:"flight-card access-prompt","aria-label":"Sign in to use Flights"},hI={key:1,role:"status"},pI={key:2,class:"flight-card",role:"alert"},mI={key:4},gI={class:"departure-summary","aria-label":"Your departure preferences"},vI={class:"hint"},yI={class:"flight-card","aria-label":"Search flights to Bali"},bI={key:0,role:"alert",class:"hint"},_I={key:1,role:"alert",class:"hint"},wI={class:"fallback"},II={action:"https://www.google.com/travel/flights",method:"get",target:"_blank",rel:"noopener noreferrer"},EI=["value"],TI=ht({__name:"FlightsPage",setup(t){const e=z(!1),n=z(!1),r=z(""),i=z(null),s=z(""),o=st(()=>Gt.value&&Te.ready.value);let a=!1,l=!1,c;xt([Gt,()=>{var h;return(h=De.value)==null?void 0:h.uid},ye],()=>{Gt.value&&ye.value==="flights"&&Te.load()},{immediate:!0}),xt(()=>Te.preferences.value,h=>{h?r.value=h.departureAirports[0]??"":(r.value="",s.value="")}),xt([o,ye,Fe],async()=>{var T,C,S,x;const h=o.value&&ye.value==="flights"&&!!Fe.value;if(document.body.classList.toggle("flight-tool-blocked",!h),!h){const W=(T=document.getElementById("tpwl-modals"))==null?void 0:T.shadowRoot;if(W!=null&&W.querySelector('[class*="Modal-module__root___"]')){const M=Math.min(W.querySelectorAll('[class*="Modal-module__root___"]').length,10);for(let ne=0;ne<M;ne++)document.dispatchEvent(new KeyboardEvent("keyup",{key:"Escape"}));document.body.style.overflow==="hidden"&&(document.body.style.overflow="")}}if(c==null||c.refresh(),!h||a||l)return;l=!0;const p=(C=De.value)==null?void 0:C.uid;if(n.value=!0,r.value=((S=Te.preferences.value)==null?void 0:S.departureAirports[0])??"",await vo(),l=!1,!o.value||ye.value!=="flights"||((x=De.value)==null?void 0:x.uid)!==p)return;a=!0;const E=window;E.TPWL_CONFIGURATION={...E.TPWL_CONFIGURATION,flightParams:{origin:r.value,destination:"DPS"}},c=uI({canCapture:()=>o.value,isActive:()=>o.value&&!!Fe.value&&ye.value==="flights",onCapture:W=>{var M;s.value="",(M=i.value)==null||M.reviewCapture(W)},onError:W=>{s.value=W}});const A=document.createElement("script");A.async=!0,A.type="module",A.src="https://tpscr.com/wl_web/main.js?wl_id=23798",A.addEventListener("error",()=>{e.value=!0},{once:!0}),document.head.appendChild(A)},{immediate:!0,flush:"post"}),Bi(()=>{c==null||c.stop(),document.body.classList.remove("flight-tool-blocked")});const u=st(()=>`Round trip flights from ${r.value.trim().toUpperCase()} to DPS departing June 25 2027 returning July 11 2027`);return(h,p)=>{var E,A,T,C;return P(),O("main",dI,[p[17]||(p[17]=g("div",{class:"section-eyebrow"},"Getting There",-1)),p[18]||(p[18]=g("h1",{class:"section-title"},[Q("Find Your "),g("em",null,"Flight")],-1)),p[19]||(p[19]=g("p",{class:"intro"},"One destination. Wherever you're starting from.",-1)),D(Gt)?D(Te).loading.value||!D(Te).loaded.value&&!D(Te).error.value?(P(),O("p",hI,"Loading your departure preferences…")):D(Te).error.value?(P(),O("section",pI,[g("p",null,H(D(Te).error.value),1),g("button",{type:"button",onClick:p[1]||(p[1]=S=>D(Te).load(!0))},"Try again")])):o.value?te("",!0):(P(),Me(Gh,{key:(E=D(De))==null?void 0:E.uid,setup:""})):(P(),O("section",fI,[p[4]||(p[4]=g("h2",null,"Plan your departure",-1)),p[5]||(p[5]=g("p",{class:"hint"},"Sign in, then save your departure city and at least one airport to use Flights.",-1)),g("button",{type:"button",onClick:p[0]||(p[0]=(...S)=>D(Mr)&&D(Mr)(...S))},"Sign in to use Flights")])),n.value?oe((P(),O("div",mI,[g("section",gI,[g("p",null,[p[6]||(p[6]=Q("Leaving from ",-1)),g("strong",null,H((A=D(Te).preferences.value)==null?void 0:A.city),1)]),g("p",vI,"Saved airports: "+H((T=D(Te).preferences.value)==null?void 0:T.departureAirports.join(", "))+". You can search from any airport below.",1),g("button",{type:"button",class:"change-preferences",onClick:p[2]||(p[2]=S=>D(Ke)("profile"))},"Edit departure preferences in Profile")]),g("section",yI,[p[13]||(p[13]=At('<div class="destination" data-v-a1764556><span aria-hidden="true" data-v-a1764556>✈</span><div data-v-a1764556><h2 data-v-a1764556>Bali, Indonesia</h2><p data-v-a1764556>Ngurah Rai International Airport · DPS</p></div></div><dl class="dates" data-v-a1764556><div data-v-a1764556><dt data-v-a1764556>Departure</dt><dd data-v-a1764556>June 25, 2027</dd></div><div data-v-a1764556><dt data-v-a1764556>Return</dt><dd data-v-a1764556>July 11, 2027</dd></div></dl><p class="date-note" data-v-a1764556>Our suggested dates are June 25–July 11, 2027, flexible by a day. Choose your airports, dates, and passengers in the search form below.</p><p class="hint" data-v-a1764556>Search flights and compare airlines and prices here. Selecting a booking offer opens an external airline or travel agency website, where you complete your purchase.</p>',4)),e.value?(P(),O("p",bI,"Flight search could not load. Please reload the page or use Google Flights below.")):te("",!0),p[14]||(p[14]=g("p",{class:"hint"},[Q("To share an option, open a flight’s full details and choose "),g("strong",null,"Capture this flight"),Q(". Review the captured information below, then save it for the group. Sign in to capture and save.")],-1)),s.value?(P(),O("p",_I,H(s.value),1)):te("",!0),p[15]||(p[15]=g("div",{id:"tpwl-search"},null,-1)),p[16]||(p[16]=g("div",{id:"tpwl-tickets"},null,-1)),g("details",wI,[p[12]||(p[12]=g("summary",null,"Search unavailable? Use Google Flights",-1)),g("form",II,[p[7]||(p[7]=g("label",{for:"origin-airport"},"Your origin airport",-1)),oe(g("input",{id:"origin-airport","onUpdate:modelValue":p[3]||(p[3]=S=>r.value=S),required:"",pattern:"[A-Za-z]{3}",minlength:"3",maxlength:"3",placeholder:"e.g. IND",title:"Enter a three-letter airport code, such as IND, JFK, or LAX.",autocomplete:"off",autocapitalize:"characters",spellcheck:"false","aria-describedby":"origin-help"},null,512),[[ce,r.value]]),p[8]||(p[8]=g("p",{id:"origin-help",class:"hint"},"Enter the three-letter airport code you want to depart from.",-1)),g("input",{type:"hidden",name:"q",value:u.value},null,8,EI),p[9]||(p[9]=g("input",{type:"hidden",name:"curr",value:"USD"},null,-1)),p[10]||(p[10]=g("button",{type:"submit"},[Q("Search Google Flights "),g("span",{"aria-hidden":"true"},"↗")],-1)),p[11]||(p[11]=g("p",{class:"hint"},"Opens Google Flights in a new tab with your route and dates. Review the search details there for current prices and availability.",-1))])])]),o.value?(P(),Me(aI,{key:(C=D(De))==null?void 0:C.uid,ref_key:"savedFlights",ref:i})):te("",!0)],512)),[[tf,o.value]]):te("",!0)])}}}),AI=pt(TI,[["__scopeId","data-v-a1764556"]]),SI=["aria-current"],kI=["aria-current"],PI=ht({__name:"NavBar",setup(t){const e=st(()=>ye.value==="bali"||ye.value==="bali-housing");return(n,r)=>(P(),O("nav",null,[r[8]||(r[8]=g("div",{class:"nav-logo"},"🌴 Indonesia Trip",-1)),g("button",{class:vt(["nav-btn",{active:D(ye)==="home"}]),onClick:r[0]||(r[0]=i=>D(Ke)("home"))}," Overview ",2),g("button",{class:vt(["nav-btn",{active:D(ye)==="komodo"}]),onClick:r[1]||(r[1]=i=>D(Ke)("komodo"))}," Komodo ",2),g("button",{class:vt(["nav-btn",{active:e.value}]),onClick:r[2]||(r[2]=i=>D(Ke)("bali"))}," Bali ",2),g("button",{class:vt(["nav-btn",{active:D(ye)==="java"}]),onClick:r[3]||(r[3]=i=>D(Ke)("java"))}," East Java ",2),g("button",{class:vt(["nav-btn",{active:D(ye)==="flights"}]),onClick:r[4]||(r[4]=i=>D(Ke)("flights"))}," Flights ",2),g("button",{class:vt(["nav-btn",{active:D(ye)==="people"}]),"aria-current":D(ye)==="people"?"page":void 0,onClick:r[5]||(r[5]=i=>D(Ke)("people"))}," attendants ",10,SI),D(Gt)?(P(),O("button",{key:0,class:vt(["nav-btn nav-profile",{active:D(ye)==="profile"}]),"aria-current":D(ye)==="profile"?"page":void 0,onClick:r[6]||(r[6]=i=>D(Ke)("profile"))},[...r[7]||(r[7]=[g("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[g("circle",{cx:"12",cy:"12",r:"10"}),g("circle",{cx:"12",cy:"9",r:"3"}),g("path",{d:"M5 19a7 7 0 0 1 14 0"})],-1),Q(" Profile ",-1)])],10,kI)):te("",!0)]))}}),CI=pt(PI,[["__scopeId","data-v-628db824"]]),xI={};function RI(t,e){return P(),O("footer",null,[...e[0]||(e[0]=[g("span",null,"🌴 Indonesia Trip",-1),Q(" · Made with love for the group · Adventure awaits ✈️ ",-1)])])}const NI=pt(xI,[["render",RI]]),DI="/images/home1.jpg",VI={class:"hero"},OI={class:"hero-inner"},LI={class:"hero-cards"},MI={class:"map-section"},FI={class:"map-frame"},UI={class:"map-svg-wrap"},$I={viewBox:"0 0 700 320",xmlns:"http://www.w3.org/2000/svg",style:{width:"100%",height:"auto"}},BI=ht({__name:"HomePage",setup(t){return(e,n)=>(P(),O("div",null,[g("section",VI,[n[4]||(n[4]=g("div",{class:"hero-pattern"},null,-1)),g("div",OI,[n[3]||(n[3]=At('<div class="hero-stamp">Group Adventure · Indonesia</div><h1>The<br><em>Gang Goes to </em><br>Indonesia</h1><div class="image-container java1-img"><img src="'+DI+'"></div><p class="hero-sub"> Dragons, temples, volcanoes, and a whole lot of rice wine.<br>Our bucket-list trip is officially happening. </p><div class="hero-details"><div class="hero-detail"><div class="num">9–14</div><div class="label">Total Days</div></div><div class="hero-detail"><div class="num">3</div><div class="label">Destinations</div></div><div class="hero-detail"><div class="num">$35</div><div class="label">Avg / Night</div></div><div class="hero-detail"><div class="num">∞</div><div class="label">Memories</div></div><div class="hero-detail"><div class="num">0?</div><div class="label">Food Poisoning</div></div><div class="hero-detail"><div class="num">Hopefully</div><div class="label">LadyBoys</div></div></div>',5)),g("div",LI,[g("div",{class:"dest-card",onClick:n[0]||(n[0]=r=>D(Ke)("komodo"))}," 🦎 Komodo Island "),g("div",{class:"dest-card",onClick:n[1]||(n[1]=r=>D(Ke)("bali"))},"🌺 Bali"),g("div",{class:"dest-card",onClick:n[2]||(n[2]=r=>D(Ke)("java"))},"🌋 East Java")])])]),n[8]||(n[8]=At('<section class="itinerary-strip"><div class="itin-row"><div class="itin-stop"><div class="itin-dot"></div><div class="itin-label">Indianapolis</div><div class="itin-days">Fly Out · 23-35 hrs</div></div><div class="itin-line"></div><div class="itin-stop"><div class="itin-dot"></div><div class="itin-label">Bali (DPS)</div><div class="itin-days">Arrive · Base Camp</div></div><div class="itin-line"></div><div class="itin-stop"><div class="itin-dot"></div><div class="itin-label">Labuan Bajo</div><div class="itin-days">Komodo · 2–3 nights</div></div><div class="itin-line"></div><div class="itin-stop"><div class="itin-dot"></div><div class="itin-label">Bali</div><div class="itin-days">Explore · 3–4 nights</div></div><div class="itin-line"></div><div class="itin-stop"><div class="itin-dot"></div><div class="itin-label">East Java</div><div class="itin-days">Volcanoes · 3–4 nights</div></div><div class="itin-line"></div><div class="itin-stop"><div class="itin-dot"></div><div class="itin-label">Fly Home</div><div class="itin-days">Back to Indy</div></div></div></section>',1)),g("section",MI,[n[6]||(n[6]=g("div",{class:"map-section-title"},"Where We're Going",-1)),n[7]||(n[7]=g("h2",null,"The Route",-1)),g("div",FI,[g("div",UI,[(P(),O("svg",$I,[...n[5]||(n[5]=[At('<rect width="700" height="320" fill="#0D2B38"></rect><g stroke="#1B4F5A" stroke-width="0.5" opacity="0.4"><line x1="0" y1="40" x2="700" y2="40"></line><line x1="0" y1="80" x2="700" y2="80"></line><line x1="0" y1="120" x2="700" y2="120"></line><line x1="0" y1="160" x2="700" y2="160"></line><line x1="0" y1="200" x2="700" y2="200"></line><line x1="0" y1="240" x2="700" y2="240"></line><line x1="0" y1="280" x2="700" y2="280"></line></g><path d="M80,170 C100,155 140,148 190,150 C240,152 300,145 360,148 C400,150 430,155 450,165 C440,178 420,182 390,180 C350,178 300,175 260,178 C220,180 180,178 150,175 C120,172 90,180 80,170Z" fill="#3D7A5C" opacity="0.85"></path><text x="265" y="168" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="11" text-anchor="middle" letter-spacing="2" opacity="0.9"> JAVA </text><circle cx="390" cy="162" r="6" fill="#E8714A" opacity="0.9"></circle><circle cx="390" cy="162" r="10" fill="none" stroke="#E8714A" stroke-width="1.5" opacity="0.5"></circle><text x="390" y="145" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="9" text-anchor="middle" letter-spacing="1"> EAST JAVA </text><text x="390" y="135" fill="#E8714A" font-family="Special Elite, monospace" font-size="8" text-anchor="middle"> 🌋 Bromo · Ijen </text><path d="M470,158 C480,152 505,150 520,153 C530,156 525,165 515,168 C500,170 478,168 470,158Z" fill="#3D7A5C" opacity="0.85"></path><text x="495" y="163" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="9" text-anchor="middle" letter-spacing="1"> BALI </text><circle cx="495" cy="155" r="6" fill="#C9A84C" opacity="0.9"></circle><circle cx="495" cy="155" r="10" fill="none" stroke="#C9A84C" stroke-width="1.5" opacity="0.5"></circle><text x="495" y="138" fill="#C9A84C" font-family="Special Elite, monospace" font-size="8" text-anchor="middle"> 🌺 Temples · Rice </text><text x="495" y="128" fill="#C9A84C" font-family="Special Elite, monospace" font-size="8" text-anchor="middle"> Terraces · Adventure </text><path d="M535,155 C543,150 555,150 562,155 C558,163 545,165 535,160 C533,158 533,157 535,155Z" fill="#3D7A5C" opacity="0.7"></path><path d="M575,152 C590,147 615,147 630,153 C628,162 612,165 595,163 C582,160 574,158 575,152Z" fill="#3D7A5C" opacity="0.7"></path><path d="M590,185 C610,178 640,175 665,178 C668,187 655,192 635,193 C610,193 593,192 590,185Z" fill="#3D7A5C" opacity="0.8"></path><text x="630" y="188" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="9" text-anchor="middle" letter-spacing="1" opacity="0.8"> FLORES </text><circle cx="580" cy="185" r="6" fill="#E8714A" opacity="0.9"></circle><circle cx="580" cy="185" r="10" fill="none" stroke="#E8714A" stroke-width="1.5" opacity="0.5"></circle><text x="580" y="208" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="9" text-anchor="middle" letter-spacing="1"> KOMODO </text><text x="580" y="218" fill="#E8714A" font-family="Special Elite, monospace" font-size="8" text-anchor="middle"> 🦎 Liveaboard </text><text x="580" y="168" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="7.5" text-anchor="middle" opacity="0.7"> Labuan Bajo </text><path d="M30,30 Q200,60 495,155" stroke="#E8714A" stroke-width="1.5" fill="none" stroke-dasharray="5,4" opacity="0.5"></path><circle cx="30" cy="30" r="4" fill="#E8714A" opacity="0.7"></circle><text x="30" y="20" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="8" text-anchor="middle" opacity="0.7"> IND </text><path d="M495,155 Q540,170 580,185" stroke="#C9A84C" stroke-width="1.5" fill="none" stroke-dasharray="3,3" opacity="0.6"></path><path d="M580,185 Q540,170 495,155" stroke="#C9A84C" stroke-width="1.5" fill="none" stroke-dasharray="3,3" opacity="0.6"></path><path d="M495,155 Q445,158 390,162" stroke="#C9A84C" stroke-width="1.5" fill="none" stroke-dasharray="3,3" opacity="0.6"></path><rect x="10" y="270" width="200" height="42" fill="rgba(0,0,0,0.3)" rx="2"></rect><circle cx="25" cy="283" r="4" fill="#E8714A"></circle><text x="35" y="287" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="8"> Destination </text><circle cx="25" cy="300" r="4" fill="#C9A84C"></circle><text x="35" y="304" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="8"> Base (Bali) </text><line x1="110" y1="283" x2="130" y2="283" stroke="#E8714A" stroke-width="1.5" stroke-dasharray="4,3"></line><text x="135" y="287" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="8"> Flight </text><line x1="110" y1="300" x2="130" y2="300" stroke="#C9A84C" stroke-width="1.5" stroke-dasharray="3,3"></line><text x="135" y="304" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="8"> Route </text><text x="690" y="20" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="9" text-anchor="end" opacity="0.5" letter-spacing="2"> INDONESIA · TRIP MAP </text>',39)])]))])])]),n[9]||(n[9]=At('<section style="background:var(--teal);padding:4rem 2rem;"><div style="max-width:1000px;margin:0 auto;"><div class="section-eyebrow" style="color:#faf6f0;">Save the Date</div><h2 class="section-title" style="color:#faf6f0;"> June – July <em>2027</em></h2><p style="color:#faf6f0;text-align:center;"> June 25/26 – July 10/11 · Exact travel dates to be confirmed. Faded dates mark the flexible start and end days. </p><table style="width:100%;max-width:560px;margin:2rem auto 0;border-collapse:collapse;color:#faf6f0;font-family:&quot;Special Elite&quot;, monospace;text-align:center;"><thead><tr><th style="padding:0.75rem 0;opacity:0.6;font-weight:normal;letter-spacing:2px;border-bottom:1px solid rgba(250, 246, 240, 0.25);"> SUN </th><th style="padding:0.75rem 0;opacity:0.6;font-weight:normal;letter-spacing:2px;border-bottom:1px solid rgba(250, 246, 240, 0.25);"> MON </th><th style="padding:0.75rem 0;opacity:0.6;font-weight:normal;letter-spacing:2px;border-bottom:1px solid rgba(250, 246, 240, 0.25);"> TUE </th><th style="padding:0.75rem 0;opacity:0.6;font-weight:normal;letter-spacing:2px;border-bottom:1px solid rgba(250, 246, 240, 0.25);"> WED </th><th style="padding:0.75rem 0;opacity:0.6;font-weight:normal;letter-spacing:2px;border-bottom:1px solid rgba(250, 246, 240, 0.25);"> THU </th><th style="padding:0.75rem 0;opacity:0.6;font-weight:normal;letter-spacing:2px;border-bottom:1px solid rgba(250, 246, 240, 0.25);"> FRI </th><th style="padding:0.75rem 0;opacity:0.6;font-weight:normal;letter-spacing:2px;border-bottom:1px solid rgba(250, 246, 240, 0.25);"> SAT </th></tr></thead><tbody><tr><td style="padding:0.9rem 0;"><span style="display:block;font-size:0.55em;letter-spacing:1px;opacity:0.8;">JUN</span>20</td><td style="padding:0.9rem 0;">21</td><td style="padding:0.9rem 0;">22</td><td style="padding:0.9rem 0;">23</td><td style="padding:0.9rem 0;">24</td><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;opacity:0.6;">25</td><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;">26</td></tr><tr><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;">27</td><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;">28</td><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;">29</td><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;">30</td><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;"><span style="display:block;font-size:0.55em;letter-spacing:1px;opacity:0.8;">JUL</span>1</td><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;">2</td><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;">3</td></tr><tr><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;">4</td><td style="padding:0.9rem 0;background:linear-gradient(135deg, var(--coral) 0%, var(--coral) 50%, var(--gold) 50%, var(--gold) 100%);color:#faf6f0;">5</td><td style="padding:0.9rem 0;background:var(--gold);color:var(--teal);">6</td><td style="padding:0.9rem 0;background:var(--gold);color:var(--teal);">7</td><td style="padding:0.9rem 0;background:var(--gold);color:var(--teal);">8</td><td style="padding:0.9rem 0;background:var(--gold);color:var(--teal);">9</td><td style="padding:0.9rem 0;background:var(--gold);color:var(--teal);">10</td></tr><tr><td style="padding:0.9rem 0;background:var(--gold);color:var(--teal);opacity:0.6;">11</td><td style="padding:0.9rem 0;">12</td><td style="padding:0.9rem 0;">13</td><td style="padding:0.9rem 0;">14</td><td style="padding:0.9rem 0;">15</td><td style="padding:0.9rem 0;">16</td><td style="padding:0.9rem 0;">17</td></tr></tbody></table><div style="display:flex;gap:2rem;justify-content:center;flex-wrap:wrap;margin-top:1.5rem;color:#faf6f0;font-family:&quot;Special Elite&quot;, monospace;font-size:0.85rem;"><div style="display:flex;align-items:center;gap:0.5rem;"><span style="width:1rem;height:1rem;background:var(--coral);display:inline-block;border-radius:2px;"></span> June 25/26 – July 5 </div><div style="display:flex;align-items:center;gap:0.5rem;"><span style="width:1rem;height:1rem;background:var(--gold);display:inline-block;border-radius:2px;"></span> July 5 – 10/11 </div></div></div></section><section style="background:var(--cream);padding:4rem 2rem;"><div style="max-width:1000px;margin:0 auto;"><div class="section-eyebrow">Before You Go</div><h2 class="section-title">Trip <em>Essentials</em></h2><div class="tips-grid" style="margin-top:2rem;"><div class="tip-card"><div class="tip-icon">✈️</div><div class="tip-title">Getting There</div><div class="tip-text"> Fly from Indianapolis (IND) to Bali&#39;s Ngurah Rai Airport (DPS). Expect 23–35 hours with 1–2 layovers, typically through Tokyo, Singapore, or Seoul. </div></div><div class="tip-card"><div class="tip-icon">🏠</div><div class="tip-title">Where We Stay</div><div class="tip-text"> Private luxury villas &amp; Airbnbs with pools — just $10–30/person/night in a big group. Bali has incredible villa options that rival 5-star hotels at a fraction of the cost. </div></div><div class="tip-card"><div class="tip-icon">🚗</div><div class="tip-title">Getting Around</div><div class="tip-text"> Rent private drivers throughout Bali and East Java. A full day with a driver runs around $35 USD and they often double as knowledgeable local guides. </div></div><div class="tip-card"><div class="tip-icon">💰</div><div class="tip-title">Budget Tips</div><div class="tip-text"> Eat at local warungs ($1–2/meal). Temple entrance fees are typically $3–6 USD. The more people in the group, the cheaper accommodation and drivers get per person. </div></div><div class="tip-card"><div class="tip-icon">📋</div><div class="tip-title">Visa &amp; Entry</div><div class="tip-text"> Visa on Arrival costs $35 USD, valid for 30 days. Bali also requires a $10 tourist levy — pay online before arrival at lovebali.baliprov.go.id for convenience. </div></div><div class="tip-card"><div class="tip-icon">🌡️</div><div class="tip-title">Best Time to Go</div><div class="tip-text"> Dry season (May–October) is ideal. July–August is peak season; book villas 2–3 months ahead. Shoulder months like May or September offer great weather with fewer crowds. </div></div></div></div></section>',2))]))}}),jI="/images/komodo1.webp",HI="/images/komodo2.webp",WI="/images/komodo3.jpeg",qI="/images/komodo4.jpeg",zI="/images/komodo5.jpeg",GI={};function KI(t,e){return P(),O("div",null,[...e[0]||(e[0]=[At('<div class="komodo-hero"><div class="dest-hero-inner"><div class="dest-hero-top"><div class="dest-hero-text"><div class="dest-page-stamp">Stop 01 · Komodo Islands</div><h1 class="dest-h1"> Komodo<em>Dragon</em>Country <div class="image-container"><img src="'+jI+'"></div></h1><p class="dest-tagline">Indonesia&#39;s most primal corner — ancient reptiles, electric-blue waters, and the feeling that you&#39;ve sailed off the edge of the map.</p><div class="dest-stats"><div class="dest-stat"><div class="s-num">2–3</div><div class="s-label">Nights Liveaboard</div></div><div class="dest-stat"><div class="s-num">$255</div><div class="s-label">Per Person</div></div><div class="dest-stat"><div class="s-num">UNESCO</div><div class="s-label">World Heritage Site</div></div></div></div></div></div></div><div class="page-content"><div class="tape">Liveaboard · Budget Shared Cabin</div><p class="section-intro">We&#39;re sailing from Labuan Bajo on a budget liveaboard — exploring Komodo National Park by boat, sleeping under the stars, and waking up to new islands every morning.</p><div class="highlight-box"><h3>The Liveaboard Plan</h3><p>A 3D/2N budget liveaboard with shared cabins from Labuan Bajo — similar to the GetYourGuide option you found. The boat takes care of everything: meals, snorkeling gear, national park entry, and all travel between islands. Just show up and adventure begins.</p></div><hr class="dashed-divider"><div class="section-eyebrow">Day by Day</div><h2 class="section-title">The <em>Itinerary</em></h2><div class="day-list"><div class="day-row"><div class="day-num">1</div><div class="day-content"><div class="day-title">Arrive Labuan Bajo → Board the Boat</div><div class="day-desc">Fly from Bali to Labuan Bajo (LBJ) — about 1.5 hrs. Board your liveaboard in the afternoon. Sail toward Komodo with sunset over the Lesser Sundas. First dinner on deck.</div></div></div><div class="day-row"><div class="day-num">2</div><div class="day-content"><div class="day-title">Komodo Island — Dragon Trek &amp; Snorkeling</div><div class="day-desc">Morning hike through Komodo Island with a park ranger to spot the famous Komodo Dragons in the wild. Afternoon snorkeling at the famous Pink Beach — one of just a handful of pink sand beaches on earth. Incredible coral and marine life.</div></div></div><div class="day-row"><div class="day-num">3</div><div class="day-content"><div class="day-title">Rinca Island, Manta Point &amp; Padar</div><div class="day-desc">Optional second dragon trek on Rinca Island (smaller crowds). Snorkel or dive at Manta Point for a chance to swim with manta rays. Late afternoon hike up Padar Island for one of Indonesia&#39;s most photographed panoramas — multi-colored beaches below on three sides.</div></div></div><div class="day-row"><div class="day-num">4</div><div class="day-content"><div class="day-title">Return to Labuan Bajo → Fly back to Bali</div><div class="day-desc">Morning sail back to Labuan Bajo. Afternoon flight back to Bali. Check into the villa, collapse into a pool, and debrief over Bintang beers.</div></div></div></div><hr class="dashed-divider"><div class="section-eyebrow">What&#39;s Included</div><h2 class="section-title">On the <em>Boat</em></h2><div class="activities-grid"><div class="activity-card"><div class="card-color-bar" style="background:var(--jungle);"></div><div class="card-body"><div class="card-tag">Wildlife</div><div class="card-name">Komodo Dragon Trek</div><div class="card-desc">Guided walk through Komodo National Park with a licensed ranger. The Komodo Dragon is the world&#39;s largest living lizard — up to 10 feet long and genuinely prehistoric-looking. They roam freely.</div><div class="card-footer"><span class="card-price">Included</span><span class="card-duration">2–3 hrs</span></div><div class="image-container"><img src="'+HI+'"></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--teal);"></div><div class="card-body"><div class="card-tag">Snorkeling / Diving</div><div class="card-name">Pink Beach Snorkel</div><div class="card-desc">Snorkel the pristine coral reefs of Pink Beach — named for the rosy tint of its sand, caused by red coral fragments. One of Indonesia&#39;s most magical stretches of coast, with turtles and reef sharks.</div><div class="card-footer"><span class="card-price">Included</span><span class="card-duration">Afternoon</span></div><div class="image-container"><img src="'+WI+'"></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--coral);"></div><div class="card-body"><div class="card-tag">Marine Life</div><div class="card-name">Manta Point Dive / Snorkel</div><div class="card-desc">Swim with giant oceanic manta rays with wingspans up to 5.5 meters. Komodo&#39;s waters are part of the Coral Triangle — the planet&#39;s most biodiverse marine zone. Truly once-in-a-lifetime.</div><div class="card-footer"><span class="card-price">Included</span><span class="card-duration">2 hrs</span></div><div class="image-container"><img src="'+qI+'"></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--gold);"></div><div class="card-body"><div class="card-tag">Hiking</div><div class="card-name">Padar Island Summit</div><div class="card-desc">Hike 30–45 minutes up to the island&#39;s ridge for the iconic three-beach panorama — arguably the most photographed view in all of Indonesia. Absolutely worth the sweat. Plan for sunrise.</div><div class="card-footer"><span class="card-price">Included</span><span class="card-duration">1 hr hike</span></div><div class="image-container"><img src="'+zI+'"></div></div></div></div><hr class="dashed-divider"><div class="info-band"><div class="section-eyebrow" style="text-align:center;margin-bottom:1.2rem;">Trip Logistics</div><div class="info-grid"><div class="info-item"><div class="i-label">Departs From</div><div class="i-val">Labuan Bajo, Flores</div></div><div class="info-item"><div class="i-label">Cost Per Person</div><div class="i-val">~$255 USD</div></div><div class="info-item"><div class="i-label">Duration</div><div class="i-val">3 Days / 2 Nights</div></div><div class="info-item"><div class="i-label">Accommodation</div><div class="i-val">Shared Cabin, Boat</div></div><div class="info-item"><div class="i-label">Included</div><div class="i-val">Meals, Gear, Park Entry</div></div><div class="info-item"><div class="i-label">Book Via</div><div class="i-val">GetYourGuide</div></div></div></div><a href="https://www.getyourguide.com/labuan-bajo-l106237/3d2n-budget-komodo-liveaboard-with-shared-cabin-t1185898/" target="_blank" class="booking-cta">→ Book the Liveaboard on GetYourGuide</a><div class="tips-grid" style="margin-top:2.5rem;"><div class="tip-card"><div class="tip-icon">🤿</div><div class="tip-title">Bring Your Own Mask</div><div class="tip-text">Shared snorkel gear on budget boats varies in quality. Bringing your own mask and snorkel makes a big difference. Fins are usually fine shared.</div></div><div class="tip-card"><div class="tip-icon">🧴</div><div class="tip-title">Reef-Safe Sunscreen Only</div><div class="tip-text">Komodo is a UNESCO site with protected coral. Use reef-safe sunscreen only — it protects the ecosystem and you won&#39;t get hassled by rangers.</div></div><div class="tip-card"><div class="tip-icon">🌊</div><div class="tip-title">Check Sea Conditions</div><div class="tip-text">Aug–Sept are best for calm seas and manta ray sightings. April–July is still excellent. Dec–Feb can be rougher in the Flores Sea.</div></div><div class="tip-card"><div class="tip-icon">👟</div><div class="tip-title">Closed-Toe Shoes for Treks</div><div class="tip-text">Required for dragon treks. Sandals won&#39;t cut it — the terrain is rocky and you&#39;re walking near large reptiles that can run 12 mph. Pack trail shoes.</div></div></div></div>',2)])])}const JI=pt(GI,[["render",KI]]),Jh="/images/bali1.jpg",YI={class:"page-content"},XI=ht({__name:"BaliPage",setup(t){return(e,n)=>(P(),O("div",null,[n[2]||(n[2]=At('<div class="bali-hero"><div class="dest-hero-inner"><div class="dest-hero-top"><div class="dest-hero-text"><div class="dest-page-stamp">Stop 02 · Island of the Gods</div><h1 class="dest-h1"> Bali<em>Untamed</em><div class="image-container"><img src="'+Jh+'"></div></h1><p class="dest-tagline">Rice terraces, sea temples, jungle swings, and the best $2 meal you&#39;ll ever eat. The relaxing (and occasionally adrenaline-fueled) heart of our trip.</p><div class="dest-stats"><div class="dest-stat"><div class="s-num">3–4</div><div class="s-label">Nights</div></div><div class="dest-stat"><div class="s-num">$10–30</div><div class="s-label">Villa / Person / Night</div></div><div class="dest-stat"><div class="s-num">$35</div><div class="s-label">Driver / Full Day</div></div></div></div></div></div></div>',1)),g("div",YI,[n[1]||(n[1]=At('<div class="tape">Activities · Culture · Adventure</div><p class="section-intro">Bali is our home base and relaxation zone — but there&#39;s nothing passive about it. Between ancient temples, jungle ATVs, sacred springs, and epic sunsets, every day here earns its place.</p><div class="section-eyebrow">Day by Day</div><h2 class="section-title">Sample <em>Itinerary</em></h2><div class="day-list"><div class="day-row"><div class="day-num">1</div><div class="day-content"><div class="day-title">Arrive &amp; Settle In Ubud</div><div class="day-desc">Check into your villa in Ubud — the cultural heart of Bali. Evening walk through the Ubud Art Market. Dinner at a warung (local Indonesian diner) for around $2–5 USD. Early night — jet lag is real after 30+ hours of travel.</div></div></div><div class="day-row"><div class="day-num">2</div><div class="day-content"><div class="day-title">Ubud Cultural Day — Temples, Terraces &amp; Monkeys</div><div class="day-desc">Start early at Tegallalang Rice Terraces before the tour buses arrive. Visit Sacred Monkey Forest Sanctuary (hold your sunglasses). Afternoon: Tirta Empul Holy Spring Temple for a traditional purification ceremony. Sunset at Tanah Lot Sea Temple. Private driver all day — ~$35.</div></div></div><div class="day-row"><div class="day-num">3</div><div class="day-content"><div class="day-title">Adventure Day — ATV &amp; Whitewater Rafting</div><div class="day-desc">Morning ATV quad bike ride through rice paddies, jungle tunnels, and muddy rivers. Afternoon: whitewater rafting down the Ayung River through tropical rainforest, past stone carvings and hidden waterfalls. Buffet lunch included. Full-day combo package ~$60/person.</div></div></div><div class="day-row"><div class="day-num">4</div><div class="day-content"><div class="day-title">Mt. Batur Sunrise Hike (Optional) or Beach Day</div><div class="day-desc">For the early risers: pre-dawn drive to Mt. Batur for a 2-hour guided sunrise hike to the volcano rim. Back by 11am. OR: beach day in Seminyak or Nusa Penida snorkel trip. Evening: Uluwatu Temple sunset + Kecak fire dance show for the ultimate Bali finale.</div></div></div></div><hr class="dashed-divider"><div class="section-eyebrow">Top Activities with Prices</div><h2 class="section-title">Things to <em>Do</em></h2><div class="activities-grid"><div class="activity-card"><div class="card-color-bar" style="background:var(--jungle);"></div><div class="card-body"><div class="card-tag">Culture · Temples</div><div class="card-name">Ubud Cultural Full-Day Tour</div><div class="card-desc">Private driver takes you to Tegallalang Rice Terraces, Sacred Monkey Forest, Tirta Empul Holy Spring, and Tanah Lot Sea Temple. A Balinese dress is often included for photos at the temple. One of the best ways to see Bali with a first-time group.</div><div class="card-footer"><span class="card-price">$45–$80/person</span><span class="card-duration">Full Day</span></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--coral);"></div><div class="card-body"><div class="card-tag">Adventure · Outdoors</div><div class="card-name">ATV Quad Bike + Rafting Combo</div><div class="card-desc">1.5 hrs of off-road ATV through rice paddies, jungle tunnels, and river crossings. Then 2 hrs rafting the 12-km Ayung River with Class II–III rapids. Hotel transfers and buffet lunch included. Epic group activity — great for laughs and photos.</div><div class="card-footer"><span class="card-price">~$55–$65/person</span><span class="card-duration">Full Day</span></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--teal);"></div><div class="card-body"><div class="card-tag">Hiking · Volcano</div><div class="card-name">Mt. Batur Sunrise Hike</div><div class="card-desc">Pre-dawn hike up Bali&#39;s most accessible volcano for one of Southeast Asia&#39;s great sunrises. The 2-hour trek reaches the rim at 1,717m. Breakfast of eggs cooked in volcanic steam at the top. Back at your villa by mid-morning.</div><div class="card-footer"><span class="card-price">$17–$45/person</span><span class="card-duration">5–6 hrs total</span></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--gold);"></div><div class="card-body"><div class="card-tag">Island Day Trip</div><div class="card-name">Nusa Penida Snorkeling Tour</div><div class="card-desc">A quick boat ride to Nusa Penida — a rugged island off Bali&#39;s coast with rainforested hills and crystal-clear water. Swim with manta rays at Manta Point, visit the iconic Kelingking Beach cliff, and snorkel Diamond Beach. Full day from Bali.</div><div class="card-footer"><span class="card-price">~$50–$70/person</span><span class="card-duration">Full Day</span></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:#7D6B5C;"></div><div class="card-body"><div class="card-tag">Culture · Spiritual</div><div class="card-name">Tirta Empul Purification Ceremony</div><div class="card-desc">Bali&#39;s holiest site — a 10th-century water temple where locals and visitors bathe in sacred spring pools for purification. One of the most unique cultural experiences in Bali. Sarong rental included. Entrance ~$3 USD.</div><div class="card-footer"><span class="card-price">~$3 entry</span><span class="card-duration">2 hrs</span></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--stamp-red);"></div><div class="card-body"><div class="card-tag">Sunset · Culture</div><div class="card-name">Uluwatu Temple + Kecak Dance</div><div class="card-desc">The Uluwatu Temple perches dramatically on a sea cliff 70m above the Indian Ocean. As the sun sets, watch a traditional Kecak fire dance performance on the cliff&#39;s edge — one of Bali&#39;s most atmospheric experiences. Memorable evening for the whole group.</div><div class="card-footer"><span class="card-price">$10–$20/person</span><span class="card-duration">Evening</span></div></div></div></div><hr class="dashed-divider"><div class="highlight-box"><h3>Spa Day Reminder 💆</h3><p>Don&#39;t skip a Balinese massage. A 60-minute traditional massage at a local spa runs $5–10 USD. The same treatment at a resort costs $50+. We&#39;re going local. Book a group session at a Ubud spa — most fit 6–10 people and can be arranged through your driver.</p></div><div class="tips-grid" style="margin-top:2.5rem;"><div class="tip-card"><div class="tip-icon">🐒</div><div class="tip-title">Monkey Forest Warning</div><div class="tip-text">The monkeys at Sacred Monkey Forest are not shy. Hold your phone, sunglasses, and any snacks tightly. They will take your things and show zero remorse.</div></div><div class="tip-card"><div class="tip-icon">🕌</div><div class="tip-title">Temple Dress Code</div><div class="tip-text">Shoulders and knees must be covered at all temples. Sarong rentals are available at entrances for a small fee (often included in your tour).</div></div><div class="tip-card"><div class="tip-icon">🍜</div><div class="tip-title">Eat at Warungs</div><div class="tip-text">Local family-run warungs serve incredible nasi goreng (fried rice) for $1–2 USD. Don&#39;t eat tourist-area restaurants every night or you&#39;ll blow your budget for no reason.</div></div><div class="tip-card"><div class="tip-icon">🌅</div><div class="tip-title">Book Activities Early</div><div class="tip-text">Bali fills up, especially in July–August. Book the Mt. Batur hike and Nusa Penida tours at least a few days in advance to get preferred times.</div></div></div><hr class="dashed-divider"><div class="section-eyebrow">Where We Stay</div><h2 class="section-title">Housing <em>Options</em></h2><p class="section-intro">From private pool villas in Ubud to beachfront stays in Seminyak — here&#39;s the full breakdown of where the group can stay, with prices and trade-offs.</p>',16)),g("button",{class:"booking-cta",style:{background:"var(--teal)"},onClick:n[0]||(n[0]=r=>D(Ke)("bali-housing"))},"→ Explore Housing Options")])]))}}),ZI="/images/BaliVilla1.avif",QI={class:"page-content"},eE=ht({__name:"BaliHousingPage",setup(t){return(e,n)=>(P(),O("div",null,[n[2]||(n[2]=At('<div class="bali-hero"><div class="dest-hero-inner"><div class="dest-hero-top"><div class="dest-hero-text"><div class="dest-page-stamp">Stop 02 · Bali · Housing</div><h1 class="dest-h1"> Where We<em>Stay</em><div class="image-container"><img src="'+Jh+'"></div></h1><p class="dest-tagline"></p><div class="dest-stats"><div class="dest-stat"><div class="s-num"></div><div class="s-label"></div></div><div class="dest-stat"><div class="s-num"></div><div class="s-label"></div></div><div class="dest-stat"><div class="s-num"></div><div class="s-label"></div></div></div></div></div></div></div>',1)),g("div",QI,[g("button",{class:"booking-cta",style:{background:"var(--teal)","margin-bottom":"1.5rem"},onClick:n[0]||(n[0]=r=>D(Ke)("bali"))},"← Back to Bali"),n[1]||(n[1]=At('<div class="tape">Villas · Airbnbs · Where to Sleep</div><p class="section-intro"></p><div class="section-eyebrow">Compare Your Options</div><h2 class="section-title">Housing <em>Options</em></h2><div class="activities-grid"><div class="activity-card"><div class="card-color-bar" style="background:var(--jungle);"></div><div class="card-body"><div class="card-tag"></div><div class="card-name">Luxury Beach Front Villa with Infinity Pool, Staff and Breathtaking Views!</div><div class="card-desc"><p>Private villa with 5 bedrooms, infinity pool, and direct beach access. Includes daily staff for cleaning and breakfast. Perfect for groups looking for luxury and privacy.</p><ul><li>5 Bedrooms</li><li>5 Bathrooms</li><li>Infinity Pool</li><li>Beach Access</li><li>Daily Staff Service</li></ul></div><div class="card-footer"><span class="card-price">$336 a night</span><span class="card-duration">$100pp for 3 nights for 10 people <a href="https://www.vrbo.com/497641ha?chkin=2027-04-30&amp;chkout=2027-05-03&amp;d1=2027-04-30&amp;d2=2027-05-03&amp;startDate=2027-04-30&amp;endDate=2027-05-03&amp;flexibility=2_DAY_LOWER&amp;flexibility=3_DAY_UPPER&amp;searchRange=2026-07-01_2026-07-31&amp;searchRange=2027-05-01_2027-05-31&amp;x_pwa=1&amp;rfrr=HSR&amp;pwa_ts=1782167714867&amp;referrerUrl=aHR0cHM6Ly93d3cudnJiby5jb20vSG90ZWwtU2VhcmNo&amp;useRewards=true&amp;adults=10&amp;regionId=602651&amp;destination=Bali%2C+Indonesia&amp;destType=MARKET&amp;latLong=-8.340539%2C115.09195&amp;searchId=254f5d1d-249c-46fb-aa1b-23d751d87e5d&amp;sort=RECOMMENDED&amp;top_dp=336&amp;top_cur=USD&amp;userIntent=&amp;selectedRoomType=29491463&amp;selectedRatePlan=00012ef2b62974b14101a7853eeee38d3e6e&amp;expediaPropertyId=29491463">(VRBO Link)</a></span></div><div class="image-container"><img src="'+ZI+'"></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--coral);"></div><div class="card-body"><div class="card-tag"></div><div class="card-name"></div><div class="card-desc"></div><div class="card-footer"><span class="card-price"></span><span class="card-duration"></span></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--gold);"></div><div class="card-body"><div class="card-tag"></div><div class="card-name"></div><div class="card-desc"></div><div class="card-footer"><span class="card-price"></span><span class="card-duration"></span></div></div></div></div><hr class="dashed-divider"><div class="highlight-box"><h3>adawd</h3><p></p></div><div class="tips-grid" style="margin-top:2.5rem;"><div class="tip-card"><div class="tip-icon"></div><div class="tip-title">QSQSQS</div><div class="tip-text"></div></div><div class="tip-card"><div class="tip-icon"></div><div class="tip-title"></div><div class="tip-text"></div></div></div>',8))])]))}}),tE="/images/java1.jpeg",nE="/images/MtIjen.jpg",rE="/images/mtbromo.jpeg",iE="/images/tumpak-sewu-waterfalls1.jpg",sE={};function oE(t,e){return P(),O("div",null,[...e[0]||(e[0]=[At('<div class="java-hero"><div class="dest-hero-inner"><div class="dest-hero-top"><div class="dest-hero-text"><div class="dest-page-stamp">Stop 03 · East Java, Indonesia</div><h1 class="dest-h1"> East<em>Java</em><div class="image-container"><img src="'+tE+'"></div></h1><p class="dest-tagline">Blue fire, sulfur mines, alien caldera landscapes, and a waterfall so big they call it Indonesia&#39;s Niagara. This is the hiking chapter.</p><div class="dest-stats"><div class="dest-stat"><div class="s-num">3–4</div><div class="s-label">Days Hiking</div></div><div class="dest-stat"><div class="s-num">3</div><div class="s-label">Major Hikes</div></div><div class="dest-stat"><div class="s-num">~$250</div><div class="s-label">Full 3D2N Tour</div></div></div></div></div></div></div><div class="page-content"><div class="tape">Tumpak Sewu · Mt. Bromo · Mt. Ijen</div><p class="section-intro">East Java is the adventure finale — three of Indonesia&#39;s most dramatic natural wonders packed into 3–4 days of early mornings, jeep rides, and unforgettable volcanic landscapes.</p><div class="highlight-box"><h3>Recommended: The 3D/2N East Java Tour</h3><p>The most efficient way to hit all three highlights is a pre-booked 3-day, 2-night guided tour from Bali or Surabaya. These tours handle all transportation (including the Bali ferry), accommodation, breakfast, and expert local guides — starting around $250/person. Single-day Bromo trips start around $40.</p></div><div class="section-eyebrow">Day by Day</div><h2 class="section-title">The <em>Itinerary</em></h2><div class="day-list"><div class="day-row"><div class="day-num">1</div><div class="day-content"><div class="day-title">Bali → Ferry → Ijen Area (Banyuwangi)</div><div class="day-desc">Early morning drive from Bali to Gilimanuk Harbor. Take the ferry across the Bali Strait to East Java. Drive 6–7 hours to the Ijen area in Banyuwangi. Check in at your guesthouse. Rest up — you&#39;ll be waking up at 1:00am for the main event.</div></div></div><div class="day-row"><div class="day-num">2</div><div class="day-content"><div class="day-title">Mt. Ijen Blue Fire (1am) → Mt. Bromo Sunrise</div><div class="day-desc">1:00am: depart for Paltuding. 2-hour trek up Mt. Ijen in the dark. Descend into the crater to witness the extraordinary blue fire — sulfuric gas igniting into electric blue flames, visible only before dawn. After sunrise over the turquoise acid lake, drive 5–6 hrs to the Bromo area. Check in. Rest.</div></div></div><div class="day-row"><div class="day-num">3</div><div class="day-content"><div class="day-title">Mt. Bromo Sunrise Jeep → Tumpak Sewu Waterfall</div><div class="day-desc">2:30am: jeep to Penanjakan viewpoint for Bromo&#39;s iconic sunrise — the caldera fills with mist as the active cone of Mt. Bromo glows orange. Hike the 248 stairs to the crater rim. Then drive to the Sea of Sand and Savanna. Afternoon: Tumpak Sewu waterfall. Back to Bali or Surabaya.</div></div></div></div><hr class="dashed-divider"><div class="section-eyebrow">The Three Highlights</div><h2 class="section-title">Where We&#39;re <em>Hiking</em></h2><div class="activities-grid"><div class="activity-card"><div class="card-color-bar" style="background:var(--coral);"></div><div class="card-body"><div class="card-tag">Volcano · Night Hike</div><div class="card-name">Mt. Ijen — Blue Fire</div><div class="card-desc">Mt. Ijen is home to one of the rarest natural phenomena on earth: electric-blue fire produced by igniting sulfuric gases. It glows only before dawn. The hike descends into a massive caldera with a stunning turquoise acid lake — and you can watch sulfur miners carrying 80kg loads up the crater walls.</div><div class="card-footer"><span class="card-price">Included in tour</span><span class="card-duration">Start 1am · 4–5 hrs</span></div><div class="image-container"><img src="'+nE+'"></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--gold);"></div><div class="card-body"><div class="card-tag">Volcano · Sunrise</div><div class="card-name">Mt. Bromo — Sea of Sand Sunrise</div><div class="card-desc">Mt. Bromo is Java&#39;s most iconic landscape — an active volcano smoking inside a vast caldera filled with black volcanic sand. The Penanjakan viewpoint at sunrise, with Mt. Semeru in the background, is pure cinema. Jeep ride across the Sea of Sand, then hike the 248 stairs to the crater lip.</div><div class="card-footer"><span class="card-price">$40 (day trip) or included in tour</span><span class="card-duration">Start 2:30am · Full day</span></div><div class="image-container"><img src="'+rE+'"></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--teal);"></div><div class="card-body"><div class="card-tag">Waterfall · Jungle</div><div class="card-name">Tumpak Sewu — Indonesia&#39;s Niagara</div><div class="card-desc">A jaw-dropping multi-tiered curtain waterfall plunging into a lush jungle valley — often called the &quot;Niagara of Indonesia.&quot; The descent into the valley takes about 45 minutes and rewards with a view of dozens of individual falls spanning the entire cliff face. Bring dry bags for cameras.</div><div class="card-footer"><span class="card-price">Included in tour</span><span class="card-duration">Half Day</span></div><div class="image-container"><img src="'+iE+'"></div></div></div></div><hr class="dashed-divider"><div class="info-band"><div class="section-eyebrow" style="text-align:center;margin-bottom:1.2rem;">Tour Options</div><div class="info-grid"><div class="info-item"><div class="i-label">Budget 3D/2N Tour (All 3 Sites)</div><div class="i-val">~$250/person</div></div><div class="info-item"><div class="i-label">Single-Day Bromo from Surabaya</div><div class="i-val">~$40–$50/person</div></div><div class="info-item"><div class="i-label">Private Bromo Jeep</div><div class="i-val">~$60–$80 total</div></div><div class="info-item"><div class="i-label">Ijen Standalone Tour</div><div class="i-val">~$40–$60/person</div></div><div class="info-item"><div class="i-label">Recommended Base City</div><div class="i-val">Malang or Surabaya</div></div><div class="info-item"><div class="i-label">Book Via</div><div class="i-val">GetYourGuide / Local Agents</div></div></div></div><div style="display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:2.5rem;"><a href="https://www.getyourguide.com/java-l164347/east-java-3d2n-ijen-crater-bromo-tumpak-sewu-waterfall-t847467/" target="_blank" class="booking-cta">→ Book 3D2N East Java Tour</a><a href="https://www.getyourguide.com/mount-bromo-l88315/" target="_blank" class="booking-cta" style="background:var(--teal);">→ Browse Bromo Day Trips</a></div><div class="tips-grid"><div class="tip-card"><div class="tip-icon">😷</div><div class="tip-title">Gas Masks for Ijen</div><div class="tip-text">The sulfur fumes at Ijen Crater are intense. Bring a proper gas mask — not just a bandana. Rental masks are available at the trailhead but quality varies. Serious hikers bring their own.</div></div><div class="tip-card"><div class="tip-icon">🧥</div><div class="tip-title">Layer Up — It Gets Cold</div><div class="tip-text">Both Ijen and Bromo are above 2,000m and you&#39;re hiking at 1–3am. It will be cold — bring a fleece or light jacket. You&#39;ll warm up fast on the ascent but the crater rim is windy.</div></div><div class="tip-card"><div class="tip-icon">💡</div><div class="tip-title">Bring a Headlamp</div><div class="tip-text">You&#39;re hiking in the dark at both Ijen and Bromo. A headlamp is essential — not just a phone flashlight. Extra batteries recommended.</div></div><div class="tip-card"><div class="tip-icon">📷</div><div class="tip-title">Camera for the Blue Fire</div><div class="tip-text">The blue fire at Ijen is very difficult to photograph on a phone in the dark. Bring a camera if you have one, or just enjoy the moment — it&#39;s more impressive in person anyway.</div></div><div class="tip-card"><div class="tip-icon">🚌</div><div class="tip-title">Lots of Driving</div><div class="tip-text">East Java involves long drives. Day 1 can be 6–7 hours from Bali. Sleep in the car. Pack snacks, download offline maps (Maps.me), and consider motion sickness tablets for bumpy roads.</div></div><div class="tip-card"><div class="tip-icon">🌄</div><div class="tip-title">Weather Can Change Everything</div><div class="tip-text">Bromo sunrise can be hidden by cloud cover — it happens. Good guides know alternate viewpoints and will adjust. Don&#39;t be devastated if conditions aren&#39;t perfect; the landscape is stunning regardless.</div></div></div></div>',2)])])}const aE=pt(sE,[["render",oE]]),lE={class:"people-page"},cE={class:"toast-region",role:"status","aria-live":"polite","aria-atomic":"true"},uE={key:0,class:"success-toast"},dE={key:0,role:"status"},fE={key:1,role:"alert"},hE={key:2},pE={key:0},mE={class:"add-person-row"},gE={colspan:"2",class:"guest-panel"},vE=["aria-expanded","disabled"],yE=["disabled"],bE={class:"panel-button",type:"submit"},_E={key:1,role:"alert"},wE=ht({__name:"PeoplePage",setup(t){const e=z([]),n=z(!0),r=z(""),i=z(""),s=z(""),o=z(""),a=z(!1),l=z("invited"),c=z(!1),u=z(""),h=z("");let p;function E(){clearTimeout(p),h.value=""}Bi(()=>clearTimeout(p));async function A(){if(!c.value){c.value=!0,u.value="",E();try{const C=await Y_(i.value,l.value,s.value,o.value);e.value=[...e.value,C].sort((S,x)=>S.name.localeCompare(x.name)),h.value=`${C.name} has been added to the guest list.`,p=setTimeout(E,5e3),i.value="",s.value="",o.value="",l.value="invited",a.value=!1}catch(C){u.value=(C==null?void 0:C.code)==="permission-denied"?"Saving is not enabled yet. Please ask the site owner to check the guest list access settings.":"Unable to add this person. Check your connection and try again."}finally{c.value=!1}}}async function T(){n.value=!0,r.value="";try{e.value=await X_()}catch(C){const S=C==null?void 0:C.code;r.value=S==="permission-denied"?"The guest list is not available. Please ask the organizer to check its access settings.":S?"Unable to load the guest list. Please try again.":C instanceof Error?C.message:"Unable to load the guest list."}finally{n.value=!1}}return Br(T),(C,S)=>(P(),O("main",lE,[(P(),Me(Ed,{to:"body"},[g("div",cE,[ze(eg,{name:"toast"},{default:yd(()=>[h.value?(P(),O("div",uE,[S[8]||(S[8]=g("span",{class:"toast-icon","aria-hidden":"true"},"✓",-1)),g("div",null,[S[7]||(S[7]=g("strong",null,"Person added",-1)),g("p",null,H(h.value),1)]),g("button",{class:"toast-close",type:"button","aria-label":"Dismiss notification",onClick:E},"×")])):te("",!0)]),_:1})])])),g("button",{class:"back-button",onClick:S[0]||(S[0]=x=>D(Ke)("home"))},"← Back to overview"),S[19]||(S[19]=g("div",{class:"section-eyebrow"},"The Gang",-1)),S[20]||(S[20]=g("h1",{class:"section-title"},[Q("Who's "),g("em",null,"Going?")],-1)),S[21]||(S[21]=g("p",{class:"people-intro"},"The crew for our Indonesia adventure.",-1)),n.value?(P(),O("p",dE,"Loading the guest list…")):r.value?(P(),O("div",fE,[g("p",null,H(r.value),1),g("button",{class:"back-button retry-button",onClick:T},"Try again")])):(P(),O("table",hE,[S[17]||(S[17]=g("caption",{class:"sr-only"},"People going to Indonesia and their attendance status",-1)),S[18]||(S[18]=g("thead",null,[g("tr",null,[g("th",{scope:"col"},"Name"),g("th",{scope:"col"},"Status")])],-1)),g("tbody",null,[(P(!0),O(Se,null,hn(e.value,x=>(P(),O("tr",{key:x.id},[g("td",null,H(x.name),1),g("td",null,[g("span",{class:vt(["status",x.status])},H(x.status),3)])]))),128)),e.value.length===0?(P(),O("tr",pE,[...S[9]||(S[9]=[g("td",{colspan:"2",class:"empty-state"},"The guest list is coming soon.",-1)])])):te("",!0),g("tr",mE,[g("td",gE,[g("button",{class:"add-person-button","aria-expanded":a.value,"aria-controls":"add-person-form",disabled:c.value,onClick:S[1]||(S[1]=x=>{a.value=!a.value,u.value="",h.value=""})},[...S[10]||(S[10]=[g("span",{"aria-hidden":"true"},"＋",-1),Q(" Add Person",-1)])],8,vE),a.value?(P(),O(Se,{key:0},[S[16]||(S[16]=g("h2",null,"Add Person",-1)),g("form",{id:"add-person-form",class:"person-form",onSubmit:Nr(A,["prevent"])},[g("fieldset",{disabled:c.value},[g("label",null,[S[11]||(S[11]=Q("Name",-1)),oe(g("input",{"onUpdate:modelValue":S[2]||(S[2]=x=>i.value=x),required:"",maxlength:"120",pattern:".*\\S.*",autocomplete:"name"},null,512),[[ce,i.value]])]),g("label",null,[S[13]||(S[13]=Q("Status ",-1)),oe(g("select",{"onUpdate:modelValue":S[3]||(S[3]=x=>l.value=x)},[...S[12]||(S[12]=[g("option",{value:"invited"},"Invited",-1),g("option",{value:"committed"},"Committed",-1),g("option",{value:"interested"},"Interested",-1)])],512),[[nf,l.value]])]),g("label",null,[S[14]||(S[14]=Q("Phone Number (optional)",-1)),oe(g("input",{"onUpdate:modelValue":S[4]||(S[4]=x=>s.value=x),type:"tel",autocomplete:"tel",maxlength:"40"},null,512),[[ce,s.value]])]),g("label",null,[S[15]||(S[15]=Q("Email (optional)",-1)),oe(g("input",{"onUpdate:modelValue":S[5]||(S[5]=x=>o.value=x),type:"email",autocomplete:"email",maxlength:"254"},null,512),[[ce,o.value]])]),g("button",bE,H(c.value?"Saving…":"Save Person"),1),g("button",{class:"panel-button secondary",type:"button",onClick:S[6]||(S[6]=x=>a.value=!1)},"Cancel")],8,yE)],32)],64)):te("",!0),u.value?(P(),O("p",_E,H(u.value),1)):te("",!0)])])])]))]))}}),IE=pt(wE,[["__scopeId","data-v-a4b1efea"]]),EE={key:1,class:"attendants-page"},TE={class:"sign-in-card","aria-labelledby":"attendants-sign-in"},AE=ht({__name:"AttendantsPage",setup(t){return(e,n)=>{var r;return D(Gt)?(P(),Me(IE,{key:(r=D(De))==null?void 0:r.uid})):(P(),O("main",EE,[g("button",{class:"back",type:"button",onClick:n[0]||(n[0]=i=>D(Ke)("home"))},"← Back to overview"),n[4]||(n[4]=g("div",{class:"section-eyebrow"},"The Gang",-1)),n[5]||(n[5]=g("h1",{class:"section-title"},[Q("Who's "),g("em",null,"Going?")],-1)),n[6]||(n[6]=g("p",{class:"intro"},"The crew for our Indonesia adventure.",-1)),g("section",TE,[n[2]||(n[2]=g("h2",{id:"attendants-sign-in"},"Sign in to view attendants",-1)),n[3]||(n[3]=g("p",null,"You need to sign in to see the guest list and add people to the trip.",-1)),g("button",{class:"primary",type:"button",onClick:n[1]||(n[1]=(...i)=>D(Mr)&&D(Mr)(...i))},"Sign in to view attendants")])]))}}}),SE=pt(AE,[["__scopeId","data-v-9197132b"]]),kE={class:"welcome-screen"},PE={class:"welcome-card","aria-labelledby":"welcome-title"},CE=["disabled"],xE={key:0},RE={key:1},NE=["minlength","autocomplete"],DE={class:"primary"},VE={key:0,role:"alert"},OE={key:1,class:"confirmation",role:"status"},LE=["disabled"],ME=["disabled"],FE=["disabled"],UE=["disabled"],$E=ht({__name:"WelcomePage",setup(t){const e=z("signin"),n=z(""),r=z(""),i=z(""),s=z(!1),o=z(""),a=z("");function l(h){const p=h==null?void 0:h.code;return p==="auth/email-already-in-use"?"An account already exists for this email. Sign in or use Forgot password to reset it.":p==="auth/invalid-email"?"Enter a valid email address.":p==="auth/network-request-failed"||p==="unavailable"?"Unable to reach Firebase. Check your connection and try again.":p==="auth/invalid-credential"||p==="auth/wrong-password"||p==="auth/user-not-found"?"The email or password is incorrect. Try again or use Forgot password.":p==="auth/user-disabled"?"This account has been disabled. Please contact the site owner.":p==="auth/account-exists-with-different-credential"?"This email already uses another sign-in method. Sign in with your original method.":p==="permission-denied"?"Your account is signed in, but the guest list permissions need updating. Please contact the site owner.":p==="auth/popup-closed-by-user"||p==="auth/cancelled-popup-request"?"Sign-in was cancelled. You can try again.":p==="auth/popup-blocked"?"Allow popups for this site and try again.":p==="auth/operation-not-allowed"?"This sign-in method is not enabled yet. Please contact the site owner.":p==="auth/unauthorized-domain"?"This website domain needs to be enabled for sign-in by the site owner.":p==="auth/weak-password"||p==="auth/password-does-not-meet-requirements"?"Choose a stronger password that meets the site’s password policy.":p==="auth/too-many-requests"?"Too many attempts. Please wait a little before trying again.":`Unable to complete sign-in. Please try again${p?` (${p})`:""}.`}async function c(){if(s.value)return;s.value=!0,o.value="",kt.value="",a.value="",oi.value=!0;let h=!1;try{const p=Hn(En());if(e.value==="reset")await i0(p,r.value.trim()),a.value="If an account exists for this email, you’ll receive a password reset link.";else if(e.value==="signup"){if(!n.value.trim())throw new Error("Name required");const E=await s0(p,r.value.trim(),i.value);h=!0,await l0(E.user,{displayName:n.value.trim()}),await Ss(E.user,!0)}else{const E=await o0(p,r.value.trim(),i.value);await Ss(E.user,!0)}i.value=""}catch(p){o.value=h?`Your account was created, but setup could not finish. ${l(p)} Sign in again to retry setup; you don’t need to create another account.`:l(p)}finally{oi.value=!1,s.value=!1}}async function u(){if(!s.value){s.value=!0,o.value="",kt.value="",oi.value=!0;try{const h=new an;h.setCustomParameters({prompt:"select_account"});const p=await N0(Hn(En()),h);await Ss(p.user,!0)}catch(h){o.value=l(h)}finally{oi.value=!1,s.value=!1}}}return(h,p)=>(P(),O("main",kE,[g("section",PE,[p[9]||(p[9]=g("div",{class:"hero-stamp"},"The Gang Goes to Indonesia",-1)),p[10]||(p[10]=g("h1",{id:"welcome-title"},[Q("Ready for "),g("em",null,"adventure?")],-1)),p[11]||(p[11]=g("p",{class:"intro"},"Sign in to join the crew, or explore as a guest.",-1)),g("h2",null,H(e.value==="signup"?"Create your account":e.value==="reset"?"Reset your password":"Welcome back"),1),g("form",{onSubmit:Nr(c,["prevent"])},[g("fieldset",{disabled:s.value},[e.value==="signup"?(P(),O("label",xE,[p[6]||(p[6]=Q("Name",-1)),oe(g("input",{"onUpdate:modelValue":p[0]||(p[0]=E=>n.value=E),required:"",maxlength:"120",pattern:".*\\S.*",autocomplete:"name"},null,512),[[ce,n.value]])])):te("",!0),g("label",null,[p[7]||(p[7]=Q("Email",-1)),oe(g("input",{"onUpdate:modelValue":p[1]||(p[1]=E=>r.value=E),required:"",type:"email",autocomplete:"email"},null,512),[[ce,r.value]])]),e.value!=="reset"?(P(),O("label",RE,[p[8]||(p[8]=Q("Password",-1)),oe(g("input",{"onUpdate:modelValue":p[2]||(p[2]=E=>i.value=E),required:"",type:"password",minlength:e.value==="signup"?6:void 0,autocomplete:e.value==="signup"?"new-password":"current-password"},null,8,NE),[[ce,i.value]])])):te("",!0),g("button",DE,H(s.value?"Please wait…":e.value==="signup"?"Create Account":e.value==="reset"?"Send Reset Link":"Sign In"),1)],8,CE)],32),o.value||D(kt)?(P(),O("p",VE,H(o.value||D(kt)),1)):te("",!0),a.value?(P(),O("p",OE,H(a.value),1)):te("",!0),e.value==="signin"?(P(),O("button",{key:2,class:"text-button",disabled:s.value,onClick:p[3]||(p[3]=E=>{e.value="reset",o.value="",a.value=""})},"Forgot password?",8,LE)):te("",!0),p[12]||(p[12]=g("div",{class:"divider"},"or",-1)),g("button",{class:"secondary",disabled:s.value,onClick:u},"Continue with Google",8,ME),g("button",{class:"text-button",disabled:s.value,onClick:p[4]||(p[4]=E=>{e.value=e.value==="signin"?"signup":"signin",o.value="",a.value="",i.value=""})},H(e.value==="signin"?"Create an account":"Back to sign in"),9,FE),g("button",{class:"text-button guest-button",disabled:s.value,onClick:p[5]||(p[5]=(...E)=>D(Ou)&&D(Ou)(...E))},"Continue as a Guest →",8,UE),p[13]||(p[13]=g("p",{class:"privacy-note activity-note"},"We record guest entries and members’ latest sign-in times to understand use of the trip site.",-1))])]))}}),BE=pt($E,[["__scopeId","data-v-c753fd39"]]),jE={key:0,class:"visitor-bar",role:"status"},HE={class:"visitor-bar"},WE={key:0,role:"alert"},qE={key:3},zE=ht({__name:"App",setup(t){tw();const e=z(!1);return xt(ye,n=>{n==="flights"&&(e.value=!0)},{immediate:!0}),(n,r)=>(P(),O(Se,null,[D(sr)?D(Fe)?(P(),O(Se,{key:2},[ze(CI),g("div",HE,[g("span",null,H(D(Fe).name==="Guest"&&!D(Fe).id?"Browsing as a guest":`Welcome, ${D(Fe).name}`),1),g("button",{onClick:r[0]||(r[0]=(...i)=>D(Mr)&&D(Mr)(...i))},H(D(Gt)?"Sign out":"Sign in"),1),D(kt)?(P(),O("p",WE,H(D(kt)),1)):te("",!0)]),D(ye)==="home"||D(ye)==="profile"&&!D(Gt)?(P(),Me(BI,{key:0})):D(ye)==="komodo"?(P(),Me(JI,{key:1})):D(ye)==="bali"?(P(),Me(XI,{key:2})):D(ye)==="bali-housing"?(P(),Me(eE,{key:3})):D(ye)==="java"?(P(),Me(aE,{key:4})):D(ye)==="people"?(P(),Me(SE,{key:5})):D(ye)==="profile"&&D(Gt)?(P(),Me(Hw,{key:6})):te("",!0)],64)):(P(),Me(BE,{key:1})):(P(),O("p",jE,"Restoring your session…")),e.value?oe((P(),O("div",qE,[ze(AI)],512)),[[tf,D(Fe)&&D(sr)&&D(ye)==="flights"]]):te("",!0),D(Fe)&&D(sr)?(P(),Me(NI,{key:4})):te("",!0)],64))}}),GE=pt(zE,[["__scopeId","data-v-81818288"]]);Sg(GE).mount("#app");
