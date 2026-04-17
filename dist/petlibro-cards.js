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
const x=globalThis,A=e=>e,k=x.trustedTypes,S=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,z=`<${P}>`,O=document,N=()=>O.createComment(""),T=e=>null===e||"object"!=typeof e&&"function"!=typeof e,M=Array.isArray,U="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,D=/>/g,H=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,I=/"/g,q=/^(?:script|style|textarea|title)$/i,B=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),F=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),V=new WeakMap,K=O.createTreeWalker(O,129);function Z(e,t){if(!M(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(t):t}const J=(e,t)=>{const i=e.length-1,o=[];let s,r=2===t?"<svg>":3===t?"<math>":"",n=j;for(let t=0;t<i;t++){const i=e[t];let a,l,d=-1,c=0;for(;c<i.length&&(n.lastIndex=c,l=n.exec(i),null!==l);)c=n.lastIndex,n===j?"!--"===l[1]?n=R:void 0!==l[1]?n=D:void 0!==l[2]?(q.test(l[2])&&(s=RegExp("</"+l[2],"g")),n=H):void 0!==l[3]&&(n=H):n===H?">"===l[0]?(n=s??j,d=-1):void 0===l[1]?d=-2:(d=n.lastIndex-l[2].length,a=l[1],n=void 0===l[3]?H:'"'===l[3]?I:L):n===I||n===L?n=H:n===R||n===D?n=j:(n=H,s=void 0);const p=n===H&&e[t+1].startsWith("/>")?" ":"";r+=n===j?i+z:d>=0?(o.push(a),i.slice(0,d)+E+i.slice(d)+C+p):i+C+(-2===d?t:p)}return[Z(e,r+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class G{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let s=0,r=0;const n=e.length-1,a=this.parts,[l,d]=J(e,t);if(this.el=G.createElement(l,i),K.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=K.nextNode())&&a.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(E)){const t=d[r++],i=o.getAttribute(e).split(C),n=/([.?@])?(.*)/.exec(t);a.push({type:1,index:s,name:n[2],strings:i,ctor:"."===n[1]?te:"?"===n[1]?ie:"@"===n[1]?oe:ee}),o.removeAttribute(e)}else e.startsWith(C)&&(a.push({type:6,index:s}),o.removeAttribute(e));if(q.test(o.tagName)){const e=o.textContent.split(C),t=e.length-1;if(t>0){o.textContent=k?k.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],N()),K.nextNode(),a.push({type:2,index:++s});o.append(e[t],N())}}}else if(8===o.nodeType)if(o.data===P)a.push({type:2,index:s});else{let e=-1;for(;-1!==(e=o.data.indexOf(C,e+1));)a.push({type:7,index:s}),e+=C.length-1}s++}}static createElement(e,t){const i=O.createElement("template");return i.innerHTML=e,i}}function Q(e,t,i=e,o){if(t===F)return t;let s=void 0!==o?i._$Co?.[o]:i._$Cl;const r=T(t)?void 0:t._$litDirective$;return s?.constructor!==r&&(s?._$AO?.(!1),void 0===r?s=void 0:(s=new r(e),s._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=s:i._$Cl=s),void 0!==s&&(t=Q(e,s._$AS(e,t.values),s,o)),t}class X{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??O).importNode(t,!0);K.currentNode=o;let s=K.nextNode(),r=0,n=0,a=i[0];for(;void 0!==a;){if(r===a.index){let t;2===a.type?t=new Y(s,s.nextSibling,this,e):1===a.type?t=new a.ctor(s,a.name,a.strings,this,e):6===a.type&&(t=new se(s,this,e)),this._$AV.push(t),a=i[++n]}r!==a?.index&&(s=K.nextNode(),r++)}return K.currentNode=O,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Q(this,e,t),T(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==F&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>M(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==W&&T(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=G.createElement(Z(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new X(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=V.get(e.strings);return void 0===t&&V.set(e.strings,t=new G(e)),t}k(e){M(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const s of e)o===t.length?t.push(i=new Y(this.O(N()),this.O(N()),this,this.options)):i=t[o],i._$AI(s),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=A(e).nextSibling;A(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,s){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(e,t=this,i,o){const s=this.strings;let r=!1;if(void 0===s)e=Q(this,e,t,0),r=!T(e)||e!==this._$AH&&e!==F,r&&(this._$AH=e);else{const o=e;let n,a;for(e=s[0],n=0;n<s.length-1;n++)a=Q(this,o[i+n],t,n),a===F&&(a=this._$AH[n]),r||=!T(a)||a!==this._$AH[n],a===W?e=W:e!==W&&(e+=(a??"")+s[n+1]),this._$AH[n]=a}r&&!o&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}}class ie extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==W)}}class oe extends ee{constructor(e,t,i,o,s){super(e,t,i,o,s),this.type=5}_$AI(e,t=this){if((e=Q(this,e,t,0)??W)===F)return;const i=this._$AH,o=e===W&&i!==W||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==W&&(i===W||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class se{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Q(this,e)}}const re=x.litHtmlPolyfillSupport;re?.(G,Y),(x.litHtmlVersions??=[]).push("3.3.2");const ne=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ae=class extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let s=o._$litPart$;if(void 0===s){const e=i?.renderBefore??null;o._$litPart$=s=new Y(t.insertBefore(N(),e),e,void 0,i??{})}return s._$AI(e),s})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};ae._$litElement$=!0,ae.finalized=!0,ne.litElementHydrateSupport?.({LitElement:ae});const le=ne.litElementPolyfillSupport;le?.({LitElement:ae}),(ne.litElementVersions??=[]).push("4.2.2");
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
 */function he(e){return _e({...e,state:!0,attribute:!1})}const ue="0.6.0",ge="petlibro-card",be="petlibro-card-editor",fe=["food_low","food_status","manual_feed","feeding_plan_state","today_feeding_quantity_weight","rotate_food_bowl"],me=["remaining_filter_days","remaining_water","remaining_water_volume"],ve=["rubbish_full_state","waste_bin_full","garbage_warehouse_state","waste_bin_state"],ye={wi_fi_signal_strength:"wifi_rssi",wi_fi_ssid:"wifi_ssid",wi_fi_s_s_i_d:"wifi_ssid",battery_level:"battery_state",battery_ac:"electric_quantity",buttons_lock:"child_lock_switch",remaining_desiccant_days:"remaining_desiccant",feeding_plan:"feeding_plan_state",display_value:"display_selection",todays_total_eating_time:"today_eating_time",camera_resolution:"resolution",night_vision_mode:"night_vision",video_recording_enabled:"enable_video_record",video_recording_switch:"video_record_switch",video_recording_mode:"video_record_mode",feeding_begins:"next_feeding_time",feeding_ends:"next_feeding_end_time",manually_open_close_lid:"manual_feed_now",remaining_water_volume:"remaining_water",todays_water_consumption:"today_drinking_amount",total_water_used_today:"today_drinking_amount",yesterdays_water_consumption:"yesterday_drinking_amount",todays_total_drinking_time:"today_drinking_time",todays_average_drinking_time:"today_avg_time",today_drinking_times:"today_drinking_count",yesterday_drinking_times:"yesterday_drinking_count",current_weight_percent:"weight_percent",water_time_duration:"use_water_duration",tank_capacity:"tank_total_ml",alert_message:"exception_message",power_source:"power_state",human_detection_sensitivity:"human_sensitivity_level",battery_status:"battery_charge_state",battery8_hour_supply:"battery_supply_8_hours",litter_level:"weight_percent",litter_weight:"weight",cleanliness_state:"clean_state",waste_bin_state:"garbage_warehouse_state",mat_replacement_days:"remaining_mat_days",filter_replacement_days:"remaining_replacement_days",food_dispenser:"food_dispenser_state",food_status:"food_low",today_s_feeding_schedule:"feeding_plan_state",wi_fi:"online",sleep_mode:"whether_in_sleep_mode",lid_status:"door_blocked",lid:"door_state",indicator:"light_switch",sound_status:"sound_switch",food_outlet:"food_outlet_state",device_error:"device_stopped_working",device_fault:"device_stopped_working",door_error:"barn_door_error",deodorization_active:"deodorization_state_on",display_status:"display_switch",waste_bin_full:"rubbish_full_state",waste_bin_installed:"rubbish_inplace_state",water_dispensing_state:"water_state",vacuum_active:"vacuum_state",door:"door_open",run_air_purifier:"trigger_vacuum",open_door:"trigger_open_door",close_door:"trigger_close_door",level_litter:"trigger_level_litter",empty_waste_bin:"trigger_empty_waste",start_clean_cycle:"trigger_clean",stop_current_action:"trigger_stop_action",manually_open_lid:"manual_lid_open",turn_on_sleep_mode:"sleep_on",turn_off_sleep_mode:"sleep_off",turn_on_sound:"sound_on",turn_off_sound:"sound_off",turn_on_indicator:"light_on",turn_off_indicator:"light_off",turn_on_display:"display_on",turn_off_display:"display_off",desiccant_replaced:"desiccant_reset",reposition_the_schedule:"reposition_schedule",enable_selected_plan:"feeding_plan_enable",disable_selected_plan:"feeding_plan_disable",delete_selected_plan:"feeding_plan_delete",skip_selected_plan_today:"feeding_plan_skip_today",un_skip_selected_plan_today:"feeding_plan_unskip_today",enable_today_s_feeding_schedule:"feeding_plan_today_enable_all",disable_today_s_feeding_schedule:"feeding_plan_today_disable_all",enable_feeding_schedule:"enable_feeding_plan",disable_feeding_schedule:"disable_feeding_plan",reset_cleaning_timer:"reset_cleaning",reset_filter_timer:"reset_filter",reset_mat_timer:"reset_mat",light:"light_switch",sound:"sound_switch",deodorization:"deodorization_mode_switch",after_use_deodorization:"after_deodorization_switch",auto_clean_in_sleep_mode:"enable_auto_clean_in_sleep_mode",deodorize_in_sleep_mode:"enable_deodorization_in_sleep_mode",icon_to_display:"display_icon",auto_clean_delay:"auto_delay_sec",post_use_deodorization_duration:"duration_after_deodorization",text_on_display:"display_text"},$e=["today_feeding_quantity_weight","today_feeding_quantity_volume","last_feed_quantity_weight","last_feed_quantity_volume","next_feed_quantity_weight","next_feed_quantity_volume","enable_low_battery_notice","today_feeding_times","feeding_plan_state","remaining_desiccant","manual_feed_quantity","electric_quantity","battery_state","last_feed_time","next_feed_time","child_lock_switch","whether_in_sleep_mode","food_dispenser_state","food_outlet_state","today_eating_times","today_eating_time","display_selection","manual_feed","manual_lid_open","enable_feeding_plan","disable_feeding_plan","feeding_plan_enable","feeding_plan_disable","feeding_plan_delete","feeding_plan_skip_today","feeding_plan_unskip_today","feeding_plan_today_enable_all","feeding_plan_today_disable_all","feeding_plan_select","feeding_plan_today_select","feeding_schedule","desiccant_reset","desiccant_frequency","desiccant_cycle","light_on","light_off","light_switch","sound_on","sound_off","sound_switch","sound_level","display_on","display_off","display_switch","display_text","display_icon","sleep_on","sleep_off","food_low","door_state","door_blocked","vacuum_state","wifi_ssid","wifi_rssi","online","wi_fi","resolution","night_vision","enable_video_record","video_record_switch","video_record_mode","pump_air_state","ring_bell","rotate_food_bowl","reposition_schedule","next_feeding_day","next_feeding_time","next_feeding_end_time","manual_feed_now","manual_feed_quantity_cups","lid_close_time","lid_mode","lid_speed","temperature","plate_position","remaining_cleaning_days","remaining_filter_days","remaining_water","remaining_water_ml","weight_percent","use_water_interval","use_water_duration","weight_state","tank_total_ml","exception_message","volume_level","water_state","water_interval","water_dispensing_duration","water_dispensing_mode","water_low_threshold","water_sensing_delay","cleaning_cycle","cleaning_reset","filter_cycle","filter_reset","device_stopped_working","today_drinking_amount","yesterday_drinking_amount","today_drinking_time","today_avg_time","today_drinking_count","yesterday_drinking_count","battery_charge_state","battery_supply_8_hours","power_state","radar_sensing_level","radar_sensing_threshold","radar_gain","human_sensitivity_level","remaining_replacement_days","remaining_mat_days","filter_state","clean_state","mat_state","vacuum_mode","throw_mode","deodorization_mode","deodorization_mode_switch","deodorization_state_on","garbage_warehouse_state","running_state","clean_mode","volume","weight","rubbish_full_state","rubbish_inplace_state","door_open","barn_door_error","trigger_clean","trigger_empty_waste","trigger_level_litter","trigger_stop_action","trigger_open_door","trigger_close_door","trigger_vacuum","today_potty_times","today_potty_duration","after_deodorization_switch","avoid_repeat_clean","enable_auto_clean_in_sleep_mode","enable_deodorization_in_sleep_mode","auto_delay_sec","duration_after_deodorization","reset_cleaning","reset_filter","reset_mat",...Object.keys(ye)].sort((e,t)=>t.length-e.length),we=n`
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
`,xe={sensor:"sensors",binary_sensor:"binary_sensors",button:"buttons",switch:"switches",number:"numbers",select:"selects",date:"dates",image:"images",update:"updates"};function Ae(e){const t=e.indexOf(".");if(t<0)return;const i=e.substring(t+1);for(const e of $e)if(i.endsWith(e)){const t=i.substring(0,i.length-e.length);if(""===t||t.endsWith("_"))return ye[e]??e}}function ke(e,t){if(!t)return;const i=e.states[t]?.state;return"unavailable"!==i&&"unknown"!==i?i:void 0}function Se(e,t){const i=ke(e,t);if(void 0===i)return;const o=Number(i);return isNaN(o)?void 0:o}function Ee(e,t){if(!t)return!1;const i=e.states[t]?.state;return"on"===i||"connected"===i||"true"===i||"True"===i}function Ce(e,t){const i=ke(e,t);if(i)try{const e=new Date(i);return isNaN(e.getTime())?i:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}catch{return i}}function Pe(e){return e>=90?"mdi:battery":e>=70?"mdi:battery-70":e>=50?"mdi:battery-50":e>=30?"mdi:battery-30":e>=10?"mdi:battery-10":"mdi:battery-alert"}function ze(e,t,i,o,s,r){if(!t||!e.states[t])return W;const n=e.states[t].attributes?.options??[],a=e.states[t].state;return B`
    <petlibro-entity-row .icon=${i} .color=${o} .primary=${s}>
      <select
        slot="trailing"
        class="pet-select"
        @change=${e=>r(t,e.target.value)}
      >
        ${n.map(e=>B`
          <option value=${e} ?selected=${a===e}>${e}</option>
        `)}
      </select>
    </petlibro-entity-row>
  `}function Oe(e,t,i,o,s,r,n,a=1){if(!t||!e.states[t])return W;const l=e.states[t].attributes??{},d=Number(e.states[t].state??0),c=Number(l.min??0),p=Number(l.max??100),_=Number(l.step??a);return B`
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
  `}function Ne(e,t,i){const o=t?e.buttons.light_off:e.buttons.light_on;return o?B`
    <petlibro-pill-button
      icon="mdi:lightbulb${t?"":"-outline"}"
      ?active=${t}
      @click=${()=>i(o)}
    >Light</petlibro-pill-button>
  `:W}const Te=n`
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
`;let Me=class extends ae{constructor(){super(...arguments),this.icon="",this.color="default",this.size="md"}static{this.styles=n`
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
  `}render(){return B`<div class="shape"><ha-icon .icon=${this.icon}></ha-icon></div>`}};e([_e({type:String})],Me.prototype,"icon",void 0),e([_e({type:String,reflect:!0})],Me.prototype,"color",void 0),e([_e({type:String,reflect:!0})],Me.prototype,"size",void 0),Me=e([de("petlibro-shape-icon")],Me);let Ue=class extends ae{constructor(){super(...arguments),this.icon="",this.variant="neutral"}static{this.styles=n`
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
  `}render(){return B`
      ${this.icon?B`<ha-icon .icon=${this.icon}></ha-icon>`:W}
      <slot></slot>
    `}};e([_e({type:String})],Ue.prototype,"icon",void 0),e([_e({type:String,reflect:!0})],Ue.prototype,"variant",void 0),Ue=e([de("petlibro-chip")],Ue);let je=class extends ae{constructor(){super(...arguments),this.name="",this.online=!1,this.fallbackIcon="mdi:paw"}static{this.styles=n`
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
  `}render(){return B`
      ${this.image?B`<img class="image" src=${this.image} alt=${this.name} />`:B`<div class="placeholder"><ha-icon .icon=${this.fallbackIcon}></ha-icon></div>`}
      <div class="info">
        <div class="name">${this.name}</div>
        ${this.model?B`<div class="model">${this.model}</div>`:W}
      </div>
      <div class="status">
        <div class="dot"></div>
        <span>${this.online?"Online":"Offline"}</span>
      </div>
    `}};e([_e({type:String})],je.prototype,"image",void 0),e([_e({type:String})],je.prototype,"name",void 0),e([_e({type:String})],je.prototype,"model",void 0),e([_e({type:Boolean,reflect:!0})],je.prototype,"online",void 0),e([_e({type:String})],je.prototype,"fallbackIcon",void 0),je=e([de("petlibro-card-header")],je);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Re=1;let De=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He="important",Le=" !"+He,Ie=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends De{constructor(e){if(super(e),e.type!==Re||"style"!==e.name||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const o=e[i];return null==o?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ft)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)null==t[e]&&(this.ft.delete(e),e.includes("-")?i.removeProperty(e):i[e]=null);for(const e in t){const o=t[e];if(null!=o){this.ft.add(e);const t="string"==typeof o&&o.endsWith(Le);e.includes("-")||t?i.setProperty(e,t?o.slice(0,-11):o,t?He:""):i[e]=o}}return F}});let qe=class extends ae{constructor(){super(...arguments),this.icon="",this.color="default",this.label="",this.value="",this.progressVariant="ok"}static{this.styles=n`
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
  `}render(){return B`
      <petlibro-shape-icon .icon=${this.icon} .color=${this.color}></petlibro-shape-icon>
      <div class="text">
        <div class="label">${this.label}</div>
        <div class="value">${this.value}</div>
        ${void 0!==this.progress?B`
          <div class="gauge">
            <div
              class="gauge-fill"
              style=${Ie({width:`${Math.min(100,Math.max(0,this.progress))}%`})}
            ></div>
          </div>
        `:W}
      </div>
    `}};e([_e({type:String})],qe.prototype,"icon",void 0),e([_e({type:String})],qe.prototype,"color",void 0),e([_e({type:String})],qe.prototype,"label",void 0),e([_e({type:String})],qe.prototype,"value",void 0),e([_e({type:Number})],qe.prototype,"progress",void 0),e([_e({type:String,reflect:!0,attribute:"progress-variant"})],qe.prototype,"progressVariant",void 0),qe=e([de("petlibro-tile")],qe);let Be=class extends ae{constructor(){super(...arguments),this.icon="",this.color="default",this.primary=""}static{this.styles=n`
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
  `}render(){return B`
      <petlibro-shape-icon .icon=${this.icon} .color=${this.color}></petlibro-shape-icon>
      <div class="text">
        <div class="primary">${this.primary}</div>
        ${this.secondary?B`<div class="secondary">${this.secondary}</div>`:W}
      </div>
      <slot name="trailing"></slot>
    `}};e([_e({type:String})],Be.prototype,"icon",void 0),e([_e({type:String})],Be.prototype,"color",void 0),e([_e({type:String})],Be.prototype,"primary",void 0),e([_e({type:String})],Be.prototype,"secondary",void 0),Be=e([de("petlibro-entity-row")],Be);let Fe=class extends ae{constructor(){super(...arguments),this.variant="default",this.active=!1,this.disabled=!1}static{this.styles=n`
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
  `}render(){return B`
      <button type="button" ?disabled=${this.disabled}>
        ${this.icon?B`<ha-icon .icon=${this.icon}></ha-icon>`:W}
        <slot></slot>
      </button>
    `}};e([_e({type:String,reflect:!0})],Fe.prototype,"variant",void 0),e([_e({type:String})],Fe.prototype,"icon",void 0),e([_e({type:Boolean,reflect:!0})],Fe.prototype,"active",void 0),e([_e({type:Boolean,reflect:!0})],Fe.prototype,"disabled",void 0),Fe=e([de("petlibro-pill-button")],Fe);let We=class extends ae{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.step=1,this.unit="",this.disabled=!1}static{this.styles=n`
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
  `}_emit(e){this.dispatchEvent(new CustomEvent("petlibro-stepper-change",{detail:{value:e},bubbles:!0,composed:!0}))}_dec(){this._emit(Math.max(this.min,this.value-this.step))}_inc(){this._emit(Math.min(this.max,this.value+this.step))}render(){return B`
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
    `}};e([_e({type:Number})],We.prototype,"value",void 0),e([_e({type:Number})],We.prototype,"min",void 0),e([_e({type:Number})],We.prototype,"max",void 0),e([_e({type:Number})],We.prototype,"step",void 0),e([_e({type:String})],We.prototype,"unit",void 0),e([_e({type:Boolean})],We.prototype,"disabled",void 0),We=e([de("petlibro-stepper")],We),console.info(`%c PETLIBRO-CARD %c v${ue} `,"color: white; background: #3498db; font-weight: bold;","color: #3498db; background: white; font-weight: bold;");const Ve=window;Ve.customCards=Ve.customCards??[],Ve.customCards.push({type:ge,name:"Petlibro Card",description:"Auto-detecting card for PetLibro feeders, fountains, and litter boxes",preview:!0});let Ke=class extends ae{static{this.styles=[Te,we]}static async getConfigElement(){return await Promise.resolve().then(function(){return Je}),document.createElement(be)}static getStubConfig(){return{device_id:""}}setConfig(e){if(!e.device_id&&!e.entity)throw new Error("Please select a PetLibro device");this._config={show_controls:!0,...e}}getCardSize(){return 4}shouldUpdate(e){if(e.has("_config"))return!0;if(!e.has("hass")||!this._entities)return!0;const t=e.get("hass");if(!t)return!0;return this._getAllEntityIds().some(e=>t.states[e]!==this.hass.states[e])}willUpdate(e){var t,i;if(this.hass&&this._config&&(e.has("hass")||e.has("_config"))){let e;this._config.device_id?e=this._config.device_id:this._config.entity&&(t=this.hass,i=this._config.entity,e=t.entities?.[i]?.device_id??void 0),e&&e!==this._deviceId&&(this._deviceId=e,this._entities=function(e,t){const i={sensors:{},binary_sensors:{},buttons:{},switches:{},numbers:{},selects:{},dates:{},images:{},updates:{}};if(!e.entities)return i;for(const[o,s]of Object.entries(e.entities)){if(s.device_id!==t)continue;const e=o.substring(0,o.indexOf(".")),r=xe[e];if(!r)continue;const n=Ae(o);n&&(i[r][n]=o)}return i}(this.hass,e),this._deviceType=function(e){const t=new Set([...Object.keys(e.sensors),...Object.keys(e.binary_sensors),...Object.keys(e.buttons),...Object.keys(e.switches)]);return ve.some(e=>t.has(e))?"litter_box":fe.some(e=>t.has(e))?"feeder":me.some(e=>t.has(e))?"fountain":"feeder"}(this._entities),this._primaryEntityId=this._config.entity||function(e,t){if(e.entities)for(const[i,o]of Object.entries(e.entities))if(o.device_id===t)return i}(this.hass,e)||"")}}render(){if(!this._config||!this.hass)return B``;if(!this._deviceId||!this._entities||!this._deviceType)return B`
        <ha-card>
          <div class="unavailable">
            <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
            <div>Entity not found or device not yet available</div>
          </div>
        </ha-card>
      `;const e=this._primaryEntityId??"",t=this.hass.states[e]?.state;return"unavailable"===t?B`
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
    `}_renderHeader(){const e=this._config.name||(t=this.hass,i=this._deviceId,t.devices?.[i]?.name??void 0)||"PetLibro Device";var t,i;const o=this._primaryEntityId??"",s=function(e,t,i){const o=e.states[t]?.attributes?.entity_picture;if("string"==typeof o&&o)return o;if(e.entities)for(const[t,o]of Object.entries(e.entities)){if(o.device_id!==i)continue;const s=e.states[t]?.attributes?.entity_picture;if("string"==typeof s&&s)return s}return e.devices?.[i]?.configuration_url??void 0}(this.hass,o,this._deviceId),r=Ee(this.hass,this._entities.binary_sensors.online),n=this.hass.devices?.[this._deviceId]?.model;return B`
      <petlibro-card-header
        .image=${s??void 0}
        .name=${e}
        .model=${n??void 0}
        ?online=${r}
        .fallbackIcon=${this._getDeviceTypeIcon()}
      ></petlibro-card-header>
    `}_renderDeviceContent(){if(!this._entities)return W;const e=this._config.show_controls??!0;switch(this._deviceType){case"feeder":return function(e,t,i,o,s,r=!0){const n=Se(e,t.sensors.electric_quantity),a=Ee(e,t.binary_sensors.food_low),l=ke(e,t.sensors.today_feeding_quantity_weight),d=ke(e,t.sensors.today_feeding_times),c=Ce(e,t.sensors.last_feed_time),p=Ce(e,t.sensors.next_feed_time),_=ke(e,t.sensors.next_feed_quantity_weight),h=void 0!==t.binary_sensors.feeding_plan_state,u=Ee(e,t.binary_sensors.feeding_plan_state),g=e.states[t.sensors.today_feeding_quantity_weight??""]?.attributes?.unit_of_measurement??"g",b=e.states[t.sensors.next_feed_quantity_weight??""]?.attributes?.unit_of_measurement??"g",f=Ee(e,t.binary_sensors.light_switch),m=ke(e,t.sensors.temperature),v=e.states[t.sensors.temperature??""]?.attributes?.unit_of_measurement??"°F",y=ke(e,t.sensors.plate_position),$=ke(e,t.sensors.next_feeding_time),w=ke(e,t.sensors.next_feeding_end_time),x=ke(e,t.sensors.next_feeding_day),A=void 0===n?"default":n<=20?"red":n<=50?"amber":"green";return B`
    ${a?B`
      <div class="chip-row">
        <petlibro-chip icon="mdi:bowl-mix-outline" variant="warn">Food Low</petlibro-chip>
      </div>
    `:W}

    <div class="tile-grid">
      ${void 0!==n?B`
        <petlibro-tile
          .icon=${Pe(n)}
          .color=${A}
          label="Battery"
          value="${Math.round(n)}%"
        ></petlibro-tile>
      `:W}

      <petlibro-tile
        icon=${a?"mdi:bowl-mix-outline":"mdi:bowl-outline"}
        color=${a?"red":"green"}
        label="Food Status"
        value=${a?"Low":"OK"}
      ></petlibro-tile>

      ${void 0!==l?B`
        <petlibro-tile
          icon="mdi:scale"
          color="blue"
          label="Fed Today"
          value="${l} ${g}${d?` (${d}x)`:""}"
        ></petlibro-tile>
      `:W}

      ${c?B`
        <petlibro-tile icon="mdi:history" color="pink" label="Last Feed" value=${c}></petlibro-tile>
      `:W}

      ${p?B`
        <petlibro-tile
          icon="mdi:calendar-arrow-right"
          color="amber"
          label="Next Feed"
          value="${p}${_?` (${_} ${b})`:""}"
        ></petlibro-tile>
      `:W}

      ${h?B`
        <petlibro-tile
          icon="mdi:calendar-check"
          color="purple"
          label="Feeding Plan"
          value=${u?"Active":"Inactive"}
        ></petlibro-tile>
      `:W}

      ${void 0!==m?B`
        <petlibro-tile
          icon="mdi:thermometer"
          color="amber"
          label="Temperature"
          value="${m}${v}"
        ></petlibro-tile>
      `:W}

      ${void 0!==y?B`
        <petlibro-tile
          icon="mdi:rotate-3d-variant"
          color="purple"
          label="Plate Position"
          value=${String(y)}
        ></petlibro-tile>
      `:W}

      ${void 0!==$?B`
        <petlibro-tile
          icon="mdi:clock-outline"
          color="amber"
          label="Next Feeding"
          value="${x?`${x} `:""}${$}${w?` – ${w}`:""}"
        ></petlibro-tile>
      `:W}
    </div>

    ${r?B`
      <div class="chip-controls">
        ${t.buttons.manual_feed?B`
          <petlibro-pill-button
            icon="mdi:food-drumstick"
            variant="primary"
            @click=${()=>i(t.buttons.manual_feed)}
          >Feed Now</petlibro-pill-button>
        `:W}

        ${t.switches.manual_feed_now?B`
          <petlibro-pill-button
            icon="mdi:door-open"
            ?active=${Ee(e,t.switches.manual_feed_now)}
            @click=${()=>o(t.switches.manual_feed_now)}
          >Open Lid</petlibro-pill-button>
        `:W}

        ${t.buttons.rotate_food_bowl?B`
          <petlibro-pill-button
            icon="mdi:rotate-3d-variant"
            @click=${()=>i(t.buttons.rotate_food_bowl)}
          >Rotate</petlibro-pill-button>
        `:W}

        ${t.buttons.ring_bell?B`
          <petlibro-pill-button
            icon="mdi:bell-ring"
            @click=${()=>i(t.buttons.ring_bell)}
          >Ring</petlibro-pill-button>
        `:W}

        ${Ne(t,f,i)}
      </div>
    `:W}

    ${r&&t.selects.feeding_plan_select?B`
      <div class="settings">
        ${ze(e,t.selects.feeding_plan_select,"mdi:calendar-clock","purple","Feeding Plan",s)}
      </div>
      <div class="chip-controls">
        ${t.buttons.feeding_plan_enable?B`
          <petlibro-pill-button
            icon="mdi:check"
            @click=${()=>i(t.buttons.feeding_plan_enable)}
          >Enable</petlibro-pill-button>
        `:W}
        ${t.buttons.feeding_plan_disable?B`
          <petlibro-pill-button
            icon="mdi:close"
            @click=${()=>i(t.buttons.feeding_plan_disable)}
          >Disable</petlibro-pill-button>
        `:W}
        ${t.buttons.feeding_plan_today_enable_all?B`
          <petlibro-pill-button
            icon="mdi:calendar-check"
            @click=${()=>i(t.buttons.feeding_plan_today_enable_all)}
          >Enable All Today</petlibro-pill-button>
        `:W}
        ${t.buttons.feeding_plan_today_disable_all?B`
          <petlibro-pill-button
            icon="mdi:calendar-remove"
            @click=${()=>i(t.buttons.feeding_plan_today_disable_all)}
          >Disable All Today</petlibro-pill-button>
        `:W}
      </div>
    `:W}
  `}(this.hass,this._entities,e=>this._handleButtonPress(e),e=>this._handleSwitchToggle(e),(e,t)=>this._handleSelectChange(e,t),e);case"fountain":return function(e,t,i,o=!0){const s=Se(e,t.sensors.electric_quantity),r=Se(e,t.sensors.weight_percent),n=ke(e,t.sensors.remaining_water),a=e.states[t.sensors.remaining_water??""]?.attributes?.unit_of_measurement??"mL",l=ke(e,t.sensors.today_drinking_amount),d=e.states[t.sensors.today_drinking_amount??""]?.attributes?.unit_of_measurement??"mL",c=ke(e,t.sensors.remaining_filter_days),p=ke(e,t.sensors.remaining_cleaning_days),_=Ee(e,t.binary_sensors.light_switch),h=void 0===s?"default":s<=20?"red":s<=50?"amber":"green",u=void 0===r?"ok":r<=10?"alert":r<=25?"warn":"ok",g=void 0===r?"blue":r<=10?"red":r<=25?"amber":"blue",b=void 0!==r&&r<=25?r<=10?"alert":"warn":void 0;return B`
    ${b?B`
      <div class="chip-row">
        <petlibro-chip icon="mdi:water-alert" variant=${b}>Water Low</petlibro-chip>
      </div>
    `:W}

    <div class="tile-grid">
      ${void 0!==s?B`
        <petlibro-tile
          .icon=${Pe(s)}
          .color=${h}
          label="Battery"
          value="${Math.round(s)}%"
        ></petlibro-tile>
      `:W}

      ${void 0!==r?B`
        <petlibro-tile
          icon="mdi:water-percent"
          .color=${g}
          label="Water Level"
          value="${Math.round(r)}%"
          .progress=${r}
          progress-variant=${u}
        ></petlibro-tile>
      `:W}

      ${void 0!==n?B`
        <petlibro-tile
          icon="mdi:water"
          color="blue"
          label="Remaining Water"
          value="${Math.round(Number(n))} ${a}"
        ></petlibro-tile>
      `:W}

      ${void 0!==l?B`
        <petlibro-tile
          icon="mdi:cup-water"
          color="blue"
          label="Today's Drinking"
          value="${l} ${d}"
        ></petlibro-tile>
      `:W}

      ${void 0!==c?B`
        <petlibro-tile
          icon="mdi:air-filter"
          .color=${Number(c)<=3?"red":"pink"}
          label="Filter"
          value="${c} days"
        ></petlibro-tile>
      `:W}

      ${void 0!==p?B`
        <petlibro-tile
          icon="mdi:broom"
          .color=${Number(p)<=1?"red":"purple"}
          label="Cleaning"
          value="${p} days"
        ></petlibro-tile>
      `:W}
    </div>

    ${o?B`
      <div class="chip-controls">
        ${Ne(t,_,i)}

        ${t.buttons.filter_reset?B`
          <petlibro-pill-button
            icon="mdi:air-filter"
            @click=${()=>i(t.buttons.filter_reset)}
          >Reset Filter</petlibro-pill-button>
        `:W}

        ${t.buttons.cleaning_reset?B`
          <petlibro-pill-button
            icon="mdi:broom"
            @click=${()=>i(t.buttons.cleaning_reset)}
          >Reset Cleaning</petlibro-pill-button>
        `:W}
      </div>
    `:W}
  `}(this.hass,this._entities,e=>this._handleButtonPress(e),e);case"litter_box":return function(e,t,i,o,s,r,n=!0){const a=Se(e,t.sensors.electric_quantity),l=Se(e,t.sensors.weight_percent),d=Ee(e,t.binary_sensors.rubbish_full_state),c=ke(e,t.sensors.running_state),p=ke(e,t.sensors.remaining_cleaning_days),_=ke(e,t.sensors.deodorization_mode),h=Ee(e,t.switches.light_switch),u=Ee(e,t.switches.sound_switch),g=ke(e,t.sensors.today_potty_times),b=ke(e,t.sensors.today_potty_duration),f=void 0===a?"default":a<=20?"red":a<=50?"amber":"green",m=void 0===l?"ok":l<=15?"alert":l<=30?"warn":"ok",v=d,y=!!(t.selects.clean_mode||t.selects.deodorization_wind_speed||t.numbers.volume||t.numbers.auto_delay_sec||t.numbers.duration_after_deodorization);return B`
    ${v?B`
      <div class="chip-row">
        ${d?B`<petlibro-chip icon="mdi:delete-alert" variant="alert">Bin Full</petlibro-chip>`:W}
      </div>
    `:W}

    <div class="tile-grid">
      ${void 0!==a?B`
        <petlibro-tile
          .icon=${Pe(a)}
          .color=${f}
          label="Battery"
          value="${Math.round(a)}%"
        ></petlibro-tile>
      `:W}

      ${void 0!==l?B`
        <petlibro-tile
          icon="mdi:gauge"
          color="purple"
          label="Litter Level"
          value="${Math.round(l)}%"
          .progress=${l}
          progress-variant=${m}
        ></petlibro-tile>
      `:W}

      <petlibro-tile
        icon=${d?"mdi:delete-alert":"mdi:delete-variant"}
        color=${d?"red":"green"}
        label="Waste Bin"
        value=${d?"Full":"OK"}
      ></petlibro-tile>

      ${void 0!==c?B`
        <petlibro-tile
          icon="mdi:state-machine"
          color="blue"
          label="Status"
          value=${String(c)}
        ></petlibro-tile>
      `:W}

      ${void 0!==p?B`
        <petlibro-tile
          icon="mdi:broom"
          .color=${Number(p)<=1?"red":"amber"}
          label="Cleaning Due"
          value="${p} days"
        ></petlibro-tile>
      `:W}

      ${void 0!==g?B`
        <petlibro-tile
          icon="mdi:counter"
          color="pink"
          label="Potty Today"
          value="${g}x${b?` (${b}s)`:""}"
        ></petlibro-tile>
      `:W}

      ${void 0!==_?B`
        <petlibro-tile
          icon="mdi:air-purifier"
          color="green"
          label="Deodorization"
          value=${String(_)}
        ></petlibro-tile>
      `:W}
    </div>

    ${n?B`
      <div class="chip-controls">
        ${t.buttons.trigger_clean?B`
          <petlibro-pill-button
            icon="mdi:broom"
            variant="primary"
            @click=${()=>i(t.buttons.trigger_clean)}
          >Clean</petlibro-pill-button>
        `:W}

        ${t.buttons.trigger_stop_action?B`
          <petlibro-pill-button
            icon="mdi:stop"
            @click=${()=>i(t.buttons.trigger_stop_action)}
          >Stop</petlibro-pill-button>
        `:W}

        ${t.switches.light_switch?B`
          <petlibro-pill-button
            icon="mdi:lightbulb${h?"":"-outline"}"
            ?active=${h}
            @click=${()=>o(t.switches.light_switch)}
          >Light</petlibro-pill-button>
        `:W}

        ${t.switches.sound_switch?B`
          <petlibro-pill-button
            icon="mdi:volume-${u?"high":"off"}"
            ?active=${u}
            @click=${()=>o(t.switches.sound_switch)}
          >Sound</petlibro-pill-button>
        `:W}

        ${t.switches.after_deodorization_switch?B`
          <petlibro-pill-button
            icon="mdi:air-purifier"
            ?active=${Ee(e,t.switches.after_deodorization_switch)}
            @click=${()=>o(t.switches.after_deodorization_switch)}
          >Auto Deodorize</petlibro-pill-button>
        `:W}

        ${t.switches.avoid_repeat_clean?B`
          <petlibro-pill-button
            icon="mdi:repeat-off"
            ?active=${Ee(e,t.switches.avoid_repeat_clean)}
            @click=${()=>o(t.switches.avoid_repeat_clean)}
          >No Repeat</petlibro-pill-button>
        `:W}

        ${t.switches.enable_auto_clean_in_sleep_mode?B`
          <petlibro-pill-button
            icon="mdi:broom"
            ?active=${Ee(e,t.switches.enable_auto_clean_in_sleep_mode)}
            @click=${()=>o(t.switches.enable_auto_clean_in_sleep_mode)}
          >Sleep Clean</petlibro-pill-button>
        `:W}

        ${t.switches.enable_deodorization_in_sleep_mode?B`
          <petlibro-pill-button
            icon="mdi:weather-windy"
            ?active=${Ee(e,t.switches.enable_deodorization_in_sleep_mode)}
            @click=${()=>o(t.switches.enable_deodorization_in_sleep_mode)}
          >Sleep Deodorize</petlibro-pill-button>
        `:W}

        ${t.buttons.reset_filter?B`
          <petlibro-pill-button
            icon="mdi:air-filter"
            @click=${()=>i(t.buttons.reset_filter)}
          >Reset Filter</petlibro-pill-button>
        `:W}

        ${t.buttons.reset_cleaning?B`
          <petlibro-pill-button
            icon="mdi:broom"
            @click=${()=>i(t.buttons.reset_cleaning)}
          >Reset Clean</petlibro-pill-button>
        `:W}

        ${t.buttons.reset_mat?B`
          <petlibro-pill-button
            icon="mdi:rug"
            @click=${()=>i(t.buttons.reset_mat)}
          >Reset Mat</petlibro-pill-button>
        `:W}
      </div>
    `:W}

    ${n&&y?B`
      <div class="settings">
        ${ze(e,t.selects.clean_mode,"mdi:broom","purple","Clean Mode",s)}
        ${ze(e,t.selects.deodorization_wind_speed,"mdi:weather-windy","blue","Wind Speed",s)}
        ${Oe(e,t.numbers.volume,"mdi:volume-high","purple","Volume","%",r,10)}
        ${Oe(e,t.numbers.auto_delay_sec,"mdi:timer-outline","amber","Clean Delay","s",r,10)}
        ${Oe(e,t.numbers.duration_after_deodorization,"mdi:air-purifier","green","Deodorize Time","m",r)}
      </div>
    `:W}
  `}(this.hass,this._entities,e=>this._handleButtonPress(e),e=>this._handleSwitchToggle(e),(e,t)=>this._handleSelectChange(e,t),(e,t)=>this._handleNumberChange(e,t),e);default:return B`<div class="unavailable">Unknown device type</div>`}}_handleButtonPress(e){this.hass.callService("button","press",{entity_id:e})}_handleSwitchToggle(e){this.hass.callService("switch","toggle",{entity_id:e})}_handleSelectChange(e,t){this.hass.callService("select","select_option",{entity_id:e,option:t})}_handleNumberChange(e,t){this.hass.callService("number","set_value",{entity_id:e,value:t})}_getDeviceTypeIcon(){switch(this._deviceType){case"feeder":return"mdi:food-drumstick";case"fountain":return"mdi:water";case"litter_box":return"mdi:cat";default:return"mdi:paw"}}_getAllEntityIds(){return this._entities?[...Object.values(this._entities.sensors),...Object.values(this._entities.binary_sensors),...Object.values(this._entities.buttons),...Object.values(this._entities.switches),...Object.values(this._entities.numbers),...Object.values(this._entities.selects),...Object.values(this._entities.dates),...Object.values(this._entities.images),...Object.values(this._entities.updates)]:[]}};e([_e({attribute:!1})],Ke.prototype,"hass",void 0),e([he()],Ke.prototype,"_config",void 0),e([he()],Ke.prototype,"_deviceId",void 0),e([he()],Ke.prototype,"_deviceType",void 0),e([he()],Ke.prototype,"_entities",void 0),e([he()],Ke.prototype,"_primaryEntityId",void 0),Ke=e([de(ge)],Ke);let Ze=class extends ae{static{this.styles=n`
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
  `}setConfig(e){this._config=e}_getPetlibroDevices(){if(!this.hass?.entities||!this.hass?.devices)return[];const e=new Set;for(const t of Object.values(this.hass.entities))"petlibro"===t.platform&&t.device_id&&e.add(t.device_id);const t=[];for(const i of e){const e=this.hass.devices[i],o=e?.name_by_user||e?.name||`Device ${i.slice(0,8)}`;t.push({id:i,name:o})}return t.sort((e,t)=>e.name.localeCompare(t.name))}render(){if(!this.hass||!this._config)return B``;const e=this._getPetlibroDevices();return B`
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
    `}_deviceChanged(e){const t=e.target.value;if(!t)return;const i={type:this._config.type,device_id:t,show_controls:this._config.show_controls};this._config.name&&(i.name=this._config.name),this._updateConfig(i)}_nameChanged(e){const t=e.target.value||void 0;this._updateConfig({...this._config,name:t})}_showControlsChanged(e){const t=e.target.checked;this._updateConfig({...this._config,show_controls:t})}_updateConfig(e){this._config=e;const t=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}};e([_e({attribute:!1})],Ze.prototype,"hass",void 0),e([he()],Ze.prototype,"_config",void 0),Ze=e([de(be)],Ze);var Je=Object.freeze({__proto__:null,get PetlibroCardEditor(){return Ze}});export{Ke as PetlibroCard};
