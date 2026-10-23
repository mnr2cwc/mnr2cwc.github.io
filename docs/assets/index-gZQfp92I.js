(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function la(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const fe={},li=[],Vt=()=>{},Zc=()=>!1,Or=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Vr=t=>t.startsWith("onUpdate:"),Ae=Object.assign,ca=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},eh=Object.prototype.hasOwnProperty,se=(t,e)=>eh.call(t,e),z=Array.isArray,ci=t=>ps(t)==="[object Map]",Mr=t=>ps(t)==="[object Set]",cl=t=>ps(t)==="[object Date]",Y=t=>typeof t=="function",me=t=>typeof t=="string",Ft=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",Qc=t=>(oe(t)||Y(t))&&Y(t.then)&&Y(t.catch),eu=Object.prototype.toString,ps=t=>eu.call(t),th=t=>ps(t).slice(8,-1),tu=t=>ps(t)==="[object Object]",ua=t=>me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fi=la(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Lr=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},nh=/-\w/g,vt=Lr(t=>t.replace(nh,e=>e.slice(1).toUpperCase())),ih=/\B([A-Z])/g,ni=Lr(t=>t.replace(ih,"-$1").toLowerCase()),nu=Lr(t=>t.charAt(0).toUpperCase()+t.slice(1)),uo=Lr(t=>t?`on${nu(t)}`:""),Dt=(t,e)=>!Object.is(t,e),Bs=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},iu=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Fr=t=>{const e=parseFloat(t);return isNaN(e)?t:e},sh=t=>{const e=me(t)?Number(t):NaN;return isNaN(e)?t:e};let ul;const Ur=()=>ul||(ul=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function da(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=me(i)?lh(i):da(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(me(t)||oe(t))return t}const rh=/;(?![^(]*\))/g,oh=/:([^]+)/,ah=/\/\*[^]*?\*\//g;function lh(t){const e={};return t.replace(ah,"").split(rh).forEach(n=>{if(n){const i=n.split(oh);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ct(t){let e="";if(me(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const i=Ct(t[n]);i&&(e+=i+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ch="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",uh=la(ch);function su(t){return!!t||t===""}function dh(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=ms(t[i],e[i]);return n}function ms(t,e){if(t===e)return!0;let n=cl(t),i=cl(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Ft(t),i=Ft(e),n||i)return t===e;if(n=z(t),i=z(e),n||i)return n&&i?dh(t,e):!1;if(n=oe(t),i=oe(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!ms(t[o],e[o]))return!1}}return String(t)===String(e)}function fh(t,e){return t.findIndex(n=>ms(n,e))}const ru=t=>!!(t&&t.__v_isRef===!0),we=t=>me(t)?t:t==null?"":z(t)||oe(t)&&(t.toString===eu||!Y(t.toString))?ru(t)?we(t.value):JSON.stringify(t,ou,2):String(t),ou=(t,e)=>ru(e)?ou(t,e.value):ci(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[fo(i,r)+" =>"]=s,n),{})}:Mr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>fo(n))}:Ft(e)?fo(e):oe(e)&&!z(e)&&!tu(e)?String(e):e,fo=(t,e="")=>{var n;return Ft(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Re;class hh{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Re&&(Re.active?(this.parent=Re,this.index=(Re.scopes||(Re.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Re;try{return Re=this,e()}finally{Re=n}}}on(){++this._on===1&&(this.prevScope=Re,Re=this)}off(){if(this._on>0&&--this._on===0){if(Re===this)Re=this.prevScope;else{let e=Re;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ph(){return Re}let pe;const ho=new WeakSet;class au{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Re&&(Re.active?Re.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ho.has(this)&&(ho.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||cu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,dl(this),uu(this);const e=pe,n=yt;pe=this,yt=!0;try{return this.fn()}finally{du(this),pe=e,yt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)pa(e);this.deps=this.depsTail=void 0,dl(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ho.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Oo(this)&&this.run()}get dirty(){return Oo(this)}}let lu=0,Ui,$i;function cu(t,e=!1){if(t.flags|=8,e){t.next=$i,$i=t;return}t.next=Ui,Ui=t}function fa(){lu++}function ha(){if(--lu>0)return;if($i){let e=$i;for($i=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ui;){let e=Ui;for(Ui=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function uu(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function du(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),pa(i),mh(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function Oo(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(fu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function fu(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ji)||(t.globalVersion=Ji,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Oo(t))))return;t.flags|=2;const e=t.dep,n=pe,i=yt;pe=t,yt=!0;try{uu(t);const s=t.fn(t._value);(e.version===0||Dt(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{pe=n,yt=i,du(t),t.flags&=-3}}function pa(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)pa(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function mh(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let yt=!0;const hu=[];function tn(){hu.push(yt),yt=!1}function nn(){const t=hu.pop();yt=t===void 0?!0:t}function dl(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=pe;pe=void 0;try{e()}finally{pe=n}}}let Ji=0;class gh{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ma{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!pe||!yt||pe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==pe)n=this.activeLink=new gh(pe,this),pe.deps?(n.prevDep=pe.depsTail,pe.depsTail.nextDep=n,pe.depsTail=n):pe.deps=pe.depsTail=n,pu(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=pe.depsTail,n.nextDep=void 0,pe.depsTail.nextDep=n,pe.depsTail=n,pe.deps===n&&(pe.deps=i)}return n}trigger(e){this.version++,Ji++,this.notify(e)}notify(e){fa();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ha()}}}function pu(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)pu(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Vo=new WeakMap,Bn=Symbol(""),Mo=Symbol(""),Yi=Symbol("");function Le(t,e,n){if(yt&&pe){let i=Vo.get(t);i||Vo.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new ma),s.map=i,s.key=n),s.track()}}function zt(t,e,n,i,s,r){const o=Vo.get(t);if(!o){Ji++;return}const a=l=>{l&&l.trigger()};if(fa(),e==="clear")o.forEach(a);else{const l=z(t),c=l&&ua(n);if(l&&n==="length"){const u=Number(i);o.forEach((d,m)=>{(m==="length"||m===Yi||!Ft(m)&&m>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Yi)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Bn)),ci(t)&&a(o.get(Mo)));break;case"delete":l||(a(o.get(Bn)),ci(t)&&a(o.get(Mo)));break;case"set":ci(t)&&a(o.get(Bn));break}}ha()}function ii(t){const e=ie(t);return e===t?e:(Le(e,"iterate",Yi),ct(t)?e:e.map(wt))}function $r(t){return Le(t=ie(t),"iterate",Yi),t}function xt(t,e){return sn(t)?mi(jn(t)?wt(e):e):wt(e)}const vh={__proto__:null,[Symbol.iterator](){return po(this,Symbol.iterator,t=>xt(this,t))},concat(...t){return ii(this).concat(...t.map(e=>z(e)?ii(e):e))},entries(){return po(this,"entries",t=>(t[1]=xt(this,t[1]),t))},every(t,e){return Bt(this,"every",t,e,void 0,arguments)},filter(t,e){return Bt(this,"filter",t,e,n=>n.map(i=>xt(this,i)),arguments)},find(t,e){return Bt(this,"find",t,e,n=>xt(this,n),arguments)},findIndex(t,e){return Bt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Bt(this,"findLast",t,e,n=>xt(this,n),arguments)},findLastIndex(t,e){return Bt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Bt(this,"forEach",t,e,void 0,arguments)},includes(...t){return mo(this,"includes",t)},indexOf(...t){return mo(this,"indexOf",t)},join(t){return ii(this).join(t)},lastIndexOf(...t){return mo(this,"lastIndexOf",t)},map(t,e){return Bt(this,"map",t,e,void 0,arguments)},pop(){return Pi(this,"pop")},push(...t){return Pi(this,"push",t)},reduce(t,...e){return fl(this,"reduce",t,e)},reduceRight(t,...e){return fl(this,"reduceRight",t,e)},shift(){return Pi(this,"shift")},some(t,e){return Bt(this,"some",t,e,void 0,arguments)},splice(...t){return Pi(this,"splice",t)},toReversed(){return ii(this).toReversed()},toSorted(t){return ii(this).toSorted(t)},toSpliced(...t){return ii(this).toSpliced(...t)},unshift(...t){return Pi(this,"unshift",t)},values(){return po(this,"values",t=>xt(this,t))}};function po(t,e,n){const i=$r(t),s=i[e]();return i!==t&&!ct(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const yh=Array.prototype;function Bt(t,e,n,i,s,r){const o=$r(t),a=o!==t&&!ct(t),l=o[e];if(l!==yh[e]){const d=l.apply(t,r);return a?wt(d):d}let c=n;o!==t&&(a?c=function(d,m){return n.call(this,xt(t,d),m,t)}:n.length>2&&(c=function(d,m){return n.call(this,d,m,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function fl(t,e,n,i){const s=$r(t),r=s!==t&&!ct(t);let o=n,a=!1;s!==t&&(r?(a=i.length===0,o=function(c,u,d){return a&&(a=!1,c=xt(t,c)),n.call(this,c,xt(t,u),d,t)}):n.length>3&&(o=function(c,u,d){return n.call(this,c,u,d,t)}));const l=s[e](o,...i);return a?xt(t,l):l}function mo(t,e,n){const i=ie(t);Le(i,"iterate",Yi);const s=i[e](...n);return(s===-1||s===!1)&&ya(n[0])?(n[0]=ie(n[0]),i[e](...n)):s}function Pi(t,e,n=[]){tn(),fa();const i=ie(t)[e].apply(t,n);return ha(),nn(),i}const _h=la("__proto__,__v_isRef,__isVue"),mu=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ft));function bh(t){Ft(t)||(t=String(t));const e=ie(this);return Le(e,"has",t),e.hasOwnProperty(t)}class gu{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?xh:bu:r?_u:yu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=z(e);if(!s){let l;if(o&&(l=vh[n]))return l;if(n==="hasOwnProperty")return bh}const a=Reflect.get(e,n,$e(e)?e:i);if((Ft(n)?mu.has(n):_h(n))||(s||Le(e,"get",n),r))return a;if($e(a)){const l=o&&ua(n)?a:a.value;return s&&oe(l)?Fo(l):l}return oe(a)?s?Fo(a):Br(a):a}}class vu extends gu{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];const o=z(e)&&ua(n);if(!this._isShallow){const c=sn(r);if(!ct(i)&&!sn(i)&&(r=ie(r),i=ie(i)),!o&&$e(r)&&!$e(i))return c||(r.value=i),!0}const a=o?Number(n)<e.length:se(e,n),l=Reflect.set(e,n,i,$e(e)?e:s);return e===ie(s)&&(a?Dt(i,r)&&zt(e,"set",n,i):zt(e,"add",n,i)),l}deleteProperty(e,n){const i=se(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&zt(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Ft(n)||!mu.has(n))&&Le(e,"has",n),i}ownKeys(e){return Le(e,"iterate",z(e)?"length":Bn),Reflect.ownKeys(e)}}class wh extends gu{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Eh=new vu,Ih=new wh,Th=new vu(!0);const Lo=t=>t,Ds=t=>Reflect.getPrototypeOf(t);function Ah(t,e,n){return function(...i){const s=this.__v_raw,r=ie(s),o=ci(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?Lo:e?mi:wt;return!e&&Le(r,"iterate",l?Mo:Bn),Ae(Object.create(c),{next(){const{value:d,done:m}=c.next();return m?{value:d,done:m}:{value:a?[u(d[0]),u(d[1])]:u(d),done:m}}})}}function Os(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Sh(t,e){const n={get(s){const r=this.__v_raw,o=ie(r),a=ie(s);t||(Dt(s,a)&&Le(o,"get",s),Le(o,"get",a));const{has:l}=Ds(o),c=e?Lo:t?mi:wt;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&Le(ie(s),"iterate",Bn),s.size},has(s){const r=this.__v_raw,o=ie(r),a=ie(s);return t||(Dt(s,a)&&Le(o,"has",s),Le(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ie(a),c=e?Lo:t?mi:wt;return!t&&Le(l,"iterate",Bn),a.forEach((u,d)=>s.call(r,c(u),c(d),o))}};return Ae(n,t?{add:Os("add"),set:Os("set"),delete:Os("delete"),clear:Os("clear")}:{add(s){const r=ie(this),o=Ds(r),a=ie(s),l=!e&&!ct(s)&&!sn(s)?a:s;return o.has.call(r,l)||Dt(s,l)&&o.has.call(r,s)||Dt(a,l)&&o.has.call(r,a)||(r.add(l),zt(r,"add",l,l)),this},set(s,r){!e&&!ct(r)&&!sn(r)&&(r=ie(r));const o=ie(this),{has:a,get:l}=Ds(o);let c=a.call(o,s);c||(s=ie(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?Dt(r,u)&&zt(o,"set",s,r):zt(o,"add",s,r),this},delete(s){const r=ie(this),{has:o,get:a}=Ds(r);let l=o.call(r,s);l||(s=ie(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&zt(r,"delete",s,void 0),c},clear(){const s=ie(this),r=s.size!==0,o=s.clear();return r&&zt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ah(s,t,e)}),n}function ga(t,e){const n=Sh(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(se(n,s)&&s in i?n:i,s,r)}const Ph={get:ga(!1,!1)},kh={get:ga(!1,!0)},Ch={get:ga(!0,!1)};const yu=new WeakMap,_u=new WeakMap,bu=new WeakMap,xh=new WeakMap;function Rh(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Br(t){return sn(t)?t:va(t,!1,Eh,Ph,yu)}function Nh(t){return va(t,!1,Th,kh,_u)}function Fo(t){return va(t,!0,Ih,Ch,bu)}function va(t,e,n,i,s){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const r=s.get(t);if(r)return r;const o=Rh(th(t));if(o===0)return t;const a=new Proxy(t,o===2?i:n);return s.set(t,a),a}function jn(t){return sn(t)?jn(t.__v_raw):!!(t&&t.__v_isReactive)}function sn(t){return!!(t&&t.__v_isReadonly)}function ct(t){return!!(t&&t.__v_isShallow)}function ya(t){return t?!!t.__v_raw:!1}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function Dh(t){return!se(t,"__v_skip")&&Object.isExtensible(t)&&iu(t,"__v_skip",!0),t}const wt=t=>oe(t)?Br(t):t,mi=t=>oe(t)?Fo(t):t;function $e(t){return t?t.__v_isRef===!0:!1}function ae(t){return Oh(t,!1)}function Oh(t,e){return $e(t)?t:new Vh(t,e)}class Vh{constructor(e,n){this.dep=new ma,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ie(e),this._value=n?e:wt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||ct(e)||sn(e);e=i?e:ie(e),Dt(e,n)&&(this._rawValue=e,this._value=i?e:wt(e),this.dep.trigger())}}function G(t){return $e(t)?t.value:t}const Mh={get:(t,e,n)=>e==="__v_raw"?t:G(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return $e(s)&&!$e(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function wu(t){return jn(t)?t:new Proxy(t,Mh)}class Lh{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ma(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ji-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&pe!==this)return cu(this,!0),!0}get value(){const e=this.dep.track();return fu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Fh(t,e,n=!1){let i,s;return Y(t)?i=t:(i=t.get,s=t.set),new Lh(i,s,n)}const Vs={},tr=new WeakMap;let Dn;function Uh(t,e=!1,n=Dn){if(n){let i=tr.get(n);i||tr.set(n,i=[]),i.push(t)}}function $h(t,e,n=fe){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=U=>s?U:ct(U)||s===!1||s===0?Kt(U,1):Kt(U);let u,d,m,E,x=!1,R=!1;if($e(t)?(d=()=>t.value,x=ct(t)):jn(t)?(d=()=>c(t),x=!0):z(t)?(R=!0,x=t.some(U=>jn(U)||ct(U)),d=()=>t.map(U=>{if($e(U))return U.value;if(jn(U))return c(U);if(Y(U))return l?l(U,2):U()})):Y(t)?e?d=l?()=>l(t,2):t:d=()=>{if(m){tn();try{m()}finally{nn()}}const U=Dn;Dn=u;try{return l?l(t,3,[E]):t(E)}finally{Dn=U}}:d=Vt,e&&s){const U=d,Z=s===!0?1/0:s;d=()=>Kt(U(),Z)}const D=ph(),S=()=>{u.stop(),D&&D.active&&ca(D.effects,u)};if(r&&e){const U=e;e=(...Z)=>{const te=U(...Z);return S(),te}}let N=R?new Array(t.length).fill(Vs):Vs;const X=U=>{if(!(!(u.flags&1)||!u.dirty&&!U))if(e){const Z=u.run();if(U||s||x||(R?Z.some((te,y)=>Dt(te,N[y])):Dt(Z,N))){m&&m();const te=Dn;Dn=u;try{const y=[Z,N===Vs?void 0:R&&N[0]===Vs?[]:N,E];N=Z,l?l(e,3,y):e(...y)}finally{Dn=te}}}else u.run()};return a&&a(X),u=new au(d),u.scheduler=o?()=>o(X,!1):X,E=U=>Uh(U,!1,u),m=u.onStop=()=>{const U=tr.get(u);if(U){if(l)l(U,4);else for(const Z of U)Z();tr.delete(u)}},e?i?X(!0):N=u.run():o?o(X.bind(null,!0),!0):u.run(),S.pause=u.pause.bind(u),S.resume=u.resume.bind(u),S.stop=S,S}function Kt(t,e=1/0,n){if(e<=0||!oe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,$e(t))Kt(t.value,e,n);else if(z(t))for(let i=0;i<t.length;i++)Kt(t[i],e,n);else if(Mr(t)||ci(t))t.forEach(i=>{Kt(i,e,n)});else if(tu(t)){for(const i in t)Kt(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Kt(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gs(t,e,n,i){try{return i?t(...i):t()}catch(s){jr(s,e,n)}}function ut(t,e,n,i){if(Y(t)){const s=gs(t,e,n,i);return s&&Qc(s)&&s.catch(r=>{jr(r,e,n)}),s}if(z(t)){const s=[];for(let r=0;r<t.length;r++)s.push(ut(t[r],e,n,i));return s}}function jr(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||fe;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(r){tn(),gs(r,null,10,[t,l,c]),nn();return}}Bh(t,n,s,i,o)}function Bh(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const He=[];let Pt=-1;const ui=[];let pn=null,si=0;const Eu=Promise.resolve();let nr=null;function Iu(t){const e=nr||Eu;return t?e.then(this?t.bind(this):t):e}function jh(t){let e=Pt+1,n=He.length;for(;e<n;){const i=e+n>>>1,s=He[i],r=Xi(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function _a(t){if(!(t.flags&1)){const e=Xi(t),n=He[He.length-1];!n||!(t.flags&2)&&e>=Xi(n)?He.push(t):He.splice(jh(e),0,t),t.flags|=1,Tu()}}function Tu(){nr||(nr=Eu.then(Su))}function Hh(t){z(t)?ui.push(...t):pn&&t.id===-1?pn.splice(si+1,0,t):t.flags&1||(ui.push(t),t.flags|=1),Tu()}function hl(t,e,n=Pt+1){for(;n<He.length;n++){const i=He[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;He.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Au(t){if(ui.length){const e=[...new Set(ui)].sort((n,i)=>Xi(n)-Xi(i));if(ui.length=0,pn){pn.push(...e);return}for(pn=e,si=0;si<pn.length;si++){const n=pn[si];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}pn=null,si=0}}const Xi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Su(t){try{for(Pt=0;Pt<He.length;Pt++){const e=He[Pt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),gs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Pt<He.length;Pt++){const e=He[Pt];e&&(e.flags&=-2)}Pt=-1,He.length=0,Au(),nr=null,(He.length||ui.length)&&Su()}}let lt=null,Pu=null;function ir(t){const e=lt;return lt=t,Pu=t&&t.type.__scopeId||null,e}function ku(t,e=lt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&or(-1);const r=ir(e);let o;try{o=t(...s)}finally{ir(r),i._d&&or(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function pt(t,e){if(lt===null)return t;const n=Jr(lt),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=fe]=e[s];r&&(Y(r)&&(r={mounted:r,updated:r}),r.deep&&Kt(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Cn(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(tn(),ut(l,n,8,[t.el,a,t,e]),nn())}}function Wh(t,e){if(ze){let n=ze.provides;const i=ze.parent&&ze.parent.provides;i===n&&(n=ze.provides=Object.create(i)),n[t]=e}}function js(t,e,n=!1){const i=od();if(i||di){let s=di?di._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&Y(e)?e.call(i&&i.proxy):e}}const zh=Symbol.for("v-scx"),Kh=()=>js(zh);function go(t,e,n){return Cu(t,e,n)}function Cu(t,e,n=fe){const{immediate:i,deep:s,flush:r,once:o}=n,a=Ae({},n),l=e&&i||!e&&r!=="post";let c;if(es){if(r==="sync"){const E=Kh();c=E.__watcherHandles||(E.__watcherHandles=[])}else if(!l){const E=()=>{};return E.stop=Vt,E.resume=Vt,E.pause=Vt,E}}const u=ze;a.call=(E,x,R)=>ut(E,u,x,R);let d=!1;r==="post"?a.scheduler=E=>{je(E,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(E,x)=>{x?E():_a(E)}),a.augmentJob=E=>{e&&(E.flags|=4),d&&(E.flags|=2,u&&(E.id=u.uid,E.i=u))};const m=$h(t,e,a);return es&&(c?c.push(m):l&&m()),m}function Gh(t,e,n){const i=this.proxy,s=me(t)?t.includes(".")?xu(i,t):()=>i[t]:t.bind(i,i);let r;Y(e)?r=e:(r=e.handler,n=e);const o=vs(this),a=Cu(s,r.bind(i),n);return o(),a}function xu(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const hn=new WeakMap,Ru=Symbol("_vte"),Nu=t=>t.__isTeleport,Vn=t=>t&&(t.disabled||t.disabled===""),qh=t=>t&&(t.defer||t.defer===""),pl=t=>typeof SVGElement<"u"&&t instanceof SVGElement,ml=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Uo=(t,e)=>{const n=t&&t.to;return me(n)?e?e(n):null:n},Jh={name:"Teleport",__isTeleport:!0,process(t,e,n,i,s,r,o,a,l,c){const{mc:u,pc:d,pbc:m,o:{insert:E,querySelector:x,createText:R,createComment:D,parentNode:S}}=c,N=Vn(e.props);let{dynamicChildren:X}=e;const U=(y,h,f)=>{y.shapeFlag&16&&u(y.children,h,f,s,r,o,a,l)},Z=(y=e)=>{const h=Vn(y.props),f=y.target=Uo(y.props,x),_=$o(f,y,R,E);f&&(o!=="svg"&&pl(f)?o="svg":o!=="mathml"&&ml(f)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(f),h||(U(y,f,_),xi(y,!1)))},te=y=>{const h=()=>{if(hn.get(y)===h){if(hn.delete(y),Vn(y.props)){const f=S(y.el)||n;U(y,f,y.anchor),xi(y,!0)}Z(y)}};hn.set(y,h),je(h,r)};if(t==null){const y=e.el=R(""),h=e.anchor=R("");if(E(y,n,i),E(h,n,i),qh(e.props)||r&&r.pendingBranch){te(e);return}N&&(U(e,n,h),xi(e,!0)),Z()}else{e.el=t.el;const y=e.anchor=t.anchor,h=hn.get(t);if(h){h.flags|=8,hn.delete(t),te(e);return}e.targetStart=t.targetStart;const f=e.target=t.target,_=e.targetAnchor=t.targetAnchor,b=Vn(t.props),v=b?n:f,p=b?y:_;if(o==="svg"||pl(f)?o="svg":(o==="mathml"||ml(f))&&(o="mathml"),X?(m(t.dynamicChildren,X,v,s,r,o,a),Ea(t,e,!0)):l||d(t,e,v,p,s,r,o,a,!1),N)b?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Ms(e,n,y,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const ce=e.target=Uo(e.props,x);ce&&Ms(e,ce,null,c,0)}else b&&Ms(e,f,_,c,1);xi(e,N)}},remove(t,e,n,{um:i,o:{remove:s}},r){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:d,props:m}=t,E=r||!Vn(m),x=hn.get(t);if(x&&(x.flags|=8,hn.delete(t)),d&&(s(c),s(u)),r&&s(l),!x&&o&16)for(let R=0;R<a.length;R++){const D=a[R];i(D,e,n,E,!!D.dynamicChildren)}},move:Ms,hydrate:Yh};function Ms(t,e,n,{o:{insert:i},m:s},r=2){r===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,d=r===2;if(d&&i(o,e,n),!hn.has(t)&&(!d||Vn(u))&&l&16)for(let m=0;m<c.length;m++)s(c[m],e,n,2);d&&i(a,e,n)}function Yh(t,e,n,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},d){function m(D,S){let N=S;for(;N;){if(N&&N.nodeType===8){if(N.data==="teleport start anchor")e.targetStart=N;else if(N.data==="teleport anchor"){e.targetAnchor=N,D._lpa=e.targetAnchor&&o(e.targetAnchor);break}}N=o(N)}}function E(D,S){S.anchor=d(o(D),S,a(D),n,i,s,r)}const x=e.target=Uo(e.props,l),R=Vn(e.props);if(x){const D=x._lpa||x.firstChild;e.shapeFlag&16&&(R?(E(t,e),m(x,D),e.targetAnchor||$o(x,e,u,c,a(t)===x?t:null)):(e.anchor=o(t),m(x,D),e.targetAnchor||$o(x,e,u,c),d(D&&o(D),e,x,n,i,s,r))),xi(e,R)}else R&&e.shapeFlag&16&&(E(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const Du=Jh;function xi(t,e){const n=t.ctx;if(n&&n.ut){let i,s;for(e?(i=t.el,s=t.anchor):(i=t.targetStart,s=t.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function $o(t,e,n,i,s=null){const r=e.targetStart=n(""),o=e.targetAnchor=n("");return r[Ru]=o,t&&(i(r,t,s),i(o,t,s)),o}const at=Symbol("_leaveCb"),ki=Symbol("_enterCb");function Xh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return zr(()=>{t.isMounted=!0}),Bu(()=>{t.isUnmounting=!0}),t}const rt=[Function,Array],Ou={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:rt,onEnter:rt,onAfterEnter:rt,onEnterCancelled:rt,onBeforeLeave:rt,onLeave:rt,onAfterLeave:rt,onLeaveCancelled:rt,onBeforeAppear:rt,onAppear:rt,onAfterAppear:rt,onAppearCancelled:rt},Vu=t=>{const e=t.subTree;return e.component?Vu(e.component):e},Zh={name:"BaseTransition",props:Ou,setup(t,{slots:e}){const n=od(),i=Xh();return()=>{const s=e.default&&Fu(e.default(),!0),r=s&&s.length?Mu(s):n.subTree?Fe():void 0;if(!r)return;const o=ie(t),{mode:a}=o;if(i.isLeaving)return vo(r);const l=gl(r);if(!l)return vo(r);let c=Bo(l,o,i,n,d=>c=d);l.type!==We&&Zi(l,c);let u=n.subTree&&gl(n.subTree);if(u&&u.type!==We&&!Mn(u,l)&&Vu(n).type!==We){let d=Bo(u,o,i,n);if(Zi(u,d),a==="out-in"&&l.type!==We)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},vo(r);a==="in-out"&&l.type!==We?d.delayLeave=(m,E,x)=>{const R=Lu(i,u);R[String(u.key)]=u,m[at]=()=>{E(),m[at]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{x(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Mu(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==We){e=n;break}}return e}const Qh=Zh;function Lu(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Bo(t,e,n,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:m,onLeave:E,onAfterLeave:x,onLeaveCancelled:R,onBeforeAppear:D,onAppear:S,onAfterAppear:N,onAppearCancelled:X}=e,U=String(t.key),Z=Lu(n,t),te=(f,_)=>{f&&ut(f,i,9,_)},y=(f,_)=>{const b=_[1];te(f,_),z(f)?f.every(v=>v.length<=1)&&b():f.length<=1&&b()},h={mode:o,persisted:a,beforeEnter(f){let _=l;if(!n.isMounted)if(r)_=D||l;else return;f[at]&&f[at](!0);const b=Z[U];b&&Mn(t,b)&&b.el[at]&&b.el[at](),te(_,[f])},enter(f){if(Z[U]===t)return;let _=c,b=u,v=d;if(!n.isMounted)if(r)_=S||c,b=N||u,v=X||d;else return;let p=!1;f[ki]=st=>{p||(p=!0,st?te(v,[f]):te(b,[f]),h.delayedLeave&&h.delayedLeave(),f[ki]=void 0)};const ce=f[ki].bind(null,!1);_?y(_,[f,ce]):ce()},leave(f,_){const b=String(t.key);if(f[ki]&&f[ki](!0),n.isUnmounting)return _();te(m,[f]);let v=!1;f[at]=ce=>{v||(v=!0,_(),ce?te(R,[f]):te(x,[f]),f[at]=void 0,Z[b]===t&&delete Z[b])};const p=f[at].bind(null,!1);Z[b]=t,E?y(E,[f,p]):p()},clone(f){const _=Bo(f,e,n,i,s);return s&&s(_),_}};return h}function vo(t){if(Hr(t))return t=Tn(t),t.children=null,t}function gl(t){if(!Hr(t))return Nu(t.type)&&t.children?Mu(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Y(n.default))return n.default()}}function Zi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Zi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Fu(t,e=!1,n){let i=[],s=0;for(let r=0;r<t.length;r++){let o=t[r];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===Je?(o.patchFlag&128&&s++,i=i.concat(Fu(o.children,e,a))):(e||o.type!==We)&&i.push(a!=null?Tn(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function An(t,e){return Y(t)?Ae({name:t.name},e,{setup:t}):t}function Uu(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function vl(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const sr=new WeakMap;function Bi(t,e,n,i,s=!1){if(z(t)){t.forEach((R,D)=>Bi(R,e&&(z(e)?e[D]:e),n,i,s));return}if(ji(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Bi(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?Jr(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===fe?a.refs={}:a.refs,d=a.setupState,m=ie(d),E=d===fe?Zc:R=>vl(u,R)?!1:se(m,R),x=(R,D)=>!(D&&vl(u,D));if(c!=null&&c!==l){if(yl(e),me(c))u[c]=null,E(c)&&(d[c]=null);else if($e(c)){const R=e;x(c,R.k)&&(c.value=null),R.k&&(u[R.k]=null)}}if(Y(l))gs(l,a,12,[o,u]);else{const R=me(l),D=$e(l);if(R||D){const S=()=>{if(t.f){const N=R?E(l)?d[l]:u[l]:x()||!t.k?l.value:u[t.k];if(s)z(N)&&ca(N,r);else if(z(N))N.includes(r)||N.push(r);else if(R)u[l]=[r],E(l)&&(d[l]=u[l]);else{const X=[r];x(l,t.k)&&(l.value=X),t.k&&(u[t.k]=X)}}else R?(u[l]=o,E(l)&&(d[l]=o)):D&&(x(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const N=()=>{S(),sr.delete(t)};N.id=-1,sr.set(t,N),je(N,n)}else yl(t),S()}}}function yl(t){const e=sr.get(t);e&&(e.flags|=8,sr.delete(t))}Ur().requestIdleCallback;Ur().cancelIdleCallback;const ji=t=>!!t.type.__asyncLoader,Hr=t=>t.type.__isKeepAlive;function ep(t,e){$u(t,"a",e)}function tp(t,e){$u(t,"da",e)}function $u(t,e,n=ze){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Wr(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Hr(s.parent.vnode)&&np(i,e,n,s),s=s.parent}}function np(t,e,n,i){const s=Wr(e,t,i,!0);Kr(()=>{ca(i[e],s)},n)}function Wr(t,e,n=ze,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{tn();const a=vs(n),l=ut(e,n,t,o);return a(),nn(),l});return i?s.unshift(r):s.push(r),r}}const an=t=>(e,n=ze)=>{(!es||t==="sp")&&Wr(t,(...i)=>e(...i),n)},ip=an("bm"),zr=an("m"),sp=an("bu"),rp=an("u"),Bu=an("bum"),Kr=an("um"),op=an("sp"),ap=an("rtg"),lp=an("rtc");function cp(t,e=ze){Wr("ec",t,e)}const up=Symbol.for("v-ndc");function dp(t,e,n,i){let s;const r=n,o=z(t);if(o||me(t)){const a=o&&jn(t);let l=!1,c=!1;a&&(l=!ct(t),c=sn(t),t=$r(t)),s=new Array(t.length);for(let u=0,d=t.length;u<d;u++)s[u]=e(l?c?mi(wt(t[u])):wt(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(oe(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}const jo=t=>t?ad(t)?Jr(t):jo(t.parent):null,Hi=Ae(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>jo(t.parent),$root:t=>jo(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Hu(t),$forceUpdate:t=>t.f||(t.f=()=>{_a(t.update)}),$nextTick:t=>t.n||(t.n=Iu.bind(t.proxy)),$watch:t=>Gh.bind(t)}),yo=(t,e)=>t!==fe&&!t.__isScriptSetup&&se(t,e),fp={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(yo(i,e))return o[e]=1,i[e];if(s!==fe&&se(s,e))return o[e]=2,s[e];if(se(r,e))return o[e]=3,r[e];if(n!==fe&&se(n,e))return o[e]=4,n[e];Ho&&(o[e]=0)}}const c=Hi[e];let u,d;if(c)return e==="$attrs"&&Le(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==fe&&se(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,se(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return yo(s,e)?(s[e]=n,!0):i!==fe&&se(i,e)?(i[e]=n,!0):se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(n[a]||t!==fe&&a[0]!=="$"&&se(t,a)||yo(e,a)||se(r,a)||se(i,a)||se(Hi,a)||se(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function _l(t){return z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ho=!0;function hp(t){const e=Hu(t),n=t.proxy,i=t.ctx;Ho=!1,e.beforeCreate&&bl(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:m,beforeUpdate:E,updated:x,activated:R,deactivated:D,beforeDestroy:S,beforeUnmount:N,destroyed:X,unmounted:U,render:Z,renderTracked:te,renderTriggered:y,errorCaptured:h,serverPrefetch:f,expose:_,inheritAttrs:b,components:v,directives:p,filters:ce}=e;if(c&&pp(c,i,null),o)for(const ge in o){const he=o[ge];Y(he)&&(i[ge]=he.bind(n))}if(s){const ge=s.call(n,n);oe(ge)&&(t.data=Br(ge))}if(Ho=!0,r)for(const ge in r){const he=r[ge],Pn=Y(he)?he.bind(n,n):Y(he.get)?he.get.bind(n,n):Vt,Rs=!Y(he)&&Y(he.set)?he.set.bind(n):Vt,kn=Ta({get:Pn,set:Rs});Object.defineProperty(i,ge,{enumerable:!0,configurable:!0,get:()=>kn.value,set:Et=>kn.value=Et})}if(a)for(const ge in a)ju(a[ge],i,n,ge);if(l){const ge=Y(l)?l.call(n):l;Reflect.ownKeys(ge).forEach(he=>{Wh(he,ge[he])})}u&&bl(u,t,"c");function Pe(ge,he){z(he)?he.forEach(Pn=>ge(Pn.bind(n))):he&&ge(he.bind(n))}if(Pe(ip,d),Pe(zr,m),Pe(sp,E),Pe(rp,x),Pe(ep,R),Pe(tp,D),Pe(cp,h),Pe(lp,te),Pe(ap,y),Pe(Bu,N),Pe(Kr,U),Pe(op,f),z(_))if(_.length){const ge=t.exposed||(t.exposed={});_.forEach(he=>{Object.defineProperty(ge,he,{get:()=>n[he],set:Pn=>n[he]=Pn,enumerable:!0})})}else t.exposed||(t.exposed={});Z&&t.render===Vt&&(t.render=Z),b!=null&&(t.inheritAttrs=b),v&&(t.components=v),p&&(t.directives=p),f&&Uu(t)}function pp(t,e,n=Vt){z(t)&&(t=Wo(t));for(const i in t){const s=t[i];let r;oe(s)?"default"in s?r=js(s.from||i,s.default,!0):r=js(s.from||i):r=js(s),$e(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function bl(t,e,n){ut(z(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function ju(t,e,n,i){let s=i.includes(".")?xu(n,i):()=>n[i];if(me(t)){const r=e[t];Y(r)&&go(s,r)}else if(Y(t))go(s,t.bind(n));else if(oe(t))if(z(t))t.forEach(r=>ju(r,e,n,i));else{const r=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(r)&&go(s,r,t)}}function Hu(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>rr(l,c,o,!0)),rr(l,e,o)),oe(e)&&r.set(e,l),l}function rr(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&rr(t,r,n,!0),s&&s.forEach(o=>rr(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=mp[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const mp={data:wl,props:El,emits:El,methods:Ri,computed:Ri,beforeCreate:Be,created:Be,beforeMount:Be,mounted:Be,beforeUpdate:Be,updated:Be,beforeDestroy:Be,beforeUnmount:Be,destroyed:Be,unmounted:Be,activated:Be,deactivated:Be,errorCaptured:Be,serverPrefetch:Be,components:Ri,directives:Ri,watch:vp,provide:wl,inject:gp};function wl(t,e){return e?t?function(){return Ae(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function gp(t,e){return Ri(Wo(t),Wo(e))}function Wo(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Be(t,e){return t?[...new Set([].concat(t,e))]:e}function Ri(t,e){return t?Ae(Object.create(null),t,e):e}function El(t,e){return t?z(t)&&z(e)?[...new Set([...t,...e])]:Ae(Object.create(null),_l(t),_l(e??{})):e}function vp(t,e){if(!t)return e;if(!e)return t;const n=Ae(Object.create(null),t);for(const i in e)n[i]=Be(t[i],e[i]);return n}function Wu(){return{app:null,config:{isNativeTag:Zc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yp=0;function _p(t,e){return function(i,s=null){Y(i)||(i=Ae({},i)),s!=null&&!oe(s)&&(s=null);const r=Wu(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:yp++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Xp,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&Y(u.install)?(o.add(u),u.install(c,...d)):Y(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,m){if(!l){const E=c._ceVNode||Me(i,s);return E.appContext=r,m===!0?m="svg":m===!1&&(m=void 0),t(E,u,m),l=!0,c._container=u,u.__vue_app__=c,Jr(E.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ut(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=di;di=c;try{return u()}finally{di=d}}};return c}}let di=null;const bp=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${vt(e)}Modifiers`]||t[`${ni(e)}Modifiers`];function wp(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||fe;let s=n;const r=e.startsWith("update:"),o=r&&bp(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>me(u)?u.trim():u)),o.number&&(s=n.map(Fr)));let a,l=i[a=uo(e)]||i[a=uo(vt(e))];!l&&r&&(l=i[a=uo(ni(e))]),l&&ut(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ut(c,t,6,s)}}const Ep=new WeakMap;function zu(t,e,n=!1){const i=n?Ep:e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!Y(t)){const l=c=>{const u=zu(c,e,!0);u&&(a=!0,Ae(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(oe(t)&&i.set(t,null),null):(z(r)?r.forEach(l=>o[l]=null):Ae(o,r),oe(t)&&i.set(t,o),o)}function Gr(t,e){return!t||!Or(e)?!1:(e=e.slice(2).replace(/Once$/,""),se(t,e[0].toLowerCase()+e.slice(1))||se(t,ni(e))||se(t,e))}function Il(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:m,setupState:E,ctx:x,inheritAttrs:R}=t,D=ir(t);let S,N;try{if(n.shapeFlag&4){const U=s||i,Z=U;S=Rt(c.call(Z,U,u,d,E,m,x)),N=a}else{const U=e;S=Rt(U.length>1?U(d,{attrs:a,slots:o,emit:l}):U(d,null)),N=e.props?a:Ip(a)}}catch(U){Wi.length=0,jr(U,t,1),S=Me(We)}let X=S;if(N&&R!==!1){const U=Object.keys(N),{shapeFlag:Z}=X;U.length&&Z&7&&(r&&U.some(Vr)&&(N=Tp(N,r)),X=Tn(X,N,!1,!0))}return n.dirs&&(X=Tn(X,null,!1,!0),X.dirs=X.dirs?X.dirs.concat(n.dirs):n.dirs),n.transition&&Zi(X,n.transition),S=X,ir(D),S}const Ip=t=>{let e;for(const n in t)(n==="class"||n==="style"||Or(n))&&((e||(e={}))[n]=t[n]);return e},Tp=(t,e)=>{const n={};for(const i in t)(!Vr(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Ap(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Tl(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const m=u[d];if(Ku(o,i,m)&&!Gr(c,m))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Tl(i,o,c):!0:!!o;return!1}function Tl(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Ku(e,t,r)&&!Gr(n,r))return!0}return!1}function Ku(t,e,n){const i=t[n],s=e[n];return n==="style"&&oe(i)&&oe(s)?!ms(i,s):i!==s}function Sp({vnode:t,parent:e,suspense:n},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=i,t=s),s===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}const Gu={},qu=()=>Object.create(Gu),Ju=t=>Object.getPrototypeOf(t)===Gu;function Pp(t,e,n,i=!1){const s={},r=qu();t.propsDefaults=Object.create(null),Yu(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Nh(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function kp(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=ie(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let m=u[d];if(Gr(t.emitsOptions,m))continue;const E=e[m];if(l)if(se(r,m))E!==r[m]&&(r[m]=E,c=!0);else{const x=vt(m);s[x]=zo(l,a,x,E,t,!1)}else E!==r[m]&&(r[m]=E,c=!0)}}}else{Yu(t,e,s,r)&&(c=!0);let u;for(const d in a)(!e||!se(e,d)&&((u=ni(d))===d||!se(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(s[d]=zo(l,a,d,void 0,t,!0)):delete s[d]);if(r!==a)for(const d in r)(!e||!se(e,d))&&(delete r[d],c=!0)}c&&zt(t.attrs,"set","")}function Yu(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Fi(l))continue;const c=e[l];let u;s&&se(s,u=vt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Gr(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ie(n),c=a||fe;for(let u=0;u<r.length;u++){const d=r[u];n[d]=zo(s,l,d,c[d],t,!se(c,d))}}return o}function zo(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=se(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Y(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=vs(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ni(n))&&(i=!0))}return i}const Cp=new WeakMap;function Xu(t,e,n=!1){const i=n?Cp:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!Y(t)){const u=d=>{l=!0;const[m,E]=Xu(d,e,!0);Ae(o,m),E&&a.push(...E)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return oe(t)&&i.set(t,li),li;if(z(r))for(let u=0;u<r.length;u++){const d=vt(r[u]);Al(d)&&(o[d]=fe)}else if(r)for(const u in r){const d=vt(u);if(Al(d)){const m=r[u],E=o[d]=z(m)||Y(m)?{type:m}:Ae({},m),x=E.type;let R=!1,D=!0;if(z(x))for(let S=0;S<x.length;++S){const N=x[S],X=Y(N)&&N.name;if(X==="Boolean"){R=!0;break}else X==="String"&&(D=!1)}else R=Y(x)&&x.name==="Boolean";E[0]=R,E[1]=D,(R||se(E,"default"))&&a.push(d)}}const c=[o,a];return oe(t)&&i.set(t,c),c}function Al(t){return t[0]!=="$"&&!Fi(t)}const ba=t=>t==="_"||t==="_ctx"||t==="$stable",wa=t=>z(t)?t.map(Rt):[Rt(t)],xp=(t,e,n)=>{if(e._n)return e;const i=ku((...s)=>wa(e(...s)),n);return i._c=!1,i},Zu=(t,e,n)=>{const i=t._ctx;for(const s in t){if(ba(s))continue;const r=t[s];if(Y(r))e[s]=xp(s,r,i);else if(r!=null){const o=wa(r);e[s]=()=>o}}},Qu=(t,e)=>{const n=wa(e);t.slots.default=()=>n},ed=(t,e,n)=>{for(const i in e)(n||!ba(i))&&(t[i]=e[i])},Rp=(t,e,n)=>{const i=t.slots=qu();if(t.vnode.shapeFlag&32){const s=e._;s?(ed(i,e,n),n&&iu(i,"_",s,!0)):Zu(e,i)}else e&&Qu(t,e)},Np=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=fe;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:ed(s,e,n):(r=!e.$stable,Zu(e,s)),o=e}else e&&(Qu(t,e),o={default:1});if(r)for(const a in s)!ba(a)&&o[a]==null&&delete s[a]},je=Lp;function Dp(t){return Op(t)}function Op(t,e){const n=Ur();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:m,setScopeId:E=Vt,insertStaticContent:x}=t,R=(g,w,I,C=null,P=null,A=null,M=void 0,V=null,O=!!w.dynamicChildren)=>{if(g===w)return;g&&!Mn(g,w)&&(C=Ns(g),Et(g,P,A,!0),g=null),w.patchFlag===-2&&(O=!1,w.dynamicChildren=null);const{type:k,ref:W,shapeFlag:F}=w;switch(k){case qr:D(g,w,I,C);break;case We:S(g,w,I,C);break;case Hs:g==null&&N(w,I,C,M);break;case Je:v(g,w,I,C,P,A,M,V,O);break;default:F&1?Z(g,w,I,C,P,A,M,V,O):F&6?p(g,w,I,C,P,A,M,V,O):(F&64||F&128)&&k.process(g,w,I,C,P,A,M,V,O,Ai)}W!=null&&P?Bi(W,g&&g.ref,A,w||g,!w):W==null&&g&&g.ref!=null&&Bi(g.ref,null,A,g,!0)},D=(g,w,I,C)=>{if(g==null)i(w.el=a(w.children),I,C);else{const P=w.el=g.el;w.children!==g.children&&c(P,w.children)}},S=(g,w,I,C)=>{g==null?i(w.el=l(w.children||""),I,C):w.el=g.el},N=(g,w,I,C)=>{[g.el,g.anchor]=x(g.children,w,I,C,g.el,g.anchor)},X=({el:g,anchor:w},I,C)=>{let P;for(;g&&g!==w;)P=m(g),i(g,I,C),g=P;i(w,I,C)},U=({el:g,anchor:w})=>{let I;for(;g&&g!==w;)I=m(g),s(g),g=I;s(w)},Z=(g,w,I,C,P,A,M,V,O)=>{if(w.type==="svg"?M="svg":w.type==="math"&&(M="mathml"),g==null)te(w,I,C,P,A,M,V,O);else{const k=g.el&&g.el._isVueCE?g.el:null;try{k&&k._beginPatch(),f(g,w,P,A,M,V,O)}finally{k&&k._endPatch()}}},te=(g,w,I,C,P,A,M,V)=>{let O,k;const{props:W,shapeFlag:F,transition:j,dirs:q}=g;if(O=g.el=o(g.type,A,W&&W.is,W),F&8?u(O,g.children):F&16&&h(g.children,O,null,C,P,_o(g,A),M,V),q&&Cn(g,null,C,"created"),y(O,g,g.scopeId,M,C),W){for(const ue in W)ue!=="value"&&!Fi(ue)&&r(O,ue,null,W[ue],A,C);"value"in W&&r(O,"value",null,W.value,A),(k=W.onVnodeBeforeMount)&&St(k,C,g)}q&&Cn(g,null,C,"beforeMount");const ne=Vp(P,j);ne&&j.beforeEnter(O),i(O,w,I),((k=W&&W.onVnodeMounted)||ne||q)&&je(()=>{try{k&&St(k,C,g),ne&&j.enter(O),q&&Cn(g,null,C,"mounted")}finally{}},P)},y=(g,w,I,C,P)=>{if(I&&E(g,I),C)for(let A=0;A<C.length;A++)E(g,C[A]);if(P){let A=P.subTree;if(w===A||id(A.type)&&(A.ssContent===w||A.ssFallback===w)){const M=P.vnode;y(g,M,M.scopeId,M.slotScopeIds,P.parent)}}},h=(g,w,I,C,P,A,M,V,O=0)=>{for(let k=O;k<g.length;k++){const W=g[k]=V?Wt(g[k]):Rt(g[k]);R(null,W,w,I,C,P,A,M,V)}},f=(g,w,I,C,P,A,M)=>{const V=w.el=g.el;let{patchFlag:O,dynamicChildren:k,dirs:W}=w;O|=g.patchFlag&16;const F=g.props||fe,j=w.props||fe;let q;if(I&&xn(I,!1),(q=j.onVnodeBeforeUpdate)&&St(q,I,w,g),W&&Cn(w,g,I,"beforeUpdate"),I&&xn(I,!0),(F.innerHTML&&j.innerHTML==null||F.textContent&&j.textContent==null)&&u(V,""),k?_(g.dynamicChildren,k,V,I,C,_o(w,P),A):M||he(g,w,V,null,I,C,_o(w,P),A,!1),O>0){if(O&16)b(V,F,j,I,P);else if(O&2&&F.class!==j.class&&r(V,"class",null,j.class,P),O&4&&r(V,"style",F.style,j.style,P),O&8){const ne=w.dynamicProps;for(let ue=0;ue<ne.length;ue++){const le=ne[ue],be=F[le],xe=j[le];(xe!==be||le==="value")&&r(V,le,be,xe,P,I)}}O&1&&g.children!==w.children&&u(V,w.children)}else!M&&k==null&&b(V,F,j,I,P);((q=j.onVnodeUpdated)||W)&&je(()=>{q&&St(q,I,w,g),W&&Cn(w,g,I,"updated")},C)},_=(g,w,I,C,P,A,M)=>{for(let V=0;V<w.length;V++){const O=g[V],k=w[V],W=O.el&&(O.type===Je||!Mn(O,k)||O.shapeFlag&198)?d(O.el):I;R(O,k,W,null,C,P,A,M,!0)}},b=(g,w,I,C,P)=>{if(w!==I){if(w!==fe)for(const A in w)!Fi(A)&&!(A in I)&&r(g,A,w[A],null,P,C);for(const A in I){if(Fi(A))continue;const M=I[A],V=w[A];M!==V&&A!=="value"&&r(g,A,V,M,P,C)}"value"in I&&r(g,"value",w.value,I.value,P)}},v=(g,w,I,C,P,A,M,V,O)=>{const k=w.el=g?g.el:a(""),W=w.anchor=g?g.anchor:a("");let{patchFlag:F,dynamicChildren:j,slotScopeIds:q}=w;q&&(V=V?V.concat(q):q),g==null?(i(k,I,C),i(W,I,C),h(w.children||[],I,W,P,A,M,V,O)):F>0&&F&64&&j&&g.dynamicChildren&&g.dynamicChildren.length===j.length?(_(g.dynamicChildren,j,I,P,A,M,V),(w.key!=null||P&&w===P.subTree)&&Ea(g,w,!0)):he(g,w,I,W,P,A,M,V,O)},p=(g,w,I,C,P,A,M,V,O)=>{w.slotScopeIds=V,g==null?w.shapeFlag&512?P.ctx.activate(w,I,C,M,O):ce(w,I,C,P,A,M,O):st(g,w,O)},ce=(g,w,I,C,P,A,M)=>{const V=g.component=Wp(g,C,P);if(Hr(g)&&(V.ctx.renderer=Ai),zp(V,!1,M),V.asyncDep){if(P&&P.registerDep(V,Pe,M),!g.el){const O=V.subTree=Me(We);S(null,O,w,I),g.placeholder=O.el}}else Pe(V,g,w,I,P,A,M)},st=(g,w,I)=>{const C=w.component=g.component;if(Ap(g,w,I))if(C.asyncDep&&!C.asyncResolved){ge(C,w,I);return}else C.next=w,C.update();else w.el=g.el,C.vnode=w},Pe=(g,w,I,C,P,A,M)=>{const V=()=>{if(g.isMounted){let{next:F,bu:j,u:q,parent:ne,vnode:ue}=g;{const Tt=td(g);if(Tt){F&&(F.el=ue.el,ge(g,F,M)),Tt.asyncDep.then(()=>{je(()=>{g.isUnmounted||k()},P)});return}}let le=F,be;xn(g,!1),F?(F.el=ue.el,ge(g,F,M)):F=ue,j&&Bs(j),(be=F.props&&F.props.onVnodeBeforeUpdate)&&St(be,ne,F,ue),xn(g,!0);const xe=Il(g),It=g.subTree;g.subTree=xe,R(It,xe,d(It.el),Ns(It),g,P,A),F.el=xe.el,le===null&&Sp(g,xe.el),q&&je(q,P),(be=F.props&&F.props.onVnodeUpdated)&&je(()=>St(be,ne,F,ue),P)}else{let F;const{el:j,props:q}=w,{bm:ne,m:ue,parent:le,root:be,type:xe}=g,It=ji(w);xn(g,!1),ne&&Bs(ne),!It&&(F=q&&q.onVnodeBeforeMount)&&St(F,le,w),xn(g,!0);{be.ce&&be.ce._hasShadowRoot()&&be.ce._injectChildStyle(xe,g.parent?g.parent.type:void 0);const Tt=g.subTree=Il(g);R(null,Tt,I,C,g,P,A),w.el=Tt.el}if(ue&&je(ue,P),!It&&(F=q&&q.onVnodeMounted)){const Tt=w;je(()=>St(F,le,Tt),P)}(w.shapeFlag&256||le&&ji(le.vnode)&&le.vnode.shapeFlag&256)&&g.a&&je(g.a,P),g.isMounted=!0,w=I=C=null}};g.scope.on();const O=g.effect=new au(V);g.scope.off();const k=g.update=O.run.bind(O),W=g.job=O.runIfDirty.bind(O);W.i=g,W.id=g.uid,O.scheduler=()=>_a(W),xn(g,!0),k()},ge=(g,w,I)=>{w.component=g;const C=g.vnode.props;g.vnode=w,g.next=null,kp(g,w.props,C,I),Np(g,w.children,I),tn(),hl(g),nn()},he=(g,w,I,C,P,A,M,V,O=!1)=>{const k=g&&g.children,W=g?g.shapeFlag:0,F=w.children,{patchFlag:j,shapeFlag:q}=w;if(j>0){if(j&128){Rs(k,F,I,C,P,A,M,V,O);return}else if(j&256){Pn(k,F,I,C,P,A,M,V,O);return}}q&8?(W&16&&Ti(k,P,A),F!==k&&u(I,F)):W&16?q&16?Rs(k,F,I,C,P,A,M,V,O):Ti(k,P,A,!0):(W&8&&u(I,""),q&16&&h(F,I,C,P,A,M,V,O))},Pn=(g,w,I,C,P,A,M,V,O)=>{g=g||li,w=w||li;const k=g.length,W=w.length,F=Math.min(k,W);let j;for(j=0;j<F;j++){const q=w[j]=O?Wt(w[j]):Rt(w[j]);R(g[j],q,I,null,P,A,M,V,O)}k>W?Ti(g,P,A,!0,!1,F):h(w,I,C,P,A,M,V,O,F)},Rs=(g,w,I,C,P,A,M,V,O)=>{let k=0;const W=w.length;let F=g.length-1,j=W-1;for(;k<=F&&k<=j;){const q=g[k],ne=w[k]=O?Wt(w[k]):Rt(w[k]);if(Mn(q,ne))R(q,ne,I,null,P,A,M,V,O);else break;k++}for(;k<=F&&k<=j;){const q=g[F],ne=w[j]=O?Wt(w[j]):Rt(w[j]);if(Mn(q,ne))R(q,ne,I,null,P,A,M,V,O);else break;F--,j--}if(k>F){if(k<=j){const q=j+1,ne=q<W?w[q].el:C;for(;k<=j;)R(null,w[k]=O?Wt(w[k]):Rt(w[k]),I,ne,P,A,M,V,O),k++}}else if(k>j)for(;k<=F;)Et(g[k],P,A,!0),k++;else{const q=k,ne=k,ue=new Map;for(k=ne;k<=j;k++){const qe=w[k]=O?Wt(w[k]):Rt(w[k]);qe.key!=null&&ue.set(qe.key,k)}let le,be=0;const xe=j-ne+1;let It=!1,Tt=0;const Si=new Array(xe);for(k=0;k<xe;k++)Si[k]=0;for(k=q;k<=F;k++){const qe=g[k];if(be>=xe){Et(qe,P,A,!0);continue}let At;if(qe.key!=null)At=ue.get(qe.key);else for(le=ne;le<=j;le++)if(Si[le-ne]===0&&Mn(qe,w[le])){At=le;break}At===void 0?Et(qe,P,A,!0):(Si[At-ne]=k+1,At>=Tt?Tt=At:It=!0,R(qe,w[At],I,null,P,A,M,V,O),be++)}const ol=It?Mp(Si):li;for(le=ol.length-1,k=xe-1;k>=0;k--){const qe=ne+k,At=w[qe],al=w[qe+1],ll=qe+1<W?al.el||nd(al):C;Si[k]===0?R(null,At,I,ll,P,A,M,V,O):It&&(le<0||k!==ol[le]?kn(At,I,ll,2):le--)}}},kn=(g,w,I,C,P=null)=>{const{el:A,type:M,transition:V,children:O,shapeFlag:k}=g;if(k&6){kn(g.component.subTree,w,I,C);return}if(k&128){g.suspense.move(w,I,C);return}if(k&64){M.move(g,w,I,Ai);return}if(M===Je){i(A,w,I);for(let F=0;F<O.length;F++)kn(O[F],w,I,C);i(g.anchor,w,I);return}if(M===Hs){X(g,w,I);return}if(C!==2&&k&1&&V)if(C===0)V.persisted&&!A[at]?i(A,w,I):(V.beforeEnter(A),i(A,w,I),je(()=>V.enter(A),P));else{const{leave:F,delayLeave:j,afterLeave:q}=V,ne=()=>{g.ctx.isUnmounted?s(A):i(A,w,I)},ue=()=>{const le=A._isLeaving||!!A[at];A._isLeaving&&A[at](!0),V.persisted&&!le?ne():F(A,()=>{ne(),q&&q()})};j?j(A,ne,ue):ue()}else i(A,w,I)},Et=(g,w,I,C=!1,P=!1)=>{const{type:A,props:M,ref:V,children:O,dynamicChildren:k,shapeFlag:W,patchFlag:F,dirs:j,cacheIndex:q,memo:ne}=g;if(F===-2&&(P=!1),V!=null&&(tn(),Bi(V,null,I,g,!0),nn()),q!=null&&(w.renderCache[q]=void 0),W&256){w.ctx.deactivate(g);return}const ue=W&1&&j,le=!ji(g);let be;if(le&&(be=M&&M.onVnodeBeforeUnmount)&&St(be,w,g),W&6)Qf(g.component,I,C);else{if(W&128){g.suspense.unmount(I,C);return}ue&&Cn(g,null,w,"beforeUnmount"),W&64?g.type.remove(g,w,I,Ai,C):k&&!k.hasOnce&&(A!==Je||F>0&&F&64)?Ti(k,w,I,!1,!0):(A===Je&&F&384||!P&&W&16)&&Ti(O,w,I),C&&sl(g)}const xe=ne!=null&&q==null;(le&&(be=M&&M.onVnodeUnmounted)||ue||xe)&&je(()=>{be&&St(be,w,g),ue&&Cn(g,null,w,"unmounted"),xe&&(g.el=null)},I)},sl=g=>{const{type:w,el:I,anchor:C,transition:P}=g;if(w===Je){Zf(I,C);return}if(w===Hs){U(g);return}const A=()=>{s(I),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(g.shapeFlag&1&&P&&!P.persisted){const{leave:M,delayLeave:V}=P,O=()=>M(I,A);V?V(g.el,A,O):O()}else A()},Zf=(g,w)=>{let I;for(;g!==w;)I=m(g),s(g),g=I;s(w)},Qf=(g,w,I)=>{const{bum:C,scope:P,job:A,subTree:M,um:V,m:O,a:k}=g;Sl(O),Sl(k),C&&Bs(C),P.stop(),A&&(A.flags|=8,Et(M,g,w,I)),V&&je(V,w),je(()=>{g.isUnmounted=!0},w)},Ti=(g,w,I,C=!1,P=!1,A=0)=>{for(let M=A;M<g.length;M++)Et(g[M],w,I,C,P)},Ns=g=>{if(g.shapeFlag&6)return Ns(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const w=m(g.anchor||g.el),I=w&&w[Ru];return I?m(I):w};let co=!1;const rl=(g,w,I)=>{let C;g==null?w._vnode&&(Et(w._vnode,null,null,!0),C=w._vnode.component):R(w._vnode||null,g,w,null,null,null,I),w._vnode=g,co||(co=!0,hl(C),Au(),co=!1)},Ai={p:R,um:Et,m:kn,r:sl,mt:ce,mc:h,pc:he,pbc:_,n:Ns,o:t};return{render:rl,hydrate:void 0,createApp:_p(rl)}}function _o({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function xn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Vp(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ea(t,e,n=!1){const i=t.children,s=e.children;if(z(i)&&z(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Wt(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Ea(o,a)),a.type===qr&&(a.patchFlag===-1&&(a=s[r]=Wt(a)),a.el=o.el),a.type===We&&!a.el&&(a.el=o.el)}}function Mp(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function td(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:td(e)}function Sl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function nd(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?nd(e.subTree):null}const id=t=>t.__isSuspense;function Lp(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):Hh(t)}const Je=Symbol.for("v-fgt"),qr=Symbol.for("v-txt"),We=Symbol.for("v-cmt"),Hs=Symbol.for("v-stc"),Wi=[];let et=null;function J(t=!1){Wi.push(et=t?null:[])}function Fp(){Wi.pop(),et=Wi[Wi.length-1]||null}let Qi=1;function or(t,e=!1){Qi+=t,t<0&&et&&e&&(et.hasOnce=!0)}function sd(t){return t.dynamicChildren=Qi>0?et||li:null,Fp(),Qi>0&&et&&et.push(t),t}function Q(t,e,n,i,s,r){return sd(T(t,e,n,i,s,r,!0))}function ht(t,e,n,i,s){return sd(Me(t,e,n,i,s,!0))}function ar(t){return t?t.__v_isVNode===!0:!1}function Mn(t,e){return t.type===e.type&&t.key===e.key}const rd=({key:t})=>t??null,Ws=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?me(t)||$e(t)||Y(t)?{i:lt,r:t,k:e,f:!!n}:t:null);function T(t,e=null,n=null,i=0,s=null,r=t===Je?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&rd(e),ref:e&&Ws(e),scopeId:Pu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:lt};return a?(Ia(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=me(n)?8:16),Qi>0&&!o&&et&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&et.push(l),l}const Me=Up;function Up(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===up)&&(t=We),ar(t)){const a=Tn(t,e,!0);return n&&Ia(a,n),Qi>0&&!r&&et&&(a.shapeFlag&6?et[et.indexOf(t)]=a:et.push(a)),a.patchFlag=-2,a}if(Jp(t)&&(t=t.__vccOpts),e){e=$p(e);let{class:a,style:l}=e;a&&!me(a)&&(e.class=Ct(a)),oe(l)&&(ya(l)&&!z(l)&&(l=Ae({},l)),e.style=da(l))}const o=me(t)?1:id(t)?128:Nu(t)?64:oe(t)?4:Y(t)?2:0;return T(t,e,n,i,s,o,r,!0)}function $p(t){return t?ya(t)||Ju(t)?Ae({},t):t:null}function Tn(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?Bp(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&rd(c),ref:e&&e.ref?n&&r?z(r)?r.concat(Ws(e)):[r,Ws(e)]:Ws(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Je?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Tn(t.ssContent),ssFallback:t.ssFallback&&Tn(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Zi(u,l.clone(u)),u}function Te(t=" ",e=0){return Me(qr,null,t,e)}function Ot(t,e){const n=Me(Hs,null,t);return n.staticCount=e,n}function Fe(t="",e=!1){return e?(J(),ht(We,null,t)):Me(We,null,t)}function Rt(t){return t==null||typeof t=="boolean"?Me(We):z(t)?Me(Je,null,t.slice()):ar(t)?Wt(t):Me(qr,null,String(t))}function Wt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Tn(t)}function Ia(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Ia(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Ju(e)?e._ctx=lt:s===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),i&64?(n=16,e=[Te(e)]):n=8);t.children=e,t.shapeFlag|=n}function Bp(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ct([e.class,i.class]));else if(s==="style")e.style=da([e.style,i.style]);else if(Or(s)){const r=e[s],o=i[s];o&&r!==o&&!(z(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!Vr(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function St(t,e,n,i=null){ut(t,e,7,[n,i])}const jp=Wu();let Hp=0;function Wp(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||jp,r={uid:Hp++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new hh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xu(i,s),emitsOptions:zu(i,s),emit:null,emitted:null,propsDefaults:fe,inheritAttrs:i.inheritAttrs,ctx:fe,data:fe,props:fe,attrs:fe,slots:fe,refs:fe,setupState:fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=wp.bind(null,r),t.ce&&t.ce(r),r}let ze=null;const od=()=>ze||lt;let lr,Ko;{const t=Ur(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};lr=e("__VUE_INSTANCE_SETTERS__",n=>ze=n),Ko=e("__VUE_SSR_SETTERS__",n=>es=n)}const vs=t=>{const e=ze;return lr(t),t.scope.on(),()=>{t.scope.off(),lr(e)}},Pl=()=>{ze&&ze.scope.off(),lr(null)};function ad(t){return t.vnode.shapeFlag&4}let es=!1;function zp(t,e=!1,n=!1){e&&Ko(e);const{props:i,children:s}=t.vnode,r=ad(t);Pp(t,i,r,e),Rp(t,s,n||e);const o=r?Kp(t,e):void 0;return e&&Ko(!1),o}function Kp(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,fp);const{setup:i}=n;if(i){tn();const s=t.setupContext=i.length>1?qp(t):null,r=vs(t),o=gs(i,t,0,[t.props,s]),a=Qc(o);if(nn(),r(),(a||t.sp)&&!ji(t)&&Uu(t),a){if(o.then(Pl,Pl),e)return o.then(l=>{kl(t,l)}).catch(l=>{jr(l,t,0)});t.asyncDep=o}else kl(t,o)}else ld(t)}function kl(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=wu(e)),ld(t)}function ld(t,e,n){const i=t.type;t.render||(t.render=i.render||Vt);{const s=vs(t);tn();try{hp(t)}finally{nn(),s()}}}const Gp={get(t,e){return Le(t,"get",""),t[e]}};function qp(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Gp),slots:t.slots,emit:t.emit,expose:e}}function Jr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(wu(Dh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Hi)return Hi[n](t)},has(e,n){return n in e||n in Hi}})):t.proxy}function Jp(t){return Y(t)&&"__vccOpts"in t}const Ta=(t,e)=>Fh(t,e,es);function Yp(t,e,n){try{or(-1);const i=arguments.length;return i===2?oe(e)&&!z(e)?ar(e)?Me(t,null,[e]):Me(t,e):Me(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&ar(n)&&(n=[n]),Me(t,e,n))}finally{or(1)}}const Xp="3.5.38";/**
* @vue/runtime-dom v3.5.38
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Go;const Cl=typeof window<"u"&&window.trustedTypes;if(Cl)try{Go=Cl.createPolicy("vue",{createHTML:t=>t})}catch{}const cd=Go?t=>Go.createHTML(t):t=>t,Zp="http://www.w3.org/2000/svg",Qp="http://www.w3.org/1998/Math/MathML",Ht=typeof document<"u"?document:null,xl=Ht&&Ht.createElement("template"),em={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?Ht.createElementNS(Zp,t):e==="mathml"?Ht.createElementNS(Qp,t):n?Ht.createElement(t,{is:n}):Ht.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>Ht.createTextNode(t),createComment:t=>Ht.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ht.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{xl.innerHTML=cd(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=xl.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},dn="transition",Ci="animation",ts=Symbol("_vtc"),ud={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},tm=Ae({},Ou,ud),nm=t=>(t.displayName="Transition",t.props=tm,t),im=nm((t,{slots:e})=>Yp(Qh,sm(t),e)),Rn=(t,e=[])=>{z(t)?t.forEach(n=>n(...e)):t&&t(...e)},Rl=t=>t?z(t)?t.some(e=>e.length>1):t.length>1:!1;function sm(t){const e={};for(const v in t)v in ud||(e[v]=t[v]);if(t.css===!1)return e;const{name:n="v",type:i,duration:s,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:E=`${n}-leave-to`}=t,x=rm(s),R=x&&x[0],D=x&&x[1],{onBeforeEnter:S,onEnter:N,onEnterCancelled:X,onLeave:U,onLeaveCancelled:Z,onBeforeAppear:te=S,onAppear:y=N,onAppearCancelled:h=X}=e,f=(v,p,ce,st)=>{v._enterCancelled=st,Nn(v,p?u:a),Nn(v,p?c:o),ce&&ce()},_=(v,p)=>{v._isLeaving=!1,Nn(v,d),Nn(v,E),Nn(v,m),p&&p()},b=v=>(p,ce)=>{const st=v?y:N,Pe=()=>f(p,v,ce);Rn(st,[p,Pe]),Nl(()=>{Nn(p,v?l:r),jt(p,v?u:a),Rl(st)||Dl(p,i,R,Pe)})};return Ae(e,{onBeforeEnter(v){Rn(S,[v]),jt(v,r),jt(v,o)},onBeforeAppear(v){Rn(te,[v]),jt(v,l),jt(v,c)},onEnter:b(!1),onAppear:b(!0),onLeave(v,p){v._isLeaving=!0;const ce=()=>_(v,p);jt(v,d),v._enterCancelled?(jt(v,m),Ml(v)):(Ml(v),jt(v,m)),Nl(()=>{v._isLeaving&&(Nn(v,d),jt(v,E),Rl(U)||Dl(v,i,D,ce))}),Rn(U,[v,ce])},onEnterCancelled(v){f(v,!1,void 0,!0),Rn(X,[v])},onAppearCancelled(v){f(v,!0,void 0,!0),Rn(h,[v])},onLeaveCancelled(v){_(v),Rn(Z,[v])}})}function rm(t){if(t==null)return null;if(oe(t))return[bo(t.enter),bo(t.leave)];{const e=bo(t);return[e,e]}}function bo(t){return sh(t)}function jt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ts]||(t[ts]=new Set)).add(e)}function Nn(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[ts];n&&(n.delete(e),n.size||(t[ts]=void 0))}function Nl(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let om=0;function Dl(t,e,n,i){const s=t._endId=++om,r=()=>{s===t._endId&&i()};if(n!=null)return setTimeout(r,n);const{type:o,timeout:a,propCount:l}=am(t,e);if(!o)return i();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,m),r()},m=E=>{E.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,m)}function am(t,e){const n=window.getComputedStyle(t),i=x=>(n[x]||"").split(", "),s=i(`${dn}Delay`),r=i(`${dn}Duration`),o=Ol(s,r),a=i(`${Ci}Delay`),l=i(`${Ci}Duration`),c=Ol(a,l);let u=null,d=0,m=0;e===dn?o>0&&(u=dn,d=o,m=r.length):e===Ci?c>0&&(u=Ci,d=c,m=l.length):(d=Math.max(o,c),u=d>0?o>c?dn:Ci:null,m=u?u===dn?r.length:l.length:0);const E=u===dn&&/\b(?:transform|all)(?:,|$)/.test(i(`${dn}Property`).toString());return{type:u,timeout:d,propCount:m,hasTransform:E}}function Ol(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Vl(n)+Vl(t[i])))}function Vl(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Ml(t){return(t?t.ownerDocument:document).body.offsetHeight}function lm(t,e,n){const i=t[ts];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ll=Symbol("_vod"),cm=Symbol("_vsh"),um=Symbol(""),dm=/(?:^|;)\s*display\s*:/;function fm(t,e,n){const i=t.style,s=me(n);let r=!1;if(n&&!s){if(e)if(me(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ni(i,a,"")}else for(const o in e)n[o]==null&&Ni(i,o,"");for(const o in n){o==="display"&&(r=!0);const a=n[o];a!=null?pm(t,o,!me(e)&&e?e[o]:void 0,a)||Ni(i,o,a):Ni(i,o,"")}}else if(s){if(e!==n){const o=i[um];o&&(n+=";"+o),i.cssText=n,r=dm.test(n)}}else e&&t.removeAttribute("style");Ll in t&&(t[Ll]=r?i.display:"",t[cm]&&(i.display="none"))}const Fl=/\s*!important$/;function Ni(t,e,n){if(z(n))n.forEach(i=>Ni(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=hm(t,e);Fl.test(n)?t.setProperty(ni(i),n.replace(Fl,""),"important"):t[i]=n}}const Ul=["Webkit","Moz","ms"],wo={};function hm(t,e){const n=wo[e];if(n)return n;let i=vt(e);if(i!=="filter"&&i in t)return wo[e]=i;i=nu(i);for(let s=0;s<Ul.length;s++){const r=Ul[s]+i;if(r in t)return wo[e]=r}return e}function pm(t,e,n,i){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&me(i)&&n===i}const $l="http://www.w3.org/1999/xlink";function Bl(t,e,n,i,s,r=uh(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS($l,e.slice(6,e.length)):t.setAttributeNS($l,e,n):n==null||r&&!su(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Ft(n)?String(n):n)}function jl(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?cd(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=su(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Ln(t,e,n,i){t.addEventListener(e,n,i)}function mm(t,e,n,i){t.removeEventListener(e,n,i)}const Hl=Symbol("_vei");function gm(t,e,n,i,s=null){const r=t[Hl]||(t[Hl]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=vm(e);if(i){const c=r[e]=bm(i,s);Ln(t,a,c,l)}else o&&(mm(t,a,o,l),r[e]=void 0)}}const Wl=/(?:Once|Passive|Capture)$/;function vm(t){let e;if(Wl.test(t)){e={};let i;for(;i=t.match(Wl);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ni(t.slice(2)),e]}let Eo=0;const ym=Promise.resolve(),_m=()=>Eo||(ym.then(()=>Eo=0),Eo=Date.now());function bm(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;const s=n.value;if(z(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&ut(c,e,5,a)}}else ut(s,e,5,[i])};return n.value=t,n.attached=_m(),n}const zl=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,wm=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?lm(t,i,o):e==="style"?fm(t,n,i):Or(e)?Vr(e)||gm(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Em(t,e,i,o))?(jl(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Bl(t,e,i,o,r,e!=="value")):t._isVueCE&&(Im(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!me(i)))?jl(t,vt(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Bl(t,e,i,o))};function Em(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&zl(e)&&Y(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return zl(e)&&me(n)?!1:e in t}function Im(t,e){const n=t._def.props;if(!n)return!1;const i=vt(e);return Array.isArray(n)?n.some(s=>vt(s)===i):Object.keys(n).some(s=>vt(s)===i)}const cr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>Bs(e,n):e};function Tm(t){t.target.composing=!0}function Kl(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const fi=Symbol("_assign");function Gl(t,e,n){return e&&(t=t.trim()),n&&(t=Fr(t)),t}const Qt={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[fi]=cr(s);const r=i||s.props&&s.props.type==="number";Ln(t,e?"change":"input",o=>{o.target.composing||t[fi](Gl(t.value,n,r))}),(n||r)&&Ln(t,"change",()=>{t.value=Gl(t.value,n,r)}),e||(Ln(t,"compositionstart",Tm),Ln(t,"compositionend",Kl),Ln(t,"change",Kl))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[fi]=cr(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?Fr(t.value):t.value,l=e??"";if(a===l)return;const c=t.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l)}},dd={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=Mr(e);Ln(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Fr(ur(o)):ur(o));t[fi](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,Iu(()=>{t._assigning=!1})}),t[fi]=cr(i)},mounted(t,{value:e}){ql(t,e)},beforeUpdate(t,e,n){t[fi]=cr(n)},updated(t,{value:e}){t._assigning||ql(t,e)}};function ql(t,e){const n=t.multiple,i=z(e);if(!(n&&!i&&!Mr(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=ur(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=fh(e,a)>-1}else o.selected=e.has(a);else if(ms(ur(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ur(t){return"_value"in t?t._value:t.value}const Am=["ctrl","shift","alt","meta"],Sm={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Am.some(n=>t[`${n}Key`]&&!e.includes(n))},Aa=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=Sm[e[o]];if(a&&a(s,e))return}return t(s,...r)}))},Pm=Ae({patchProp:wm},em);let Jl;function km(){return Jl||(Jl=Dp(Pm))}const Cm=((...t)=>{const e=km().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=Rm(i);if(!s)return;const r=e._component;!Y(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,xm(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function xm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Rm(t){return me(t)?document.querySelector(t):t}const Nm=()=>{};var Yl={};/**
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
 */const fd=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Dm=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},hd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let m=(a&15)<<2|c>>6,E=c&63;l||(E=64,o||(m=64)),i.push(n[u],n[d],n[m],n[E])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fd(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Dm(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw new Om;const m=r<<2|a>>4;if(i.push(m),c!==64){const E=a<<4&240|c>>2;if(i.push(E),d!==64){const x=c<<6&192|d;i.push(x)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Om extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vm=function(t){const e=fd(t);return hd.encodeByteArray(e,!0)},dr=function(t){return Vm(t).replace(/\./g,"")},pd=function(t){try{return hd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Mm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Lm=()=>Mm().__FIREBASE_DEFAULTS__,Fm=()=>{if(typeof process>"u"||typeof Yl>"u")return;const t=Yl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Um=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pd(t[1]);return e&&JSON.parse(e)},Sa=()=>{try{return Nm()||Lm()||Fm()||Um()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},md=t=>{var e,n;return(n=(e=Sa())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},$m=t=>{const e=md(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},gd=()=>{var t;return(t=Sa())==null?void 0:t.config},vd=t=>{var e;return(e=Sa())==null?void 0:e[`_${t}`]};/**
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
 */class yd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function Bm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...t};return[dr(JSON.stringify(n)),dr(JSON.stringify(o)),""].join(".")}/**
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
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function Hm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Wm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Km(){const t=Ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Gm(){try{return typeof indexedDB=="object"}catch{return!1}}function qm(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)==null?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Jm="FirebaseError";class ln extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Jm,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ys.prototype.create)}}class ys{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Ym(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ln(s,a,i)}}function Ym(t,e){try{let n=0,i="";for(;n<t.length;){const s=t.indexOf("{$",n);if(s===-1){i+=t.substring(n);break}const r=t.indexOf("}",s+2);if(r===-1){i+=t.substring(n);break}const o=t.substring(s+2,r),a=e[o];i+=t.substring(n,s)+(a!=null?String(a):`<${o}?>`),n=r+1}return i}catch{return t}}function Xm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zn(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(Xl(r)&&Xl(o)){if(!zn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function Xl(t){return t!==null&&typeof t=="object"}/**
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
 */function _s(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Di(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Oi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Zm(t,e){const n=new Qm(t,e);return n.subscribe.bind(n)}class Qm{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");eg(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=Io),s.error===void 0&&(s.error=Io),s.complete===void 0&&(s.complete=Io);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eg(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Io(){}/**
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
 */function Se(t){return t&&t._delegate?t._delegate:t}/**
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
 */function bs(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function _d(t){return(await fetch(t,{credentials:"include"})).ok}class Kn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const On="[DEFAULT]";/**
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
 */class tg{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new yd;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ig(e))try{this.getOrInitializeService({instanceIdentifier:On})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=On){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=On){return this.instances.has(e)}getOptions(e=On){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(i)??new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ng(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=On){return this.component?this.component.multipleInstances?e:On:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ng(t){return t===On?void 0:t}function ig(t){return t.instantiationMode==="EAGER"}/**
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
 */class sg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tg(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const rg={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},og=re.INFO,ag={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},lg=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=ag[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pa{constructor(e){this.name=e,this._logLevel=og,this._logHandler=lg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?rg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const cg=(t,e)=>e.some(n=>t instanceof n);let Zl,Ql;function ug(){return Zl||(Zl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dg(){return Ql||(Ql=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bd=new WeakMap,qo=new WeakMap,wd=new WeakMap,To=new WeakMap,ka=new WeakMap;function fg(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(bn(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bd.set(n,t)}).catch(()=>{}),ka.set(e,t),e}function hg(t){if(qo.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});qo.set(t,e)}let Jo={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wd.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pg(t){Jo=t(Jo)}function mg(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Ao(this),e,...n);return wd.set(i,e.sort?e.sort():[e]),bn(i)}:dg().includes(t)?function(...e){return t.apply(Ao(this),e),bn(bd.get(this))}:function(...e){return bn(t.apply(Ao(this),e))}}function gg(t){return typeof t=="function"?mg(t):(t instanceof IDBTransaction&&hg(t),cg(t,ug())?new Proxy(t,Jo):t)}function bn(t){if(t instanceof IDBRequest)return fg(t);if(To.has(t))return To.get(t);const e=gg(t);return e!==t&&(To.set(t,e),ka.set(e,t)),e}const Ao=t=>ka.get(t);function vg(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=bn(o);return i&&o.addEventListener("upgradeneeded",l=>{i(bn(o.result),l.oldVersion,l.newVersion,bn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const yg=["get","getKey","getAll","getAllKeys","count"],_g=["put","add","delete","clear"],So=new Map;function ec(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(So.get(e))return So.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=_g.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||yg.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return So.set(e,r),r}pg(t=>({...t,get:(e,n,i)=>ec(e,n)||t.get(e,n,i),has:(e,n)=>!!ec(e,n)||t.has(e,n)}));/**
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
 */class bg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wg(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function wg(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yo="@firebase/app",tc="0.16.4";/**
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
 */const rn=new Pa("@firebase/app"),Eg="@firebase/app-compat",Ig="@firebase/analytics-compat",Tg="@firebase/analytics",Ag="@firebase/app-check-compat",Sg="@firebase/app-check",Pg="@firebase/auth",kg="@firebase/auth-compat",Cg="@firebase/database",xg="@firebase/data-connect",Rg="@firebase/database-compat",Ng="@firebase/functions",Dg="@firebase/functions-compat",Og="@firebase/installations",Vg="@firebase/installations-compat",Mg="@firebase/messaging",Lg="@firebase/messaging-compat",Fg="@firebase/performance",Ug="@firebase/performance-compat",$g="@firebase/remote-config",Bg="@firebase/remote-config-compat",jg="@firebase/storage",Hg="@firebase/storage-compat",Wg="@firebase/firestore",zg="@firebase/ai",Kg="@firebase/firestore-compat",Gg="firebase",qg="13.1.0";/**
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
 */const Xo="[DEFAULT]",Jg={[Yo]:"fire-core",[Eg]:"fire-core-compat",[Tg]:"fire-analytics",[Ig]:"fire-analytics-compat",[Sg]:"fire-app-check",[Ag]:"fire-app-check-compat",[Pg]:"fire-auth",[kg]:"fire-auth-compat",[Cg]:"fire-rtdb",[xg]:"fire-data-connect",[Rg]:"fire-rtdb-compat",[Ng]:"fire-fn",[Dg]:"fire-fn-compat",[Og]:"fire-iid",[Vg]:"fire-iid-compat",[Mg]:"fire-fcm",[Lg]:"fire-fcm-compat",[Fg]:"fire-perf",[Ug]:"fire-perf-compat",[$g]:"fire-rc",[Bg]:"fire-rc-compat",[jg]:"fire-gcs",[Hg]:"fire-gcs-compat",[Wg]:"fire-fst",[Kg]:"fire-fst-compat",[zg]:"fire-vertex","fire-js":"fire-js",[Gg]:"fire-js-all"};/**
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
 */const ns=new Map,Yg=new Map,Zo=new Map;function nc(t,e){try{t.container.addComponent(e)}catch(n){rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gi(t){const e=t.name;if(Zo.has(e))return rn.debug(`There were multiple attempts to register component ${e}.`),!1;Zo.set(e,t);for(const n of ns.values())nc(n,t);for(const n of Yg.values())nc(n,t);return!0}function Ca(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xe(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Xg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qt=new ys("app","Firebase",Xg);/**
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
 */class Zg{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
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
 */const wi=qg;function Ed(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:Xo,automaticDataCollectionEnabled:!0,...e},s=i.name;if(typeof s!="string"||!s)throw qt.create("bad-app-name",{appName:String(s)});if(n||(n=gd()),!n)throw qt.create("no-options");const r=ns.get(s);if(r)if(zn(n,r.options)){if(zn(i,r.config))return r;throw qt.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(r.config),newValue:JSON.stringify(i)})}else throw qt.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(r.options),newValue:JSON.stringify(n)});const o=new sg(s);for(const l of Zo.values())o.addComponent(l);const a=new Zg(n,i,o);return ns.set(s,a),a}function Id(t=Xo){const e=ns.get(t);if(!e&&t===Xo&&gd())return Ed();if(!e)throw qt.create("no-app",{appName:t});return e}function Qg(){return Array.from(ns.values())}function wn(t,e,n){let i=Jg[t]??t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),r=e.match(/\s|\//);if(s||r){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rn.warn(o.join(" "));return}gi(new Kn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ev="firebase-heartbeat-database",tv=1,is="firebase-heartbeat-store";let Po=null;function Td(){return Po||(Po=vg(ev,tv,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(is)}catch(n){console.warn(n)}}}}).catch(t=>{throw qt.create("idb-open",{originalErrorMessage:t.message})})),Po}async function nv(t){try{const n=(await Td()).transaction(is),i=await n.objectStore(is).get(Ad(t));return await n.done,i}catch(e){if(e instanceof ln)rn.warn(e.message);else{const n=qt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rn.warn(n.message)}}}async function ic(t,e){try{const i=(await Td()).transaction(is,"readwrite");await i.objectStore(is).put(e,Ad(t)),await i.done}catch(n){if(n instanceof ln)rn.warn(n.message);else{const i=qt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rn.warn(i.message)}}}function Ad(t){return`${t.name}!${t.options.appId}`}/**
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
 */const iv=1024,sv=30;class rv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new av(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=sc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats.length>sv){const o=lv(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){rn.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sc(),{heartbeatsToSend:i,unsentEntries:s}=ov(this._heartbeatsCache.heartbeats),r=dr(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return rn.warn(n),""}}}function sc(){return new Date().toISOString().substring(0,10)}function ov(t,e=iv){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),rc(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),rc(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class av{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gm()?qm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return ic(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return ic(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function rc(t){return dr(JSON.stringify({version:2,heartbeats:t})).length}function lv(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
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
 */function cv(t){gi(new Kn("platform-logger",e=>new bg(e),"PRIVATE")),gi(new Kn("heartbeat",e=>new rv(e),"PRIVATE")),wn(Yo,tc,t),wn(Yo,tc,"esm2020"),wn("fire-js","")}/**
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
 */cv("");function Sd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uv=Sd,Pd=new ys("auth","Firebase",Sd());/**
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
 */const fr=new Pa("@firebase/auth");function zs(t,...e){fr.logLevel<=re.WARN&&fr.warn(`Auth (${wi}): ${t}`,...e)}function Ks(t,...e){fr.logLevel<=re.ERROR&&fr.error(`Auth (${wi}): ${t}`,...e)}/**
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
 */function dt(t,...e){throw xa(t,...e)}function _t(t,...e){return xa(t,...e)}function Yr(t,e,n){const i={...uv(),[e]:n};return new ys("auth","Firebase",i).create(e,{appName:t.name})}function en(t){return Yr(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dv(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&dt(t,"argument-error"),Yr(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xa(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Pd.create(t,...e)}function K(t,e,...n){if(!t)throw xa(e,...n)}function Jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ks(e),new Error(e)}function on(t,e){t||Jt(e)}/**
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
 */function Qo(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function fv(){return oc()==="http:"||oc()==="https:"}function oc(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function hv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fv()||Wm()||"connection"in navigator)?navigator.onLine:!0}function pv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ws{constructor(e,n){this.shortDelay=e,this.longDelay=n,on(n>e,"Short delay should be less than long delay!"),this.isMobile=jm()||zm()}get(){return hv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ra(t,e){on(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class kd{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vv=new ws(3e4,6e4);function cn(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Ut(t,e,n,i,s={}){return Cd(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=_s({...o,key:t.config.apiKey}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c={method:e,headers:l,...r};return Hm()||(c.referrerPolicy="strict-origin-when-cross-origin"),t.emulatorConfig&&bs(t.emulatorConfig.host)&&(c.credentials="include"),kd.fetch()(await xd(t,t.config.apiHost,n,a),c)})}async function Cd(t,e,n){t._canInitEmulator=!1;const i={...mv,...e};try{const s=new _v(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ls(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ls(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ls(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ls(t,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Yr(t,u,c);dt(t,u)}}catch(s){if(s instanceof ln)throw s;dt(t,"network-request-failed",{message:String(s)})}}async function Es(t,e,n,i,s={}){const r=await Ut(t,e,n,i,s);return"mfaPendingCredential"in r&&dt(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function xd(t,e,n,i){const s=`${e}${n}?${i}`,r=t,o=r.config.emulator?Ra(t.config,s):`${t.config.apiScheme}://${s}`;return gv.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}function yv(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class _v{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(_t(this.auth,"network-request-failed")),vv.get())})}}function Ls(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=_t(t,e,i);return s.customData._tokenResponse=n,s}function ac(t){return t!==void 0&&t.enterprise!==void 0}class bv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return yv(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function wv(t,e){return Ut(t,"GET","/v2/recaptchaConfig",cn(t,e))}/**
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
 */async function Ev(t,e){return Ut(t,"POST","/v1/accounts:delete",e)}async function hr(t,e){return Ut(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function zi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Iv(t,e=!1){const n=Se(t),i=await n.getIdToken(e),s=Na(i);K(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:zi(ko(s.auth_time)),issuedAtTime:zi(ko(s.iat)),expirationTime:zi(ko(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ko(t){return Number(t)*1e3}function Na(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Ks("JWT malformed, contained fewer than 3 sections"),null;try{const s=pd(n);return s?JSON.parse(s):(Ks("Failed to decode base64 JWT payload"),null)}catch(s){return Ks("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function lc(t){const e=Na(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function vi(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw Rd(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Rd(t){return t instanceof ln?t.code==="auth/user-disabled"||t.code==="auth/user-token-expired":!1}/**
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
 */class Tv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ea{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zi(this.lastLoginAt),this.creationTime=zi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pr(t){var d;const e=t.auth,n=await t.getIdToken(),i=await vi(t,hr(e,{idToken:n}));K(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const r=(d=s.providerUserInfo)!=null&&d.length?Nd(s.providerUserInfo):[],o=Sv(t.providerData,r),a=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),c=a?l:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ea(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,u)}async function Av(t){const e=Se(t);await pr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Sv(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Nd(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function Pv(t,e){const n=await Cd(t,{},async()=>{const i=_s({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=await xd(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:i};return t.emulatorConfig&&bs(t.emulatorConfig.host)&&(l.credentials="include"),kd.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function kv(t,e){return Ut(t,"POST","/v2/accounts:revokeToken",cn(t,e))}/**
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
 */class hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){K(e.length!==0,"internal-error");const n=lc(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await Pv(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new hi;return i&&(K(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(K(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new hi,this.toJSON())}_performRefresh(){return Jt("not implemented")}}/**
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
 */function fn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mt{constructor({uid:e,auth:n,stsTokenManager:i,...s}){this.providerId="firebase",this.proactiveRefresh=new Tv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ea(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await vi(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Iv(this,e)}reload(){return Av(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await pr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xe(this.auth.app))return Promise.reject(en(this.auth));const e=await this.getIdToken();return await vi(this,Ev(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const i=n.displayName??void 0,s=n.email??void 0,r=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,l=n._redirectEventId??void 0,c=n.createdAt??void 0,u=n.lastLoginAt??void 0,{uid:d,emailVerified:m,isAnonymous:E,providerData:x,stsTokenManager:R}=n;K(d&&R,e,"internal-error");const D=hi.fromJSON(this.name,R);K(typeof d=="string",e,"internal-error"),fn(i,e.name),fn(s,e.name),K(typeof m=="boolean",e,"internal-error"),K(typeof E=="boolean",e,"internal-error"),fn(r,e.name),fn(o,e.name),fn(a,e.name),fn(l,e.name),fn(c,e.name),fn(u,e.name);const S=new mt({uid:d,auth:e,email:s,emailVerified:m,displayName:i,isAnonymous:E,photoURL:o,phoneNumber:r,tenantId:a,stsTokenManager:D,createdAt:c,lastLoginAt:u});return x&&Array.isArray(x)&&(S.providerData=x.map(N=>({...N}))),l&&(S._redirectEventId=l),S}static async _fromIdTokenResponse(e,n,i=!1){const s=new hi;s.updateFromServerResponse(n);const r=new mt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await pr(r),r}static async _fromGetAccountInfoResponse(e,n,i){const s=n.users[0];K(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Nd(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new hi;a.updateFromIdToken(i);const l=new mt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new ea(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const cc=new Map;function Yt(t){on(t instanceof Function,"Expected a class definition");let e=cc.get(t);return e?(on(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cc.set(t,e),e)}/**
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
 */class Dd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Dd.type="NONE";const uc=Dd;/**
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
 */function Gs(t,e,n){return`firebase:${t}:${e}:${n}`}class Hn{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Gs(this.userKey,s.apiKey,r),this.fullPersistenceKey=Gs("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await hr(this.auth,{idToken:e}).catch(()=>{});return n?mt._fromGetAccountInfoResponse(this.auth,n,e):null}return mt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,n,i="authUser"){if(!n.length)return new Hn(Yt(uc),e,i);const s=(await Promise.all(n.map(async c=>{try{if(await c._isAvailable())return c}catch{return}}))).filter(c=>c);let r=s[0]||Yt(uc);const o=Gs(i,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){let d;if(typeof u=="string"){const m=await hr(e,{idToken:u}).catch(()=>{});if(!m)break;d=await mt._fromGetAccountInfoResponse(e,m,u)}else d=mt._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Hn(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Hn(r,e,i))}}/**
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
 */function dc(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ld(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Od(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ud(e))return"Blackberry";if($d(e))return"Webos";if(Vd(e))return"Safari";if((e.includes("chrome/")||Md(e))&&!e.includes("edge/"))return"Chrome";if(Fd(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Od(t=Ke()){return/firefox\//i.test(t)}function Vd(t=Ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Md(t=Ke()){return/crios\//i.test(t)}function Ld(t=Ke()){return/iemobile/i.test(t)}function Fd(t=Ke()){return/android/i.test(t)}function Ud(t=Ke()){return/blackberry/i.test(t)}function $d(t=Ke()){return/webos/i.test(t)}function Da(t=Ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Cv(t=Ke()){var e;return Da(t)&&!!((e=window.navigator)!=null&&e.standalone)}function xv(){return Km()&&document.documentMode===10}function Bd(t=Ke()){return Da(t)||Fd(t)||$d(t)||Ud(t)||/windows phone/i.test(t)||Ld(t)}/**
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
 */function jd(t,e=[]){let n;switch(t){case"Browser":n=dc(Ke());break;case"Worker":n=`${dc(Ke())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wi}/${i}`}/**
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
 */class Rv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function Nv(t,e={}){return Ut(t,"GET","/v2/passwordPolicy",cn(t,e))}/**
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
 */const Dv=6;class Ov{constructor(e){var i;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??Dv,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class Vv{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fc(this),this.idTokenSubscription=new fc(this),this.beforeStateQueue=new Rv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Yt(n)),this._initializationPromise=this.queue(async()=>{var i,s,r;if(!this._deleted){try{this.persistenceManager=await Hn.create(this,e)}catch(o){zs(`Failed to initialize persistence: ${o}`),this.persistenceManager=await Hn.create(this,[])}finally{(i=this._resolvePersistenceManagerAvailable)==null||i.call(this)}if(!this._deleted){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(n)}catch(o){zs(`Failed to initialize current user: ${o}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((r=this.currentUser)==null?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await hr(this,{idToken:e}),i=await mt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var r;if(Xe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)==null?void 0:r._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pr(e)}catch(n){if(Rd(n))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=pv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xe(this.app))return Promise.reject(en(this));const n=e?Se(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xe(this.app)?Promise.reject(en(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xe(this.app)?Promise.reject(en(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Yt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Nv(this),n=new Ov(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ys("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await kv(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Yt(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Hn.create(this,[Yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}).catch(l=>{if(!o)if(typeof n!="function"&&n.error)n.error(l);else if(i)i(l);else throw l}),typeof n=="function"){const l=e.addObserver(n,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(n){const i=(n==null?void 0:n.message)||String(n),s=Yr(this,"internal-error",`An internal AuthError has occurred: ${i}`);throw s.customData={originalError:n},s}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var n;if(Xe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&zs(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function un(t){return Se(t)}class fc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zm(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Xr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Mv(t){Xr=t}function Hd(t){return Xr.loadJS(t)}function Lv(){return Xr.recaptchaEnterpriseScript}function Fv(){return Xr.gapiScript}function Uv(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class $v{constructor(){this.enterprise=new Bv}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class Bv{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}/**
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
 */const jv="recaptcha-enterprise",Wd="NO_RECAPTCHA",hc="onFirebaseAuthREInstanceReady";class mn{constructor(e){this.type=jv,this.auth=un(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{wv(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new bv(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;ac(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Wd)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new $v().execute("siteKey",{action:"verify"}):new Promise((r,o)=>{i(this.auth).then(async a=>{if(!n&&ac(window.grecaptcha)&&mn.scriptInjectionDeferred)await mn.scriptInjectionDeferred.promise,s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Lv();l.length!==0&&(l+=a+`&onload=${hc}`),mn.scriptInjectionDeferred=new yd,window[hc]=()=>{var c;(c=mn.scriptInjectionDeferred)==null||c.resolve()},Hd(l).then(()=>{var c;return(c=mn.scriptInjectionDeferred)==null?void 0:c.promise}).then(()=>{s(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}mn.scriptInjectionDeferred=null;async function pc(t,e,n,i=!1,s=!1){const r=new mn(t);let o;if(s)o=Wd;else try{o=await r.verify(n)}catch{o=await r.verify(n,!0)}const a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function mr(t,e,n,i,s){var r;if((r=t._getRecaptchaConfig())!=null&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await pc(t,e,n,n==="getOobCode");return i(t,o)}else return i(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await pc(t,e,n,n==="getOobCode");return i(t,a)}else return Promise.reject(o)})}/**
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
 */function Hv(t,e){const n=Ca(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(zn(r,e??{}))return s;dt(s,"already-initialized")}return n.initialize({options:e})}function Wv(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Yt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function zv(t,e,n){const i=un(t);K(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=zd(e),{host:o,port:a}=Kv(e),l=a===null?"":`:${a}`,c={url:`${r}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){K(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),K(zn(c,i.config.emulator)&&zn(u,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=c,i.emulatorConfig=u,i.settings.appVerificationDisabledForTesting=!0,bs(o)?_d(`${r}//${o}${l}`):Gv()}function zd(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Kv(t){const e=zd(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:mc(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:mc(o)}}}function mc(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Gv(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Oa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Jt("not implemented")}_getIdTokenResponse(e){return Jt("not implemented")}_linkToIdToken(e,n){return Jt("not implemented")}_getReauthenticationResolver(e){return Jt("not implemented")}}async function qv(t,e){return Ut(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Jv(t,e){return Es(t,"POST","/v1/accounts:signInWithPassword",cn(t,e))}async function Yv(t,e){return Ut(t,"POST","/v1/accounts:sendOobCode",cn(t,e))}async function Xv(t,e){return Yv(t,e)}/**
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
 */async function Zv(t,e){return Es(t,"POST","/v1/accounts:signInWithEmailLink",cn(t,e))}async function Qv(t,e){return Es(t,"POST","/v1/accounts:signInWithEmailLink",cn(t,e))}/**
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
 */class ss extends Oa{constructor(e,n,i,s=null){super("password",i),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ss(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new ss(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mr(e,n,"signInWithPassword",Jv);case"emailLink":return Zv(e,{email:this._email,oobCode:this._password});default:dt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mr(e,i,"signUpPassword",qv);case"emailLink":return Qv(e,{idToken:n,email:this._email,oobCode:this._password});default:dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function pi(t,e){return Es(t,"POST","/v1/accounts:signInWithIdp",cn(t,e))}/**
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
 */const e0="http://localhost";class Gn extends Oa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s,...r}=n;if(!i||!s)return null;const o=new Gn(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return pi(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,pi(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pi(e,n)}buildRequest(){const e={requestUri:e0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_s(n)}return e}}/**
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
 */function t0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function n0(t){const e=Di(Oi(t)).link,n=e?Di(Oi(e)).deep_link_id:null,i=Di(Oi(t)).deep_link_id;return(i?Di(Oi(i)).link:null)||i||n||e||t}class Va{constructor(e){const n=Di(Oi(e)),i=n.apiKey??null,s=n.oobCode??null,r=t0(n.mode??null);K(i&&s&&r,"argument-error"),this.apiKey=i,this.operation=r,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=n0(e);try{return new Va(n)}catch{return null}}}/**
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
 */class Ei{constructor(){this.providerId=Ei.PROVIDER_ID}static credential(e,n){return ss._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Va.parseLink(n);return K(i,"argument-error"),ss._fromEmailAndCode(e,i.code,i.tenantId)}}Ei.PROVIDER_ID="password";Ei.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ei.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ma{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Is extends Ma{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class gn extends Is{constructor(){super("facebook.com")}static credential(e){return Gn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";gn.PROVIDER_ID="facebook.com";/**
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
 */class Gt extends Is{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Gt.credential(n,i)}catch{return null}}}Gt.GOOGLE_SIGN_IN_METHOD="google.com";Gt.PROVIDER_ID="google.com";/**
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
 */class vn extends Is{constructor(){super("github.com")}static credential(e){return Gn._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.GITHUB_SIGN_IN_METHOD="github.com";vn.PROVIDER_ID="github.com";/**
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
 */class yn extends Is{constructor(){super("twitter.com")}static credential(e,n){return Gn._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return yn.credential(n,i)}catch{return null}}}yn.TWITTER_SIGN_IN_METHOD="twitter.com";yn.PROVIDER_ID="twitter.com";/**
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
 */async function i0(t,e){return Es(t,"POST","/v1/accounts:signUp",cn(t,e))}/**
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
 */class qn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await mt._fromIdTokenResponse(e,i,s),o=gc(i);return new qn({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=gc(i);return new qn({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function gc(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class gr extends ln{constructor(e,n,i,s){super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,gr.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new gr(e,n,i,s)}}function Kd(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?gr._fromErrorAndOperation(t,r,e,i):r})}async function s0(t,e,n=!1){const i=await vi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qn._forOperation(t,"link",i)}/**
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
 */async function r0(t,e,n=!1){const{auth:i}=t;if(Xe(i.app))return Promise.reject(en(i));const s="reauthenticate";try{const r=await vi(t,Kd(i,s,e,t),n);K(r.idToken,i,"internal-error");const o=Na(r.idToken);K(o,i,"internal-error");const{sub:a}=o;return K(t.uid===a,i,"user-mismatch"),qn._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&dt(i,"user-mismatch"),r}}/**
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
 */async function Gd(t,e,n=!1){if(Xe(t.app))return Promise.reject(en(t));const i="signIn",s=await Kd(t,i,e),r=await qn._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function o0(t,e){return Gd(un(t),e)}/**
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
 */async function qd(t){const e=un(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function a0(t,e,n){const i=un(t);await mr(i,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Xv)}async function l0(t,e,n){if(Xe(t.app))return Promise.reject(en(t));const i=un(t),o=await mr(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",i0).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&qd(t),l}),a=await qn._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function c0(t,e,n){return Xe(t.app)?Promise.reject(en(t)):o0(Se(t),Ei.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&qd(t),i})}/**
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
 */async function u0(t,e){return Ut(t,"POST","/v1/accounts:update",e)}/**
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
 */async function d0(t,e){const{displayName:n,photoURL:i}=e;if(n===void 0&&i===void 0)return;const s=Se(t),o={idToken:await s.getIdToken(),displayName:n,photoUrl:i,returnSecureToken:!0},a=await vi(s,u0(s.auth,o));s.displayName=a.displayName||null,s.photoURL=a.photoUrl||null;const l=s.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=s.displayName,l.photoURL=s.photoURL),await s._updateTokensIfNecessary(a)}function f0(t,e,n,i){return Se(t).onIdTokenChanged(e,n,i)}function h0(t,e,n){return Se(t).beforeAuthStateChanged(e,n)}function p0(t,e,n,i){return Se(t).onAuthStateChanged(e,n,i)}function m0(t){return Se(t).signOut()}const vr="__sak";/**
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
 */class Jd{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vr,"1"),this.storage.removeItem(vr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const g0=1e3,v0=10;class Yd extends Jd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Bd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);xv()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,v0):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},g0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yd.type="LOCAL";const y0=Yd;/**
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
 */class Xd extends Jd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Xd.type="SESSION";const Zd=Xd;/**
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
 */function _0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Zr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Zr(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await _0(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zr.receivers=[];/**
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
 */function La(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class b0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=La("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const m=d;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(m.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Mt(){return window}function w0(t){Mt().location.href=t}/**
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
 */function Qd(){return typeof Mt().WorkerGlobalScope<"u"&&typeof Mt().importScripts=="function"}async function E0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function I0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function T0(){return Qd()?self:null}/**
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
 */const ef="firebaseLocalStorageDb",A0=1,yr="firebaseLocalStorage",tf="fbase_key";class Ts{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qr(t,e){return t.transaction([yr],e?"readwrite":"readonly").objectStore(yr)}function S0(){const t=indexedDB.deleteDatabase(ef);return new Ts(t).toPromise()}function nf(){const t=indexedDB.open(ef,A0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(yr,{keyPath:tf})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(yr)?e(i):(i.close(),await S0(),e(await nf()))})})}async function vc(t,e,n){const i=Qr(t,!0).put({[tf]:e,value:n});return new Ts(i).toPromise()}async function P0(t,e){const n=Qr(t,!1).get(e),i=await new Ts(n).toPromise();return i===void 0?null:i.value}function yc(t,e){const n=Qr(t,!0).delete(e);return new Ts(n).toPromise()}const k0=800,C0=3;class sf{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=nf(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>C0)throw i;if(this.dbPromise){const s=this.dbPromise;this.dbPromise=null;try{(await s).close()}catch{}}}}async initializeServiceWorkerMessaging(){return Qd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zr._getInstance(T0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,i;if(this.activeServiceWorker=await E0(),!this.activeServiceWorker)return;this.sender=new b0(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||I0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await vc(e,vr,"1"),await yc(e,vr)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>vc(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>P0(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yc(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(s=>{const r=Qr(s,!1).getAll();return new Ts(r).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}catch(e){return this.isClosing||zs(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),k0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}sf.type="LOCAL";const x0=sf;new ws(3e4,6e4);/**
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
 */function rf(t,e){return e?Yt(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Fa extends Oa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function R0(t){return Gd(t.auth,new Fa(t),t.bypassAuthState)}function N0(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),r0(n,new Fa(t),t.bypassAuthState)}async function D0(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),s0(n,new Fa(t),t.bypassAuthState)}/**
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
 */class of{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return R0;case"linkViaPopup":case"linkViaRedirect":return D0;case"reauthViaPopup":case"reauthViaRedirect":return N0;default:dt(this.auth,"internal-error")}}resolve(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){on(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const O0=new ws(2e3,1e4);async function V0(t,e,n){if(Xe(t.app))return Promise.reject(_t(t,"operation-not-supported-in-this-environment"));const i=un(t);dv(t,e,Ma);const s=rf(i,n);return new Fn(i,"signInViaPopup",e,s).executeNotNull()}class Fn extends of{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Fn.currentPopupAction&&Fn.currentPopupAction.cancel(),Fn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){on(this.filter.length===1,"Popup operations only handle one event");const e=La();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(_t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if((i=(n=this.authWindow)==null?void 0:n.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,O0.get())};e()}}Fn.currentPopupAction=null;/**
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
 */const M0="pendingRedirect",qs=new Map;class L0 extends of{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=qs.get(this.auth._key());if(!e){try{const i=await F0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}qs.set(this.auth._key(),e)}return this.bypassAuthState||qs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function F0(t,e){const n=B0(e),i=$0(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function U0(t,e){qs.set(t._key(),e)}function $0(t){return Yt(t._redirectPersistence)}function B0(t){return Gs(M0,t.config.apiKey,t.name)}async function j0(t,e,n=!1){if(Xe(t.app))return Promise.reject(en(t));const i=un(t),s=rf(i,e),o=await new L0(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const H0=600*1e3;class W0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!z0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!af(e)){const s=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";n.onError(_t(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=H0&&this.cachedEventUids.clear(),this.cachedEventUids.has(_c(e))}saveEventToCache(e){this.cachedEventUids.add(_c(e)),this.lastProcessedEventTime=Date.now()}}function _c(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function af({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function z0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return af(t);default:return!1}}/**
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
 */async function K0(t,e={}){return Ut(t,"GET","/v1/projects",e)}/**
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
 */const G0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,q0=/^https?/;async function J0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await K0(t);for(const n of e)try{if(Y0(n))return}catch{}dt(t,"unauthorized-domain")}function Y0(t){const e=Qo(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!q0.test(n))return!1;if(G0.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const X0=new ws(3e4,6e4);function bc(){const t=Mt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Z0(t){return new Promise((e,n)=>{var s,r,o;function i(){bc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bc(),n(_t(t,"network-request-failed"))},timeout:X0.get()})}if((r=(s=Mt().gapi)==null?void 0:s.iframes)!=null&&r.Iframe)e(gapi.iframes.getContext());else if((o=Mt().gapi)!=null&&o.load)i();else{const a=Uv("iframefcb");return Mt()[a]=()=>{gapi.load?i():n(_t(t,"network-request-failed"))},Hd(`${Fv()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Js=null,e})}let Js=null;function Q0(t){return Js=Js||Z0(t),Js}/**
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
 */const ey=new ws(5e3,15e3),ty="__/auth/iframe",ny="emulator/auth/iframe",iy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ry(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ra(e,ny):`https://${t.config.authDomain}/${ty}`,i={apiKey:e.apiKey,appName:t.name,v:wi},s=sy.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${_s(i).slice(1)}`}async function oy(t){const e=await Q0(t),n=Mt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:ry(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iy,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=_t(t,"network-request-failed"),a=Mt().setTimeout(()=>{r(o)},ey.get());function l(){Mt().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const ay={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ly=500,cy=600,uy="_blank",dy="http://localhost";class wc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fy(t,e,n,i=ly,s=cy){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l={...ay,width:i.toString(),height:s.toString(),top:r,left:o},c=Ke().toLowerCase();n&&(a=Md(c)?uy:n),Od(c)&&(e=e||dy,l.scrollbars="yes");const u=Object.entries(l).reduce((m,[E,x])=>`${m}${E}=${x},`,"");if(Cv(c)&&a!=="_self")return hy(e||"",a),new wc(null);const d=window.open(e||"",a,u);K(d,t,"popup-blocked");try{d.focus()}catch{}return new wc(d)}function hy(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const py="__/auth/handler",my="emulator/auth/handler",gy=encodeURIComponent("fac");async function Ec(t,e,n,i,s,r){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:wi,eventId:s};if(e instanceof Ma){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Xm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Is){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${gy}=${encodeURIComponent(l)}`:"";return`${vy(t)}?${_s(a).slice(1)}${c}`}function vy({config:t}){return t.emulator?Ra(t,my):`https://${t.authDomain}/${py}`}/**
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
 */const Co="webStorageSupport";class yy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zd,this._completeRedirectFn=j0,this._overrideRedirectResult=U0}async _openPopup(e,n,i,s){var o;on((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const r=await Ec(e,n,i,Qo(),s);return fy(e,r,La())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await Ec(e,n,i,Qo(),s);return w0(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(on(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await oy(e),i=new W0(e);return n.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Co,{type:Co},s=>{var o;const r=(o=s==null?void 0:s[0])==null?void 0:o[Co];r!==void 0&&n(!!r),dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=J0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bd()||Vd()||Da()}}const _y=yy;var Ic="@firebase/auth",Tc="1.13.8";/**
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
 */class by{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wy(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ey(t){gi(new Kn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jd(t)},c=new Vv(i,s,r,l);return Wv(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),gi(new Kn("auth-internal",e=>{const n=un(e.getProvider("auth").getImmediate());return(i=>new by(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(Ic,Tc,wy(t)),wn(Ic,Tc,"esm2020")}/**
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
 */const Iy=300,Ty=vd("authIdTokenMaxAge")||Iy;let Ac=null;const Ay=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Ty)return;const s=n==null?void 0:n.token;Ac!==s&&(Ac=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function yi(t=Id()){const e=Ca(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Hv(t,{popupRedirectResolver:_y,persistence:[x0,y0,Zd]}),i=vd("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=Ay(r.toString());h0(n,o,()=>o(n.currentUser)),f0(n,a=>o(a))}}const s=md("auth");return s&&zv(n,`http://${s}`),n}function Sy(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}Mv({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=_t("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",Sy().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ey("Browser");var Py="firebase",ky="13.1.0";/**
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
 */wn(Py,ky,"app");var Sc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var lf;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,h){function f(){}f.prototype=h.prototype,y.F=h.prototype,y.prototype=new f,y.prototype.constructor=y,y.D=function(_,b,v){for(var p=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)p[ce-2]=arguments[ce];return h.prototype[b].apply(_,p)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(i,n),i.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(y,h,f){f||(f=0);const _=Array(16);if(typeof h=="string")for(var b=0;b<16;++b)_[b]=h.charCodeAt(f++)|h.charCodeAt(f++)<<8|h.charCodeAt(f++)<<16|h.charCodeAt(f++)<<24;else for(b=0;b<16;++b)_[b]=h[f++]|h[f++]<<8|h[f++]<<16|h[f++]<<24;h=y.g[0],f=y.g[1],b=y.g[2];let v=y.g[3],p;p=h+(v^f&(b^v))+_[0]+3614090360&4294967295,h=f+(p<<7&4294967295|p>>>25),p=v+(b^h&(f^b))+_[1]+3905402710&4294967295,v=h+(p<<12&4294967295|p>>>20),p=b+(f^v&(h^f))+_[2]+606105819&4294967295,b=v+(p<<17&4294967295|p>>>15),p=f+(h^b&(v^h))+_[3]+3250441966&4294967295,f=b+(p<<22&4294967295|p>>>10),p=h+(v^f&(b^v))+_[4]+4118548399&4294967295,h=f+(p<<7&4294967295|p>>>25),p=v+(b^h&(f^b))+_[5]+1200080426&4294967295,v=h+(p<<12&4294967295|p>>>20),p=b+(f^v&(h^f))+_[6]+2821735955&4294967295,b=v+(p<<17&4294967295|p>>>15),p=f+(h^b&(v^h))+_[7]+4249261313&4294967295,f=b+(p<<22&4294967295|p>>>10),p=h+(v^f&(b^v))+_[8]+1770035416&4294967295,h=f+(p<<7&4294967295|p>>>25),p=v+(b^h&(f^b))+_[9]+2336552879&4294967295,v=h+(p<<12&4294967295|p>>>20),p=b+(f^v&(h^f))+_[10]+4294925233&4294967295,b=v+(p<<17&4294967295|p>>>15),p=f+(h^b&(v^h))+_[11]+2304563134&4294967295,f=b+(p<<22&4294967295|p>>>10),p=h+(v^f&(b^v))+_[12]+1804603682&4294967295,h=f+(p<<7&4294967295|p>>>25),p=v+(b^h&(f^b))+_[13]+4254626195&4294967295,v=h+(p<<12&4294967295|p>>>20),p=b+(f^v&(h^f))+_[14]+2792965006&4294967295,b=v+(p<<17&4294967295|p>>>15),p=f+(h^b&(v^h))+_[15]+1236535329&4294967295,f=b+(p<<22&4294967295|p>>>10),p=h+(b^v&(f^b))+_[1]+4129170786&4294967295,h=f+(p<<5&4294967295|p>>>27),p=v+(f^b&(h^f))+_[6]+3225465664&4294967295,v=h+(p<<9&4294967295|p>>>23),p=b+(h^f&(v^h))+_[11]+643717713&4294967295,b=v+(p<<14&4294967295|p>>>18),p=f+(v^h&(b^v))+_[0]+3921069994&4294967295,f=b+(p<<20&4294967295|p>>>12),p=h+(b^v&(f^b))+_[5]+3593408605&4294967295,h=f+(p<<5&4294967295|p>>>27),p=v+(f^b&(h^f))+_[10]+38016083&4294967295,v=h+(p<<9&4294967295|p>>>23),p=b+(h^f&(v^h))+_[15]+3634488961&4294967295,b=v+(p<<14&4294967295|p>>>18),p=f+(v^h&(b^v))+_[4]+3889429448&4294967295,f=b+(p<<20&4294967295|p>>>12),p=h+(b^v&(f^b))+_[9]+568446438&4294967295,h=f+(p<<5&4294967295|p>>>27),p=v+(f^b&(h^f))+_[14]+3275163606&4294967295,v=h+(p<<9&4294967295|p>>>23),p=b+(h^f&(v^h))+_[3]+4107603335&4294967295,b=v+(p<<14&4294967295|p>>>18),p=f+(v^h&(b^v))+_[8]+1163531501&4294967295,f=b+(p<<20&4294967295|p>>>12),p=h+(b^v&(f^b))+_[13]+2850285829&4294967295,h=f+(p<<5&4294967295|p>>>27),p=v+(f^b&(h^f))+_[2]+4243563512&4294967295,v=h+(p<<9&4294967295|p>>>23),p=b+(h^f&(v^h))+_[7]+1735328473&4294967295,b=v+(p<<14&4294967295|p>>>18),p=f+(v^h&(b^v))+_[12]+2368359562&4294967295,f=b+(p<<20&4294967295|p>>>12),p=h+(f^b^v)+_[5]+4294588738&4294967295,h=f+(p<<4&4294967295|p>>>28),p=v+(h^f^b)+_[8]+2272392833&4294967295,v=h+(p<<11&4294967295|p>>>21),p=b+(v^h^f)+_[11]+1839030562&4294967295,b=v+(p<<16&4294967295|p>>>16),p=f+(b^v^h)+_[14]+4259657740&4294967295,f=b+(p<<23&4294967295|p>>>9),p=h+(f^b^v)+_[1]+2763975236&4294967295,h=f+(p<<4&4294967295|p>>>28),p=v+(h^f^b)+_[4]+1272893353&4294967295,v=h+(p<<11&4294967295|p>>>21),p=b+(v^h^f)+_[7]+4139469664&4294967295,b=v+(p<<16&4294967295|p>>>16),p=f+(b^v^h)+_[10]+3200236656&4294967295,f=b+(p<<23&4294967295|p>>>9),p=h+(f^b^v)+_[13]+681279174&4294967295,h=f+(p<<4&4294967295|p>>>28),p=v+(h^f^b)+_[0]+3936430074&4294967295,v=h+(p<<11&4294967295|p>>>21),p=b+(v^h^f)+_[3]+3572445317&4294967295,b=v+(p<<16&4294967295|p>>>16),p=f+(b^v^h)+_[6]+76029189&4294967295,f=b+(p<<23&4294967295|p>>>9),p=h+(f^b^v)+_[9]+3654602809&4294967295,h=f+(p<<4&4294967295|p>>>28),p=v+(h^f^b)+_[12]+3873151461&4294967295,v=h+(p<<11&4294967295|p>>>21),p=b+(v^h^f)+_[15]+530742520&4294967295,b=v+(p<<16&4294967295|p>>>16),p=f+(b^v^h)+_[2]+3299628645&4294967295,f=b+(p<<23&4294967295|p>>>9),p=h+(b^(f|~v))+_[0]+4096336452&4294967295,h=f+(p<<6&4294967295|p>>>26),p=v+(f^(h|~b))+_[7]+1126891415&4294967295,v=h+(p<<10&4294967295|p>>>22),p=b+(h^(v|~f))+_[14]+2878612391&4294967295,b=v+(p<<15&4294967295|p>>>17),p=f+(v^(b|~h))+_[5]+4237533241&4294967295,f=b+(p<<21&4294967295|p>>>11),p=h+(b^(f|~v))+_[12]+1700485571&4294967295,h=f+(p<<6&4294967295|p>>>26),p=v+(f^(h|~b))+_[3]+2399980690&4294967295,v=h+(p<<10&4294967295|p>>>22),p=b+(h^(v|~f))+_[10]+4293915773&4294967295,b=v+(p<<15&4294967295|p>>>17),p=f+(v^(b|~h))+_[1]+2240044497&4294967295,f=b+(p<<21&4294967295|p>>>11),p=h+(b^(f|~v))+_[8]+1873313359&4294967295,h=f+(p<<6&4294967295|p>>>26),p=v+(f^(h|~b))+_[15]+4264355552&4294967295,v=h+(p<<10&4294967295|p>>>22),p=b+(h^(v|~f))+_[6]+2734768916&4294967295,b=v+(p<<15&4294967295|p>>>17),p=f+(v^(b|~h))+_[13]+1309151649&4294967295,f=b+(p<<21&4294967295|p>>>11),p=h+(b^(f|~v))+_[4]+4149444226&4294967295,h=f+(p<<6&4294967295|p>>>26),p=v+(f^(h|~b))+_[11]+3174756917&4294967295,v=h+(p<<10&4294967295|p>>>22),p=b+(h^(v|~f))+_[2]+718787259&4294967295,b=v+(p<<15&4294967295|p>>>17),p=f+(v^(b|~h))+_[9]+3951481745&4294967295,y.g[0]=y.g[0]+h&4294967295,y.g[1]=y.g[1]+(b+(p<<21&4294967295|p>>>11))&4294967295,y.g[2]=y.g[2]+b&4294967295,y.g[3]=y.g[3]+v&4294967295}i.prototype.v=function(y,h){h===void 0&&(h=y.length);const f=h-this.blockSize,_=this.C;let b=this.h,v=0;for(;v<h;){if(b==0)for(;v<=f;)s(this,y,v),v+=this.blockSize;if(typeof y=="string"){for(;v<h;)if(_[b++]=y.charCodeAt(v++),b==this.blockSize){s(this,_),b=0;break}}else for(;v<h;)if(_[b++]=y[v++],b==this.blockSize){s(this,_),b=0;break}}this.h=b,this.o+=h},i.prototype.A=function(){var y=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);y[0]=128;for(var h=1;h<y.length-8;++h)y[h]=0;h=this.o*8;for(var f=y.length-8;f<y.length;++f)y[f]=h&255,h/=256;for(this.v(y),y=Array(16),h=0,f=0;f<4;++f)for(let _=0;_<32;_+=8)y[h++]=this.g[f]>>>_&255;return y};function r(y,h){var f=a;return Object.prototype.hasOwnProperty.call(f,y)?f[y]:f[y]=h(y)}function o(y,h){this.h=h;const f=[];let _=!0;for(let b=y.length-1;b>=0;b--){const v=y[b]|0;_&&v==h||(f[b]=v,_=!1)}this.g=f}var a={};function l(y){return-128<=y&&y<128?r(y,function(h){return new o([h|0],h<0?-1:0)}):new o([y|0],y<0?-1:0)}function c(y){if(isNaN(y)||!isFinite(y))return d;if(y<0)return D(c(-y));const h=[];let f=1;for(let _=0;y>=f;_++)h[_]=y/f|0,f*=4294967296;return new o(h,0)}function u(y,h){if(y.length==0)throw Error("number format error: empty string");if(h=h||10,h<2||36<h)throw Error("radix out of range: "+h);if(y.charAt(0)=="-")return D(u(y.substring(1),h));if(y.indexOf("-")>=0)throw Error('number format error: interior "-" character');const f=c(Math.pow(h,8));let _=d;for(let v=0;v<y.length;v+=8){var b=Math.min(8,y.length-v);const p=parseInt(y.substring(v,v+b),h);b<8?(b=c(Math.pow(h,b)),_=_.j(b).add(c(p))):(_=_.j(f),_=_.add(c(p)))}return _}var d=l(0),m=l(1),E=l(16777216);t=o.prototype,t.m=function(){if(R(this))return-D(this).m();let y=0,h=1;for(let f=0;f<this.g.length;f++){const _=this.i(f);y+=(_>=0?_:4294967296+_)*h,h*=4294967296}return y},t.toString=function(y){if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(x(this))return"0";if(R(this))return"-"+D(this).toString(y);const h=c(Math.pow(y,6));var f=this;let _="";for(;;){const b=U(f,h).g;f=S(f,b.j(h));let v=((f.g.length>0?f.g[0]:f.h)>>>0).toString(y);if(f=b,x(f))return v+_;for(;v.length<6;)v="0"+v;_=v+_}},t.i=function(y){return y<0?0:y<this.g.length?this.g[y]:this.h};function x(y){if(y.h!=0)return!1;for(let h=0;h<y.g.length;h++)if(y.g[h]!=0)return!1;return!0}function R(y){return y.h==-1}t.l=function(y){return y=S(this,y),R(y)?-1:x(y)?0:1};function D(y){const h=y.g.length,f=[];for(let _=0;_<h;_++)f[_]=~y.g[_];return new o(f,~y.h).add(m)}t.abs=function(){return R(this)?D(this):this},t.add=function(y){const h=Math.max(this.g.length,y.g.length),f=[];let _=0;for(let b=0;b<=h;b++){let v=_+(this.i(b)&65535)+(y.i(b)&65535),p=(v>>>16)+(this.i(b)>>>16)+(y.i(b)>>>16);_=p>>>16,v&=65535,p&=65535,f[b]=p<<16|v}return new o(f,f[f.length-1]&-2147483648?-1:0)};function S(y,h){return y.add(D(h))}t.j=function(y){if(x(this)||x(y))return d;if(R(this))return R(y)?D(this).j(D(y)):D(D(this).j(y));if(R(y))return D(this.j(D(y)));if(this.l(E)<0&&y.l(E)<0)return c(this.m()*y.m());const h=this.g.length+y.g.length,f=[];for(var _=0;_<2*h;_++)f[_]=0;for(_=0;_<this.g.length;_++)for(let b=0;b<y.g.length;b++){const v=this.i(_)>>>16,p=this.i(_)&65535,ce=y.i(b)>>>16,st=y.i(b)&65535;f[2*_+2*b]+=p*st,N(f,2*_+2*b),f[2*_+2*b+1]+=v*st,N(f,2*_+2*b+1),f[2*_+2*b+1]+=p*ce,N(f,2*_+2*b+1),f[2*_+2*b+2]+=v*ce,N(f,2*_+2*b+2)}for(y=0;y<h;y++)f[y]=f[2*y+1]<<16|f[2*y];for(y=h;y<2*h;y++)f[y]=0;return new o(f,0)};function N(y,h){for(;(y[h]&65535)!=y[h];)y[h+1]+=y[h]>>>16,y[h]&=65535,h++}function X(y,h){this.g=y,this.h=h}function U(y,h){if(x(h))throw Error("division by zero");if(x(y))return new X(d,d);if(R(y))return h=U(D(y),h),new X(D(h.g),D(h.h));if(R(h))return h=U(y,D(h)),new X(D(h.g),h.h);if(y.g.length>30){if(R(y)||R(h))throw Error("slowDivide_ only works with positive integers.");for(var f=m,_=h;_.l(y)<=0;)f=Z(f),_=Z(_);var b=te(f,1),v=te(_,1);for(_=te(_,2),f=te(f,2);!x(_);){var p=v.add(_);p.l(y)<=0&&(b=b.add(f),v=p),_=te(_,1),f=te(f,1)}return h=S(y,b.j(h)),new X(b,h)}for(b=d;y.l(h)>=0;){for(f=Math.max(1,Math.floor(y.m()/h.m())),_=Math.ceil(Math.log(f)/Math.LN2),_=_<=48?1:Math.pow(2,_-48),v=c(f),p=v.j(h);R(p)||p.l(y)>0;)f-=_,v=c(f),p=v.j(h);x(v)&&(v=m),b=b.add(v),y=S(y,p)}return new X(b,y)}t.B=function(y){return U(this,y).h},t.and=function(y){const h=Math.max(this.g.length,y.g.length),f=[];for(let _=0;_<h;_++)f[_]=this.i(_)&y.i(_);return new o(f,this.h&y.h)},t.or=function(y){const h=Math.max(this.g.length,y.g.length),f=[];for(let _=0;_<h;_++)f[_]=this.i(_)|y.i(_);return new o(f,this.h|y.h)},t.xor=function(y){const h=Math.max(this.g.length,y.g.length),f=[];for(let _=0;_<h;_++)f[_]=this.i(_)^y.i(_);return new o(f,this.h^y.h)};function Z(y){const h=y.g.length+1,f=[];for(let _=0;_<h;_++)f[_]=y.i(_)<<1|y.i(_-1)>>>31;return new o(f,y.h)}function te(y,h){const f=h>>5;h%=32;const _=y.g.length-f,b=[];for(let v=0;v<_;v++)b[v]=h>0?y.i(v+f)>>>h|y.i(v+f+1)<<32-h:y.i(v+f);return new o(b,y.h)}i.prototype.digest=i.prototype.A,i.prototype.reset=i.prototype.u,i.prototype.update=i.prototype.v,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=u,lf=o}).apply(typeof Sc<"u"?Sc:typeof self<"u"?self:typeof window<"u"?window:{});function Ne(t,e,n,i){if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?i:n==="a"?i.call(t):i?i.value:e.get(t)}/**
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
 */let Ii="13.1.0";function Cy(t){Ii=t}/**
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
 */const _i=new Pa("@firebase/firestore");function _r(t,...e){if(_i.logLevel<=re.DEBUG){const n=e.map($a);_i.debug(`Firestore (${Ii}): ${t}`,...n)}}function Ua(t,...e){if(_i.logLevel<=re.ERROR){const n=e.map($a);_i.error(`Firestore (${Ii}): ${t}`,...n)}}function cf(t,...e){if(_i.logLevel<=re.WARN){const n=e.map($a);_i.warn(`Firestore (${Ii}): ${t}`,...n)}}function $a(t){if(typeof t=="string")return t;try{return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
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
 */function _e(t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,uf(t,i,n)}function uf(t,e,n){let i=`FIRESTORE (${Ii}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{i+=" CONTEXT: "+JSON.stringify(n)}catch{i+=" CONTEXT: "+n}throw Ua(i),new Error(i)}function nt(t,e,n,i){let s="Unexpected state";typeof n=="string"?s=n:i=n,t||uf(e,s,i)}function As(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable"};class H extends ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class df{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(Ge.UNAUTHENTICATED)))}shutdown(){}}class Ry{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class Ny{constructor(e){this.auth=null,e.onInit((n=>{this.auth=n}))}getToken(){return this.auth?this.auth.getToken().then((e=>e?(nt(typeof e.accessToken=="string",42297,{Z:e}),new df(e.accessToken,new Ge(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class Dy{constructor(e,n,i){this.ee=e,this.te=n,this.re=i,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.ne=new Map}ie(){return this.re?this.re():null}get headers(){this.ne.set("X-Goog-AuthUser",this.ee);const e=this.ie();return e&&this.ne.set("Authorization",e),this.te&&this.ne.set("X-Goog-Iam-Authorization-Token",this.te),this.ne}}class Oy{constructor(e,n,i){this.ee=e,this.te=n,this.re=i}getToken(){return Promise.resolve(new Dy(this.ee,this.te,this.re))}start(e,n){e.enqueueRetryable((()=>n(Ge.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Pc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vy{constructor(e,n){this.se=n,this.appCheck=null,this.oe=null,Xe(e)&&e.settings.appCheckToken&&(this.oe=e.settings.appCheckToken),n.onInit((i=>{this.appCheck=i}))}getToken(){return this.oe?Promise.resolve(new Pc(this.oe)):this.appCheck?this.appCheck.getToken().then((e=>e?(nt(typeof e.token=="string",3470,{tokenResult:e}),new Pc(e.token)):null)):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */class My{constructor(e,n,i,s,r,o,a,l,c,u,d,m,E){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c,this.isUsingEmulator=u,this.apiKey=d,this._customHeaders=m,this.grpcFlowControlWindow=E}}const ta="(default)";class rs{constructor(e,n){this.projectId=e,this.database=n||ta}static empty(){return new rs("","")}get isDefaultDatabase(){return this.database===ta}isEqual(e){return e instanceof rs&&e.projectId===this.projectId&&e.database===this.database}}function Ly(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new H(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rs(t.options.projectId,e)}/**
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
 */function Fy(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class Uy{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=Fy(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%62))}return i}}function ye(t,e){return t<e?-1:t>e?1:0}function os(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const s=t.charAt(i),r=e.charAt(i);if(s!==r)return xo(s)===xo(r)?ye(s,r):xo(s)?1:-1}return ye(t.length,e.length)}const $y=55296,By=57343;function xo(t){const e=t.charCodeAt(0);return e>=$y&&e<=By}function ff(t,e,n){return t.length===e.length&&t.every(((i,s)=>n(i,e[s])))}/**
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
 */const kc="__name__";class kt{constructor(e,n,i){n===void 0?n=0:n>e.length&&_e(637,{offset:n,range:e.length}),i===void 0?i=e.length-n:i>e.length-n&&_e(1746,{length:i,range:e.length-n}),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return kt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof kt?e.forEach((i=>{n.push(i)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=kt.compareSegments(e.get(s),n.get(s));if(r!==0)return r}return ye(e.length,n.length)}static compareSegments(e,n){const i=kt.isNumericId(e),s=kt.isNumericId(n);return i&&!s?-1:!i&&s?1:i&&s?kt.extractNumericId(e).compare(kt.extractNumericId(n)):os(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return lf.fromString(e.substring(4,e.length-2))}}class Ee extends kt{construct(e,n,i){return new Ee(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new H(L.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter((s=>s.length>0)))}return new Ee(n)}static emptyPath(){return new Ee([])}}const jy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let En=class ri extends kt{construct(e,n,i){return new ri(e,n,i)}static isValidIdentifier(e){return jy.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ri.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===kc}static keyField(){return new ri([kc])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new H(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new H(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new H(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new H(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ri(n)}static emptyPath(){return new ri([])}};/**
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
 */class Ue{constructor(e){this.path=e}static fromPath(e){return new Ue(Ee.fromString(e))}static fromName(e){return new Ue(Ee.fromString(e).popFirst(5))}static empty(){return new Ue(Ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ee.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ue(new Ee(e.slice()))}}/**
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
 */function hf(t,e,n){if(!n)throw new H(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Cc(t){if(!Ue.isDocumentKey(t))throw new H(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xc(t){if(Ue.isDocumentKey(t))throw new H(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pf(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Ba(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":_e(12329,{type:typeof t})}function eo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ba(t);throw new H(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function mf(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */let Fs=null;function Hy(){return Fs===null?Fs=(function(){return 268435456+Math.round(2147483648*Math.random())})():Fs++,"0x"+Fs.toString(16)}/**
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
 */function Wy(t){return t==null}function br(t){return t===0&&1/t==-1/0}/**
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
 */const Ro="RestConnection",zy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Ky{get ae(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.ue=n+"://"+e.host,this._e=`projects/${i}/databases/${s}`,this.ce=this.databaseId.database===ta?`project_id=${i}`:`project_id=${i}&database_id=${s}`}le(e,n,i,s,r){const o=Hy(),a=this.fe(e,n.toUriEncodedString());_r(Ro,`Sending RPC '${e}' ${o}:`,a,i);const l={"google-cloud-resource-prefix":this._e,"x-goog-request-params":this.ce};this.he(l,s,r);const{host:c}=new URL(a),u=bs(c);return this.de(e,a,l,i,u).then((d=>(_r(Ro,`Received RPC '${e}' ${o}: `,d),d)),(d=>{throw cf(Ro,`RPC '${e}' ${o} failed with error: `,d,"url: ",a,"request:",i),d}))}me(e,n,i,s,r,o){return this.le(e,n,i,s,r)}he(e,n,i){if(e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ii})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,r)=>e[r]=s)),i&&i.headers.forEach(((s,r)=>e[r]=s)),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))e[s]=this.databaseInfo._customHeaders[s]}fe(e,n){const i=zy[e];let s=`${this.ue}/v1/${n}:${i}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */var Rc,ee,ke,ai,na,Ys,Xs,Vi;function Nc(t){if(t===void 0)return Ua("RPC_ERROR","HTTP error has no status"),L.UNKNOWN;switch(t){case 200:return L.OK;case 400:return L.FAILED_PRECONDITION;case 401:return L.UNAUTHENTICATED;case 403:return L.PERMISSION_DENIED;case 404:return L.NOT_FOUND;case 409:return L.ABORTED;case 416:return L.OUT_OF_RANGE;case 429:return L.RESOURCE_EXHAUSTED;case 499:return L.CANCELLED;case 500:return L.UNKNOWN;case 501:return L.UNIMPLEMENTED;case 503:return L.UNAVAILABLE;case 504:return L.DEADLINE_EXCEEDED;default:return t>=200&&t<300?L.OK:t>=400&&t<500?L.FAILED_PRECONDITION:t>=500&&t<600?L.INTERNAL:L.UNKNOWN}}/**
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
 */(ee=Rc||(Rc={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";class Gy extends Ky{Ee(e,n){throw new Error("Not supported by FetchConnection")}async de(e,n,i,s,r){var l;const o=JSON.stringify(s);let a;try{const c={method:"POST",headers:i,body:o};r&&(c.credentials="include"),a=await fetch(n,c)}catch(c){const u=c,d=u==null?void 0:u.message,m=u!=null&&u.cause?String(u.cause):void 0,E=(d&&m?`${d} (${m})`:d??m)??(u==null?void 0:u.statusText)??String(c);throw new H(Nc(u==null?void 0:u.status),`Request failed with error: ${E}`)}if(!a.ok){let c=await a.json();Array.isArray(c)&&(c=c[0]);const u=(l=c==null?void 0:c.error)==null?void 0:l.message;throw new H(Nc(a.status),`Request failed with error: ${u??a.statusText}`)}return a.json()}}/**
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
 */class qy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new qy("Invalid base64 string: "+r):r}})(e);return new ft(n)}static fromUint8Array(e){const n=(function(s){let r="";for(let o=0;o<s.length;++o)r+=String.fromCharCode(s[o]);return r})(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}function as(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ss(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}ft.EMPTY_BYTE_STRING=new ft("");/**
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
 */class B{constructor(){this.exponent=0,this.Ve=0n,this.Te=0n,this.Ie=new Array(4).fill(0n),this.Ae=new Array(6).fill(0n),this.Re=new Array(6).fill(0n),this.Pe=new Array(6).fill(0n),this.pe=new Array(12).fill(0n)}static ye(e,n){let i=new B;return i.parse(e,n),i}parse(e,n){n+=e.length-1,this.exponent=0,this.Ve=0n,this.Te=0n;let i=this.Pe,s=this.be(e,i);if(s==0&&this.isEmpty(i)||(n+=s)<B.we)return;if(n>B.ge)return void(this.exponent=Number(B.Fe));let r=this.ve(n,i);this.xe(n,r,i)}be(e,n){for(let r=0;r<6;r++)n[r]=0n;let i=0;for(;i<e.length&&e[i]==0;)i+=1;if(i==e.length)return 0;let s=-i;if(e.length-i>B.De){let r=e[B.De]>=5,o=new Array(B.De).fill(0);for(let a=0;a<B.De;a++)o[a]=e[a+i];r&&(s+=this.Ne(o)),e=o,i=0}for(let r=e.length-1;r>=i;r--)n[0]|=BigInt(e[r])<<32n,this.Se(n);return s}Se(e){let n=e.length;for(let i=0;i<n;i++){let s=e[i]%10n;e[i]=e[i]/10n,i+1<n&&(e[i+1]+=s<<32n)}}isEmpty(e){for(let n=0;n<e.length;n++)if(e[n]!=0n)return!1;return!0}Ne(e){for(let n=e.length-1;n>=0;n--){if(e[n]!=9)return e[n]=e[n]+1,0;e[n]=0}return e[0]=1,1}ve(e,n){let i=n[0]<<31n|n[1]>>1n,s=Number(i)/B.Ce;return Math.floor(Number(e)*B.Be+this.log2(s))}log2(e){return B.Qe*Math.log(e)}xe(e,n,i){let s=this.Ie;this.Oe(-n,s);let r=this.pe;this.Me(i,s,r),this.qe(r),BigInt(s[0])!=BigInt(-e)&&this.qe(r),n+=this.Le(r),(n+=B.Ue)<=0||(n+=this.$e(r),BigInt(n)>=B.Fe?this.exponent=Number(B.Fe):(this.exponent=Number(n),this.Ve=(r[0]<<32n)+r[1]&0xffffffffffffffffn,this.Te=(r[2]<<32n)+r[3]&0xffffffffffffffffn))}Oe(e,n){if(e==0)return void this.ke(B.je[0],n);let i=B.je;e<0&&(e=-e,i=B.Ke);let s=B.ze,r=32,o=!0;for(;e>0;)e>=s&&(o?(this.ke(i[r],n),o=!1):this.We(n,i[r],n),e-=s),r-=1,s*=.5}ke(e,n){for(let i=0;i<n.length;i++)n[i]=e[i]}We(e,n,i){this.Ge(e,n,this.pe);let s=this.Je(this.pe);this.He(this.pe,i),i[0]=e[0]+n[0]+BigInt(s)}Ge(e,n,i){for(let s=0;s<i.length;s++)i[s]=0n;this.Ye(e,this.Ae),this.Ye(n,this.Re);for(let s=5;s>=0;s--)for(let r=5;r>=0;r--){let o=this.Ae[s]*this.Re[r];i[r+s+1]=i[r+s+1]+(o&B.Xe)&0xffffffffffffffffn,i[r+s]=i[r+s]+(o>>32n)&0xffffffffffffffffn}for(let s=11;s>=1;s--)i[s-1]=i[s-1]+(i[s]>>32n)&0xffffffffffffffffn,i[s]&=B.Xe}Je(e){let n=0;for(;this.Ze(e);)this.qe(e),n-=1;return n}Ze(e){if(e[0]<0x19999999n)return!0;if(e[0]>0x19999999n)return!1;for(let n=1;n<e.length;n++){if(e[n]<0x99999999n)return!0;if(e[n]>0x99999999n)return!1}return!1}Me(e,n,i){for(let o=0;o<i.length;o++)i[o]=0n;let s=this.Re;this.Ye(n,s);let r=e.length;for(let o=r-1;o>=0;o--)for(let a=r-1;a>=0;a--){let l=e[o]*s[a];i[a+o+1]=i[a+o+1]+(l&B.Xe)&0xffffffffffffffffn,i[a+o]=i[a+o]+(l>>32n)&0xffffffffffffffffn}for(let o=11;o>=1;o--)i[o-1]=i[o-1]+(i[o]>>32n)&0xffffffffffffffffn,i[o]&=B.Xe}qe(e){let n=e.length-1;e[0]&=B.Xe,e[n]*=10n;for(let i=n-1;i>=0;i--)e[i]=10n*e[i]+(e[i+1]>>32n)&0xffffffffffffffffn,e[i+1]&=B.Xe}Le(e){let n=31-B.et(e[0]);return n!=0&&this.tt(e,n),n}$e(e){return this.rt(e,5,100n),this.rt(e,4,0x80000000n),(e[0]&B.nt<<1n)!=0n?(this.tt(e,1),1):0}He(e,n){n[1]=(e[0]<<32n)+e[1],n[2]=(e[2]<<32n)+e[3],n[3]=(e[4]<<32n)+e[5]}Ye(e,n){n[0]=e[1]>>32n,n[1]=e[1]&B.Xe,n[2]=e[2]>>32n,n[3]=e[2]&B.Xe,n[4]=e[3]>>32n,n[5]=e[3]&B.Xe}tt(e,n){let i=e.length-1,s=BigInt(32-Math.abs(n));if(n>0){let r=BigInt(n);for(let o=i+1-1;o>=1;o--)e[o]=e[o]>>r|e[o-1]<<s&B.Xe;e[0]=e[0]>>r}else if(n<0){let r=BigInt(-n);e[0]=0xffffffffffffffffn&(e[0]<<r|e[1]>>s);for(let o=1;o<i;o++)e[o]=0xffffffffffffffffn&(e[o]<<r&B.Xe|e[o+1]>>s);e[i]=e[i]<<r&B.Xe}}rt(e,n,i){let s=n;e[s]=e[s]+i&0xffffffffffffffffn;for(let r=s+1-1;r>=1&&(e[r]&B.nt)!=0n;r--)e[r]&=B.Xe,e[r-1]+=1n}static et(e){let n=Number(e>>32n);return n==0?32+Math.clz32(Number(BigInt.asUintN(32,e))):Math.clz32(n)}}B.De=59,B.ge=646456993,B.we=-646457032,B.Ce=0xccccccccccccd00,B.it=0x8000000000000000n,B.ze=2147483648,B.Xe=0x00000000ffffffffn,B.nt=0xffffffff00000000n,B.Be=Math.log(10)/Math.log(2),B.Qe=1/Math.log(2),B.Ue=2147483647,B.Fe=0xffffffffn,B.je=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[1n,0x3333333333333333n,0x3333333333333333n,0x3333333333333334n],[1n,0x6666666666666666n,0x6666666666666666n,0x6666666666666667n],[2n,0x28f5c28f5c28f5c2n,0x8f5c28f5c28f5c28n,0xf5c28f5c28f5c290n],[3n,0x4189374bc6a7ef9dn,0xb22d0e5604189374n,0xbc6a7ef9db22d0e6n],[5n,0xa7c5ac471b478423n,0x0fcf80dc33721d53n,0xcddd6e04c0592104n],[10n,0x6df37f675ef6eadfn,0x5ab9a2072d44268dn,0x97df837e6748956en],[20n,0x2f394219248446ban,0xa23d2ec729af3d61n,0x0607aa0167dd94cbn],[39n,0x571cbec554b60dbbn,0xd5f64baf0506840dn,0x451db70d5904029bn],[78n,0x1da48ce468e7c702n,0x6520247d3556476dn,0x1469caf6db224cfan],[155n,0x2252f0e5b39769dcn,0x9ae2eea30ca3ade0n,0xeeaa3c08dfe84e30n],[309n,0x2e055c9a3f6ba793n,0x16583a816eb60a59n,0x22c4b0826cf1ebf7n],[617n,0x52bb45e9cf23f17fn,0x7688c07606e50364n,0xb34479aa9d449a57n],[1234n,0x1abc81c8ff5f846cn,0x8f5e3c9853e38c97n,0x45060097f3bf9296n],[2467n,0x1bec53b510daa7b4n,0x48369ed77dbb0eb1n,0x3b05587b2187b41en],[4933n,0x1e75063a5ba91326n,0x8abfb8e460016ae3n,0x28008702d29e8a3cn],[9865n,0x243c5d8bb5c5fa55n,0x40c6d248c5881915n,0x4c0fd99fd5befc22n],[19729n,0x334a5570c3f4ef3cn,0xa13c36c43f979c90n,0xda7ac473555fb7a8n],[39457n,0x66c304445dd98f3bn,0xa8c293a20e47a41bn,0x4c5b03dc12604964n],[78914n,0x293ffbf5fb028cc4n,0x89d3e5ff44238406n,0x369a339e1bfe8c9bn],[157827n,0x427792fbb68e5d20n,0x7b297cd9fc154b62n,0xf09142114aa9a20cn],[315653n,0xac92bc65ad5c08fcn,0x00beeb115a566c19n,0x4ba882d8a4622437n],[631306n,0x745581440f92e80en,0x4da822cf7f896f41n,0x509d598678164ecdn],[1262612n,0x34dd99b4c69523a5n,0x64bc2e8f0d8b1044n,0xb03b1c96da5dd349n],[2525223n,0x6d2bbea9d6d25a08n,0xa0a4606a88e96b70n,0x182063bbc2fe8520n],[5050446n,0x2e8e47d63bfdd6e3n,0x2b55fa8976eaa3e9n,0x1a6b9d3086412a73n],[10100891n,0x54aa68efa1d719dfn,0xd8505806612c5c8fn,0xad068837fee8b43an],[20201782n,0x1c00464ccb7bae77n,0x9e3877784c77982cn,0xd94af3b61717404fn],[40403563n,0x1ea099c8be2b6cd0n,0x8bfb6d539fa50466n,0x6d3bc37e69a84218n],[80807125n,0x24a457f466ce8d18n,0xf2c8f3b81bc6bb59n,0xa78c757692e02d49n],[161614249n,0x347256677aba6b53n,0x3fbf90d30611a67cn,0x1e039d87e0bdb32bn],[323228497n,0x6b727daf0fd3432an,0x71f71121f9e4200fn,0x8fcd9942d486c10cn],[646456994n,0x2d18e84484d91f78n,0x4079bfe7829dec6fn,0x21551643e365abc6n]],B.Ke=[[1n,0x1999999999999999n,0x9999999999999999n,0x999999999999999an],[0n,0x8000000000000000n,0x0000000000000000n,0x0000000000000000n],[0n,0x4000000000000000n,0x0000000000000000n,0x0000000000000001n],[-1n,0xa000000000000000n,0x0000000000000000n,0x0000000000000000n],[-2n,0x6400000000000000n,0x0000000000000000n,0x0000000000000000n],[-4n,0x2710000000000000n,0x0000000000000000n,0x0000000000000001n],[-9n,0x3b9aca0000000000n,0x0000000000000000n,0x0000000000000001n],[-19n,0x8ac7230489e80000n,0x0000000000000000n,0x0000000000000000n],[-38n,0x4b3b4ca85a86c47an,0x098a224000000000n,0x0000000000000001n],[-77n,0xdd15fe86affad912n,0x49ef0eb713f39eben,0xaa987b6e6fd2a002n],[-154n,0xbeeefb584aff8603n,0xaafb550ffacfd8fan,0x5ca47e4f88d45371n],[-308n,0x8e679c2f5e44ff8fn,0x570f09eaa7ea7648n,0x5961db50c6d2b888n],[-616n,0x4f371b3399fc2ab0n,0x8170041c9feb05aan,0xc7c343447c75bcf6n],[-1233n,0xf51e928179013fd3n,0xde4bd12cde4d985cn,0x4a573ca6f94bff14n],[-2466n,0xeab388127bccaff7n,0x1667639142b9fbaen,0x775ec9995e1039fbn],[-4932n,0xd72cb2a95c7ef6ccn,0xe81bf1e825ba7515n,0xc2feb521d6cb5dcdn],[-9864n,0xb4dc1be6604502dcn,0xd491079b8eef6535n,0x578d3965d24de84dn],[-19728n,0x7fc6447bee60ea43n,0x2548da5c8b125b27n,0x5f42d1142f41d349n],[-39456n,0x3fc65180f88af8fbn,0x6a6915f383349413n,0x063c3708b6ceb291n],[-78913n,0x9ee0197c8dcd55bfn,0x2b2b9b942c38f4a2n,0x0f8ba634e9c706aen],[-157826n,0x629963a25b8b2d79n,0xd00b9d2286f70876n,0xe97004700c3644fcn],[-315652n,0x25f9cc308ceef4f3n,0x40f19543911a4546n,0xa2cd389452cfc366n],[-631305n,0x385597b0d47e76b8n,0x1b9f67e103bf2329n,0xc3119848595985f7n],[-1262611n,0x7bf795d276c12f66n,0x66a61d62a446659an,0xa1a4d73bebf093d5n],[-2525222n,0x3c07d96ab1ed7799n,0xcb7355c22cc05ac0n,0x4ffc0ab73b1f6a49n],[-5050445n,0x8cc4cd8c3edefb9an,0x6c8ff86a90a97e0cn,0x166cfddbf98b71bfn],[-10100890n,0x4d67d81cc88e1228n,0x1d7cfb06666b79b3n,0x7b916728aaa4e70dn],[-20201781n,0xea0c55494e7a552dn,0xb88cb9484bb86c61n,0x8d44893c610bb7dfn],[-40403562n,0xd5fa8c821ec0c24an,0xa80e46e764e0f8b0n,0xa7276bfa432fac7en],[-80807124n,0xb2dae307426f6791n,0xc970b82f58b12918n,0x0472592f7f39190en],[-161614248n,0x7cf51edd8a15f1c9n,0x656dab3498f8e697n,0x12daa2a80e53c807n],[-323228496n,0x3cfe609ab5883c50n,0xbec8b5d22b198871n,0xe18477703b4622b4n],[-646456993n,0x9152447b9d7cda9an,0x3b4d3f6110d77aadn,0xfa81bad1c394adb4n]];class ${constructor(e,n,i,s){this.negative=e,this.st=n,this.Ve=i,this.Te=s}exponent(){return this.st-B.Ue}ot(){return this.st===0&&this.Ve===0n&&this.Te===0n}ut(){return this.st===Ne($,ke,"f",ai)&&this.Ve===0n&&this.Te===0n}isNaN(){return this.st===Ne($,ke,"f",ai)&&!(this.Ve===0n&&this.Te===0n)}compareTo(e){if(this.isNaN())return e.isNaN()?0:1;if(e.isNaN())return-1;let n,i;if(this.negative){if(!e.negative)return-1;n=1,i=-1}else{if(e.negative)return 1;n=-1,i=1}return this.st<e.st?n:this.st>e.st?i:this.Ve<e.Ve?n:this.Ve>e.Ve?i:this.Te<e.Te?n:this.Te>e.Te?i:0}debug(){return(this.negative?"+":"-")+Ne($,ke,"m",na).call($,this.Ve)+Ne($,ke,"m",na).call($,this.Te)+"*2^"+this.exponent()}static fromNumber(e){if(isNaN(e))return $.NaN;if(!isFinite(e))return e<0?$._t:$.ct;if(e===0)return Math.sign(1/e)>0?$.lt:$.ft;const n=new DataView(new ArrayBuffer(8));n.setFloat64(0,e);const i=n.getBigUint64(0);let s=BigInt.asUintN(64,i<<12n),r=2047&Number(i>>52n);if(r===0){const o=B.et(s);s=o<63?s<<BigInt(o+1):0n,r=-o}return new $(e<0,Ne($,ke,"m",Vi).call($,r-1023),s,0n)}static fromString(e){if(e==="NaN")return $.NaN;if(e==="-Infinity")return $._t;if(e==="Infinity"||e==="+Infinity")return $.ct;const n=new Array(e.length).fill(0);let i=0,s=0,r=0,o=!1;for(e[i]==="-"?(o=!0,i++):e[i]==="+"&&i++;Ne($,ke,"m",Ys).call($,e,i);)n[s++]=Ne($,ke,"m",Xs).call($,e,i++);if(e[i]==="."){const l=++i;for(;Ne($,ke,"m",Ys).call($,e,i);)n[s++]=Ne($,ke,"m",Xs).call($,e,i++);r=l-i}if(e[i]==="e"||e[i]==="E"){let l=0;i++;let c=1;e[i]==="-"?(c=-1,i++):e[i]==="+"&&i++;const u=i;for(;Ne($,ke,"m",Ys).call($,e,i);)if(l=10*l+Ne($,ke,"m",Xs).call($,e,i++),i-u>9)throw new Error("Exponent too large "+e);if(i===u)throw new Error("Invalid number "+e);r+=l*c}if(s===0||i!==e.length)throw new Error("Invalid number "+e);const a=B.ye(n.slice(0,s),r);return new $(o,a.exponent,a.Ve,a.Te)}}ke=$,na=function(e){return e.toString(16).padStart(16,"0")},Ys=function(e,n){const i=e.codePointAt(n);return i!==void 0&&i>=48&&i<=57},Xs=function(e,n){return e.codePointAt(n)-48},Vi=function(e){return e+B.Ue},ai={value:Number(B.Fe)},$.lt=new $(!1,0,0n,0n),$.ft=new $(!0,0,0n,0n),$.NaN=new $(!1,Ne($,ke,"f",ai),1n<<63n,0n),$._t=new $(!0,Ne($,ke,"f",ai),0n,0n),$.ct=new $(!1,Ne($,ke,"f",ai),0n,0n),new $(!0,Ne($,ke,"m",Vi).call($,63),0n,0n),new $(!1,Ne($,ke,"m",Vi).call($,0),0n,0n),new $(!0,Ne($,ke,"m",Vi).call($,0),0n,0n);/**
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
 */const Jy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(t){if(nt(!!t,39018),typeof t=="string"){let e=0;const n=Jy.exec(t);if(nt(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function wr(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
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
 */function it(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ps(t,e){if(!pf(t))throw new H(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const i in e)if(e[i]){const s=e[i].typeString,r="value"in e[i]?{value:e[i].value}:void 0,o=e[i].optional;if(!(i in t)){if(o)continue;n=`JSON missing required field: '${i}'`;break}const a=t[i];if(s&&typeof a!==s){n=`JSON field '${i}' must be a ${s}.`;break}if(r!==void 0&&a!==r.value){n=`Expected '${i}' field to equal '${r.value}'`;break}}if(n)throw new H(L.INVALID_ARGUMENT,n);return!0}/**
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
 */const Dc=-62135596800,Oc=1e6;class ve{static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor((e-1e3*n)*Oc);return new ve(n,i)}static fromInstant(e){if(!e||typeof e.ht!="bigint")throw new H(L.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return ve._fromEpochNanoseconds(e.ht)}static _fromEpochNanoseconds(e){let n,i;if(e>=0n)n=Number(e/1000000000n),i=Number(e%1000000000n);else{const s=e%1000000000n;s===0n?(n=Number(e/1000000000n),i=0):(n=Number(e/1000000000n-1n),i=Number(s+1000000000n))}return new ve(n,i)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Dc)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Oc}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new H(L.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");const e=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(e)}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ve._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ps(e,ve._jsonSchema))return new ve(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Dc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ve._jsonSchemaVersion="firestore/timestamp/1.0",ve._jsonSchema={type:it("string",ve._jsonSchemaVersion),seconds:it("number"),nanoseconds:it("number")};function Yy(t){var n,i;return((i=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{}).__type__)==null?void 0:i.stringValue)==="server_timestamp"}function gf(t){const e=t.mapValue.fields.__previous_value__;return Yy(e)?gf(e):e}function ls(t){const e=Jn(t.mapValue.fields.__local_write_time__.timestampValue);return new ve(e.seconds,e.nanos)}/**
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
 */const vf="__type__",yf="__vector__",Er="value",Xy="server_timestamp",_f="__min__",ja="__max__",_n="__regex__",Ir="pattern",Tr="options",cs="__oid__",ks="__int__",bi="__decimal128__",Un="__request_timestamp__",Ar="seconds",Sr="increment",to="__binary__",Us={};var de,ot;(ot=de||(de={})).dt="regexValue",ot.Et="bsonObjectIdValue",ot.Vt="int32Value",ot.Tt="decimal128Value",ot.It="bsonTimestampValue",ot.At="bsonBinaryValue",ot.Rt="minKeyValue",ot.Pt="maxKeyValue",ot.yt="maxValue",ot.bt="vectorValue",ot.wt="serverTimestampValue",ot.gt="regularMapValue";const Vc={[yf]:de.bt,[ja]:de.yt,[Xy]:de.wt},bf={[_n]:de.dt,[cs]:de.Et,[ks]:de.Vt,[bi]:de.Tt,[Un]:de.It,[to]:de.At,[_f]:de.Rt,[ja]:de.Pt};function Yn(t){if("nullValue"in t)return 0;if("booleanValue"in t)return 2;if("integerValue"in t||"doubleValue"in t)return 3;if("timestampValue"in t)return 4;if("stringValue"in t)return 7;if("bytesValue"in t)return 8;if("referenceValue"in t)return 9;if("geoPointValue"in t)return 11;if("arrayValue"in t)return 13;if(!("mapValue"in t))return _e(28295,{value:t});switch((function(i){var o,a;if(!((o=i.mapValue)!=null&&o.fields))return de.gt;const s=i.mapValue.fields,r=(a=s[vf])==null?void 0:a.stringValue;if(r&&Vc[r])return Vc[r];if(as(s)===1){const l=Object.keys(s);return bf[l[0]]??de.gt}return de.gt})(t)){case de.wt:return 6;case de.yt:return 9007199254740991;case de.bt:return 14;case de.dt:return 12;case de.Et:return 10;case de.Vt:case de.Tt:return 3;case de.It:return 5;case de.At:return 8;case de.Rt:return 1;case de.Pt:return 16;default:return 15}}function Pr(t,e,n){if(t===e)return!0;const i=Yn(t);if(i!==Yn(e))return!1;switch(i){case 0:case 9007199254740991:case 16:case 1:return!0;case 2:return t.booleanValue===e.booleanValue;case 6:return ls(t).isEqual(ls(e));case 4:return(function(r,o){if(typeof r.timestampValue=="string"&&typeof o.timestampValue=="string"&&r.timestampValue.length===o.timestampValue.length)return r.timestampValue===o.timestampValue;const a=Jn(r.timestampValue),l=Jn(o.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(t,e);case 7:return t.stringValue===e.stringValue;case 8:return(function(r,o){return Tf(r,o)===0})(t,e);case 9:return t.referenceValue===e.referenceValue;case 11:return(function(r,o){return Ve(r.geoPointValue.latitude)===Ve(o.geoPointValue.latitude)&&Ve(r.geoPointValue.longitude)===Ve(o.geoPointValue.longitude)})(t,e);case 3:return(function(r,o,a){if(Xn(r)&&Xn(o))return Ef(r,o)===0;if("integerValue"in r&&"integerValue"in o||Cr(r)&&Cr(o))return ds(r)===ds(o);let l,c;return!("doubleValue"in r)||!("doubleValue"in o)?!1:(l=Ve(r.doubleValue),c=Ve(o.doubleValue),l===c?br(l)===br(c):!!(a===void 0||a.vt)&&isNaN(l)&&isNaN(c))})(t,e,n);case 13:return ff(t.arrayValue.values||[],e.arrayValue.values||[],((s,r)=>Pr(s,r,n)));case 14:case 15:return(function(r,o,a){const l=r.mapValue.fields||{},c=o.mapValue.fields||{};if(as(l)!==as(c))return!1;for(const u in l)if(l.hasOwnProperty(u)&&(c[u]===void 0||!Pr(l[u],c[u],a)))return!1;return!0})(t,e,n);case 5:return If(t,e)===0;case 12:return Af(t,e)===0;case 10:return Sf(t,e)===0;default:return _e(52216,{left:t})}}function us(t,e){return(t.values||[]).find((n=>Pr(n,e)))!==void 0}function kr(t,e){if(t===e)return 0;const n=Yn(t),i=Yn(e);if(n!==i)return ye(n,i);switch(n){case 0:case 1:case 16:case 9007199254740991:return 0;case 2:return ye(t.booleanValue,e.booleanValue);case 3:return ia(t,e);case 4:return Lc(t.timestampValue,e.timestampValue);case 6:return Lc(ls(t),ls(e));case 7:return os(t.stringValue,e.stringValue);case 8:return Tf(t,e);case 9:return(function(r,o){const a=r.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ye(a[c],l[c]);if(u!==0)return u}return ye(a.length,l.length)})(t.referenceValue,e.referenceValue);case 11:return(function(r,o){const a=ye(Ve(r.latitude),Ve(o.latitude));return a!==0?a:ye(Ve(r.longitude),Ve(o.longitude))})(t.geoPointValue,e.geoPointValue);case 13:return Fc(t.arrayValue,e.arrayValue);case 14:return(function(r,o){var m,E,x,R;const a=r.fields||{},l=o.fields||{},c=(m=a[Er])==null?void 0:m.arrayValue,u=(E=l[Er])==null?void 0:E.arrayValue,d=ye(((x=c==null?void 0:c.values)==null?void 0:x.length)||0,((R=u==null?void 0:u.values)==null?void 0:R.length)||0);return d!==0?d:Fc(c,u)})(t.mapValue,e.mapValue);case 15:return(function(r,o){if(r===Us&&o===Us)return 0;if(r===Us)return 1;if(o===Us)return-1;const a=r.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let d=0;d<l.length&&d<u.length;++d){const m=os(l[d],u[d]);if(m!==0)return m;const E=kr(a[l[d]],c[u[d]]);if(E!==0)return E}return ye(l.length,u.length)})(t.mapValue,e.mapValue);case 5:return If(t,e);case 12:return Af(t,e);case 10:return Sf(t,e);default:throw _e(23264,{xt:n})}}function ds(t){let e;return e=Cr(t)?t.mapValue.fields[ks].integerValue:t.integerValue||t.doubleValue,Ve(e)}function wf(t){return t.mapValue.fields[bi].stringValue}function ia(t,e){if(Xn(t)||Xn(e))return Ef(t,e);const n=ds(t),i=ds(e);return isNaN(n)?isNaN(i)?0:-1:isNaN(i)?1:ye(n,i)}function Ef(t,e){const n=Mc(t),i=Mc(e);return n.ot()&&i.ot()?0:n.isNaN()?i.isNaN()?0:-1:i.isNaN()?1:n.compareTo(i)}function Mc(t){return Xn(t)?$.fromString(wf(t)):$.fromNumber(ds(t))}function Lc(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=Jn(t),i=Jn(e),s=ye(n.seconds,i.seconds);return s!==0?s:ye(n.nanos,i.nanos)}function Fc(t,e){const n=t.values||[],i=e.values||[];for(let s=0;s<n.length&&s<i.length;++s){const r=kr(n[s],i[s]);if(r!==void 0&&r!==0)return r}return ye(n.length,i.length)}function If(t,e){var a,l,c,u,d,m,E,x,R,D,S,N;const n=(c=(l=(a=t.mapValue.fields)==null?void 0:a[Un].mapValue)==null?void 0:l.fields)==null?void 0:c[Ar],i=(m=(d=(u=e.mapValue.fields)==null?void 0:u[Un].mapValue)==null?void 0:d.fields)==null?void 0:m[Ar],s=(R=(x=(E=t.mapValue.fields)==null?void 0:E[Un].mapValue)==null?void 0:x.fields)==null?void 0:R[Sr],r=(N=(S=(D=e.mapValue.fields)==null?void 0:D[Un].mapValue)==null?void 0:S.fields)==null?void 0:N[Sr],o=ia(n,i);return o!==0?o:ia(s,r)}function Uc(t){var a;if("bytesValue"in t)return{subtype:0,bytes:wr(t.bytesValue)};const e=(a=t.mapValue)==null?void 0:a.fields,n=e==null?void 0:e[to],i=n==null?void 0:n.bytesValue;if(!i)throw new Error("Received incorrect value for BsonBinaryData");const s=wr(i).toUint8Array();if(s.length===0)throw new Error("Received empty bytesValue for BsonBinaryData");const r=s[0],o=s.slice(1);return{subtype:r,bytes:ft.fromUint8Array(o)}}function Tf(t,e){const n=Uc(t),i=Uc(e);return n.subtype!==i.subtype?n.subtype<i.subtype?-1:1:n.bytes.compareTo(i.bytes)}function Af(t,e){var c,u,d,m,E,x,R,D,S,N,X,U,Z,te,y,h;const n=t.mapValue.fields,i=((m=(d=(u=(c=n==null?void 0:n[_n])==null?void 0:c.mapValue)==null?void 0:u.fields)==null?void 0:d[Ir])==null?void 0:m.stringValue)??"",s=((D=(R=(x=(E=n==null?void 0:n[_n])==null?void 0:E.mapValue)==null?void 0:x.fields)==null?void 0:R[Tr])==null?void 0:D.stringValue)??"",r=e.mapValue.fields,o=((U=(X=(N=(S=r==null?void 0:r[_n])==null?void 0:S.mapValue)==null?void 0:N.fields)==null?void 0:X[Ir])==null?void 0:U.stringValue)??"",a=((h=(y=(te=(Z=r==null?void 0:r[_n])==null?void 0:Z.mapValue)==null?void 0:te.fields)==null?void 0:y[Tr])==null?void 0:h.stringValue)??"",l=os(i,o);return l!==0?l:ye(s,a)}function Sf(t,e){var n,i,s,r;return os(((i=(n=t.mapValue.fields)==null?void 0:n[cs])==null?void 0:i.stringValue)??"",((r=(s=e.mapValue.fields)==null?void 0:s[cs])==null?void 0:r.stringValue)??"")}function Xn(t){var n;if(!((n=t.mapValue)!=null&&n.fields))return!1;const e=t.mapValue.fields;return as(e)===1&&e[bi]&&!!e[bi].stringValue}function Cr(t){var n,i;if(!((n=t.mapValue)!=null&&n.fields))return!1;const e=t.mapValue.fields;return as(e)===1&&((i=e[ks])==null?void 0:i.integerValue)!==void 0}function Pf(t){return!!t&&"arrayValue"in t}function $c(t){return!!t&&"nullValue"in t}function Bc(t){return!(!(function(n){return!!n&&"doubleValue"in n})(t)||!isNaN(Number(t.doubleValue)))||!(!Xn(t)||wf(t)!=="NaN")}function No(t){return!!t&&"mapValue"in t}function Ki(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Ss(t.mapValue.fields,((n,i)=>e.mapValue.fields[n]=Ki(i))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ki(t.arrayValue.values[n]);return e}return{...t}}/**
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
 */new Set(Object.values(bf));class jc{constructor(e,n){this.position=e,this.inclusive=n}}/**
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
 */class kf{}class $t extends kf{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new Zy(e,n,i):n==="array-contains"?new t_(e,i):n==="in"?new n_(e,i):n==="not-in"?new i_(e,i):n==="array-contains-any"?new s_(e,i):new $t(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new Qy(e,i):new e_(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(kr(n,this.value)):n!==null&&Yn(this.value)===Yn(n)&&this.matchesComparison(kr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class no extends kf{constructor(e,n){super(),this.filters=e,this.op=n,this.Dt=null}static create(e,n){return new no(e,n)}matches(e){return(function(i){return i.op==="and"})(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Dt!==null||(this.Dt=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Dt}getFilters(){return Object.assign([],this.filters)}}class Zy extends $t{constructor(e,n,i){super(e,n,i),this.key=Ue.fromName(i.referenceValue)}matches(e){const n=Ue.comparator(e.key,this.key);return this.matchesComparison(n)}}class Qy extends $t{constructor(e,n){super(e,"in",n),this.keys=Cf("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class e_ extends $t{constructor(e,n){super(e,"not-in",n),this.keys=Cf("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Cf(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map((i=>Ue.fromName(i.referenceValue)))}class t_ extends $t{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Pf(n)&&us(n.arrayValue,this.value)}}class n_ extends $t{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&us(this.value.arrayValue,n)}}class i_ extends $t{constructor(e,n){super(e,"not-in",n)}matches(e){if(us(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!us(this.value.arrayValue,n)}}class s_ extends $t{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Pf(n)||!n.arrayValue.values)&&n.arrayValue.values.some((i=>us(this.value.arrayValue,i)))}}/**
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
 */class sa{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
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
 */class xr{constructor(e,n){this.comparator=e,this.root=n||Oe.EMPTY}insert(e,n){return new xr(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Oe.BLACK,null,null))}remove(e){return new xr(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Oe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,i)=>(e(n,i),!1)))}toString(){const e=[];return this.inorderTraversal(((n,i)=>(e.push(`${n}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $s(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $s(this.root,e,this.comparator,!1)}getReverseIterator(){return new $s(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $s(this.root,e,this.comparator,!0)}}class $s{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Oe{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??Oe.RED,this.left=s??Oe.EMPTY,this.right=r??Oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new Oe(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Oe.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw _e(43730,{key:this.key,value:this.value});if(this.right.isRed())throw _e(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw _e(27949);return e+(this.isRed()?0:1)}}Oe.EMPTY=null,Oe.RED=!0,Oe.BLACK=!1;Oe.EMPTY=new class{constructor(){this.size=0}get key(){throw _e(57766)}get value(){throw _e(16141)}get color(){throw _e(16727)}get left(){throw _e(29726)}get right(){throw _e(36894)}copy(e,n,i,s,r){return this}insert(e,n,i){return new Oe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class fs{constructor(e){this.comparator=e,this.data=new xr(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,i)=>(e(n),!1)))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Hc(this.data.getIterator())}getIteratorFrom(e){return new Hc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((i=>{n=n.add(i)})),n}isEqual(e){if(!(e instanceof fs)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new fs(this.comparator);return n.data=e,n}}class Hc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Zn{constructor(e){this.fields=e,e.sort(En.comparator)}static empty(){return new Zn([])}unionWith(e){let n=new fs(En.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new Zn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ff(this.fields,e.fields,((n,i)=>n.isEqual(i)))}}/**
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
 */class Ze{constructor(e){this.value=e}static empty(){return new Ze({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!No(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ki(n)}setAll(e){let n=En.emptyPath(),i={},s=[];e.forEach(((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=Ki(o):s.push(a.lastSegment())}));const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());No(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];No(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Ss(n,((s,r)=>e[s]=r));for(const s of i)delete e[s]}clone(){return new Ze(Ki(this.value))}}/**
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
 */class Nt{constructor(e,n,i,s,r,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Nt(e,0,De.min(),De.min(),De.min(),Ze.empty(),0)}static newFoundDocument(e,n,i,s){return new Nt(e,1,n,De.min(),i,s,0)}static newNoDocument(e,n){return new Nt(e,2,n,De.min(),De.min(),Ze.empty(),0)}static newUnknownDocument(e,n){return new Nt(e,3,n,De.min(),De.min(),Ze.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(De.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ze.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=De.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class r_{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.Nt=null}}function Wc(t,e=null,n=[],i=[],s=null,r=null,o=null){return new r_(t,e,n,i,s,r,o)}/**
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
 */class o_{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.St=null,this.Ct=null,this.Bt=null,this.startAt,this.endAt}}function a_(t){const e=As(t);if(e.St===null){e.St=[];const n=new Set;for(const r of e.explicitOrderBy)e.St.push(r),n.add(r.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new fs(En.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((c=>{c.isInequality()&&(a=a.add(c.field))}))})),a})(e).forEach((r=>{n.has(r.canonicalString())||r.isKeyField()||e.St.push(new sa(r,i))})),n.has(En.keyField().canonicalString())||e.St.push(new sa(En.keyField(),i))}return e.St}function l_(t){const e=As(t);return e.Ct||(e.Ct=c_(e,a_(t))),e.Ct}function c_(t,e){if(t.limitType==="F")return Wc(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const r=s.dir==="desc"?"asc":"desc";return new sa(s.field,r)}));const n=t.endAt?new jc(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new jc(t.startAt.position,t.startAt.inclusive):null;return Wc(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}/**
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
 */function xf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:br(e)?"-0":e}}function Zs(t){return{integerValue:""+t}}function u_(t,e,n){return(function(s){return typeof s=="number"&&Number.isInteger(s)&&!br(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER})(e)?Zs(e):xf(t,e)}/**
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
 */class io{constructor(){this._=void 0}}class Rf extends io{}class d_ extends io{constructor(e){super(),this.elements=e}}class f_ extends io{constructor(e){super(),this.elements=e}}class Ha extends io{constructor(e,n){super(),this.serializer=e,this.Qt=n}}class h_ extends Ha{}class p_ extends Ha{}class m_ extends Ha{}/**
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
 */class g_{constructor(e,n){this.field=e,this.transform=n}}class Wn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wn}static exists(e){return new Wn(void 0,e)}static updateTime(e){return new Wn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class so{}class Nf extends so{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Wa extends so{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}class Df extends so{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class v_ extends so{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */const y_={asc:"ASCENDING",desc:"DESCENDING"},__={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},b_={and:"AND",or:"OR"};class w_{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Qs(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zc(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function E_(t,e){return Qs(t,e.toTimestamp())}function Gi(t){return nt(!!t,49232),De.fromTimestamp((function(n){const i=Jn(n);return new ve(i.seconds,i.nanos)})(t))}function za(t,e){return ra(t,e).canonicalString()}function ra(t,e){const n=(function(s){return new Ee(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function Rr(t,e){return za(t.databaseId,e.path)}function oa(t,e){const n=(function(s){const r=Ee.fromString(s);return nt(Vf(r),10190,{key:r.toString()}),r})(e);if(n.get(1)!==t.databaseId.projectId)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ue((function(s){return nt(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)})(n))}function Kc(t,e,n){return{name:Rr(t,e),fields:n.value.mapValue.fields}}function I_(t,e){return"found"in e?(function(i,s){nt(!!s.found,43571),s.found.name,s.found.updateTime;const r=oa(i,s.found.name),o=Gi(s.found.updateTime),a=s.found.createTime?Gi(s.found.createTime):De.min(),l=new Ze({mapValue:{fields:s.found.fields}});return Nt.newFoundDocument(r,o,a,l)})(t,e):"missing"in e?(function(i,s){nt(!!s.missing,3894),nt(!!s.readTime,22933);const r=oa(i,s.missing),o=Gi(s.readTime);return Nt.newNoDocument(r,o)})(t,e):_e(7234,{result:e})}function T_(t,e){let n;if(e instanceof Nf)n={update:Kc(t,e.key,e.value)};else if(e instanceof Df)n={delete:Rr(t,e.key)};else if(e instanceof Wa)n={update:Kc(t,e.key,e.data),updateMask:C_(e.fieldMask)};else{if(!(e instanceof v_))return _e(16599,{Ot:e.type});n={verify:Rr(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((i=>(function(r,o){const a=o.transform;if(a instanceof Rf)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof d_)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof f_)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof h_)return{fieldPath:o.field.canonicalString(),increment:a.Qt};if(a instanceof p_)return{fieldPath:o.field.canonicalString(),minimum:a.Qt};if(a instanceof m_)return{fieldPath:o.field.canonicalString(),maximum:a.Qt};throw _e(20930,{transform:o.transform})})(0,i)))),e.precondition.isNone||(n.currentDocument=(function(s,r){return r.updateTime!==void 0?{updateTime:E_(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:_e(27497)})(t,e.precondition)),n}function A_(t,e){const n={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=(function(c,u){return za(c.databaseId,u)})(t,s);const r=(function(c){if(c.length!==0)return Of(no.create(c,"and"))})(e.filters);r&&(n.structuredQuery.where=r);const o=(function(c){if(c.length!==0)return c.map((u=>(function(m){return{field:oi(m.field),direction:S_(m.dir)}})(u)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=(function(c,u){return c.useProto3Json||Wy(u)?u:{value:u}})(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=(function(c){return{before:c.inclusive,values:c.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(c){return{before:!c.inclusive,values:c.position}})(e.endAt)),{Mt:n,parent:s}}function S_(t){return y_[t]}function P_(t){return __[t]}function k_(t){return b_[t]}function oi(t){return{fieldPath:t.canonicalString()}}function Of(t){return t instanceof $t?(function(n){if(n.op==="=="){if(Bc(n.value))return{unaryFilter:{field:oi(n.field),op:"IS_NAN"}};if($c(n.value))return{unaryFilter:{field:oi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Bc(n.value))return{unaryFilter:{field:oi(n.field),op:"IS_NOT_NAN"}};if($c(n.value))return{unaryFilter:{field:oi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:oi(n.field),op:P_(n.op),value:n.value}}})(t):t instanceof no?(function(n){const i=n.getFilters().map((s=>Of(s)));return i.length===1?i[0]:{compositeFilter:{op:k_(n.op),filters:i}}})(t):_e(54877,{filter:t})}function C_(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function Vf(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function Mf(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */function Ka(t){return new w_(t,!0)}/**
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
 */class x_{}class R_ extends x_{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.qt=!1}Lt(){if(this.qt)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.")}le(e,n,i,s){return this.Lt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.le(e,ra(n,i),s,r,o))).catch((r=>{throw r.name==="FirebaseError"?(r.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new H(L.UNKNOWN,r.toString())}))}me(e,n,i,s,r){return this.Lt(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.me(e,ra(n,i),s,o,a,r))).catch((o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(L.UNKNOWN,o.toString())}))}terminate(){this.qt=!0,this.connection.terminate()}}async function N_(t,e){const n=As(t),i={writes:e.map((s=>T_(n.serializer,s)))};await n.le("Commit",n.serializer.databaseId,Ee.emptyPath(),i)}async function D_(t,e){const n=As(t),i={documents:e.map((a=>Rr(n.serializer,a)))},s=await n.me("BatchGetDocuments",n.serializer.databaseId,Ee.emptyPath(),i,e.length),r=new Map;s.forEach((a=>{const l=I_(n.serializer,a);r.set(l.key.toString(),l)}));const o=[];return e.forEach((a=>{const l=r.get(a.toString());nt(!!l,55234,{key:a}),o.push(l)})),o}async function O_(t,e){const n=As(t),{Mt:i,parent:s}=A_(n.serializer,l_(e));return(await n.me("RunQuery",n.serializer.databaseId,s,{structuredQuery:i.structuredQuery})).filter((r=>!!r.document)).map((r=>(function(a,l,c){const u=oa(a,l.name),d=Gi(l.updateTime),m=l.createTime?Gi(l.createTime):De.min(),E=new Ze({mapValue:{fields:l.fields}}),x=Nt.newFoundDocument(u,d,m,E);return c?x.setHasCommittedMutations():x})(n.serializer,r.document,void 0)))}/**
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
 */const Lf="ComponentProvider",qi=new Map;function Ga(t){if(t._terminated)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.");if(!qi.has(t)){_r(Lf,"Initializing Datastore");const e=(function(r){return new Gy(r)})((function(r,o,a,l,c){return new My(r,o,a,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,mf(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator,l,c._customHeaders,c.grpcFlowControlWindow)})(t._databaseId,t.app.options.appId||"",t._persistenceKey,t.app.options.apiKey,t._freezeSettings())),n=Ka(t._databaseId),i=(function(r,o,a,l){return new R_(r,o,a,l)})(t._authCredentials,t._appCheckCredentials,e,n);qi.set(t,i)}return qi.get(t)}const V_=1048576,Ff="firestore.googleapis.com",Gc=!0;class qc{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new H(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ff,this.ssl=Gc}else this.host=e.host,this.ssl=e.ssl??Gc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<V_)throw new H(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if((function(i,s,r,o){if(s===!0&&o===!0)throw new H(L.INVALID_ARGUMENT,`${i} and ${r} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mf(e.experimentalLongPollingOptions??{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new H(L.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,s){return i.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&(function(i,s){if(i===s)return!0;if(!i||!s)return!1;const r=Object.keys(i),o=Object.keys(s);if(r.length!==o.length)return!1;for(const a of r)if(i[a]!==s[a])return!1;return!0})(this._customHeaders,e._customHeaders)}}class Cs{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new xy;switch(i.type){case"firstParty":return new Oy(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new H(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const i=qi.get(n);i&&(_r(Lf,"Removing Datastore"),qi.delete(n),i.terminate())})(this),Promise.resolve()}}function M_(t,e){const n=typeof t=="object"?t:Id(),i=typeof t=="string"?t:"(default)",s=Ca(n,"firestore/lite").getImmediate({identifier:i});if(!s._initialized){const r=$m("firestore");r&&L_(s,...r)}return s}function L_(t,e,n,i={}){var c;t=eo(t,Cs);const s=bs(e),r=t._getSettings(),o={...r,emulatorOptions:t._getEmulatorOptions()},a=`${e}:${n}`;s&&_d(`https://${a}`),r.host!==Ff&&r.host!==a&&cf("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...r,host:a,ssl:s,emulatorOptions:i};if(!zn(l,o)&&(t._setSettings(l),i.mockUserToken)){let u,d;if(typeof i.mockUserToken=="string")u=i.mockUserToken,d=Ge.MOCK_USER;else{u=Bm(i.mockUserToken,(c=t._app)==null?void 0:c.options.projectId);const m=i.mockUserToken.sub||i.mockUserToken.user_id;if(!m)throw new H(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new Ge(m)}t._authCredentials=new Ry(new df(u,d))}}/**
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
 */class ro{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new ro(this.firestore,e,this._query)}}class Ce{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new In(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ce(this.firestore,e,this._key)}toJSON(){return{type:Ce._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,i){if(Ps(n,Ce._jsonSchema))return new Ce(e,i||null,new Ue(Ee.fromString(n.referencePath)))}}Ce._jsonSchemaVersion="firestore/documentReference/1.0",Ce._jsonSchema={type:it("string",Ce._jsonSchemaVersion),referencePath:it("string")};class In extends ro{constructor(e,n,i){super(e,n,(function(r){return new o_(r)})(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ce(this.firestore,null,new Ue(e))}withConverter(e){return new In(this.firestore,e,this._path)}}function Uf(t,e,...n){if(t=Se(t),hf("collection","path",e),t instanceof Cs){const i=Ee.fromString(e,...n);return xc(i),new In(t,null,i)}{if(!(t instanceof Ce||t instanceof In))throw new H(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ee.fromString(e,...n));return xc(i),new In(t.firestore,null,i)}}function Qn(t,e,...n){if(t=Se(t),arguments.length===1&&(e=Uy.newId()),hf("doc","path",e),t instanceof Cs){const i=Ee.fromString(e,...n);return Cc(i),new Ce(t,null,new Ue(i))}{if(!(t instanceof Ce||t instanceof In))throw new H(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ee.fromString(e,...n));return Cc(i),new Ce(t.firestore,t instanceof In?t.converter:null,new Ue(i))}}/**
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
 */class Qe{constructor(e,n=0){if(this.subtype=n,!Number.isInteger(n)||n<0||n>255)throw new H(L.INVALID_ARGUMENT,"The subtype for Bytes must be a value in the inclusive [0, 255] range.");this._byteString=e}static fromBase64String(e,n=0){try{return new Qe(ft.fromBase64String(e),n)}catch(i){throw new H(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+i)}}static fromUint8Array(e,n=0){return new Qe(ft.fromUint8Array(e),n)}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}get data(){return this.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+", subtype: "+this.subtype+")"}isEqual(e){return this.subtype===e.subtype&&this._byteString.isEqual(e._byteString)}toJSON(){const e={type:Qe._jsonSchemaVersion,bytes:this.toBase64()};return this.subtype!==0&&(e.subtype=this.subtype),e}static fromJSON(e){if(Ps(e,Qe._jsonSchema)){const n=e.subtype??0;return Qe.fromBase64String(e.bytes,n)}}}Qe._jsonSchemaVersion="firestore/bytes/1.0",Qe._jsonSchema={type:it("string",Qe._jsonSchemaVersion),bytes:it("string"),subtype:{...it("number"),optional:!0}};/**
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
 */class qa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new En(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ja{constructor(e){this.value=e}isEqual(e){return this.value===e.value}}/**
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
 */class Ya{constructor(e,n){if(this.seconds=e,this.increment=n,!Number.isInteger(e)||e<0||e>4294967295)throw new Error("BsonTimestamp 'seconds' must be in the range of a 32-bit unsigned integer (0-4294967295).");if(!Number.isInteger(n)||n<0||n>4294967295)throw new Error("BsonTimestamp 'increment' must be in the range of a 32-bit unsigned integer (0-4294967295).")}isEqual(e){return this.seconds===e.seconds&&this.increment===e.increment}}/**
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
 */class Xa{constructor(e){this.stringValue=e,this.value=$.fromString(e)}isEqual(e){return!(!this.value.ot()||!e.value.ot())||this.value.compareTo(e.value)===0}toJSON(){return{$t:{stringValue:this.stringValue}}}}/**
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
 */class oo{constructor(e){this._methodName=e}}/**
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
 */class Lt{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Lt._jsonSchemaVersion}}static fromJSON(e){if(Ps(e,Lt._jsonSchema))return new Lt(e.latitude,e.longitude)}}Lt._jsonSchemaVersion="firestore/geoPoint/1.0",Lt._jsonSchema={type:it("string",Lt._jsonSchemaVersion),latitude:it("number"),longitude:it("number")};/**
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
 */class Za{constructor(e){this.value=e}isEqual(e){return this.value===e.value}}/**
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
 */class Xt{constructor(){this.type="MaxKey"}static instance(){return Xt.MAX_KEY_VALUE_INSTANCE||(Xt.MAX_KEY_VALUE_INSTANCE=new Xt),Xt.MAX_KEY_VALUE_INSTANCE}}Xt.MAX_KEY_VALUE_INSTANCE=null;/**
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
 */class Zt{constructor(){this.type="MinKey"}static instance(){return Zt.MIN_KEY_VALUE_INSTANCE||(Zt.MIN_KEY_VALUE_INSTANCE=new Zt),Zt.MIN_KEY_VALUE_INSTANCE}}Zt.MIN_KEY_VALUE_INSTANCE=null;/**
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
 */class Qa{constructor(e,n){this.pattern=e,this.options=n}isEqual(e){return this.pattern===e.pattern&&this.options===e.options}}/**
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
 */class bt{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(i,s){if(i.length!==s.length)return!1;for(let r=0;r<i.length;++r)if(i[r]!==s[r])return!1;return!0})(this._values,e._values)}toJSON(){return{type:bt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ps(e,bt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new bt(e.vectorValues);throw new H(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}bt._jsonSchemaVersion="firestore/vectorValue/1.0",bt._jsonSchema={type:it("string",bt._jsonSchemaVersion),vectorValues:it("object")};/**
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
 */const F_=/^__.*__$/;class U_{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Wa(e,this.data,this.fieldMask,n,this.fieldTransforms):new Nf(e,this.data,n,this.fieldTransforms)}}class $f{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new Wa(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Bf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e(40011,{dataSource:t})}}class el{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.validatePath(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new el({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const n=(s=this.path)==null?void 0:s.child(e),i=this.contextWith({path:n,arrayElement:!1});return i.validatePathSegment(e),i}childContextForFieldPath(e){var s;const n=(s=this.path)==null?void 0:s.child(e),i=this.contextWith({path:n,arrayElement:!1});return i.validatePath(),i}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Dr(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Bf(this.dataSource)&&F_.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class $_{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Ka(e)}createContext(e,n,i,s=!1){return new el({dataSource:e,methodName:n,targetDoc:i,path:En.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function B_(t){const e=t._freezeSettings(),n=Ka(t._databaseId);return new $_(t._databaseId,!!e.ignoreUndefinedProperties,n)}function j_(t,e,n,i,s,r={}){const o=t.createContext(r.merge||r.mergeFields?2:0,e,n,s);nl("Data must be an object, but it was:",o,i);const a=jf(i,o);let l,c;if(r.merge)l=new Zn(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const d of r.mergeFields){const m=Nr(e,d,n);if(!o.contains(m))throw new H(L.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Kf(u,m)||u.push(m)}l=new Zn(u),c=o.fieldTransforms.filter((d=>l.covers(d.field)))}else l=null,c=o.fieldTransforms;return new U_(new Ze(a),l,c)}class ao extends oo{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ao}}class tl extends oo{_toFieldTransform(e){return new g_(e.path,new Rf)}isEqual(e){return e instanceof tl}}function H_(t,e,n,i){const s=t.createContext(1,e,n);nl("Data must be an object, but it was:",s,i);const r=[],o=Ze.empty();Ss(i,((l,c)=>{const u=zf(e,l,n);c=Se(c);const d=s.childContextForFieldPath(u);if(c instanceof ao)r.push(u);else{const m=lo(c,d);m!=null&&(r.push(u),o.set(u,m))}}));const a=new Zn(r);return new $f(o,a,s.fieldTransforms)}function W_(t,e,n,i,s,r){const o=t.createContext(1,e,n),a=[Nr(e,i,n)],l=[s];if(r.length%2!=0)throw new H(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<r.length;m+=2)a.push(Nr(e,r[m])),l.push(r[m+1]);const c=[],u=Ze.empty();for(let m=a.length-1;m>=0;--m)if(!Kf(c,a[m])){const E=a[m];let x=l[m];x=Se(x);const R=o.childContextForFieldPath(E);if(x instanceof ao)c.push(E);else{const D=lo(x,R);D!=null&&(c.push(E),u.set(E,D))}}const d=new Zn(c);return new $f(u,d,o.fieldTransforms)}function lo(t,e,n){if(Wf(t=Se(t)))return nl("Unsupported field value:",e,t),jf(t,e);if(t instanceof oo)return(function(s,r){if(!Bf(r.dataSource))throw r.createError(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.createError(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(r);o&&r.fieldTransforms.push(o)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,r){const o=[];let a=0;for(const l of s){let c=lo(l,r.childContextForArray(a));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),a++}return{arrayValue:{values:o}}})(t,e)}return(function(s,r,o){if((s=Se(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return u_(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const a=ve.fromDate(s);return{timestampValue:Qs(r.serializer,a)}}if(s instanceof ve){const a=new ve(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Qs(r.serializer,a)}}if(Hf(s)){const a=ve.fromInstant(s),l=new ve(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:Qs(r.serializer,l)}}if(s instanceof Lt)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Qe)return s.subtype===0?{bytesValue:zc(r.serializer,s._byteString)}:(function(l,c){const u=c.toUint8Array(),d=new Uint8Array(u.length+1);return d[0]=c.subtype,d.set(u,1),{mapValue:{fields:{[to]:{bytesValue:zc(l,ft.fromUint8Array(d))}}}}})(r.serializer,s);if(s instanceof Ce){const a=r.databaseId,l=s.firestore._databaseId;if(!l.isEqual(a))throw r.createError(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:za(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof bt)return(function(l,c){const u=l instanceof bt?l.toArray():l;return{mapValue:{fields:{[vf]:{stringValue:yf},[Er]:{arrayValue:{values:u.map((m=>{if(typeof m!="number")throw c.createError("VectorValues must only contain numeric values.");return xf(c.serializer,m)}))}}}}}})(s,r);if(s instanceof Qa)return(function(l){return{mapValue:{fields:{[_n]:{mapValue:{fields:{[Ir]:{stringValue:l.pattern},[Tr]:{stringValue:l.options}}}}}}}})(s);if(s instanceof Ja)return(function(l){return{mapValue:{fields:{[cs]:{stringValue:l.value}}}}})(s);if(s instanceof Za)return(function(l){return{mapValue:{fields:{[ks]:Zs(l.value)}}}})(s);if(s instanceof Xa)return(function(l){return{mapValue:{fields:{[bi]:{stringValue:l.stringValue}}}}})(s);if(s instanceof Ya)return(function(l){return{mapValue:{fields:{[Un]:{mapValue:{fields:{[Ar]:Zs(l.seconds),[Sr]:Zs(l.increment)}}}}}}})(s);if(s instanceof Zt)return(function(){return{mapValue:{fields:{[_f]:{nullValue:"NULL_VALUE"}}}}})();if(s instanceof Xt)return(function(){return{mapValue:{fields:{[ja]:{nullValue:"NULL_VALUE"}}}}})();if(Mf(s))return s._toProto(r.serializer);throw r.createError(`Unsupported field value: ${Ba(s)}`)})(t,e)}function jf(t,e){const n={};return(function(s){for(const r in s)if(Object.prototype.hasOwnProperty.call(s,r))return!1;return!0})(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ss(t,((i,s)=>{const r=lo(s,e.childContextForField(i));r!=null&&(n[i]=r)})),{mapValue:{fields:n}}}function Hf(t){if(typeof t!="object"||t===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&t instanceof Temporal.Instant)return!0;const e=t;return e[Symbol.toStringTag]==="Temporal.Instant"&&typeof e.ht=="bigint"}function Wf(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ve||t instanceof Lt||t instanceof Qe||t instanceof Ce||t instanceof oo||t instanceof bt||t instanceof Zt||t instanceof Xt||t instanceof Za||t instanceof Xa||t instanceof Qa||t instanceof Ja||t instanceof Ya||Hf(t)||Mf(t))}function nl(t,e,n){if(!Wf(n)||!pf(n)){const i=Ba(n);throw i==="an object"?e.createError(t+" a custom object"):e.createError(t+" "+i)}}function Nr(t,e,n){if((e=Se(e))instanceof qa)return e._internalPath;if(typeof e=="string")return zf(t,e);throw Dr("Field path arguments must be of type string or ",t,!1,void 0,n)}const z_=new RegExp("[~\\*/\\[\\]]");function zf(t,e,n){if(e.search(z_)>=0)throw Dr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qa(...e.split("."))._internalPath}catch{throw Dr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Dr(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new H(L.INVALID_ARGUMENT,a+t+l)}function Kf(t,e){return t.some((n=>n.isEqual(e)))}/**
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
 */class Gf{constructor(e,n,i,s,r){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Ce(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(Nr("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qf extends Gf{data(){return super.data()}}class K_{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}class G_{convertValue(e,n="none"){switch(Yn(e)){case 0:return null;case 2:return e.booleanValue;case 3:if("mapValue"in e){if(Cr(e))return this.convertToInt32Value(e.mapValue);if(Xn(e))return this.convertToDecimal128Value(e.mapValue)}return Ve(e.integerValue||e.doubleValue);case 4:return this.convertTimestamp(e.timestampValue);case 6:return this.convertServerTimestamp(e,n);case 7:return e.stringValue;case 8:return"bytesValue"in e?this.convertBytes(wr(e.bytesValue)):this.convertToBytesWithSubtype(e.mapValue);case 9:return this.convertReference(e.referenceValue);case 11:return this.convertGeoPoint(e.geoPointValue);case 13:return this.convertArray(e.arrayValue,n);case 15:return this.convertObject(e.mapValue,n);case 14:return this.convertVectorValue(e.mapValue);case 12:return this.convertToRegexValue(e.mapValue);case 10:return this.convertToBsonObjectId(e.mapValue);case 5:return this.convertToBsonTimestamp(e.mapValue);case 16:return Xt.instance();case 1:return Zt.instance();default:throw _e(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return Ss(e,((s,r)=>{i[s]=this.convertValue(r,n)})),i}convertVectorValue(e){var i,s,r;const n=(r=(s=(i=e.fields)==null?void 0:i[Er].arrayValue)==null?void 0:s.values)==null?void 0:r.map((o=>Ve(o.doubleValue)));return new bt(n)}convertToBsonObjectId(e){var i,s;const n=((s=(i=e.fields)==null?void 0:i[cs])==null?void 0:s.stringValue)??"";return new Ja(n)}convertToBytesWithSubtype(e){var a;const n=(a=e.fields)==null?void 0:a[to],i=n==null?void 0:n.bytesValue;if(!i)throw new Error("Received incorrect bytesValue for Bytes with subtype");const s=wr(i).toUint8Array();if(s.length===0)throw new Error("Received empty bytesValue for Bytes with subtype");const r=s[0],o=s.slice(1);return new Qe(ft.fromUint8Array(o),r)}convertToBsonTimestamp(e){var r,o,a,l,c,u,d;const n=(r=e.fields)==null?void 0:r[Un],i=Number((l=(a=(o=n==null?void 0:n.mapValue)==null?void 0:o.fields)==null?void 0:a[Ar])==null?void 0:l.integerValue),s=Number((d=(u=(c=n==null?void 0:n.mapValue)==null?void 0:c.fields)==null?void 0:u[Sr])==null?void 0:d.integerValue);return new Ya(i,s)}convertToRegexValue(e){var s,r,o,a,l,c,u,d,m,E;const n=((l=(a=(o=(r=(s=e.fields)==null?void 0:s[_n])==null?void 0:r.mapValue)==null?void 0:o.fields)==null?void 0:a[Ir])==null?void 0:l.stringValue)??"",i=((E=(m=(d=(u=(c=e.fields)==null?void 0:c[_n])==null?void 0:u.mapValue)==null?void 0:d.fields)==null?void 0:m[Tr])==null?void 0:E.stringValue)??"";return new Qa(n,i)}convertToInt32Value(e){var i,s;const n=Number((s=(i=e.fields)==null?void 0:i[ks])==null?void 0:s.integerValue);return new Za(n)}convertToDecimal128Value(e){var i,s;const n=((s=(i=e.fields)==null?void 0:i[bi])==null?void 0:s.stringValue)??"";return new Xa(n)}convertGeoPoint(e){return new Lt(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map((i=>this.convertValue(i,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const i=gf(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(ls(e));default:return null}}convertTimestamp(e){const n=Jn(e);return new ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=Ee.fromString(e);nt(Vf(i),9688,{name:e});const s=new rs(i.get(1),i.get(3)),r=new Ue(i.popFirst(5));return s.isEqual(n)||Ua(`A document reference to ${r} refers to a different database (${s.projectId}/${s.database}), which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function q_(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class Jf extends G_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qe(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ce(this.firestore,null,n)}}function aa(t){const e=Ga((t=eo(t,Ce)).firestore),n=new Jf(t.firestore);return D_(e,[t._key]).then((i=>{nt(i.length===1,15618);const s=i[0];return new Gf(t.firestore,n,t._key,s.isFoundDocument()?s:null,t.converter)}))}function J_(t){(function(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new H(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")})((t=eo(t,ro))._query);const e=Ga(t.firestore),n=new Jf(t.firestore);return O_(e,t._query).then((i=>{const s=i.map((r=>new qf(t.firestore,n,r.key,r,t.converter)));return t._query.limitType==="L"&&s.reverse(),new K_(t,s)}))}function hs(){return new tl("serverTimestamp")}const Jc="4.19.0";/**
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
 */class Y_{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=B_(e)}set(e,n,i){this._verifyNotCommitted();const s=Do(e,this._firestore),r=q_(s.converter,n,i),o=j_(this._dataReader,"WriteBatch.set",s._key,r,s.converter!==null,i);return this._mutations.push(o.toMutation(s._key,Wn.none())),this}update(e,n,i,...s){this._verifyNotCommitted();const r=Do(e,this._firestore);let o;return o=typeof(n=Se(n))=="string"||n instanceof qa?W_(this._dataReader,"WriteBatch.update",r._key,n,i,s):H_(this._dataReader,"WriteBatch.update",r._key,n),this._mutations.push(o.toMutation(r._key,Wn.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Do(e,this._firestore);return this._mutations=this._mutations.concat(new Df(n._key,Wn.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new H(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Do(t,e){if((t=Se(t)).firestore!==e)throw new H(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function il(t){t=eo(t,Cs);const e=Ga(t);return new Y_(t,(n=>N_(e,n)))}/**
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
 */(function(){Cy(`${wi}_lite`),gi(new Kn("firestore/lite",((e,{instanceIdentifier:n,options:i})=>{const s=e.getProvider("app").getImmediate(),r=new Cs(new Ny(e.getProvider("auth-internal")),new Vy(s,e.getProvider("app-check-internal")),Ly(s,n),s);return i&&r._setSettings(i),r}),"PUBLIC").setMultipleInstances(!0)),wn("firestore-lite",Jc,""),wn("firestore-lite",Jc,"esm2020")})();function ei(){return Qg().find(s=>s.name==="trip")??Ed({apiKey:"AIzaSyAVSVgO7VlNcYF8CCYIRzzZtJcpWwYh0vQ",projectId:"indonesia-trip-dcae8",appId:"1:354229712104:web:ac93f3905807aeafa7055d",authDomain:"indonesia-trip-dcae8.firebaseapp.com"},"trip")}function xs(){return M_(ei())}function Yf(){const t=yi(ei()).currentUser;if(!t)throw new Error("Please sign in to edit your profile.");return Qn(xs(),"Trips","indonesia-2027","people",t.uid)}async function X_(){const t=Yf(),[e,n]=await Promise.all([aa(t),aa(Qn(t,"private","contact"))]);if(!e.exists())throw new Error("Your profile could not be found.");const i=e.data(),s=n.data()||{};return{name:i.name,status:i.status,phone:s.phone||"",email:s.email||""}}async function Z_(t){const e=Yf(),n=t.name.trim();if(!n||n.length>120||!["invited","committed","interested"].includes(t.status)||t.phone.trim().length>40||t.email.trim().length>254)throw new Error("Check your name, status, and contact details.");const i=il(xs());i.update(e,{name:n,status:t.status,updatedAt:hs()}),i.set(Qn(e,"private","contact"),{phone:t.phone.trim(),email:t.email.trim()}),await i.commit()}async function Q_(t,e,n="",i=""){const s=yi(ei()).currentUser;if(!s)throw new Error("Please sign in to add a person.");const r=t.trim();if(!r||r.length>120||!["invited","committed","interested"].includes(e))throw new Error("Enter a name of 1–120 characters and select a status.");const o=xs(),a=Qn(Uf(o,"Trips","indonesia-2027","people")),l=il(o);if(l.set(a,{name:r,status:e,ownerUid:s.uid,createdAt:hs(),updatedAt:hs()}),n.trim()||i.trim()){const c={};n.trim()&&(c.phone=n.trim()),i.trim()&&(c.email=i.trim()),l.set(Qn(a,"private","contact"),c)}return await l.commit(),{id:a.id,name:r,status:e}}async function eb(){return(await J_(Uf(xs(),"Trips","indonesia-2027","people"))).docs.map(e=>{const n=e.data(),i=n.status==="commited"?"committed":n.status==="interest"?"interested":n.status;if(typeof n.name!="string"||!n.name.trim()||!["invited","committed","interested"].includes(i))throw new Error("A guest entry has an invalid name or status. Please check the guest list.");return{id:e.id,name:n.name.trim(),status:i}}).sort((e,n)=>e.name.localeCompare(n.name))}async function tb(t){const e=xs(),n=Qn(e,"Trips","indonesia-2027","people",t.uid),i=await aa(n);if(i.exists()){const o=i.data();return{id:i.id,name:o.name,status:o.status}}const s=(t.displayName||"Traveler").trim().slice(0,120),r=il(e);return r.set(n,{name:s,status:"interested",ownerUid:t.uid,createdAt:hs(),updatedAt:hs()}),t.email&&r.set(Qn(n,"private","contact"),{email:t.email}),await r.commit(),{id:n.id,name:s,status:"interested"}}const tt=ae(null),ti=ae(null),Mi=ae(!1),gt=ae(""),$n=Ta(()=>{var t;return!!(ti.value&&((t=tt.value)==null?void 0:t.id)===ti.value.uid)}),Li=ae(!1);let Yc=!1;async function er(t){ti.value=t;const e=await tb(t);tt.value={id:t.uid,name:e.name}}function nb(){if(!Yc){Yc=!0;try{p0(yi(ei()),async t=>{if(ti.value=t,Li.value){Mi.value=!0;return}try{t?await er(t):tt.value=null}catch{gt.value="Signed in, but unable to load your guest profile. Check the connection and try signing in again.",tt.value=null}finally{Mi.value=!0}},()=>{gt.value="Unable to restore your session. Please reload and try again.",Mi.value=!0})}catch{gt.value="Sign-in is not configured yet. You can continue as a guest.",Mi.value=!0}}}async function Xc(){gt.value="";try{ti.value&&await m0(yi(ei())),tt.value=null}catch{gt.value="Unable to sign out. Please try again."}}const Ie=ae("home");function Ye(t){Ie.value=(t==="people"||t==="profile")&&!$n.value?"home":t,window.scrollTo({top:0,behavior:"smooth"})}const ib={class:"profile-page"},sb={key:0,role:"status"},rb={key:1,role:"alert"},ob=["disabled"],ab={class:"hint"},lb={class:"primary"},cb={key:0,role:"alert"},ub={class:"profile-notice",role:"status","aria-live":"polite"},db={key:0,class:"notice"},fb=An({__name:"ProfilePage",setup(t){const e=Br({name:"",status:"interested",phone:"",email:""}),n=ae(!0),i=ae(!1),s=ae(""),r=ae(""),o=ae("");let a;async function l(){n.value=!0,s.value="";try{Object.assign(e,await X_())}catch{s.value="Unable to load your profile. Please try again."}finally{n.value=!1}}async function c(){var u,d;if(!i.value){i.value=!0,r.value="",o.value="",clearTimeout(a);try{await Z_(e),e.name=e.name.trim(),((u=tt.value)==null?void 0:u.id)===((d=ti.value)==null?void 0:d.uid)&&tt.value&&(tt.value.name=e.name),o.value="Your profile has been updated.",a=setTimeout(()=>{o.value=""},5e3)}catch(m){r.value=(m==null?void 0:m.code)==="permission-denied"?"Profile updates are not enabled yet. Please ask the site owner to deploy the updated rules.":"Unable to save your profile. Your changes are still here; please try again."}finally{i.value=!1}}}return zr(l),Kr(()=>clearTimeout(a)),(u,d)=>{var m;return J(),Q("main",ib,[T("button",{class:"back",onClick:d[0]||(d[0]=E=>G(Ye)("home"))},"← Back to overview"),d[13]||(d[13]=T("div",{class:"section-eyebrow"},"Your Adventure",-1)),d[14]||(d[14]=T("h1",{class:"section-title"},[Te("My "),T("em",null,"Profile")],-1)),d[15]||(d[15]=T("p",{class:"intro"},"Keep your RSVP and contact details up to date.",-1)),n.value?(J(),Q("p",sb,"Loading your profile…")):s.value?(J(),Q("div",rb,[T("p",null,we(s.value),1),T("button",{class:"primary",onClick:l},"Try again")])):(J(),Q("form",{key:2,onSubmit:Aa(c,["prevent"])},[T("fieldset",{disabled:i.value},[T("label",null,[d[6]||(d[6]=Te("Name",-1)),pt(T("input",{"onUpdate:modelValue":d[1]||(d[1]=E=>e.name=E),required:"",maxlength:"120",pattern:".*\\S.*",autocomplete:"name"},null,512),[[Qt,e.name]])]),T("label",null,[d[8]||(d[8]=Te("Status",-1)),pt(T("select",{"onUpdate:modelValue":d[2]||(d[2]=E=>e.status=E),required:""},[...d[7]||(d[7]=[T("option",{value:"invited"},"Invited",-1),T("option",{value:"committed"},"Committed",-1),T("option",{value:"interested"},"Interested",-1)])],512),[[dd,e.status]])]),T("label",null,[d[9]||(d[9]=Te("Phone Number (optional)",-1)),pt(T("input",{"onUpdate:modelValue":d[3]||(d[3]=E=>e.phone=E),type:"tel",maxlength:"40",autocomplete:"tel"},null,512),[[Qt,e.phone]])]),T("label",null,[d[10]||(d[10]=Te("Contact Email (optional)",-1)),pt(T("input",{"onUpdate:modelValue":d[4]||(d[4]=E=>e.email=E),type:"email",maxlength:"254",autocomplete:"email"},null,512),[[Qt,e.email]])]),d[11]||(d[11]=T("p",{class:"hint"},"Your name and status appear on the attendants list. Your phone and contact email stay private.",-1)),T("p",ab,"Sign-in email: "+we((m=G(ti))==null?void 0:m.email)+". Changing your contact email does not change your sign-in email.",1),T("button",lb,we(i.value?"Saving…":"Save Changes"),1)],8,ob),r.value?(J(),Q("p",cb,we(r.value),1)):Fe("",!0)],32)),(J(),ht(Du,{to:"body"},[T("div",ub,[o.value?(J(),Q("div",db,[d[12]||(d[12]=T("span",{"aria-hidden":"true"},"✓",-1)),Te(" "+we(o.value),1),T("button",{"aria-label":"Dismiss notification",onClick:d[5]||(d[5]=E=>o.value="")},"×")])):Fe("",!0)])]))])}}}),Sn=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},hb=Sn(fb,[["__scopeId","data-v-7023cb50"]]),pb=["aria-current"],mb=["aria-current"],gb=An({__name:"NavBar",setup(t){const e=Ta(()=>Ie.value==="bali"||Ie.value==="bali-housing");return(n,i)=>(J(),Q("nav",null,[i[7]||(i[7]=T("div",{class:"nav-logo"},"🌴 Indonesia Trip",-1)),T("button",{class:Ct(["nav-btn",{active:G(Ie)==="home"}]),onClick:i[0]||(i[0]=s=>G(Ye)("home"))}," Overview ",2),T("button",{class:Ct(["nav-btn",{active:G(Ie)==="komodo"}]),onClick:i[1]||(i[1]=s=>G(Ye)("komodo"))}," Komodo ",2),T("button",{class:Ct(["nav-btn",{active:e.value}]),onClick:i[2]||(i[2]=s=>G(Ye)("bali"))}," Bali ",2),T("button",{class:Ct(["nav-btn",{active:G(Ie)==="java"}]),onClick:i[3]||(i[3]=s=>G(Ye)("java"))}," East Java ",2),G($n)?(J(),Q("button",{key:0,class:Ct(["nav-btn",{active:G(Ie)==="people"}]),"aria-current":G(Ie)==="people"?"page":void 0,onClick:i[4]||(i[4]=s=>G(Ye)("people"))}," attendants ",10,pb)):Fe("",!0),G($n)?(J(),Q("button",{key:1,class:Ct(["nav-btn nav-profile",{active:G(Ie)==="profile"}]),"aria-current":G(Ie)==="profile"?"page":void 0,onClick:i[5]||(i[5]=s=>G(Ye)("profile"))},[...i[6]||(i[6]=[T("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.7","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},[T("circle",{cx:"12",cy:"12",r:"10"}),T("circle",{cx:"12",cy:"9",r:"3"}),T("path",{d:"M5 19a7 7 0 0 1 14 0"})],-1),Te(" Profile ",-1)])],10,mb)):Fe("",!0)]))}}),vb=Sn(gb,[["__scopeId","data-v-32ac0240"]]),yb={};function _b(t,e){return J(),Q("footer",null,[...e[0]||(e[0]=[T("span",null,"🌴 Indonesia Trip",-1),Te(" · Made with love for the group · Adventure awaits ✈️ ",-1)])])}const bb=Sn(yb,[["render",_b]]),wb="/images/home1.jpg",Eb={class:"hero"},Ib={class:"hero-inner"},Tb={class:"hero-cards"},Ab={class:"map-section"},Sb={class:"map-frame"},Pb={class:"map-svg-wrap"},kb={viewBox:"0 0 700 320",xmlns:"http://www.w3.org/2000/svg",style:{width:"100%",height:"auto"}},Cb=An({__name:"HomePage",setup(t){return(e,n)=>(J(),Q("div",null,[T("section",Eb,[n[4]||(n[4]=T("div",{class:"hero-pattern"},null,-1)),T("div",Ib,[n[3]||(n[3]=Ot('<div class="hero-stamp">Group Adventure · Indonesia</div><h1>The<br><em>Gang Goes to </em><br>Indonesia</h1><div class="image-container java1-img"><img src="'+wb+'"></div><p class="hero-sub"> Dragons, temples, volcanoes, and a whole lot of rice wine.<br>Our bucket-list trip is officially happening. </p><div class="hero-details"><div class="hero-detail"><div class="num">9–14</div><div class="label">Total Days</div></div><div class="hero-detail"><div class="num">3</div><div class="label">Destinations</div></div><div class="hero-detail"><div class="num">$35</div><div class="label">Avg / Night</div></div><div class="hero-detail"><div class="num">∞</div><div class="label">Memories</div></div><div class="hero-detail"><div class="num">0?</div><div class="label">Food Poisoning</div></div><div class="hero-detail"><div class="num">Hopefully</div><div class="label">LadyBoys</div></div></div>',5)),T("div",Tb,[T("div",{class:"dest-card",onClick:n[0]||(n[0]=i=>G(Ye)("komodo"))}," 🦎 Komodo Island "),T("div",{class:"dest-card",onClick:n[1]||(n[1]=i=>G(Ye)("bali"))},"🌺 Bali"),T("div",{class:"dest-card",onClick:n[2]||(n[2]=i=>G(Ye)("java"))},"🌋 East Java")])])]),n[8]||(n[8]=Ot('<section class="itinerary-strip"><div class="itin-row"><div class="itin-stop"><div class="itin-dot"></div><div class="itin-label">Indianapolis</div><div class="itin-days">Fly Out · 23-35 hrs</div></div><div class="itin-line"></div><div class="itin-stop"><div class="itin-dot"></div><div class="itin-label">Bali (DPS)</div><div class="itin-days">Arrive · Base Camp</div></div><div class="itin-line"></div><div class="itin-stop"><div class="itin-dot"></div><div class="itin-label">Labuan Bajo</div><div class="itin-days">Komodo · 2–3 nights</div></div><div class="itin-line"></div><div class="itin-stop"><div class="itin-dot"></div><div class="itin-label">Bali</div><div class="itin-days">Explore · 3–4 nights</div></div><div class="itin-line"></div><div class="itin-stop"><div class="itin-dot"></div><div class="itin-label">East Java</div><div class="itin-days">Volcanoes · 3–4 nights</div></div><div class="itin-line"></div><div class="itin-stop"><div class="itin-dot"></div><div class="itin-label">Fly Home</div><div class="itin-days">Back to Indy</div></div></div></section>',1)),T("section",Ab,[n[6]||(n[6]=T("div",{class:"map-section-title"},"Where We're Going",-1)),n[7]||(n[7]=T("h2",null,"The Route",-1)),T("div",Sb,[T("div",Pb,[(J(),Q("svg",kb,[...n[5]||(n[5]=[Ot('<rect width="700" height="320" fill="#0D2B38"></rect><g stroke="#1B4F5A" stroke-width="0.5" opacity="0.4"><line x1="0" y1="40" x2="700" y2="40"></line><line x1="0" y1="80" x2="700" y2="80"></line><line x1="0" y1="120" x2="700" y2="120"></line><line x1="0" y1="160" x2="700" y2="160"></line><line x1="0" y1="200" x2="700" y2="200"></line><line x1="0" y1="240" x2="700" y2="240"></line><line x1="0" y1="280" x2="700" y2="280"></line></g><path d="M80,170 C100,155 140,148 190,150 C240,152 300,145 360,148 C400,150 430,155 450,165 C440,178 420,182 390,180 C350,178 300,175 260,178 C220,180 180,178 150,175 C120,172 90,180 80,170Z" fill="#3D7A5C" opacity="0.85"></path><text x="265" y="168" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="11" text-anchor="middle" letter-spacing="2" opacity="0.9"> JAVA </text><circle cx="390" cy="162" r="6" fill="#E8714A" opacity="0.9"></circle><circle cx="390" cy="162" r="10" fill="none" stroke="#E8714A" stroke-width="1.5" opacity="0.5"></circle><text x="390" y="145" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="9" text-anchor="middle" letter-spacing="1"> EAST JAVA </text><text x="390" y="135" fill="#E8714A" font-family="Special Elite, monospace" font-size="8" text-anchor="middle"> 🌋 Bromo · Ijen </text><path d="M470,158 C480,152 505,150 520,153 C530,156 525,165 515,168 C500,170 478,168 470,158Z" fill="#3D7A5C" opacity="0.85"></path><text x="495" y="163" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="9" text-anchor="middle" letter-spacing="1"> BALI </text><circle cx="495" cy="155" r="6" fill="#C9A84C" opacity="0.9"></circle><circle cx="495" cy="155" r="10" fill="none" stroke="#C9A84C" stroke-width="1.5" opacity="0.5"></circle><text x="495" y="138" fill="#C9A84C" font-family="Special Elite, monospace" font-size="8" text-anchor="middle"> 🌺 Temples · Rice </text><text x="495" y="128" fill="#C9A84C" font-family="Special Elite, monospace" font-size="8" text-anchor="middle"> Terraces · Adventure </text><path d="M535,155 C543,150 555,150 562,155 C558,163 545,165 535,160 C533,158 533,157 535,155Z" fill="#3D7A5C" opacity="0.7"></path><path d="M575,152 C590,147 615,147 630,153 C628,162 612,165 595,163 C582,160 574,158 575,152Z" fill="#3D7A5C" opacity="0.7"></path><path d="M590,185 C610,178 640,175 665,178 C668,187 655,192 635,193 C610,193 593,192 590,185Z" fill="#3D7A5C" opacity="0.8"></path><text x="630" y="188" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="9" text-anchor="middle" letter-spacing="1" opacity="0.8"> FLORES </text><circle cx="580" cy="185" r="6" fill="#E8714A" opacity="0.9"></circle><circle cx="580" cy="185" r="10" fill="none" stroke="#E8714A" stroke-width="1.5" opacity="0.5"></circle><text x="580" y="208" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="9" text-anchor="middle" letter-spacing="1"> KOMODO </text><text x="580" y="218" fill="#E8714A" font-family="Special Elite, monospace" font-size="8" text-anchor="middle"> 🦎 Liveaboard </text><text x="580" y="168" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="7.5" text-anchor="middle" opacity="0.7"> Labuan Bajo </text><path d="M30,30 Q200,60 495,155" stroke="#E8714A" stroke-width="1.5" fill="none" stroke-dasharray="5,4" opacity="0.5"></path><circle cx="30" cy="30" r="4" fill="#E8714A" opacity="0.7"></circle><text x="30" y="20" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="8" text-anchor="middle" opacity="0.7"> IND </text><path d="M495,155 Q540,170 580,185" stroke="#C9A84C" stroke-width="1.5" fill="none" stroke-dasharray="3,3" opacity="0.6"></path><path d="M580,185 Q540,170 495,155" stroke="#C9A84C" stroke-width="1.5" fill="none" stroke-dasharray="3,3" opacity="0.6"></path><path d="M495,155 Q445,158 390,162" stroke="#C9A84C" stroke-width="1.5" fill="none" stroke-dasharray="3,3" opacity="0.6"></path><rect x="10" y="270" width="200" height="42" fill="rgba(0,0,0,0.3)" rx="2"></rect><circle cx="25" cy="283" r="4" fill="#E8714A"></circle><text x="35" y="287" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="8"> Destination </text><circle cx="25" cy="300" r="4" fill="#C9A84C"></circle><text x="35" y="304" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="8"> Base (Bali) </text><line x1="110" y1="283" x2="130" y2="283" stroke="#E8714A" stroke-width="1.5" stroke-dasharray="4,3"></line><text x="135" y="287" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="8"> Flight </text><line x1="110" y1="300" x2="130" y2="300" stroke="#C9A84C" stroke-width="1.5" stroke-dasharray="3,3"></line><text x="135" y="304" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="8"> Route </text><text x="690" y="20" fill="#FAF6F0" font-family="Special Elite, monospace" font-size="9" text-anchor="end" opacity="0.5" letter-spacing="2"> INDONESIA · TRIP MAP </text>',39)])]))])])]),n[9]||(n[9]=Ot('<section style="background:var(--teal);padding:4rem 2rem;"><div style="max-width:1000px;margin:0 auto;"><div class="section-eyebrow" style="color:#faf6f0;">Save the Date</div><h2 class="section-title" style="color:#faf6f0;"> June – July <em>2027</em></h2><p style="color:#faf6f0;text-align:center;"> June 25/26 – July 10/11 · Exact travel dates to be confirmed. Faded dates mark the flexible start and end days. </p><table style="width:100%;max-width:560px;margin:2rem auto 0;border-collapse:collapse;color:#faf6f0;font-family:&quot;Special Elite&quot;, monospace;text-align:center;"><thead><tr><th style="padding:0.75rem 0;opacity:0.6;font-weight:normal;letter-spacing:2px;border-bottom:1px solid rgba(250, 246, 240, 0.25);"> SUN </th><th style="padding:0.75rem 0;opacity:0.6;font-weight:normal;letter-spacing:2px;border-bottom:1px solid rgba(250, 246, 240, 0.25);"> MON </th><th style="padding:0.75rem 0;opacity:0.6;font-weight:normal;letter-spacing:2px;border-bottom:1px solid rgba(250, 246, 240, 0.25);"> TUE </th><th style="padding:0.75rem 0;opacity:0.6;font-weight:normal;letter-spacing:2px;border-bottom:1px solid rgba(250, 246, 240, 0.25);"> WED </th><th style="padding:0.75rem 0;opacity:0.6;font-weight:normal;letter-spacing:2px;border-bottom:1px solid rgba(250, 246, 240, 0.25);"> THU </th><th style="padding:0.75rem 0;opacity:0.6;font-weight:normal;letter-spacing:2px;border-bottom:1px solid rgba(250, 246, 240, 0.25);"> FRI </th><th style="padding:0.75rem 0;opacity:0.6;font-weight:normal;letter-spacing:2px;border-bottom:1px solid rgba(250, 246, 240, 0.25);"> SAT </th></tr></thead><tbody><tr><td style="padding:0.9rem 0;"><span style="display:block;font-size:0.55em;letter-spacing:1px;opacity:0.8;">JUN</span>20</td><td style="padding:0.9rem 0;">21</td><td style="padding:0.9rem 0;">22</td><td style="padding:0.9rem 0;">23</td><td style="padding:0.9rem 0;">24</td><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;opacity:0.6;">25</td><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;">26</td></tr><tr><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;">27</td><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;">28</td><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;">29</td><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;">30</td><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;"><span style="display:block;font-size:0.55em;letter-spacing:1px;opacity:0.8;">JUL</span>1</td><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;">2</td><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;">3</td></tr><tr><td style="padding:0.9rem 0;background:var(--coral);color:#faf6f0;">4</td><td style="padding:0.9rem 0;background:linear-gradient(135deg, var(--coral) 0%, var(--coral) 50%, var(--gold) 50%, var(--gold) 100%);color:#faf6f0;">5</td><td style="padding:0.9rem 0;background:var(--gold);color:var(--teal);">6</td><td style="padding:0.9rem 0;background:var(--gold);color:var(--teal);">7</td><td style="padding:0.9rem 0;background:var(--gold);color:var(--teal);">8</td><td style="padding:0.9rem 0;background:var(--gold);color:var(--teal);">9</td><td style="padding:0.9rem 0;background:var(--gold);color:var(--teal);">10</td></tr><tr><td style="padding:0.9rem 0;background:var(--gold);color:var(--teal);opacity:0.6;">11</td><td style="padding:0.9rem 0;">12</td><td style="padding:0.9rem 0;">13</td><td style="padding:0.9rem 0;">14</td><td style="padding:0.9rem 0;">15</td><td style="padding:0.9rem 0;">16</td><td style="padding:0.9rem 0;">17</td></tr></tbody></table><div style="display:flex;gap:2rem;justify-content:center;flex-wrap:wrap;margin-top:1.5rem;color:#faf6f0;font-family:&quot;Special Elite&quot;, monospace;font-size:0.85rem;"><div style="display:flex;align-items:center;gap:0.5rem;"><span style="width:1rem;height:1rem;background:var(--coral);display:inline-block;border-radius:2px;"></span> June 25/26 – July 5 </div><div style="display:flex;align-items:center;gap:0.5rem;"><span style="width:1rem;height:1rem;background:var(--gold);display:inline-block;border-radius:2px;"></span> July 5 – 10/11 </div></div></div></section><section style="background:var(--cream);padding:4rem 2rem;"><div style="max-width:1000px;margin:0 auto;"><div class="section-eyebrow">Before You Go</div><h2 class="section-title">Trip <em>Essentials</em></h2><div class="tips-grid" style="margin-top:2rem;"><div class="tip-card"><div class="tip-icon">✈️</div><div class="tip-title">Getting There</div><div class="tip-text"> Fly from Indianapolis (IND) to Bali&#39;s Ngurah Rai Airport (DPS). Expect 23–35 hours with 1–2 layovers, typically through Tokyo, Singapore, or Seoul. </div></div><div class="tip-card"><div class="tip-icon">🏠</div><div class="tip-title">Where We Stay</div><div class="tip-text"> Private luxury villas &amp; Airbnbs with pools — just $10–30/person/night in a big group. Bali has incredible villa options that rival 5-star hotels at a fraction of the cost. </div></div><div class="tip-card"><div class="tip-icon">🚗</div><div class="tip-title">Getting Around</div><div class="tip-text"> Rent private drivers throughout Bali and East Java. A full day with a driver runs around $35 USD and they often double as knowledgeable local guides. </div></div><div class="tip-card"><div class="tip-icon">💰</div><div class="tip-title">Budget Tips</div><div class="tip-text"> Eat at local warungs ($1–2/meal). Temple entrance fees are typically $3–6 USD. The more people in the group, the cheaper accommodation and drivers get per person. </div></div><div class="tip-card"><div class="tip-icon">📋</div><div class="tip-title">Visa &amp; Entry</div><div class="tip-text"> Visa on Arrival costs $35 USD, valid for 30 days. Bali also requires a $10 tourist levy — pay online before arrival at lovebali.baliprov.go.id for convenience. </div></div><div class="tip-card"><div class="tip-icon">🌡️</div><div class="tip-title">Best Time to Go</div><div class="tip-text"> Dry season (May–October) is ideal. July–August is peak season; book villas 2–3 months ahead. Shoulder months like May or September offer great weather with fewer crowds. </div></div></div></div></section>',2))]))}}),xb="/images/komodo1.webp",Rb="/images/komodo2.webp",Nb="/images/komodo3.jpeg",Db="/images/komodo4.jpeg",Ob="/images/komodo5.jpeg",Vb={};function Mb(t,e){return J(),Q("div",null,[...e[0]||(e[0]=[Ot('<div class="komodo-hero"><div class="dest-hero-inner"><div class="dest-hero-top"><div class="dest-hero-text"><div class="dest-page-stamp">Stop 01 · Komodo Islands</div><h1 class="dest-h1"> Komodo<em>Dragon</em>Country <div class="image-container"><img src="'+xb+'"></div></h1><p class="dest-tagline">Indonesia&#39;s most primal corner — ancient reptiles, electric-blue waters, and the feeling that you&#39;ve sailed off the edge of the map.</p><div class="dest-stats"><div class="dest-stat"><div class="s-num">2–3</div><div class="s-label">Nights Liveaboard</div></div><div class="dest-stat"><div class="s-num">$255</div><div class="s-label">Per Person</div></div><div class="dest-stat"><div class="s-num">UNESCO</div><div class="s-label">World Heritage Site</div></div></div></div></div></div></div><div class="page-content"><div class="tape">Liveaboard · Budget Shared Cabin</div><p class="section-intro">We&#39;re sailing from Labuan Bajo on a budget liveaboard — exploring Komodo National Park by boat, sleeping under the stars, and waking up to new islands every morning.</p><div class="highlight-box"><h3>The Liveaboard Plan</h3><p>A 3D/2N budget liveaboard with shared cabins from Labuan Bajo — similar to the GetYourGuide option you found. The boat takes care of everything: meals, snorkeling gear, national park entry, and all travel between islands. Just show up and adventure begins.</p></div><hr class="dashed-divider"><div class="section-eyebrow">Day by Day</div><h2 class="section-title">The <em>Itinerary</em></h2><div class="day-list"><div class="day-row"><div class="day-num">1</div><div class="day-content"><div class="day-title">Arrive Labuan Bajo → Board the Boat</div><div class="day-desc">Fly from Bali to Labuan Bajo (LBJ) — about 1.5 hrs. Board your liveaboard in the afternoon. Sail toward Komodo with sunset over the Lesser Sundas. First dinner on deck.</div></div></div><div class="day-row"><div class="day-num">2</div><div class="day-content"><div class="day-title">Komodo Island — Dragon Trek &amp; Snorkeling</div><div class="day-desc">Morning hike through Komodo Island with a park ranger to spot the famous Komodo Dragons in the wild. Afternoon snorkeling at the famous Pink Beach — one of just a handful of pink sand beaches on earth. Incredible coral and marine life.</div></div></div><div class="day-row"><div class="day-num">3</div><div class="day-content"><div class="day-title">Rinca Island, Manta Point &amp; Padar</div><div class="day-desc">Optional second dragon trek on Rinca Island (smaller crowds). Snorkel or dive at Manta Point for a chance to swim with manta rays. Late afternoon hike up Padar Island for one of Indonesia&#39;s most photographed panoramas — multi-colored beaches below on three sides.</div></div></div><div class="day-row"><div class="day-num">4</div><div class="day-content"><div class="day-title">Return to Labuan Bajo → Fly back to Bali</div><div class="day-desc">Morning sail back to Labuan Bajo. Afternoon flight back to Bali. Check into the villa, collapse into a pool, and debrief over Bintang beers.</div></div></div></div><hr class="dashed-divider"><div class="section-eyebrow">What&#39;s Included</div><h2 class="section-title">On the <em>Boat</em></h2><div class="activities-grid"><div class="activity-card"><div class="card-color-bar" style="background:var(--jungle);"></div><div class="card-body"><div class="card-tag">Wildlife</div><div class="card-name">Komodo Dragon Trek</div><div class="card-desc">Guided walk through Komodo National Park with a licensed ranger. The Komodo Dragon is the world&#39;s largest living lizard — up to 10 feet long and genuinely prehistoric-looking. They roam freely.</div><div class="card-footer"><span class="card-price">Included</span><span class="card-duration">2–3 hrs</span></div><div class="image-container"><img src="'+Rb+'"></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--teal);"></div><div class="card-body"><div class="card-tag">Snorkeling / Diving</div><div class="card-name">Pink Beach Snorkel</div><div class="card-desc">Snorkel the pristine coral reefs of Pink Beach — named for the rosy tint of its sand, caused by red coral fragments. One of Indonesia&#39;s most magical stretches of coast, with turtles and reef sharks.</div><div class="card-footer"><span class="card-price">Included</span><span class="card-duration">Afternoon</span></div><div class="image-container"><img src="'+Nb+'"></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--coral);"></div><div class="card-body"><div class="card-tag">Marine Life</div><div class="card-name">Manta Point Dive / Snorkel</div><div class="card-desc">Swim with giant oceanic manta rays with wingspans up to 5.5 meters. Komodo&#39;s waters are part of the Coral Triangle — the planet&#39;s most biodiverse marine zone. Truly once-in-a-lifetime.</div><div class="card-footer"><span class="card-price">Included</span><span class="card-duration">2 hrs</span></div><div class="image-container"><img src="'+Db+'"></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--gold);"></div><div class="card-body"><div class="card-tag">Hiking</div><div class="card-name">Padar Island Summit</div><div class="card-desc">Hike 30–45 minutes up to the island&#39;s ridge for the iconic three-beach panorama — arguably the most photographed view in all of Indonesia. Absolutely worth the sweat. Plan for sunrise.</div><div class="card-footer"><span class="card-price">Included</span><span class="card-duration">1 hr hike</span></div><div class="image-container"><img src="'+Ob+'"></div></div></div></div><hr class="dashed-divider"><div class="info-band"><div class="section-eyebrow" style="text-align:center;margin-bottom:1.2rem;">Trip Logistics</div><div class="info-grid"><div class="info-item"><div class="i-label">Departs From</div><div class="i-val">Labuan Bajo, Flores</div></div><div class="info-item"><div class="i-label">Cost Per Person</div><div class="i-val">~$255 USD</div></div><div class="info-item"><div class="i-label">Duration</div><div class="i-val">3 Days / 2 Nights</div></div><div class="info-item"><div class="i-label">Accommodation</div><div class="i-val">Shared Cabin, Boat</div></div><div class="info-item"><div class="i-label">Included</div><div class="i-val">Meals, Gear, Park Entry</div></div><div class="info-item"><div class="i-label">Book Via</div><div class="i-val">GetYourGuide</div></div></div></div><a href="https://www.getyourguide.com/labuan-bajo-l106237/3d2n-budget-komodo-liveaboard-with-shared-cabin-t1185898/" target="_blank" class="booking-cta">→ Book the Liveaboard on GetYourGuide</a><div class="tips-grid" style="margin-top:2.5rem;"><div class="tip-card"><div class="tip-icon">🤿</div><div class="tip-title">Bring Your Own Mask</div><div class="tip-text">Shared snorkel gear on budget boats varies in quality. Bringing your own mask and snorkel makes a big difference. Fins are usually fine shared.</div></div><div class="tip-card"><div class="tip-icon">🧴</div><div class="tip-title">Reef-Safe Sunscreen Only</div><div class="tip-text">Komodo is a UNESCO site with protected coral. Use reef-safe sunscreen only — it protects the ecosystem and you won&#39;t get hassled by rangers.</div></div><div class="tip-card"><div class="tip-icon">🌊</div><div class="tip-title">Check Sea Conditions</div><div class="tip-text">Aug–Sept are best for calm seas and manta ray sightings. April–July is still excellent. Dec–Feb can be rougher in the Flores Sea.</div></div><div class="tip-card"><div class="tip-icon">👟</div><div class="tip-title">Closed-Toe Shoes for Treks</div><div class="tip-text">Required for dragon treks. Sandals won&#39;t cut it — the terrain is rocky and you&#39;re walking near large reptiles that can run 12 mph. Pack trail shoes.</div></div></div></div>',2)])])}const Lb=Sn(Vb,[["render",Mb]]),Xf="/images/bali1.jpg",Fb={class:"page-content"},Ub=An({__name:"BaliPage",setup(t){return(e,n)=>(J(),Q("div",null,[n[2]||(n[2]=Ot('<div class="bali-hero"><div class="dest-hero-inner"><div class="dest-hero-top"><div class="dest-hero-text"><div class="dest-page-stamp">Stop 02 · Island of the Gods</div><h1 class="dest-h1"> Bali<em>Untamed</em><div class="image-container"><img src="'+Xf+'"></div></h1><p class="dest-tagline">Rice terraces, sea temples, jungle swings, and the best $2 meal you&#39;ll ever eat. The relaxing (and occasionally adrenaline-fueled) heart of our trip.</p><div class="dest-stats"><div class="dest-stat"><div class="s-num">3–4</div><div class="s-label">Nights</div></div><div class="dest-stat"><div class="s-num">$10–30</div><div class="s-label">Villa / Person / Night</div></div><div class="dest-stat"><div class="s-num">$35</div><div class="s-label">Driver / Full Day</div></div></div></div></div></div></div>',1)),T("div",Fb,[n[1]||(n[1]=Ot('<div class="tape">Activities · Culture · Adventure</div><p class="section-intro">Bali is our home base and relaxation zone — but there&#39;s nothing passive about it. Between ancient temples, jungle ATVs, sacred springs, and epic sunsets, every day here earns its place.</p><div class="section-eyebrow">Day by Day</div><h2 class="section-title">Sample <em>Itinerary</em></h2><div class="day-list"><div class="day-row"><div class="day-num">1</div><div class="day-content"><div class="day-title">Arrive &amp; Settle In Ubud</div><div class="day-desc">Check into your villa in Ubud — the cultural heart of Bali. Evening walk through the Ubud Art Market. Dinner at a warung (local Indonesian diner) for around $2–5 USD. Early night — jet lag is real after 30+ hours of travel.</div></div></div><div class="day-row"><div class="day-num">2</div><div class="day-content"><div class="day-title">Ubud Cultural Day — Temples, Terraces &amp; Monkeys</div><div class="day-desc">Start early at Tegallalang Rice Terraces before the tour buses arrive. Visit Sacred Monkey Forest Sanctuary (hold your sunglasses). Afternoon: Tirta Empul Holy Spring Temple for a traditional purification ceremony. Sunset at Tanah Lot Sea Temple. Private driver all day — ~$35.</div></div></div><div class="day-row"><div class="day-num">3</div><div class="day-content"><div class="day-title">Adventure Day — ATV &amp; Whitewater Rafting</div><div class="day-desc">Morning ATV quad bike ride through rice paddies, jungle tunnels, and muddy rivers. Afternoon: whitewater rafting down the Ayung River through tropical rainforest, past stone carvings and hidden waterfalls. Buffet lunch included. Full-day combo package ~$60/person.</div></div></div><div class="day-row"><div class="day-num">4</div><div class="day-content"><div class="day-title">Mt. Batur Sunrise Hike (Optional) or Beach Day</div><div class="day-desc">For the early risers: pre-dawn drive to Mt. Batur for a 2-hour guided sunrise hike to the volcano rim. Back by 11am. OR: beach day in Seminyak or Nusa Penida snorkel trip. Evening: Uluwatu Temple sunset + Kecak fire dance show for the ultimate Bali finale.</div></div></div></div><hr class="dashed-divider"><div class="section-eyebrow">Top Activities with Prices</div><h2 class="section-title">Things to <em>Do</em></h2><div class="activities-grid"><div class="activity-card"><div class="card-color-bar" style="background:var(--jungle);"></div><div class="card-body"><div class="card-tag">Culture · Temples</div><div class="card-name">Ubud Cultural Full-Day Tour</div><div class="card-desc">Private driver takes you to Tegallalang Rice Terraces, Sacred Monkey Forest, Tirta Empul Holy Spring, and Tanah Lot Sea Temple. A Balinese dress is often included for photos at the temple. One of the best ways to see Bali with a first-time group.</div><div class="card-footer"><span class="card-price">$45–$80/person</span><span class="card-duration">Full Day</span></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--coral);"></div><div class="card-body"><div class="card-tag">Adventure · Outdoors</div><div class="card-name">ATV Quad Bike + Rafting Combo</div><div class="card-desc">1.5 hrs of off-road ATV through rice paddies, jungle tunnels, and river crossings. Then 2 hrs rafting the 12-km Ayung River with Class II–III rapids. Hotel transfers and buffet lunch included. Epic group activity — great for laughs and photos.</div><div class="card-footer"><span class="card-price">~$55–$65/person</span><span class="card-duration">Full Day</span></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--teal);"></div><div class="card-body"><div class="card-tag">Hiking · Volcano</div><div class="card-name">Mt. Batur Sunrise Hike</div><div class="card-desc">Pre-dawn hike up Bali&#39;s most accessible volcano for one of Southeast Asia&#39;s great sunrises. The 2-hour trek reaches the rim at 1,717m. Breakfast of eggs cooked in volcanic steam at the top. Back at your villa by mid-morning.</div><div class="card-footer"><span class="card-price">$17–$45/person</span><span class="card-duration">5–6 hrs total</span></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--gold);"></div><div class="card-body"><div class="card-tag">Island Day Trip</div><div class="card-name">Nusa Penida Snorkeling Tour</div><div class="card-desc">A quick boat ride to Nusa Penida — a rugged island off Bali&#39;s coast with rainforested hills and crystal-clear water. Swim with manta rays at Manta Point, visit the iconic Kelingking Beach cliff, and snorkel Diamond Beach. Full day from Bali.</div><div class="card-footer"><span class="card-price">~$50–$70/person</span><span class="card-duration">Full Day</span></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:#7D6B5C;"></div><div class="card-body"><div class="card-tag">Culture · Spiritual</div><div class="card-name">Tirta Empul Purification Ceremony</div><div class="card-desc">Bali&#39;s holiest site — a 10th-century water temple where locals and visitors bathe in sacred spring pools for purification. One of the most unique cultural experiences in Bali. Sarong rental included. Entrance ~$3 USD.</div><div class="card-footer"><span class="card-price">~$3 entry</span><span class="card-duration">2 hrs</span></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--stamp-red);"></div><div class="card-body"><div class="card-tag">Sunset · Culture</div><div class="card-name">Uluwatu Temple + Kecak Dance</div><div class="card-desc">The Uluwatu Temple perches dramatically on a sea cliff 70m above the Indian Ocean. As the sun sets, watch a traditional Kecak fire dance performance on the cliff&#39;s edge — one of Bali&#39;s most atmospheric experiences. Memorable evening for the whole group.</div><div class="card-footer"><span class="card-price">$10–$20/person</span><span class="card-duration">Evening</span></div></div></div></div><hr class="dashed-divider"><div class="highlight-box"><h3>Spa Day Reminder 💆</h3><p>Don&#39;t skip a Balinese massage. A 60-minute traditional massage at a local spa runs $5–10 USD. The same treatment at a resort costs $50+. We&#39;re going local. Book a group session at a Ubud spa — most fit 6–10 people and can be arranged through your driver.</p></div><div class="tips-grid" style="margin-top:2.5rem;"><div class="tip-card"><div class="tip-icon">🐒</div><div class="tip-title">Monkey Forest Warning</div><div class="tip-text">The monkeys at Sacred Monkey Forest are not shy. Hold your phone, sunglasses, and any snacks tightly. They will take your things and show zero remorse.</div></div><div class="tip-card"><div class="tip-icon">🕌</div><div class="tip-title">Temple Dress Code</div><div class="tip-text">Shoulders and knees must be covered at all temples. Sarong rentals are available at entrances for a small fee (often included in your tour).</div></div><div class="tip-card"><div class="tip-icon">🍜</div><div class="tip-title">Eat at Warungs</div><div class="tip-text">Local family-run warungs serve incredible nasi goreng (fried rice) for $1–2 USD. Don&#39;t eat tourist-area restaurants every night or you&#39;ll blow your budget for no reason.</div></div><div class="tip-card"><div class="tip-icon">🌅</div><div class="tip-title">Book Activities Early</div><div class="tip-text">Bali fills up, especially in July–August. Book the Mt. Batur hike and Nusa Penida tours at least a few days in advance to get preferred times.</div></div></div><hr class="dashed-divider"><div class="section-eyebrow">Where We Stay</div><h2 class="section-title">Housing <em>Options</em></h2><p class="section-intro">From private pool villas in Ubud to beachfront stays in Seminyak — here&#39;s the full breakdown of where the group can stay, with prices and trade-offs.</p>',16)),T("button",{class:"booking-cta",style:{background:"var(--teal)"},onClick:n[0]||(n[0]=i=>G(Ye)("bali-housing"))},"→ Explore Housing Options")])]))}}),$b="/images/BaliVilla1.avif",Bb={class:"page-content"},jb=An({__name:"BaliHousingPage",setup(t){return(e,n)=>(J(),Q("div",null,[n[2]||(n[2]=Ot('<div class="bali-hero"><div class="dest-hero-inner"><div class="dest-hero-top"><div class="dest-hero-text"><div class="dest-page-stamp">Stop 02 · Bali · Housing</div><h1 class="dest-h1"> Where We<em>Stay</em><div class="image-container"><img src="'+Xf+'"></div></h1><p class="dest-tagline"></p><div class="dest-stats"><div class="dest-stat"><div class="s-num"></div><div class="s-label"></div></div><div class="dest-stat"><div class="s-num"></div><div class="s-label"></div></div><div class="dest-stat"><div class="s-num"></div><div class="s-label"></div></div></div></div></div></div></div>',1)),T("div",Bb,[T("button",{class:"booking-cta",style:{background:"var(--teal)","margin-bottom":"1.5rem"},onClick:n[0]||(n[0]=i=>G(Ye)("bali"))},"← Back to Bali"),n[1]||(n[1]=Ot('<div class="tape">Villas · Airbnbs · Where to Sleep</div><p class="section-intro"></p><div class="section-eyebrow">Compare Your Options</div><h2 class="section-title">Housing <em>Options</em></h2><div class="activities-grid"><div class="activity-card"><div class="card-color-bar" style="background:var(--jungle);"></div><div class="card-body"><div class="card-tag"></div><div class="card-name">Luxury Beach Front Villa with Infinity Pool, Staff and Breathtaking Views!</div><div class="card-desc"><p>Private villa with 5 bedrooms, infinity pool, and direct beach access. Includes daily staff for cleaning and breakfast. Perfect for groups looking for luxury and privacy.</p><ul><li>5 Bedrooms</li><li>5 Bathrooms</li><li>Infinity Pool</li><li>Beach Access</li><li>Daily Staff Service</li></ul></div><div class="card-footer"><span class="card-price">$336 a night</span><span class="card-duration">$100pp for 3 nights for 10 people <a href="https://www.vrbo.com/497641ha?chkin=2027-04-30&amp;chkout=2027-05-03&amp;d1=2027-04-30&amp;d2=2027-05-03&amp;startDate=2027-04-30&amp;endDate=2027-05-03&amp;flexibility=2_DAY_LOWER&amp;flexibility=3_DAY_UPPER&amp;searchRange=2026-07-01_2026-07-31&amp;searchRange=2027-05-01_2027-05-31&amp;x_pwa=1&amp;rfrr=HSR&amp;pwa_ts=1782167714867&amp;referrerUrl=aHR0cHM6Ly93d3cudnJiby5jb20vSG90ZWwtU2VhcmNo&amp;useRewards=true&amp;adults=10&amp;regionId=602651&amp;destination=Bali%2C+Indonesia&amp;destType=MARKET&amp;latLong=-8.340539%2C115.09195&amp;searchId=254f5d1d-249c-46fb-aa1b-23d751d87e5d&amp;sort=RECOMMENDED&amp;top_dp=336&amp;top_cur=USD&amp;userIntent=&amp;selectedRoomType=29491463&amp;selectedRatePlan=00012ef2b62974b14101a7853eeee38d3e6e&amp;expediaPropertyId=29491463">(VRBO Link)</a></span></div><div class="image-container"><img src="'+$b+'"></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--coral);"></div><div class="card-body"><div class="card-tag"></div><div class="card-name"></div><div class="card-desc"></div><div class="card-footer"><span class="card-price"></span><span class="card-duration"></span></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--gold);"></div><div class="card-body"><div class="card-tag"></div><div class="card-name"></div><div class="card-desc"></div><div class="card-footer"><span class="card-price"></span><span class="card-duration"></span></div></div></div></div><hr class="dashed-divider"><div class="highlight-box"><h3>adawd</h3><p></p></div><div class="tips-grid" style="margin-top:2.5rem;"><div class="tip-card"><div class="tip-icon"></div><div class="tip-title">QSQSQS</div><div class="tip-text"></div></div><div class="tip-card"><div class="tip-icon"></div><div class="tip-title"></div><div class="tip-text"></div></div></div>',8))])]))}}),Hb="/images/java1.jpeg",Wb="/images/MtIjen.jpg",zb="/images/mtbromo.jpeg",Kb="/images/tumpak-sewu-waterfalls1.jpg",Gb={};function qb(t,e){return J(),Q("div",null,[...e[0]||(e[0]=[Ot('<div class="java-hero"><div class="dest-hero-inner"><div class="dest-hero-top"><div class="dest-hero-text"><div class="dest-page-stamp">Stop 03 · East Java, Indonesia</div><h1 class="dest-h1"> East<em>Java</em><div class="image-container"><img src="'+Hb+'"></div></h1><p class="dest-tagline">Blue fire, sulfur mines, alien caldera landscapes, and a waterfall so big they call it Indonesia&#39;s Niagara. This is the hiking chapter.</p><div class="dest-stats"><div class="dest-stat"><div class="s-num">3–4</div><div class="s-label">Days Hiking</div></div><div class="dest-stat"><div class="s-num">3</div><div class="s-label">Major Hikes</div></div><div class="dest-stat"><div class="s-num">~$250</div><div class="s-label">Full 3D2N Tour</div></div></div></div></div></div></div><div class="page-content"><div class="tape">Tumpak Sewu · Mt. Bromo · Mt. Ijen</div><p class="section-intro">East Java is the adventure finale — three of Indonesia&#39;s most dramatic natural wonders packed into 3–4 days of early mornings, jeep rides, and unforgettable volcanic landscapes.</p><div class="highlight-box"><h3>Recommended: The 3D/2N East Java Tour</h3><p>The most efficient way to hit all three highlights is a pre-booked 3-day, 2-night guided tour from Bali or Surabaya. These tours handle all transportation (including the Bali ferry), accommodation, breakfast, and expert local guides — starting around $250/person. Single-day Bromo trips start around $40.</p></div><div class="section-eyebrow">Day by Day</div><h2 class="section-title">The <em>Itinerary</em></h2><div class="day-list"><div class="day-row"><div class="day-num">1</div><div class="day-content"><div class="day-title">Bali → Ferry → Ijen Area (Banyuwangi)</div><div class="day-desc">Early morning drive from Bali to Gilimanuk Harbor. Take the ferry across the Bali Strait to East Java. Drive 6–7 hours to the Ijen area in Banyuwangi. Check in at your guesthouse. Rest up — you&#39;ll be waking up at 1:00am for the main event.</div></div></div><div class="day-row"><div class="day-num">2</div><div class="day-content"><div class="day-title">Mt. Ijen Blue Fire (1am) → Mt. Bromo Sunrise</div><div class="day-desc">1:00am: depart for Paltuding. 2-hour trek up Mt. Ijen in the dark. Descend into the crater to witness the extraordinary blue fire — sulfuric gas igniting into electric blue flames, visible only before dawn. After sunrise over the turquoise acid lake, drive 5–6 hrs to the Bromo area. Check in. Rest.</div></div></div><div class="day-row"><div class="day-num">3</div><div class="day-content"><div class="day-title">Mt. Bromo Sunrise Jeep → Tumpak Sewu Waterfall</div><div class="day-desc">2:30am: jeep to Penanjakan viewpoint for Bromo&#39;s iconic sunrise — the caldera fills with mist as the active cone of Mt. Bromo glows orange. Hike the 248 stairs to the crater rim. Then drive to the Sea of Sand and Savanna. Afternoon: Tumpak Sewu waterfall. Back to Bali or Surabaya.</div></div></div></div><hr class="dashed-divider"><div class="section-eyebrow">The Three Highlights</div><h2 class="section-title">Where We&#39;re <em>Hiking</em></h2><div class="activities-grid"><div class="activity-card"><div class="card-color-bar" style="background:var(--coral);"></div><div class="card-body"><div class="card-tag">Volcano · Night Hike</div><div class="card-name">Mt. Ijen — Blue Fire</div><div class="card-desc">Mt. Ijen is home to one of the rarest natural phenomena on earth: electric-blue fire produced by igniting sulfuric gases. It glows only before dawn. The hike descends into a massive caldera with a stunning turquoise acid lake — and you can watch sulfur miners carrying 80kg loads up the crater walls.</div><div class="card-footer"><span class="card-price">Included in tour</span><span class="card-duration">Start 1am · 4–5 hrs</span></div><div class="image-container"><img src="'+Wb+'"></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--gold);"></div><div class="card-body"><div class="card-tag">Volcano · Sunrise</div><div class="card-name">Mt. Bromo — Sea of Sand Sunrise</div><div class="card-desc">Mt. Bromo is Java&#39;s most iconic landscape — an active volcano smoking inside a vast caldera filled with black volcanic sand. The Penanjakan viewpoint at sunrise, with Mt. Semeru in the background, is pure cinema. Jeep ride across the Sea of Sand, then hike the 248 stairs to the crater lip.</div><div class="card-footer"><span class="card-price">$40 (day trip) or included in tour</span><span class="card-duration">Start 2:30am · Full day</span></div><div class="image-container"><img src="'+zb+'"></div></div></div><div class="activity-card"><div class="card-color-bar" style="background:var(--teal);"></div><div class="card-body"><div class="card-tag">Waterfall · Jungle</div><div class="card-name">Tumpak Sewu — Indonesia&#39;s Niagara</div><div class="card-desc">A jaw-dropping multi-tiered curtain waterfall plunging into a lush jungle valley — often called the &quot;Niagara of Indonesia.&quot; The descent into the valley takes about 45 minutes and rewards with a view of dozens of individual falls spanning the entire cliff face. Bring dry bags for cameras.</div><div class="card-footer"><span class="card-price">Included in tour</span><span class="card-duration">Half Day</span></div><div class="image-container"><img src="'+Kb+'"></div></div></div></div><hr class="dashed-divider"><div class="info-band"><div class="section-eyebrow" style="text-align:center;margin-bottom:1.2rem;">Tour Options</div><div class="info-grid"><div class="info-item"><div class="i-label">Budget 3D/2N Tour (All 3 Sites)</div><div class="i-val">~$250/person</div></div><div class="info-item"><div class="i-label">Single-Day Bromo from Surabaya</div><div class="i-val">~$40–$50/person</div></div><div class="info-item"><div class="i-label">Private Bromo Jeep</div><div class="i-val">~$60–$80 total</div></div><div class="info-item"><div class="i-label">Ijen Standalone Tour</div><div class="i-val">~$40–$60/person</div></div><div class="info-item"><div class="i-label">Recommended Base City</div><div class="i-val">Malang or Surabaya</div></div><div class="info-item"><div class="i-label">Book Via</div><div class="i-val">GetYourGuide / Local Agents</div></div></div></div><div style="display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:2.5rem;"><a href="https://www.getyourguide.com/java-l164347/east-java-3d2n-ijen-crater-bromo-tumpak-sewu-waterfall-t847467/" target="_blank" class="booking-cta">→ Book 3D2N East Java Tour</a><a href="https://www.getyourguide.com/mount-bromo-l88315/" target="_blank" class="booking-cta" style="background:var(--teal);">→ Browse Bromo Day Trips</a></div><div class="tips-grid"><div class="tip-card"><div class="tip-icon">😷</div><div class="tip-title">Gas Masks for Ijen</div><div class="tip-text">The sulfur fumes at Ijen Crater are intense. Bring a proper gas mask — not just a bandana. Rental masks are available at the trailhead but quality varies. Serious hikers bring their own.</div></div><div class="tip-card"><div class="tip-icon">🧥</div><div class="tip-title">Layer Up — It Gets Cold</div><div class="tip-text">Both Ijen and Bromo are above 2,000m and you&#39;re hiking at 1–3am. It will be cold — bring a fleece or light jacket. You&#39;ll warm up fast on the ascent but the crater rim is windy.</div></div><div class="tip-card"><div class="tip-icon">💡</div><div class="tip-title">Bring a Headlamp</div><div class="tip-text">You&#39;re hiking in the dark at both Ijen and Bromo. A headlamp is essential — not just a phone flashlight. Extra batteries recommended.</div></div><div class="tip-card"><div class="tip-icon">📷</div><div class="tip-title">Camera for the Blue Fire</div><div class="tip-text">The blue fire at Ijen is very difficult to photograph on a phone in the dark. Bring a camera if you have one, or just enjoy the moment — it&#39;s more impressive in person anyway.</div></div><div class="tip-card"><div class="tip-icon">🚌</div><div class="tip-title">Lots of Driving</div><div class="tip-text">East Java involves long drives. Day 1 can be 6–7 hours from Bali. Sleep in the car. Pack snacks, download offline maps (Maps.me), and consider motion sickness tablets for bumpy roads.</div></div><div class="tip-card"><div class="tip-icon">🌄</div><div class="tip-title">Weather Can Change Everything</div><div class="tip-text">Bromo sunrise can be hidden by cloud cover — it happens. Good guides know alternate viewpoints and will adjust. Don&#39;t be devastated if conditions aren&#39;t perfect; the landscape is stunning regardless.</div></div></div></div>',2)])])}const Jb=Sn(Gb,[["render",qb]]),Yb={class:"people-page"},Xb={class:"toast-region",role:"status","aria-live":"polite","aria-atomic":"true"},Zb={key:0,class:"success-toast"},Qb={key:0,role:"status"},ew={key:1,role:"alert"},tw={key:2},nw={key:0},iw={class:"add-person-row"},sw={colspan:"2",class:"guest-panel"},rw=["aria-expanded","disabled"],ow=["disabled"],aw={class:"panel-button",type:"submit"},lw={key:1,role:"alert"},cw=An({__name:"PeoplePage",setup(t){const e=ae([]),n=ae(!0),i=ae(""),s=ae(""),r=ae(""),o=ae(""),a=ae(!1),l=ae("invited"),c=ae(!1),u=ae(""),d=ae("");let m;function E(){clearTimeout(m),d.value=""}Kr(()=>clearTimeout(m));async function x(){if(!c.value){c.value=!0,u.value="",E();try{const D=await Q_(s.value,l.value,r.value,o.value);e.value=[...e.value,D].sort((S,N)=>S.name.localeCompare(N.name)),d.value=`${D.name} has been added to the guest list.`,m=setTimeout(E,5e3),s.value="",r.value="",o.value="",l.value="invited",a.value=!1}catch(D){u.value=(D==null?void 0:D.code)==="permission-denied"?"Saving is not enabled yet. Please ask the site owner to check the guest list access settings.":"Unable to add this person. Check your connection and try again."}finally{c.value=!1}}}async function R(){n.value=!0,i.value="";try{e.value=await eb()}catch(D){const S=D==null?void 0:D.code;i.value=S==="permission-denied"?"The guest list is not available. Please ask the organizer to check its access settings.":S?"Unable to load the guest list. Please try again.":D instanceof Error?D.message:"Unable to load the guest list."}finally{n.value=!1}}return zr(R),(D,S)=>(J(),Q("main",Yb,[(J(),ht(Du,{to:"body"},[T("div",Xb,[Me(im,{name:"toast"},{default:ku(()=>[d.value?(J(),Q("div",Zb,[S[8]||(S[8]=T("span",{class:"toast-icon","aria-hidden":"true"},"✓",-1)),T("div",null,[S[7]||(S[7]=T("strong",null,"Person added",-1)),T("p",null,we(d.value),1)]),T("button",{class:"toast-close",type:"button","aria-label":"Dismiss notification",onClick:E},"×")])):Fe("",!0)]),_:1})])])),T("button",{class:"back-button",onClick:S[0]||(S[0]=N=>G(Ye)("home"))},"← Back to overview"),S[19]||(S[19]=T("div",{class:"section-eyebrow"},"The Gang",-1)),S[20]||(S[20]=T("h1",{class:"section-title"},[Te("Who's "),T("em",null,"Going?")],-1)),S[21]||(S[21]=T("p",{class:"people-intro"},"The crew for our Indonesia adventure.",-1)),n.value?(J(),Q("p",Qb,"Loading the guest list…")):i.value?(J(),Q("div",ew,[T("p",null,we(i.value),1),T("button",{class:"back-button retry-button",onClick:R},"Try again")])):(J(),Q("table",tw,[S[17]||(S[17]=T("caption",{class:"sr-only"},"People going to Indonesia and their attendance status",-1)),S[18]||(S[18]=T("thead",null,[T("tr",null,[T("th",{scope:"col"},"Name"),T("th",{scope:"col"},"Status")])],-1)),T("tbody",null,[(J(!0),Q(Je,null,dp(e.value,N=>(J(),Q("tr",{key:N.id},[T("td",null,we(N.name),1),T("td",null,[T("span",{class:Ct(["status",N.status])},we(N.status),3)])]))),128)),e.value.length===0?(J(),Q("tr",nw,[...S[9]||(S[9]=[T("td",{colspan:"2",class:"empty-state"},"The guest list is coming soon.",-1)])])):Fe("",!0),T("tr",iw,[T("td",sw,[T("button",{class:"add-person-button","aria-expanded":a.value,"aria-controls":"add-person-form",disabled:c.value,onClick:S[1]||(S[1]=N=>{a.value=!a.value,u.value="",d.value=""})},[...S[10]||(S[10]=[T("span",{"aria-hidden":"true"},"＋",-1),Te(" Add Person",-1)])],8,rw),a.value?(J(),Q(Je,{key:0},[S[16]||(S[16]=T("h2",null,"Add Person",-1)),T("form",{id:"add-person-form",class:"person-form",onSubmit:Aa(x,["prevent"])},[T("fieldset",{disabled:c.value},[T("label",null,[S[11]||(S[11]=Te("Name",-1)),pt(T("input",{"onUpdate:modelValue":S[2]||(S[2]=N=>s.value=N),required:"",maxlength:"120",pattern:".*\\S.*",autocomplete:"name"},null,512),[[Qt,s.value]])]),T("label",null,[S[13]||(S[13]=Te("Status ",-1)),pt(T("select",{"onUpdate:modelValue":S[3]||(S[3]=N=>l.value=N)},[...S[12]||(S[12]=[T("option",{value:"invited"},"Invited",-1),T("option",{value:"committed"},"Committed",-1),T("option",{value:"interested"},"Interested",-1)])],512),[[dd,l.value]])]),T("label",null,[S[14]||(S[14]=Te("Phone Number (optional)",-1)),pt(T("input",{"onUpdate:modelValue":S[4]||(S[4]=N=>r.value=N),type:"tel",autocomplete:"tel",maxlength:"40"},null,512),[[Qt,r.value]])]),T("label",null,[S[15]||(S[15]=Te("Email (optional)",-1)),pt(T("input",{"onUpdate:modelValue":S[5]||(S[5]=N=>o.value=N),type:"email",autocomplete:"email",maxlength:"254"},null,512),[[Qt,o.value]])]),T("button",aw,we(c.value?"Saving…":"Save Person"),1),T("button",{class:"panel-button secondary",type:"button",onClick:S[6]||(S[6]=N=>a.value=!1)},"Cancel")],8,ow)],32)],64)):Fe("",!0),u.value?(J(),Q("p",lw,we(u.value),1)):Fe("",!0)])])])]))]))}}),uw=Sn(cw,[["__scopeId","data-v-a4b1efea"]]),dw={class:"welcome-screen"},fw={class:"welcome-card","aria-labelledby":"welcome-title"},hw=["disabled"],pw={key:0},mw={key:1},gw=["minlength","autocomplete"],vw={class:"primary"},yw={key:0,role:"alert"},_w={key:1,class:"confirmation",role:"status"},bw=["disabled"],ww=["disabled"],Ew=["disabled"],Iw=["disabled"],Tw=An({__name:"WelcomePage",setup(t){const e=ae("signin"),n=ae(""),i=ae(""),s=ae(""),r=ae(!1),o=ae(""),a=ae("");function l(d){const m=d==null?void 0:d.code;return m==="auth/email-already-in-use"?"An account already exists for this email. Sign in or use Forgot password to reset it.":m==="auth/invalid-email"?"Enter a valid email address.":m==="auth/network-request-failed"||m==="unavailable"?"Unable to reach Firebase. Check your connection and try again.":m==="auth/invalid-credential"||m==="auth/wrong-password"||m==="auth/user-not-found"?"The email or password is incorrect. Try again or use Forgot password.":m==="auth/user-disabled"?"This account has been disabled. Please contact the site owner.":m==="auth/account-exists-with-different-credential"?"This email already uses another sign-in method. Sign in with your original method.":m==="permission-denied"?"Your account is signed in, but the guest list permissions need updating. Please contact the site owner.":m==="auth/popup-closed-by-user"||m==="auth/cancelled-popup-request"?"Sign-in was cancelled. You can try again.":m==="auth/popup-blocked"?"Allow popups for this site and try again.":m==="auth/operation-not-allowed"?"This sign-in method is not enabled yet. Please contact the site owner.":m==="auth/unauthorized-domain"?"This website domain needs to be enabled for sign-in by the site owner.":m==="auth/weak-password"||m==="auth/password-does-not-meet-requirements"?"Choose a stronger password that meets the site’s password policy.":m==="auth/too-many-requests"?"Too many attempts. Please wait a little before trying again.":`Unable to complete sign-in. Please try again${m?` (${m})`:""}.`}async function c(){if(r.value)return;r.value=!0,o.value="",gt.value="",a.value="",Li.value=!0;let d=!1;try{const m=yi(ei());if(e.value==="reset")await a0(m,i.value.trim()),a.value="If an account exists for this email, you’ll receive a password reset link.";else if(e.value==="signup"){if(!n.value.trim())throw new Error("Name required");const E=await l0(m,i.value.trim(),s.value);d=!0,await d0(E.user,{displayName:n.value.trim()}),await er(E.user)}else{const E=await c0(m,i.value.trim(),s.value);await er(E.user)}s.value=""}catch(m){o.value=d?`Your account was created, but setup could not finish. ${l(m)} Sign in again to retry setup; you don’t need to create another account.`:l(m)}finally{Li.value=!1,r.value=!1}}async function u(){if(!r.value){r.value=!0,o.value="",gt.value="",Li.value=!0;try{const d=new Gt;d.setCustomParameters({prompt:"select_account"});const m=await V0(yi(ei()),d);await er(m.user)}catch(d){o.value=l(d)}finally{Li.value=!1,r.value=!1}}}return(d,m)=>(J(),Q("main",dw,[T("section",fw,[m[9]||(m[9]=T("div",{class:"hero-stamp"},"The Gang Goes to Indonesia",-1)),m[10]||(m[10]=T("h1",{id:"welcome-title"},[Te("Ready for "),T("em",null,"adventure?")],-1)),m[11]||(m[11]=T("p",{class:"intro"},"Sign in to join the crew, or explore as a guest.",-1)),T("h2",null,we(e.value==="signup"?"Create your account":e.value==="reset"?"Reset your password":"Welcome back"),1),T("form",{onSubmit:Aa(c,["prevent"])},[T("fieldset",{disabled:r.value},[e.value==="signup"?(J(),Q("label",pw,[m[6]||(m[6]=Te("Name",-1)),pt(T("input",{"onUpdate:modelValue":m[0]||(m[0]=E=>n.value=E),required:"",maxlength:"120",pattern:".*\\S.*",autocomplete:"name"},null,512),[[Qt,n.value]])])):Fe("",!0),T("label",null,[m[7]||(m[7]=Te("Email",-1)),pt(T("input",{"onUpdate:modelValue":m[1]||(m[1]=E=>i.value=E),required:"",type:"email",autocomplete:"email"},null,512),[[Qt,i.value]])]),e.value!=="reset"?(J(),Q("label",mw,[m[8]||(m[8]=Te("Password",-1)),pt(T("input",{"onUpdate:modelValue":m[2]||(m[2]=E=>s.value=E),required:"",type:"password",minlength:e.value==="signup"?6:void 0,autocomplete:e.value==="signup"?"new-password":"current-password"},null,8,gw),[[Qt,s.value]])])):Fe("",!0),T("button",vw,we(r.value?"Please wait…":e.value==="signup"?"Create Account":e.value==="reset"?"Send Reset Link":"Sign In"),1)],8,hw)],32),o.value||G(gt)?(J(),Q("p",yw,we(o.value||G(gt)),1)):Fe("",!0),a.value?(J(),Q("p",_w,we(a.value),1)):Fe("",!0),e.value==="signin"?(J(),Q("button",{key:2,class:"text-button",disabled:r.value,onClick:m[3]||(m[3]=E=>{e.value="reset",o.value="",a.value=""})},"Forgot password?",8,bw)):Fe("",!0),m[12]||(m[12]=T("div",{class:"divider"},"or",-1)),T("button",{class:"secondary",disabled:r.value,onClick:u},"Continue with Google",8,ww),T("button",{class:"text-button",disabled:r.value,onClick:m[4]||(m[4]=E=>{e.value=e.value==="signin"?"signup":"signin",o.value="",a.value="",s.value=""})},we(e.value==="signin"?"Create an account":"Back to sign in"),9,Ew),T("button",{class:"text-button guest-button",disabled:r.value,onClick:m[5]||(m[5]=E=>tt.value={id:null,name:"Guest"})},"Continue as a Guest →",8,Iw)])]))}}),Aw=Sn(Tw,[["__scopeId","data-v-7e2ede4d"]]),Sw={key:0,class:"visitor-bar",role:"status"},Pw={class:"visitor-bar"},kw={key:0,role:"alert"},Cw=An({__name:"App",setup(t){return nb(),(e,n)=>G(Mi)?G(tt)?(J(),Q(Je,{key:2},[Me(vb),T("div",Pw,[T("span",null,we(G(tt).name==="Guest"&&!G(tt).id?"Browsing as a guest":`Welcome, ${G(tt).name}`),1),T("button",{onClick:n[0]||(n[0]=(...i)=>G(Xc)&&G(Xc)(...i))},we(G($n)?"Sign out":"Sign in"),1),G(gt)?(J(),Q("p",kw,we(G(gt)),1)):Fe("",!0)]),G(Ie)==="home"||(G(Ie)==="people"||G(Ie)==="profile")&&!G($n)?(J(),ht(Cb,{key:0})):G(Ie)==="komodo"?(J(),ht(Lb,{key:1})):G(Ie)==="bali"?(J(),ht(Ub,{key:2})):G(Ie)==="bali-housing"?(J(),ht(jb,{key:3})):G(Ie)==="java"?(J(),ht(Jb,{key:4})):G(Ie)==="people"&&G($n)?(J(),ht(uw,{key:5})):G(Ie)==="profile"&&G($n)?(J(),ht(hb,{key:6})):Fe("",!0),Me(bb)],64)):(J(),ht(Aw,{key:1})):(J(),Q("p",Sw,"Restoring your session…"))}}),xw=Sn(Cw,[["__scopeId","data-v-fb1a9012"]]);Cm(xw).mount("#app");
