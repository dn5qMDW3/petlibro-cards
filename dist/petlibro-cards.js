function t(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap;let n=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=o.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(e,t))}return t}toString(){return this.cssText}};const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1],t[0]);return new n(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,s))(e)})(t):t,{is:c,defineProperty:d,getOwnPropertyDescriptor:l,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:_}=Object,v=globalThis,p=v.trustedTypes,m=p?p.emptyScript:"",f=v.reactiveElementPolyfillSupport,g=(t,e)=>t,b={toAttribute(t,e){switch(e){case Boolean:t=t?m:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},y=(t,e)=>!c(t,e),$={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:y};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=$){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&d(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=l(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get:s,set(e){const n=s?.call(this);o?.call(this,e),this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??$}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=_(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...h(t),...u(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const i of s){const s=document.createElement("style"),o=e.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(e,i.type);this._$Em=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:b;this._$Em=s;const n=o.fromAttribute(e,t.type);this[s]=n??this._$Ej?.get(s)??n,this._$Em=null}}requestUpdate(t,e,i,s=!1,o){if(void 0!==t){const n=this.constructor;if(!1===s&&(o=this[t]),i??=n.getPropertyOptions(t),!((i.hasChanged??y)(o,e)||i.useDefault&&i.reflect&&o===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,i))))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),!0!==o||void 0!==n)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),!0===s&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t){const{wrapped:t}=i,s=this[e];!0!==t||this._$AL.has(e)||void 0===s||this.C(e,void 0,i,s)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(e)):this._$EM()}catch(e){throw t=!1,this._$EM(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(t){}firstUpdated(t){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[g("elementProperties")]=new Map,w[g("finalized")]=new Map,f?.({ReactiveElement:w}),(v.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x=globalThis,A=t=>t,E=x.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,k="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,P="?"+C,O=`<${P}>`,T=document,U=()=>T.createComment(""),M=t=>null===t||"object"!=typeof t&&"function"!=typeof t,N=Array.isArray,H="[ \t\n\f\r]",R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,z=/>/g,D=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,I=/"/g,q=/^(?:script|style|textarea|title)$/i,B=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),W=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),V=new WeakMap,K=T.createTreeWalker(T,129);function J(t,e){if(!N(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(e):e}const Z=(t,e)=>{const i=t.length-1,s=[];let o,n=2===e?"<svg>":3===e?"<math>":"",r=R;for(let e=0;e<i;e++){const i=t[e];let a,c,d=-1,l=0;for(;l<i.length&&(r.lastIndex=l,c=r.exec(i),null!==c);)l=r.lastIndex,r===R?"!--"===c[1]?r=j:void 0!==c[1]?r=z:void 0!==c[2]?(q.test(c[2])&&(o=RegExp("</"+c[2],"g")),r=D):void 0!==c[3]&&(r=D):r===D?">"===c[0]?(r=o??R,d=-1):void 0===c[1]?d=-2:(d=r.lastIndex-c[2].length,a=c[1],r=void 0===c[3]?D:'"'===c[3]?I:L):r===I||r===L?r=D:r===j||r===z?r=R:(r=D,o=void 0);const h=r===D&&t[e+1].startsWith("/>")?" ":"";n+=r===R?i+O:d>=0?(s.push(a),i.slice(0,d)+k+i.slice(d)+C+h):i+C+(-2===d?e:h)}return[J(t,n+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class G{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const r=t.length-1,a=this.parts,[c,d]=Z(t,e);if(this.el=G.createElement(c,i),K.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=K.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(k)){const e=d[n++],i=s.getAttribute(t).split(C),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?et:"?"===r[1]?it:"@"===r[1]?st:tt}),s.removeAttribute(t)}else t.startsWith(C)&&(a.push({type:6,index:o}),s.removeAttribute(t));if(q.test(s.tagName)){const t=s.textContent.split(C),e=t.length-1;if(e>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],U()),K.nextNode(),a.push({type:2,index:++o});s.append(t[e],U())}}}else if(8===s.nodeType)if(s.data===P)a.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(C,t+1));)a.push({type:7,index:o}),t+=C.length-1}o++}}static createElement(t,e){const i=T.createElement("template");return i.innerHTML=t,i}}function Q(t,e,i=t,s){if(e===W)return e;let o=void 0!==s?i._$Co?.[s]:i._$Cl;const n=M(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),void 0===n?o=void 0:(o=new n(t),o._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=o:i._$Cl=o),void 0!==o&&(e=Q(t,o._$AS(t,e.values),o,s)),e}class X{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??T).importNode(e,!0);K.currentNode=s;let o=K.nextNode(),n=0,r=0,a=i[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new Y(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new ot(o,this,t)),this._$AV.push(e),a=i[++r]}n!==a?.index&&(o=K.nextNode(),n++)}return K.currentNode=T,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Q(this,t,e),M(t)?t===F||null==t||""===t?(this._$AH!==F&&this._$AR(),this._$AH=F):t!==this._$AH&&t!==W&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>N(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==F&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(T.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=G.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new X(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=V.get(t.strings);return void 0===e&&V.set(t.strings,e=new G(t)),e}k(t){N(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new Y(this.O(U()),this.O(U()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const e=A(t).nextSibling;A(t).remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class tt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=F}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(void 0===o)t=Q(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==W,n&&(this._$AH=t);else{const s=t;let r,a;for(t=o[0],r=0;r<o.length-1;r++)a=Q(this,s[i+r],e,r),a===W&&(a=this._$AH[r]),n||=!M(a)||a!==this._$AH[r],a===F?t=F:t!==F&&(t+=(a??"")+o[r+1]),this._$AH[r]=a}n&&!s&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class et extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}}class it extends tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}}class st extends tt{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=Q(this,t,e,0)??F)===W)return;const i=this._$AH,s=t===F&&i!==F||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==F&&(i===F||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ot{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Q(this,t)}}const nt=x.litHtmlPolyfillSupport;nt?.(G,Y),(x.litHtmlVersions??=[]).push("3.3.2");const rt=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class at extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let o=s._$litPart$;if(void 0===o){const t=i?.renderBefore??null;s._$litPart$=o=new Y(e.insertBefore(U(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return W}}at._$litElement$=!0,at.finalized=!0,rt.litElementHydrateSupport?.({LitElement:at});const ct=rt.litElementPolyfillSupport;ct?.({LitElement:at}),(rt.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt=t=>(e,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)},lt={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:y},ht=(t=lt,e,i)=>{const{kind:s,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===s&&((t=Object.create(t)).wrapped=!0),n.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,o,t,!0,i)},init(e){return void 0!==e&&this.C(s,void 0,t,e),e}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];e.call(this,i),this.requestUpdate(s,o,t,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ut(t){return(e,i)=>"object"==typeof i?ht(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function _t(t){return ut({...t,state:!0,attribute:!1})}const vt="petlibro-card",pt="petlibro-card-editor",mt=["food_low","manual_feed","feeding_plan_state","today_feeding_quantity_weight"],ft=["remaining_filter_days","water_low","remaining_water"],gt=["rubbish_full_state","trigger_clean","running_state","garbage_warehouse_state"],bt=["today_feeding_quantity_weight","today_feeding_quantity_volume","last_feed_quantity_weight","last_feed_quantity_volume","next_feed_quantity_weight","next_feed_quantity_volume","enable_low_battery_notice","today_feeding_times","feeding_plan_state","remaining_desiccant","manual_feed_quantity","electric_quantity","battery_state","last_feed_time","next_feed_time","child_lock_switch","whether_in_sleep_mode","food_dispenser_state","food_outlet_state","today_eating_times","today_eating_time","display_selection","manual_feed","manual_lid_open","enable_feeding_plan","disable_feeding_plan","desiccant_reset","desiccant_frequency","desiccant_cycle","light_on","light_off","light_switch","sound_on","sound_off","sound_switch","sound_level","display_on","display_off","display_switch","display_text","sleep_on","sleep_off","food_low","door_state","door_blocked","vacuum_state","wifi_ssid","wifi_rssi","online","ring_bell","rotate_food_bowl","reposition_schedule","next_feeding_day","next_feeding_time","manual_feed_quantity_cups","lid_close_time","remaining_cleaning_days","remaining_filter_days","remaining_water","remaining_water_ml","weight_percent","use_water_interval","use_water_duration","weight_state","tank_total_ml","exception_message","volume_level","water_low","water_state","water_interval","water_dispensing_duration","water_low_threshold","cleaning_cycle","cleaning_reset","filter_cycle","filter_reset","filter_led_switch","device_stopped_working","today_drinking_amount","yesterday_drinking_amount","today_drinking_time","today_avg_time","today_drinking_count","yesterday_drinking_count","battery_charge_state","battery_supply_8_hours","power_state","radar_sensing_level","radar_gain","radar_sensing_threshold","human_sensitivity_level","remaining_replacement_days","remaining_mat_days","filter_state","clean_state","mat_state","vacuum_mode","throw_mode","deodorization_mode","deodorization_mode_switch","deodorization_state_on","garbage_warehouse_state","running_state","clean_mode","volume","weight","rubbish_full_state","rubbish_inplace_state","door_open","barn_door_error","trigger_clean","trigger_empty_waste","trigger_level_litter","trigger_stop_action","trigger_open_door","trigger_close_door","trigger_vacuum"].sort((t,e)=>e.length-t.length),yt=r`
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
`,$t={sensor:"sensors",binary_sensor:"binary_sensors",button:"buttons",switch:"switches",number:"numbers",select:"selects"};function wt(t){const e=t.indexOf(".");if(e<0)return;const i=t.substring(e+1);for(const t of bt)if(i.endsWith(t)){const e=i.substring(0,i.length-t.length);if(""===e||e.endsWith("_"))return t}}function xt(t,e){if(t.entities)for(const[i,s]of Object.entries(t.entities))if(s.device_id===e)return i}function At(t,e){if(!e)return;const i=t.states[e]?.state;return"unavailable"!==i&&"unknown"!==i?i:void 0}function Et(t,e){const i=At(t,e);if(void 0===i)return;const s=Number(i);return isNaN(s)?void 0:s}function St(t,e){if(!e)return!1;const i=t.states[e]?.state;return"on"===i||"true"===i||"True"===i}function kt(t,e){const i=At(t,e);if(i)try{const t=new Date(i);return isNaN(t.getTime())?i:t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}catch{return i}}console.info("%c PETLIBRO-CARD %c v0.2.0 ","color: white; background: #3498db; font-weight: bold;","color: #3498db; background: white; font-weight: bold;"),window.customCards=window.customCards||[],window.customCards.push({type:vt,name:"Petlibro Card",description:"Auto-detecting card for PetLibro feeders, fountains, and litter boxes",preview:!0});let Ct=class extends at{static{this.styles=yt}static async getConfigElement(){return await Promise.resolve().then(function(){return Ot}),document.createElement(pt)}static getStubConfig(){return{device_id:""}}setConfig(t){if(!t.device_id&&!t.entity)throw new Error("Please select a PetLibro device");this._config={show_controls:!0,...t}}getCardSize(){return 4}shouldUpdate(t){if(t.has("_config"))return!0;if(!t.has("hass")||!this._entities)return!0;const e=t.get("hass");if(!e)return!0;return this._getAllEntityIds().some(t=>e.states[t]!==this.hass.states[t])}willUpdate(t){var e,i;if(this.hass&&this._config&&(t.has("hass")||t.has("_config"))){let t;this._config.device_id?t=this._config.device_id:this._config.entity&&(e=this.hass,i=this._config.entity,t=e.entities?.[i]?.device_id??void 0),t&&t!==this._deviceId&&(this._deviceId=t,this._entities=function(t,e){const i={sensors:{},binary_sensors:{},buttons:{},switches:{},numbers:{},selects:{}};if(!t.entities)return i;for(const[s,o]of Object.entries(t.entities)){if(o.device_id!==e)continue;const t=s.substring(0,s.indexOf(".")),n=$t[t];if(!n)continue;const r=wt(s);r&&(i[n][r]=s)}return i}(this.hass,t),this._deviceType=function(t){const e=new Set([...Object.keys(t.sensors),...Object.keys(t.binary_sensors),...Object.keys(t.buttons),...Object.keys(t.switches)]);return gt.some(t=>e.has(t))?"litter_box":mt.some(t=>e.has(t))?"feeder":ft.some(t=>e.has(t))?"fountain":"feeder"}(this._entities))}}render(){if(!this._config||!this.hass)return B``;if(!this._deviceId||!this._entities||!this._deviceType)return B`
        <ha-card>
          <div class="unavailable">
            <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
            <div>Entity not found or device not yet available</div>
          </div>
        </ha-card>
      `;const t=this._config.entity||xt(this.hass,this._deviceId)||"",e=this.hass.states[t]?.state;return"unavailable"===e?B`
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
    `}_renderHeader(){const t=this._config.name||(e=this.hass,i=this._deviceId,e.devices?.[i]?.name??void 0)||"PetLibro Device";var e,i;const s=this._config.entity||xt(this.hass,this._deviceId)||"",o=function(t,e,i){const s=t.states[e]?.attributes?.entity_picture;return s||(t.devices?.[i]?.configuration_url??void 0)}(this.hass,s,this._deviceId),n=St(this.hass,this._entities.binary_sensors.online),r=this.hass.devices?.[this._deviceId]?.model;return B`
      <div class="card-header">
        ${o?B`<img class="device-image" src="${o}" alt="${t}" />`:B`
            <div class="device-image-placeholder">
              <ha-icon icon="${this._getDeviceTypeIcon()}"></ha-icon>
            </div>
          `}
        <div class="header-info">
          <div class="device-name">${t}</div>
          ${r?B`<div class="device-model">${r}</div>`:F}
        </div>
        <div class="status-badge">
          <div class="status-dot ${n?"online":"offline"}"></div>
          <span class="status-text">${n?"Online":"Offline"}</span>
        </div>
      </div>
    `}_renderDeviceContent(){if(!this._entities)return F;switch(this._deviceType){case"feeder":return function(t,e,i){const s=Et(t,e.sensors.electric_quantity),o=St(t,e.binary_sensors.food_low),n=At(t,e.sensors.today_feeding_quantity_weight),r=At(t,e.sensors.today_feeding_times),a=kt(t,e.sensors.last_feed_time),c=kt(t,e.sensors.next_feed_time),d=At(t,e.sensors.next_feed_quantity_weight),l=At(t,e.sensors.feeding_plan_state),h=t.states[e.sensors.today_feeding_quantity_weight??""]?.attributes?.unit_of_measurement??"g",u=t.states[e.sensors.next_feed_quantity_weight??""]?.attributes?.unit_of_measurement??"g",_=St(t,e.binary_sensors.light_switch);return B`
    <div class="metrics-grid">
      ${void 0!==s?B`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="${v=s,v>=90?"mdi:battery":v>=70?"mdi:battery-70":v>=50?"mdi:battery-50":v>=30?"mdi:battery-30":v>=10?"mdi:battery-10":"mdi:battery-alert"}"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Battery</div>
            <div class="metric-value">${Math.round(s)}%</div>
          </div>
        </div>
      `:F}

      <div class="metric-item ${o?"alert":""}">
        <ha-icon class="metric-icon" icon="${o?"mdi:bowl-mix-outline":"mdi:bowl-outline"}"></ha-icon>
        <div class="metric-content">
          <div class="metric-label">Food Status</div>
          <div class="metric-value">${o?"Low":"OK"}</div>
        </div>
      </div>

      ${void 0!==n?B`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:scale"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Fed Today</div>
            <div class="metric-value">${n} ${h}${r?` (${r}x)`:""}</div>
          </div>
        </div>
      `:F}

      ${a?B`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:history"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Last Feed</div>
            <div class="metric-value">${a}</div>
          </div>
        </div>
      `:F}

      ${c?B`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:calendar-arrow-right"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Next Feed</div>
            <div class="metric-value">${c}${d?` (${d} ${u})`:""}</div>
          </div>
        </div>
      `:F}

      ${void 0!==l?B`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:calendar-check"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Feeding Plan</div>
            <div class="metric-value">${l}</div>
          </div>
        </div>
      `:F}
    </div>

    <div class="controls-row">
      ${e.buttons.manual_feed?B`
        <button class="control-button" @click=${()=>i(e.buttons.manual_feed)}>
          <ha-icon icon="mdi:food-drumstick"></ha-icon>
          Feed Now
        </button>
      `:F}

      ${e.buttons.light_on||e.buttons.light_off?B`
        <button
          class="control-button ${_?"active":"secondary"}"
          @click=${()=>i(_?e.buttons.light_off:e.buttons.light_on)}
        >
          <ha-icon icon="mdi:lightbulb${_?"":"-outline"}"></ha-icon>
          Light
        </button>
      `:F}
    </div>
  `;var v}(this.hass,this._entities,t=>this._handleButtonPress(t));case"fountain":return function(t,e,i){const s=Et(t,e.sensors.electric_quantity),o=Et(t,e.sensors.weight_percent),n=St(t,e.binary_sensors.water_low),r=At(t,e.sensors.remaining_water),a=t.states[e.sensors.remaining_water??""]?.attributes?.unit_of_measurement??"mL",c=At(t,e.sensors.today_drinking_amount),d=t.states[e.sensors.today_drinking_amount??""]?.attributes?.unit_of_measurement??"mL",l=At(t,e.sensors.remaining_filter_days),h=At(t,e.sensors.remaining_cleaning_days),u=St(t,e.binary_sensors.light_switch),_=void 0!==o?o<=10?"error":o<=25?"warning":"":"";return B`
    <div class="metrics-grid">
      ${void 0!==s?B`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="${v=s,v>=90?"mdi:battery":v>=70?"mdi:battery-70":v>=50?"mdi:battery-50":v>=30?"mdi:battery-30":v>=10?"mdi:battery-10":"mdi:battery-alert"}"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Battery</div>
            <div class="metric-value">${Math.round(s)}%</div>
          </div>
        </div>
      `:F}

      <div class="metric-item ${n?"alert":""}">
        <ha-icon class="metric-icon" icon="${n?"mdi:water-off":"mdi:water-percent"}"></ha-icon>
        <div class="metric-content">
          <div class="metric-label">Water Level</div>
          <div class="metric-value">${void 0!==o?`${Math.round(o)}%`:n?"Low":"OK"}</div>
          ${void 0!==o?B`
            <div class="gauge-bar">
              <div class="gauge-fill ${_}" style="width: ${Math.min(100,o)}%"></div>
            </div>
          `:F}
        </div>
      </div>

      ${void 0!==r?B`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:water"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Remaining Water</div>
            <div class="metric-value">${r} ${a}</div>
          </div>
        </div>
      `:F}

      ${void 0!==c?B`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:cup-water"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Today's Drinking</div>
            <div class="metric-value">${c} ${d}</div>
          </div>
        </div>
      `:F}

      ${void 0!==l?B`
        <div class="metric-item ${Number(l)<=3?"alert":""}">
          <ha-icon class="metric-icon" icon="mdi:air-filter"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Filter</div>
            <div class="metric-value">${l} days</div>
          </div>
        </div>
      `:F}

      ${void 0!==h?B`
        <div class="metric-item ${Number(h)<=1?"alert":""}">
          <ha-icon class="metric-icon" icon="mdi:broom"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Cleaning</div>
            <div class="metric-value">${h} days</div>
          </div>
        </div>
      `:F}
    </div>

    <div class="controls-row">
      ${e.buttons.light_on||e.buttons.light_off?B`
        <button
          class="control-button ${u?"active":"secondary"}"
          @click=${()=>i(u?e.buttons.light_off:e.buttons.light_on)}
        >
          <ha-icon icon="mdi:lightbulb${u?"":"-outline"}"></ha-icon>
          Light
        </button>
      `:F}

      ${e.buttons.filter_reset?B`
        <button class="control-button secondary" @click=${()=>i(e.buttons.filter_reset)}>
          <ha-icon icon="mdi:air-filter"></ha-icon>
          Reset Filter
        </button>
      `:F}

      ${e.buttons.cleaning_reset?B`
        <button class="control-button secondary" @click=${()=>i(e.buttons.cleaning_reset)}>
          <ha-icon icon="mdi:broom"></ha-icon>
          Reset Cleaning
        </button>
      `:F}
    </div>
  `;var v}(this.hass,this._entities,t=>this._handleButtonPress(t));case"litter_box":return function(t,e,i,s){const o=Et(t,e.sensors.electric_quantity),n=Et(t,e.sensors.weight_percent),r=St(t,e.binary_sensors.rubbish_full_state),a=At(t,e.sensors.running_state),c=At(t,e.sensors.remaining_cleaning_days),d=At(t,e.sensors.deodorization_mode),l=St(t,e.switches.light_switch),h=St(t,e.switches.sound_switch),u=void 0!==n?n<=15?"error":n<=30?"warning":"":"";return B`
    <div class="metrics-grid">
      ${void 0!==o?B`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="${_=o,_>=90?"mdi:battery":_>=70?"mdi:battery-70":_>=50?"mdi:battery-50":_>=30?"mdi:battery-30":_>=10?"mdi:battery-10":"mdi:battery-alert"}"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Battery</div>
            <div class="metric-value">${Math.round(o)}%</div>
          </div>
        </div>
      `:F}

      ${void 0!==n?B`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:gauge"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Litter Level</div>
            <div class="metric-value">${Math.round(n)}%</div>
            <div class="gauge-bar">
              <div class="gauge-fill ${u}" style="width: ${Math.min(100,n)}%"></div>
            </div>
          </div>
        </div>
      `:F}

      <div class="metric-item ${r?"alert":""}">
        <ha-icon class="metric-icon" icon="${r?"mdi:delete-alert":"mdi:delete-variant"}"></ha-icon>
        <div class="metric-content">
          <div class="metric-label">Waste Bin</div>
          <div class="metric-value">${r?"Full":"OK"}</div>
        </div>
      </div>

      ${void 0!==a?B`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:state-machine"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Status</div>
            <div class="metric-value">${a}</div>
          </div>
        </div>
      `:F}

      ${void 0!==c?B`
        <div class="metric-item ${Number(c)<=1?"alert":""}">
          <ha-icon class="metric-icon" icon="mdi:broom"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Cleaning Due</div>
            <div class="metric-value">${c} days</div>
          </div>
        </div>
      `:F}

      ${void 0!==d?B`
        <div class="metric-item">
          <ha-icon class="metric-icon" icon="mdi:air-purifier"></ha-icon>
          <div class="metric-content">
            <div class="metric-label">Deodorization</div>
            <div class="metric-value">${d}</div>
          </div>
        </div>
      `:F}
    </div>

    <div class="controls-row">
      ${e.buttons.trigger_clean?B`
        <button class="control-button" @click=${()=>i(e.buttons.trigger_clean)}>
          <ha-icon icon="mdi:broom"></ha-icon>
          Clean
        </button>
      `:F}

      ${e.buttons.trigger_stop_action?B`
        <button class="control-button secondary" @click=${()=>i(e.buttons.trigger_stop_action)}>
          <ha-icon icon="mdi:stop"></ha-icon>
          Stop
        </button>
      `:F}

      ${e.switches.light_switch?B`
        <button
          class="control-button ${l?"active":"secondary"}"
          @click=${()=>s(e.switches.light_switch)}
        >
          <ha-icon icon="mdi:lightbulb${l?"":"-outline"}"></ha-icon>
          Light
        </button>
      `:F}

      ${e.switches.sound_switch?B`
        <button
          class="control-button ${h?"active":"secondary"}"
          @click=${()=>s(e.switches.sound_switch)}
        >
          <ha-icon icon="mdi:volume-${h?"high":"off"}"></ha-icon>
          Sound
        </button>
      `:F}
    </div>
  `;var _}(this.hass,this._entities,t=>this._handleButtonPress(t),t=>this._handleSwitchToggle(t));default:return B`<div class="unavailable">Unknown device type</div>`}}_handleButtonPress(t){this.hass.callService("button","press",{entity_id:t})}_handleSwitchToggle(t){this.hass.callService("switch","toggle",{entity_id:t})}_getDeviceTypeIcon(){switch(this._deviceType){case"feeder":return"mdi:food-drumstick";case"fountain":return"mdi:water";case"litter_box":return"mdi:cat";default:return"mdi:paw"}}_getAllEntityIds(){return this._entities?[...Object.values(this._entities.sensors),...Object.values(this._entities.binary_sensors),...Object.values(this._entities.buttons),...Object.values(this._entities.switches),...Object.values(this._entities.numbers),...Object.values(this._entities.selects)]:[]}};t([ut({attribute:!1})],Ct.prototype,"hass",void 0),t([_t()],Ct.prototype,"_config",void 0),t([_t()],Ct.prototype,"_deviceId",void 0),t([_t()],Ct.prototype,"_deviceType",void 0),t([_t()],Ct.prototype,"_entities",void 0),Ct=t([dt(vt)],Ct);let Pt=class extends at{constructor(){super(...arguments),this._filterPetlibroDevices=t=>{if(!this.hass?.entities)return!1;for(const e of Object.values(this.hass.entities))if(e.device_id===t.id&&"petlibro"===e.platform)return!0;return!1}}static{this.styles=r`
    .editor-row {
      margin-bottom: 16px;
    }
    .editor-row label {
      display: block;
      font-weight: 500;
      margin-bottom: 4px;
      color: var(--primary-text-color);
    }
    .editor-row ha-device-picker,
    .editor-row ha-entity-picker {
      width: 100%;
    }
    .editor-row input {
      width: 100%;
      padding: 8px;
      border: 1px solid var(--divider-color, #e0e0e0);
      border-radius: 4px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color);
      font-size: 14px;
      box-sizing: border-box;
    }
    .editor-row .checkbox-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .migration-note {
      font-size: 12px;
      color: var(--secondary-text-color);
      margin-top: 4px;
    }
  `}setConfig(t){this._config=t}render(){if(!this.hass||!this._config)return B``;const t=this._config.entity&&!this._config.device_id;return B`
      <div class="editor-row">
        <label>PetLibro Device</label>
        <ha-device-picker
          .hass=${this.hass}
          .value=${this._config.device_id||""}
          .deviceFilter=${this._filterPetlibroDevices}
          @value-changed=${this._deviceChanged}
        ></ha-device-picker>
        ${t?B`
          <div class="migration-note">
            Migrating from entity-based config. Select a device to upgrade.
          </div>
        `:""}
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
    `}_deviceChanged(t){const e=t.detail.value;if(!e)return;const{entity:i,...s}=this._config;this._updateConfig({...s,device_id:e})}_nameChanged(t){const e=t.target.value||void 0;this._updateConfig({...this._config,name:e})}_showControlsChanged(t){const e=t.target.checked;this._updateConfig({...this._config,show_controls:e})}_updateConfig(t){this._config=t;const e=new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0});this.dispatchEvent(e)}};t([ut({attribute:!1})],Pt.prototype,"hass",void 0),t([_t()],Pt.prototype,"_config",void 0),Pt=t([dt(pt)],Pt);var Ot=Object.freeze({__proto__:null,get PetlibroCardEditor(){return Pt}});export{Ct as PetlibroCard};
