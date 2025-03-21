// @rails/ujs@7.1.3 downloaded from https://ga.jspm.io/npm:@rails/ujs@7.1.3-4/app/assets/javascripts/rails-ujs.esm.js

const t="a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]";const e={selector:"button[data-remote]:not([form]), button[data-confirm]:not([form])",exclude:"form button"};const n="select[data-remote], input[data-remote], textarea[data-remote]";const o="form:not([data-turbo=true])";const a="form:not([data-turbo=true]) input[type=submit], form:not([data-turbo=true]) input[type=image], form:not([data-turbo=true]) button[type=submit], form:not([data-turbo=true]) button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])";const r="input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled";const c="input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled";const s="input[name][type=file]:not([disabled])";const i="a[data-disable-with], a[data-disable]";const u="button[data-remote][data-disable-with], button[data-remote][data-disable]";let l=null;const loadCSPNonce=()=>{const t=document.querySelector("meta[name=csp-nonce]");return l=t&&t.content};const cspNonce=()=>l||loadCSPNonce();const d=Element.prototype.matches||Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector;const matches=function(t,e){return e.exclude?d.call(t,e.selector)&&!d.call(t,e.exclude):d.call(t,e)};const m="_ujsData";const getData=(t,e)=>t[m]?t[m][e]:void 0;const setData=function(t,e,n){t[m]||(t[m]={});return t[m][e]=n};const $=t=>Array.prototype.slice.call(document.querySelectorAll(t));const isContentEditable=function(t){var e=false;do{if(t.isContentEditable){e=true;break}t=t.parentElement}while(t);return e};const csrfToken=()=>{const t=document.querySelector("meta[name=csrf-token]");return t&&t.content};const csrfParam=()=>{const t=document.querySelector("meta[name=csrf-param]");return t&&t.content};const CSRFProtection=t=>{const e=csrfToken();if(e)return t.setRequestHeader("X-CSRF-Token",e)};const refreshCSRFTokens=()=>{const t=csrfToken();const e=csrfParam();if(t&&e)return $('form input[name="'+e+'"]').forEach((e=>e.value=t))};const p={"*":"*/*",text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript",script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"};const ajax=t=>{t=prepareOptions(t);var e=createXHR(t,(function(){const n=processResponse(e.response!=null?e.response:e.responseText,e.getResponseHeader("Content-Type"));Math.floor(e.status/100)===2?typeof t.success==="function"&&t.success(n,e.statusText,e):typeof t.error==="function"&&t.error(n,e.statusText,e);return typeof t.complete==="function"?t.complete(e,e.statusText):void 0}));return!(t.beforeSend&&!t.beforeSend(e,t))&&(e.readyState===XMLHttpRequest.OPENED?e.send(t.data):void 0)};var prepareOptions=function(t){t.url=t.url||location.href;t.type=t.type.toUpperCase();t.type==="GET"&&t.data&&(t.url.indexOf("?")<0?t.url+="?"+t.data:t.url+="&"+t.data);t.dataType in p||(t.dataType="*");t.accept=p[t.dataType];t.dataType!=="*"&&(t.accept+=", */*; q=0.01");return t};var createXHR=function(t,e){const n=new XMLHttpRequest;n.open(t.type,t.url,true);n.setRequestHeader("Accept",t.accept);typeof t.data==="string"&&n.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");if(!t.crossDomain){n.setRequestHeader("X-Requested-With","XMLHttpRequest");CSRFProtection(n)}n.withCredentials=!!t.withCredentials;n.onreadystatechange=function(){if(n.readyState===XMLHttpRequest.DONE)return e(n)};return n};var processResponse=function(t,e){if(typeof t==="string"&&typeof e==="string")if(e.match(/\bjson\b/))try{t=JSON.parse(t)}catch(t){}else if(e.match(/\b(?:java|ecma)script\b/)){const e=document.createElement("script");e.setAttribute("nonce",cspNonce());e.text=t;document.head.appendChild(e).parentNode.removeChild(e)}else if(e.match(/\b(xml|html|svg)\b/)){const n=new DOMParser;e=e.replace(/;.+/,"");try{t=n.parseFromString(t,e)}catch(t){}}return t};const href=t=>t.href;const isCrossDomain=function(t){const e=document.createElement("a");e.href=location.href;const n=document.createElement("a");try{n.href=t;return!((!n.protocol||n.protocol===":")&&!n.host||e.protocol+"//"+e.host===n.protocol+"//"+n.host)}catch(t){return true}};let f;let{CustomEvent:b}=window;if(typeof b!=="function"){b=function(t,e){const n=document.createEvent("CustomEvent");n.initCustomEvent(t,e.bubbles,e.cancelable,e.detail);return n};b.prototype=window.Event.prototype;({preventDefault:f}=b.prototype);b.prototype.preventDefault=function(){const t=f.call(this);this.cancelable&&!this.defaultPrevented&&Object.defineProperty(this,"defaultPrevented",{get(){return true}});return t}}const fire=(t,e,n)=>{const o=new b(e,{bubbles:true,cancelable:true,detail:n});t.dispatchEvent(o);return!o.defaultPrevented};const stopEverything=t=>{fire(t.target,"ujs:everythingStopped");t.preventDefault();t.stopPropagation();t.stopImmediatePropagation()};const delegate=(t,e,n,o)=>t.addEventListener(n,(function(t){let{target:n}=t;while(!!(n instanceof Element)&&!matches(n,e))n=n.parentNode;if(n instanceof Element&&o.call(n,t)===false){t.preventDefault();t.stopPropagation()}}));const toArray=t=>Array.prototype.slice.call(t);const serializeElement=(t,e)=>{let n=[t];matches(t,"form")&&(n=toArray(t.elements));const o=[];n.forEach((function(t){t.name&&!t.disabled&&(matches(t,"fieldset[disabled] *")||(matches(t,"select")?toArray(t.options).forEach((function(e){e.selected&&o.push({name:t.name,value:e.value})})):(t.checked||["radio","checkbox","submit"].indexOf(t.type)===-1)&&o.push({name:t.name,value:t.value})))}));e&&o.push(e);return o.map((function(t){return t.name?`${encodeURIComponent(t.name)}=${encodeURIComponent(t.value)}`:t})).join("&")};const formElements=(t,e)=>matches(t,"form")?toArray(t.elements).filter((t=>matches(t,e))):toArray(t.querySelectorAll(e));const handleConfirmWithRails=t=>function(e){allowAction(this,t)||stopEverything(e)};const confirm=(t,e)=>window.confirm(t);var allowAction=function(t,e){let n;const o=t.getAttribute("data-confirm");if(!o)return true;let a=false;if(fire(t,"confirm")){try{a=e.confirm(o,t)}catch(t){}n=fire(t,"confirm:complete",[a])}return a&&n};const handleDisabledElement=function(t){const e=this;e.disabled&&stopEverything(t)};const enableElement=t=>{let e;if(t instanceof Event){if(isXhrRedirect(t))return;e=t.target}else e=t;if(!isContentEditable(e))return matches(e,i)?enableLinkElement(e):matches(e,u)||matches(e,c)?enableFormElement(e):matches(e,o)?enableFormElements(e):void 0};const disableElement=t=>{const e=t instanceof Event?t.target:t;if(!isContentEditable(e))return matches(e,i)?disableLinkElement(e):matches(e,u)||matches(e,r)?disableFormElement(e):matches(e,o)?disableFormElements(e):void 0};var disableLinkElement=function(t){if(getData(t,"ujs:disabled"))return;const e=t.getAttribute("data-disable-with");if(e!=null){setData(t,"ujs:enable-with",t.innerHTML);t.innerHTML=e}t.addEventListener("click",stopEverything);return setData(t,"ujs:disabled",true)};var enableLinkElement=function(t){const e=getData(t,"ujs:enable-with");if(e!=null){t.innerHTML=e;setData(t,"ujs:enable-with",null)}t.removeEventListener("click",stopEverything);return setData(t,"ujs:disabled",null)};var disableFormElements=t=>formElements(t,r).forEach(disableFormElement);var disableFormElement=function(t){if(getData(t,"ujs:disabled"))return;const e=t.getAttribute("data-disable-with");if(e!=null)if(matches(t,"button")){setData(t,"ujs:enable-with",t.innerHTML);t.innerHTML=e}else{setData(t,"ujs:enable-with",t.value);t.value=e}t.disabled=true;return setData(t,"ujs:disabled",true)};var enableFormElements=t=>formElements(t,c).forEach((t=>enableFormElement(t)));var enableFormElement=function(t){const e=getData(t,"ujs:enable-with");if(e!=null){matches(t,"button")?t.innerHTML=e:t.value=e;setData(t,"ujs:enable-with",null)}t.disabled=false;return setData(t,"ujs:disabled",null)};var isXhrRedirect=function(t){const e=t.detail?t.detail[0]:void 0;return e&&e.getResponseHeader("X-Xhr-Redirect")};const handleMethodWithRails=t=>function(e){const n=this;const o=n.getAttribute("data-method");if(!o)return;if(isContentEditable(this))return;const a=t.href(n);const r=csrfToken();const c=csrfParam();const s=document.createElement("form");let i=`<input name='_method' value='${o}' type='hidden' />`;c&&r&&!isCrossDomain(a)&&(i+=`<input name='${c}' value='${r}' type='hidden' />`);i+='<input type="submit" />';s.method="post";s.action=a;s.target=n.target;s.innerHTML=i;s.style.display="none";document.body.appendChild(s);s.querySelector('[type="submit"]').click();stopEverything(e)};const isRemote=function(t){const e=t.getAttribute("data-remote");return e!=null&&e!=="false"};const handleRemoteWithRails=t=>function(a){let r,c,s;const i=this;if(!isRemote(i))return true;if(!fire(i,"ajax:before")){fire(i,"ajax:stopped");return false}if(isContentEditable(i)){fire(i,"ajax:stopped");return false}const u=i.getAttribute("data-with-credentials");const l=i.getAttribute("data-type")||"script";if(matches(i,o)){const t=getData(i,"ujs:submit-button");c=getData(i,"ujs:submit-button-formmethod")||i.getAttribute("method")||"get";s=getData(i,"ujs:submit-button-formaction")||i.getAttribute("action")||location.href;c.toUpperCase()==="GET"&&(s=s.replace(/\?.*$/,""));if(i.enctype==="multipart/form-data"){r=new FormData(i);t!=null&&r.append(t.name,t.value)}else r=serializeElement(i,t);setData(i,"ujs:submit-button",null);setData(i,"ujs:submit-button-formmethod",null);setData(i,"ujs:submit-button-formaction",null)}else if(matches(i,e)||matches(i,n)){c=i.getAttribute("data-method");s=i.getAttribute("data-url");r=serializeElement(i,i.getAttribute("data-params"))}else{c=i.getAttribute("data-method");s=t.href(i);r=i.getAttribute("data-params")}ajax({type:c||"GET",url:s,data:r,dataType:l,beforeSend(t,e){if(fire(i,"ajax:beforeSend",[t,e]))return fire(i,"ajax:send",[t]);fire(i,"ajax:stopped");return false},success(...t){return fire(i,"ajax:success",t)},error(...t){return fire(i,"ajax:error",t)},complete(...t){return fire(i,"ajax:complete",t)},crossDomain:isCrossDomain(s),withCredentials:u!=null&&u!=="false"});stopEverything(a)};const formSubmitButtonClick=function(t){const e=this;const{form:n}=e;if(n){e.name&&setData(n,"ujs:submit-button",{name:e.name,value:e.value});setData(n,"ujs:formnovalidate-button",e.formNoValidate);setData(n,"ujs:submit-button-formaction",e.getAttribute("formaction"));return setData(n,"ujs:submit-button-formmethod",e.getAttribute("formmethod"))}};const preventInsignificantClick=function(t){const e=this;const n=(e.getAttribute("data-method")||"GET").toUpperCase();const o=e.getAttribute("data-params");const a=t.metaKey||t.ctrlKey;const r=a&&n==="GET"&&!o;const c=t.button!=null&&t.button!==0;(c||r)&&t.stopImmediatePropagation()};const h={$:$,ajax:ajax,buttonClickSelector:e,buttonDisableSelector:u,confirm:confirm,cspNonce:cspNonce,csrfToken:csrfToken,csrfParam:csrfParam,CSRFProtection:CSRFProtection,delegate:delegate,disableElement:disableElement,enableElement:enableElement,fileInputSelector:s,fire:fire,formElements:formElements,formEnableSelector:c,formDisableSelector:r,formInputClickSelector:a,formSubmitButtonClick:formSubmitButtonClick,formSubmitSelector:o,getData:getData,handleDisabledElement:handleDisabledElement,href:href,inputChangeSelector:n,isCrossDomain:isCrossDomain,linkClickSelector:t,linkDisableSelector:i,loadCSPNonce:loadCSPNonce,matches:matches,preventInsignificantClick:preventInsignificantClick,refreshCSRFTokens:refreshCSRFTokens,serializeElement:serializeElement,setData:setData,stopEverything:stopEverything};const y=handleConfirmWithRails(h);h.handleConfirm=y;const j=handleMethodWithRails(h);h.handleMethod=j;const v=handleRemoteWithRails(h);h.handleRemote=v;const start=function(){if(window._rails_loaded)throw new Error("rails-ujs has already been loaded!");window.addEventListener("pageshow",(function(){$(c).forEach((function(t){getData(t,"ujs:disabled")&&enableElement(t)}));$(i).forEach((function(t){getData(t,"ujs:disabled")&&enableElement(t)}))}));delegate(document,i,"ajax:complete",enableElement);delegate(document,i,"ajax:stopped",enableElement);delegate(document,u,"ajax:complete",enableElement);delegate(document,u,"ajax:stopped",enableElement);delegate(document,t,"click",preventInsignificantClick);delegate(document,t,"click",handleDisabledElement);delegate(document,t,"click",y);delegate(document,t,"click",disableElement);delegate(document,t,"click",v);delegate(document,t,"click",j);delegate(document,e,"click",preventInsignificantClick);delegate(document,e,"click",handleDisabledElement);delegate(document,e,"click",y);delegate(document,e,"click",disableElement);delegate(document,e,"click",v);delegate(document,n,"change",handleDisabledElement);delegate(document,n,"change",y);delegate(document,n,"change",v);delegate(document,o,"submit",handleDisabledElement);delegate(document,o,"submit",y);delegate(document,o,"submit",v);delegate(document,o,"submit",(t=>setTimeout((()=>disableElement(t)),13)));delegate(document,o,"ajax:send",disableElement);delegate(document,o,"ajax:complete",enableElement);delegate(document,a,"click",preventInsignificantClick);delegate(document,a,"click",handleDisabledElement);delegate(document,a,"click",y);delegate(document,a,"click",formSubmitButtonClick);document.addEventListener("DOMContentLoaded",refreshCSRFTokens);document.addEventListener("DOMContentLoaded",loadCSPNonce);return window._rails_loaded=true};h.start=start;if(typeof jQuery!=="undefined"&&jQuery&&jQuery.ajax){if(jQuery.rails)throw new Error("If you load both jquery_ujs and rails-ujs, use rails-ujs only.");jQuery.rails=h;jQuery.ajaxPrefilter((function(t,e,n){if(!t.crossDomain)return CSRFProtection(n)}))}export{h as default};

