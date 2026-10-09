function e(e,t,i,o){var s,r=arguments.length,n=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(r<3?s(n):r>3?s(t,i,n):s(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),s=new WeakMap;let r=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(t,e))}return e}toString(){return this.cssText}};const n=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new r(i,e,o)},a=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new r("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:l,defineProperty:d,getOwnPropertyDescriptor:c,getOwnPropertyNames:p,getOwnPropertySymbols:_,getPrototypeOf:h}=Object,u=globalThis,g=u.trustedTypes,b=g?g.emptyScript:"",f=u.reactiveElementPolyfillSupport,m=(e,t)=>e,v={toAttribute(e,t){switch(t){case Boolean:e=e?b:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},y=(e,t)=>!l(e,t),$={attribute:!0,type:String,converter:v,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),u.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&d(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:s}=c(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const r=o?.call(this);s?.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$}static _$Ei(){if(this.hasOwnProperty(m("elementProperties")))return;const e=h(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(m("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(m("properties"))){const e=this.properties,t=[...p(e),..._(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{if(i)e.adoptedStyleSheets=o.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of o){const o=document.createElement("style"),s=t.litNonce;void 0!==s&&o.setAttribute("nonce",s),o.textContent=i.cssText,e.appendChild(o)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==i.converter?.toAttribute?i.converter:v).toAttribute(t,i.type);this._$Em=e,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:v;this._$Em=o;const r=s.fromAttribute(t,e.type);this[o]=r??this._$Ej?.get(o)??r,this._$Em=null}}requestUpdate(e,t,i,o=!1,s){if(void 0!==e){const r=this.constructor;if(!1===o&&(s=this[e]),i??=r.getPropertyOptions(e),!((i.hasChanged??y)(s,t)||i.useDefault&&i.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:s},r){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==s||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,i,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[m("elementProperties")]=new Map,w[m("finalized")]=new Map,f?.({ReactiveElement:w}),(u.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,k=e=>e,A=x.trustedTypes,S=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,z="?"+C,P=`<${z}>`,O=document,N=()=>O.createComment(""),T=e=>null===e||"object"!=typeof e&&"function"!=typeof e,M=Array.isArray,U="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,R=/>/g,H=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,L=/"/g,B=/^(?:script|style|textarea|title)$/i,q=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),W=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),V=new WeakMap,K=O.createTreeWalker(O,129);function G(e,t){if(!M(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const Z=(e,t)=>{const i=e.length-1,o=[];let s,r=2===t?"<svg>":3===t?"<math>":"",n=j;for(let t=0;t<i;t++){const i=e[t];let a,l,d=-1,c=0;for(;c<i.length&&(n.lastIndex=c,l=n.exec(i),null!==l);)c=n.lastIndex,n===j?"!--"===l[1]?n=D:void 0!==l[1]?n=R:void 0!==l[2]?(B.test(l[2])&&(s=RegExp("</"+l[2],"g")),n=H):void 0!==l[3]&&(n=H):n===H?">"===l[0]?(n=s??j,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?H:'"'===l[3]?L:I):n===L||n===I?n=H:n===D||n===R?n=j:(n=H,s=void 0);const p=n===H&&e[t+1].startsWith("/>")?" ":"";r+=n===j?i+P:d>=0?(o.push(a),i.slice(0,d)+E+i.slice(d)+C+p):i+C+(-2===d?t:p)}return[G(e,r+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class J{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let s=0,r=0;const n=e.length-1,a=this.parts,[l,d]=Z(e,t);if(this.el=J.createElement(l,i),K.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=K.nextNode())&&a.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(E)){const t=d[r++],i=o.getAttribute(e).split(C),n=/([.?@])?(.*)/.exec(t);a.push({type:1,index:s,name:n[2],strings:i,ctor:"."===n[1]?te:"?"===n[1]?ie:"@"===n[1]?oe:ee}),o.removeAttribute(e)}else e.startsWith(C)&&(a.push({type:6,index:s}),o.removeAttribute(e));if(B.test(o.tagName)){const e=o.textContent.split(C),t=e.length-1;if(t>0){o.textContent=A?A.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],N()),K.nextNode(),a.push({type:2,index:++s});o.append(e[t],N())}}}else if(8===o.nodeType)if(o.data===z)a.push({type:2,index:s});else{let e=-1;for(;-1!==(e=o.data.indexOf(C,e+1));)a.push({type:7,index:s}),e+=C.length-1}s++}}static createElement(e,t){const i=O.createElement("template");return i.innerHTML=e,i}}function Y(e,t,i=e,o){if(t===W)return t;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const r=T(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(e),s._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(t=Y(e,s._$AS(e,t.values),s,o)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??O).importNode(t,!0);K.currentNode=o;let s=K.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let t;2===a.type?t=new X(s,s.nextSibling,this,e):1===a.type?t=new a.ctor(s,a.name,a.strings,this,e):6===a.type&&(t=new se(s,this,e)),this._$AV.push(t),a=i[++n]}r!==a?.index&&(s=K.nextNode(),r++)}return K.currentNode=O,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class X{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Y(this,e,t),T(e)?e===F||null==e||""===e?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==W&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>M(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==F&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=J.createElement(G(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new Q(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=V.get(e.strings);return void 0===t&&V.set(e.strings,t=new J(e)),t}k(e){M(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const s of e)o===t.length?t.push(i=new X(this.O(N()),this.O(N()),this,this.options)):i=t[o],i._$AI(s),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=k(e).nextSibling;k(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,s){this.type=1,this._$AH=F,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(e,t=this,i,o){const s=this.strings;let r=!1;if(void 0===s)e=Y(this,e,t,0),r=!T(e)||e!==this._$AH&&e!==W,r&&(this._$AH=e);else{const o=e;let n,a;for(e=s[0],n=0;n<s.length-1;n++)a=Y(this,o[i+n],t,n),a===W&&(a=this._$AH[n]),r||=!T(a)||a!==this._$AH[n],a===F?e=F:e!==F&&(e+=(a??"")+s[n+1]),this._$AH[n]=a}r&&!o&&this.j(e)}j(e){e===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===F?void 0:e}}class ie extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==F)}}class oe extends ee{constructor(e,t,i,o,s){super(e,t,i,o,s),this.type=5}_$AI(e,t=this){if((e=Y(this,e,t,0)??F)===W)return;const i=this._$AH,o=e===F&&i!==F||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==F&&(i===F||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class se{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Y(this,e)}}const re=x.litHtmlPolyfillSupport;re?.(J,X),(x.litHtmlVersions??=[]).push("3.3.2");const ne=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ae=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let s=o._$litPart$;if(void 0===s){const e=i?.renderBefore??null;o._$litPart$=s=new X(t.insertBefore(N(),e),e,void 0,i??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}};ae._$litElement$=!0,ae.finalized=!0,ne.litElementHydrateSupport?.({LitElement:ae});const le=ne.litElementPolyfillSupport;le?.({LitElement:ae}),(ne.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const de=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},ce={attribute:!0,type:String,converter:v,reflect:!1,hasChanged:y},pe=(e=ce,t,i)=>{const{kind:o,metadata:s}=i;let r=globalThis.litPropertyMetadata.get(s);if(void 0===r&&globalThis.litPropertyMetadata.set(s,r=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),r.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const s=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,s,e,!0,i)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=i;return function(i){const s=this[o];t.call(this,i),this.requestUpdate(o,s,e,!0,i)}}throw Error("Unsupported decorator location: "+o)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _e(e){return(t,i)=>"object"==typeof i?pe(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function he(e){return _e({...e,state:!0,attribute:!1})}const ue="0.9.2",ge="petlibro-card",be="petlibro-card-editor",fe=["pet_sex","breed_name","sterilization","bound_device_nums"],me=["food_low","food_status","manual_feed","today_feeding_schedule","feeding_plan_state","today_feeding_quantity_weight","rotate_food_bowl"],ve=["remaining_filter_days","remaining_water","remaining_water_volume"],ye=["rubbish_full_state","waste_bin_full","garbage_warehouse_state","waste_bin_state"],$e={wi_fi_signal_strength:"wifi_rssi",wi_fi_ssid:"wifi_ssid",wi_fi_s_s_i_d:"wifi_ssid",battery_level:"battery_state",battery_ac:"electric_quantity",buttons_lock:"child_lock_switch",remaining_desiccant_days:"remaining_desiccant",feeding_plan:"feeding_plan_state",display_value:"display_selection",todays_total_eating_time:"today_eating_time",camera_resolution:"resolution",night_vision_mode:"night_vision",video_recording_enabled:"enable_video_record",video_recording_switch:"video_record_switch",video_recording_mode:"video_record_mode",feeding_begins:"next_feeding_time",feeding_ends:"next_feeding_end_time",manually_open_close_lid:"manual_feed_now",remaining_water_volume:"remaining_water",todays_water_consumption:"today_drinking_amount",total_water_used_today:"today_drinking_amount",yesterdays_water_consumption:"yesterday_drinking_amount",todays_total_drinking_time:"today_drinking_time",todays_average_drinking_time:"today_avg_time",today_drinking_times:"today_drinking_count",yesterday_drinking_times:"yesterday_drinking_count",current_weight_percent:"weight_percent",water_time_duration:"use_water_duration",tank_capacity:"tank_total_ml",alert_message:"exception_message",power_source:"power_state",human_detection_sensitivity:"human_sensitivity_level",battery_status:"battery_charge_state",battery8_hour_supply:"battery_supply_8_hours",litter_weight:"weight",cleanliness_state:"clean_state",waste_bin_state:"garbage_warehouse_state",mat_replacement_days:"remaining_mat_days",filter_replacement_days:"remaining_replacement_days",food_dispenser:"food_dispenser_state",food_status:"food_low",today_s_feeding_schedule:"feeding_plan_state",wi_fi:"online",sleep_mode:"whether_in_sleep_mode",lid_status:"door_blocked",lid:"door_state",indicator:"light_switch",sound_status:"sound_switch",food_outlet:"food_outlet_state",device_error:"device_stopped_working",device_fault:"device_stopped_working",door_error:"barn_door_error",deodorization_active:"deodorization_state_on",display_status:"display_switch",waste_bin_full:"rubbish_full_state",waste_bin_installed:"rubbish_inplace_state",water_dispensing_state:"water_state",vacuum_active:"vacuum_state",door:"door_open",run_air_purifier:"trigger_vacuum",open_door:"trigger_open_door",close_door:"trigger_close_door",level_litter:"trigger_level_litter",empty_waste_bin:"trigger_empty_waste",start_clean_cycle:"trigger_clean",stop_current_action:"trigger_stop_action",manually_open_lid:"manual_lid_open",turn_on_sleep_mode:"sleep_on",turn_off_sleep_mode:"sleep_off",turn_on_sound:"sound_on",turn_off_sound:"sound_off",turn_on_indicator:"light_on",turn_off_indicator:"light_off",turn_on_display:"display_on",turn_off_display:"display_off",desiccant_replaced:"desiccant_reset",reposition_the_schedule:"reposition_schedule",enable_selected_plan:"feeding_plan_enable",disable_selected_plan:"feeding_plan_disable",delete_selected_plan:"feeding_plan_delete",skip_selected_plan_today:"feeding_plan_skip_today",un_skip_selected_plan_today:"feeding_plan_unskip_today",enable_today_s_feeding_schedule:"feeding_plan_today_enable_all",disable_today_s_feeding_schedule:"feeding_plan_today_disable_all",enable_feeding_schedule:"enable_feeding_plan",disable_feeding_schedule:"disable_feeding_plan",reset_cleaning_timer:"reset_cleaning",reset_filter_timer:"reset_filter",reset_mat_timer:"reset_mat",light:"light_switch",sound:"sound_switch",deodorization:"deodorization_mode_switch",after_use_deodorization:"after_deodorization_switch",auto_clean_in_sleep_mode:"enable_auto_clean_in_sleep_mode",deodorize_in_sleep_mode:"enable_deodorization_in_sleep_mode",icon_to_display:"display_icon",auto_clean_delay:"auto_delay_sec",post_use_deodorization_duration:"duration_after_deodorization",text_on_display:"display_text"},we=["today_feeding_quantity_weight","today_feeding_quantity_volume","last_feed_quantity_weight","last_feed_quantity_volume","next_feed_quantity_weight","next_feed_quantity_volume","enable_low_battery_notice","today_feeding_times","today_feeding_schedule","feeding_plan_state","remaining_desiccant","manual_feed_quantity","electric_quantity","battery_state","last_feed_time","next_feed_time","child_lock_switch","whether_in_sleep_mode","food_dispenser_state","food_outlet_state","today_eating_times","today_eating_time","display_selection","manual_feed","manual_lid_open","enable_feeding_plan","disable_feeding_plan","feeding_plan_enable","feeding_plan_disable","feeding_plan_delete","feeding_plan_skip_today","feeding_plan_unskip_today","feeding_plan_today_enable_all","feeding_plan_today_disable_all","feeding_plan_select","feeding_plan_today_select","feeding_schedule","desiccant_reset","desiccant_frequency","desiccant_cycle","light_on","light_off","light_switch","sound_on","sound_off","sound_switch","sound_level","display_on","display_off","display_switch","display_text","display_icon","sleep_on","sleep_off","food_low","door_state","door_blocked","vacuum_state","wifi_ssid","wifi_rssi","online","wi_fi","resolution","night_vision","enable_video_record","video_record_switch","video_record_mode","pump_air_state","ring_bell","rotate_food_bowl","reposition_schedule","next_feeding_day","next_feeding_time","next_feeding_end_time","manual_feed_now","manual_feed_quantity_cups","lid_close_time","lid_mode","lid_speed","temperature","plate_position","remaining_cleaning_days","remaining_filter_days","remaining_water","remaining_water_ml","weight_percent","litter_level","use_water_interval","use_water_duration","weight_state","tank_total_ml","exception_message","volume_level","water_state","water_interval","water_dispensing_duration","water_dispensing_mode","water_low_threshold","water_sensing_delay","cleaning_cycle","cleaning_reset","filter_cycle","filter_reset","device_stopped_working","today_drinking_amount","yesterday_drinking_amount","today_drinking_time","today_avg_time","today_drinking_count","yesterday_drinking_count","battery_charge_state","battery_supply_8_hours","power_state","radar_sensing_level","radar_sensing_threshold","radar_gain","human_sensitivity_level","remaining_replacement_days","remaining_mat_days","filter_state","clean_state","mat_state","vacuum_mode","throw_mode","deodorization_mode","deodorization_mode_switch","deodorization_state_on","garbage_warehouse_state","running_state","clean_mode","volume","weight","rubbish_full_state","rubbish_inplace_state","door_open","barn_door_error","trigger_clean","trigger_empty_waste","trigger_level_litter","trigger_stop_action","trigger_open_door","trigger_close_door","trigger_vacuum","today_potty_times","today_potty_duration","after_deodorization_switch","avoid_repeat_clean","enable_auto_clean_in_sleep_mode","enable_deodorization_in_sleep_mode","auto_delay_sec","duration_after_deodorization","reset_cleaning","reset_filter","reset_mat",...Object.keys($e)].sort((e,t)=>t.length-e.length),xe=n`
  :host {
    display: block;
  }

  ha-card {
    padding: 16px;
    overflow: hidden;
    border-radius: var(--pet-radius-card, 16px);
  }

  /* Status chip row at the top */
  .chip-row {
    display: flex;
    gap: var(--pet-gap-chip, 6px);
    flex-wrap: wrap;
    margin-bottom: 12px;
  }

  /* Device header spacing (petlibro-card-header is followed by the tile grid) */
  petlibro-card-header {
    margin-bottom: 16px;
  }

  /* Metric tile grid */
  .tile-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: var(--pet-gap-tile, 8px);
    margin-bottom: 16px;
  }

  /* Pill-button row (controls) */
  .chip-controls {
    display: flex;
    flex-wrap: wrap;
    gap: var(--pet-gap-chip, 6px);
    justify-content: center;
  }

  /* Stack of entity rows (settings) */
  .settings {
    display: flex;
    flex-direction: column;
    gap: var(--pet-gap-row, 6px);
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid var(--divider-color, #e0e0e0);
  }

  /* Native <select> slotted into petlibro-entity-row's trailing slot.
     Lives in light-template CSS because the <select> is rendered in
     <petlibro-cards>'s shadow tree before being slotted. */
  select.pet-select {
    padding: 4px 8px;
    border-radius: 6px;
    border: 1px solid var(--divider-color, #e0e0e0);
    background: var(--card-background-color, #fff);
    color: var(--primary-text-color);
    font-size: var(--pet-font-secondary, 13px);
    font-family: inherit;
    cursor: pointer;
  }

  select.pet-select:focus {
    outline: none;
    border-color: var(--primary-color, #03a9f4);
  }

  /* Error/unavailable state used by top-level fallback */
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
`,ke={sensor:"sensors",binary_sensor:"binary_sensors",button:"buttons",switch:"switches",number:"numbers",select:"selects",date:"dates",image:"images",update:"updates"};function Ae(e,t){const i=t.translation_key;return i||function(e){const t=e.indexOf(".");if(t<0)return;const i=e.substring(t+1);for(const e of we)if(i.endsWith(e)){const t=i.substring(0,i.length-e.length);if(""===t||t.endsWith("_"))return $e[e]??e}}(e)}function Se(e,t){if(!t)return;const i=e.states[t]?.state;return"unavailable"!==i&&"unknown"!==i?i:void 0}function Ee(e,t){const i=Se(e,t);if(void 0===i)return;const o=Number(i);return isNaN(o)?void 0:o}function Ce(e,t){if(!t)return!1;const i=e.states[t]?.state;return"on"===i||"connected"===i||"true"===i||"True"===i}function ze(e,t){const i=Se(e,t);if(i)try{const e=new Date(i);return isNaN(e.getTime())?i:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}catch{return i}}function Pe(e){return e>=90?"mdi:battery":e>=70?"mdi:battery-70":e>=50?"mdi:battery-50":e>=30?"mdi:battery-30":e>=10?"mdi:battery-10":"mdi:battery-alert"}function Oe(e,t,i){const o=e.entities?.[t]?.name;if(o)return o;const s=e.states[t]?.attributes?.friendly_name;return("string"==typeof s?s:t)||t}function Ne(e,t){if(!t)return;const i=e.states[t];if(!i)return;if("unknown"===i.state||"unavailable"===i.state)return;if("function"==typeof e.formatEntityState)return e.formatEntityState(i);const o=i.attributes?.unit_of_measurement;return o?`${i.state} ${o}`:i.state}function Te(e,t,i,o,s,r){if(!t||!e.states[t])return F;const n=e.states[t].attributes?.options??[],a=e.states[t].state;return q`
    <petlibro-entity-row .icon=${i} .color=${o} .primary=${s}>
      <select
        slot="trailing"
        class="pet-select"
        @change=${e=>r(t,e.target.value)}
      >
        ${n.map(e=>q`
          <option value=${e} ?selected=${a===e}>${e}</option>
        `)}
      </select>
    </petlibro-entity-row>
  `}function Me(e,t,i,o,s,r,n,a=1){if(!t||!e.states[t])return F;const l=e.states[t].attributes??{},d=Number(e.states[t].state??0),c=Number(l.min??0),p=Number(l.max??100),_=Number(l.step??a);return q`
    <petlibro-entity-row .icon=${i} .color=${o} .primary=${s}>
      <petlibro-stepper
        slot="trailing"
        .value=${d}
        .min=${c}
        .max=${p}
        .step=${_}
        .unit=${r}
        @petlibro-stepper-change=${e=>n(t,e.detail.value)}
      ></petlibro-stepper>
    </petlibro-entity-row>
  `}function Ue(e,t,i,o){const s=e.switches.indicator,r=t?e.buttons.light_off:e.buttons.light_on;return s||r?q`
    <petlibro-pill-button
      icon="mdi:lightbulb${t?"":"-outline"}"
      ?active=${t}
      @click=${()=>s?o(s):i(r)}
    >Light</petlibro-pill-button>
  `:F}function je(e){const{hass:t,entities:i}=e,o=Object.entries(i.switches).filter(([e])=>e.startsWith("notice_")).map(([e,t])=>({key:e,entityId:t})).filter(({entityId:e})=>void 0!==t.states[e]).map(({key:e,entityId:i})=>({key:e,entityId:i,label:Oe(t,i),on:Ce(t,i)})).sort((e,t)=>e.label.localeCompare(t.label));if(0===o.length)return F;const s=o.filter(e=>e.on).length;return q`
    <petlibro-section
      label="Alerts"
      icon="mdi:bell-outline"
      summary="${s} of ${o.length} on"
    >
      ${o.map(t=>q`
          <petlibro-entity-row
            .icon=${t.on?"mdi:bell":"mdi:bell-off-outline"}
            .color=${t.on?"amber":"default"}
            .primary=${t.label}
          >
            <ha-switch
              slot="trailing"
              ?checked=${t.on}
              @change=${()=>e.actions.toggle(t.entityId)}
            ></ha-switch>
          </petlibro-entity-row>
        `)}
    </petlibro-section>
  `}function De(e){const t=(e??"").toLowerCase();return t.includes("cat")?"mdi:cat":t.includes("dog")?"mdi:dog":"mdi:paw"}const Re=n`
  :host {
    /* Shape */
    --pet-radius-card: 16px;
    --pet-radius-tile: 12px;
    --pet-radius-chip: 100px;
    --pet-gap-tile: 8px;
    --pet-gap-row: 6px;
    --pet-gap-chip: 6px;

    /* Semantic color families */
    --pet-color-default-bg: color-mix(in srgb, var(--secondary-text-color, #757575) 12%, transparent);
    --pet-color-default-fg: var(--secondary-text-color, #757575);

    --pet-color-green-bg: color-mix(in srgb, var(--success-color, #4caf50) 15%, transparent);
    --pet-color-green-fg: var(--success-color, #4caf50);

    --pet-color-amber-bg: color-mix(in srgb, var(--warning-color, #ff9800) 15%, transparent);
    --pet-color-amber-fg: var(--warning-color, #ff9800);

    --pet-color-red-bg: color-mix(in srgb, var(--error-color, #f44336) 15%, transparent);
    --pet-color-red-fg: var(--error-color, #f44336);

    /* Hues HA doesn't expose as theme vars — fixed but overridable */
    --pet-color-blue-bg: rgba(96, 165, 250, 0.15);
    --pet-color-blue-fg: #60a5fa;
    --pet-color-purple-bg: rgba(167, 139, 250, 0.15);
    --pet-color-purple-fg: #a78bfa;
    --pet-color-pink-bg: rgba(244, 114, 182, 0.15);
    --pet-color-pink-fg: #f472b6;

    /* Typography */
    --pet-font-title: 16px;
    --pet-font-primary: 14px;
    --pet-font-primary-weight: 500;
    --pet-font-secondary: 12px;
    --pet-font-label: 11px;
  }
`;let He=class extends ae{constructor(){super(...arguments),this.icon="",this.color="default",this.size="md"}static{this.styles=n`
    :host {
      display: inline-flex;
      flex-shrink: 0;
    }
    .shape {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: var(--pet-bg);
      color: var(--pet-fg);
    }
    :host([size="sm"]) .shape { width: 28px; height: 28px; }
    :host([size="md"]) .shape { width: 36px; height: 36px; }
    :host([size="lg"]) .shape { width: 44px; height: 44px; }
    :host([size="sm"]) ha-icon { --mdc-icon-size: 16px; }
    :host([size="md"]) ha-icon { --mdc-icon-size: 20px; }
    :host([size="lg"]) ha-icon { --mdc-icon-size: 24px; }

    :host([color="default"]) { --pet-bg: var(--pet-color-default-bg); --pet-fg: var(--pet-color-default-fg); }
    :host([color="green"])   { --pet-bg: var(--pet-color-green-bg);   --pet-fg: var(--pet-color-green-fg); }
    :host([color="amber"])   { --pet-bg: var(--pet-color-amber-bg);   --pet-fg: var(--pet-color-amber-fg); }
    :host([color="red"])     { --pet-bg: var(--pet-color-red-bg);     --pet-fg: var(--pet-color-red-fg); }
    :host([color="blue"])    { --pet-bg: var(--pet-color-blue-bg);    --pet-fg: var(--pet-color-blue-fg); }
    :host([color="purple"])  { --pet-bg: var(--pet-color-purple-bg);  --pet-fg: var(--pet-color-purple-fg); }
    :host([color="pink"])    { --pet-bg: var(--pet-color-pink-bg);    --pet-fg: var(--pet-color-pink-fg); }
  `}render(){return q`<div class="shape"><ha-icon .icon=${this.icon}></ha-icon></div>`}};e([_e({type:String})],He.prototype,"icon",void 0),e([_e({type:String,reflect:!0})],He.prototype,"color",void 0),e([_e({type:String,reflect:!0})],He.prototype,"size",void 0),He=e([de("petlibro-shape-icon")],He);let Ie=class extends ae{constructor(){super(...arguments),this.icon="",this.variant="neutral"}static{this.styles=n`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 10px;
      border-radius: var(--pet-radius-chip, 100px);
      background: var(--chip-bg);
      color: var(--chip-fg);
      font-size: var(--pet-font-secondary, 12px);
      white-space: nowrap;
    }
    :host([variant="neutral"]) {
      --chip-bg: color-mix(in srgb, var(--secondary-text-color, #757575) 10%, transparent);
      --chip-fg: var(--primary-text-color);
    }
    :host([variant="ok"])    { --chip-bg: var(--pet-color-green-bg); --chip-fg: var(--pet-color-green-fg); }
    :host([variant="warn"])  { --chip-bg: var(--pet-color-amber-bg); --chip-fg: var(--pet-color-amber-fg); }
    :host([variant="alert"]) { --chip-bg: var(--pet-color-red-bg);   --chip-fg: var(--pet-color-red-fg); }
    ha-icon { --mdc-icon-size: 14px; }
  `}render(){return q`
      ${this.icon?q`<ha-icon .icon=${this.icon}></ha-icon>`:F}
      <slot></slot>
    `}};e([_e({type:String})],Ie.prototype,"icon",void 0),e([_e({type:String,reflect:!0})],Ie.prototype,"variant",void 0),Ie=e([de("petlibro-chip")],Ie);let Le=class extends ae{constructor(){super(...arguments),this.name="",this.online=!1,this.fallbackIcon="mdi:paw",this.showStatus=!0}static{this.styles=n`
    :host {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .image, .placeholder {
      width: 48px;
      height: 48px;
      border-radius: var(--pet-radius-tile, 12px);
      flex-shrink: 0;
      background: var(--pet-color-default-bg);
    }
    .image {
      object-fit: contain;
    }
    .placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--pet-color-default-fg);
    }
    .placeholder ha-icon {
      --mdc-icon-size: 24px;
    }
    .info {
      flex: 1;
      min-width: 0;
    }
    .name {
      font-size: var(--pet-font-title, 16px);
      font-weight: 600;
      color: var(--primary-text-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .model {
      font-size: var(--pet-font-secondary, 12px);
      color: var(--secondary-text-color);
    }
    .status {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: var(--pet-font-secondary, 12px);
      color: var(--secondary-text-color);
      flex-shrink: 0;
    }
    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
    :host([online]) .dot { background: var(--pet-color-green-fg); }
    :host(:not([online])) .dot { background: var(--pet-color-red-fg); }
  `}render(){return q`
      ${this.image?q`<img class="image" src=${this.image} alt=${this.name} />`:q`<div class="placeholder"><ha-icon .icon=${this.fallbackIcon}></ha-icon></div>`}
      <div class="info">
        <div class="name">${this.name}</div>
        ${this.model?q`<div class="model">${this.model}</div>`:F}
      </div>
      ${this.showStatus?q`<div class="status">
            <div class="dot"></div>
            <span>${this.online?"Online":"Offline"}</span>
          </div>`:F}
    `}};e([_e({type:String})],Le.prototype,"image",void 0),e([_e({type:String})],Le.prototype,"name",void 0),e([_e({type:String})],Le.prototype,"model",void 0),e([_e({type:Boolean,reflect:!0})],Le.prototype,"online",void 0),e([_e({type:String})],Le.prototype,"fallbackIcon",void 0),e([_e({type:Boolean})],Le.prototype,"showStatus",void 0),Le=e([de("petlibro-card-header")],Le);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Be=1;let qe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const We="important",Fe=" !"+We,Ve=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends qe{constructor(e){if(super(e),e.type!==Be||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const o=e[i];return null==o?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const o=t[e];if(null!=o){this.ft.add(e);const t="string"==typeof o&&o.endsWith(Fe);e.includes("-")||t?i.setProperty(e,t?o.slice(0,-11):o,t?We:""):i[e]=o}}return W}});let Ke=class extends ae{constructor(){super(...arguments),this.icon="",this.color="default",this.label="",this.value="",this.progressVariant="ok"}static{this.styles=n`
    :host {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px;
      border-radius: var(--pet-radius-tile, 12px);
      background: color-mix(in srgb, var(--secondary-text-color, #757575) 6%, transparent);
    }
    .text {
      flex: 1;
      min-width: 0;
    }
    .label {
      font-size: var(--pet-font-label, 11px);
      color: var(--secondary-text-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .value {
      font-size: var(--pet-font-primary, 14px);
      font-weight: var(--pet-font-primary-weight, 500);
      color: var(--primary-text-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .gauge {
      margin-top: 4px;
      height: 4px;
      border-radius: 2px;
      background: color-mix(in srgb, var(--secondary-text-color, #757575) 15%, transparent);
      overflow: hidden;
    }
    .gauge-fill {
      height: 100%;
      border-radius: 2px;
      background: var(--gauge-fill);
      transition: width 0.3s ease;
    }
    :host([progress-variant="ok"])    { --gauge-fill: var(--pet-color-green-fg); }
    :host([progress-variant="warn"])  { --gauge-fill: var(--pet-color-amber-fg); }
    :host([progress-variant="alert"]) { --gauge-fill: var(--pet-color-red-fg); }
  `}render(){return q`
      <petlibro-shape-icon .icon=${this.icon} .color=${this.color}></petlibro-shape-icon>
      <div class="text">
        <div class="label">${this.label}</div>
        <div class="value">${this.value}</div>
        ${void 0!==this.progress?q`
          <div class="gauge">
            <div
              class="gauge-fill"
              style=${Ve({width:`${Math.min(100,Math.max(0,this.progress))}%`})}
            ></div>
          </div>
        `:F}
      </div>
    `}};e([_e({type:String})],Ke.prototype,"icon",void 0),e([_e({type:String})],Ke.prototype,"color",void 0),e([_e({type:String})],Ke.prototype,"label",void 0),e([_e({type:String})],Ke.prototype,"value",void 0),e([_e({type:Number})],Ke.prototype,"progress",void 0),e([_e({type:String,reflect:!0,attribute:"progress-variant"})],Ke.prototype,"progressVariant",void 0),Ke=e([de("petlibro-tile")],Ke);let Ge=class extends ae{constructor(){super(...arguments),this.icon="",this.color="default",this.primary=""}static{this.styles=n`
    :host {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px 4px;
    }
    .text {
      flex: 1;
      min-width: 0;
    }
    .primary {
      font-size: var(--pet-font-primary, 14px);
      font-weight: var(--pet-font-primary-weight, 500);
      color: var(--primary-text-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .secondary {
      font-size: var(--pet-font-secondary, 12px);
      color: var(--secondary-text-color);
    }
    ::slotted(*) {
      flex-shrink: 0;
    }
  `}render(){return q`
      <petlibro-shape-icon .icon=${this.icon} .color=${this.color}></petlibro-shape-icon>
      <div class="text">
        <div class="primary">${this.primary}</div>
        ${this.secondary?q`<div class="secondary">${this.secondary}</div>`:F}
      </div>
      <slot name="trailing"></slot>
    `}};e([_e({type:String})],Ge.prototype,"icon",void 0),e([_e({type:String})],Ge.prototype,"color",void 0),e([_e({type:String})],Ge.prototype,"primary",void 0),e([_e({type:String})],Ge.prototype,"secondary",void 0),Ge=e([de("petlibro-entity-row")],Ge);let Ze=class extends ae{constructor(){super(...arguments),this.variant="default",this.active=!1,this.disabled=!1}static{this.styles=n`
    :host {
      display: inline-flex;
    }
    button {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 8px 14px;
      border-radius: var(--pet-radius-chip, 100px);
      border: none;
      background: var(--pill-bg);
      color: var(--pill-fg);
      font-size: var(--pet-font-secondary, 13px);
      font-weight: 500;
      font-family: inherit;
      cursor: pointer;
      transition: opacity 0.15s ease;
    }
    button:hover:not(:disabled) { opacity: 0.85; }
    button:active:not(:disabled) { opacity: 0.7; }
    button:disabled { opacity: 0.4; cursor: not-allowed; }
    ha-icon { --mdc-icon-size: 16px; }

    :host([variant="default"]) {
      --pill-bg: color-mix(in srgb, var(--secondary-text-color, #757575) 10%, transparent);
      --pill-fg: var(--primary-text-color);
    }
    :host([variant="primary"]) {
      --pill-bg: var(--primary-color, #03a9f4);
      --pill-fg: var(--text-primary-color, #fff);
    }
    :host([active][variant="default"]) {
      --pill-bg: var(--primary-color, #03a9f4);
      --pill-fg: var(--text-primary-color, #fff);
    }
  `}render(){return q`
      <button type="button" ?disabled=${this.disabled}>
        ${this.icon?q`<ha-icon .icon=${this.icon}></ha-icon>`:F}
        <slot></slot>
      </button>
    `}};e([_e({type:String,reflect:!0})],Ze.prototype,"variant",void 0),e([_e({type:String})],Ze.prototype,"icon",void 0),e([_e({type:Boolean,reflect:!0})],Ze.prototype,"active",void 0),e([_e({type:Boolean,reflect:!0})],Ze.prototype,"disabled",void 0),Ze=e([de("petlibro-pill-button")],Ze);let Je=class extends ae{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.step=1,this.unit="",this.disabled=!1}static{this.styles=n`
    :host {
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    button {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      border: none;
      background: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
      font-size: 16px;
      font-weight: 700;
      font-family: inherit;
      cursor: pointer;
      line-height: 1;
      padding: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    button:hover:not(:disabled) { opacity: 0.85; }
    button:disabled { opacity: 0.4; cursor: not-allowed; }
    .value {
      min-width: 48px;
      text-align: center;
      font-size: var(--pet-font-secondary, 13px);
      font-weight: 500;
      color: var(--primary-text-color);
    }
  `}_emit(e){this.dispatchEvent(new CustomEvent("petlibro-stepper-change",{detail:{value:e},bubbles:!0,composed:!0}))}_dec(){this._emit(Math.max(this.min,this.value-this.step))}_inc(){this._emit(Math.min(this.max,this.value+this.step))}render(){return q`
      <button
        type="button"
        ?disabled=${this.disabled||this.value<=this.min}
        @click=${this._dec}
      >−</button>
      <span class="value">${this.value}${this.unit}</span>
      <button
        type="button"
        ?disabled=${this.disabled||this.value>=this.max}
        @click=${this._inc}
      >+</button>
    `}};e([_e({type:Number})],Je.prototype,"value",void 0),e([_e({type:Number})],Je.prototype,"min",void 0),e([_e({type:Number})],Je.prototype,"max",void 0),e([_e({type:Number})],Je.prototype,"step",void 0),e([_e({type:String})],Je.prototype,"unit",void 0),e([_e({type:Boolean})],Je.prototype,"disabled",void 0),Je=e([de("petlibro-stepper")],Je);let Ye=class extends ae{constructor(){super(...arguments),this.label="",this.summary="",this.icon="mdi:tune",this.open=!1}static{this.styles=n`
    :host {
      display: block;
      margin-top: 8px;
    }

    details {
      border-top: 1px solid var(--divider-color, rgba(127, 127, 127, 0.2));
      padding-top: 4px;
    }

    summary {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 4px;
      cursor: pointer;
      list-style: none;
      border-radius: 10px;
      color: var(--secondary-text-color);
      font-size: 0.9rem;
      font-weight: 500;
      user-select: none;
    }

    /* Hide the native disclosure marker in both engines. */
    summary::-webkit-details-marker {
      display: none;
    }
    summary::marker {
      content: '';
    }

    summary:hover {
      background: var(--secondary-background-color, rgba(127, 127, 127, 0.08));
    }

    summary:focus-visible {
      outline: 2px solid var(--primary-color);
      outline-offset: 2px;
    }

    .label {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .summary-text {
      font-variant-numeric: tabular-nums;
      opacity: 0.8;
    }

    .chevron {
      --mdc-icon-size: 20px;
      transition: transform 180ms ease;
      flex: 0 0 auto;
    }

    details[open] .chevron {
      transform: rotate(180deg);
    }

    .body {
      display: flex;
      flex-direction: column;
      gap: 2px;
      padding: 4px 0 8px;
    }

    @media (prefers-reduced-motion: reduce) {
      .chevron {
        transition: none;
      }
    }
  `}render(){return q`
      <details ?open=${this.open} @toggle=${this._onToggle}>
        <summary>
          <ha-icon .icon=${this.icon}></ha-icon>
          <span class="label">${this.label}</span>
          ${this.summary?q`<span class="summary-text">${this.summary}</span>`:""}
          <ha-icon class="chevron" icon="mdi:chevron-down"></ha-icon>
        </summary>
        <div class="body"><slot></slot></div>
      </details>
    `}_onToggle(e){this.open=e.target.open}};e([_e()],Ye.prototype,"label",void 0),e([_e()],Ye.prototype,"summary",void 0),e([_e()],Ye.prototype,"icon",void 0),e([_e({type:Boolean,reflect:!0})],Ye.prototype,"open",void 0),Ye=e([de("petlibro-section")],Ye),console.info(`%c PETLIBRO-CARD %c v${ue} `,"color: white; background: #3498db; font-weight: bold;","color: #3498db; background: white; font-weight: bold;");const Qe=window;Qe.customCards=Qe.customCards??[],Qe.customCards.push({type:ge,name:"Petlibro Card",description:"Auto-detecting card for PetLibro feeders, fountains, and litter boxes",preview:!0});let Xe=class extends ae{static{this.styles=[Re,xe]}static async getConfigElement(){return await Promise.resolve().then(function(){return tt}),document.createElement(be)}static getStubConfig(){return{device_id:""}}setConfig(e){if(!e.device_id&&!e.entity)throw new Error("Please select a PetLibro device");this._config={show_controls:!0,...e}}getCardSize(){return 4}getGridOptions(){return{columns:12,rows:6,min_columns:6,min_rows:3}}shouldUpdate(e){if(e.has("_config"))return!0;if(!e.has("hass")||!this._entities)return!0;const t=e.get("hass");if(!t)return!0;return this._getAllEntityIds().some(e=>t.states[e]!==this.hass.states[e])}willUpdate(e){var t,i;if(this.hass&&this._config&&(e.has("hass")||e.has("_config"))){let e;this._config.device_id?e=this._config.device_id:this._config.entity&&(t=this.hass,i=this._config.entity,e=t.entities?.[i]?.device_id??void 0),e&&e!==this._deviceId&&(this._deviceId=e,this._entities=function(e,t){const i={sensors:{},binary_sensors:{},buttons:{},switches:{},numbers:{},selects:{},dates:{},images:{},updates:{}};if(!e.entities)return i;for(const[o,s]of Object.entries(e.entities)){if(s.device_id!==t)continue;if(s.platform&&"petlibro"!==s.platform)continue;const e=o.substring(0,o.indexOf(".")),r=ke[e];if(!r)continue;const n=Ae(o,s);n&&(i[r][n]=o)}return i}(this.hass,e),this._deviceType=function(e){const t=new Set([...Object.keys(e.sensors),...Object.keys(e.binary_sensors),...Object.keys(e.buttons),...Object.keys(e.switches),...Object.keys(e.numbers),...Object.keys(e.selects)]);return fe.some(e=>t.has(e))?"pet":ye.some(e=>t.has(e))?"litter_box":me.some(e=>t.has(e))?"feeder":ve.some(e=>t.has(e))?"fountain":"feeder"}(this._entities),this._primaryEntityId=this._config.entity||function(e,t){if(e.entities)for(const[i,o]of Object.entries(e.entities))if(o.device_id===t)return i}(this.hass,e)||"")}}render(){if(!this._config||!this.hass)return q``;if(!this._deviceId||!this._entities||!this._deviceType)return q`
        <ha-card>
          <div class="unavailable">
            <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
            <div>Entity not found or device not yet available</div>
          </div>
        </ha-card>
      `;const e=this._primaryEntityId??"",t=this.hass.states[e]?.state;return"unavailable"===t?q`
        <ha-card>
          ${this._renderHeader()}
          <div class="unavailable">
            <ha-icon icon="mdi:wifi-off"></ha-icon>
            <div>Device unavailable</div>
          </div>
        </ha-card>
      `:q`
      <ha-card>
        ${this._renderHeader()}
        ${this._renderDeviceContent()}
      </ha-card>
    `}_renderHeader(){const e=this._config.name||(t=this.hass,i=this._deviceId,t.devices?.[i]?.name??void 0)||"PetLibro Device";var t,i;const o=this._primaryEntityId??"",s=function(e,t,i){const o=e.states[t]?.attributes?.entity_picture;if("string"==typeof o&&o)return o;if(e.entities)for(const[t,o]of Object.entries(e.entities)){if(o.device_id!==i)continue;const s=e.states[t]?.attributes?.entity_picture;if("string"==typeof s&&s)return s}return e.devices?.[i]?.configuration_url??void 0}(this.hass,o,this._deviceId),r=Ce(this.hass,this._entities.binary_sensors.online),n="pet"===this._deviceType,a=n?this.hass.states[this._entities.sensors.breed_name??""]?.state:this.hass.devices?.[this._deviceId]?.model;return q`
      <petlibro-card-header
        .image=${s??void 0}
        .name=${e}
        .model=${a??void 0}
        ?online=${r}
        .showStatus=${!n}
        .fallbackIcon=${this._getDeviceTypeIcon()}
      ></petlibro-card-header>
    `}_renderDeviceContent(){if(!this._entities)return F;const e=this._config.show_controls??!0,t={hass:this.hass,entities:this._entities,showControls:e,actions:{press:e=>this._handleButtonPress(e),toggle:e=>this._handleSwitchToggle(e),select:(e,t)=>this._handleSelectChange(e,t),setNumber:(e,t)=>this._handleNumberChange(e,t)}};switch(this._deviceType){case"feeder":return function(e){const{hass:t,entities:i,showControls:o}=e,{press:s,toggle:r,select:n}=e.actions,a=Ee(t,i.sensors.electric_quantity),l=Ce(t,i.binary_sensors.food_low),d=Se(t,i.sensors.today_feeding_quantity_weight),c=Se(t,i.sensors.today_feeding_times),p=ze(t,i.sensors.last_feed_time),_=ze(t,i.sensors.next_feed_time),h=Se(t,i.sensors.next_feed_quantity_weight),u=i.binary_sensors.today_feeding_schedule??i.binary_sensors.feeding_plan_state,g=void 0!==u,b=Ce(t,u),f=t.states[i.sensors.today_feeding_quantity_weight??""]?.attributes?.unit_of_measurement??"g",m=t.states[i.sensors.next_feed_quantity_weight??""]?.attributes?.unit_of_measurement??"g",v=Ce(t,i.binary_sensors.light_switch),y=Se(t,i.sensors.temperature),$=t.states[i.sensors.temperature??""]?.attributes?.unit_of_measurement??"°F",w=Se(t,i.sensors.plate_position),x=Se(t,i.sensors.next_feeding_time),k=Se(t,i.sensors.next_feeding_end_time),A=Se(t,i.sensors.next_feeding_day),S=void 0===a?"default":a<=20?"red":a<=50?"amber":"green";return q`
    ${l?q`
      <div class="chip-row">
        <petlibro-chip icon="mdi:bowl-mix-outline" variant="warn">Food Low</petlibro-chip>
      </div>
    `:F}

    <div class="tile-grid">
      ${void 0!==a?q`
        <petlibro-tile
          .icon=${Pe(a)}
          .color=${S}
          label="Battery"
          value="${Math.round(a)}%"
        ></petlibro-tile>
      `:F}

      <petlibro-tile
        icon=${l?"mdi:bowl-mix-outline":"mdi:bowl-outline"}
        color=${l?"red":"green"}
        label="Food Status"
        value=${l?"Low":"OK"}
      ></petlibro-tile>

      ${void 0!==d?q`
        <petlibro-tile
          icon="mdi:scale"
          color="blue"
          label="Fed Today"
          value="${d} ${f}${c?` (${c}x)`:""}"
        ></petlibro-tile>
      `:F}

      ${p?q`
        <petlibro-tile icon="mdi:history" color="pink" label="Last Feed" value=${p}></petlibro-tile>
      `:F}

      ${_?q`
        <petlibro-tile
          icon="mdi:calendar-arrow-right"
          color="amber"
          label="Next Feed"
          value="${_}${h?` (${h} ${m})`:""}"
        ></petlibro-tile>
      `:F}

      ${g?q`
        <petlibro-tile
          icon="mdi:calendar-check"
          color="purple"
          label="Feeding Plan"
          value=${b?"Active":"Inactive"}
        ></petlibro-tile>
      `:F}

      ${void 0!==y?q`
        <petlibro-tile
          icon="mdi:thermometer"
          color="amber"
          label="Temperature"
          value="${y}${$}"
        ></petlibro-tile>
      `:F}

      ${void 0!==w?q`
        <petlibro-tile
          icon="mdi:rotate-3d-variant"
          color="purple"
          label="Plate Position"
          value=${String(w)}
        ></petlibro-tile>
      `:F}

      ${void 0!==x?q`
        <petlibro-tile
          icon="mdi:clock-outline"
          color="amber"
          label="Next Feeding"
          value="${A?`${A} `:""}${x}${k?` – ${k}`:""}"
        ></petlibro-tile>
      `:F}
    </div>

    ${o?q`
      <div class="chip-controls">
        ${i.buttons.manual_feed?q`
          <petlibro-pill-button
            icon="mdi:food-drumstick"
            variant="primary"
            @click=${()=>s(i.buttons.manual_feed)}
          >Feed Now</petlibro-pill-button>
        `:F}

        ${i.switches.manual_feed_now?q`
          <petlibro-pill-button
            icon="mdi:door-open"
            ?active=${Ce(t,i.switches.manual_feed_now)}
            @click=${()=>r(i.switches.manual_feed_now)}
          >Open Lid</petlibro-pill-button>
        `:F}

        ${i.buttons.rotate_food_bowl?q`
          <petlibro-pill-button
            icon="mdi:rotate-3d-variant"
            @click=${()=>s(i.buttons.rotate_food_bowl)}
          >Rotate</petlibro-pill-button>
        `:F}

        ${i.buttons.ring_bell?q`
          <petlibro-pill-button
            icon="mdi:bell-ring"
            @click=${()=>s(i.buttons.ring_bell)}
          >Ring</petlibro-pill-button>
        `:F}

        ${Ue(i,v,s,r)}
      </div>
    `:F}

    ${o&&i.selects.feeding_plan_select?q`
      <div class="settings">
        ${Te(t,i.selects.feeding_plan_select,"mdi:calendar-clock","purple","Feeding Plan",n)}
      </div>
      <div class="chip-controls">
        ${i.buttons.feeding_plan_enable?q`
          <petlibro-pill-button
            icon="mdi:check"
            @click=${()=>s(i.buttons.feeding_plan_enable)}
          >Enable</petlibro-pill-button>
        `:F}
        ${i.buttons.feeding_plan_disable?q`
          <petlibro-pill-button
            icon="mdi:close"
            @click=${()=>s(i.buttons.feeding_plan_disable)}
          >Disable</petlibro-pill-button>
        `:F}
        ${i.buttons.feeding_plan_today_enable_all?q`
          <petlibro-pill-button
            icon="mdi:calendar-check"
            @click=${()=>s(i.buttons.feeding_plan_today_enable_all)}
          >Enable All Today</petlibro-pill-button>
        `:F}
        ${i.buttons.feeding_plan_today_disable_all?q`
          <petlibro-pill-button
            icon="mdi:calendar-remove"
            @click=${()=>s(i.buttons.feeding_plan_today_disable_all)}
          >Disable All Today</petlibro-pill-button>
        `:F}
      </div>
    `:F}

    ${o?je(e):F}
  `}(t);case"fountain":return function(e){const{hass:t,entities:i,showControls:o}=e,s=e.actions.press,r=Ee(t,i.sensors.electric_quantity),n=Ee(t,i.sensors.weight_percent),a=Ne(t,i.sensors.remaining_water),l=Ne(t,i.sensors.today_drinking_amount),d=Ne(t,i.sensors.yesterday_drinking_amount),c=Se(t,i.sensors.today_drinking_count),p=Ne(t,i.sensors.today_drinking_time),_=Se(t,i.sensors.remaining_filter_days),h=Se(t,i.sensors.remaining_cleaning_days),u=Ce(t,i.binary_sensors.light_switch),g=void 0===r?"default":r<=20?"red":r<=50?"amber":"green",b=void 0===n?"ok":n<=10?"alert":n<=25?"warn":"ok",f=void 0===n?"blue":n<=10?"red":n<=25?"amber":"blue",m=void 0!==n&&n<=25?n<=10?"alert":"warn":void 0;return q`
    ${m?q`
      <div class="chip-row">
        <petlibro-chip icon="mdi:water-alert" variant=${m}>Water Low</petlibro-chip>
      </div>
    `:F}

    <div class="tile-grid">
      ${void 0!==r?q`
        <petlibro-tile
          .icon=${Pe(r)}
          .color=${g}
          label="Battery"
          value="${Math.round(r)}%"
        ></petlibro-tile>
      `:F}

      ${void 0!==n?q`
        <petlibro-tile
          icon="mdi:water-percent"
          .color=${f}
          label="Water Level"
          value="${Math.round(n)}%"
          .progress=${n}
          progress-variant=${b}
        ></petlibro-tile>
      `:F}

      ${void 0!==a?q`
        <petlibro-tile
          icon="mdi:water"
          color="blue"
          label="Remaining Water"
          value=${a}
        ></petlibro-tile>
      `:F}

      ${void 0!==l?q`
        <petlibro-tile
          icon="mdi:cup-water"
          color="blue"
          label="Today's Drinking"
          value=${l}
        ></petlibro-tile>
      `:F}

      ${void 0!==d?q`
        <petlibro-tile
          icon="mdi:cup-outline"
          color="default"
          label="Yesterday"
          value=${d}
        ></petlibro-tile>
      `:F}

      ${void 0!==c?q`
        <petlibro-tile
          icon="mdi:counter"
          color="blue"
          label="Drinks Today"
          value="${c}"
        ></petlibro-tile>
      `:F}

      ${void 0!==p?q`
        <petlibro-tile
          icon="mdi:timer-sand"
          color="blue"
          label="Drinking Time"
          value=${p}
        ></petlibro-tile>
      `:F}

      ${void 0!==_?q`
        <petlibro-tile
          icon="mdi:air-filter"
          .color=${Number(_)<=3?"red":"pink"}
          label="Filter"
          value="${_} days"
        ></petlibro-tile>
      `:F}

      ${void 0!==h?q`
        <petlibro-tile
          icon="mdi:broom"
          .color=${Number(h)<=1?"red":"purple"}
          label="Cleaning"
          value="${h} days"
        ></petlibro-tile>
      `:F}
    </div>

    ${o?q`
      <div class="chip-controls">
        ${Ue(i,u,s,e.actions.toggle)}

        ${i.buttons.filter_reset?q`
          <petlibro-pill-button
            icon="mdi:air-filter"
            @click=${()=>s(i.buttons.filter_reset)}
          >Reset Filter</petlibro-pill-button>
        `:F}

        ${i.buttons.cleaning_reset?q`
          <petlibro-pill-button
            icon="mdi:broom"
            @click=${()=>s(i.buttons.cleaning_reset)}
          >Reset Cleaning</petlibro-pill-button>
        `:F}
      </div>
    `:F}

    ${o?je(e):F}
  `}(t);case"litter_box":return function(e){const{hass:t,entities:i,showControls:o}=e,{press:s,toggle:r,select:n,setNumber:a}=e.actions,l=Se(t,i.sensors.clean_plan_count),d=(()=>{const e=t.states[i.sensors.clean_plan_count??""]?.attributes?.plans;if(!Array.isArray(e)||0===e.length)return;const o=e.filter(e=>e?.enable);if(0===o.length)return;const s=o.map(e=>String(e?.executionTime??"")).filter(Boolean).sort();return s[0]?`${s[0]}${o.length>1?" +"+(o.length-1):""}`:void 0})(),c=Ee(t,i.sensors.electric_quantity),p=Se(t,i.sensors.litter_level),_=void 0!==p&&!["unknown","unavailable"].includes(String(p)),h=Ee(t,i.sensors.weight_percent),u=Ce(t,i.binary_sensors.rubbish_full_state),g=Se(t,i.sensors.running_state),b=Se(t,i.sensors.remaining_cleaning_days),f=Se(t,i.sensors.deodorization_mode),m=Ce(t,i.switches.light_switch),v=Ce(t,i.switches.sound_switch),y=Se(t,i.sensors.today_potty_times),$=Se(t,i.sensors.today_potty_duration),w=void 0===c?"default":c<=20?"red":c<=50?"amber":"green",x=void 0===h?"ok":h<=15?"alert":h<=30?"warn":"ok",k=u,A=!!(i.selects.clean_mode_select||i.selects.deodorization_wind_speed_select||i.numbers.volume_control||i.numbers.auto_delay_sec||i.numbers.duration_after_deodorization);return q`
    ${k?q`
      <div class="chip-row">
        ${u?q`<petlibro-chip icon="mdi:delete-alert" variant="alert">Bin Full</petlibro-chip>`:F}
      </div>
    `:F}

    <div class="tile-grid">
      ${void 0!==c?q`
        <petlibro-tile
          .icon=${Pe(c)}
          .color=${w}
          label="Battery"
          value="${Math.round(c)}%"
        ></petlibro-tile>
      `:F}

      ${_?q`
        <petlibro-tile
          icon="mdi:grain"
          color=${"GOOD"===String(p)?"green":"amber"}
          label="Litter Level"
          value=${String(p)}
        ></petlibro-tile>
      `:void 0!==h?q`
        <petlibro-tile
          icon="mdi:gauge"
          color="purple"
          label="Litter Level"
          value="${Math.round(h)}%"
          .progress=${h}
          progress-variant=${x}
        ></petlibro-tile>
      `:F}

      <petlibro-tile
        icon=${u?"mdi:delete-alert":"mdi:delete-variant"}
        color=${u?"red":"green"}
        label="Waste Bin"
        value=${u?"Full":"OK"}
      ></petlibro-tile>

      ${void 0!==g?q`
        <petlibro-tile
          icon="mdi:state-machine"
          color="blue"
          label="Status"
          value=${String(g)}
        ></petlibro-tile>
      `:F}

      ${void 0!==b?q`
        <petlibro-tile
          icon="mdi:broom"
          .color=${Number(b)<=1?"red":"amber"}
          label="Cleaning Due"
          value="${b} days"
        ></petlibro-tile>
      `:F}

      ${void 0!==y?q`
        <petlibro-tile
          icon="mdi:counter"
          color="pink"
          label="Potty Today"
          value="${y}x${$?` (${$}s)`:""}"
        ></petlibro-tile>
      `:F}

      ${void 0!==f?q`
        <petlibro-tile
          icon="mdi:air-purifier"
          color="green"
          label="Deodorization"
          value=${String(f)}
        ></petlibro-tile>
      `:F}
    
      ${void 0!==l?q`
        <petlibro-tile
          icon="mdi:calendar-clock"
          .color=${Number(l)>0?"green":"default"}
          label="Schedules"
          value="${d??(0===Number(l)?"None":l)}"
        ></petlibro-tile>
      `:F}

    </div>

    ${o?q`
      <div class="chip-controls">
        ${i.buttons.trigger_clean?q`
          <petlibro-pill-button
            icon="mdi:broom"
            variant="primary"
            @click=${()=>s(i.buttons.trigger_clean)}
          >Clean</petlibro-pill-button>
        `:F}

        ${i.buttons.trigger_stop_action?q`
          <petlibro-pill-button
            icon="mdi:stop"
            @click=${()=>s(i.buttons.trigger_stop_action)}
          >Stop</petlibro-pill-button>
        `:F}

        ${i.switches.light_switch?q`
          <petlibro-pill-button
            icon="mdi:lightbulb${m?"":"-outline"}"
            ?active=${m}
            @click=${()=>r(i.switches.light_switch)}
          >Light</petlibro-pill-button>
        `:F}

        ${i.switches.sound_switch?q`
          <petlibro-pill-button
            icon="mdi:volume-${v?"high":"off"}"
            ?active=${v}
            @click=${()=>r(i.switches.sound_switch)}
          >Sound</petlibro-pill-button>
        `:F}

        ${i.switches.after_deodorization_switch?q`
          <petlibro-pill-button
            icon="mdi:air-purifier"
            ?active=${Ce(t,i.switches.after_deodorization_switch)}
            @click=${()=>r(i.switches.after_deodorization_switch)}
          >Auto Deodorize</petlibro-pill-button>
        `:F}

        ${i.switches.avoid_repeat_clean?q`
          <petlibro-pill-button
            icon="mdi:repeat-off"
            ?active=${Ce(t,i.switches.avoid_repeat_clean)}
            @click=${()=>r(i.switches.avoid_repeat_clean)}
          >No Repeat</petlibro-pill-button>
        `:F}

        ${i.switches.enable_auto_clean_in_sleep_mode?q`
          <petlibro-pill-button
            icon="mdi:broom"
            ?active=${Ce(t,i.switches.enable_auto_clean_in_sleep_mode)}
            @click=${()=>r(i.switches.enable_auto_clean_in_sleep_mode)}
          >Sleep Clean</petlibro-pill-button>
        `:F}

        ${i.switches.enable_deodorization_in_sleep_mode?q`
          <petlibro-pill-button
            icon="mdi:weather-windy"
            ?active=${Ce(t,i.switches.enable_deodorization_in_sleep_mode)}
            @click=${()=>r(i.switches.enable_deodorization_in_sleep_mode)}
          >Sleep Deodorize</petlibro-pill-button>
        `:F}

        ${i.buttons.reset_filter?q`
          <petlibro-pill-button
            icon="mdi:air-filter"
            @click=${()=>s(i.buttons.reset_filter)}
          >Reset Filter</petlibro-pill-button>
        `:F}

        ${i.buttons.reset_cleaning?q`
          <petlibro-pill-button
            icon="mdi:broom"
            @click=${()=>s(i.buttons.reset_cleaning)}
          >Reset Clean</petlibro-pill-button>
        `:F}

        ${i.buttons.reset_mat?q`
          <petlibro-pill-button
            icon="mdi:rug"
            @click=${()=>s(i.buttons.reset_mat)}
          >Reset Mat</petlibro-pill-button>
        `:F}
      </div>
    `:F}

    ${o&&A?q`
      <div class="settings">
        ${Te(t,i.selects.clean_mode_select,"mdi:broom","purple","Clean Mode",n)}
        ${Te(t,i.selects.deodorization_wind_speed_select,"mdi:weather-windy","blue","Wind Speed",n)}
        ${Me(t,i.numbers.volume_control,"mdi:volume-high","purple","Volume","%",a,10)}
        ${Me(t,i.numbers.auto_delay_sec,"mdi:timer-outline","amber","Clean Delay","s",a,10)}
        ${Me(t,i.numbers.duration_after_deodorization,"mdi:air-purifier","green","Deodorize Time","m",a)}
      </div>
    `:F}

    ${o?je(e):F}
  `}(t);case"pet":return function(e){const{hass:t,entities:i,showControls:o}=e,{toggle:s,select:r,setNumber:n}=e.actions,a=Se(t,i.sensors.type),l=Se(t,i.sensors.breed_name),d=Se(t,i.sensors.age),c=Se(t,i.sensors.rfid),p=Ee(t,i.sensors.bound_device_nums),_=Ne(t,i.numbers.weight),h=Ee(t,i.numbers.weight),u=Ee(t,i.numbers.weight_goal),g=Ne(t,i.numbers.weight_goal),b=Ce(t,i.switches.sterilization),f=Se(t,i.selects.pet_sex),m=void 0!==f&&"none"!==f,v=void 0!==u&&u>0,y=v&&void 0!==h?Math.min(100,Math.round(h/u*100)):void 0,$=i.numbers.weight_goal||i.selects.feeding_goal||i.numbers.drinking_goal||i.numbers.walking_goal||i.numbers.playing_goal||i.numbers.training_goal,w=i.selects.pet_sex||i.switches.sterilization;return q`
    <div class="chip-row">
      ${a?q`
        <petlibro-chip icon=${De(a)}>${a}</petlibro-chip>
      `:F}
      ${m?q`
        <petlibro-chip icon=${"female"===f?"mdi:gender-female":"mdi:gender-male"}>
          ${f}
        </petlibro-chip>
      `:F}
      ${b?q`
        <petlibro-chip icon="mdi:content-cut">Neutered</petlibro-chip>
      `:F}
      ${void 0!==p&&p>0?q`
        <petlibro-chip icon="mdi:link-variant">${p} linked</petlibro-chip>
      `:F}
    </div>

    <div class="tile-grid">
      ${void 0!==_?q`
        <petlibro-tile
          icon="mdi:scale-bathroom"
          color="green"
          label=${v?`Weight (goal ${g})`:"Weight"}
          value=${_}
          .progress=${y}
          progress-variant="ok"
        ></petlibro-tile>
      `:F}

      ${void 0!==d?q`
        <petlibro-tile icon="mdi:cake-variant" color="pink" label="Age" value=${d}></petlibro-tile>
      `:F}

      ${void 0!==l?q`
        <petlibro-tile
          .icon=${De(a)}
          color="purple"
          label="Breed"
          value=${l}
        ></petlibro-tile>
      `:F}

      ${c?q`
        <petlibro-tile icon="mdi:nfc-variant" color="blue" label="RFID" value=${c}></petlibro-tile>
      `:F}
    </div>

    ${o&&$?q`
      <petlibro-section label="Goals" icon="mdi:target" open>
        ${Te(t,i.selects.feeding_goal,"mdi:food-drumstick","amber","Dry Food",r)}
        ${Me(t,i.numbers.weight_goal,"mdi:scale-bathroom","green","Weight","kg",n,.1)}
        ${Me(t,i.numbers.drinking_goal,"mdi:cup-water","blue","Drinking","mL",n,10)}
        ${Me(t,i.numbers.walking_goal,"mdi:walk","green","Walking","min",n,5)}
        ${Me(t,i.numbers.playing_goal,"mdi:tennis-ball","purple","Playing","min",n,5)}
        ${Me(t,i.numbers.training_goal,"mdi:school","amber","Training","min",n,5)}
      </petlibro-section>
    `:F}

    ${o&&w?q`
      <petlibro-section label="Profile" icon="mdi:card-account-details-outline">
        ${Te(t,i.selects.pet_sex,"mdi:gender-male-female","pink","Sex",r)}
        ${i.switches.sterilization?q`
          <petlibro-entity-row
            icon="mdi:content-cut"
            .color=${b?"green":"default"}
            primary="Neutered / Spayed"
          >
            <ha-switch
              slot="trailing"
              ?checked=${b}
              @change=${()=>s(i.switches.sterilization)}
            ></ha-switch>
          </petlibro-entity-row>
        `:F}
      </petlibro-section>
    `:F}
  `}(t);default:return q`<div class="unavailable">Unknown device type</div>`}}_handleButtonPress(e){this.hass.callService("button","press",{entity_id:e})}_handleSwitchToggle(e){this.hass.callService("switch","toggle",{entity_id:e})}_handleSelectChange(e,t){this.hass.callService("select","select_option",{entity_id:e,option:t})}_handleNumberChange(e,t){this.hass.callService("number","set_value",{entity_id:e,value:t})}_getDeviceTypeIcon(){switch(this._deviceType){case"feeder":return"mdi:food-drumstick";case"fountain":return"mdi:water";case"litter_box":return"mdi:cat";default:return"mdi:paw"}}_getAllEntityIds(){return this._entities?[...Object.values(this._entities.sensors),...Object.values(this._entities.binary_sensors),...Object.values(this._entities.buttons),...Object.values(this._entities.switches),...Object.values(this._entities.numbers),...Object.values(this._entities.selects),...Object.values(this._entities.dates),...Object.values(this._entities.images),...Object.values(this._entities.updates)]:[]}};e([_e({attribute:!1})],Xe.prototype,"hass",void 0),e([he()],Xe.prototype,"_config",void 0),e([he()],Xe.prototype,"_deviceId",void 0),e([he()],Xe.prototype,"_deviceType",void 0),e([he()],Xe.prototype,"_entities",void 0),e([he()],Xe.prototype,"_primaryEntityId",void 0),Xe=e([de(ge)],Xe);let et=class extends ae{static{this.styles=n`
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
  `}setConfig(e){this._config=e}_getPetlibroDevices(){if(!this.hass?.entities||!this.hass?.devices)return[];const e=new Set;for(const t of Object.values(this.hass.entities))"petlibro"===t.platform&&t.device_id&&e.add(t.device_id);const t=[];for(const i of e){const e=this.hass.devices[i],o=e?.name_by_user||e?.name||`Device ${i.slice(0,8)}`;t.push({id:i,name:o})}return t.sort((e,t)=>e.name.localeCompare(t.name))}render(){if(!this.hass||!this._config)return q``;const e=this._getPetlibroDevices();return q`
      <div class="editor-row">
        <label>PetLibro Device</label>
        <select @change=${this._deviceChanged}>
          <option value="" ?selected=${!this._config.device_id}>
            — Select a device —
          </option>
          ${e.map(e=>q`
              <option value=${e.id} ?selected=${this._config.device_id===e.id}>
                ${e.name}
              </option>
            `)}
        </select>
        ${0===e.length?q`<div class="no-devices">
              No PetLibro devices found. Make sure the PetLibro integration is installed and configured.
            </div>`:F}
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
    `}_deviceChanged(e){const t=e.target.value;if(!t)return;const i={type:this._config.type,device_id:t,show_controls:this._config.show_controls};this._config.name&&(i.name=this._config.name),this._updateConfig(i)}_nameChanged(e){const t=e.target.value||void 0;this._updateConfig({...this._config,name:t})}_showControlsChanged(e){const t=e.target.checked;this._updateConfig({...this._config,show_controls:t})}_updateConfig(e){this._config=e;const t=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}};e([_e({attribute:!1})],et.prototype,"hass",void 0),e([he()],et.prototype,"_config",void 0),et=e([de(be)],et);var tt=Object.freeze({__proto__:null,get PetlibroCardEditor(){return et}});export{Xe as PetlibroCard};
