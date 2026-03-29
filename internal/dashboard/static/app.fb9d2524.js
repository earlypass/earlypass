var Sa=Object.defineProperty,ka=Object.defineProperties;var Ca=Object.getOwnPropertyDescriptors;var Vs=Object.getOwnPropertySymbols;var Pa=Object.prototype.hasOwnProperty,Ta=Object.prototype.propertyIsEnumerable;var Ws=(e,t,n)=>t in e?Sa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ae=(e,t)=>{for(var n in t||(t={}))Pa.call(t,n)&&Ws(e,n,t[n]);if(Vs)for(var n of Vs(t))Ta.call(t,n)&&Ws(e,n,t[n]);return e},Ve=(e,t)=>ka(e,Ca(t));var An,me,Ys,Ea,el,Us,Ks,qs,Js,bi,_i,vi,Aa,Pn={},Tn=[],La=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Ln=Array.isArray;function Vt(e,t){for(var n in t)e[n]=t[n];return e}function wi(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Mn(e,t,n){var l,s,o,a={};for(o in t)o=="key"?l=t[o]:o=="ref"?s=t[o]:a[o]=t[o];if(arguments.length>2&&(a.children=arguments.length>3?An.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)a[o]===void 0&&(a[o]=e.defaultProps[o]);return Cn(e,a,l,s,null)}function Cn(e,t,n,l,s){var o={type:e,props:t,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s==null?++Ys:s,__i:-1,__u:0};return s==null&&me.vnode!=null&&me.vnode(o),o}function Wt(e){return e.children}function sn(e,t){this.props=e,this.context=t}function Ol(e,t){if(t==null)return e.__?Ol(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Ol(e):null}function Ma(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,l=[],s=[],o=Vt({},t);o.__v=t.__v+1,me.vnode&&me.vnode(o),xi(e.__P,o,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,l,n==null?Ol(t):n,!!(32&t.__u),s),o.__v=t.__v,o.__.__k[o.__i]=o,eo(l,o,s),t.__e=t.__=null,o.__e!=n&&Zs(o)}}function Zs(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),Zs(e)}function Bs(e){(!e.__d&&(e.__d=!0)&&el.push(e)&&!En.__r++||Us!=me.debounceRendering)&&((Us=me.debounceRendering)||Ks)(En)}function En(){try{for(var e,t=1;el.length;)el.length>t&&el.sort(qs),e=el.shift(),t=el.length,Ma(e)}finally{el.length=En.__r=0}}function Qs(e,t,n,l,s,o,a,p,h,u,_){var f,g,y,$,E,A,k,b=l&&l.__k||Tn,I=t.length;for(h=Da(n,t,b,h,I),f=0;f<I;f++)(y=n.__k[f])!=null&&(g=y.__i!=-1&&b[y.__i]||Pn,y.__i=f,A=xi(e,y,g,s,o,a,p,h,u,_),$=y.__e,y.ref&&g.ref!=y.ref&&(g.ref&&$i(g.ref,null,y),_.push(y.ref,y.__c||$,y)),E==null&&$!=null&&(E=$),(k=!!(4&y.__u))||g.__k===y.__k?h=Xs(y,h,e,k):typeof y.type=="function"&&A!==void 0?h=A:$&&(h=$.nextSibling),y.__u&=-7);return n.__e=E,h}function Da(e,t,n,l,s){var o,a,p,h,u,_=n.length,f=_,g=0;for(e.__k=new Array(s),o=0;o<s;o++)(a=t[o])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=e.__k[o]=Cn(null,a,null,null,null):Ln(a)?a=e.__k[o]=Cn(Wt,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=e.__k[o]=Cn(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[o]=a,h=o+g,a.__=e,a.__b=e.__b+1,p=null,(u=a.__i=Ra(a,n,h,f))!=-1&&(f--,(p=n[u])&&(p.__u|=2)),p==null||p.__v==null?(u==-1&&(s>_?g--:s<_&&g++),typeof a.type!="function"&&(a.__u|=4)):u!=h&&(u==h-1?g--:u==h+1?g++:(u>h?g--:g++,a.__u|=4))):e.__k[o]=null;if(f)for(o=0;o<_;o++)(p=n[o])!=null&&(2&p.__u)==0&&(p.__e==l&&(l=Ol(p)),lo(p,p));return l}function Xs(e,t,n,l){var s,o;if(typeof e.type=="function"){for(s=e.__k,o=0;s&&o<s.length;o++)s[o]&&(s[o].__=e,t=Xs(s[o],t,n,l));return t}e.__e!=t&&(l&&(t&&e.type&&!t.parentNode&&(t=Ol(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Ra(e,t,n,l){var s,o,a,p=e.key,h=e.type,u=t[n],_=u!=null&&(2&u.__u)==0;if(u===null&&p==null||_&&p==u.key&&h==u.type)return n;if(l>(_?1:0)){for(s=n-1,o=n+1;s>=0||o<t.length;)if((u=t[a=s>=0?s--:o++])!=null&&(2&u.__u)==0&&p==u.key&&h==u.type)return a}return-1}function Gs(e,t,n){t[0]=="-"?e.setProperty(t,n==null?"":n):e[t]=n==null?"":typeof n!="number"||La.test(t)?n:n+"px"}function kn(e,t,n,l,s){var o,a;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof l=="string"&&(e.style.cssText=l=""),l)for(t in l)n&&t in n||Gs(e.style,t,"");if(n)for(t in n)l&&n[t]==l[t]||Gs(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(Js,"$1")),a=t.toLowerCase(),t=a in e||t=="onFocusOut"||t=="onFocusIn"?a.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?l?n.u=l.u:(n.u=bi,e.addEventListener(t,o?vi:_i,o)):e.removeEventListener(t,o?vi:_i,o);else{if(s=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n==null?"":n;break e}catch(p){}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function js(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=bi++;else if(t.t<n.u)return;return n(me.event?me.event(t):t)}}}function xi(e,t,n,l,s,o,a,p,h,u){var _,f,g,y,$,E,A,k,b,I,P,G,L,D,V,W=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(h=!!(32&n.__u),o=[p=t.__e=n.__e]),(_=me.__b)&&_(t);e:if(typeof W=="function")try{if(k=t.props,b=W.prototype&&W.prototype.render,I=(_=W.contextType)&&l[_.__c],P=_?I?I.props.value:_.__:l,n.__c?A=(f=t.__c=n.__c).__=f.__E:(b?t.__c=f=new W(k,P):(t.__c=f=new sn(k,P),f.constructor=W,f.render=Na),I&&I.sub(f),f.state||(f.state={}),f.__n=l,g=f.__d=!0,f.__h=[],f._sb=[]),b&&f.__s==null&&(f.__s=f.state),b&&W.getDerivedStateFromProps!=null&&(f.__s==f.state&&(f.__s=Vt({},f.__s)),Vt(f.__s,W.getDerivedStateFromProps(k,f.__s))),y=f.props,$=f.state,f.__v=t,g)b&&W.getDerivedStateFromProps==null&&f.componentWillMount!=null&&f.componentWillMount(),b&&f.componentDidMount!=null&&f.__h.push(f.componentDidMount);else{if(b&&W.getDerivedStateFromProps==null&&k!==y&&f.componentWillReceiveProps!=null&&f.componentWillReceiveProps(k,P),t.__v==n.__v||!f.__e&&f.shouldComponentUpdate!=null&&f.shouldComponentUpdate(k,f.__s,P)===!1){t.__v!=n.__v&&(f.props=k,f.state=f.__s,f.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(B){B&&(B.__=t)}),Tn.push.apply(f.__h,f._sb),f._sb=[],f.__h.length&&a.push(f);break e}f.componentWillUpdate!=null&&f.componentWillUpdate(k,f.__s,P),b&&f.componentDidUpdate!=null&&f.__h.push(function(){f.componentDidUpdate(y,$,E)})}if(f.context=P,f.props=k,f.__P=e,f.__e=!1,G=me.__r,L=0,b)f.state=f.__s,f.__d=!1,G&&G(t),_=f.render(f.props,f.state,f.context),Tn.push.apply(f.__h,f._sb),f._sb=[];else do f.__d=!1,G&&G(t),_=f.render(f.props,f.state,f.context),f.state=f.__s;while(f.__d&&++L<25);f.state=f.__s,f.getChildContext!=null&&(l=Vt(Vt({},l),f.getChildContext())),b&&!g&&f.getSnapshotBeforeUpdate!=null&&(E=f.getSnapshotBeforeUpdate(y,$)),D=_!=null&&_.type===Wt&&_.key==null?to(_.props.children):_,p=Qs(e,Ln(D)?D:[D],t,n,l,s,o,a,p,h,u),f.base=t.__e,t.__u&=-161,f.__h.length&&a.push(f),A&&(f.__E=f.__=null)}catch(B){if(t.__v=null,h||o!=null)if(B.then){for(t.__u|=h?160:128;p&&p.nodeType==8&&p.nextSibling;)p=p.nextSibling;o[o.indexOf(p)]=null,t.__e=p}else{for(V=o.length;V--;)wi(o[V]);yi(t)}else t.__e=n.__e,t.__k=n.__k,B.then||yi(t);me.__e(B,t,n)}else o==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):p=t.__e=Ia(n.__e,t,n,l,s,o,a,h,u);return(_=me.diffed)&&_(t),128&t.__u?void 0:p}function yi(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(yi))}function eo(e,t,n){for(var l=0;l<n.length;l++)$i(n[l],n[++l],n[++l]);me.__c&&me.__c(t,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(o){o.call(s)})}catch(o){me.__e(o,s.__v)}})}function to(e){return typeof e!="object"||e==null||e.__b>0?e:Ln(e)?e.map(to):Vt({},e)}function Ia(e,t,n,l,s,o,a,p,h){var u,_,f,g,y,$,E,A=n.props||Pn,k=t.props,b=t.type;if(b=="svg"?s="http://www.w3.org/2000/svg":b=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),o!=null){for(u=0;u<o.length;u++)if((y=o[u])&&"setAttribute"in y==!!b&&(b?y.localName==b:y.nodeType==3)){e=y,o[u]=null;break}}if(e==null){if(b==null)return document.createTextNode(k);e=document.createElementNS(s,b,k.is&&k),p&&(me.__m&&me.__m(t,o),p=!1),o=null}if(b==null)A===k||p&&e.data==k||(e.data=k);else{if(o=o&&An.call(e.childNodes),!p&&o!=null)for(A={},u=0;u<e.attributes.length;u++)A[(y=e.attributes[u]).name]=y.value;for(u in A)y=A[u],u=="dangerouslySetInnerHTML"?f=y:u=="children"||u in k||u=="value"&&"defaultValue"in k||u=="checked"&&"defaultChecked"in k||kn(e,u,null,y,s);for(u in k)y=k[u],u=="children"?g=y:u=="dangerouslySetInnerHTML"?_=y:u=="value"?$=y:u=="checked"?E=y:p&&typeof y!="function"||A[u]===y||kn(e,u,y,A[u],s);if(_)p||f&&(_.__html==f.__html||_.__html==e.innerHTML)||(e.innerHTML=_.__html),t.__k=[];else if(f&&(e.innerHTML=""),Qs(t.type=="template"?e.content:e,Ln(g)?g:[g],t,n,l,b=="foreignObject"?"http://www.w3.org/1999/xhtml":s,o,a,o?o[0]:n.__k&&Ol(n,0),p,h),o!=null)for(u=o.length;u--;)wi(o[u]);p||(u="value",b=="progress"&&$==null?e.removeAttribute("value"):$!=null&&($!==e[u]||b=="progress"&&!$||b=="option"&&$!=A[u])&&kn(e,u,$,A[u],s),u="checked",E!=null&&E!=e[u]&&kn(e,u,E,A[u],s))}return e}function $i(e,t,n){try{if(typeof e=="function"){var l=typeof e.__u=="function";l&&e.__u(),l&&t==null||(e.__u=e(t))}else e.current=t}catch(s){me.__e(s,n)}}function lo(e,t,n){var l,s;if(me.unmount&&me.unmount(e),(l=e.ref)&&(l.current&&l.current!=e.__e||$i(l,null,t)),(l=e.__c)!=null){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(o){me.__e(o,t)}l.base=l.__P=null}if(l=e.__k)for(s=0;s<l.length;s++)l[s]&&lo(l[s],t,n||typeof e.type!="function");n||wi(e.__e),e.__c=e.__=e.__e=void 0}function Na(e,t,n){return this.constructor(e,n)}function Si(e,t,n){var l,s,o,a;t==document&&(t=document.documentElement),me.__&&me.__(e,t),s=(l=typeof n=="function")?null:n&&n.__k||t.__k,o=[],a=[],xi(t,e=(!l&&n||t).__k=Mn(Wt,null,[e]),s||Pn,Pn,t.namespaceURI,!l&&n?[n]:s?null:t.firstChild?An.call(t.childNodes):null,o,!l&&n?n:s?s.__e:t.firstChild,l,a),eo(o,e,a)}An=Tn.slice,me={__e:function(e,t,n,l){for(var s,o,a;t=t.__;)if((s=t.__c)&&!s.__)try{if((o=s.constructor)&&o.getDerivedStateFromError!=null&&(s.setState(o.getDerivedStateFromError(e)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,l||{}),a=s.__d),a)return s.__E=s}catch(p){e=p}throw e}},Ys=0,Ea=function(e){return e!=null&&e.constructor===void 0},sn.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Vt({},this.state),typeof e=="function"&&(e=e(Vt({},n),this.props)),e&&Vt(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Bs(this))},sn.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Bs(this))},sn.prototype.render=Wt,el=[],Ks=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,qs=function(e,t){return e.__v.__b-t.__v.__b},En.__r=0,Js=/(PointerCapture)$|Capture$/i,bi=0,_i=js(!1),vi=js(!0),Aa=0;var on,Pe,ki,no,rn=0,fo=[],Le=me,io=Le.__b,so=Le.__r,oo=Le.diffed,ro=Le.__c,ao=Le.unmount,co=Le.__;function Pi(e,t){Le.__h&&Le.__h(Pe,e,rn||t),rn=0;var n=Pe.__H||(Pe.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function X(e){return rn=1,za(mo,e)}function za(e,t,n){var l=Pi(on++,2);if(l.t=e,!l.__c&&(l.__=[n?n(t):mo(void 0,t),function(p){var h=l.__N?l.__N[0]:l.__[0],u=l.t(h,p);h!==u&&(l.__N=[u,l.__[1]],l.__c.setState({}))}],l.__c=Pe,!Pe.__f)){var s=function(p,h,u){if(!l.__c.__H)return!0;var _=l.__c.__H.__.filter(function(g){return g.__c});if(_.every(function(g){return!g.__N}))return!o||o.call(this,p,h,u);var f=l.__c.props!==p;return _.some(function(g){if(g.__N){var y=g.__[0];g.__=g.__N,g.__N=void 0,y!==g.__[0]&&(f=!0)}}),o&&o.call(this,p,h,u)||f};Pe.__f=!0;var o=Pe.shouldComponentUpdate,a=Pe.componentWillUpdate;Pe.componentWillUpdate=function(p,h,u){if(this.__e){var _=o;o=void 0,s(p,h,u),o=_}a&&a.call(this,p,h,u)},Pe.shouldComponentUpdate=s}return l.__N||l.__}function pl(e,t){var n=Pi(on++,3);!Le.__s&&go(n.__H,t)&&(n.__=e,n.u=t,Pe.__H.__h.push(n))}function Ti(e){return rn=5,po(function(){return{current:e}},[])}function po(e,t){var n=Pi(on++,7);return go(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function ho(e,t){return rn=8,po(function(){return e},t)}function Oa(){for(var e;e=fo.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(Dn),t.__h.some(Ci),t.__h=[]}catch(n){t.__h=[],Le.__e(n,e.__v)}}}Le.__b=function(e){Pe=null,io&&io(e)},Le.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),co&&co(e,t)},Le.__r=function(e){so&&so(e),on=0;var t=(Pe=e.__c).__H;t&&(ki===Pe?(t.__h=[],Pe.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.some(Dn),t.__h.some(Ci),t.__h=[],on=0)),ki=Pe},Le.diffed=function(e){oo&&oo(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(fo.push(t)!==1&&no===Le.requestAnimationFrame||((no=Le.requestAnimationFrame)||Ha)(Oa)),t.__H.__.some(function(n){n.u&&(n.__H=n.u),n.u=void 0})),ki=Pe=null},Le.__c=function(e,t){t.some(function(n){try{n.__h.some(Dn),n.__h=n.__h.filter(function(l){return!l.__||Ci(l)})}catch(l){t.some(function(s){s.__h&&(s.__h=[])}),t=[],Le.__e(l,n.__v)}}),ro&&ro(e,t)},Le.unmount=function(e){ao&&ao(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(l){try{Dn(l)}catch(s){t=s}}),n.__H=void 0,t&&Le.__e(t,n.__v))};var uo=typeof requestAnimationFrame=="function";function Ha(e){var t,n=function(){clearTimeout(l),uo&&cancelAnimationFrame(t),setTimeout(e)},l=setTimeout(n,35);uo&&(t=requestAnimationFrame(n))}function Dn(e){var t=Pe,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),Pe=t}function Ci(e){var t=Pe;e.__c=e.__(),Pe=t}function go(e,t){return!e||e.length!==t.length||t.some(function(n,l){return n!==e[l]})}function mo(e,t){return typeof t=="function"?t(e):t}var vo=function(e,t,n,l){var s;t[0]=0;for(var o=1;o<t.length;o++){var a=t[o++],p=t[o]?(t[0]|=a?1:2,n[t[o++]]):t[++o];a===3?l[0]=p:a===4?l[1]=Object.assign(l[1]||{},p):a===5?(l[1]=l[1]||{})[t[++o]]=p:a===6?l[1][t[++o]]+=p+"":a?(s=e.apply(p,vo(e,p,n,["",null])),l.push(s),p[0]?t[0]|=2:(t[o-2]=0,t[o]=s)):l.push(p)}return l},_o=new Map;function yo(e){var t=_o.get(this);return t||(t=new Map,_o.set(this,t)),(t=vo(this,t.get(e)||(t.set(e,t=(function(n){for(var l,s,o=1,a="",p="",h=[0],u=function(g){o===1&&(g||(a=a.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?h.push(0,g,a):o===3&&(g||a)?(h.push(3,g,a),o=2):o===2&&a==="..."&&g?h.push(4,g,0):o===2&&a&&!g?h.push(5,0,!0,a):o>=5&&((a||!g&&o===5)&&(h.push(o,0,a,s),o=6),g&&(h.push(o,g,0,s),o=6)),a=""},_=0;_<n.length;_++){_&&(o===1&&u(),u(_));for(var f=0;f<n[_].length;f++)l=n[_][f],o===1?l==="<"?(u(),h=[h],o=3):a+=l:o===4?a==="--"&&l===">"?(o=1,a=""):a=l+a[0]:p?l===p?p="":a+=l:l==='"'||l==="'"?p=l:l===">"?(u(),o=1):o&&(l==="="?(o=5,s=a,a=""):l==="/"&&(o<5||n[_][f+1]===">")?(u(),o===3&&(h=h[0]),o=h,(h=h[0]).push(2,0,o),o=0):l===" "||l==="	"||l===`
`||l==="\r"?(u(),o=2):a+=l),o===3&&a==="!--"&&(o=4,h=h[0])}return u(),h})(e)),t),arguments,[])).length>1?t:t[0]}var S=yo.bind(Mn);var Fa="uplot",Va="u-hz",Wa="u-vt",Ua="u-title",Ba="u-wrap",Ga="u-under",ja="u-over",Ya="u-axis",ml="u-off",Ka="u-select",qa="u-cursor-x",Ja="u-cursor-y",Za="u-cursor-pt",Qa="u-legend",Xa="u-live",ec="u-inline",tc="u-series",lc="u-marker",bo="u-label",nc="u-value",cn="width",un="height";var wo="bottom",Hl="left",Ei="right",ji="#000",xo=ji+"0",Ai="mousemove",$o="mousedown",Li="mouseup",So="mouseenter",ko="mouseleave",Co="dblclick",ic="resize",sc="scroll",Po="change",On="dppxchange",Yi="--",jl=typeof window!="undefined",Ni=jl?document:null,Vl=jl?window:null,oc=jl?navigator:null,ce,Rn;function zi(){let e=devicePixelRatio;ce!=e&&(ce=e,Rn&&Hi(Po,Rn,zi),Rn=matchMedia(`(min-resolution: ${ce-.001}dppx) and (max-resolution: ${ce+.001}dppx)`),_l(Po,Rn,zi),Vl.dispatchEvent(new CustomEvent(On)))}function ut(e,t){if(t!=null){let n=e.classList;!n.contains(t)&&n.add(t)}}function Oi(e,t){let n=e.classList;n.contains(t)&&n.remove(t)}function be(e,t,n){e.style[t]=n+"px"}function Pt(e,t,n,l){let s=Ni.createElement(e);return t!=null&&ut(s,t),n!=null&&n.insertBefore(s,l),s}function bt(e,t){return Pt("div",e,t)}var To=new WeakMap;function zt(e,t,n,l,s){let o="translate("+t+"px,"+n+"px)",a=To.get(e);o!=a&&(e.style.transform=o,To.set(e,o),t<0||n<0||t>l||n>s?ut(e,ml):Oi(e,ml))}var Eo=new WeakMap;function Ao(e,t,n){let l=t+n,s=Eo.get(e);l!=s&&(Eo.set(e,l),e.style.background=t,e.style.borderColor=n)}var Lo=new WeakMap;function Mo(e,t,n,l){let s=t+""+n,o=Lo.get(e);s!=o&&(Lo.set(e,s),e.style.height=n+"px",e.style.width=t+"px",e.style.marginLeft=l?-t/2+"px":0,e.style.marginTop=l?-n/2+"px":0)}var Ki={passive:!0},rc=Ve(Ae({},Ki),{capture:!0});function _l(e,t,n,l){t.addEventListener(e,n,l?rc:Ki)}function Hi(e,t,n,l){t.removeEventListener(e,n,Ki)}jl&&zi();function Tt(e,t,n,l){let s;n=n||0,l=l||t.length-1;let o=l<=2147483647;for(;l-n>1;)s=o?n+l>>1:ft((n+l)/2),t[s]<e?n=s:l=s;return e-t[n]<=t[l]-e?n:l}function or(e){return(n,l,s)=>{let o=-1,a=-1;for(let p=l;p<=s;p++)if(e(n[p])){o=p;break}for(let p=s;p>=l;p--)if(e(n[p])){a=p;break}return[o,a]}}var rr=e=>e!=null,ar=e=>e!=null&&e>0,Vn=or(rr),ac=or(ar);function cc(e,t,n,l=0,s=!1){let o=s?ac:Vn,a=s?ar:rr;[t,n]=o(e,t,n);let p=e[t],h=e[t];if(t>-1)if(l==1)p=e[t],h=e[n];else if(l==-1)p=e[n],h=e[t];else for(let u=t;u<=n;u++){let _=e[u];a(_)&&(_<p?p=_:_>h&&(h=_))}return[p!=null?p:he,h!=null?h:-he]}function Wn(e,t,n,l){let s=Io(e),o=Io(t);e==t&&(s==-1?(e*=n,t/=n):(e/=n,t*=n));let a=n==10?Ut:cr,p=s==1?ft:wt,h=o==1?wt:ft,u=p(a(Ie(e))),_=h(a(Ie(t))),f=Wl(n,u),g=Wl(n,_);return n==10&&(u<0&&(f=ge(f,-u)),_<0&&(g=ge(g,-_))),l||n==2?(e=f*s,t=g*o):(e=pr(e,f),t=Un(t,g)),[e,t]}function qi(e,t,n,l){let s=Wn(e,t,n,l);return e==0&&(s[0]=0),t==0&&(s[1]=0),s}var Ji=.1,Do={mode:3,pad:Ji},dn={pad:0,soft:null,mode:0},uc={min:dn,max:dn};function Hn(e,t,n,l){return Bn(n)?Ro(e,t,n):(dn.pad=n,dn.soft=l?0:null,dn.mode=l?3:0,Ro(e,t,uc))}function re(e,t){return e==null?t:e}function fc(e,t,n){for(t=re(t,0),n=re(n,e.length-1);t<=n;){if(e[t]!=null)return!0;t++}return!1}function Ro(e,t,n){let l=n.min,s=n.max,o=re(l.pad,0),a=re(s.pad,0),p=re(l.hard,-he),h=re(s.hard,he),u=re(l.soft,he),_=re(s.soft,-he),f=re(l.mode,0),g=re(s.mode,0),y=t-e,$=Ut(y),E=tt(Ie(e),Ie(t)),A=Ut(E),k=Ie(A-$);(y<1e-24||k>10)&&(y=0,(e==0||t==0)&&(y=1e-24,f==2&&u!=he&&(o=0),g==2&&_!=-he&&(a=0)));let b=y||E||1e3,I=Ut(b),P=Wl(10,ft(I)),G=b*(y==0?e==0?.1:1:o),L=ge(pr(e-G,P/10),24),D=e>=u&&(f==1||f==3&&L<=u||f==2&&L>=u)?u:he,V=tt(p,L<D&&e>=D?D:Et(D,L)),W=b*(y==0?t==0?.1:1:a),B=ge(Un(t+W,P/10),24),x=t<=_&&(g==1||g==3&&B>=_||g==2&&B<=_)?_:-he,Y=Et(h,B>x&&t<=x?x:tt(x,B));return V==Y&&V==0&&(Y=100),[V,Y]}var dc=new Intl.NumberFormat(jl?oc.language:"en-US"),Zi=e=>dc.format(e),dt=Math,zn=dt.PI,Ie=dt.abs,ft=dt.floor,Re=dt.round,wt=dt.ceil,Et=dt.min,tt=dt.max,Wl=dt.pow,Io=dt.sign,Ut=dt.log10,cr=dt.log2,pc=(e,t=1)=>dt.sinh(e)*t,Mi=(e,t=1)=>dt.asinh(e/t),he=1/0;function No(e){return(Ut((e^e>>31)-(e>>31))|0)+1}function Fi(e,t,n){return Et(tt(e,t),n)}function ur(e){return typeof e=="function"}function te(e){return ur(e)?e:()=>e}var hc=()=>{},fr=e=>e,dr=(e,t)=>t,gc=e=>null,zo=e=>!0,Oo=(e,t)=>e==t,mc=/\.\d*?(?=9{6,}|0{6,})/gm,vl=e=>{if(gr(e)||ll.has(e))return e;let t=`${e}`,n=t.match(mc);if(n==null)return e;let l=n[0].length-1;if(t.indexOf("e-")!=-1){let[s,o]=t.split("e");return+`${vl(s)}e${o}`}return ge(e,l)};function hl(e,t){return vl(ge(vl(e/t))*t)}function Un(e,t){return vl(wt(vl(e/t))*t)}function pr(e,t){return vl(ft(vl(e/t))*t)}function ge(e,t=0){if(gr(e))return e;let n=10**t,l=e*n*(1+Number.EPSILON);return Re(l)/n}var ll=new Map;function hr(e){return((""+e).split(".")[1]||"").length}function hn(e,t,n,l){let s=[],o=l.map(hr);for(let a=t;a<n;a++){let p=Ie(a),h=ge(Wl(e,a),p);for(let u=0;u<l.length;u++){let _=e==10?+`${l[u]}e${a}`:l[u]*h,f=(a>=0?0:p)+(a>=o[u]?0:o[u]),g=e==10?_:ge(_,f);s.push(g),ll.set(g,f)}}return s}var pn={},Qi=[],Ul=[null,null],tl=Array.isArray,gr=Number.isInteger,_c=e=>e===void 0;function Ho(e){return typeof e=="string"}function Bn(e){let t=!1;if(e!=null){let n=e.constructor;t=n==null||n==Object}return t}function vc(e){return e!=null&&typeof e=="object"}var yc=Object.getPrototypeOf(Uint8Array),mr="__proto__";function Bl(e,t=Bn){let n;if(tl(e)){let l=e.find(s=>s!=null);if(tl(l)||t(l)){n=Array(e.length);for(let s=0;s<e.length;s++)n[s]=Bl(e[s],t)}else n=e.slice()}else if(e instanceof yc)n=e.slice();else if(t(e)){n={};for(let l in e)l!=mr&&(n[l]=Bl(e[l],t))}else n=e;return n}function Me(e){let t=arguments;for(let n=1;n<t.length;n++){let l=t[n];for(let s in l)s!=mr&&(Bn(e[s])?Me(e[s],Bl(l[s])):e[s]=Bl(l[s]))}return e}var bc=0,wc=1,xc=2;function $c(e,t,n){for(let l=0,s,o=-1;l<t.length;l++){let a=t[l];if(a>o){for(s=a-1;s>=0&&e[s]==null;)e[s--]=null;for(s=a+1;s<n&&e[s]==null;)e[o=s++]=null}}}function Sc(e,t){if(Pc(e)){let a=e[0].slice();for(let p=1;p<e.length;p++)a.push(...e[p].slice(1));return Tc(a[0])||(a=Cc(a)),a}let n=new Set;for(let a=0;a<e.length;a++){let h=e[a][0],u=h.length;for(let _=0;_<u;_++)n.add(h[_])}let l=[Array.from(n).sort((a,p)=>a-p)],s=l[0].length,o=new Map;for(let a=0;a<s;a++)o.set(l[0][a],a);for(let a=0;a<e.length;a++){let p=e[a],h=p[0];for(let u=1;u<p.length;u++){let _=p[u],f=Array(s).fill(void 0),g=t?t[a][u]:wc,y=[];for(let $=0;$<_.length;$++){let E=_[$],A=o.get(h[$]);E===null?g!=bc&&(f[A]=E,g==xc&&y.push(A)):f[A]=E}$c(f,y,s),l.push(f)}}return l}var kc=typeof queueMicrotask=="undefined"?e=>Promise.resolve().then(e):queueMicrotask;function Cc(e){let t=e[0],n=t.length,l=Array(n);for(let o=0;o<l.length;o++)l[o]=o;l.sort((o,a)=>t[o]-t[a]);let s=[];for(let o=0;o<e.length;o++){let a=e[o],p=Array(n);for(let h=0;h<n;h++)p[h]=a[l[h]];s.push(p)}return s}function Pc(e){let t=e[0][0],n=t.length;for(let l=1;l<e.length;l++){let s=e[l][0];if(s.length!=n)return!1;if(s!=t){for(let o=0;o<n;o++)if(s[o]!=t[o])return!1}}return!0}function Tc(e,t=100){let n=e.length;if(n<=1)return!0;let l=0,s=n-1;for(;l<=s&&e[l]==null;)l++;for(;s>=l&&e[s]==null;)s--;if(s<=l)return!0;let o=tt(1,ft((s-l+1)/t));for(let a=e[l],p=l+o;p<=s;p+=o){let h=e[p];if(h!=null){if(h<=a)return!1;a=h}}return!0}var _r=["January","February","March","April","May","June","July","August","September","October","November","December"],vr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function yr(e){return e.slice(0,3)}var Ec=vr.map(yr),Ac=_r.map(yr),Lc={MMMM:_r,MMM:Ac,WWWW:vr,WWW:Ec};function an(e){return(e<10?"0":"")+e}function Mc(e){return(e<10?"00":e<100?"0":"")+e}var Dc={YYYY:e=>e.getFullYear(),YY:e=>(e.getFullYear()+"").slice(2),MMMM:(e,t)=>t.MMMM[e.getMonth()],MMM:(e,t)=>t.MMM[e.getMonth()],MM:e=>an(e.getMonth()+1),M:e=>e.getMonth()+1,DD:e=>an(e.getDate()),D:e=>e.getDate(),WWWW:(e,t)=>t.WWWW[e.getDay()],WWW:(e,t)=>t.WWW[e.getDay()],HH:e=>an(e.getHours()),H:e=>e.getHours(),h:e=>{let t=e.getHours();return t==0?12:t>12?t-12:t},AA:e=>e.getHours()>=12?"PM":"AM",aa:e=>e.getHours()>=12?"pm":"am",a:e=>e.getHours()>=12?"p":"a",mm:e=>an(e.getMinutes()),m:e=>e.getMinutes(),ss:e=>an(e.getSeconds()),s:e=>e.getSeconds(),fff:e=>Mc(e.getMilliseconds())};function Xi(e,t){t=t||Lc;let n=[],l=/\{([a-z]+)\}|[^{]+/gi,s;for(;s=l.exec(e);)n.push(s[0][0]=="{"?Dc[s[1]]:s[0]);return o=>{let a="";for(let p=0;p<n.length;p++)a+=typeof n[p]=="string"?n[p]:n[p](o,t);return a}}var Rc=new Intl.DateTimeFormat().resolvedOptions().timeZone;function Ic(e,t){let n;return t=="UTC"||t=="Etc/UTC"?n=new Date(+e+e.getTimezoneOffset()*6e4):t==Rc?n=e:(n=new Date(e.toLocaleString("en-US",{timeZone:t})),n.setMilliseconds(e.getMilliseconds())),n}var br=e=>e%1==0,Fn=[1,2,2.5,5],Nc=hn(10,-32,0,Fn),wr=hn(10,0,32,Fn),zc=wr.filter(br),gl=Nc.concat(wr),es=`
`,xr="{YYYY}",Fo=es+xr,$r="{M}/{D}",fn=es+$r,In=fn+"/{YY}",Sr="{aa}",Oc="{h}:{mm}",Fl=Oc+Sr,Vo=es+Fl,Wo=":{ss}",ue=null;function kr(e){let t=e*1e3,n=t*60,l=n*60,s=l*24,o=s*30,a=s*365,h=(e==1?hn(10,0,3,Fn).filter(br):hn(10,-3,0,Fn)).concat([t,t*5,t*10,t*15,t*30,n,n*5,n*10,n*15,n*30,l,l*2,l*3,l*4,l*6,l*8,l*12,s,s*2,s*3,s*4,s*5,s*6,s*7,s*8,s*9,s*10,s*15,o,o*2,o*3,o*4,o*6,a,a*2,a*5,a*10,a*25,a*50,a*100]),u=[[a,xr,ue,ue,ue,ue,ue,ue,1],[s*28,"{MMM}",Fo,ue,ue,ue,ue,ue,1],[s,$r,Fo,ue,ue,ue,ue,ue,1],[l,"{h}"+Sr,In,ue,fn,ue,ue,ue,1],[n,Fl,In,ue,fn,ue,ue,ue,1],[t,Wo,In+" "+Fl,ue,fn+" "+Fl,ue,Vo,ue,1],[e,Wo+".{fff}",In+" "+Fl,ue,fn+" "+Fl,ue,Vo,ue,1]];function _(f){return(g,y,$,E,A,k)=>{let b=[],I=A>=a,P=A>=o&&A<a,G=f($),L=ge(G*e,3),D=Di(G.getFullYear(),I?0:G.getMonth(),P||I?1:G.getDate()),V=ge(D*e,3);if(P||I){let W=P?A/o:0,B=I?A/a:0,x=L==V?L:ge(Di(D.getFullYear()+B,D.getMonth()+W,1)*e,3),Y=new Date(Re(x/e)),O=Y.getFullYear(),K=Y.getMonth();for(let U=0;x<=E;U++){let le=Di(O+B*U,K+W*U,1),F=le-f(ge(le*e,3));x=ge((+le+F)*e,3),x<=E&&b.push(x)}}else{let W=A>=s?s:A,B=ft($)-ft(L),x=V+B+Un(L-V,W);b.push(x);let Y=f(x),O=Y.getHours()+Y.getMinutes()/n+Y.getSeconds()/l,K=A/l,U=g.axes[y]._space,le=k/U;for(;x=ge(x+A,e==1?0:3),!(x>E);)if(K>1){let F=ft(ge(O+K,6))%24,ne=f(x).getHours()-F;ne>1&&(ne=-1),x-=ne*l,O=(O+K)%24;let fe=b[b.length-1];ge((x-fe)/A,3)*le>=.7&&b.push(x)}else b.push(x)}return b}}return[h,u,_]}var[Hc,Fc,Vc]=kr(1),[Wc,Uc,Bc]=kr(.001);hn(2,-53,53,[1]);function Uo(e,t){return e.map(n=>n.map((l,s)=>s==0||s==8||l==null?l:t(s==1||n[8]==0?l:n[1]+l)))}function Bo(e,t){return(n,l,s,o,a)=>{let p=t.find($=>a>=$[0])||t[t.length-1],h,u,_,f,g,y;return l.map($=>{let E=e($),A=E.getFullYear(),k=E.getMonth(),b=E.getDate(),I=E.getHours(),P=E.getMinutes(),G=E.getSeconds(),L=A!=h&&p[2]||k!=u&&p[3]||b!=_&&p[4]||I!=f&&p[5]||P!=g&&p[6]||G!=y&&p[7]||p[1];return h=A,u=k,_=b,f=I,g=P,y=G,L(E)})}}function Gc(e,t){let n=Xi(t);return(l,s,o,a,p)=>s.map(h=>n(e(h)))}function Di(e,t,n){return new Date(e,t,n)}function Go(e,t){return t(e)}var jc="{YYYY}-{MM}-{DD} {h}:{mm}{aa}";function jo(e,t){return(n,l,s,o)=>o==null?Yi:t(e(l))}function Yc(e,t){let n=e.series[t];return n.width?n.stroke(e,t):n.points.width?n.points.stroke(e,t):null}function Kc(e,t){return e.series[t].fill(e,t)}var qc={show:!0,live:!0,isolate:!1,mount:hc,markers:{show:!0,width:2,stroke:Yc,fill:Kc,dash:"solid"},idx:null,idxs:null,values:[]};function Jc(e,t){let n=e.cursor.points,l=bt(),s=n.size(e,t);be(l,cn,s),be(l,un,s);let o=s/-2;be(l,"marginLeft",o),be(l,"marginTop",o);let a=n.width(e,t,s);return a&&be(l,"borderWidth",a),l}function Zc(e,t){let n=e.series[t].points;return n._fill||n._stroke}function Qc(e,t){let n=e.series[t].points;return n._stroke||n._fill}function Xc(e,t){return e.series[t].points.size}var Ri=[0,0];function eu(e,t,n){return Ri[0]=t,Ri[1]=n,Ri}function Nn(e,t,n,l=!0){return s=>{s.button==0&&(!l||s.target==t)&&n(s)}}function Ii(e,t,n,l=!0){return s=>{(!l||s.target==t)&&n(s)}}var tu={show:!0,x:!0,y:!0,lock:!1,move:eu,points:{one:!1,show:Jc,size:Xc,width:0,stroke:Qc,fill:Zc},bind:{mousedown:Nn,mouseup:Nn,click:Nn,dblclick:Nn,mousemove:Ii,mouseleave:Ii,mouseenter:Ii},drag:{setScale:!0,x:!0,y:!1,dist:0,uni:null,click:(e,t)=>{t.stopPropagation(),t.stopImmediatePropagation()},_x:!1,_y:!1},focus:{dist:(e,t,n,l,s)=>l-s,prox:-1,bias:0},hover:{skip:[void 0],prox:null,bias:0},left:-10,top:-10,idx:null,dataIdx:null,idxs:null,event:null},Cr={show:!0,stroke:"rgba(0,0,0,0.07)",width:2},ts=Me({},Cr,{filter:dr}),Pr=Me({},ts,{size:10}),Tr=Me({},Cr,{show:!1}),ls='12px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',Er="bold "+ls,Ar=1.5,Yo={show:!0,scale:"x",stroke:ji,space:50,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:Er,side:2,grid:ts,ticks:Pr,border:Tr,font:ls,lineGap:Ar,rotate:0},lu="Value",nu="Time",Ko={show:!0,scale:"x",auto:!1,sorted:1,min:he,max:-he,idxs:[]};function iu(e,t,n,l,s){return t.map(o=>o==null?"":Zi(o))}function su(e,t,n,l,s,o,a){let p=[],h=ll.get(s)||0;n=a?n:ge(Un(n,s),h);for(let u=n;u<=l;u=ge(u+s,h))p.push(Object.is(u,-0)?0:u);return p}function Vi(e,t,n,l,s,o,a){let p=[],h=e.scales[e.axes[t].scale].log,u=h==10?Ut:cr,_=ft(u(n));s=Wl(h,_),h==10&&(s=gl[Tt(s,gl)]);let f=n,g=s*h;h==10&&(g=gl[Tt(g,gl)]);do p.push(f),f=f+s,h==10&&!ll.has(f)&&(f=ge(f,ll.get(s))),f>=g&&(s=f,g=s*h,h==10&&(g=gl[Tt(g,gl)]));while(f<=l);return p}function ou(e,t,n,l,s,o,a){let h=e.scales[e.axes[t].scale].asinh,u=l>h?Vi(e,t,tt(h,n),l,s):[h],_=l>=0&&n<=0?[0]:[];return(n<-h?Vi(e,t,tt(h,-l),-n,s):[h]).reverse().map(g=>-g).concat(_,u)}var Lr=/./,ru=/[12357]/,au=/[125]/,qo=/1/,Wi=(e,t,n,l)=>e.map((s,o)=>t==4&&s==0||o%l==0&&n.test(s.toExponential()[s<0?1:0])?s:null);function cu(e,t,n,l,s){let o=e.axes[n],a=o.scale,p=e.scales[a],h=e.valToPos,u=o._space,_=h(10,a),f=h(9,a)-_>=u?Lr:h(7,a)-_>=u?ru:h(5,a)-_>=u?au:qo;if(f==qo){let g=Ie(h(1,a)-_);if(g<u)return Wi(t.slice().reverse(),p.distr,f,wt(u/g)).reverse()}return Wi(t,p.distr,f,1)}function uu(e,t,n,l,s){let o=e.axes[n],a=o.scale,p=o._space,h=e.valToPos,u=Ie(h(1,a)-h(2,a));return u<p?Wi(t.slice().reverse(),3,Lr,wt(p/u)).reverse():t}function fu(e,t,n,l){return l==null?Yi:t==null?"":Zi(t)}var Jo={show:!0,scale:"y",stroke:ji,space:30,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:Er,side:3,grid:ts,ticks:Pr,border:Tr,font:ls,lineGap:Ar,rotate:0};function du(e,t){let n=3+(e||1)*2;return ge(n*t,3)}function pu(e,t){let{scale:n,idxs:l}=e.series[0],s=e._data[0],o=e.valToPos(s[l[0]],n,!0),a=e.valToPos(s[l[1]],n,!0),p=Ie(a-o),h=e.series[t],u=p/(h.points.space*ce);return l[1]-l[0]<=u}var Zo={scale:null,auto:!0,sorted:0,min:he,max:-he},Mr=(e,t,n,l,s)=>s,Qo={show:!0,auto:!0,sorted:0,gaps:Mr,alpha:1,facets:[Me({},Zo,{scale:"x"}),Me({},Zo,{scale:"y"})]},Xo={scale:"y",auto:!0,sorted:0,show:!0,spanGaps:!1,gaps:Mr,alpha:1,points:{show:pu,filter:null},values:null,min:he,max:-he,idxs:[],path:null,clip:null};function hu(e,t,n,l,s){return n/10}var Dr={time:!0,auto:!0,distr:1,log:10,asinh:1,min:null,max:null,dir:1,ori:0},gu=Me({},Dr,{time:!1,ori:1}),er={};function Rr(e,t){let n=er[e];return n||(n={key:e,plots:[],sub(l){n.plots.push(l)},unsub(l){n.plots=n.plots.filter(s=>s!=l)},pub(l,s,o,a,p,h,u){for(let _=0;_<n.plots.length;_++)n.plots[_]!=s&&n.plots[_].pub(l,s,o,a,p,h,u)}},e!=null&&(er[e]=n)),n}var Gl=1,Ui=2;function yl(e,t,n){let l=e.mode,s=e.series[t],o=l==2?e._data[t]:e._data,a=e.scales,p=e.bbox,h=o[0],u=l==2?o[1]:o[t],_=l==2?a[s.facets[0].scale]:a[e.series[0].scale],f=l==2?a[s.facets[1].scale]:a[s.scale],g=p.left,y=p.top,$=p.width,E=p.height,A=e.valToPosH,k=e.valToPosV;return _.ori==0?n(s,h,u,_,f,A,k,g,y,$,E,jn,Yl,Kn,Nr,Or):n(s,h,u,_,f,k,A,y,g,E,$,Yn,Kl,ss,zr,Hr)}function ns(e,t){let n=0,l=0,s=re(e.bands,Qi);for(let o=0;o<s.length;o++){let a=s[o];a.series[0]==t?n=a.dir:a.series[1]==t&&(a.dir==1?l|=1:l|=2)}return[n,l==1?-1:l==2?1:l==3?2:0]}function mu(e,t,n,l,s){let o=e.mode,a=e.series[t],p=o==2?a.facets[1].scale:a.scale,h=e.scales[p];return s==-1?h.min:s==1?h.max:h.distr==3?h.dir==1?h.min:h.max:0}function Bt(e,t,n,l,s,o){return yl(e,t,(a,p,h,u,_,f,g,y,$,E,A)=>{let k=a.pxRound,b=u.dir*(u.ori==0?1:-1),I=u.ori==0?Yl:Kl,P,G;b==1?(P=n,G=l):(P=l,G=n);let L=k(f(p[P],u,E,y)),D=k(g(h[P],_,A,$)),V=k(f(p[G],u,E,y)),W=k(g(o==1?_.max:_.min,_,A,$)),B=new Path2D(s);return I(B,V,W),I(B,L,W),I(B,L,D),B})}function Gn(e,t,n,l,s,o){let a=null;if(e.length>0){a=new Path2D;let p=t==0?Kn:ss,h=n;for(let f=0;f<e.length;f++){let g=e[f];if(g[1]>g[0]){let y=g[0]-h;y>0&&p(a,h,l,y,l+o),h=g[1]}}let u=n+s-h,_=10;u>0&&p(a,h,l-_/2,u,l+o+_)}return a}function _u(e,t,n){let l=e[e.length-1];l&&l[0]==t?l[1]=n:e.push([t,n])}function is(e,t,n,l,s,o,a){let p=[],h=e.length;for(let u=s==1?n:l;u>=n&&u<=l;u+=s)if(t[u]===null){let f=u,g=u;if(s==1)for(;++u<=l&&t[u]===null;)g=u;else for(;--u>=n&&t[u]===null;)g=u;let y=o(e[f]),$=g==f?y:o(e[g]),E=f-s;y=a<=0&&E>=0&&E<h?o(e[E]):y;let k=g+s;$=a>=0&&k>=0&&k<h?o(e[k]):$,$>=y&&p.push([y,$])}return p}function tr(e){return e==0?fr:e==1?Re:t=>hl(t,e)}function Ir(e){let t=e==0?jn:Yn,n=e==0?(s,o,a,p,h,u)=>{s.arcTo(o,a,p,h,u)}:(s,o,a,p,h,u)=>{s.arcTo(a,o,h,p,u)},l=e==0?(s,o,a,p,h)=>{s.rect(o,a,p,h)}:(s,o,a,p,h)=>{s.rect(a,o,h,p)};return(s,o,a,p,h,u=0,_=0)=>{u==0&&_==0?l(s,o,a,p,h):(u=Et(u,p/2,h/2),_=Et(_,p/2,h/2),t(s,o+u,a),n(s,o+p,a,o+p,a+h,u),n(s,o+p,a+h,o,a+h,_),n(s,o,a+h,o,a,_),n(s,o,a,o+p,a,u),s.closePath())}}var jn=(e,t,n)=>{e.moveTo(t,n)},Yn=(e,t,n)=>{e.moveTo(n,t)},Yl=(e,t,n)=>{e.lineTo(t,n)},Kl=(e,t,n)=>{e.lineTo(n,t)},Kn=Ir(0),ss=Ir(1),Nr=(e,t,n,l,s,o)=>{e.arc(t,n,l,s,o)},zr=(e,t,n,l,s,o)=>{e.arc(n,t,l,s,o)},Or=(e,t,n,l,s,o,a)=>{e.bezierCurveTo(t,n,l,s,o,a)},Hr=(e,t,n,l,s,o,a)=>{e.bezierCurveTo(n,t,s,l,a,o)};function Fr(e){return(t,n,l,s,o)=>yl(t,n,(a,p,h,u,_,f,g,y,$,E,A)=>{let{pxRound:k,points:b}=a,I,P;u.ori==0?(I=jn,P=Nr):(I=Yn,P=zr);let G=ge(b.width*ce,3),L=(b.size-b.width)/2*ce,D=ge(L*2,3),V=new Path2D,W=new Path2D,{left:B,top:x,width:Y,height:O}=t.bbox;Kn(W,B-D,x-D,Y+D*2,O+D*2);let K=U=>{if(h[U]!=null){let le=k(f(p[U],u,E,y)),F=k(g(h[U],_,A,$));I(V,le+L,F),P(V,le,F,L,0,zn*2)}};if(o)o.forEach(K);else for(let U=l;U<=s;U++)K(U);return{stroke:G>0?V:null,fill:V,clip:W,flags:Gl|Ui}})}function Vr(e){return(t,n,l,s,o,a)=>{l!=s&&(o!=l&&a!=l&&e(t,n,l),o!=s&&a!=s&&e(t,n,s),e(t,n,a))}}var vu=Vr(Yl),yu=Vr(Kl);function Wr(e){let t=re(e==null?void 0:e.alignGaps,0);return(n,l,s,o)=>yl(n,l,(a,p,h,u,_,f,g,y,$,E,A)=>{[s,o]=Vn(h,s,o);let k=a.pxRound,b=O=>k(f(O,u,E,y)),I=O=>k(g(O,_,A,$)),P,G;u.ori==0?(P=Yl,G=vu):(P=Kl,G=yu);let L=u.dir*(u.ori==0?1:-1),D={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:Gl},V=D.stroke,W=!1;if(o-s>=E*4){let O=H=>n.posToVal(H,u.key,!0),K=null,U=null,le,F,lt,we=b(p[L==1?s:o]),ne=b(p[s]),fe=b(p[o]),ee=O(L==1?ne+1:fe-1);for(let H=L==1?s:o;H>=s&&H<=o;H+=L){let De=p[H],xe=(L==1?De<ee:De>ee)?we:b(De),ie=h[H];xe==we?ie!=null?(F=ie,K==null?(P(V,xe,I(F)),le=K=U=F):F<K?K=F:F>U&&(U=F)):ie===null&&(W=!0):(K!=null&&G(V,we,I(K),I(U),I(le),I(F)),ie!=null?(F=ie,P(V,xe,I(F)),K=U=le=F):(K=U=null,ie===null&&(W=!0)),we=xe,ee=O(we+L))}K!=null&&K!=U&&lt!=we&&G(V,we,I(K),I(U),I(le),I(F))}else for(let O=L==1?s:o;O>=s&&O<=o;O+=L){let K=h[O];K===null?W=!0:K!=null&&P(V,b(p[O]),I(K))}let[x,Y]=ns(n,l);if(a.fill!=null||x!=0){let O=D.fill=new Path2D(V),K=a.fillTo(n,l,a.min,a.max,x),U=I(K),le=b(p[s]),F=b(p[o]);L==-1&&([F,le]=[le,F]),P(O,F,U),P(O,le,U)}if(!a.spanGaps){let O=[];W&&O.push(...is(p,h,s,o,L,b,t)),D.gaps=O=a.gaps(n,l,s,o,O),D.clip=Gn(O,u.ori,y,$,E,A)}return Y!=0&&(D.band=Y==2?[Bt(n,l,s,o,V,-1),Bt(n,l,s,o,V,1)]:Bt(n,l,s,o,V,Y)),D})}function bu(e){let t=re(e.align,1),n=re(e.ascDesc,!1),l=re(e.alignGaps,0),s=re(e.extend,!1);return(o,a,p,h)=>yl(o,a,(u,_,f,g,y,$,E,A,k,b,I)=>{[p,h]=Vn(f,p,h);let P=u.pxRound,{left:G,width:L}=o.bbox,D=ne=>P($(ne,g,b,A)),V=ne=>P(E(ne,y,I,k)),W=g.ori==0?Yl:Kl,B={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:Gl},x=B.stroke,Y=g.dir*(g.ori==0?1:-1),O=V(f[Y==1?p:h]),K=D(_[Y==1?p:h]),U=K,le=K;s&&t==-1&&(le=G,W(x,le,O)),W(x,K,O);for(let ne=Y==1?p:h;ne>=p&&ne<=h;ne+=Y){let fe=f[ne];if(fe==null)continue;let ee=D(_[ne]),H=V(fe);t==1?W(x,ee,O):W(x,U,H),W(x,ee,H),O=H,U=ee}let F=U;s&&t==1&&(F=G+L,W(x,F,O));let[lt,we]=ns(o,a);if(u.fill!=null||lt!=0){let ne=B.fill=new Path2D(x),fe=u.fillTo(o,a,u.min,u.max,lt),ee=V(fe);W(ne,F,ee),W(ne,le,ee)}if(!u.spanGaps){let ne=[];ne.push(...is(_,f,p,h,Y,D,l));let fe=u.width*ce/2,ee=n||t==1?fe:-fe,H=n||t==-1?-fe:fe;ne.forEach(De=>{De[0]+=ee,De[1]+=H}),B.gaps=ne=u.gaps(o,a,p,h,ne),B.clip=Gn(ne,g.ori,A,k,b,I)}return we!=0&&(B.band=we==2?[Bt(o,a,p,h,x,-1),Bt(o,a,p,h,x,1)]:Bt(o,a,p,h,x,we)),B})}function lr(e,t,n,l,s,o,a=he){if(e.length>1){let p=null;for(let h=0,u=1/0;h<e.length;h++)if(t[h]!==void 0){if(p!=null){let _=Ie(e[h]-e[p]);_<u&&(u=_,a=Ie(n(e[h],l,s,o)-n(e[p],l,s,o)))}p=h}}return a}function wu(e){e=e||pn;let t=re(e.size,[.6,he,1]),n=e.align||0,l=e.gap||0,s=e.radius;s=s==null?[0,0]:typeof s=="number"?[s,0]:s;let o=te(s),a=1-t[0],p=re(t[1],he),h=re(t[2],1),u=re(e.disp,pn),_=re(e.each,y=>{}),{fill:f,stroke:g}=u;return(y,$,E,A)=>yl(y,$,(k,b,I,P,G,L,D,V,W,B,x)=>{var Q,Ye;let Y=k.pxRound,O=n,K=l*ce,U=p*ce,le=h*ce,F,lt;P.ori==0?[F,lt]=o(y,$):[lt,F]=o(y,$);let we=P.dir*(P.ori==0?1:-1),ne=P.ori==0?Kn:ss,fe=P.ori==0?_:(J,Ze,jt,ol,Yt,nt,$t)=>{_(J,Ze,jt,Yt,ol,$t,nt)},ee=re(y.bands,Qi).find(J=>J.series[0]==$),H=ee!=null?ee.dir:0,De=k.fillTo(y,$,k.min,k.max,H),qe=Y(D(De,G,x,W)),xe,ie,xt,st=B,ke=Y(k.width*ce),At=!1,Ot=null,ht=null,Gt=null,bl=null;f!=null&&(ke==0||g!=null)&&(At=!0,Ot=f.values(y,$,E,A),ht=new Map,new Set(Ot).forEach(J=>{J!=null&&ht.set(J,new Path2D)}),ke>0&&(Gt=g.values(y,$,E,A),bl=new Map,new Set(Gt).forEach(J=>{J!=null&&bl.set(J,new Path2D)})));let{x0:wl,size:Jl}=u;if(wl!=null&&Jl!=null){O=1,b=wl.values(y,$,E,A),wl.unit==2&&(b=b.map(jt=>y.posToVal(V+jt*B,P.key,!0)));let J=Jl.values(y,$,E,A);Jl.unit==2?ie=J[0]*B:ie=L(J[0],P,B,V)-L(0,P,B,V),st=lr(b,I,L,P,B,V,st),xt=st-ie+K}else st=lr(b,I,L,P,B,V,st),xt=st*a+K,ie=st-xt;xt<1&&(xt=0),ke>=ie/2&&(ke=0),xt<5&&(Y=fr);let mn=xt>0,il=st-xt-(mn?ke:0);ie=Y(Fi(il,le,U)),xe=(O==0?ie/2:O==we?0:ie)-O*we*((O==0?K/2:0)+(mn?ke/2:0));let Je={stroke:null,fill:null,clip:null,band:null,gaps:null,flags:0},xl=At?null:new Path2D,Ht=null;if(ee!=null)Ht=y.data[ee.series[1]];else{let{y0:J,y1:Ze}=u;J!=null&&Ze!=null&&(I=Ze.values(y,$,E,A),Ht=J.values(y,$,E,A))}let sl=F*ie,Z=lt*ie;for(let J=we==1?E:A;J>=E&&J<=A;J+=we){let Ze=I[J];if(Ze==null)continue;if(Ht!=null){let Lt=(Q=Ht[J])!=null?Q:0;if(Ze-Lt==0)continue;qe=D(Lt,G,x,W)}let jt=P.distr!=2||u!=null?b[J]:J,ol=L(jt,P,B,V),Yt=D(re(Ze,De),G,x,W),nt=Y(ol-xe),$t=Y(tt(Yt,qe)),ot=Y(Et(Yt,qe)),gt=$t-ot;if(Ze!=null){let Lt=Ze<0?Z:sl,Kt=Ze<0?sl:Z;At?(ke>0&&Gt[J]!=null&&ne(bl.get(Gt[J]),nt,ot+ft(ke/2),ie,tt(0,gt-ke),Lt,Kt),Ot[J]!=null&&ne(ht.get(Ot[J]),nt,ot+ft(ke/2),ie,tt(0,gt-ke),Lt,Kt)):ne(xl,nt,ot+ft(ke/2),ie,tt(0,gt-ke),Lt,Kt),fe(y,$,J,nt-ke/2,ot,ie+ke,gt)}}return ke>0?Je.stroke=At?bl:xl:At||(Je._fill=k.width==0?k._fill:(Ye=k._stroke)!=null?Ye:k._fill,Je.width=0),Je.fill=At?ht:xl,Je})}function xu(e,t){let n=re(t==null?void 0:t.alignGaps,0);return(l,s,o,a)=>yl(l,s,(p,h,u,_,f,g,y,$,E,A,k)=>{[o,a]=Vn(u,o,a);let b=p.pxRound,I=F=>b(g(F,_,A,$)),P=F=>b(y(F,f,k,E)),G,L,D;_.ori==0?(G=jn,D=Yl,L=Or):(G=Yn,D=Kl,L=Hr);let V=_.dir*(_.ori==0?1:-1),W=I(h[V==1?o:a]),B=W,x=[],Y=[];for(let F=V==1?o:a;F>=o&&F<=a;F+=V)if(u[F]!=null){let we=h[F],ne=I(we);x.push(B=ne),Y.push(P(u[F]))}let O={stroke:e(x,Y,G,D,L,b),fill:null,clip:null,band:null,gaps:null,flags:Gl},K=O.stroke,[U,le]=ns(l,s);if(p.fill!=null||U!=0){let F=O.fill=new Path2D(K),lt=p.fillTo(l,s,p.min,p.max,U),we=P(lt);D(F,B,we),D(F,W,we)}if(!p.spanGaps){let F=[];F.push(...is(h,u,o,a,V,I,n)),O.gaps=F=p.gaps(l,s,o,a,F),O.clip=Gn(F,_.ori,$,E,A,k)}return le!=0&&(O.band=le==2?[Bt(l,s,o,a,K,-1),Bt(l,s,o,a,K,1)]:Bt(l,s,o,a,K,le)),O})}function $u(e){return xu(Su,e)}function Su(e,t,n,l,s,o){let a=e.length;if(a<2)return null;let p=new Path2D;if(n(p,e[0],t[0]),a==2)l(p,e[1],t[1]);else{let h=Array(a),u=Array(a-1),_=Array(a-1),f=Array(a-1);for(let g=0;g<a-1;g++)_[g]=t[g+1]-t[g],f[g]=e[g+1]-e[g],u[g]=_[g]/f[g];h[0]=u[0];for(let g=1;g<a-1;g++)u[g]===0||u[g-1]===0||u[g-1]>0!=u[g]>0?h[g]=0:(h[g]=3*(f[g-1]+f[g])/((2*f[g]+f[g-1])/u[g-1]+(f[g]+2*f[g-1])/u[g]),isFinite(h[g])||(h[g]=0));h[a-1]=u[a-2];for(let g=0;g<a-1;g++)s(p,e[g]+f[g]/3,t[g]+h[g]*f[g]/3,e[g+1]-f[g]/3,t[g+1]-h[g+1]*f[g]/3,e[g+1],t[g+1])}return p}var Bi=new Set;function nr(){for(let e of Bi)e.syncRect(!0)}jl&&(_l(ic,Vl,nr),_l(sc,Vl,nr,!0),_l(On,Vl,()=>{Ge.pxRatio=ce}));var ku=Wr(),Cu=Fr();function ir(e,t,n,l){return(l?[e[0],e[1]].concat(e.slice(2)):[e[0]].concat(e.slice(1))).map((o,a)=>Gi(o,a,t,n))}function Pu(e,t){return e.map((n,l)=>l==0?{}:Me({},t,n))}function Gi(e,t,n,l){return Me({},t==0?n:l,e)}function Ur(e,t,n){return t==null?Ul:[t,n]}var Tu=Ur;function Eu(e,t,n){return t==null?Ul:Hn(t,n,Ji,!0)}function Br(e,t,n,l){return t==null?Ul:Wn(t,n,e.scales[l].log,!1)}var Au=Br;function Gr(e,t,n,l){return t==null?Ul:qi(t,n,e.scales[l].log,!1)}var Lu=Gr;function Mu(e,t,n,l,s){let o=tt(No(e),No(t)),a=t-e,p=Tt(s/l*a,n);do{let h=n[p],u=l*h/a;if(u>=s&&o+(h<5?ll.get(h):0)<=17)return[h,u]}while(++p<n.length);return[0,0]}function sr(e){let t,n;return e=e.replace(/(\d+)px/,(l,s)=>(t=Re((n=+s)*ce))+"px"),[e,t,n]}function Du(e){e.show&&[e.font,e.labelFont].forEach(t=>{let n=ge(t[2]*ce,1);t[0]=t[0].replace(/[0-9.]+px/,n+"px"),t[1]=n})}function Ge(e,t,n){var Os,Hs;let l={mode:re(e.mode,1)},s=l.mode;function o(i,r,c,d){let m=r.valToPct(i);return d+c*(r.dir==-1?1-m:m)}function a(i,r,c,d){let m=r.valToPct(i);return d+c*(r.dir==-1?m:1-m)}function p(i,r,c,d){return r.ori==0?o(i,r,c,d):a(i,r,c,d)}l.valToPosH=o,l.valToPosV=a;let h=!1;l.status=0;let u=l.root=bt(Fa);if(e.id!=null&&(u.id=e.id),ut(u,e.class),e.title){let i=bt(Ua,u);i.textContent=e.title}let _=Pt("canvas"),f=l.ctx=_.getContext("2d"),g=bt(Ba,u);_l("click",g,i=>{i.target===$&&(_e!=Dl||$e!=Rl)&&Ue.click(l,i)},!0);let y=l.under=bt(Ga,g);g.appendChild(_);let $=l.over=bt(ja,g);e=Bl(e);let E=+re(e.pxAlign,1),A=tr(E);(e.plugins||[]).forEach(i=>{i.opts&&(e=i.opts(l,e)||e)});let k=e.ms||.001,b=l.series=s==1?ir(e.series||[],Ko,Xo,!1):Pu(e.series||[null],Qo),I=l.axes=ir(e.axes||[],Yo,Jo,!0),P=l.scales={},G=l.bands=e.bands||[];G.forEach(i=>{i.fill=te(i.fill||null),i.dir=re(i.dir,-1)});let L=s==2?b[1].facets[0].scale:b[0].scale,D={axes:ca,series:ia},V=(e.drawOrder||["axes","series"]).map(i=>D[i]);function W(i){let r=i.distr==3?c=>Ut(c>0?c:i.clamp(l,c,i.min,i.max,i.key)):i.distr==4?c=>Mi(c,i.asinh):i.distr==100?c=>i.fwd(c):c=>c;return c=>{let d=r(c),{_min:m,_max:v}=i,w=v-m;return(d-m)/w}}function B(i){let r=P[i];if(r==null){let c=(e.scales||pn)[i]||pn;if(c.from!=null){B(c.from);let d=Me({},P[c.from],c,{key:i});d.valToPct=W(d),P[i]=d}else{r=P[i]=Me({},i==L?Dr:gu,c),r.key=i;let d=r.time,m=r.range,v=tl(m);if((i!=L||s==2&&!d)&&(v&&(m[0]==null||m[1]==null)&&(m={min:m[0]==null?Do:{mode:1,hard:m[0],soft:m[0]},max:m[1]==null?Do:{mode:1,hard:m[1],soft:m[1]}},v=!1),!v&&Bn(m))){let w=m;m=(C,T,M)=>T==null?Ul:Hn(T,M,w)}r.range=te(m||(d?Tu:i==L?r.distr==3?Au:r.distr==4?Lu:Ur:r.distr==3?Br:r.distr==4?Gr:Eu)),r.auto=te(v?!1:r.auto),r.clamp=te(r.clamp||hu),r._min=r._max=null,r.valToPct=W(r)}}}B("x"),B("y"),s==1&&b.forEach(i=>{B(i.scale)}),I.forEach(i=>{B(i.scale)});for(let i in e.scales)B(i);let x=P[L],Y=x.distr,O,K;x.ori==0?(ut(u,Va),O=o,K=a):(ut(u,Wa),O=a,K=o);let U={};for(let i in P){let r=P[i];(r.min!=null||r.max!=null)&&(U[i]={min:r.min,max:r.max},r.min=r.max=null)}let le=e.tzDate||(i=>new Date(Re(i/k))),F=e.fmtDate||Xi,lt=k==1?Vc(le):Bc(le),we=Bo(le,Uo(k==1?Fc:Uc,F)),ne=jo(le,Go(jc,F)),fe=[],ee=l.legend=Me({},qc,e.legend),H=l.cursor=Me({},tu,{drag:{y:s==2}},e.cursor),De=ee.show,qe=H.show,xe=ee.markers;ee.idxs=fe,xe.width=te(xe.width),xe.dash=te(xe.dash),xe.stroke=te(xe.stroke),xe.fill=te(xe.fill);let ie,xt,st,ke=[],At=[],Ot,ht=!1,Gt={};if(ee.live){let i=b[1]?b[1].values:null;ht=i!=null,Ot=ht?i(l,1,0):{_:0};for(let r in Ot)Gt[r]=Yi}if(De)if(ie=Pt("table",Qa,u),st=Pt("tbody",null,ie),ee.mount(l,ie),ht){xt=Pt("thead",null,ie,st);let i=Pt("tr",null,xt);Pt("th",null,i);for(var bl in Ot)Pt("th",bo,i).textContent=bl}else ut(ie,ec),ee.live&&ut(ie,Xa);let wl={show:!0},Jl={show:!1};function mn(i,r){if(r==0&&(ht||!ee.live||s==2))return Ul;let c=[],d=Pt("tr",tc,st,st.childNodes[r]);ut(d,i.class),i.show||ut(d,ml);let m=Pt("th",null,d);if(xe.show){let C=bt(lc,m);if(r>0){let T=xe.width(l,r);T&&(C.style.border=T+"px "+xe.dash(l,r)+" "+xe.stroke(l,r)),C.style.background=xe.fill(l,r)}}let v=bt(bo,m);i.label instanceof HTMLElement?v.appendChild(i.label):v.textContent=i.label,r>0&&(xe.show||(v.style.color=i.width>0?xe.stroke(l,r):xe.fill(l,r)),Je("click",m,C=>{if(H._lock)return;al(C);let T=b.indexOf(i);if((C.ctrlKey||C.metaKey)!=ee.isolate){let M=b.some((R,N)=>N>0&&N!=T&&R.show);b.forEach((R,N)=>{N>0&&Dt(N,M?N==T?wl:Jl:wl,!0,Ee.setSeries)})}else Dt(T,{show:!i.show},!0,Ee.setSeries)},!1),Sl&&Je(So,m,C=>{H._lock||(al(C),Dt(b.indexOf(i),Nl,!0,Ee.setSeries))},!1));for(var w in Ot){let C=Pt("td",nc,d);C.textContent="--",c.push(C)}return[d,c]}let il=new Map;function Je(i,r,c,d=!0){let m=il.get(r)||{},v=H.bind[i](l,r,c,d);v&&(_l(i,r,m[i]=v),il.set(r,m))}function xl(i,r,c){let d=il.get(r)||{};for(let m in d)(i==null||m==i)&&(Hi(m,r,d[m]),delete d[m]);i==null&&il.delete(r)}let Ht=0,sl=0,Z=0,Q=0,Ye=0,J=0,Ze=Ye,jt=J,ol=Z,Yt=Q,nt=0,$t=0,ot=0,gt=0;l.bbox={};let Lt=!1,Kt=!1,$l=!1,rl=!1,_n=!1,mt=!1;function qn(i,r,c){(c||i!=l.width||r!=l.height)&&cs(i,r),El(!1),$l=!0,Kt=!0,Al()}function cs(i,r){l.width=Ht=Z=i,l.height=sl=Q=r,Ye=J=0,Zr(),Qr();let c=l.bbox;nt=c.left=hl(Ye*ce,.5),$t=c.top=hl(J*ce,.5),ot=c.width=hl(Z*ce,.5),gt=c.height=hl(Q*ce,.5)}let Kr=3;function qr(){let i=!1,r=0;for(;!i;){r++;let c=ra(r),d=aa(r);i=r==Kr||c&&d,i||(cs(l.width,l.height),Kt=!0)}}function Jr({width:i,height:r}){qn(i,r)}l.setSize=Jr;function Zr(){let i=!1,r=!1,c=!1,d=!1;I.forEach((m,v)=>{if(m.show&&m._show){let{side:w,_size:C}=m,T=w%2,M=m.label!=null?m.labelSize:0,R=C+M;R>0&&(T?(Z-=R,w==3?(Ye+=R,d=!0):c=!0):(Q-=R,w==0?(J+=R,i=!0):r=!0))}}),cl[0]=i,cl[1]=c,cl[2]=r,cl[3]=d,Z-=qt[1]+qt[3],Ye+=qt[3],Q-=qt[2]+qt[0],J+=qt[0]}function Qr(){let i=Ye+Z,r=J+Q,c=Ye,d=J;function m(v,w){switch(v){case 1:return i+=w,i-w;case 2:return r+=w,r-w;case 3:return c-=w,c+w;case 0:return d-=w,d+w}}I.forEach((v,w)=>{if(v.show&&v._show){let C=v.side;v._pos=m(C,v._size),v.label!=null&&(v._lpos=m(C,v.labelSize))}})}if(H.dataIdx==null){let i=H.hover,r=i.skip=new Set((Os=i.skip)!=null?Os:[]);r.add(void 0);let c=i.prox=te(i.prox),d=(Hs=i.bias)!=null?Hs:i.bias=0;H.dataIdx=(m,v,w,C)=>{var de;if(v==0)return w;let T=w,M=(de=c(m,v,w,C))!=null?de:he,R=M>=0&&M<he,N=x.ori==0?Z:Q,q=H.left,ae=t[0],se=t[v];if(r.has(se[w])){T=null;let j=null,z=null,oe;if(d==0||d==-1)for(oe=w;j==null&&oe-- >0;)r.has(se[oe])||(j=oe);if(d==0||d==1)for(oe=w;z==null&&oe++<se.length;)r.has(se[oe])||(z=oe);if(j!=null||z!=null)if(R){let Ce=j==null?-1/0:O(ae[j],x,N,0),Be=z==null?1/0:O(ae[z],x,N,0),pe=q-Ce,ye=Be-q;pe<=ye?pe<=M&&(T=j):ye<=M&&(T=z)}else T=z==null?j:j==null?z:w-j<=z-w?j:z}else R&&Ie(q-O(ae[w],x,N,0))>M&&(T=null);return T}}let al=i=>{H.event=i};H.idxs=fe,H._lock=!1;let Ke=H.points;Ke.show=te(Ke.show),Ke.size=te(Ke.size),Ke.stroke=te(Ke.stroke),Ke.width=te(Ke.width),Ke.fill=te(Ke.fill);let Mt=l.focus=Me({},e.focus||{alpha:.3},H.focus),Sl=Mt.prox>=0,kl=Sl&&Ke.one,_t=[],Cl=[],Pl=[];function us(i,r){let c=Ke.show(l,r);if(c instanceof HTMLElement)return ut(c,Za),ut(c,i.class),zt(c,-10,-10,Z,Q),$.insertBefore(c,_t[r]),c}function fs(i,r){if(s==1||r>0){let c=s==1&&P[i.scale].time,d=i.value;i.value=c?Ho(d)?jo(le,Go(d,F)):d||ne:d||fu,i.label=i.label||(c?nu:lu)}if(kl||r>0){i.width=i.width==null?1:i.width,i.paths=i.paths||ku||gc,i.fillTo=te(i.fillTo||mu),i.pxAlign=+re(i.pxAlign,E),i.pxRound=tr(i.pxAlign),i.stroke=te(i.stroke||null),i.fill=te(i.fill||null),i._stroke=i._fill=i._paths=i._focus=null;let c=du(tt(1,i.width),1),d=i.points=Me({},{size:c,width:tt(1,c*.2),stroke:i.stroke,space:c*2,paths:Cu,_stroke:null,_fill:null},i.points);d.show=te(d.show),d.filter=te(d.filter),d.fill=te(d.fill),d.stroke=te(d.stroke),d.paths=te(d.paths),d.pxAlign=i.pxAlign}if(De){let c=mn(i,r);ke.splice(r,0,c[0]),At.splice(r,0,c[1]),ee.values.push(null)}if(qe){fe.splice(r,0,null);let c=null;kl?r==0&&(c=us(i,r)):r>0&&(c=us(i,r)),_t.splice(r,0,c),Cl.splice(r,0,0),Pl.splice(r,0,0)}Fe("addSeries",r)}function Xr(i,r){r=r==null?b.length:r,i=s==1?Gi(i,r,Ko,Xo):Gi(i,r,{},Qo),b.splice(r,0,i),fs(b[r],r)}l.addSeries=Xr;function ea(i){if(b.splice(i,1),De){ee.values.splice(i,1),At.splice(i,1);let r=ke.splice(i,1)[0];xl(null,r.firstChild),r.remove()}qe&&(fe.splice(i,1),_t.splice(i,1)[0].remove(),Cl.splice(i,1),Pl.splice(i,1)),Fe("delSeries",i)}l.delSeries=ea;let cl=[!1,!1,!1,!1];function ta(i,r){if(i._show=i.show,i.show){let c=i.side%2,d=P[i.scale];d==null&&(i.scale=c?b[1].scale:L,d=P[i.scale]);let m=d.time;i.size=te(i.size),i.space=te(i.space),i.rotate=te(i.rotate),tl(i.incrs)&&i.incrs.forEach(w=>{!ll.has(w)&&ll.set(w,hr(w))}),i.incrs=te(i.incrs||(d.distr==2?zc:m?k==1?Hc:Wc:gl)),i.splits=te(i.splits||(m&&d.distr==1?lt:d.distr==3?Vi:d.distr==4?ou:su)),i.stroke=te(i.stroke),i.grid.stroke=te(i.grid.stroke),i.ticks.stroke=te(i.ticks.stroke),i.border.stroke=te(i.border.stroke);let v=i.values;i.values=tl(v)&&!tl(v[0])?te(v):m?tl(v)?Bo(le,Uo(v,F)):Ho(v)?Gc(le,v):v||we:v||iu,i.filter=te(i.filter||(d.distr>=3&&d.log==10?cu:d.distr==3&&d.log==2?uu:dr)),i.font=sr(i.font),i.labelFont=sr(i.labelFont),i._size=i.size(l,null,r,0),i._space=i._rotate=i._incrs=i._found=i._splits=i._values=null,i._size>0&&(cl[r]=!0,i._el=bt(Ya,g))}}function Zl(i,r,c,d){let[m,v,w,C]=c,T=r%2,M=0;return T==0&&(C||v)&&(M=r==0&&!m||r==2&&!w?Re(Yo.size/3):0),T==1&&(m||w)&&(M=r==1&&!v||r==3&&!C?Re(Jo.size/2):0),M}let ds=l.padding=(e.padding||[Zl,Zl,Zl,Zl]).map(i=>te(re(i,Zl))),qt=l._padding=ds.map((i,r)=>i(l,r,cl,0)),We,Ne=null,ze=null,vn=s==1?b[0].idxs:null,St=null,Ql=!1;function ps(i,r){if(t=i==null?[]:i,l.data=l._data=t,s==2){We=0;for(let c=1;c<b.length;c++)We+=t[c][0].length}else{t.length==0&&(l.data=l._data=t=[[]]),St=t[0],We=St.length;let c=t;if(Y==2){c=t.slice();let d=c[0]=Array(We);for(let m=0;m<We;m++)d[m]=m}l._data=t=c}if(El(!0),Fe("setData"),Y==2&&($l=!0),r!==!1){let c=x;c.auto(l,Ql)?Jn():Zt(L,c.min,c.max),rl=rl||H.left>=0,mt=!0,Al()}}l.setData=ps;function Jn(){Ql=!0;let i,r;s==1&&(We>0?(Ne=vn[0]=0,ze=vn[1]=We-1,i=t[0][Ne],r=t[0][ze],Y==2?(i=Ne,r=ze):i==r&&(Y==3?[i,r]=Wn(i,i,x.log,!1):Y==4?[i,r]=qi(i,i,x.log,!1):x.time?r=i+Re(86400/k):[i,r]=Hn(i,r,Ji,!0))):(Ne=vn[0]=i=null,ze=vn[1]=r=null)),Zt(L,i,r)}let yn,Tl,Zn,Qn,Xn,ei,ti,li,ni,it;function hs(i,r,c,d,m,v){i!=null||(i=xo),c!=null||(c=Qi),d!=null||(d="butt"),m!=null||(m=xo),v!=null||(v="round"),i!=yn&&(f.strokeStyle=yn=i),m!=Tl&&(f.fillStyle=Tl=m),r!=Zn&&(f.lineWidth=Zn=r),v!=Xn&&(f.lineJoin=Xn=v),d!=ei&&(f.lineCap=ei=d),c!=Qn&&f.setLineDash(Qn=c)}function gs(i,r,c,d){r!=Tl&&(f.fillStyle=Tl=r),i!=ti&&(f.font=ti=i),c!=li&&(f.textAlign=li=c),d!=ni&&(f.textBaseline=ni=d)}function ii(i,r,c,d,m=0){if(d.length>0&&i.auto(l,Ql)&&(r==null||r.min==null)){let v=re(Ne,0),w=re(ze,d.length-1),C=c.min==null?cc(d,v,w,m,i.distr==3):[c.min,c.max];i.min=Et(i.min,c.min=C[0]),i.max=tt(i.max,c.max=C[1])}}let ms={min:null,max:null};function la(){for(let d in P){let m=P[d];U[d]==null&&(m.min==null||U[L]!=null&&m.auto(l,Ql))&&(U[d]=ms)}for(let d in P){let m=P[d];U[d]==null&&m.from!=null&&U[m.from]!=null&&(U[d]=ms)}U[L]!=null&&El(!0);let i={};for(let d in U){let m=U[d];if(m!=null){let v=i[d]=Bl(P[d],vc);if(m.min!=null)Me(v,m);else if(d!=L||s==2)if(We==0&&v.from==null){let w=v.range(l,null,null,d);v.min=w[0],v.max=w[1]}else v.min=he,v.max=-he}}if(We>0){b.forEach((d,m)=>{if(s==1){let v=d.scale,w=U[v];if(w==null)return;let C=i[v];if(m==0){let T=C.range(l,C.min,C.max,v);C.min=T[0],C.max=T[1],Ne=Tt(C.min,t[0]),ze=Tt(C.max,t[0]),ze-Ne>1&&(t[0][Ne]<C.min&&Ne++,t[0][ze]>C.max&&ze--),d.min=St[Ne],d.max=St[ze]}else d.show&&d.auto&&ii(C,w,d,t[m],d.sorted);d.idxs[0]=Ne,d.idxs[1]=ze}else if(m>0&&d.show&&d.auto){let[v,w]=d.facets,C=v.scale,T=w.scale,[M,R]=t[m],N=i[C],q=i[T];N!=null&&ii(N,U[C],v,M,v.sorted),q!=null&&ii(q,U[T],w,R,w.sorted),d.min=w.min,d.max=w.max}});for(let d in i){let m=i[d],v=U[d];if(m.from==null&&(v==null||v.min==null)){let w=m.range(l,m.min==he?null:m.min,m.max==-he?null:m.max,d);m.min=w[0],m.max=w[1]}}}for(let d in i){let m=i[d];if(m.from!=null){let v=i[m.from];if(v.min==null)m.min=m.max=null;else{let w=m.range(l,v.min,v.max,d);m.min=w[0],m.max=w[1]}}}let r={},c=!1;for(let d in i){let m=i[d],v=P[d];if(v.min!=m.min||v.max!=m.max){v.min=m.min,v.max=m.max;let w=v.distr;v._min=w==3?Ut(v.min):w==4?Mi(v.min,v.asinh):w==100?v.fwd(v.min):v.min,v._max=w==3?Ut(v.max):w==4?Mi(v.max,v.asinh):w==100?v.fwd(v.max):v.max,r[d]=c=!0}}if(c){b.forEach((d,m)=>{s==2?m>0&&r.y&&(d._paths=null):r[d.scale]&&(d._paths=null)});for(let d in r)$l=!0,Fe("setScale",d);qe&&H.left>=0&&(rl=mt=!0)}for(let d in U)U[d]=null}function na(i){let r=Fi(Ne-1,0,We-1),c=Fi(ze+1,0,We-1);for(;i[r]==null&&r>0;)r--;for(;i[c]==null&&c<We-1;)c++;return[r,c]}function ia(){if(We>0){let i=b.some(r=>r._focus)&&it!=Mt.alpha;i&&(f.globalAlpha=it=Mt.alpha),b.forEach((r,c)=>{if(c>0&&r.show&&(_s(c,!1),_s(c,!0),r._paths==null)){let d=it;it!=r.alpha&&(f.globalAlpha=it=r.alpha);let m=s==2?[0,t[c][0].length-1]:na(t[c]);r._paths=r.paths(l,c,m[0],m[1]),it!=d&&(f.globalAlpha=it=d)}}),b.forEach((r,c)=>{if(c>0&&r.show){let d=it;it!=r.alpha&&(f.globalAlpha=it=r.alpha),r._paths!=null&&vs(c,!1);{let m=r._paths!=null?r._paths.gaps:null,v=r.points.show(l,c,Ne,ze,m),w=r.points.filter(l,c,v,m);(v||w)&&(r.points._paths=r.points.paths(l,c,Ne,ze,w),vs(c,!0))}it!=d&&(f.globalAlpha=it=d),Fe("drawSeries",c)}}),i&&(f.globalAlpha=it=1)}}function _s(i,r){let c=r?b[i].points:b[i];c._stroke=c.stroke(l,i),c._fill=c.fill(l,i)}function vs(i,r){let c=r?b[i].points:b[i],{stroke:d,fill:m,clip:v,flags:w,_stroke:C=c._stroke,_fill:T=c._fill,_width:M=c.width}=c._paths;M=ge(M*ce,3);let R=null,N=M%2/2;r&&T==null&&(T=M>0?"#fff":C);let q=c.pxAlign==1&&N>0;if(q&&f.translate(N,N),!r){let ae=nt-M/2,se=$t-M/2,de=ot+M,j=gt+M;R=new Path2D,R.rect(ae,se,de,j)}r?si(C,M,c.dash,c.cap,T,d,m,w,v):sa(i,C,M,c.dash,c.cap,T,d,m,w,R,v),q&&f.translate(-N,-N)}function sa(i,r,c,d,m,v,w,C,T,M,R){let N=!1;T!=0&&G.forEach((q,ae)=>{if(q.series[0]==i){let se=b[q.series[1]],de=t[q.series[1]],j=(se._paths||pn).band;tl(j)&&(j=q.dir==1?j[0]:j[1]);let z,oe=null;se.show&&j&&fc(de,Ne,ze)?(oe=q.fill(l,ae)||v,z=se._paths.clip):j=null,si(r,c,d,m,oe,w,C,T,M,R,z,j),N=!0}}),N||si(r,c,d,m,v,w,C,T,M,R)}let ys=Gl|Ui;function si(i,r,c,d,m,v,w,C,T,M,R,N){hs(i,r,c,d,m),(T||M||N)&&(f.save(),T&&f.clip(T),M&&f.clip(M)),N?(C&ys)==ys?(f.clip(N),R&&f.clip(R),wn(m,w),bn(i,v,r)):C&Ui?(wn(m,w),f.clip(N),bn(i,v,r)):C&Gl&&(f.save(),f.clip(N),R&&f.clip(R),wn(m,w),f.restore(),bn(i,v,r)):(wn(m,w),bn(i,v,r)),(T||M||N)&&f.restore()}function bn(i,r,c){c>0&&(r instanceof Map?r.forEach((d,m)=>{f.strokeStyle=yn=m,f.stroke(d)}):r!=null&&i&&f.stroke(r))}function wn(i,r){r instanceof Map?r.forEach((c,d)=>{f.fillStyle=Tl=d,f.fill(c)}):r!=null&&i&&f.fill(r)}function oa(i,r,c,d){let m=I[i],v;if(d<=0)v=[0,0];else{let w=m._space=m.space(l,i,r,c,d),C=m._incrs=m.incrs(l,i,r,c,d,w);v=Mu(r,c,C,d,w)}return m._found=v}function oi(i,r,c,d,m,v,w,C,T,M){let R=w%2/2;E==1&&f.translate(R,R),hs(C,w,T,M,C),f.beginPath();let N,q,ae,se,de=m+(d==0||d==3?-v:v);c==0?(q=m,se=de):(N=m,ae=de);for(let j=0;j<i.length;j++)r[j]!=null&&(c==0?N=ae=i[j]:q=se=i[j],f.moveTo(N,q),f.lineTo(ae,se));f.stroke(),E==1&&f.translate(-R,-R)}function ra(i){let r=!0;return I.forEach((c,d)=>{if(!c.show)return;let m=P[c.scale];if(m.min==null){c._show&&(r=!1,c._show=!1,El(!1));return}else c._show||(r=!1,c._show=!0,El(!1));let v=c.side,w=v%2,{min:C,max:T}=m,[M,R]=oa(d,C,T,w==0?Z:Q);if(R==0)return;let N=m.distr==2,q=c._splits=c.splits(l,d,C,T,M,R,N),ae=m.distr==2?q.map(z=>St[z]):q,se=m.distr==2?St[q[1]]-St[q[0]]:M,de=c._values=c.values(l,c.filter(l,ae,d,R,se),d,R,se);c._rotate=v==2?c.rotate(l,de,d,R):0;let j=c._size;c._size=wt(c.size(l,de,d,i)),j!=null&&c._size!=j&&(r=!1)}),r}function aa(i){let r=!0;return ds.forEach((c,d)=>{let m=c(l,d,cl,i);m!=qt[d]&&(r=!1),qt[d]=m}),r}function ca(){for(let i=0;i<I.length;i++){let r=I[i];if(!r.show||!r._show)continue;let c=r.side,d=c%2,m,v,w=r.stroke(l,i),C=c==0||c==3?-1:1,[T,M]=r._found;if(r.label!=null){let Xe=r.labelGap*C,ct=Re((r._lpos+Xe)*ce);gs(r.labelFont[0],w,"center",c==2?"top":wo),f.save(),d==1?(m=v=0,f.translate(ct,Re($t+gt/2)),f.rotate((c==3?-zn:zn)/2)):(m=Re(nt+ot/2),v=ct);let dl=ur(r.label)?r.label(l,i,T,M):r.label;f.fillText(dl,m,v),f.restore()}if(M==0)continue;let R=P[r.scale],N=d==0?ot:gt,q=d==0?nt:$t,ae=r._splits,se=R.distr==2?ae.map(Xe=>St[Xe]):ae,de=R.distr==2?St[ae[1]]-St[ae[0]]:T,j=r.ticks,z=r.border,oe=j.show?j.size:0,Ce=Re(oe*ce),Be=Re((r.alignTo==2?r._size-oe-r.gap:r.gap)*ce),pe=r._rotate*-zn/180,ye=A(r._pos*ce),rt=(Ce+Be)*C,Qe=ye+rt;v=d==0?Qe:0,m=d==1?Qe:0;let vt=r.font[0],kt=r.align==1?Hl:r.align==2?Ei:pe>0?Hl:pe<0?Ei:d==0?"center":c==3?Ei:Hl,It=pe||d==1?"middle":c==2?"top":wo;gs(vt,w,kt,It);let at=r.font[1]*r.lineGap,yt=ae.map(Xe=>A(p(Xe,R,N,q))),Ct=r._values;for(let Xe=0;Xe<Ct.length;Xe++){let ct=Ct[Xe];if(ct!=null){d==0?m=yt[Xe]:v=yt[Xe],ct=""+ct;let dl=ct.indexOf(`
`)==-1?[ct]:ct.split(/\n/gm);for(let et=0;et<dl.length;et++){let Fs=dl[et];pe?(f.save(),f.translate(m,v+et*at),f.rotate(pe),f.fillText(Fs,0,0),f.restore()):f.fillText(Fs,m,v+et*at)}}}j.show&&oi(yt,j.filter(l,se,i,M,de),d,c,ye,Ce,ge(j.width*ce,3),j.stroke(l,i),j.dash,j.cap);let Nt=r.grid;Nt.show&&oi(yt,Nt.filter(l,se,i,M,de),d,d==0?2:1,d==0?$t:nt,d==0?gt:ot,ge(Nt.width*ce,3),Nt.stroke(l,i),Nt.dash,Nt.cap),z.show&&oi([ye],[1],d==0?1:0,d==0?1:2,d==1?$t:nt,d==1?gt:ot,ge(z.width*ce,3),z.stroke(l,i),z.dash,z.cap)}Fe("drawAxes")}function El(i){b.forEach((r,c)=>{c>0&&(r._paths=null,i&&(s==1?(r.min=null,r.max=null):r.facets.forEach(d=>{d.min=null,d.max=null})))})}let xn=!1,ri=!1,Xl=[];function ua(){ri=!1;for(let i=0;i<Xl.length;i++)Fe(...Xl[i]);Xl.length=0}function Al(){xn||(kc(bs),xn=!0)}function fa(i,r=!1){xn=!0,ri=r,i(l),bs(),r&&Xl.length>0&&queueMicrotask(ua)}l.batch=fa;function bs(){if(Lt&&(la(),Lt=!1),$l&&(qr(),$l=!1),Kt){if(be(y,Hl,Ye),be(y,"top",J),be(y,cn,Z),be(y,un,Q),be($,Hl,Ye),be($,"top",J),be($,cn,Z),be($,un,Q),be(g,cn,Ht),be(g,un,sl),_.width=Re(Ht*ce),_.height=Re(sl*ce),I.forEach(({_el:i,_show:r,_size:c,_pos:d,side:m})=>{if(i!=null)if(r){let v=m===3||m===0?c:0,w=m%2==1;be(i,w?"left":"top",d-v),be(i,w?"width":"height",c),be(i,w?"top":"left",w?J:Ye),be(i,w?"height":"width",w?Q:Z),Oi(i,ml)}else ut(i,ml)}),yn=Tl=Zn=Xn=ei=ti=li=ni=Qn=null,it=1,ln(!0),Ye!=Ze||J!=jt||Z!=ol||Q!=Yt){El(!1);let i=Z/ol,r=Q/Yt;if(qe&&!rl&&H.left>=0){H.left*=i,H.top*=r,Ll&&zt(Ll,Re(H.left),0,Z,Q),Ml&&zt(Ml,0,Re(H.top),Z,Q);for(let c=0;c<_t.length;c++){let d=_t[c];d!=null&&(Cl[c]*=i,Pl[c]*=r,zt(d,wt(Cl[c]),wt(Pl[c]),Z,Q))}}if(ve.show&&!_n&&ve.left>=0&&ve.width>0){ve.left*=i,ve.width*=i,ve.top*=r,ve.height*=r;for(let c in pi)be(Il,c,ve[c])}Ze=Ye,jt=J,ol=Z,Yt=Q}Fe("setSize"),Kt=!1}Ht>0&&sl>0&&(f.clearRect(0,0,_.width,_.height),Fe("drawClear"),V.forEach(i=>i()),Fe("draw")),ve.show&&_n&&($n(ve),_n=!1),qe&&rl&&(fl(null,!0,!1),rl=!1),ee.show&&ee.live&&mt&&(fi(),mt=!1),h||(h=!0,l.status=1,Fe("ready")),Ql=!1,xn=!1}l.redraw=(i,r)=>{$l=r||!1,i!==!1?Zt(L,x.min,x.max):Al()};function ai(i,r){let c=P[i];if(c.from==null){if(We==0){let d=c.range(l,r.min,r.max,i);r.min=d[0],r.max=d[1]}if(r.min>r.max){let d=r.min;r.min=r.max,r.max=d}if(We>1&&r.min!=null&&r.max!=null&&r.max-r.min<1e-16)return;i==L&&c.distr==2&&We>0&&(r.min=Tt(r.min,t[0]),r.max=Tt(r.max,t[0]),r.min==r.max&&r.max++),U[i]=r,Lt=!0,Al()}}l.setScale=ai;let ci,ui,Ll,Ml,ws,xs,Dl,Rl,$s,Ss,_e,$e,Jt=!1,Ue=H.drag,Oe=Ue.x,He=Ue.y;qe&&(H.x&&(ci=bt(qa,$)),H.y&&(ui=bt(Ja,$)),x.ori==0?(Ll=ci,Ml=ui):(Ll=ui,Ml=ci),_e=H.left,$e=H.top);let ve=l.select=Me({show:!0,over:!0,left:0,width:0,top:0,height:0},e.select),Il=ve.show?bt(Ka,ve.over?$:y):null;function $n(i,r){if(ve.show){for(let c in i)ve[c]=i[c],c in pi&&be(Il,c,i[c]);r!==!1&&Fe("setSelect")}}l.setSelect=$n;function da(i){if(b[i].show)De&&Oi(ke[i],ml);else if(De&&ut(ke[i],ml),qe){let c=kl?_t[0]:_t[i];c!=null&&zt(c,-10,-10,Z,Q)}}function Zt(i,r,c){ai(i,{min:r,max:c})}function Dt(i,r,c,d){r.focus!=null&&_a(i),r.show!=null&&b.forEach((m,v)=>{v>0&&(i==v||i==null)&&(m.show=r.show,da(v),s==2?(Zt(m.facets[0].scale,null,null),Zt(m.facets[1].scale,null,null)):Zt(m.scale,null,null),Al())}),c!==!1&&Fe("setSeries",i,r),d&&nn("setSeries",l,i,r)}l.setSeries=Dt;function pa(i,r){Me(G[i],r)}function ha(i,r){i.fill=te(i.fill||null),i.dir=re(i.dir,-1),r=r==null?G.length:r,G.splice(r,0,i)}function ga(i){i==null?G.length=0:G.splice(i,1)}l.addBand=ha,l.setBand=pa,l.delBand=ga;function ma(i,r){b[i].alpha=r,qe&&_t[i]!=null&&(_t[i].style.opacity=r),De&&ke[i]&&(ke[i].style.opacity=r)}let Ft,Qt,ul,Nl={focus:!0};function _a(i){if(i!=ul){let r=i==null,c=Mt.alpha!=1;b.forEach((d,m)=>{if(s==1||m>0){let v=r||m==0||m==i;d._focus=r?null:v,c&&ma(m,v?1:Mt.alpha)}}),ul=i,c&&Al()}}De&&Sl&&Je(ko,ie,i=>{H._lock||(al(i),ul!=null&&Dt(null,Nl,!0,Ee.setSeries))});function Rt(i,r,c){let d=P[r];c&&(i=i/ce-(d.ori==1?J:Ye));let m=Z;d.ori==1&&(m=Q,i=m-i),d.dir==-1&&(i=m-i);let v=d._min,w=d._max,C=i/m,T=v+(w-v)*C,M=d.distr;return M==3?Wl(10,T):M==4?pc(T,d.asinh):M==100?d.bwd(T):T}function va(i,r){let c=Rt(i,L,r);return Tt(c,t[0],Ne,ze)}l.valToIdx=i=>Tt(i,t[0]),l.posToIdx=va,l.posToVal=Rt,l.valToPos=(i,r,c)=>P[r].ori==0?o(i,P[r],c?ot:Z,c?nt:0):a(i,P[r],c?gt:Q,c?$t:0),l.setCursor=(i,r,c)=>{_e=i.left,$e=i.top,fl(null,r,c)};function ks(i,r){be(Il,Hl,ve.left=i),be(Il,cn,ve.width=r)}function Cs(i,r){be(Il,"top",ve.top=i),be(Il,un,ve.height=r)}let en=x.ori==0?ks:Cs,tn=x.ori==1?ks:Cs;function ya(){if(De&&ee.live)for(let i=s==2?1:0;i<b.length;i++){if(i==0&&ht)continue;let r=ee.values[i],c=0;for(let d in r)At[i][c++].firstChild.nodeValue=r[d]}}function fi(i,r){if(i!=null&&(i.idxs?i.idxs.forEach((c,d)=>{fe[d]=c}):_c(i.idx)||fe.fill(i.idx),ee.idx=fe[0]),De&&ee.live){for(let c=0;c<b.length;c++)(c>0||s==1&&!ht)&&ba(c,fe[c]);ya()}mt=!1,r!==!1&&Fe("setLegend")}l.setLegend=fi;function ba(i,r){var v;let c=b[i],d=i==0&&Y==2?St:t[i],m;ht?m=(v=c.values(l,i,r))!=null?v:Gt:(m=c.value(l,r==null?null:d[r],i,r),m=m==null?Gt:{_:m}),ee.values[i]=m}function fl(i,r,c){$s=_e,Ss=$e,[_e,$e]=H.move(l,_e,$e),H.left=_e,H.top=$e,qe&&(Ll&&zt(Ll,Re(_e),0,Z,Q),Ml&&zt(Ml,0,Re($e),Z,Q));let d,m=Ne>ze;Ft=he,Qt=null;let v=x.ori==0?Z:Q,w=x.ori==1?Z:Q;if(_e<0||We==0||m){d=H.idx=null;for(let C=0;C<b.length;C++){let T=_t[C];T!=null&&zt(T,-10,-10,Z,Q)}Sl&&Dt(null,Nl,!0,i==null&&Ee.setSeries),ee.live&&(fe.fill(d),mt=!0)}else{let C,T,M;s==1&&(C=x.ori==0?_e:$e,T=Rt(C,L),d=H.idx=Tt(T,t[0],Ne,ze),M=O(t[0][d],x,v,0));let R=-10,N=-10,q=0,ae=0,se=!0,de="",j="";for(let z=s==2?1:0;z<b.length;z++){let oe=b[z],Ce=fe[z],Be=Ce==null?null:s==1?t[z][Ce]:t[z][1][Ce],pe=H.dataIdx(l,z,d,T),ye=pe==null?null:s==1?t[z][pe]:t[z][1][pe];if(mt=mt||ye!=Be||pe!=Ce,fe[z]=pe,z>0&&oe.show){let rt=pe==null?-10:pe==d?M:O(s==1?t[0][pe]:t[z][0][pe],x,v,0),Qe=ye==null?-10:K(ye,s==1?P[oe.scale]:P[oe.facets[1].scale],w,0);if(Sl&&ye!=null){let vt=x.ori==1?_e:$e,kt=Ie(Mt.dist(l,z,pe,Qe,vt));if(kt<Ft){let It=Mt.bias;if(It!=0){let at=Rt(vt,oe.scale),yt=ye>=0?1:-1,Ct=at>=0?1:-1;Ct==yt&&(Ct==1?It==1?ye>=at:ye<=at:It==1?ye<=at:ye>=at)&&(Ft=kt,Qt=z)}else Ft=kt,Qt=z}}if(mt||kl){let vt,kt;x.ori==0?(vt=rt,kt=Qe):(vt=Qe,kt=rt);let It,at,yt,Ct,Nt,Xe,ct=!0,dl=Ke.bbox;if(dl!=null){ct=!1;let et=dl(l,z);yt=et.left,Ct=et.top,It=et.width,at=et.height}else yt=vt,Ct=kt,It=at=Ke.size(l,z);if(Xe=Ke.fill(l,z),Nt=Ke.stroke(l,z),kl)z==Qt&&Ft<=Mt.prox&&(R=yt,N=Ct,q=It,ae=at,se=ct,de=Xe,j=Nt);else{let et=_t[z];et!=null&&(Cl[z]=yt,Pl[z]=Ct,Mo(et,It,at,ct),Ao(et,Xe,Nt),zt(et,wt(yt),wt(Ct),Z,Q))}}}}if(kl){let z=Mt.prox,oe=ul==null?Ft<=z:Ft>z||Qt!=ul;if(mt||oe){let Ce=_t[0];Ce!=null&&(Cl[0]=R,Pl[0]=N,Mo(Ce,q,ae,se),Ao(Ce,de,j),zt(Ce,wt(R),wt(N),Z,Q))}}}if(ve.show&&Jt)if(i!=null){let[C,T]=Ee.scales,[M,R]=Ee.match,[N,q]=i.cursor.sync.scales,ae=i.cursor.drag;if(Oe=ae._x,He=ae._y,Oe||He){let{left:se,top:de,width:j,height:z}=i.select,oe=i.scales[N].ori,Ce=i.posToVal,Be,pe,ye,rt,Qe,vt=C!=null&&M(C,N),kt=T!=null&&R(T,q);vt&&Oe?(oe==0?(Be=se,pe=j):(Be=de,pe=z),ye=P[C],rt=O(Ce(Be,N),ye,v,0),Qe=O(Ce(Be+pe,N),ye,v,0),en(Et(rt,Qe),Ie(Qe-rt))):en(0,v),kt&&He?(oe==1?(Be=se,pe=j):(Be=de,pe=z),ye=P[T],rt=K(Ce(Be,q),ye,w,0),Qe=K(Ce(Be+pe,q),ye,w,0),tn(Et(rt,Qe),Ie(Qe-rt))):tn(0,w)}else hi()}else{let C=Ie($s-ws),T=Ie(Ss-xs);if(x.ori==1){let q=C;C=T,T=q}Oe=Ue.x&&C>=Ue.dist,He=Ue.y&&T>=Ue.dist;let M=Ue.uni;M!=null?Oe&&He&&(Oe=C>=M,He=T>=M,!Oe&&!He&&(T>C?He=!0:Oe=!0)):Ue.x&&Ue.y&&(Oe||He)&&(Oe=He=!0);let R,N;Oe&&(x.ori==0?(R=Dl,N=_e):(R=Rl,N=$e),en(Et(R,N),Ie(N-R)),He||tn(0,w)),He&&(x.ori==1?(R=Dl,N=_e):(R=Rl,N=$e),tn(Et(R,N),Ie(N-R)),Oe||en(0,v)),!Oe&&!He&&(en(0,0),tn(0,0))}if(Ue._x=Oe,Ue._y=He,i==null){if(c){if(zs!=null){let[C,T]=Ee.scales;Ee.values[0]=C!=null?Rt(x.ori==0?_e:$e,C):null,Ee.values[1]=T!=null?Rt(x.ori==1?_e:$e,T):null}nn(Ai,l,_e,$e,Z,Q,d)}if(Sl){let C=c&&Ee.setSeries,T=Mt.prox;ul==null?Ft<=T&&Dt(Qt,Nl,!0,C):Ft>T?Dt(null,Nl,!0,C):Qt!=ul&&Dt(Qt,Nl,!0,C)}}mt&&(ee.idx=d,fi()),r!==!1&&Fe("setCursor")}let Xt=null;Object.defineProperty(l,"rect",{get(){return Xt==null&&ln(!1),Xt}});function ln(i=!1){i?Xt=null:(Xt=$.getBoundingClientRect(),Fe("syncRect",Xt))}function Ps(i,r,c,d,m,v,w){H._lock||Jt&&i!=null&&i.movementX==0&&i.movementY==0||(di(i,r,c,d,m,v,w,!1,i!=null),i!=null?fl(null,!0,!0):fl(r,!0,!1))}function di(i,r,c,d,m,v,w,C,T){if(Xt==null&&ln(!1),al(i),i!=null)c=i.clientX-Xt.left,d=i.clientY-Xt.top;else{if(c<0||d<0){_e=-10,$e=-10;return}let[M,R]=Ee.scales,N=r.cursor.sync,[q,ae]=N.values,[se,de]=N.scales,[j,z]=Ee.match,oe=r.axes[0].side%2==1,Ce=x.ori==0?Z:Q,Be=x.ori==1?Z:Q,pe=oe?v:m,ye=oe?m:v,rt=oe?d:c,Qe=oe?c:d;if(se!=null?c=j(M,se)?p(q,P[M],Ce,0):-10:c=Ce*(rt/pe),de!=null?d=z(R,de)?p(ae,P[R],Be,0):-10:d=Be*(Qe/ye),x.ori==1){let vt=c;c=d,d=vt}}T&&(r==null||r.cursor.event.type==Ai)&&((c<=1||c>=Z-1)&&(c=hl(c,Z)),(d<=1||d>=Q-1)&&(d=hl(d,Q))),C?(ws=c,xs=d,[Dl,Rl]=H.move(l,c,d)):(_e=c,$e=d)}let pi={width:0,height:0,left:0,top:0};function hi(){$n(pi,!1)}let Ts,Es,As,Ls;function Ms(i,r,c,d,m,v,w){Jt=!0,Oe=He=Ue._x=Ue._y=!1,di(i,r,c,d,m,v,w,!0,!1),i!=null&&(Je(Li,Ni,Ds,!1),nn($o,l,Dl,Rl,Z,Q,null));let{left:C,top:T,width:M,height:R}=ve;Ts=C,Es=T,As=M,Ls=R}function Ds(i,r,c,d,m,v,w){Jt=Ue._x=Ue._y=!1,di(i,r,c,d,m,v,w,!1,!0);let{left:C,top:T,width:M,height:R}=ve,N=M>0||R>0,q=Ts!=C||Es!=T||As!=M||Ls!=R;if(N&&q&&$n(ve),Ue.setScale&&N&&q){let ae=C,se=M,de=T,j=R;if(x.ori==1&&(ae=T,se=R,de=C,j=M),Oe&&Zt(L,Rt(ae,L),Rt(ae+se,L)),He)for(let z in P){let oe=P[z];z!=L&&oe.from==null&&oe.min!=he&&Zt(z,Rt(de+j,z),Rt(de,z))}hi()}else H.lock&&(H._lock=!H._lock,fl(r,!0,i!=null));i!=null&&(xl(Li,Ni),nn(Li,l,_e,$e,Z,Q,null))}function wa(i,r,c,d,m,v,w){if(H._lock)return;al(i);let C=Jt;if(Jt){let T=!0,M=!0,R=10,N,q;x.ori==0?(N=Oe,q=He):(N=He,q=Oe),N&&q&&(T=_e<=R||_e>=Z-R,M=$e<=R||$e>=Q-R),N&&T&&(_e=_e<Dl?0:Z),q&&M&&($e=$e<Rl?0:Q),fl(null,!0,!0),Jt=!1}_e=-10,$e=-10,fe.fill(null),fl(null,!0,!0),C&&(Jt=C)}function Rs(i,r,c,d,m,v,w){H._lock||(al(i),Jn(),hi(),i!=null&&nn(Co,l,_e,$e,Z,Q,null))}function Is(){I.forEach(Du),qn(l.width,l.height,!0)}_l(On,Vl,Is);let zl={};zl.mousedown=Ms,zl.mousemove=Ps,zl.mouseup=Ds,zl.dblclick=Rs,zl.setSeries=(i,r,c,d)=>{let m=Ee.match[2];c=m(l,r,c),c!=-1&&Dt(c,d,!0,!1)},qe&&(Je($o,$,Ms),Je(Ai,$,Ps),Je(So,$,i=>{al(i),ln(!1)}),Je(ko,$,wa),Je(Co,$,Rs),Bi.add(l),l.syncRect=ln);let Sn=l.hooks=e.hooks||{};function Fe(i,r,c){ri?Xl.push([i,r,c]):i in Sn&&Sn[i].forEach(d=>{d.call(null,l,r,c)})}(e.plugins||[]).forEach(i=>{for(let r in i.hooks)Sn[r]=(Sn[r]||[]).concat(i.hooks[r])});let Ns=(i,r,c)=>c,Ee=Me({key:null,setSeries:!1,filters:{pub:zo,sub:zo},scales:[L,b[1]?b[1].scale:null],match:[Oo,Oo,Ns],values:[null,null]},H.sync);Ee.match.length==2&&Ee.match.push(Ns),H.sync=Ee;let zs=Ee.key,gi=Rr(zs);function nn(i,r,c,d,m,v,w){Ee.filters.pub(i,r,c,d,m,v,w)&&gi.pub(i,r,c,d,m,v,w)}gi.sub(l);function xa(i,r,c,d,m,v,w){Ee.filters.sub(i,r,c,d,m,v,w)&&zl[i](null,r,c,d,m,v,w)}l.pub=xa;function $a(){gi.unsub(l),Bi.delete(l),il.clear(),Hi(On,Vl,Is),u.remove(),ie==null||ie.remove(),Fe("destroy")}l.destroy=$a;function mi(){Fe("init",e,t),ps(t||e.data,!1),U[L]?ai(L,U[L]):Jn(),_n=ve.show&&(ve.width>0||ve.height>0),rl=mt=!0,qn(e.width,e.height)}return b.forEach(fs),I.forEach(ta),n?n instanceof HTMLElement?(n.appendChild(u),mi()):n(l,mi):mi(),l}Ge.assign=Me;Ge.fmtNum=Zi;Ge.rangeNum=Hn;Ge.rangeLog=Wn;Ge.rangeAsinh=qi;Ge.orient=yl;Ge.pxRatio=ce;Ge.join=Sc;Ge.fmtDate=Xi,Ge.tzDate=Ic;Ge.sync=Rr;{Ge.addGap=_u,Ge.clipGaps=Gn;let e=Ge.paths={points:Fr};e.linear=Wr,e.stepped=bu,e.bars=wu,e.spline=$u}var jr=window.location.pathname.split("/").filter(Boolean),Se=jr.length>1?jr[1]:"",Ru=Se==="";async function je(e,t={}){let n=await fetch(e,Ve(Ae({},t),{headers:Ae({"Content-Type":"application/json"},t.headers||{}),credentials:"same-origin"}));if(!n.ok){if(n.status===401)throw window.location.href="/dashboard/login",new Error("Session expired");let l=await n.json().catch(()=>({}));throw new Error(l.detail||`HTTP ${n.status}`)}return n.status===204?null:n.json()}var Te={getStats:()=>je(`/dashboard/api/${Se}/stats`),getTimeseries:(e=30)=>je(`/dashboard/api/${Se}/timeseries?days=${e}`),getLeaderboard:()=>je(`/dashboard/api/${Se}/leaderboard`),listSignups:e=>{let t=new URLSearchParams(e).toString();return je(`/dashboard/api/${Se}/signups?${t}`)},listWebhooks:()=>je(`/dashboard/api/${Se}/webhooks`),createWebhook:e=>je(`/dashboard/api/${Se}/webhooks`,{method:"POST",body:JSON.stringify(e)}),deleteWebhook:e=>je(`/dashboard/api/${Se}/webhooks/${e}`,{method:"DELETE"}),listDeliveries:()=>je(`/dashboard/api/${Se}/deliveries`),getSettings:()=>je(`/dashboard/api/${Se}/settings`),updateSettings:e=>je(`/dashboard/api/${Se}/settings`,{method:"PATCH",body:JSON.stringify(e)}),inviteTopN:e=>je(`/dashboard/api/${Se}/invite`,{method:"POST",body:JSON.stringify({count:e})}),listInvited:(e={})=>je(`/dashboard/api/${Se}/invited?`+new URLSearchParams(e).toString()),listAPIKeys:()=>je(`/dashboard/api/${Se}/api-keys`),createAPIKey:e=>je(`/dashboard/api/${Se}/api-keys`,{method:"POST",body:JSON.stringify({name:e})}),revokeAPIKey:e=>je(`/dashboard/api/${Se}/api-keys/${e}`,{method:"DELETE"})},as={listCampaigns:()=>je("/dashboard/api/campaigns"),createCampaign:(e,t)=>je("/dashboard/api/campaigns",{method:"POST",body:JSON.stringify({name:e,product_url:t})})};function gn(e){return e?new Date(e).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}):"\u2014"}function Iu(e){let t={verified:"badge-success",pending:"badge-warning",expired:"badge-muted",rejected:"badge-danger"}[e]||"badge-muted";return S`<span class=${`badge ${t}`}>${e}</span>`}function Nu(e){let t={delivered:"badge-success",pending:"badge-warning",failed:"badge-danger"}[e]||"badge-muted";return S`<span class=${`badge ${t}`}>${e}</span>`}function nl({text:e}){return S`<span class="tooltip-icon" data-tip=${e}>?</span>`}function pt(e,t=[]){let[n,l]=X({data:null,loading:!0,error:null}),s=ho(()=>{l(o=>Ve(Ae({},o),{loading:!0,error:null})),e().then(o=>l({data:o,loading:!1,error:null})).catch(o=>l({data:null,loading:!1,error:o.message}))},t);return pl(()=>{s()},[s]),Ve(Ae({},n),{reload:s})}function zu({days:e=30}){let t=Ti(null),n=Ti(null),{data:l,loading:s,error:o}=pt(()=>Te.getTimeseries(e),[e]);return pl(()=>{if(!l||!t.current)return;n.current&&(n.current.destroy(),n.current=null);let a=l.map(u=>new Date(u.date).getTime()/1e3),p=l.map(u=>u.count),h={width:t.current.offsetWidth||700,height:200,series:[{},{label:"Signups",stroke:"#4f46e5",fill:"rgba(79,70,229,0.08)",width:2}],axes:[{values:(u,_)=>_.map(f=>new Date(f*1e3).toLocaleDateString(void 0,{month:"short",day:"numeric"}))},{}],scales:{x:{time:!0}},cursor:{show:!1},legend:{show:!1}};return n.current=new Ge(h,[a,p],t.current),()=>{n.current&&(n.current.destroy(),n.current=null)}},[l]),s?S`<div class="loading">Loading chart…</div>`:o?S`<div class="alert alert-error">${o}</div>`:S`<div ref=${t}></div>`}function Ou(){var n;let e=pt(()=>Te.getStats(),[]),t=pt(()=>Te.getLeaderboard(),[]);return S`
    <h1 class="page-title">Overview</h1>
    ${e.loading?S`<div class="loading">Loading stats…</div>`:e.error?S`<div class="alert alert-error">${e.error}</div>`:S`
      <div class="stat-grid">
        <div class="stat-card">
          <div class="stat-label">Total Signups</div>
          <div class="stat-value">${e.data.total_signups.toLocaleString()}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Verified</div>
          <div class="stat-value">${e.data.verified_signups.toLocaleString()}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Today</div>
          <div class="stat-value">${e.data.today_signups.toLocaleString()}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label" style="display:flex;align-items:center">Viral Coefficient <${nl} text="Average number of new signups each existing signup generates through referrals. Above 1.0 means exponential growth." /></div>
          <div class="stat-value">${e.data.viral_coefficient.toFixed(2)}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label" style="display:flex;align-items:center">Referral Rate <${nl} text="Percentage of total signups who joined via a referral link." /></div>
          <div class="stat-value">${(e.data.referral_rate*100).toFixed(1)}%</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Invited</div>
          <div class="stat-value">${(e.data.invited_signups||0).toLocaleString()}</div>
        </div>
      </div>
    `}

    ${((n=e.data)==null?void 0:n.total_signups)===0&&S`
      <div class="settings-section" style="text-align:center;padding:32px;margin-bottom:24px">
        <p style="color:var(--muted);margin-bottom:12px">No signups yet. Have you embedded the widget on your page?</p>
        <a class="btn btn-primary" href="#setup">Get embed code →</a>
      </div>
    `}

    <div class="chart-card">
      <div class="chart-title">Signup Trend (last 30 days)</div>
      <${zu} days=${30} />
    </div>

    <div class="table-card">
      <div class="table-header"><span class="table-title">Top Referrers</span></div>
      ${t.loading?S`<div class="loading">Loading…</div>`:t.error?S`<div class="alert alert-error">${t.error}</div>`:S`
        <table>
          <thead><tr><th>#</th><th>Email</th><th>Referrals</th><th>Position</th></tr></thead>
          <tbody>
            ${t.data.slice(0,10).map((l,s)=>S`
              <tr key=${l.id}>
                <td>${s+1}</td>
                <td>${l.email}</td>
                <td>${l.referral_count}</td>
                <td>${l.effective_position}</td>
              </tr>
            `)}
          </tbody>
        </table>
        ${t.data.length===0&&S`<div class="empty">No signups yet.</div>`}
      `}
    </div>
  `}function Hu(){let[e,t]=X(1),[n]=X(50),[l,s]=X(""),[o,a]=X(""),[p,h]=X(""),[u,_]=X("date"),{data:f,loading:g,error:y}=pt(()=>Te.listSignups({page:e,limit:n,status:l,search:o,sort:u}),[e,n,l,o,u]),$=(f==null?void 0:f.signups)||[],E=(f==null?void 0:f.total)||0,A=Math.max(1,Math.ceil(E/n));function k(b){b.preventDefault(),a(p),t(1)}return S`
    <h1 class="page-title">Signups</h1>
    <div class="table-card">
      <div class="table-header">
        <span class="table-title">${E.toLocaleString()} total</span>
        <form onSubmit=${k} style="display:flex;gap:8px;align-items:center">
          <input type="text" placeholder="Search email…" value=${p}
            onInput=${b=>h(b.target.value)} style="width:200px" />
          <button class="btn btn-secondary btn-sm" type="submit">Search</button>
        </form>
        <select value=${l} onChange=${b=>{s(b.target.value),t(1)}}>
          <option value="">All statuses</option>
          <option value="verified">Verified</option>
          <option value="pending">Pending</option>
          <option value="expired">Expired</option>
          <option value="rejected">Rejected</option>
        </select>
        <select value=${u} onChange=${b=>{_(b.target.value),t(1)}}>
          <option value="date">Newest first</option>
          <option value="position">By position</option>
          <option value="referrals">By referrals</option>
        </select>
        <a class="btn btn-secondary btn-sm" href=${`/dashboard/api/${Se}/signups/export.csv`} download>Export CSV</a>
      </div>

      ${g?S`<div class="loading">Loading…</div>`:y?S`<div class="alert alert-error" style="margin:16px">${y}</div>`:S`
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Status</th>
              <th>Position</th>
              <th>Referrals</th>
              <th>Joined</th>
            </tr>
          </thead>
          <tbody>
            ${$.map(b=>S`
              <tr key=${b.id}>
                <td>${b.email}</td>
                <td>${Iu(b.status)}</td>
                <td>${b.effective_position}</td>
                <td>${b.referral_count}</td>
                <td>${gn(b.created_at)}</td>
              </tr>
            `)}
          </tbody>
        </table>
        ${$.length===0&&S`<div class="empty">No signups match your filters.</div>`}
        <div class="pagination">
          <span class="info">Page ${e} of ${A} (${E.toLocaleString()} results)</span>
          <button class="btn btn-secondary btn-sm" disabled=${e<=1} onClick=${()=>t(b=>b-1)}>← Prev</button>
          <button class="btn btn-secondary btn-sm" disabled=${e>=A} onClick=${()=>t(b=>b+1)}>Next →</button>
        </div>
      `}
    </div>
  `}function Fu(){let{data:e,loading:t,error:n}=pt(()=>Te.getLeaderboard(),[]);return S`
    <h1 class="page-title">Leaderboard</h1>
    <div class="table-card">
      <div class="table-header"><span class="table-title">Top Referrers</span></div>
      ${t?S`<div class="loading">Loading…</div>`:n?S`<div class="alert alert-error" style="margin:16px">${n}</div>`:S`
        <table>
          <thead><tr><th>Rank</th><th>Email</th><th>Referral Code</th><th>Referrals</th><th>Position</th></tr></thead>
          <tbody>
            ${e.map((l,s)=>S`
              <tr key=${l.id}>
                <td>${s+1}</td>
                <td>${l.email}</td>
                <td><code>${l.referral_code}</code></td>
                <td>${l.referral_count}</td>
                <td>${l.effective_position}</td>
              </tr>
            `)}
          </tbody>
        </table>
        ${e.length===0&&S`<div class="empty">No signups yet.</div>`}
      `}
    </div>
  `}function Vu(){let e=pt(()=>Te.listWebhooks(),[]),t=pt(()=>Te.listDeliveries(),[]),[n,l]=X({url:"",secret:"",events:[]}),[s,o]=X(!1),[a,p]=X(null),h=["signup.created","email.verified","referral.converted"];function u(g){l(y=>Ve(Ae({},y),{events:y.events.includes(g)?y.events.filter($=>$!==g):[...y.events,g]}))}async function _(g){if(g.preventDefault(),n.events.length===0){p({type:"error",text:"Select at least one event."});return}o(!0),p(null);try{await Te.createWebhook({url:n.url,secret:n.secret,events:n.events}),l({url:"",secret:"",events:[]}),p({type:"success",text:"Webhook endpoint created."}),e.reload()}catch(y){p({type:"error",text:y.message})}finally{o(!1)}}async function f(g){if(confirm("Delete this webhook endpoint?"))try{await Te.deleteWebhook(g),e.reload(),t.reload()}catch(y){p({type:"error",text:y.message})}}return S`
    <h1 class="page-title">Webhooks</h1>
    ${a&&S`<div class=${`alert alert-${a.type}`}>${a.text}</div>`}

    <div class="table-card">
      <div class="table-header"><span class="table-title">Endpoints</span></div>
      ${e.loading?S`<div class="loading">Loading…</div>`:e.error?S`<div class="alert alert-error" style="margin:16px">${e.error}</div>`:S`
        <table>
          <thead><tr><th>URL</th><th>Events</th><th>Active</th><th></th></tr></thead>
          <tbody>
            ${e.data.map(g=>S`
              <tr key=${g.id}>
                <td style="word-break:break-all">${g.url}</td>
                <td>${g.events.join(", ")}</td>
                <td>${g.active?S`<span class="badge badge-success">Active</span>`:S`<span class="badge badge-muted">Paused</span>`}</td>
                <td><button class="btn btn-danger btn-sm" onClick=${()=>f(g.id)}>Delete</button></td>
              </tr>
            `)}
          </tbody>
        </table>
        ${e.data.length===0&&S`<div class="empty">No webhook endpoints.</div>`}
        <form class="inline-form" onSubmit=${_}>
          <div class="form-group" style="flex:1;min-width:200px">
            <label>Endpoint URL</label>
            <input required type="url" value=${n.url} onInput=${g=>l(y=>Ve(Ae({},y),{url:g.target.value}))} placeholder="https://example.com/webhook" />
          </div>
          <div class="form-group">
            <label>Secret (optional)</label>
            <input value=${n.secret} onInput=${g=>l(y=>Ve(Ae({},y),{secret:g.target.value}))} placeholder="for HMAC signing" style="width:160px" />
          </div>
          <div class="form-group">
            <label>Events</label>
            <div style="display:flex;gap:8px;flex-wrap:wrap">
              ${h.map(g=>S`
                <label style="display:flex;gap:4px;align-items:center;font-size:13px;font-weight:normal;color:var(--text)">
                  <input type="checkbox" checked=${n.events.includes(g)} onChange=${()=>u(g)} />
                  ${g}
                </label>
              `)}
            </div>
          </div>
          <button class="btn btn-primary" type="submit" disabled=${s}>Add</button>
        </form>
      `}
    </div>

    <div class="table-card">
      <div class="table-header"><span class="table-title">Recent Deliveries</span></div>
      ${t.loading?S`<div class="loading">Loading…</div>`:t.error?S`<div class="alert alert-error" style="margin:16px">${t.error}</div>`:S`
        <table>
          <thead><tr><th>Endpoint</th><th>Event</th><th>Status</th><th>HTTP</th><th>Attempts</th><th>Time</th></tr></thead>
          <tbody>
            ${t.data.map((g,y)=>S`
              <tr key=${y}>
                <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title=${g.endpoint_url}>${g.endpoint_url}</td>
                <td><code>${g.event_type}</code></td>
                <td>${Nu(g.status)}</td>
                <td>${g.response_status||"\u2014"}</td>
                <td>${g.attempts}</td>
                <td>${gn(g.created_at)}</td>
              </tr>
            `)}
          </tbody>
        </table>
        ${t.data.length===0&&S`<div class="empty">No deliveries yet.</div>`}
      `}
    </div>
  `}function Yr({text:e}){let[t,n]=X(!1);function l(s){s.stopPropagation(),navigator.clipboard.writeText(e).then(()=>{n(!0),setTimeout(()=>n(!1),2e3)})}return S`<button class="btn btn-secondary btn-sm" style="padding:2px 6px;font-size:11px" onClick=${l}>${t?"\u2713":"Copy"}</button>`}function Wu(){return S`
    <div class="settings-section" style="margin-bottom:24px;border-left:3px solid var(--primary);padding-left:16px">
      <div class="settings-title" style="margin-bottom:8px">How invitations work</div>
      <p style="font-size:14px;color:var(--muted);margin-bottom:12px">
        When a user is invited, they receive an email with a unique link containing <code>${"?invite=<token>"}</code>.
        Your product should detect this query parameter when the user lands on your site and use the code to verify access.
      </p>
      <p style="font-size:13px;font-weight:600;margin-bottom:6px">Ways to validate an invite code:</p>
      <ul style="font-size:13px;color:var(--muted);margin:0;padding-left:20px;line-height:1.8">
        <li>
          <strong>API</strong> — check status with
          <code>GET /api/v1/invites/{"{token}"}</code>, then mark as used with
          <code>POST /api/v1/invites/{"{token}"}/redeem</code>.
          Both endpoints are public (the token is the credential).
        </li>
        <li>
          <strong>Dashboard</strong> — paste or type the invite code into the search box below to look it up manually and confirm its status.
        </li>
        <li>
          <strong>MCP</strong> — use <code>list_signups</code> with <code>status=invited</code> and search by token, or ask Claude to look up a specific invite code.
        </li>
      </ul>
    </div>
  `}var ql=50;function Uu(){var G,L;let e=pt(()=>Te.getStats(),[]),[t,n]=X(100),[l,s]=X(!1),[o,a]=X(null),[p,h]=X(""),[u,_]=X(0),[f,g]=X("");pl(()=>{let D=setTimeout(()=>{g(p),_(0)},300);return()=>clearTimeout(D)},[p]);let y=pt(()=>Te.listInvited({limit:ql,offset:u,search:f}),[u,f]);async function $(D){D.preventDefault();let V=parseInt(t,10);if(!V||V<1){a({type:"error",text:"Enter a valid count."});return}if(confirm(`Invite the top ${V} people? They will receive an email immediately.`)){s(!0),a(null);try{let W=await Te.inviteTopN(V);a({type:"success",text:`\u2705 Invited ${W.invited} people. Total invited: ${W.total_invited}.`}),e.reload(),y.reload()}catch(W){a({type:"error",text:W.message})}finally{s(!1)}}}let E=e.data,A=E&&E.verified_signups||0,k=E&&E.invited_signups||0,b=((G=y.data)==null?void 0:G.total)||0,I=u>0,P=u+ql<b;return S`
    <h1 class="page-title">Invitations</h1>

    <${Wu} />

    ${e.loading?S`<div class="loading">Loading…</div>`:S`
      <div class="stat-grid" style="margin-bottom:24px">
        <div class="stat-card">
          <div class="stat-label">Invited</div>
          <div class="stat-value">${k.toLocaleString()}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Verified (eligible)</div>
          <div class="stat-value">${(A-k).toLocaleString()}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Total Verified</div>
          <div class="stat-value">${A.toLocaleString()}</div>
        </div>
      </div>
    `}

    ${o&&S`<div class=${`alert alert-${o.type}`}>${o.text}</div>`}

    <div class="settings-section">
      <div class="settings-title">Invite top N</div>
      <p style="font-size:14px;color:var(--muted);margin-bottom:16px">
        Marks the top N verified signups (by queue position) as invited and sends them an email immediately.
        Already-invited people are skipped — this is safe to run multiple times.
      </p>
      <form onSubmit=${$} style="display:flex;align-items:flex-end;gap:12px">
        <div class="form-group" style="margin:0">
          <label>Number of people to invite</label>
          <input type="number" min="1" max="10000" value=${t}
            onInput=${D=>n(D.target.value)} style="width:120px" />
        </div>
        <button class="btn btn-primary" type="submit" disabled=${l}>
          ${l?"Inviting\u2026":"Invite"}
        </button>
      </form>
    </div>

    <div class="table-card" style="margin-top:24px">
      <div class="table-header">
        <span class="table-title">Invited signups</span>
        <input
          type="search"
          placeholder="Search by email or invite code…"
          value=${p}
          onInput=${D=>h(D.target.value)}
          style="width:260px;padding:6px 10px;font-size:13px;border:1px solid var(--border);border-radius:6px;background:var(--bg);color:var(--text)"
        />
      </div>
      ${y.loading?S`<div class="loading">Loading…</div>`:y.error?S`<div class="alert alert-error">${y.error}</div>`:S`
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Invite Code</th>
              <th>Redeemed</th>
              <th>Position</th>
              <th>Referrals</th>
              <th>Invited at</th>
            </tr>
          </thead>
          <tbody>
            ${(((L=y.data)==null?void 0:L.signups)||[]).map(D=>S`
              <tr key=${D.id}>
                <td>${D.email}</td>
                <td>
                  ${D.invite_token?S`
                    <span style="display:flex;align-items:center;gap:6px">
                      <code style="font-size:12px;color:var(--muted)">${D.invite_token.slice(0,12)}…</code>
                      <${Yr} text=${D.invite_token} />
                    </span>
                  `:S`<span style="color:var(--muted)">—</span>`}
                </td>
                <td>
                  ${D.invite_token_redeemed_at?S`<span style="color:var(--success)">✓ ${gn(D.invite_token_redeemed_at)}</span>`:S`<span style="color:var(--muted)">—</span>`}
                </td>
                <td>${D.effective_position}</td>
                <td>${D.referral_count}</td>
                <td>${D.invited_at?new Date(D.invited_at).toLocaleString():"\u2014"}</td>
              </tr>
            `)}
          </tbody>
        </table>
        ${b===0&&S`<div class="empty">${f?"No results for that search.":"No one invited yet."}</div>`}
        ${b>ql&&S`
          <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;font-size:13px;color:var(--muted);border-top:1px solid var(--border)">
            <span>Showing ${u+1}–${Math.min(u+ql,b)} of ${b.toLocaleString()}</span>
            <div style="display:flex;gap:8px">
              <button class="btn btn-secondary btn-sm" disabled=${!I} onClick=${()=>_(D=>D-ql)}>← Prev</button>
              <button class="btn btn-secondary btn-sm" disabled=${!P} onClick=${()=>_(D=>D+ql)}>Next →</button>
            </div>
          </div>
        `}
      `}
    </div>
  `}function Bu(){var f,g;let e=pt(()=>Te.listAPIKeys(),[]),[t,n]=X(""),[l,s]=X(!1),[o,a]=X(null),[p,h]=X(null);async function u(y){if(y.preventDefault(),!!t.trim()){s(!0),h(null);try{let $=await Te.createAPIKey(t.trim());a({id:$.id,value:$.api_key}),n(""),e.reload()}catch($){h($.message)}finally{s(!1)}}}async function _(y,$){if(confirm(`Revoke key "${$}"? It will stop working immediately.`)){h(null);try{await Te.revokeAPIKey(y),(o==null?void 0:o.id)===y&&a(null),e.reload()}catch(E){h(E.message)}}}return S`
    <div class="settings-section">
      <div class="settings-title">API Keys</div>
      <p style="font-size:14px;color:var(--muted);margin-bottom:16px">
        API keys authenticate programmatic access to your campaign via the REST API or MCP server.
      </p>
      ${p&&S`<div class="alert alert-error" style="margin-bottom:12px">${p}</div>`}

      ${o&&S`
        <div class="alert alert-success" style="margin-bottom:16px">
          <div style="margin-bottom:6px;font-weight:600">New key created — copy it now. It will not be shown again.</div>
          <div class="api-key-display">
            <span class="api-key-mono" style="word-break:break-all">${o.value}</span>
            <${Yr} text=${o.value} />
          </div>
        </div>
      `}

      ${e.loading&&S`<div class="loading" style="margin-bottom:12px">Loading…</div>`}
      ${((f=e.data)==null?void 0:f.length)>0&&S`
        <table style="margin-bottom:16px">
          <thead>
            <tr>
              <th>Name</th>
              <th>Created</th>
              <th>Last used</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            ${e.data.map(y=>S`
              <tr>
                <td style="font-weight:500">${y.name}</td>
                <td style="color:var(--muted);font-size:13px">${gn(y.created_at)}</td>
                <td style="color:var(--muted);font-size:13px">${y.last_used_at?gn(y.last_used_at):"\u2014"}</td>
                <td style="text-align:right">
                  <button class="btn btn-danger btn-sm" onClick=${()=>_(y.id,y.name)}>Revoke</button>
                </td>
              </tr>
            `)}
          </tbody>
        </table>
      `}
      ${!e.loading&&((g=e.data)==null?void 0:g.length)===0&&S`
        <p style="font-size:13px;color:var(--muted);margin-bottom:16px">No active API keys.</p>
      `}

      <form onSubmit=${u} style="display:flex;gap:8px;align-items:flex-end">
        <div class="form-group" style="flex:1;margin-bottom:0">
          <label>New key name</label>
          <input placeholder="e.g. production, CI" value=${t}
            onInput=${y=>n(y.target.value)} />
        </div>
        <button class="btn btn-primary" type="submit" disabled=${l||!t.trim()}>
          ${l?"Creating\u2026":"Create API Key"}
        </button>
      </form>
    </div>
  `}function Gu(){var h;let e=pt(()=>Te.getSettings(),[]),[t,n]=X(null),[l,s]=X(!1),[o,a]=X(null);pl(()=>{e.data&&!t&&n(e.data)},[e.data]);async function p(u){u.preventDefault(),s(!0),a(null);try{await Te.updateSettings({name:t.name,boost_weight:parseFloat(t.boost_weight),max_signups:t.max_signups?parseInt(t.max_signups,10):null,status:t.status,product_url:t.product_url,invite_url:t.invite_url||""}),a({type:"success",text:"Settings saved."}),e.reload()}catch(_){a({type:"error",text:_.message})}finally{s(!1)}}return e.loading?S`<div class="loading">Loading…</div>`:e.error?S`<div class="alert alert-error">${e.error}</div>`:S`
    <h1 class="page-title">Settings</h1>
    ${o&&S`<div class=${`alert alert-${o.type}`}>${o.text}</div>`}

    ${t&&S`
      <div class="settings-section">
        <div class="settings-title">Campaign Settings</div>
        <form onSubmit=${p}>
          <div class="form-row">
            <div class="form-group" style="flex:1;min-width:200px">
              <label>Campaign Name</label>
              <input required value=${t.name||""} onInput=${u=>n(_=>Ve(Ae({},_),{name:u.target.value}))} />
            </div>
            <div class="form-group">
              <label>Status</label>
              <select value=${t.status||""} onChange=${u=>n(_=>Ve(Ae({},_),{status:u.target.value}))}>
                <option value="active">Active</option>
                <option value="paused">Paused</option>
                <option value="full">Full</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label style="display:flex;align-items:center">Boost Weight <${nl} text="How many queue positions each referral is worth. Default 1.0 means 1 referral moves you up 1 spot. Increase to make referrals more powerful." /></label>
              <input type="number" step="0.1" min="0" value=${(h=t.boost_weight)!=null?h:1}
                onInput=${u=>n(_=>Ve(Ae({},_),{boost_weight:u.target.value}))} style="width:120px" />
            </div>
            <div class="form-group">
              <label style="display:flex;align-items:center">Max Signups <${nl} text="Cap the total number of signups. New registrations are rejected once the cap is reached. Leave blank for unlimited." /></label>
              <input type="number" min="1" value=${t.max_signups||""}
                onInput=${u=>n(_=>Ve(Ae({},_),{max_signups:u.target.value||null}))} style="width:140px" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group" style="flex:1">
              <label style="display:flex;align-items:center">Product URL <${nl} text="Your product's URL. Used as the CTA link in invite emails and to restrict the widget to your domain — the widget will only work when embedded on this origin (e.g. https://yoursite.com)." /></label>
              <input required type="url" placeholder="https://yourproduct.com" value=${t.product_url||""}
                onInput=${u=>n(_=>Ve(Ae({},_),{product_url:u.target.value}))} />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group" style="flex:1">
              <label style="display:flex;align-items:center">Invite URL <${nl} text="Optional. Overrides Product URL as the base for invite links in emails. Use this to send invited users to a different page (e.g. an invite handler) instead of your landing page. Leave blank to use the Product URL." /></label>
              <input type="url" placeholder="https://api.example.com/invite" value=${t.invite_url||""}
                onInput=${u=>n(_=>Ve(Ae({},_),{invite_url:u.target.value}))} />
            </div>
          </div>
          <button class="btn btn-primary" type="submit" disabled=${l}>Save settings</button>
        </form>
      </div>

      <${Bu} />

      <div class="settings-section settings-danger">
        <div class="settings-title">Danger Zone</div>
        <p style="font-size:14px;margin-bottom:16px">Pausing stops new signups while preserving existing data.</p>
        <div style="display:flex;gap:12px">
          <button class="btn btn-danger"
            disabled=${t.status==="paused"}
            onClick=${async()=>{if(confirm("Pause this campaign?"))try{await Te.updateSettings({status:"paused"}),e.reload(),n(u=>Ve(Ae({},u),{status:"paused"}))}catch(u){a({type:"error",text:u.message})}}}>
            Pause Campaign
          </button>
          <button class="btn btn-secondary"
            disabled=${t.status==="active"}
            onClick=${async()=>{try{await Te.updateSettings({status:"active"}),e.reload(),n(u=>Ve(Ae({},u),{status:"active"}))}catch(u){a({type:"error",text:u.message})}}}>
            Resume Campaign
          </button>
        </div>
      </div>
    `}
  `}var ju=[{id:"none",label:"Not signed in"},{id:"signed_in",label:"Signed in"},{id:"invited",label:"Invited"}],Yu=[{color:"#6366f1",label:"Indigo"},{color:"#3b82f6",label:"Blue"},{color:"#10b981",label:"Emerald"},{color:"#f59e0b",label:"Amber"},{color:"#ef4444",label:"Red"},{color:"#8b5cf6",label:"Violet"},{color:"#ec4899",label:"Pink"},{color:"#000000",label:"Black"}];function Ku(e,t){let n={id:"preview",campaign_id:"preview-cid",email:"you@example.com",referral_code:"PRVW0001",base_position:1,effective_position:1,referral_count:0,status:"verified"},l=t==="invited"?Ve(Ae({},n),{status:"invited"}):n,s=t!=="none",o=Ae({campaign_id:"preview-cid",campaign_name:"My Product",slug:e,total_signups:0},s?{signup:l}:{}),a=JSON.stringify(`ep_${e}`),p=JSON.stringify(JSON.stringify(l));return`<script>(function(){${s?`var _ls={};_ls[${a}]=${p};try{Object.defineProperty(window,'localStorage',{get:function(){return{getItem:function(k){return Object.prototype.hasOwnProperty.call(_ls,k)?_ls[k]:null;},setItem:function(k,v){_ls[k]=String(v);},removeItem:function(k){delete _ls[k];},clear:function(){_ls={};},key:function(i){return Object.keys(_ls)[i]||null;},get length(){return Object.keys(_ls).length;}};},configurable:true});}catch(e){}`:""};var _d=${JSON.stringify(o)};var _s=${JSON.stringify(l)};var _f=window.fetch.bind(window);window.fetch=function(u,o){var us=String(u);if(us.indexOf('/api/v1/w/')!==-1)return Promise.resolve(new Response(JSON.stringify(_d),{status:200,headers:{'Content-Type':'application/json'}}));if(us.indexOf('/api/v1/campaigns/')!==-1&&o&&o.method==='POST')return Promise.resolve(new Response(JSON.stringify(_s),{status:200,headers:{'Content-Type':'application/json'}}));return _f(u,o);};})();<\/script>`}function os(e,t,n,l,s,o){let a=e==="dark"?"#111827":"#f3f4f6",p=Ku(n,l);return['<!DOCTYPE html><html><head><meta charset="UTF-8">','<meta name="viewport" content="width=device-width,initial-scale=1">',`<base href="${o}/">`,"<style>*{box-sizing:border-box;margin:0;padding:0}",`body{padding:24px 16px;background:${a};min-height:100%;display:flex;justify-content:center;}`,"early-pass{width:min(28rem,100%)}</style>","</head><body>",p,`<early-pass data-campaign="${n}" data-theme="${e}" data-accent="${t}"></early-pass>`,`<script src="${s}/widget/widget.js"><\/script>`,"</body></html>"].join("")}function qu(){let e=pt(()=>Te.getSettings(),[]),[t,n]=X("light"),[l,s]=X("#6366f1"),[o,a]=X("light"),[p,h]=X("#6366f1"),[u,_]=X("none"),[f,g]=X(!1);if(e.loading)return S`<div class="loading">Loading…</div>`;if(e.error)return S`<div class="alert alert-error">${e.error}</div>`;let y=e.data.base_url||window.location.origin,$=window.location.origin,E=e.data.product_url||"https://your-product.com",A=[`data-campaign="${Se}"`];t!=="light"&&A.push(`data-theme="${t}"`),l.toLowerCase()!=="#6366f1"&&A.push(`data-accent="${l}"`);let k=A.length>1?`
        `+A.join(`
        `):" "+A[0],b=`<script src="${y}/widget/widget.js"${k} async><\/script>`,I=`${o}:${p}`,P={none:os(o,p,Se,"none",$,E),signed_in:os(o,p,Se,"signed_in",$,E),invited:os(o,p,Se,"invited",$,E)},G=`${u}:${I}`;function L(x){n(x),a(x)}function D(x){s(x)}function V(x){s(x),/^#[0-9a-fA-F]{6}$/.test(x)&&h(x)}function W(x){s(x),h(x)}function B(){navigator.clipboard.writeText(b).then(()=>{g(!0),setTimeout(()=>g(!1),2e3)})}return S`
    <h1 class="page-title">Setup</h1>

    <div class="setup-grid">

      <div class="setup-left-col">

        <div class="settings-section">
          <div class="settings-title">Customize widget</div>

          <div class="form-group" style="margin-bottom:20px">
            <label>Theme</label>
            <div class="setup-theme-cards">
              ${["light","dark"].map(x=>S`
                <button
                  key=${x}
                  class=${"setup-theme-card"+(t===x?" active":"")}
                  onClick=${()=>L(x)}
                >
                  <div class=${"setup-theme-thumb setup-theme-thumb-"+x}></div>
                  <div class="setup-theme-label">
                    ${x==="light"?"\u2600\uFE0F Light":"\u{1F319} Dark"}
                  </div>
                </button>
              `)}
            </div>
          </div>

          <div class="form-group">
            <label>Accent color</label>
            <div style="display:flex;align-items:center;gap:8px;margin-top:8px">
              <input
                type="color"
                value=${l}
                onInput=${x=>D(x.target.value)}
                onChange=${x=>V(x.target.value)}
                style="width:38px;height:34px;border:1px solid var(--border);border-radius:6px;padding:2px;cursor:pointer;background:var(--surface)"
              />
              <input
                type="text"
                value=${l}
                onInput=${x=>D(x.target.value)}
                onChange=${x=>V(x.target.value)}
                style="width:84px;font-family:monospace;font-size:13px"
                maxlength="7"
                placeholder="#6366f1"
              />
            </div>
            <div class="setup-swatches">
              ${Yu.map(({color:x,label:Y})=>S`
                <button
                  key=${x}
                  title=${Y}
                  class=${"setup-swatch"+(l===x?" active":"")}
                  style=${"background:"+x}
                  onClick=${()=>W(x)}
                ></button>
              `)}
            </div>
          </div>
        </div>

        <div class="settings-section">
          <div class="settings-title">Embed code</div>
          <p style="font-size:13px;color:var(--muted);margin-bottom:14px;line-height:1.5">
            Paste this snippet into your page. Updates as you customize above.
          </p>
          <div class="setup-code-block">
            <pre class="setup-code-pre">${b}</pre>
            <div class="setup-code-footer">
              <button class=${"setup-code-copy"+(f?" copied":"")} onClick=${B}>
                ${f?"\u2713 Copied!":"\u{1F4CB} Copy code"}
              </button>
            </div>
          </div>
        </div>

        <div class="settings-section">
          <div class="settings-title">Getting started</div>
          <div class="setup-steps">
            ${["Customize the widget theme and color above","Copy the embed code",S`Paste it before <code>${"</body>"}</code> in your page HTML`,"Publish your page","Share your link and watch signups roll in"].map((x,Y)=>S`
              <div key=${Y} class="setup-step">
                <div class="setup-step-num">${Y+1}</div>
                <div class="setup-step-text">${x}</div>
              </div>
            `)}
          </div>
        </div>

      </div>

      <div class="setup-preview-col">
        <div class="settings-section">

          <div style="padding:14px 20px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between">
            <div class="settings-title" style="margin:0">Preview</div>
            <span style="font-size:12px;color:var(--muted);font-family:ui-monospace,monospace">${o} · ${p}</span>
          </div>

          <div class="preview-chrome">
            <div class="preview-chrome-dots">
              <span class="preview-chrome-dot"></span>
              <span class="preview-chrome-dot"></span>
              <span class="preview-chrome-dot"></span>
            </div>
            <div class="preview-chrome-url">${E}</div>
          </div>

          <div class="preview-tabs">
            ${ju.map(x=>S`
              <button
                key=${x.id}
                class=${"preview-tab"+(u===x.id?" active":"")}
                onClick=${()=>_(x.id)}
              >${x.label}</button>
            `)}
          </div>

          <iframe
            key=${G}
            srcdoc=${P[u]}
            style="width:100%;border:none;display:block"
            height="300"
            title=${"Widget preview \u2014 "+u}
          ></iframe>

        </div>
      </div>

    </div>
  `}function Ju(){let{data:e,loading:t,error:n}=pt(()=>as.listCampaigns(),[]),[l,s]=X(""),[o,a]=X(""),[p,h]=X(!1),[u,_]=X(!1),[f,g]=X(null);async function y(k){k.preventDefault(),h(!0),g(null);try{let b=await as.createCampaign(l.trim(),o.trim());window.location.href=`/dashboard/${b.slug}/`}catch(b){g({type:"error",text:b.message}),h(!1)}}let $=k=>({active:"badge-success",paused:"badge-warning"})[k]||"badge-muted",E=!t&&!n&&e&&e.length>0,A=!t&&!n&&e&&e.length===0;return S`<${Wt}>
    <div class="header">
      <a href="/dashboard/" style="display:flex;align-items:center;gap:8px;text-decoration:none"><img src="/assets/logo.svg" alt="EarlyPass" class="header-logo" /><span style="font-weight:700;font-size:16px;color:var(--primary)">EarlyPass</span></a>
      <form method="POST" action="/dashboard/logout" style="margin-left:auto">
        <button class="btn btn-secondary btn-sm" type="submit">Sign out</button>
      </form>
    </div>
    <div class="main-content">
      ${E&&S`
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px">
          <h1 class="page-title" style="margin:0">My Campaigns</h1>
          <button class="btn btn-primary" onClick=${()=>{_(!0),g(null)}}>+ New campaign</button>
        </div>
      `}

      ${f&&S`<div class=${`alert alert-${f.type}`}>${f.text}</div>`}

      ${t?S`<div class="loading">Loading campaigns…</div>`:n?S`<div class="alert alert-error">${n}</div>`:A&&!u?S`
          <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:80px 24px;max-width:520px;margin:0 auto">
            <h2 style="font-size:22px;font-weight:700;margin:0 0 12px">Create your first campaign</h2>
            <p style="color:var(--muted);font-size:15px;line-height:1.6;margin:0 0 32px;max-width:380px">
              Set up a waitlist in minutes. Add the widget to your site and start collecting signups with built-in referral tracking.
            </p>
            <button class="btn btn-primary" style="font-size:15px;padding:10px 24px"
              onClick=${()=>_(!0)}>
              Create your first campaign
            </button>
          </div>
        `:A&&u?S`
          <div style="max-width:480px;margin:40px auto 0">
            <h2 style="font-size:20px;font-weight:700;margin:0 0 24px">Create your first campaign</h2>
            ${f&&S`<div class=${`alert alert-${f.type}`} style="margin-bottom:16px">${f.text}</div>`}
            <form onSubmit=${y}>
              <div class="form-group" style="margin-bottom:16px">
                <label>Campaign name</label>
                <input required autoFocus value=${l}
                  onInput=${k=>s(k.target.value)}
                  placeholder="My Product Waitlist" maxlength="200" />
              </div>
              <div class="form-group" style="margin-bottom:16px">
                <label style="display:flex;align-items:center">Product URL <${nl} text="Your product's URL. Used as the CTA link in invite emails and to restrict the widget to your domain — the widget will only work when embedded on this origin (e.g. https://yoursite.com)." /></label>
                <input required type="url" value=${o}
                  onInput=${k=>a(k.target.value)}
                  placeholder="https://yoursite.com/product" />
              </div>
              <div style="display:flex;gap:8px">
                <button class="btn btn-primary" type="submit" disabled=${p}>
                  ${p?"Creating\u2026":"Create campaign"}
                </button>
                <button class="btn btn-secondary" type="button"
                  onClick=${()=>{_(!1),s(""),a(""),g(null)}}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        `:S`
          <div>
            ${u&&S`
              <div class="settings-section" style="margin-bottom:24px;max-width:480px">
                <div class="settings-title">Create campaign</div>
                ${f&&S`<div class=${`alert alert-${f.type}`} style="margin-bottom:16px">${f.text}</div>`}
                <form onSubmit=${y}>
                  <div class="form-group" style="margin-bottom:16px">
                    <label>Campaign name</label>
                    <input required autoFocus value=${l}
                      onInput=${k=>s(k.target.value)}
                      placeholder="My Product Waitlist" maxlength="200" />
                  </div>
                  <div class="form-group" style="margin-bottom:16px">
                    <label style="display:flex;align-items:center">Product URL <${nl} text="Your product's URL. Used as the CTA link in invite emails and to restrict the widget to your domain — the widget will only work when embedded on this origin (e.g. https://yoursite.com)." /></label>
                    <input required type="url" value=${o}
                      onInput=${k=>a(k.target.value)}
                      placeholder="https://yoursite.com/product" />
                  </div>
                  <div style="display:flex;gap:8px">
                    <button class="btn btn-primary" type="submit" disabled=${p}>
                      ${p?"Creating\u2026":"Create campaign"}
                    </button>
                    <button class="btn btn-secondary" type="button"
                      onClick=${()=>{_(!1),s(""),a(""),g(null)}}>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            `}
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:16px">
              ${e&&e.map(k=>S`
                <a key=${k.slug} href=${`/dashboard/${k.slug}/`}
                  style="display:block;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:20px;text-decoration:none;color:inherit;transition:border-color 0.15s"
                  onMouseOver=${b=>b.currentTarget.style.borderColor="var(--primary)"}
                  onMouseOut=${b=>b.currentTarget.style.borderColor="var(--border)"}>
                  <div style="display:flex;align-items:center;justify-content:space-between">
                    <div>
                      <div style="font-weight:600;font-size:15px;margin-bottom:4px">${k.name}</div>
                      <div style="color:var(--muted);font-size:13px">${k.slug}</div>
                    </div>
                    <span class=${`badge ${$(k.status)}`}>${k.status}</span>
                  </div>
                </a>
              `)}
            </div>
          </div>
        `}
    </div>
  </${Wt}>`}var rs=[{id:"overview",label:"\u{1F4CA} Overview",Component:Ou},{id:"setup",label:"\u{1F680} Setup",Component:qu},{id:"signups",label:"\u{1F465} Signups",Component:Hu},{id:"leaderboard",label:"\u{1F3C6} Leaderboard",Component:Fu},{id:"invitations",label:"\u{1F4EC} Invitations",Component:Uu},{id:"webhooks",label:"\u{1F517} Webhooks",Component:Vu},{id:"settings",label:"\u2699\uFE0F Settings",Component:Gu}];function Zu(){let e=()=>window.location.hash.slice(1)||"overview",[t,n]=X(e),[l,s]=X(""),[o,a]=X([]);pl(()=>{window.location.hash==="#access"&&window.location.replace("#invitations"),Te.getSettings().then(h=>s(h.name||Se)).catch(()=>{}),as.listCampaigns().then(h=>a(h)).catch(()=>{})},[]),pl(()=>{let h=()=>n(e());return window.addEventListener("hashchange",h),()=>window.removeEventListener("hashchange",h)},[]);let p=rs.find(h=>h.id===t)||rs[0];return S`<${Wt}>
    <div class="header">
      <a href="/dashboard/" style="display:flex;align-items:center;gap:8px;text-decoration:none"><img src="/assets/logo.svg" alt="EarlyPass" class="header-logo" /><span style="font-weight:700;font-size:16px;color:var(--primary)">EarlyPass</span></a>
      <div style="display:flex;align-items:center;gap:8px;margin-left:auto">
        ${o.length>1?S`
          <select
            value=${Se}
            onChange=${h=>{window.location.href=`/dashboard/${h.target.value}/`}}
            style="font-size:13px;padding:4px 8px;border:1px solid var(--border);border-radius:6px;background:var(--surface);color:var(--text)">
            ${o.map(h=>S`
              <option key=${h.slug} value=${h.slug}>${h.name}</option>
            `)}
          </select>
        `:S`
          <span class="header-campaign">${l||Se}</span>
        `}
        <a href="/dashboard/"
          style="font-size:12px;color:var(--muted);text-decoration:none;padding:4px 10px;border:1px solid var(--border);border-radius:6px;white-space:nowrap">
          ← All campaigns
        </a>
        <form method="POST" action="/dashboard/logout">
          <button class="btn btn-secondary btn-sm" type="submit">Sign out</button>
        </form>
      </div>
    </div>
    <div class="layout">
      <nav class="sidebar">
        ${rs.map(h=>S`
          <a key=${h.id}
            class=${`nav-item${t===h.id?" active":""}`}
            href=${`#${h.id}`}
            onClick=${()=>n(h.id)}>
            ${h.label}
          </a>
        `)}
      </nav>
      <main class="main-content">
        <${p.Component} />
      </main>
    </div>
  </${Wt}>`}Si(Ru?S`<${Ju} />`:S`<${Zu} />`,document.getElementById("app"));
