function e(e,t,i,s){var n,o=arguments.length,a=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(a=(o<3?n(a):o>3?n(t,i,a):n(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;let o=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(t,e))}return e}toString(){return this.cssText}};const a=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new o(i,e,s)},r=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,s))(t)})(e):e,{is:c,defineProperty:d,getOwnPropertyDescriptor:l,getOwnPropertyNames:_,getOwnPropertySymbols:h,getPrototypeOf:u}=Object,p=globalThis,m=p.trustedTypes,v=m?m.emptyScript:"",g=p.reactiveElementPolyfillSupport,b=(e,t)=>e,f={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},y=(e,t)=>!c(e,t),$={attribute:!0,type:String,converter:f,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);void 0!==s&&d(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=l(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:s,set(t){const o=s?.call(this);n?.call(this,t),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$}static _$Ei(){if(this.hasOwnProperty(b("elementProperties")))return;const e=u(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(b("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(b("properties"))){const e=this.properties,t=[..._(e),...h(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(r(e))}else void 0!==e&&t.push(r(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{if(i)e.adoptedStyleSheets=s.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of s){const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,e.appendChild(s)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:f).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=i.getPropertyOptions(s),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:f;this._$Em=s;const o=n.fromAttribute(t,e.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(e,t,i,s=!1,n){if(void 0!==e){const o=this.constructor;if(!1===s&&(n=this[e]),i??=o.getPropertyOptions(e),!((i.hasChanged??y)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:n},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),!0!==n||void 0!==o)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===s&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,s=this[t];!0!==e||this._$AL.has(t)||void 0===s||this.C(t,void 0,i,s)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[b("elementProperties")]=new Map,w[b("finalized")]=new Map,g?.({ReactiveElement:w}),(p.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,A=e=>e,k=x.trustedTypes,S=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,z=`<${P}>`,O=document,N=()=>O.createComment(""),T=e=>null===e||"object"!=typeof e&&"function"!=typeof e,M=Array.isArray,U="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,D=/>/g,H=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,I=/"/g,q=/^(?:script|style|textarea|title)$/i,B=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),F=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),V=new WeakMap,K=O.createTreeWalker(O,129);function J(e,t){if(!M(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const Z=(e,t)=>{const i=e.length-1,s=[];let n,o=2===t?"<svg>":3===t?"<math>":"",a=j;for(let t=0;t<i;t++){const i=e[t];let r,c,d=-1,l=0;for(;l<i.length&&(a.lastIndex=l,c=a.exec(i),null!==c);)l=a.lastIndex,a===j?"!--"===c[1]?a=R:void 0!==c[1]?a=D:void 0!==c[2]?(q.test(c[2])&&(n=RegExp("</"+c[2],"g")),a=H):void 0!==c[3]&&(a=H):a===H?">"===c[0]?(a=n??j,d=-1):void 0===c[1]?d=-2:(d=a.lastIndex-c[2].length,r=c[1],a=void 0===c[3]?H:'"'===c[3]?I:L):a===I||a===L?a=H:a===R||a===D?a=j:(a=H,n=void 0);const _=a===H&&e[t+1].startsWith("/>")?" ":"";o+=a===j?i+z:d>=0?(s.push(r),i.slice(0,d)+E+i.slice(d)+C+_):i+C+(-2===d?t:_)}return[J(e,o+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]};class G{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,o=0;const a=e.length-1,r=this.parts,[c,d]=Z(e,t);if(this.el=G.createElement(c,i),K.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=K.nextNode())&&r.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(E)){const t=d[o++],i=s.getAttribute(e).split(C),a=/([.?@])?(.*)/.exec(t);r.push({type:1,index:n,name:a[2],strings:i,ctor:"."===a[1]?te:"?"===a[1]?ie:"@"===a[1]?se:ee}),s.removeAttribute(e)}else e.startsWith(C)&&(r.push({type:6,index:n}),s.removeAttribute(e));if(q.test(s.tagName)){const e=s.textContent.split(C),t=e.length-1;if(t>0){s.textContent=k?k.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],N()),K.nextNode(),r.push({type:2,index:++n});s.append(e[t],N())}}}else if(8===s.nodeType)if(s.data===P)r.push({type:2,index:n});else{let e=-1;for(;-1!==(e=s.data.indexOf(C,e+1));)r.push({type:7,index:n}),e+=C.length-1}n++}}static createElement(e,t){const i=O.createElement("template");return i.innerHTML=e,i}}function Q(e,t,i=e,s){if(t===F)return t;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const o=T(t)?void 0:t._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(e),n._$AT(e,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(t=Q(e,n._$AS(e,t.values),n,s)),t}class X{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??O).importNode(t,!0);K.currentNode=s;let n=K.nextNode(),o=0,a=0,r=i[0];for(;void 0!==r;){if(o===r.index){let t;2===r.type?t=new Y(n,n.nextSibling,this,e):1===r.type?t=new r.ctor(n,r.name,r.strings,this,e):6===r.type&&(t=new ne(n,this,e)),this._$AV.push(t),r=i[++a]}o!==r?.index&&(n=K.nextNode(),o++)}return K.currentNode=O,s}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Q(this,e,t),T(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==F&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>M(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==W&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,s="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=G.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new X(s,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=V.get(e.strings);return void 0===t&&V.set(e.strings,t=new G(e)),t}k(e){M(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new Y(this.O(N()),this.O(N()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=A(e).nextSibling;A(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(e,t=this,i,s){const n=this.strings;let o=!1;if(void 0===n)e=Q(this,e,t,0),o=!T(e)||e!==this._$AH&&e!==F,o&&(this._$AH=e);else{const s=e;let a,r;for(e=n[0],a=0;a<n.length-1;a++)r=Q(this,s[i+a],t,a),r===F&&(r=this._$AH[a]),o||=!T(r)||r!==this._$AH[a],r===W?e=W:e!==W&&(e+=(r??"")+n[a+1]),this._$AH[a]=r}o&&!s&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}}class ie extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==W)}}class se extends ee{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=Q(this,e,t,0)??W)===F)return;const i=this._$AH,s=e===W&&i!==W||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==W&&(i===W||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Q(this,e)}}const oe=x.litHtmlPolyfillSupport;oe?.(G,Y),(x.litHtmlVersions??=[]).push("3.3.2");const ae=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class re extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const s=i?.renderBefore??t;let n=s._$litPart$;if(void 0===n){const e=i?.renderBefore??null;s._$litPart$=n=new Y(t.insertBefore(N(),e),e,void 0,i??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}}re._$litElement$=!0,re.finalized=!0,ae.litElementHydrateSupport?.({LitElement:re});const ce=ae.litElementPolyfillSupport;ce?.({LitElement:re}),(ae.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const de=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},le={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:y},_e=(e=le,t,i)=>{const{kind:s,metadata:n}=i;let o=globalThis.litPropertyMetadata.get(n);if(void 0===o&&globalThis.litPropertyMetadata.set(n,o=new Map),"setter"===s&&((e=Object.create(e)).wrapped=!0),o.set(i.name,e),"accessor"===s){const{name:s}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,n,e,!0,i)},init(t){return void 0!==t&&this.C(s,void 0,e,t),t}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];t.call(this,i),this.requestUpdate(s,n,e,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function he(e){return(t,i)=>"object"==typeof i?_e(e,t,i):((e,t,i)=>{const s=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),s?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ue(e){return he({...e,state:!0,attribute:!1})}const pe="petlibro-card",me="petlibro-card-editor",ve=["food_low","food_status","manual_feed","feeding_plan_state","today_feeding_quantity_weight","rotate_food_bowl"],ge=["remaining_filter_days","remaining_water","remaining_water_volume"],be=["rubbish_full_state","waste_bin_full","garbage_warehouse_state","waste_bin_state"],fe={wi_fi_signal_strength:"wifi_rssi",wi_fi_ssid:"wifi_ssid",wi_fi_s_s_i_d:"wifi_ssid",battery_level:"battery_state",battery_ac:"electric_quantity",buttons_lock:"child_lock_switch",remaining_desiccant_days:"remaining_desiccant",feeding_plan:"feeding_plan_state",display_value:"display_selection",todays_total_eating_time:"today_eating_time",camera_resolution:"resolution",night_vision_mode:"night_vision",video_recording_enabled:"enable_video_record",video_recording_switch:"video_record_switch",video_recording_mode:"video_record_mode",feeding_begins:"next_feeding_time",feeding_ends:"next_feeding_end_time",manually_open_close_lid:"manual_feed_now",remaining_water_volume:"remaining_water",todays_water_consumption:"today_drinking_amount",total_water_used_today:"today_drinking_amount",yesterdays_water_consumption:"yesterday_drinking_amount",todays_total_drinking_time:"today_drinking_time",todays_average_drinking_time:"today_avg_time",today_drinking_times:"today_drinking_count",yesterday_drinking_times:"yesterday_drinking_count",current_weight_percent:"weight_percent",water_time_duration:"use_water_duration",tank_capacity:"tank_total_ml",alert_message:"exception_message",power_source:"power_state",human_detection_sensitivity:"human_sensitivity_level",battery_status:"battery_charge_state",battery8_hour_supply:"battery_supply_8_hours",litter_level:"weight_percent",litter_weight:"weight",cleanliness_state:"clean_state",waste_bin_state:"garbage_warehouse_state",mat_replacement_days:"remaining_mat_days",filter_replacement_days:"remaining_replacement_days",food_dispenser:"food_dispenser_state",food_status:"food_low",today_s_feeding_schedule:"feeding_plan_state",wi_fi:"online",sleep_mode:"whether_in_sleep_mode",lid_status:"door_blocked",lid:"door_state",indicator:"light_switch",sound_status:"sound_switch",food_outlet:"food_outlet_state",device_error:"device_stopped_working",device_fault:"device_stopped_working",door_error:"barn_door_error",deodorization_active:"deodorization_state_on",display_status:"display_switch",waste_bin_full:"rubbish_full_state",waste_bin_installed:"rubbish_inplace_state",water_dispensing_state:"water_state",vacuum_active:"vacuum_state",door:"door_open",run_air_purifier:"trigger_vacuum",open_door:"trigger_open_door",close_door:"trigger_close_door",level_litter:"trigger_level_litter",empty_waste_bin:"trigger_empty_waste",start_clean_cycle:"trigger_clean",stop_current_action:"trigger_stop_action",manually_open_lid:"manual_lid_open",turn_on_sleep_mode:"sleep_on",turn_off_sleep_mode:"sleep_off",turn_on_sound:"sound_on",turn_off_sound:"sound_off",turn_on_indicator:"light_on",turn_off_indicator:"light_off",turn_on_display:"display_on",turn_off_display:"display_off",desiccant_replaced:"desiccant_reset",reposition_the_schedule:"reposition_schedule",enable_selected_plan:"feeding_plan_enable",disable_selected_plan:"feeding_plan_disable",delete_selected_plan:"feeding_plan_delete",skip_selected_plan_today:"feeding_plan_skip_today",un_skip_selected_plan_today:"feeding_plan_unskip_today",enable_today_s_feeding_schedule:"feeding_plan_today_enable_all",disable_today_s_feeding_schedule:"feeding_plan_today_disable_all",enable_feeding_schedule:"enable_feeding_plan",disable_feeding_schedule:"disable_feeding_plan",reset_cleaning_timer:"reset_cleaning",reset_filter_timer:"reset_filter",reset_mat_timer:"reset_mat",light:"light_switch",sound:"sound_switch",deodorization:"deodorization_mode_switch",after_use_deodorization:"after_deodorization_switch",auto_clean_in_sleep_mode:"enable_auto_clean_in_sleep_mode",deodorize_in_sleep_mode:"enable_deodorization_in_sleep_mode",icon_to_display:"display_icon",auto_clean_delay:"auto_delay_sec",post_use_deodorization_duration:"duration_after_deodorization",text_on_display:"display_text"},ye=["today_feeding_quantity_weight","today_feeding_quantity_volume","last_feed_quantity_weight","last_feed_quantity_volume","next_feed_quantity_weight","next_feed_quantity_volume","enable_low_battery_notice","today_feeding_times","feeding_plan_state","remaining_desiccant","manual_feed_quantity","electric_quantity","battery_state","last_feed_time","next_feed_time","child_lock_switch","whether_in_sleep_mode","food_dispenser_state","food_outlet_state","today_eating_times","today_eating_time","display_selection","manual_feed","manual_lid_open","enable_feeding_plan","disable_feeding_plan","feeding_plan_enable","feeding_plan_disable","feeding_plan_delete","feeding_plan_skip_today","feeding_plan_unskip_today","feeding_plan_today_enable_all","feeding_plan_today_disable_all","feeding_plan_select","feeding_plan_today_select","feeding_schedule","desiccant_reset","desiccant_frequency","desiccant_cycle","light_on","light_off","light_switch","sound_on","sound_off","sound_switch","sound_level","display_on","display_off","display_switch","display_text","display_icon","sleep_on","sleep_off","food_low","door_state","door_blocked","vacuum_state","wifi_ssid","wifi_rssi","online","wi_fi","resolution","night_vision","enable_video_record","video_record_switch","video_record_mode","pump_air_state","ring_bell","rotate_food_bowl","reposition_schedule","next_feeding_day","next_feeding_time","next_feeding_end_time","manual_feed_now","manual_feed_quantity_cups","lid_close_time","lid_mode","lid_speed","temperature","plate_position","remaining_cleaning_days","remaining_filter_days","remaining_water","remaining_water_ml","weight_percent","use_water_interval","use_water_duration","weight_state","tank_total_ml","exception_message","volume_level","water_state","water_interval","water_dispensing_duration","water_dispensing_mode","water_low_threshold","water_sensing_delay","cleaning_cycle","cleaning_reset","filter_cycle","filter_reset","device_stopped_working","today_drinking_amount","yesterday_drinking_amount","today_drinking_time","today_avg_time","today_drinking_count","yesterday_drinking_count","battery_charge_state","battery_supply_8_hours","power_state","radar_sensing_level","radar_sensing_threshold","radar_gain","human_sensitivity_level","remaining_replacement_days","remaining_mat_days","filter_state","clean_state","mat_state","vacuum_mode","throw_mode","deodorization_mode","deodorization_mode_switch","deodorization_state_on","garbage_warehouse_state","running_state","clean_mode","volume","weight","rubbish_full_state","rubbish_inplace_state","door_open","barn_door_error","trigger_clean","trigger_empty_waste","trigger_level_litter","trigger_stop_action","trigger_open_door","trigger_close_door","trigger_vacuum","today_potty_times","today_potty_duration","after_deodorization_switch","avoid_repeat_clean","enable_auto_clean_in_sleep_mode","enable_deodorization_in_sleep_mode","auto_delay_sec","duration_after_deodorization","reset_cleaning","reset_filter","reset_mat",...Object.keys(fe)].sort((e,t)=>t.length-e.length),$e=a`
  :host {
    display: block;
  }

  ha-card {
    padding: 16px;
    overflow: hidden;
  }

  /* Header: image + name + status */
  .card-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }

  .device-image {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    object-fit: contain;
    background: var(--secondary-background-color, #f5f5f5);
    flex-shrink: 0;
  }

  .device-image-placeholder {
    width: 48px;
    height: 48px;
    border-radius: 8px;
    background: var(--secondary-background-color, #f5f5f5);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: var(--secondary-text-color);
  }

  .header-info {
    flex: 1;
    min-width: 0;
  }

  .device-name {
    font-size: 16px;
    font-weight: 500;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .device-model {
    font-size: 12px;
    color: var(--secondary-text-color);
  }

  /* Status badge */
  .status-badge {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 12px;
    flex-shrink: 0;
  }

  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  .status-dot.online {
    background-color: var(--success-color, #4caf50);
  }

  .status-dot.offline {
    background-color: var(--error-color, #f44336);
  }

  .status-text {
    color: var(--secondary-text-color);
  }

  /* Metrics grid */
  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 8px;
    margin-bottom: 16px;
  }

  .metric-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    border-radius: 8px;
    background: var(--secondary-background-color, #f5f5f5);
  }

  .metric-item.alert {
    background: color-mix(in srgb, var(--error-color, #f44336) 10%, transparent);
  }

  .metric-icon {
    --mdc-icon-size: 20px;
    color: var(--state-icon-color, #757575);
    flex-shrink: 0;
  }

  .metric-item.alert .metric-icon {
    color: var(--error-color, #f44336);
  }

  .metric-content {
    flex: 1;
    min-width: 0;
  }

  .metric-label {
    font-size: 11px;
    color: var(--secondary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .metric-value {
    font-size: 14px;
    font-weight: 500;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  /* Gauge bar */
  .gauge-bar {
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background: var(--divider-color, #e0e0e0);
    margin-top: 4px;
    overflow: hidden;
  }

  .gauge-fill {
    height: 100%;
    border-radius: 2px;
    background: var(--primary-color, #03a9f4);
    transition: width 0.3s ease;
  }

  .gauge-fill.warning {
    background: var(--warning-color, #ff9800);
  }

  .gauge-fill.error {
    background: var(--error-color, #f44336);
  }

  /* Controls row */
  .controls-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
  }

  .control-button {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 8px 12px;
    border-radius: 8px;
    border: none;
    background: var(--primary-color, #03a9f4);
    color: var(--text-primary-color, #fff);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: opacity 0.2s;
    font-family: inherit;
  }

  .control-button:hover {
    opacity: 0.85;
  }

  .control-button:active {
    opacity: 0.7;
  }

  .control-button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .control-button.secondary {
    background: var(--secondary-background-color, #f5f5f5);
    color: var(--primary-text-color);
  }

  .control-button.active {
    background: var(--primary-color, #03a9f4);
    color: var(--text-primary-color, #fff);
  }

  .control-button ha-icon {
    --mdc-icon-size: 18px;
  }

  /* Unavailable state */
  .unavailable {
    text-align: center;
    padding: 24px;
    color: var(--secondary-text-color);
  }

  .unavailable ha-icon {
    --mdc-icon-size: 48px;
    margin-bottom: 8px;
    display: block;
  }

  /* Battery indicator */
  .battery-indicator {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .battery-indicator.low {
    color: var(--error-color, #f44336);
  }

  .battery-indicator.medium {
    color: var(--warning-color, #ff9800);
  }

  .battery-indicator.good {
    color: var(--success-color, #4caf50);
  }

  /* Settings section */
  .settings-section {
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid var(--divider-color, #e0e0e0);
  }

  .settings-section-title {
    font-size: 11px;
    font-weight: 500;
    color: var(--secondary-text-color);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 8px;
  }

  .settings-grid {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .setting-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 6px 8px;
    border-radius: 8px;
    background: var(--secondary-background-color, #f5f5f5);
  }

  .setting-label {
    font-size: 13px;
    color: var(--primary-text-color);
    flex-shrink: 0;
  }

  .setting-control {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .setting-control select {
    padding: 4px 8px;
    border-radius: 6px;
    border: 1px solid var(--divider-color, #e0e0e0);
    background: var(--card-background-color, #fff);
    color: var(--primary-text-color);
    font-size: 13px;
    font-family: inherit;
    cursor: pointer;
  }

  .setting-control select:focus {
    outline: none;
    border-color: var(--primary-color, #03a9f4);
  }

  .number-control {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .number-control .value {
    font-size: 13px;
    font-weight: 500;
    color: var(--primary-text-color);
    min-width: 40px;
    text-align: center;
  }

  .number-btn {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: none;
    background: var(--primary-color, #03a9f4);
    color: var(--text-primary-color, #fff);
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    line-height: 1;
  }

  .number-btn:hover {
    opacity: 0.85;
  }

  .number-btn:active {
    opacity: 0.7;
  }
`,we={sensor:"sensors",binary_sensor:"binary_sensors",button:"buttons",switch:"switches",number:"numbers",select:"selects",date:"dates",image:"images",update:"updates"};function xe(e){const t=e.indexOf(".");if(t<0)return;const i=e.substring(t+1);for(const e of ye)if(i.endsWith(e)){const t=i.substring(0,i.length-e.length);if(""===t||t.endsWith("_"))return fe[e]??e}}function Ae(e,t){if(e.entities)for(const[i,s]of Object.entries(e.entities))if(s.device_id===t)return i}function ke(e,t){if(!t)return;const i=e.states[t]?.state;return"unavailable"!==i&&"unknown"!==i?i:void 0}function Se(e,t){const i=ke(e,t);if(void 0===i)return;const s=Number(i);return isNaN(s)?void 0:s}function Ee(e,t){if(!t)return!1;const i=e.states[t]?.state;return"on"===i||"connected"===i||"true"===i||"True"===i}function Ce(e,t){const i=ke(e,t);if(i)try{const e=new Date(i);return isNaN(e.getTime())?i:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}catch{return i}}console.info("%c PETLIBRO-CARD %c v0.5.0 ","color: white; background: #3498db; font-weight: bold;","color: #3498db; background: white; font-weight: bold;"),window.customCards=window.customCards||[],window.customCards.push({type:pe,name:"Petlibro Card",description:"Auto-detecting card for PetLibro feeders, fountains, and litter boxes",preview:!0});let Pe=class extends re{static{this.styles=$e}static async getConfigElement(){return await Promise.resolve().then(function(){return Oe}),document.createElement(me)}static getStubConfig(){return{device_id:""}}setConfig(e){if(!e.device_id&&!e.entity)throw new Error("Please select a PetLibro device");this._config={show_controls:!0,...e}}getCardSize(){return 4}shouldUpdate(e){if(e.has("_config"))return!0;if(!e.has("hass")||!this._entities)return!0;const t=e.get("hass");if(!t)return!0;return this._getAllEntityIds().some(e=>t.states[e]!==this.hass.states[e])}willUpdate(e){var t,i;if(this.hass&&this._config&&(e.has("hass")||e.has("_config"))){let e;this._config.device_id?e=this._config.device_id:this._config.entity&&(t=this.hass,i=this._config.entity,e=t.entities?.[i]?.device_id??void 0),e&&e!==this._deviceId&&(this._deviceId=e,this._entities=function(e,t){const i={sensors:{},binary_sensors:{},buttons:{},switches:{},numbers:{},selects:{},dates:{},images:{},updates:{}};if(!e.entities)return i;for(const[s,n]of Object.entries(e.entities)){if(n.device_id!==t)continue;const e=s.substring(0,s.indexOf(".")),o=we[e];if(!o)continue;const a=xe(s);a?i[o][a]=s:console.debug(`[petlibro-card] Unrecognized entity suffix: ${s}`)}return i}(this.hass,e),this._deviceType=function(e){const t=new Set([...Object.keys(e.sensors),...Object.keys(e.binary_sensors),...Object.keys(e.buttons),...Object.keys(e.switches)]);return be.some(e=>t.has(e))?"litter_box":ve.some(e=>t.has(e))?"feeder":ge.some(e=>t.has(e))?"fountain":"feeder"}(this._entities))}}render(){if(!this._config||!this.hass)return B``;if(!this._deviceId||!this._entities||!this._deviceType)return B`
        <ha-card>
          <div class="unavailable">
            <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
            <div>Entity not found or device not yet available</div>
          </div>
        </ha-card>
      `;const e=this._config.entity||Ae(this.hass,this._deviceId)||"",t=this.hass.states[e]?.state;return"unavailable"===t?B`
        <ha-card>
          ${this._renderHeader()}
          <div class="unavailable">
            <ha-icon icon="mdi:wifi-off"></ha-icon>
            <div>Device unavailable</div>
          </div>
        </ha-card>
      `:B`
      <ha-card>
        ${this._renderHeader()}
        ${this._renderDeviceContent()}
      </ha-card>
    `}_renderHeader(){const e=this._config.name||(t=this.hass,i=this._deviceId,t.devices?.[i]?.name??void 0)||"PetLibro Device";var t,i;const s=this._config.entity||Ae(this.hass,this._deviceId)||"",n=function(e,t,i){const s=e.states[t]?.attributes?.entity_picture;if(s)return s;if(e.entities)for(const[t,s]of Object.entries(e.entities)){if(s.device_id!==i)continue;const n=e.states[t]?.attributes?.entity_picture;if(n)return n}return e.devices?.[i]?.configuration_url??void 0}(this.hass,s,this._deviceId),o=Ee(this.hass,this._entities.binary_sensors.online??this._entities.binary_sensors.wi_fi),a=this.hass.devices?.[this._deviceId]?.model;return B`
      <div class="card-header">
        ${n?B`<img class="device-image" src="${n}" alt="${e}" />`:B`
            <div class="device-image-placeholder">
              <ha-icon icon="${this._getDeviceTypeIcon()}"></ha-icon>
            </div>
          `}
        <div class="header-info">
          <div class="device-name">${e}</div>
          ${a?B`<div class="device-model">${a}</div>`:W}
        </div>
        <div class="status-badge">
          <div class="status-dot ${o?"online":"offline"}"></div>
          <span class="status-text">${o?"Online":"Offline"}</span>
        </div>
      </div>
    `}_renderDeviceContent(){if(!this._entities)return W;switch(this._deviceType){case"feeder":return function(e,t,i,s,n){const o=Se(e,t.sensors.electric_quantity),a=Ee(e,t.binary_sensors.food_low),r=ke(e,t.sensors.today_feeding_quantity_weight),c=ke(e,t.sensors.today_feeding_times),d=Ce(e,t.sensors.last_feed_time),l=Ce(e,t.sensors.next_feed_time),_=ke(e,t.sensors.next_feed_quantity_weight),h=Ee(e,t.binary_sensors.feeding_plan_state)?"Active":t.binary_sensors.feeding_plan_state?"Inactive":void 0,u=e.states[t.sensors.today_feeding_quantity_weight??""]?.attributes?.unit_of_measurement??"g",p=e.states[t.sensors.next_feed_quantity_weight??""]?.attributes?.unit_of_measurement??"g",m=Ee(e,t.binary_sensors.light_switch),v=ke(e,t.sensors.temperature),g=e.states[t.sensors.temperature??""]?.attributes?.unit_of_measurement??"°F",b=ke(e,t.selects.plate_position),f=ke(e,t.sensors.next_feeding_time),y=ke(e,t.sensors.next_feeding_end_time),$=ke(e,t.sensors.next_feeding_day);return B`
    <div class="metrics-grid">
      ${void 0!==o?B`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="${w=o,w>=90?"mdi:battery":w>=70?"mdi:battery-70":w>=50?"mdi:battery-50":w>=30?"mdi:battery-30":w>=10?"mdi:battery-10":"mdi:battery-alert"}"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Battery</div>
            <div class="metric-value">${Math.round(o)}%</div>
          </div>
        </div>
      `:W}

      <div class="metric-item ${a?"alert":""}">
        <ha-icon class="metric-icon" icon="${a?"mdi:bowl-mix-outline":"mdi:bowl-outline"}"></ha-icon>
        <div class="metric-content">
          <div class="metric-label">Food Status</div>
          <div class="metric-value">${a?"Low":"OK"}</div>
        </div>
      </div>

      ${void 0!==r?B`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:scale"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Fed Today</div>
            <div class="metric-value">${r} ${u}${c?` (${c}x)`:""}</div>
          </div>
        </div>
      `:W}

      ${d?B`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:history"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Last Feed</div>
            <div class="metric-value">${d}</div>
          </div>
        </div>
      `:W}

      ${l?B`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:calendar-arrow-right"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Next Feed</div>
            <div class="metric-value">${l}${_?` (${_} ${p})`:""}</div>
          </div>
        </div>
      `:W}

      ${void 0!==h?B`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:calendar-check"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Feeding Plan</div>
            <div class="metric-value">${h}</div>
          </div>
        </div>
      `:W}

      ${""}

      ${void 0!==v?B`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:thermometer"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Temperature</div>
            <div class="metric-value">${v}${g}</div>
          </div>
        </div>
      `:W}

      ${void 0!==b?B`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:rotate-3d-variant"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Plate Position</div>
            <div class="metric-value">${b}</div>
          </div>
        </div>
      `:W}

      ${void 0!==f?B`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:clock-outline"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Next Feeding</div>
            <div class="metric-value">
              ${$?`${$} `:""}${f}${y?` – ${y}`:""}
            </div>
          </div>
        </div>
      `:W}

    </div>

    <div class="controls-row">
      ${t.buttons.manual_feed?B`
        <button class="control-button" @click=${()=>i(t.buttons.manual_feed)}>
          <ha-icon icon="mdi:food-drumstick"></ha-icon>
          Feed Now
        </button>
      `:W}

      ${""}
      ${t.switches.manual_feed_now?B`
        <button
          class="control-button ${Ee(e,t.switches.manual_feed_now)?"active":""}"
          @click=${()=>s(t.switches.manual_feed_now)}
        >
          <ha-icon icon="mdi:door-open"></ha-icon>
          Open Lid
        </button>
      `:W}

      ${t.buttons.rotate_food_bowl?B`
        <button class="control-button" @click=${()=>i(t.buttons.rotate_food_bowl)}>
          <ha-icon icon="mdi:rotate-3d-variant"></ha-icon>
          Rotate
        </button>
      `:W}

      ${t.buttons.ring_bell?B`
        <button class="control-button" @click=${()=>i(t.buttons.ring_bell)}>
          <ha-icon icon="mdi:bell-ring"></ha-icon>
          Ring
        </button>
      `:W}

      ${t.buttons.light_on||t.buttons.light_off?B`
        <button
          class="control-button ${m?"active":"secondary"}"
          @click=${()=>i(m?t.buttons.light_off:t.buttons.light_on)}
        >
          <ha-icon icon="mdi:lightbulb${m?"":"-outline"}"></ha-icon>
          Light
        </button>
      `:W}
    </div>

    ${t.selects.feeding_plan_select?B`
      <div class="settings-section">
        <div class="settings-section-title">Feeding Schedule</div>
        <div class="settings-grid">
          <div class="setting-row">
            <span class="setting-label">Plan</span>
            <div class="setting-control">
              <select
                @change=${e=>n(t.selects.feeding_plan_select,e.target.value)}
              >
                ${(e.states[t.selects.feeding_plan_select]?.attributes?.options??[]).map(i=>B`
                    <option
                      value=${i}
                      ?selected=${e.states[t.selects.feeding_plan_select]?.state===i}
                    >${i}</option>
                  `)}
              </select>
            </div>
          </div>
        </div>
        <div class="controls-row" style="margin-top: 8px">
          ${t.buttons.feeding_plan_enable?B`
            <button class="control-button" @click=${()=>i(t.buttons.feeding_plan_enable)}>
              <ha-icon icon="mdi:check"></ha-icon>
              Enable
            </button>
          `:W}
          ${t.buttons.feeding_plan_disable?B`
            <button class="control-button secondary" @click=${()=>i(t.buttons.feeding_plan_disable)}>
              <ha-icon icon="mdi:close"></ha-icon>
              Disable
            </button>
          `:W}
          ${t.buttons.feeding_plan_today_enable_all?B`
            <button class="control-button" @click=${()=>i(t.buttons.feeding_plan_today_enable_all)}>
              <ha-icon icon="mdi:calendar-check"></ha-icon>
              Enable All Today
            </button>
          `:W}
          ${t.buttons.feeding_plan_today_disable_all?B`
            <button class="control-button secondary" @click=${()=>i(t.buttons.feeding_plan_today_disable_all)}>
              <ha-icon icon="mdi:calendar-remove"></ha-icon>
              Disable All Today
            </button>
          `:W}
        </div>
      </div>
    `:W}
  `;var w}(this.hass,this._entities,e=>this._handleButtonPress(e),e=>this._handleSwitchToggle(e),(e,t)=>this._handleSelectChange(e,t));case"fountain":return function(e,t,i){const s=Se(e,t.sensors.electric_quantity),n=Se(e,t.sensors.weight_percent),o=ke(e,t.sensors.remaining_water),a=e.states[t.sensors.remaining_water??""]?.attributes?.unit_of_measurement??"mL",r=ke(e,t.sensors.today_drinking_amount),c=e.states[t.sensors.today_drinking_amount??""]?.attributes?.unit_of_measurement??"mL",d=ke(e,t.sensors.remaining_filter_days),l=ke(e,t.sensors.remaining_cleaning_days),_=Ee(e,t.binary_sensors.light_switch),h=void 0!==n?n<=10?"error":n<=25?"warning":"":"";return B`
    <div class="metrics-grid">
      ${void 0!==s?B`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="${u=s,u>=90?"mdi:battery":u>=70?"mdi:battery-70":u>=50?"mdi:battery-50":u>=30?"mdi:battery-30":u>=10?"mdi:battery-10":"mdi:battery-alert"}"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Battery</div>
            <div class="metric-value">${Math.round(s)}%</div>
          </div>
        </div>
      `:W}

      ${void 0!==n?B`
        <div class="metric-item ${n<=10?"alert":""}">
          <ha-icon class="metric-icon" icon="mdi:water-percent"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Water Level</div>
            <div class="metric-value">${Math.round(n)}%</div>
            <div class="gauge-bar">
              <div class="gauge-fill ${h}" style="width: ${Math.min(100,n)}%"></div>
            </div>
          </div>
        </div>
      `:W}

      ${void 0!==o?B`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:water"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Remaining Water</div>
            <div class="metric-value">${Math.round(Number(o))} ${a}</div>
          </div>
        </div>
      `:W}

      ${void 0!==r?B`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:cup-water"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Today's Drinking</div>
            <div class="metric-value">${r} ${c}</div>
          </div>
        </div>
      `:W}

      ${void 0!==d?B`
        <div class="metric-item ${Number(d)<=3?"alert":""}">
          <ha-icon class="metric-icon" icon="mdi:air-filter"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Filter</div>
            <div class="metric-value">${d} days</div>
          </div>
        </div>
      `:W}

      ${void 0!==l?B`
        <div class="metric-item ${Number(l)<=1?"alert":""}">
          <ha-icon class="metric-icon" icon="mdi:broom"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Cleaning</div>
            <div class="metric-value">${l} days</div>
          </div>
        </div>
      `:W}
    </div>

    <div class="controls-row">
      ${t.buttons.light_on||t.buttons.light_off?B`
        <button
          class="control-button ${_?"active":"secondary"}"
          @click=${()=>i(_?t.buttons.light_off:t.buttons.light_on)}
        >
          <ha-icon icon="mdi:lightbulb${_?"":"-outline"}"></ha-icon>
          Light
        </button>
      `:W}

      ${t.buttons.filter_reset?B`
        <button class="control-button secondary" @click=${()=>i(t.buttons.filter_reset)}>
          <ha-icon icon="mdi:air-filter"></ha-icon>
          Reset Filter
        </button>
      `:W}

      ${t.buttons.cleaning_reset?B`
        <button class="control-button secondary" @click=${()=>i(t.buttons.cleaning_reset)}>
          <ha-icon icon="mdi:broom"></ha-icon>
          Reset Cleaning
        </button>
      `:W}
    </div>
  `;var u}(this.hass,this._entities,e=>this._handleButtonPress(e));case"litter_box":return function(e,t,i,s,n,o){const a=Se(e,t.sensors.electric_quantity),r=Se(e,t.sensors.weight_percent),c=Ee(e,t.binary_sensors.rubbish_full_state),d=ke(e,t.sensors.running_state),l=ke(e,t.sensors.remaining_cleaning_days),_=ke(e,t.sensors.deodorization_mode),h=Ee(e,t.switches.light_switch),u=Ee(e,t.switches.sound_switch),p=ke(e,t.sensors.today_potty_times),m=ke(e,t.sensors.today_potty_duration),v=void 0!==r?r<=15?"error":r<=30?"warning":"":"";return B`
    <div class="metrics-grid">
      ${void 0!==a?B`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="${g=a,g>=90?"mdi:battery":g>=70?"mdi:battery-70":g>=50?"mdi:battery-50":g>=30?"mdi:battery-30":g>=10?"mdi:battery-10":"mdi:battery-alert"}"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Battery</div>
            <div class="metric-value">${Math.round(a)}%</div>
          </div>
        </div>
      `:W}

      ${void 0!==r?B`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:gauge"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Litter Level</div>
            <div class="metric-value">${Math.round(r)}%</div>
            <div class="gauge-bar">
              <div class="gauge-fill ${v}" style="width: ${Math.min(100,r)}%"></div>
            </div>
          </div>
        </div>
      `:W}

      <div class="metric-item ${c?"alert":""}">
        <ha-icon class="metric-icon" icon="${c?"mdi:delete-alert":"mdi:delete-variant"}"></ha-icon>
        <div class="metric-content">
          <div class="metric-label">Waste Bin</div>
          <div class="metric-value">${c?"Full":"OK"}</div>
        </div>
      </div>

      ${void 0!==d?B`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:state-machine"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Status</div>
            <div class="metric-value">${d}</div>
          </div>
        </div>
      `:W}

      ${void 0!==l?B`
        <div class="metric-item ${Number(l)<=1?"alert":""}">
          <ha-icon class="metric-icon" icon="mdi:broom"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Cleaning Due</div>
            <div class="metric-value">${l} days</div>
          </div>
        </div>
      `:W}

      ${void 0!==p?B`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:counter"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Potty Today</div>
            <div class="metric-value">${p}x${m?` (${m}s)`:""}</div>
          </div>
        </div>
      `:W}

      ${void 0!==_?B`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:air-purifier"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Deodorization</div>
            <div class="metric-value">${_}</div>
          </div>
        </div>
      `:W}
    </div>

    <div class="controls-row">
      ${t.buttons.trigger_clean?B`
        <button class="control-button" @click=${()=>i(t.buttons.trigger_clean)}>
          <ha-icon icon="mdi:broom"></ha-icon>
          Clean
        </button>
      `:W}

      ${t.buttons.trigger_stop_action?B`
        <button class="control-button secondary" @click=${()=>i(t.buttons.trigger_stop_action)}>
          <ha-icon icon="mdi:stop"></ha-icon>
          Stop
        </button>
      `:W}

      ${t.switches.light_switch?B`
        <button
          class="control-button ${h?"active":"secondary"}"
          @click=${()=>s(t.switches.light_switch)}
        >
          <ha-icon icon="mdi:lightbulb${h?"":"-outline"}"></ha-icon>
          Light
        </button>
      `:W}

      ${t.switches.sound_switch?B`
        <button
          class="control-button ${u?"active":"secondary"}"
          @click=${()=>s(t.switches.sound_switch)}
        >
          <ha-icon icon="mdi:volume-${u?"high":"off"}"></ha-icon>
          Sound
        </button>
      `:W}

      ${t.switches.after_deodorization_switch?B`
        <button
          class="control-button ${Ee(e,t.switches.after_deodorization_switch)?"active":"secondary"}"
          @click=${()=>s(t.switches.after_deodorization_switch)}
        >
          <ha-icon icon="mdi:air-purifier"></ha-icon>
          Auto Deodorize
        </button>
      `:W}

      ${t.switches.avoid_repeat_clean?B`
        <button
          class="control-button ${Ee(e,t.switches.avoid_repeat_clean)?"active":"secondary"}"
          @click=${()=>s(t.switches.avoid_repeat_clean)}
        >
          <ha-icon icon="mdi:repeat-off"></ha-icon>
          No Repeat
        </button>
      `:W}

      ${t.switches.enable_auto_clean_in_sleep_mode?B`
        <button
          class="control-button ${Ee(e,t.switches.enable_auto_clean_in_sleep_mode)?"active":"secondary"}"
          @click=${()=>s(t.switches.enable_auto_clean_in_sleep_mode)}
        >
          <ha-icon icon="mdi:broom"></ha-icon>
          Sleep Clean
        </button>
      `:W}

      ${t.switches.enable_deodorization_in_sleep_mode?B`
        <button
          class="control-button ${Ee(e,t.switches.enable_deodorization_in_sleep_mode)?"active":"secondary"}"
          @click=${()=>s(t.switches.enable_deodorization_in_sleep_mode)}
        >
          <ha-icon icon="mdi:weather-windy"></ha-icon>
          Sleep Deodorize
        </button>
      `:W}

      ${t.buttons.reset_filter?B`
        <button class="control-button secondary" @click=${()=>i(t.buttons.reset_filter)}>
          <ha-icon icon="mdi:air-filter"></ha-icon>
          Reset Filter
        </button>
      `:W}

      ${t.buttons.reset_cleaning?B`
        <button class="control-button secondary" @click=${()=>i(t.buttons.reset_cleaning)}>
          <ha-icon icon="mdi:broom"></ha-icon>
          Reset Clean
        </button>
      `:W}

      ${t.buttons.reset_mat?B`
        <button class="control-button secondary" @click=${()=>i(t.buttons.reset_mat)}>
          <ha-icon icon="mdi:rug"></ha-icon>
          Reset Mat
        </button>
      `:W}
    </div>

    ${t.selects.clean_mode||t.selects.deodorization_wind_speed||t.numbers.volume||t.numbers.auto_delay_sec||t.numbers.duration_after_deodorization?B`
      <div class="settings-section">
        <div class="settings-section-title">Settings</div>
        <div class="settings-grid">
          ${t.selects.clean_mode?B`
            <div class="setting-row">
              <span class="setting-label">Clean Mode</span>
              <div class="setting-control">
                <select
                  @change=${e=>n(t.selects.clean_mode,e.target.value)}
                >
                  ${(e.states[t.selects.clean_mode]?.attributes?.options??[]).map(i=>B`
                      <option value=${i} ?selected=${e.states[t.selects.clean_mode]?.state===i}>${i}</option>
                    `)}
                </select>
              </div>
            </div>
          `:W}

          ${t.selects.deodorization_wind_speed?B`
            <div class="setting-row">
              <span class="setting-label">Wind Speed</span>
              <div class="setting-control">
                <select
                  @change=${e=>n(t.selects.deodorization_wind_speed,e.target.value)}
                >
                  ${(e.states[t.selects.deodorization_wind_speed]?.attributes?.options??[]).map(i=>B`
                      <option value=${i} ?selected=${e.states[t.selects.deodorization_wind_speed]?.state===i}>${i}</option>
                    `)}
                </select>
              </div>
            </div>
          `:W}

          ${t.numbers.volume?(()=>{const i=e.states[t.numbers.volume]?.attributes??{},s=Number(e.states[t.numbers.volume]?.state??0),n=Number(i.min??0),a=Number(i.max??100),r=Number(i.step??10);return B`
              <div class="setting-row">
                <span class="setting-label">Volume</span>
                <div class="number-control">
                  <button class="number-btn" @click=${()=>o(t.numbers.volume,Math.max(n,s-r))}>−</button>
                  <span class="value">${s}%</span>
                  <button class="number-btn" @click=${()=>o(t.numbers.volume,Math.min(a,s+r))}>+</button>
                </div>
              </div>
            `})():W}

          ${t.numbers.auto_delay_sec?(()=>{const i=e.states[t.numbers.auto_delay_sec]?.attributes??{},s=Number(e.states[t.numbers.auto_delay_sec]?.state??0),n=Number(i.min??10),a=Number(i.max??600),r=Number(i.step??10);return B`
              <div class="setting-row">
                <span class="setting-label">Clean Delay</span>
                <div class="number-control">
                  <button class="number-btn" @click=${()=>o(t.numbers.auto_delay_sec,Math.max(n,s-r))}>−</button>
                  <span class="value">${s}s</span>
                  <button class="number-btn" @click=${()=>o(t.numbers.auto_delay_sec,Math.min(a,s+r))}>+</button>
                </div>
              </div>
            `})():W}

          ${t.numbers.duration_after_deodorization?(()=>{const i=e.states[t.numbers.duration_after_deodorization]?.attributes??{},s=Number(e.states[t.numbers.duration_after_deodorization]?.state??0),n=Number(i.min??1),a=Number(i.max??30),r=Number(i.step??1);return B`
              <div class="setting-row">
                <span class="setting-label">Deodorize Time</span>
                <div class="number-control">
                  <button class="number-btn" @click=${()=>o(t.numbers.duration_after_deodorization,Math.max(n,s-r))}>−</button>
                  <span class="value">${s}m</span>
                  <button class="number-btn" @click=${()=>o(t.numbers.duration_after_deodorization,Math.min(a,s+r))}>+</button>
                </div>
              </div>
            `})():W}
        </div>
      </div>
    `:W}
  `;var g}(this.hass,this._entities,e=>this._handleButtonPress(e),e=>this._handleSwitchToggle(e),(e,t)=>this._handleSelectChange(e,t),(e,t)=>this._handleNumberChange(e,t));default:return B`<div class="unavailable">Unknown device type</div>`}}_handleButtonPress(e){this.hass.callService("button","press",{entity_id:e})}_handleSwitchToggle(e){this.hass.callService("switch","toggle",{entity_id:e})}_handleSelectChange(e,t){this.hass.callService("select","select_option",{entity_id:e,option:t})}_handleNumberChange(e,t){this.hass.callService("number","set_value",{entity_id:e,value:t})}_getDeviceTypeIcon(){switch(this._deviceType){case"feeder":return"mdi:food-drumstick";case"fountain":return"mdi:water";case"litter_box":return"mdi:cat";default:return"mdi:paw"}}_getAllEntityIds(){return this._entities?[...Object.values(this._entities.sensors),...Object.values(this._entities.binary_sensors),...Object.values(this._entities.buttons),...Object.values(this._entities.switches),...Object.values(this._entities.numbers),...Object.values(this._entities.selects),...Object.values(this._entities.dates),...Object.values(this._entities.images),...Object.values(this._entities.updates)]:[]}};e([he({attribute:!1})],Pe.prototype,"hass",void 0),e([ue()],Pe.prototype,"_config",void 0),e([ue()],Pe.prototype,"_deviceId",void 0),e([ue()],Pe.prototype,"_deviceType",void 0),e([ue()],Pe.prototype,"_entities",void 0),Pe=e([de(pe)],Pe);let ze=class extends re{static{this.styles=a`
    .editor-row {
      margin-bottom: 16px;
    }
    .editor-row label {
      display: block;
      font-weight: 500;
      margin-bottom: 4px;
      color: var(--primary-text-color);
    }
    .editor-row select,
    .editor-row input[type="text"] {
      width: 100%;
      padding: 8px 12px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 14px;
      box-sizing: border-box;
      -webkit-appearance: none;
      appearance: none;
    }
    .editor-row select {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23888' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 12px center;
      padding-right: 32px;
      cursor: pointer;
    }
    .editor-row .checkbox-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .no-devices {
      font-size: 13px;
      color: var(--error-color, #db4437);
      margin-top: 4px;
    }
  `}setConfig(e){this._config=e}_getPetlibroDevices(){if(!this.hass?.entities||!this.hass?.devices)return[];const e=new Set;for(const t of Object.values(this.hass.entities)){const i=t;"petlibro"===i.platform&&i.device_id&&e.add(i.device_id)}const t=[];for(const i of e){const e=this.hass.devices[i],s=e?.name||e?.name_by_user||`Device ${i.slice(0,8)}`;t.push({id:i,name:s})}return t.sort((e,t)=>e.name.localeCompare(t.name))}render(){if(!this.hass||!this._config)return B``;const e=this._getPetlibroDevices();return B`
      <div class="editor-row">
        <label>PetLibro Device</label>
        <select @change=${this._deviceChanged}>
          <option value="" ?selected=${!this._config.device_id}>
            — Select a device —
          </option>
          ${e.map(e=>B`
              <option value=${e.id} ?selected=${this._config.device_id===e.id}>
                ${e.name}
              </option>
            `)}
        </select>
        ${0===e.length?B`<div class="no-devices">
              No PetLibro devices found. Make sure the PetLibro integration is installed and configured.
            </div>`:W}
      </div>
      <div class="editor-row">
        <label>Name (optional override)</label>
        <input
          type="text"
          .value=${this._config.name||""}
          @input=${this._nameChanged}
          placeholder="Auto-detected from device"
        />
      </div>
      <div class="editor-row">
        <div class="checkbox-row">
          <input
            type="checkbox"
            id="show-controls"
            .checked=${!1!==this._config.show_controls}
            @change=${this._showControlsChanged}
          />
          <label for="show-controls">Show controls</label>
        </div>
      </div>
    `}_deviceChanged(e){const t=e.target.value;if(!t)return;const i={type:this._config.type,device_id:t,show_controls:this._config.show_controls};this._config.name&&(i.name=this._config.name),this._updateConfig(i)}_nameChanged(e){const t=e.target.value||void 0;this._updateConfig({...this._config,name:t})}_showControlsChanged(e){const t=e.target.checked;this._updateConfig({...this._config,show_controls:t})}_updateConfig(e){this._config=e;const t=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}};e([he({attribute:!1})],ze.prototype,"hass",void 0),e([ue()],ze.prototype,"_config",void 0),ze=e([de(me)],ze);var Oe=Object.freeze({__proto__:null,get PetlibroCardEditor(){return ze}});export{Pe as PetlibroCard};
