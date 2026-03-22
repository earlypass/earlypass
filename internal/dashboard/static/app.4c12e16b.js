var $a=Object.defineProperty,ka=Object.defineProperties;var Ca=Object.getOwnPropertyDescriptors;var Vs=Object.getOwnPropertySymbols;var Pa=Object.prototype.hasOwnProperty,Ta=Object.prototype.propertyIsEnumerable;var Ws=(e,t,n)=>t in e?$a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,De=(e,t)=>{for(var n in t||(t={}))Pa.call(t,n)&&Ws(e,n,t[n]);if(Vs)for(var n of Vs(t))Ta.call(t,n)&&Ws(e,n,t[n]);return e},Be=(e,t)=>ka(e,Ca(t));var An,me,Ys,Aa,Xt,Us,Ks,qs,Js,bi,_i,vi,Ea,Cn={},Pn=[],La=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,En=Array.isArray;function Vt(e,t){for(var n in t)e[n]=t[n];return e}function wi(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Ln(e,t,n){var l,s,o,a={};for(o in t)o=="key"?l=t[o]:o=="ref"?s=t[o]:a[o]=t[o];if(arguments.length>2&&(a.children=arguments.length>3?An.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)a[o]===void 0&&(a[o]=e.defaultProps[o]);return kn(e,a,l,s,null)}function kn(e,t,n,l,s){var o={type:e,props:t,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:s==null?++Ys:s,__i:-1,__u:0};return s==null&&me.vnode!=null&&me.vnode(o),o}function Mn(e){return e.children}function nn(e,t){this.props=e,this.context=t}function zl(e,t){if(t==null)return e.__?zl(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?zl(e):null}function Ma(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,l=[],s=[],o=Vt({},t);o.__v=t.__v+1,me.vnode&&me.vnode(o),xi(e.__P,o,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,l,n==null?zl(t):n,!!(32&t.__u),s),o.__v=t.__v,o.__.__k[o.__i]=o,eo(l,o,s),t.__e=t.__=null,o.__e!=n&&Zs(o)}}function Zs(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),Zs(e)}function Bs(e){(!e.__d&&(e.__d=!0)&&Xt.push(e)&&!Tn.__r++||Us!=me.debounceRendering)&&((Us=me.debounceRendering)||Ks)(Tn)}function Tn(){try{for(var e,t=1;Xt.length;)Xt.length>t&&Xt.sort(qs),e=Xt.shift(),t=Xt.length,Ma(e)}finally{Xt.length=Tn.__r=0}}function Qs(e,t,n,l,s,o,a,p,h,u,_){var f,g,y,S,A,E,k,b=l&&l.__k||Pn,R=t.length;for(h=Da(n,t,b,h,R),f=0;f<R;f++)(y=n.__k[f])!=null&&(g=y.__i!=-1&&b[y.__i]||Cn,y.__i=f,E=xi(e,y,g,s,o,a,p,h,u,_),S=y.__e,y.ref&&g.ref!=y.ref&&(g.ref&&Si(g.ref,null,y),_.push(y.ref,y.__c||S,y)),A==null&&S!=null&&(A=S),(k=!!(4&y.__u))||g.__k===y.__k?h=Xs(y,h,e,k):typeof y.type=="function"&&E!==void 0?h=E:S&&(h=S.nextSibling),y.__u&=-7);return n.__e=A,h}function Da(e,t,n,l,s){var o,a,p,h,u,_=n.length,f=_,g=0;for(e.__k=new Array(s),o=0;o<s;o++)(a=t[o])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=e.__k[o]=kn(null,a,null,null,null):En(a)?a=e.__k[o]=kn(Mn,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=e.__k[o]=kn(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[o]=a,h=o+g,a.__=e,a.__b=e.__b+1,p=null,(u=a.__i=Na(a,n,h,f))!=-1&&(f--,(p=n[u])&&(p.__u|=2)),p==null||p.__v==null?(u==-1&&(s>_?g--:s<_&&g++),typeof a.type!="function"&&(a.__u|=4)):u!=h&&(u==h-1?g--:u==h+1?g++:(u>h?g--:g++,a.__u|=4))):e.__k[o]=null;if(f)for(o=0;o<_;o++)(p=n[o])!=null&&(2&p.__u)==0&&(p.__e==l&&(l=zl(p)),lo(p,p));return l}function Xs(e,t,n,l){var s,o;if(typeof e.type=="function"){for(s=e.__k,o=0;s&&o<s.length;o++)s[o]&&(s[o].__=e,t=Xs(s[o],t,n,l));return t}e.__e!=t&&(l&&(t&&e.type&&!t.parentNode&&(t=zl(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Na(e,t,n,l){var s,o,a,p=e.key,h=e.type,u=t[n],_=u!=null&&(2&u.__u)==0;if(u===null&&p==null||_&&p==u.key&&h==u.type)return n;if(l>(_?1:0)){for(s=n-1,o=n+1;s>=0||o<t.length;)if((u=t[a=s>=0?s--:o++])!=null&&(2&u.__u)==0&&p==u.key&&h==u.type)return a}return-1}function Gs(e,t,n){t[0]=="-"?e.setProperty(t,n==null?"":n):e[t]=n==null?"":typeof n!="number"||La.test(t)?n:n+"px"}function $n(e,t,n,l,s){var o,a;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof l=="string"&&(e.style.cssText=l=""),l)for(t in l)n&&t in n||Gs(e.style,t,"");if(n)for(t in n)l&&n[t]==l[t]||Gs(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")o=t!=(t=t.replace(Js,"$1")),a=t.toLowerCase(),t=a in e||t=="onFocusOut"||t=="onFocusIn"?a.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?l?n.u=l.u:(n.u=bi,e.addEventListener(t,o?vi:_i,o)):e.removeEventListener(t,o?vi:_i,o);else{if(s=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n==null?"":n;break e}catch(p){}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function js(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=bi++;else if(t.t<n.u)return;return n(me.event?me.event(t):t)}}}function xi(e,t,n,l,s,o,a,p,h,u){var _,f,g,y,S,A,E,k,b,R,P,G,L,D,V,W=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(h=!!(32&n.__u),o=[p=t.__e=n.__e]),(_=me.__b)&&_(t);e:if(typeof W=="function")try{if(k=t.props,b=W.prototype&&W.prototype.render,R=(_=W.contextType)&&l[_.__c],P=_?R?R.props.value:_.__:l,n.__c?E=(f=t.__c=n.__c).__=f.__E:(b?t.__c=f=new W(k,P):(t.__c=f=new nn(k,P),f.constructor=W,f.render=Ia),R&&R.sub(f),f.state||(f.state={}),f.__n=l,g=f.__d=!0,f.__h=[],f._sb=[]),b&&f.__s==null&&(f.__s=f.state),b&&W.getDerivedStateFromProps!=null&&(f.__s==f.state&&(f.__s=Vt({},f.__s)),Vt(f.__s,W.getDerivedStateFromProps(k,f.__s))),y=f.props,S=f.state,f.__v=t,g)b&&W.getDerivedStateFromProps==null&&f.componentWillMount!=null&&f.componentWillMount(),b&&f.componentDidMount!=null&&f.__h.push(f.componentDidMount);else{if(b&&W.getDerivedStateFromProps==null&&k!==y&&f.componentWillReceiveProps!=null&&f.componentWillReceiveProps(k,P),t.__v==n.__v||!f.__e&&f.shouldComponentUpdate!=null&&f.shouldComponentUpdate(k,f.__s,P)===!1){t.__v!=n.__v&&(f.props=k,f.state=f.__s,f.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(B){B&&(B.__=t)}),Pn.push.apply(f.__h,f._sb),f._sb=[],f.__h.length&&a.push(f);break e}f.componentWillUpdate!=null&&f.componentWillUpdate(k,f.__s,P),b&&f.componentDidUpdate!=null&&f.__h.push(function(){f.componentDidUpdate(y,S,A)})}if(f.context=P,f.props=k,f.__P=e,f.__e=!1,G=me.__r,L=0,b)f.state=f.__s,f.__d=!1,G&&G(t),_=f.render(f.props,f.state,f.context),Pn.push.apply(f.__h,f._sb),f._sb=[];else do f.__d=!1,G&&G(t),_=f.render(f.props,f.state,f.context),f.state=f.__s;while(f.__d&&++L<25);f.state=f.__s,f.getChildContext!=null&&(l=Vt(Vt({},l),f.getChildContext())),b&&!g&&f.getSnapshotBeforeUpdate!=null&&(A=f.getSnapshotBeforeUpdate(y,S)),D=_!=null&&_.type===Mn&&_.key==null?to(_.props.children):_,p=Qs(e,En(D)?D:[D],t,n,l,s,o,a,p,h,u),f.base=t.__e,t.__u&=-161,f.__h.length&&a.push(f),E&&(f.__E=f.__=null)}catch(B){if(t.__v=null,h||o!=null)if(B.then){for(t.__u|=h?160:128;p&&p.nodeType==8&&p.nextSibling;)p=p.nextSibling;o[o.indexOf(p)]=null,t.__e=p}else{for(V=o.length;V--;)wi(o[V]);yi(t)}else t.__e=n.__e,t.__k=n.__k,B.then||yi(t);me.__e(B,t,n)}else o==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):p=t.__e=Ra(n.__e,t,n,l,s,o,a,h,u);return(_=me.diffed)&&_(t),128&t.__u?void 0:p}function yi(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(yi))}function eo(e,t,n){for(var l=0;l<n.length;l++)Si(n[l],n[++l],n[++l]);me.__c&&me.__c(t,e),e.some(function(s){try{e=s.__h,s.__h=[],e.some(function(o){o.call(s)})}catch(o){me.__e(o,s.__v)}})}function to(e){return typeof e!="object"||e==null||e.__b>0?e:En(e)?e.map(to):Vt({},e)}function Ra(e,t,n,l,s,o,a,p,h){var u,_,f,g,y,S,A,E=n.props||Cn,k=t.props,b=t.type;if(b=="svg"?s="http://www.w3.org/2000/svg":b=="math"?s="http://www.w3.org/1998/Math/MathML":s||(s="http://www.w3.org/1999/xhtml"),o!=null){for(u=0;u<o.length;u++)if((y=o[u])&&"setAttribute"in y==!!b&&(b?y.localName==b:y.nodeType==3)){e=y,o[u]=null;break}}if(e==null){if(b==null)return document.createTextNode(k);e=document.createElementNS(s,b,k.is&&k),p&&(me.__m&&me.__m(t,o),p=!1),o=null}if(b==null)E===k||p&&e.data==k||(e.data=k);else{if(o=o&&An.call(e.childNodes),!p&&o!=null)for(E={},u=0;u<e.attributes.length;u++)E[(y=e.attributes[u]).name]=y.value;for(u in E)y=E[u],u=="dangerouslySetInnerHTML"?f=y:u=="children"||u in k||u=="value"&&"defaultValue"in k||u=="checked"&&"defaultChecked"in k||$n(e,u,null,y,s);for(u in k)y=k[u],u=="children"?g=y:u=="dangerouslySetInnerHTML"?_=y:u=="value"?S=y:u=="checked"?A=y:p&&typeof y!="function"||E[u]===y||$n(e,u,y,E[u],s);if(_)p||f&&(_.__html==f.__html||_.__html==e.innerHTML)||(e.innerHTML=_.__html),t.__k=[];else if(f&&(e.innerHTML=""),Qs(t.type=="template"?e.content:e,En(g)?g:[g],t,n,l,b=="foreignObject"?"http://www.w3.org/1999/xhtml":s,o,a,o?o[0]:n.__k&&zl(n,0),p,h),o!=null)for(u=o.length;u--;)wi(o[u]);p||(u="value",b=="progress"&&S==null?e.removeAttribute("value"):S!=null&&(S!==e[u]||b=="progress"&&!S||b=="option"&&S!=E[u])&&$n(e,u,S,E[u],s),u="checked",A!=null&&A!=e[u]&&$n(e,u,A,E[u],s))}return e}function Si(e,t,n){try{if(typeof e=="function"){var l=typeof e.__u=="function";l&&e.__u(),l&&t==null||(e.__u=e(t))}else e.current=t}catch(s){me.__e(s,n)}}function lo(e,t,n){var l,s;if(me.unmount&&me.unmount(e),(l=e.ref)&&(l.current&&l.current!=e.__e||Si(l,null,t)),(l=e.__c)!=null){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(o){me.__e(o,t)}l.base=l.__P=null}if(l=e.__k)for(s=0;s<l.length;s++)l[s]&&lo(l[s],t,n||typeof e.type!="function");n||wi(e.__e),e.__c=e.__=e.__e=void 0}function Ia(e,t,n){return this.constructor(e,n)}function $i(e,t,n){var l,s,o,a;t==document&&(t=document.documentElement),me.__&&me.__(e,t),s=(l=typeof n=="function")?null:n&&n.__k||t.__k,o=[],a=[],xi(t,e=(!l&&n||t).__k=Ln(Mn,null,[e]),s||Cn,Cn,t.namespaceURI,!l&&n?[n]:s?null:t.firstChild?An.call(t.childNodes):null,o,!l&&n?n:s?s.__e:t.firstChild,l,a),eo(o,e,a)}An=Pn.slice,me={__e:function(e,t,n,l){for(var s,o,a;t=t.__;)if((s=t.__c)&&!s.__)try{if((o=s.constructor)&&o.getDerivedStateFromError!=null&&(s.setState(o.getDerivedStateFromError(e)),a=s.__d),s.componentDidCatch!=null&&(s.componentDidCatch(e,l||{}),a=s.__d),a)return s.__E=s}catch(p){e=p}throw e}},Ys=0,Aa=function(e){return e!=null&&e.constructor===void 0},nn.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Vt({},this.state),typeof e=="function"&&(e=e(Vt({},n),this.props)),e&&Vt(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Bs(this))},nn.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Bs(this))},nn.prototype.render=Mn,Xt=[],Ks=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,qs=function(e,t){return e.__v.__b-t.__v.__b},Tn.__r=0,Js=/(PointerCapture)$|Capture$/i,bi=0,_i=js(!1),vi=js(!0),Ea=0;var sn,Pe,ki,no,on=0,fo=[],Ee=me,io=Ee.__b,so=Ee.__r,oo=Ee.diffed,ro=Ee.__c,ao=Ee.unmount,co=Ee.__;function Pi(e,t){Ee.__h&&Ee.__h(Pe,e,on||t),on=0;var n=Pe.__H||(Pe.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function X(e){return on=1,za(mo,e)}function za(e,t,n){var l=Pi(sn++,2);if(l.t=e,!l.__c&&(l.__=[n?n(t):mo(void 0,t),function(p){var h=l.__N?l.__N[0]:l.__[0],u=l.t(h,p);h!==u&&(l.__N=[u,l.__[1]],l.__c.setState({}))}],l.__c=Pe,!Pe.__f)){var s=function(p,h,u){if(!l.__c.__H)return!0;var _=l.__c.__H.__.filter(function(g){return g.__c});if(_.every(function(g){return!g.__N}))return!o||o.call(this,p,h,u);var f=l.__c.props!==p;return _.some(function(g){if(g.__N){var y=g.__[0];g.__=g.__N,g.__N=void 0,y!==g.__[0]&&(f=!0)}}),o&&o.call(this,p,h,u)||f};Pe.__f=!0;var o=Pe.shouldComponentUpdate,a=Pe.componentWillUpdate;Pe.componentWillUpdate=function(p,h,u){if(this.__e){var _=o;o=void 0,s(p,h,u),o=_}a&&a.call(this,p,h,u)},Pe.shouldComponentUpdate=s}return l.__N||l.__}function fl(e,t){var n=Pi(sn++,3);!Ee.__s&&go(n.__H,t)&&(n.__=e,n.u=t,Pe.__H.__h.push(n))}function Ti(e){return on=5,po(function(){return{current:e}},[])}function po(e,t){var n=Pi(sn++,7);return go(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function ho(e,t){return on=8,po(function(){return e},t)}function Ha(){for(var e;e=fo.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(Dn),t.__h.some(Ci),t.__h=[]}catch(n){t.__h=[],Ee.__e(n,e.__v)}}}Ee.__b=function(e){Pe=null,io&&io(e)},Ee.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),co&&co(e,t)},Ee.__r=function(e){so&&so(e),sn=0;var t=(Pe=e.__c).__H;t&&(ki===Pe?(t.__h=[],Pe.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.some(Dn),t.__h.some(Ci),t.__h=[],sn=0)),ki=Pe},Ee.diffed=function(e){oo&&oo(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(fo.push(t)!==1&&no===Ee.requestAnimationFrame||((no=Ee.requestAnimationFrame)||Oa)(Ha)),t.__H.__.some(function(n){n.u&&(n.__H=n.u),n.u=void 0})),ki=Pe=null},Ee.__c=function(e,t){t.some(function(n){try{n.__h.some(Dn),n.__h=n.__h.filter(function(l){return!l.__||Ci(l)})}catch(l){t.some(function(s){s.__h&&(s.__h=[])}),t=[],Ee.__e(l,n.__v)}}),ro&&ro(e,t)},Ee.unmount=function(e){ao&&ao(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(l){try{Dn(l)}catch(s){t=s}}),n.__H=void 0,t&&Ee.__e(t,n.__v))};var uo=typeof requestAnimationFrame=="function";function Oa(e){var t,n=function(){clearTimeout(l),uo&&cancelAnimationFrame(t),setTimeout(e)},l=setTimeout(n,35);uo&&(t=requestAnimationFrame(n))}function Dn(e){var t=Pe,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),Pe=t}function Ci(e){var t=Pe;e.__c=e.__(),Pe=t}function go(e,t){return!e||e.length!==t.length||t.some(function(n,l){return n!==e[l]})}function mo(e,t){return typeof t=="function"?t(e):t}var vo=function(e,t,n,l){var s;t[0]=0;for(var o=1;o<t.length;o++){var a=t[o++],p=t[o]?(t[0]|=a?1:2,n[t[o++]]):t[++o];a===3?l[0]=p:a===4?l[1]=Object.assign(l[1]||{},p):a===5?(l[1]=l[1]||{})[t[++o]]=p:a===6?l[1][t[++o]]+=p+"":a?(s=e.apply(p,vo(e,p,n,["",null])),l.push(s),p[0]?t[0]|=2:(t[o-2]=0,t[o]=s)):l.push(p)}return l},_o=new Map;function yo(e){var t=_o.get(this);return t||(t=new Map,_o.set(this,t)),(t=vo(this,t.get(e)||(t.set(e,t=(function(n){for(var l,s,o=1,a="",p="",h=[0],u=function(g){o===1&&(g||(a=a.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?h.push(0,g,a):o===3&&(g||a)?(h.push(3,g,a),o=2):o===2&&a==="..."&&g?h.push(4,g,0):o===2&&a&&!g?h.push(5,0,!0,a):o>=5&&((a||!g&&o===5)&&(h.push(o,0,a,s),o=6),g&&(h.push(o,g,0,s),o=6)),a=""},_=0;_<n.length;_++){_&&(o===1&&u(),u(_));for(var f=0;f<n[_].length;f++)l=n[_][f],o===1?l==="<"?(u(),h=[h],o=3):a+=l:o===4?a==="--"&&l===">"?(o=1,a=""):a=l+a[0]:p?l===p?p="":a+=l:l==='"'||l==="'"?p=l:l===">"?(u(),o=1):o&&(l==="="?(o=5,s=a,a=""):l==="/"&&(o<5||n[_][f+1]===">")?(u(),o===3&&(h=h[0]),o=h,(h=h[0]).push(2,0,o),o=0):l===" "||l==="	"||l===`
`||l==="\r"?(u(),o=2):a+=l),o===3&&a==="!--"&&(o=4,h=h[0])}return u(),h})(e)),t),arguments,[])).length>1?t:t[0]}var $=yo.bind(Ln);var Fa="uplot",Va="u-hz",Wa="u-vt",Ua="u-title",Ba="u-wrap",Ga="u-under",ja="u-over",Ya="u-axis",hl="u-off",Ka="u-select",qa="u-cursor-x",Ja="u-cursor-y",Za="u-cursor-pt",Qa="u-legend",Xa="u-live",ec="u-inline",tc="u-series",lc="u-marker",bo="u-label",nc="u-value",an="width",cn="height";var wo="bottom",Hl="left",Ai="right",ji="#000",xo=ji+"0",Ei="mousemove",So="mousedown",Li="mouseup",$o="mouseenter",ko="mouseleave",Co="dblclick",ic="resize",sc="scroll",Po="change",Hn="dppxchange",Yi="--",Gl=typeof window!="undefined",Ii=Gl?document:null,Fl=Gl?window:null,oc=Gl?navigator:null,ce,Nn;function zi(){let e=devicePixelRatio;ce!=e&&(ce=e,Nn&&Oi(Po,Nn,zi),Nn=matchMedia(`(min-resolution: ${ce-.001}dppx) and (max-resolution: ${ce+.001}dppx)`),gl(Po,Nn,zi),Fl.dispatchEvent(new CustomEvent(Hn)))}function ut(e,t){if(t!=null){let n=e.classList;!n.contains(t)&&n.add(t)}}function Hi(e,t){let n=e.classList;n.contains(t)&&n.remove(t)}function be(e,t,n){e.style[t]=n+"px"}function Pt(e,t,n,l){let s=Ii.createElement(e);return t!=null&&ut(s,t),n!=null&&n.insertBefore(s,l),s}function bt(e,t){return Pt("div",e,t)}var To=new WeakMap;function zt(e,t,n,l,s){let o="translate("+t+"px,"+n+"px)",a=To.get(e);o!=a&&(e.style.transform=o,To.set(e,o),t<0||n<0||t>l||n>s?ut(e,hl):Hi(e,hl))}var Ao=new WeakMap;function Eo(e,t,n){let l=t+n,s=Ao.get(e);l!=s&&(Ao.set(e,l),e.style.background=t,e.style.borderColor=n)}var Lo=new WeakMap;function Mo(e,t,n,l){let s=t+""+n,o=Lo.get(e);s!=o&&(Lo.set(e,s),e.style.height=n+"px",e.style.width=t+"px",e.style.marginLeft=l?-t/2+"px":0,e.style.marginTop=l?-n/2+"px":0)}var Ki={passive:!0},rc=Be(De({},Ki),{capture:!0});function gl(e,t,n,l){t.addEventListener(e,n,l?rc:Ki)}function Oi(e,t,n,l){t.removeEventListener(e,n,Ki)}Gl&&zi();function Tt(e,t,n,l){let s;n=n||0,l=l||t.length-1;let o=l<=2147483647;for(;l-n>1;)s=o?n+l>>1:ft((n+l)/2),t[s]<e?n=s:l=s;return e-t[n]<=t[l]-e?n:l}function or(e){return(n,l,s)=>{let o=-1,a=-1;for(let p=l;p<=s;p++)if(e(n[p])){o=p;break}for(let p=s;p>=l;p--)if(e(n[p])){a=p;break}return[o,a]}}var rr=e=>e!=null,ar=e=>e!=null&&e>0,Vn=or(rr),ac=or(ar);function cc(e,t,n,l=0,s=!1){let o=s?ac:Vn,a=s?ar:rr;[t,n]=o(e,t,n);let p=e[t],h=e[t];if(t>-1)if(l==1)p=e[t],h=e[n];else if(l==-1)p=e[n],h=e[t];else for(let u=t;u<=n;u++){let _=e[u];a(_)&&(_<p?p=_:_>h&&(h=_))}return[p!=null?p:he,h!=null?h:-he]}function Wn(e,t,n,l){let s=Ro(e),o=Ro(t);e==t&&(s==-1?(e*=n,t/=n):(e/=n,t*=n));let a=n==10?Wt:cr,p=s==1?ft:wt,h=o==1?wt:ft,u=p(a(Re(e))),_=h(a(Re(t))),f=Vl(n,u),g=Vl(n,_);return n==10&&(u<0&&(f=ge(f,-u)),_<0&&(g=ge(g,-_))),l||n==2?(e=f*s,t=g*o):(e=pr(e,f),t=Un(t,g)),[e,t]}function qi(e,t,n,l){let s=Wn(e,t,n,l);return e==0&&(s[0]=0),t==0&&(s[1]=0),s}var Ji=.1,Do={mode:3,pad:Ji},fn={pad:0,soft:null,mode:0},uc={min:fn,max:fn};function On(e,t,n,l){return Bn(n)?No(e,t,n):(fn.pad=n,fn.soft=l?0:null,fn.mode=l?3:0,No(e,t,uc))}function re(e,t){return e==null?t:e}function fc(e,t,n){for(t=re(t,0),n=re(n,e.length-1);t<=n;){if(e[t]!=null)return!0;t++}return!1}function No(e,t,n){let l=n.min,s=n.max,o=re(l.pad,0),a=re(s.pad,0),p=re(l.hard,-he),h=re(s.hard,he),u=re(l.soft,he),_=re(s.soft,-he),f=re(l.mode,0),g=re(s.mode,0),y=t-e,S=Wt(y),A=tt(Re(e),Re(t)),E=Wt(A),k=Re(E-S);(y<1e-24||k>10)&&(y=0,(e==0||t==0)&&(y=1e-24,f==2&&u!=he&&(o=0),g==2&&_!=-he&&(a=0)));let b=y||A||1e3,R=Wt(b),P=Vl(10,ft(R)),G=b*(y==0?e==0?.1:1:o),L=ge(pr(e-G,P/10),24),D=e>=u&&(f==1||f==3&&L<=u||f==2&&L>=u)?u:he,V=tt(p,L<D&&e>=D?D:At(D,L)),W=b*(y==0?t==0?.1:1:a),B=ge(Un(t+W,P/10),24),x=t<=_&&(g==1||g==3&&B>=_||g==2&&B<=_)?_:-he,Y=At(h,B>x&&t<=x?x:tt(x,B));return V==Y&&V==0&&(Y=100),[V,Y]}var dc=new Intl.NumberFormat(Gl?oc.language:"en-US"),Zi=e=>dc.format(e),dt=Math,zn=dt.PI,Re=dt.abs,ft=dt.floor,Ne=dt.round,wt=dt.ceil,At=dt.min,tt=dt.max,Vl=dt.pow,Ro=dt.sign,Wt=dt.log10,cr=dt.log2,pc=(e,t=1)=>dt.sinh(e)*t,Mi=(e,t=1)=>dt.asinh(e/t),he=1/0;function Io(e){return(Wt((e^e>>31)-(e>>31))|0)+1}function Fi(e,t,n){return At(tt(e,t),n)}function ur(e){return typeof e=="function"}function te(e){return ur(e)?e:()=>e}var hc=()=>{},fr=e=>e,dr=(e,t)=>t,gc=e=>null,zo=e=>!0,Ho=(e,t)=>e==t,mc=/\.\d*?(?=9{6,}|0{6,})/gm,ml=e=>{if(gr(e)||tl.has(e))return e;let t=`${e}`,n=t.match(mc);if(n==null)return e;let l=n[0].length-1;if(t.indexOf("e-")!=-1){let[s,o]=t.split("e");return+`${ml(s)}e${o}`}return ge(e,l)};function dl(e,t){return ml(ge(ml(e/t))*t)}function Un(e,t){return ml(wt(ml(e/t))*t)}function pr(e,t){return ml(ft(ml(e/t))*t)}function ge(e,t=0){if(gr(e))return e;let n=10**t,l=e*n*(1+Number.EPSILON);return Ne(l)/n}var tl=new Map;function hr(e){return((""+e).split(".")[1]||"").length}function pn(e,t,n,l){let s=[],o=l.map(hr);for(let a=t;a<n;a++){let p=Re(a),h=ge(Vl(e,a),p);for(let u=0;u<l.length;u++){let _=e==10?+`${l[u]}e${a}`:l[u]*h,f=(a>=0?0:p)+(a>=o[u]?0:o[u]),g=e==10?_:ge(_,f);s.push(g),tl.set(g,f)}}return s}var dn={},Qi=[],Wl=[null,null],el=Array.isArray,gr=Number.isInteger,_c=e=>e===void 0;function Oo(e){return typeof e=="string"}function Bn(e){let t=!1;if(e!=null){let n=e.constructor;t=n==null||n==Object}return t}function vc(e){return e!=null&&typeof e=="object"}var yc=Object.getPrototypeOf(Uint8Array),mr="__proto__";function Ul(e,t=Bn){let n;if(el(e)){let l=e.find(s=>s!=null);if(el(l)||t(l)){n=Array(e.length);for(let s=0;s<e.length;s++)n[s]=Ul(e[s],t)}else n=e.slice()}else if(e instanceof yc)n=e.slice();else if(t(e)){n={};for(let l in e)l!=mr&&(n[l]=Ul(e[l],t))}else n=e;return n}function Le(e){let t=arguments;for(let n=1;n<t.length;n++){let l=t[n];for(let s in l)s!=mr&&(Bn(e[s])?Le(e[s],Ul(l[s])):e[s]=Ul(l[s]))}return e}var bc=0,wc=1,xc=2;function Sc(e,t,n){for(let l=0,s,o=-1;l<t.length;l++){let a=t[l];if(a>o){for(s=a-1;s>=0&&e[s]==null;)e[s--]=null;for(s=a+1;s<n&&e[s]==null;)e[o=s++]=null}}}function $c(e,t){if(Pc(e)){let a=e[0].slice();for(let p=1;p<e.length;p++)a.push(...e[p].slice(1));return Tc(a[0])||(a=Cc(a)),a}let n=new Set;for(let a=0;a<e.length;a++){let h=e[a][0],u=h.length;for(let _=0;_<u;_++)n.add(h[_])}let l=[Array.from(n).sort((a,p)=>a-p)],s=l[0].length,o=new Map;for(let a=0;a<s;a++)o.set(l[0][a],a);for(let a=0;a<e.length;a++){let p=e[a],h=p[0];for(let u=1;u<p.length;u++){let _=p[u],f=Array(s).fill(void 0),g=t?t[a][u]:wc,y=[];for(let S=0;S<_.length;S++){let A=_[S],E=o.get(h[S]);A===null?g!=bc&&(f[E]=A,g==xc&&y.push(E)):f[E]=A}Sc(f,y,s),l.push(f)}}return l}var kc=typeof queueMicrotask=="undefined"?e=>Promise.resolve().then(e):queueMicrotask;function Cc(e){let t=e[0],n=t.length,l=Array(n);for(let o=0;o<l.length;o++)l[o]=o;l.sort((o,a)=>t[o]-t[a]);let s=[];for(let o=0;o<e.length;o++){let a=e[o],p=Array(n);for(let h=0;h<n;h++)p[h]=a[l[h]];s.push(p)}return s}function Pc(e){let t=e[0][0],n=t.length;for(let l=1;l<e.length;l++){let s=e[l][0];if(s.length!=n)return!1;if(s!=t){for(let o=0;o<n;o++)if(s[o]!=t[o])return!1}}return!0}function Tc(e,t=100){let n=e.length;if(n<=1)return!0;let l=0,s=n-1;for(;l<=s&&e[l]==null;)l++;for(;s>=l&&e[s]==null;)s--;if(s<=l)return!0;let o=tt(1,ft((s-l+1)/t));for(let a=e[l],p=l+o;p<=s;p+=o){let h=e[p];if(h!=null){if(h<=a)return!1;a=h}}return!0}var _r=["January","February","March","April","May","June","July","August","September","October","November","December"],vr=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function yr(e){return e.slice(0,3)}var Ac=vr.map(yr),Ec=_r.map(yr),Lc={MMMM:_r,MMM:Ec,WWWW:vr,WWW:Ac};function rn(e){return(e<10?"0":"")+e}function Mc(e){return(e<10?"00":e<100?"0":"")+e}var Dc={YYYY:e=>e.getFullYear(),YY:e=>(e.getFullYear()+"").slice(2),MMMM:(e,t)=>t.MMMM[e.getMonth()],MMM:(e,t)=>t.MMM[e.getMonth()],MM:e=>rn(e.getMonth()+1),M:e=>e.getMonth()+1,DD:e=>rn(e.getDate()),D:e=>e.getDate(),WWWW:(e,t)=>t.WWWW[e.getDay()],WWW:(e,t)=>t.WWW[e.getDay()],HH:e=>rn(e.getHours()),H:e=>e.getHours(),h:e=>{let t=e.getHours();return t==0?12:t>12?t-12:t},AA:e=>e.getHours()>=12?"PM":"AM",aa:e=>e.getHours()>=12?"pm":"am",a:e=>e.getHours()>=12?"p":"a",mm:e=>rn(e.getMinutes()),m:e=>e.getMinutes(),ss:e=>rn(e.getSeconds()),s:e=>e.getSeconds(),fff:e=>Mc(e.getMilliseconds())};function Xi(e,t){t=t||Lc;let n=[],l=/\{([a-z]+)\}|[^{]+/gi,s;for(;s=l.exec(e);)n.push(s[0][0]=="{"?Dc[s[1]]:s[0]);return o=>{let a="";for(let p=0;p<n.length;p++)a+=typeof n[p]=="string"?n[p]:n[p](o,t);return a}}var Nc=new Intl.DateTimeFormat().resolvedOptions().timeZone;function Rc(e,t){let n;return t=="UTC"||t=="Etc/UTC"?n=new Date(+e+e.getTimezoneOffset()*6e4):t==Nc?n=e:(n=new Date(e.toLocaleString("en-US",{timeZone:t})),n.setMilliseconds(e.getMilliseconds())),n}var br=e=>e%1==0,Fn=[1,2,2.5,5],Ic=pn(10,-32,0,Fn),wr=pn(10,0,32,Fn),zc=wr.filter(br),pl=Ic.concat(wr),es=`
`,xr="{YYYY}",Fo=es+xr,Sr="{M}/{D}",un=es+Sr,Rn=un+"/{YY}",$r="{aa}",Hc="{h}:{mm}",Ol=Hc+$r,Vo=es+Ol,Wo=":{ss}",ue=null;function kr(e){let t=e*1e3,n=t*60,l=n*60,s=l*24,o=s*30,a=s*365,h=(e==1?pn(10,0,3,Fn).filter(br):pn(10,-3,0,Fn)).concat([t,t*5,t*10,t*15,t*30,n,n*5,n*10,n*15,n*30,l,l*2,l*3,l*4,l*6,l*8,l*12,s,s*2,s*3,s*4,s*5,s*6,s*7,s*8,s*9,s*10,s*15,o,o*2,o*3,o*4,o*6,a,a*2,a*5,a*10,a*25,a*50,a*100]),u=[[a,xr,ue,ue,ue,ue,ue,ue,1],[s*28,"{MMM}",Fo,ue,ue,ue,ue,ue,1],[s,Sr,Fo,ue,ue,ue,ue,ue,1],[l,"{h}"+$r,Rn,ue,un,ue,ue,ue,1],[n,Ol,Rn,ue,un,ue,ue,ue,1],[t,Wo,Rn+" "+Ol,ue,un+" "+Ol,ue,Vo,ue,1],[e,Wo+".{fff}",Rn+" "+Ol,ue,un+" "+Ol,ue,Vo,ue,1]];function _(f){return(g,y,S,A,E,k)=>{let b=[],R=E>=a,P=E>=o&&E<a,G=f(S),L=ge(G*e,3),D=Di(G.getFullYear(),R?0:G.getMonth(),P||R?1:G.getDate()),V=ge(D*e,3);if(P||R){let W=P?E/o:0,B=R?E/a:0,x=L==V?L:ge(Di(D.getFullYear()+B,D.getMonth()+W,1)*e,3),Y=new Date(Ne(x/e)),H=Y.getFullYear(),K=Y.getMonth();for(let U=0;x<=A;U++){let le=Di(H+B*U,K+W*U,1),F=le-f(ge(le*e,3));x=ge((+le+F)*e,3),x<=A&&b.push(x)}}else{let W=E>=s?s:E,B=ft(S)-ft(L),x=V+B+Un(L-V,W);b.push(x);let Y=f(x),H=Y.getHours()+Y.getMinutes()/n+Y.getSeconds()/l,K=E/l,U=g.axes[y]._space,le=k/U;for(;x=ge(x+E,e==1?0:3),!(x>A);)if(K>1){let F=ft(ge(H+K,6))%24,ne=f(x).getHours()-F;ne>1&&(ne=-1),x-=ne*l,H=(H+K)%24;let fe=b[b.length-1];ge((x-fe)/E,3)*le>=.7&&b.push(x)}else b.push(x)}return b}}return[h,u,_]}var[Oc,Fc,Vc]=kr(1),[Wc,Uc,Bc]=kr(.001);pn(2,-53,53,[1]);function Uo(e,t){return e.map(n=>n.map((l,s)=>s==0||s==8||l==null?l:t(s==1||n[8]==0?l:n[1]+l)))}function Bo(e,t){return(n,l,s,o,a)=>{let p=t.find(S=>a>=S[0])||t[t.length-1],h,u,_,f,g,y;return l.map(S=>{let A=e(S),E=A.getFullYear(),k=A.getMonth(),b=A.getDate(),R=A.getHours(),P=A.getMinutes(),G=A.getSeconds(),L=E!=h&&p[2]||k!=u&&p[3]||b!=_&&p[4]||R!=f&&p[5]||P!=g&&p[6]||G!=y&&p[7]||p[1];return h=E,u=k,_=b,f=R,g=P,y=G,L(A)})}}function Gc(e,t){let n=Xi(t);return(l,s,o,a,p)=>s.map(h=>n(e(h)))}function Di(e,t,n){return new Date(e,t,n)}function Go(e,t){return t(e)}var jc="{YYYY}-{MM}-{DD} {h}:{mm}{aa}";function jo(e,t){return(n,l,s,o)=>o==null?Yi:t(e(l))}function Yc(e,t){let n=e.series[t];return n.width?n.stroke(e,t):n.points.width?n.points.stroke(e,t):null}function Kc(e,t){return e.series[t].fill(e,t)}var qc={show:!0,live:!0,isolate:!1,mount:hc,markers:{show:!0,width:2,stroke:Yc,fill:Kc,dash:"solid"},idx:null,idxs:null,values:[]};function Jc(e,t){let n=e.cursor.points,l=bt(),s=n.size(e,t);be(l,an,s),be(l,cn,s);let o=s/-2;be(l,"marginLeft",o),be(l,"marginTop",o);let a=n.width(e,t,s);return a&&be(l,"borderWidth",a),l}function Zc(e,t){let n=e.series[t].points;return n._fill||n._stroke}function Qc(e,t){let n=e.series[t].points;return n._stroke||n._fill}function Xc(e,t){return e.series[t].points.size}var Ni=[0,0];function eu(e,t,n){return Ni[0]=t,Ni[1]=n,Ni}function In(e,t,n,l=!0){return s=>{s.button==0&&(!l||s.target==t)&&n(s)}}function Ri(e,t,n,l=!0){return s=>{(!l||s.target==t)&&n(s)}}var tu={show:!0,x:!0,y:!0,lock:!1,move:eu,points:{one:!1,show:Jc,size:Xc,width:0,stroke:Qc,fill:Zc},bind:{mousedown:In,mouseup:In,click:In,dblclick:In,mousemove:Ri,mouseleave:Ri,mouseenter:Ri},drag:{setScale:!0,x:!0,y:!1,dist:0,uni:null,click:(e,t)=>{t.stopPropagation(),t.stopImmediatePropagation()},_x:!1,_y:!1},focus:{dist:(e,t,n,l,s)=>l-s,prox:-1,bias:0},hover:{skip:[void 0],prox:null,bias:0},left:-10,top:-10,idx:null,dataIdx:null,idxs:null,event:null},Cr={show:!0,stroke:"rgba(0,0,0,0.07)",width:2},ts=Le({},Cr,{filter:dr}),Pr=Le({},ts,{size:10}),Tr=Le({},Cr,{show:!1}),ls='12px system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',Ar="bold "+ls,Er=1.5,Yo={show:!0,scale:"x",stroke:ji,space:50,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:Ar,side:2,grid:ts,ticks:Pr,border:Tr,font:ls,lineGap:Er,rotate:0},lu="Value",nu="Time",Ko={show:!0,scale:"x",auto:!1,sorted:1,min:he,max:-he,idxs:[]};function iu(e,t,n,l,s){return t.map(o=>o==null?"":Zi(o))}function su(e,t,n,l,s,o,a){let p=[],h=tl.get(s)||0;n=a?n:ge(Un(n,s),h);for(let u=n;u<=l;u=ge(u+s,h))p.push(Object.is(u,-0)?0:u);return p}function Vi(e,t,n,l,s,o,a){let p=[],h=e.scales[e.axes[t].scale].log,u=h==10?Wt:cr,_=ft(u(n));s=Vl(h,_),h==10&&(s=pl[Tt(s,pl)]);let f=n,g=s*h;h==10&&(g=pl[Tt(g,pl)]);do p.push(f),f=f+s,h==10&&!tl.has(f)&&(f=ge(f,tl.get(s))),f>=g&&(s=f,g=s*h,h==10&&(g=pl[Tt(g,pl)]));while(f<=l);return p}function ou(e,t,n,l,s,o,a){let h=e.scales[e.axes[t].scale].asinh,u=l>h?Vi(e,t,tt(h,n),l,s):[h],_=l>=0&&n<=0?[0]:[];return(n<-h?Vi(e,t,tt(h,-l),-n,s):[h]).reverse().map(g=>-g).concat(_,u)}var Lr=/./,ru=/[12357]/,au=/[125]/,qo=/1/,Wi=(e,t,n,l)=>e.map((s,o)=>t==4&&s==0||o%l==0&&n.test(s.toExponential()[s<0?1:0])?s:null);function cu(e,t,n,l,s){let o=e.axes[n],a=o.scale,p=e.scales[a],h=e.valToPos,u=o._space,_=h(10,a),f=h(9,a)-_>=u?Lr:h(7,a)-_>=u?ru:h(5,a)-_>=u?au:qo;if(f==qo){let g=Re(h(1,a)-_);if(g<u)return Wi(t.slice().reverse(),p.distr,f,wt(u/g)).reverse()}return Wi(t,p.distr,f,1)}function uu(e,t,n,l,s){let o=e.axes[n],a=o.scale,p=o._space,h=e.valToPos,u=Re(h(1,a)-h(2,a));return u<p?Wi(t.slice().reverse(),3,Lr,wt(p/u)).reverse():t}function fu(e,t,n,l){return l==null?Yi:t==null?"":Zi(t)}var Jo={show:!0,scale:"y",stroke:ji,space:30,gap:5,alignTo:1,size:50,labelGap:0,labelSize:30,labelFont:Ar,side:3,grid:ts,ticks:Pr,border:Tr,font:ls,lineGap:Er,rotate:0};function du(e,t){let n=3+(e||1)*2;return ge(n*t,3)}function pu(e,t){let{scale:n,idxs:l}=e.series[0],s=e._data[0],o=e.valToPos(s[l[0]],n,!0),a=e.valToPos(s[l[1]],n,!0),p=Re(a-o),h=e.series[t],u=p/(h.points.space*ce);return l[1]-l[0]<=u}var Zo={scale:null,auto:!0,sorted:0,min:he,max:-he},Mr=(e,t,n,l,s)=>s,Qo={show:!0,auto:!0,sorted:0,gaps:Mr,alpha:1,facets:[Le({},Zo,{scale:"x"}),Le({},Zo,{scale:"y"})]},Xo={scale:"y",auto:!0,sorted:0,show:!0,spanGaps:!1,gaps:Mr,alpha:1,points:{show:pu,filter:null},values:null,min:he,max:-he,idxs:[],path:null,clip:null};function hu(e,t,n,l,s){return n/10}var Dr={time:!0,auto:!0,distr:1,log:10,asinh:1,min:null,max:null,dir:1,ori:0},gu=Le({},Dr,{time:!1,ori:1}),er={};function Nr(e,t){let n=er[e];return n||(n={key:e,plots:[],sub(l){n.plots.push(l)},unsub(l){n.plots=n.plots.filter(s=>s!=l)},pub(l,s,o,a,p,h,u){for(let _=0;_<n.plots.length;_++)n.plots[_]!=s&&n.plots[_].pub(l,s,o,a,p,h,u)}},e!=null&&(er[e]=n)),n}var Bl=1,Ui=2;function _l(e,t,n){let l=e.mode,s=e.series[t],o=l==2?e._data[t]:e._data,a=e.scales,p=e.bbox,h=o[0],u=l==2?o[1]:o[t],_=l==2?a[s.facets[0].scale]:a[e.series[0].scale],f=l==2?a[s.facets[1].scale]:a[s.scale],g=p.left,y=p.top,S=p.width,A=p.height,E=e.valToPosH,k=e.valToPosV;return _.ori==0?n(s,h,u,_,f,E,k,g,y,S,A,jn,jl,Kn,Ir,Hr):n(s,h,u,_,f,k,E,y,g,A,S,Yn,Yl,ss,zr,Or)}function ns(e,t){let n=0,l=0,s=re(e.bands,Qi);for(let o=0;o<s.length;o++){let a=s[o];a.series[0]==t?n=a.dir:a.series[1]==t&&(a.dir==1?l|=1:l|=2)}return[n,l==1?-1:l==2?1:l==3?2:0]}function mu(e,t,n,l,s){let o=e.mode,a=e.series[t],p=o==2?a.facets[1].scale:a.scale,h=e.scales[p];return s==-1?h.min:s==1?h.max:h.distr==3?h.dir==1?h.min:h.max:0}function Ut(e,t,n,l,s,o){return _l(e,t,(a,p,h,u,_,f,g,y,S,A,E)=>{let k=a.pxRound,b=u.dir*(u.ori==0?1:-1),R=u.ori==0?jl:Yl,P,G;b==1?(P=n,G=l):(P=l,G=n);let L=k(f(p[P],u,A,y)),D=k(g(h[P],_,E,S)),V=k(f(p[G],u,A,y)),W=k(g(o==1?_.max:_.min,_,E,S)),B=new Path2D(s);return R(B,V,W),R(B,L,W),R(B,L,D),B})}function Gn(e,t,n,l,s,o){let a=null;if(e.length>0){a=new Path2D;let p=t==0?Kn:ss,h=n;for(let f=0;f<e.length;f++){let g=e[f];if(g[1]>g[0]){let y=g[0]-h;y>0&&p(a,h,l,y,l+o),h=g[1]}}let u=n+s-h,_=10;u>0&&p(a,h,l-_/2,u,l+o+_)}return a}function _u(e,t,n){let l=e[e.length-1];l&&l[0]==t?l[1]=n:e.push([t,n])}function is(e,t,n,l,s,o,a){let p=[],h=e.length;for(let u=s==1?n:l;u>=n&&u<=l;u+=s)if(t[u]===null){let f=u,g=u;if(s==1)for(;++u<=l&&t[u]===null;)g=u;else for(;--u>=n&&t[u]===null;)g=u;let y=o(e[f]),S=g==f?y:o(e[g]),A=f-s;y=a<=0&&A>=0&&A<h?o(e[A]):y;let k=g+s;S=a>=0&&k>=0&&k<h?o(e[k]):S,S>=y&&p.push([y,S])}return p}function tr(e){return e==0?fr:e==1?Ne:t=>dl(t,e)}function Rr(e){let t=e==0?jn:Yn,n=e==0?(s,o,a,p,h,u)=>{s.arcTo(o,a,p,h,u)}:(s,o,a,p,h,u)=>{s.arcTo(a,o,h,p,u)},l=e==0?(s,o,a,p,h)=>{s.rect(o,a,p,h)}:(s,o,a,p,h)=>{s.rect(a,o,h,p)};return(s,o,a,p,h,u=0,_=0)=>{u==0&&_==0?l(s,o,a,p,h):(u=At(u,p/2,h/2),_=At(_,p/2,h/2),t(s,o+u,a),n(s,o+p,a,o+p,a+h,u),n(s,o+p,a+h,o,a+h,_),n(s,o,a+h,o,a,_),n(s,o,a,o+p,a,u),s.closePath())}}var jn=(e,t,n)=>{e.moveTo(t,n)},Yn=(e,t,n)=>{e.moveTo(n,t)},jl=(e,t,n)=>{e.lineTo(t,n)},Yl=(e,t,n)=>{e.lineTo(n,t)},Kn=Rr(0),ss=Rr(1),Ir=(e,t,n,l,s,o)=>{e.arc(t,n,l,s,o)},zr=(e,t,n,l,s,o)=>{e.arc(n,t,l,s,o)},Hr=(e,t,n,l,s,o,a)=>{e.bezierCurveTo(t,n,l,s,o,a)},Or=(e,t,n,l,s,o,a)=>{e.bezierCurveTo(n,t,s,l,a,o)};function Fr(e){return(t,n,l,s,o)=>_l(t,n,(a,p,h,u,_,f,g,y,S,A,E)=>{let{pxRound:k,points:b}=a,R,P;u.ori==0?(R=jn,P=Ir):(R=Yn,P=zr);let G=ge(b.width*ce,3),L=(b.size-b.width)/2*ce,D=ge(L*2,3),V=new Path2D,W=new Path2D,{left:B,top:x,width:Y,height:H}=t.bbox;Kn(W,B-D,x-D,Y+D*2,H+D*2);let K=U=>{if(h[U]!=null){let le=k(f(p[U],u,A,y)),F=k(g(h[U],_,E,S));R(V,le+L,F),P(V,le,F,L,0,zn*2)}};if(o)o.forEach(K);else for(let U=l;U<=s;U++)K(U);return{stroke:G>0?V:null,fill:V,clip:W,flags:Bl|Ui}})}function Vr(e){return(t,n,l,s,o,a)=>{l!=s&&(o!=l&&a!=l&&e(t,n,l),o!=s&&a!=s&&e(t,n,s),e(t,n,a))}}var vu=Vr(jl),yu=Vr(Yl);function Wr(e){let t=re(e==null?void 0:e.alignGaps,0);return(n,l,s,o)=>_l(n,l,(a,p,h,u,_,f,g,y,S,A,E)=>{[s,o]=Vn(h,s,o);let k=a.pxRound,b=H=>k(f(H,u,A,y)),R=H=>k(g(H,_,E,S)),P,G;u.ori==0?(P=jl,G=vu):(P=Yl,G=yu);let L=u.dir*(u.ori==0?1:-1),D={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:Bl},V=D.stroke,W=!1;if(o-s>=A*4){let H=O=>n.posToVal(O,u.key,!0),K=null,U=null,le,F,lt,we=b(p[L==1?s:o]),ne=b(p[s]),fe=b(p[o]),ee=H(L==1?ne+1:fe-1);for(let O=L==1?s:o;O>=s&&O<=o;O+=L){let Me=p[O],xe=(L==1?Me<ee:Me>ee)?we:b(Me),ie=h[O];xe==we?ie!=null?(F=ie,K==null?(P(V,xe,R(F)),le=K=U=F):F<K?K=F:F>U&&(U=F)):ie===null&&(W=!0):(K!=null&&G(V,we,R(K),R(U),R(le),R(F)),ie!=null?(F=ie,P(V,xe,R(F)),K=U=le=F):(K=U=null,ie===null&&(W=!0)),we=xe,ee=H(we+L))}K!=null&&K!=U&&lt!=we&&G(V,we,R(K),R(U),R(le),R(F))}else for(let H=L==1?s:o;H>=s&&H<=o;H+=L){let K=h[H];K===null?W=!0:K!=null&&P(V,b(p[H]),R(K))}let[x,Y]=ns(n,l);if(a.fill!=null||x!=0){let H=D.fill=new Path2D(V),K=a.fillTo(n,l,a.min,a.max,x),U=R(K),le=b(p[s]),F=b(p[o]);L==-1&&([F,le]=[le,F]),P(H,F,U),P(H,le,U)}if(!a.spanGaps){let H=[];W&&H.push(...is(p,h,s,o,L,b,t)),D.gaps=H=a.gaps(n,l,s,o,H),D.clip=Gn(H,u.ori,y,S,A,E)}return Y!=0&&(D.band=Y==2?[Ut(n,l,s,o,V,-1),Ut(n,l,s,o,V,1)]:Ut(n,l,s,o,V,Y)),D})}function bu(e){let t=re(e.align,1),n=re(e.ascDesc,!1),l=re(e.alignGaps,0),s=re(e.extend,!1);return(o,a,p,h)=>_l(o,a,(u,_,f,g,y,S,A,E,k,b,R)=>{[p,h]=Vn(f,p,h);let P=u.pxRound,{left:G,width:L}=o.bbox,D=ne=>P(S(ne,g,b,E)),V=ne=>P(A(ne,y,R,k)),W=g.ori==0?jl:Yl,B={stroke:new Path2D,fill:null,clip:null,band:null,gaps:null,flags:Bl},x=B.stroke,Y=g.dir*(g.ori==0?1:-1),H=V(f[Y==1?p:h]),K=D(_[Y==1?p:h]),U=K,le=K;s&&t==-1&&(le=G,W(x,le,H)),W(x,K,H);for(let ne=Y==1?p:h;ne>=p&&ne<=h;ne+=Y){let fe=f[ne];if(fe==null)continue;let ee=D(_[ne]),O=V(fe);t==1?W(x,ee,H):W(x,U,O),W(x,ee,O),H=O,U=ee}let F=U;s&&t==1&&(F=G+L,W(x,F,H));let[lt,we]=ns(o,a);if(u.fill!=null||lt!=0){let ne=B.fill=new Path2D(x),fe=u.fillTo(o,a,u.min,u.max,lt),ee=V(fe);W(ne,F,ee),W(ne,le,ee)}if(!u.spanGaps){let ne=[];ne.push(...is(_,f,p,h,Y,D,l));let fe=u.width*ce/2,ee=n||t==1?fe:-fe,O=n||t==-1?-fe:fe;ne.forEach(Me=>{Me[0]+=ee,Me[1]+=O}),B.gaps=ne=u.gaps(o,a,p,h,ne),B.clip=Gn(ne,g.ori,E,k,b,R)}return we!=0&&(B.band=we==2?[Ut(o,a,p,h,x,-1),Ut(o,a,p,h,x,1)]:Ut(o,a,p,h,x,we)),B})}function lr(e,t,n,l,s,o,a=he){if(e.length>1){let p=null;for(let h=0,u=1/0;h<e.length;h++)if(t[h]!==void 0){if(p!=null){let _=Re(e[h]-e[p]);_<u&&(u=_,a=Re(n(e[h],l,s,o)-n(e[p],l,s,o)))}p=h}}return a}function wu(e){e=e||dn;let t=re(e.size,[.6,he,1]),n=e.align||0,l=e.gap||0,s=e.radius;s=s==null?[0,0]:typeof s=="number"?[s,0]:s;let o=te(s),a=1-t[0],p=re(t[1],he),h=re(t[2],1),u=re(e.disp,dn),_=re(e.each,y=>{}),{fill:f,stroke:g}=u;return(y,S,A,E)=>_l(y,S,(k,b,R,P,G,L,D,V,W,B,x)=>{var Q,Ye;let Y=k.pxRound,H=n,K=l*ce,U=p*ce,le=h*ce,F,lt;P.ori==0?[F,lt]=o(y,S):[lt,F]=o(y,S);let we=P.dir*(P.ori==0?1:-1),ne=P.ori==0?Kn:ss,fe=P.ori==0?_:(J,Ze,Gt,il,jt,nt,St)=>{_(J,Ze,Gt,jt,il,St,nt)},ee=re(y.bands,Qi).find(J=>J.series[0]==S),O=ee!=null?ee.dir:0,Me=k.fillTo(y,S,k.min,k.max,O),qe=Y(D(Me,G,x,W)),xe,ie,xt,st=B,ke=Y(k.width*ce),Et=!1,Ht=null,ht=null,Bt=null,yl=null;f!=null&&(ke==0||g!=null)&&(Et=!0,Ht=f.values(y,S,A,E),ht=new Map,new Set(Ht).forEach(J=>{J!=null&&ht.set(J,new Path2D)}),ke>0&&(Bt=g.values(y,S,A,E),yl=new Map,new Set(Bt).forEach(J=>{J!=null&&yl.set(J,new Path2D)})));let{x0:bl,size:ql}=u;if(bl!=null&&ql!=null){H=1,b=bl.values(y,S,A,E),bl.unit==2&&(b=b.map(Gt=>y.posToVal(V+Gt*B,P.key,!0)));let J=ql.values(y,S,A,E);ql.unit==2?ie=J[0]*B:ie=L(J[0],P,B,V)-L(0,P,B,V),st=lr(b,R,L,P,B,V,st),xt=st-ie+K}else st=lr(b,R,L,P,B,V,st),xt=st*a+K,ie=st-xt;xt<1&&(xt=0),ke>=ie/2&&(ke=0),xt<5&&(Y=fr);let gn=xt>0,ll=st-xt-(gn?ke:0);ie=Y(Fi(ll,le,U)),xe=(H==0?ie/2:H==we?0:ie)-H*we*((H==0?K/2:0)+(gn?ke/2:0));let Je={stroke:null,fill:null,clip:null,band:null,gaps:null,flags:0},wl=Et?null:new Path2D,Ot=null;if(ee!=null)Ot=y.data[ee.series[1]];else{let{y0:J,y1:Ze}=u;J!=null&&Ze!=null&&(R=Ze.values(y,S,A,E),Ot=J.values(y,S,A,E))}let nl=F*ie,Z=lt*ie;for(let J=we==1?A:E;J>=A&&J<=E;J+=we){let Ze=R[J];if(Ze==null)continue;if(Ot!=null){let Lt=(Q=Ot[J])!=null?Q:0;if(Ze-Lt==0)continue;qe=D(Lt,G,x,W)}let Gt=P.distr!=2||u!=null?b[J]:J,il=L(Gt,P,B,V),jt=D(re(Ze,Me),G,x,W),nt=Y(il-xe),St=Y(tt(jt,qe)),ot=Y(At(jt,qe)),gt=St-ot;if(Ze!=null){let Lt=Ze<0?Z:nl,Yt=Ze<0?nl:Z;Et?(ke>0&&Bt[J]!=null&&ne(yl.get(Bt[J]),nt,ot+ft(ke/2),ie,tt(0,gt-ke),Lt,Yt),Ht[J]!=null&&ne(ht.get(Ht[J]),nt,ot+ft(ke/2),ie,tt(0,gt-ke),Lt,Yt)):ne(wl,nt,ot+ft(ke/2),ie,tt(0,gt-ke),Lt,Yt),fe(y,S,J,nt-ke/2,ot,ie+ke,gt)}}return ke>0?Je.stroke=Et?yl:wl:Et||(Je._fill=k.width==0?k._fill:(Ye=k._stroke)!=null?Ye:k._fill,Je.width=0),Je.fill=Et?ht:wl,Je})}function xu(e,t){let n=re(t==null?void 0:t.alignGaps,0);return(l,s,o,a)=>_l(l,s,(p,h,u,_,f,g,y,S,A,E,k)=>{[o,a]=Vn(u,o,a);let b=p.pxRound,R=F=>b(g(F,_,E,S)),P=F=>b(y(F,f,k,A)),G,L,D;_.ori==0?(G=jn,D=jl,L=Hr):(G=Yn,D=Yl,L=Or);let V=_.dir*(_.ori==0?1:-1),W=R(h[V==1?o:a]),B=W,x=[],Y=[];for(let F=V==1?o:a;F>=o&&F<=a;F+=V)if(u[F]!=null){let we=h[F],ne=R(we);x.push(B=ne),Y.push(P(u[F]))}let H={stroke:e(x,Y,G,D,L,b),fill:null,clip:null,band:null,gaps:null,flags:Bl},K=H.stroke,[U,le]=ns(l,s);if(p.fill!=null||U!=0){let F=H.fill=new Path2D(K),lt=p.fillTo(l,s,p.min,p.max,U),we=P(lt);D(F,B,we),D(F,W,we)}if(!p.spanGaps){let F=[];F.push(...is(h,u,o,a,V,R,n)),H.gaps=F=p.gaps(l,s,o,a,F),H.clip=Gn(F,_.ori,S,A,E,k)}return le!=0&&(H.band=le==2?[Ut(l,s,o,a,K,-1),Ut(l,s,o,a,K,1)]:Ut(l,s,o,a,K,le)),H})}function Su(e){return xu($u,e)}function $u(e,t,n,l,s,o){let a=e.length;if(a<2)return null;let p=new Path2D;if(n(p,e[0],t[0]),a==2)l(p,e[1],t[1]);else{let h=Array(a),u=Array(a-1),_=Array(a-1),f=Array(a-1);for(let g=0;g<a-1;g++)_[g]=t[g+1]-t[g],f[g]=e[g+1]-e[g],u[g]=_[g]/f[g];h[0]=u[0];for(let g=1;g<a-1;g++)u[g]===0||u[g-1]===0||u[g-1]>0!=u[g]>0?h[g]=0:(h[g]=3*(f[g-1]+f[g])/((2*f[g]+f[g-1])/u[g-1]+(f[g]+2*f[g-1])/u[g]),isFinite(h[g])||(h[g]=0));h[a-1]=u[a-2];for(let g=0;g<a-1;g++)s(p,e[g]+f[g]/3,t[g]+h[g]*f[g]/3,e[g+1]-f[g]/3,t[g+1]-h[g+1]*f[g]/3,e[g+1],t[g+1])}return p}var Bi=new Set;function nr(){for(let e of Bi)e.syncRect(!0)}Gl&&(gl(ic,Fl,nr),gl(sc,Fl,nr,!0),gl(Hn,Fl,()=>{Ge.pxRatio=ce}));var ku=Wr(),Cu=Fr();function ir(e,t,n,l){return(l?[e[0],e[1]].concat(e.slice(2)):[e[0]].concat(e.slice(1))).map((o,a)=>Gi(o,a,t,n))}function Pu(e,t){return e.map((n,l)=>l==0?{}:Le({},t,n))}function Gi(e,t,n,l){return Le({},t==0?n:l,e)}function Ur(e,t,n){return t==null?Wl:[t,n]}var Tu=Ur;function Au(e,t,n){return t==null?Wl:On(t,n,Ji,!0)}function Br(e,t,n,l){return t==null?Wl:Wn(t,n,e.scales[l].log,!1)}var Eu=Br;function Gr(e,t,n,l){return t==null?Wl:qi(t,n,e.scales[l].log,!1)}var Lu=Gr;function Mu(e,t,n,l,s){let o=tt(Io(e),Io(t)),a=t-e,p=Tt(s/l*a,n);do{let h=n[p],u=l*h/a;if(u>=s&&o+(h<5?tl.get(h):0)<=17)return[h,u]}while(++p<n.length);return[0,0]}function sr(e){let t,n;return e=e.replace(/(\d+)px/,(l,s)=>(t=Ne((n=+s)*ce))+"px"),[e,t,n]}function Du(e){e.show&&[e.font,e.labelFont].forEach(t=>{let n=ge(t[2]*ce,1);t[0]=t[0].replace(/[0-9.]+px/,n+"px"),t[1]=n})}function Ge(e,t,n){var Hs,Os;let l={mode:re(e.mode,1)},s=l.mode;function o(i,r,c,d){let m=r.valToPct(i);return d+c*(r.dir==-1?1-m:m)}function a(i,r,c,d){let m=r.valToPct(i);return d+c*(r.dir==-1?m:1-m)}function p(i,r,c,d){return r.ori==0?o(i,r,c,d):a(i,r,c,d)}l.valToPosH=o,l.valToPosV=a;let h=!1;l.status=0;let u=l.root=bt(Fa);if(e.id!=null&&(u.id=e.id),ut(u,e.class),e.title){let i=bt(Ua,u);i.textContent=e.title}let _=Pt("canvas"),f=l.ctx=_.getContext("2d"),g=bt(Ba,u);gl("click",g,i=>{i.target===S&&(_e!=Ml||Se!=Dl)&&We.click(l,i)},!0);let y=l.under=bt(Ga,g);g.appendChild(_);let S=l.over=bt(ja,g);e=Ul(e);let A=+re(e.pxAlign,1),E=tr(A);(e.plugins||[]).forEach(i=>{i.opts&&(e=i.opts(l,e)||e)});let k=e.ms||.001,b=l.series=s==1?ir(e.series||[],Ko,Xo,!1):Pu(e.series||[null],Qo),R=l.axes=ir(e.axes||[],Yo,Jo,!0),P=l.scales={},G=l.bands=e.bands||[];G.forEach(i=>{i.fill=te(i.fill||null),i.dir=re(i.dir,-1)});let L=s==2?b[1].facets[0].scale:b[0].scale,D={axes:ca,series:ia},V=(e.drawOrder||["axes","series"]).map(i=>D[i]);function W(i){let r=i.distr==3?c=>Wt(c>0?c:i.clamp(l,c,i.min,i.max,i.key)):i.distr==4?c=>Mi(c,i.asinh):i.distr==100?c=>i.fwd(c):c=>c;return c=>{let d=r(c),{_min:m,_max:v}=i,w=v-m;return(d-m)/w}}function B(i){let r=P[i];if(r==null){let c=(e.scales||dn)[i]||dn;if(c.from!=null){B(c.from);let d=Le({},P[c.from],c,{key:i});d.valToPct=W(d),P[i]=d}else{r=P[i]=Le({},i==L?Dr:gu,c),r.key=i;let d=r.time,m=r.range,v=el(m);if((i!=L||s==2&&!d)&&(v&&(m[0]==null||m[1]==null)&&(m={min:m[0]==null?Do:{mode:1,hard:m[0],soft:m[0]},max:m[1]==null?Do:{mode:1,hard:m[1],soft:m[1]}},v=!1),!v&&Bn(m))){let w=m;m=(C,T,M)=>T==null?Wl:On(T,M,w)}r.range=te(m||(d?Tu:i==L?r.distr==3?Eu:r.distr==4?Lu:Ur:r.distr==3?Br:r.distr==4?Gr:Au)),r.auto=te(v?!1:r.auto),r.clamp=te(r.clamp||hu),r._min=r._max=null,r.valToPct=W(r)}}}B("x"),B("y"),s==1&&b.forEach(i=>{B(i.scale)}),R.forEach(i=>{B(i.scale)});for(let i in e.scales)B(i);let x=P[L],Y=x.distr,H,K;x.ori==0?(ut(u,Va),H=o,K=a):(ut(u,Wa),H=a,K=o);let U={};for(let i in P){let r=P[i];(r.min!=null||r.max!=null)&&(U[i]={min:r.min,max:r.max},r.min=r.max=null)}let le=e.tzDate||(i=>new Date(Ne(i/k))),F=e.fmtDate||Xi,lt=k==1?Vc(le):Bc(le),we=Bo(le,Uo(k==1?Fc:Uc,F)),ne=jo(le,Go(jc,F)),fe=[],ee=l.legend=Le({},qc,e.legend),O=l.cursor=Le({},tu,{drag:{y:s==2}},e.cursor),Me=ee.show,qe=O.show,xe=ee.markers;ee.idxs=fe,xe.width=te(xe.width),xe.dash=te(xe.dash),xe.stroke=te(xe.stroke),xe.fill=te(xe.fill);let ie,xt,st,ke=[],Et=[],Ht,ht=!1,Bt={};if(ee.live){let i=b[1]?b[1].values:null;ht=i!=null,Ht=ht?i(l,1,0):{_:0};for(let r in Ht)Bt[r]=Yi}if(Me)if(ie=Pt("table",Qa,u),st=Pt("tbody",null,ie),ee.mount(l,ie),ht){xt=Pt("thead",null,ie,st);let i=Pt("tr",null,xt);Pt("th",null,i);for(var yl in Ht)Pt("th",bo,i).textContent=yl}else ut(ie,ec),ee.live&&ut(ie,Xa);let bl={show:!0},ql={show:!1};function gn(i,r){if(r==0&&(ht||!ee.live||s==2))return Wl;let c=[],d=Pt("tr",tc,st,st.childNodes[r]);ut(d,i.class),i.show||ut(d,hl);let m=Pt("th",null,d);if(xe.show){let C=bt(lc,m);if(r>0){let T=xe.width(l,r);T&&(C.style.border=T+"px "+xe.dash(l,r)+" "+xe.stroke(l,r)),C.style.background=xe.fill(l,r)}}let v=bt(bo,m);i.label instanceof HTMLElement?v.appendChild(i.label):v.textContent=i.label,r>0&&(xe.show||(v.style.color=i.width>0?xe.stroke(l,r):xe.fill(l,r)),Je("click",m,C=>{if(O._lock)return;ol(C);let T=b.indexOf(i);if((C.ctrlKey||C.metaKey)!=ee.isolate){let M=b.some((N,I)=>I>0&&I!=T&&N.show);b.forEach((N,I)=>{I>0&&Dt(I,M?I==T?bl:ql:bl,!0,Ae.setSeries)})}else Dt(T,{show:!i.show},!0,Ae.setSeries)},!1),Sl&&Je($o,m,C=>{O._lock||(ol(C),Dt(b.indexOf(i),Rl,!0,Ae.setSeries))},!1));for(var w in Ht){let C=Pt("td",nc,d);C.textContent="--",c.push(C)}return[d,c]}let ll=new Map;function Je(i,r,c,d=!0){let m=ll.get(r)||{},v=O.bind[i](l,r,c,d);v&&(gl(i,r,m[i]=v),ll.set(r,m))}function wl(i,r,c){let d=ll.get(r)||{};for(let m in d)(i==null||m==i)&&(Oi(m,r,d[m]),delete d[m]);i==null&&ll.delete(r)}let Ot=0,nl=0,Z=0,Q=0,Ye=0,J=0,Ze=Ye,Gt=J,il=Z,jt=Q,nt=0,St=0,ot=0,gt=0;l.bbox={};let Lt=!1,Yt=!1,xl=!1,sl=!1,mn=!1,mt=!1;function qn(i,r,c){(c||i!=l.width||r!=l.height)&&cs(i,r),Tl(!1),xl=!0,Yt=!0,Al()}function cs(i,r){l.width=Ot=Z=i,l.height=nl=Q=r,Ye=J=0,Zr(),Qr();let c=l.bbox;nt=c.left=dl(Ye*ce,.5),St=c.top=dl(J*ce,.5),ot=c.width=dl(Z*ce,.5),gt=c.height=dl(Q*ce,.5)}let Kr=3;function qr(){let i=!1,r=0;for(;!i;){r++;let c=ra(r),d=aa(r);i=r==Kr||c&&d,i||(cs(l.width,l.height),Yt=!0)}}function Jr({width:i,height:r}){qn(i,r)}l.setSize=Jr;function Zr(){let i=!1,r=!1,c=!1,d=!1;R.forEach((m,v)=>{if(m.show&&m._show){let{side:w,_size:C}=m,T=w%2,M=m.label!=null?m.labelSize:0,N=C+M;N>0&&(T?(Z-=N,w==3?(Ye+=N,d=!0):c=!0):(Q-=N,w==0?(J+=N,i=!0):r=!0))}}),rl[0]=i,rl[1]=c,rl[2]=r,rl[3]=d,Z-=Kt[1]+Kt[3],Ye+=Kt[3],Q-=Kt[2]+Kt[0],J+=Kt[0]}function Qr(){let i=Ye+Z,r=J+Q,c=Ye,d=J;function m(v,w){switch(v){case 1:return i+=w,i-w;case 2:return r+=w,r-w;case 3:return c-=w,c+w;case 0:return d-=w,d+w}}R.forEach((v,w)=>{if(v.show&&v._show){let C=v.side;v._pos=m(C,v._size),v.label!=null&&(v._lpos=m(C,v.labelSize))}})}if(O.dataIdx==null){let i=O.hover,r=i.skip=new Set((Hs=i.skip)!=null?Hs:[]);r.add(void 0);let c=i.prox=te(i.prox),d=(Os=i.bias)!=null?Os:i.bias=0;O.dataIdx=(m,v,w,C)=>{var de;if(v==0)return w;let T=w,M=(de=c(m,v,w,C))!=null?de:he,N=M>=0&&M<he,I=x.ori==0?Z:Q,q=O.left,ae=t[0],se=t[v];if(r.has(se[w])){T=null;let j=null,z=null,oe;if(d==0||d==-1)for(oe=w;j==null&&oe-- >0;)r.has(se[oe])||(j=oe);if(d==0||d==1)for(oe=w;z==null&&oe++<se.length;)r.has(se[oe])||(z=oe);if(j!=null||z!=null)if(N){let Ce=j==null?-1/0:H(ae[j],x,I,0),Ue=z==null?1/0:H(ae[z],x,I,0),pe=q-Ce,ye=Ue-q;pe<=ye?pe<=M&&(T=j):ye<=M&&(T=z)}else T=z==null?j:j==null?z:w-j<=z-w?j:z}else N&&Re(q-H(ae[w],x,I,0))>M&&(T=null);return T}}let ol=i=>{O.event=i};O.idxs=fe,O._lock=!1;let Ke=O.points;Ke.show=te(Ke.show),Ke.size=te(Ke.size),Ke.stroke=te(Ke.stroke),Ke.width=te(Ke.width),Ke.fill=te(Ke.fill);let Mt=l.focus=Le({},e.focus||{alpha:.3},O.focus),Sl=Mt.prox>=0,$l=Sl&&Ke.one,_t=[],kl=[],Cl=[];function us(i,r){let c=Ke.show(l,r);if(c instanceof HTMLElement)return ut(c,Za),ut(c,i.class),zt(c,-10,-10,Z,Q),S.insertBefore(c,_t[r]),c}function fs(i,r){if(s==1||r>0){let c=s==1&&P[i.scale].time,d=i.value;i.value=c?Oo(d)?jo(le,Go(d,F)):d||ne:d||fu,i.label=i.label||(c?nu:lu)}if($l||r>0){i.width=i.width==null?1:i.width,i.paths=i.paths||ku||gc,i.fillTo=te(i.fillTo||mu),i.pxAlign=+re(i.pxAlign,A),i.pxRound=tr(i.pxAlign),i.stroke=te(i.stroke||null),i.fill=te(i.fill||null),i._stroke=i._fill=i._paths=i._focus=null;let c=du(tt(1,i.width),1),d=i.points=Le({},{size:c,width:tt(1,c*.2),stroke:i.stroke,space:c*2,paths:Cu,_stroke:null,_fill:null},i.points);d.show=te(d.show),d.filter=te(d.filter),d.fill=te(d.fill),d.stroke=te(d.stroke),d.paths=te(d.paths),d.pxAlign=i.pxAlign}if(Me){let c=gn(i,r);ke.splice(r,0,c[0]),Et.splice(r,0,c[1]),ee.values.push(null)}if(qe){fe.splice(r,0,null);let c=null;$l?r==0&&(c=us(i,r)):r>0&&(c=us(i,r)),_t.splice(r,0,c),kl.splice(r,0,0),Cl.splice(r,0,0)}Fe("addSeries",r)}function Xr(i,r){r=r==null?b.length:r,i=s==1?Gi(i,r,Ko,Xo):Gi(i,r,{},Qo),b.splice(r,0,i),fs(b[r],r)}l.addSeries=Xr;function ea(i){if(b.splice(i,1),Me){ee.values.splice(i,1),Et.splice(i,1);let r=ke.splice(i,1)[0];wl(null,r.firstChild),r.remove()}qe&&(fe.splice(i,1),_t.splice(i,1)[0].remove(),kl.splice(i,1),Cl.splice(i,1)),Fe("delSeries",i)}l.delSeries=ea;let rl=[!1,!1,!1,!1];function ta(i,r){if(i._show=i.show,i.show){let c=i.side%2,d=P[i.scale];d==null&&(i.scale=c?b[1].scale:L,d=P[i.scale]);let m=d.time;i.size=te(i.size),i.space=te(i.space),i.rotate=te(i.rotate),el(i.incrs)&&i.incrs.forEach(w=>{!tl.has(w)&&tl.set(w,hr(w))}),i.incrs=te(i.incrs||(d.distr==2?zc:m?k==1?Oc:Wc:pl)),i.splits=te(i.splits||(m&&d.distr==1?lt:d.distr==3?Vi:d.distr==4?ou:su)),i.stroke=te(i.stroke),i.grid.stroke=te(i.grid.stroke),i.ticks.stroke=te(i.ticks.stroke),i.border.stroke=te(i.border.stroke);let v=i.values;i.values=el(v)&&!el(v[0])?te(v):m?el(v)?Bo(le,Uo(v,F)):Oo(v)?Gc(le,v):v||we:v||iu,i.filter=te(i.filter||(d.distr>=3&&d.log==10?cu:d.distr==3&&d.log==2?uu:dr)),i.font=sr(i.font),i.labelFont=sr(i.labelFont),i._size=i.size(l,null,r,0),i._space=i._rotate=i._incrs=i._found=i._splits=i._values=null,i._size>0&&(rl[r]=!0,i._el=bt(Ya,g))}}function Jl(i,r,c,d){let[m,v,w,C]=c,T=r%2,M=0;return T==0&&(C||v)&&(M=r==0&&!m||r==2&&!w?Ne(Yo.size/3):0),T==1&&(m||w)&&(M=r==1&&!v||r==3&&!C?Ne(Jo.size/2):0),M}let ds=l.padding=(e.padding||[Jl,Jl,Jl,Jl]).map(i=>te(re(i,Jl))),Kt=l._padding=ds.map((i,r)=>i(l,r,rl,0)),Ve,Ie=null,ze=null,_n=s==1?b[0].idxs:null,$t=null,Zl=!1;function ps(i,r){if(t=i==null?[]:i,l.data=l._data=t,s==2){Ve=0;for(let c=1;c<b.length;c++)Ve+=t[c][0].length}else{t.length==0&&(l.data=l._data=t=[[]]),$t=t[0],Ve=$t.length;let c=t;if(Y==2){c=t.slice();let d=c[0]=Array(Ve);for(let m=0;m<Ve;m++)d[m]=m}l._data=t=c}if(Tl(!0),Fe("setData"),Y==2&&(xl=!0),r!==!1){let c=x;c.auto(l,Zl)?Jn():Jt(L,c.min,c.max),sl=sl||O.left>=0,mt=!0,Al()}}l.setData=ps;function Jn(){Zl=!0;let i,r;s==1&&(Ve>0?(Ie=_n[0]=0,ze=_n[1]=Ve-1,i=t[0][Ie],r=t[0][ze],Y==2?(i=Ie,r=ze):i==r&&(Y==3?[i,r]=Wn(i,i,x.log,!1):Y==4?[i,r]=qi(i,i,x.log,!1):x.time?r=i+Ne(86400/k):[i,r]=On(i,r,Ji,!0))):(Ie=_n[0]=i=null,ze=_n[1]=r=null)),Jt(L,i,r)}let vn,Pl,Zn,Qn,Xn,ei,ti,li,ni,it;function hs(i,r,c,d,m,v){i!=null||(i=xo),c!=null||(c=Qi),d!=null||(d="butt"),m!=null||(m=xo),v!=null||(v="round"),i!=vn&&(f.strokeStyle=vn=i),m!=Pl&&(f.fillStyle=Pl=m),r!=Zn&&(f.lineWidth=Zn=r),v!=Xn&&(f.lineJoin=Xn=v),d!=ei&&(f.lineCap=ei=d),c!=Qn&&f.setLineDash(Qn=c)}function gs(i,r,c,d){r!=Pl&&(f.fillStyle=Pl=r),i!=ti&&(f.font=ti=i),c!=li&&(f.textAlign=li=c),d!=ni&&(f.textBaseline=ni=d)}function ii(i,r,c,d,m=0){if(d.length>0&&i.auto(l,Zl)&&(r==null||r.min==null)){let v=re(Ie,0),w=re(ze,d.length-1),C=c.min==null?cc(d,v,w,m,i.distr==3):[c.min,c.max];i.min=At(i.min,c.min=C[0]),i.max=tt(i.max,c.max=C[1])}}let ms={min:null,max:null};function la(){for(let d in P){let m=P[d];U[d]==null&&(m.min==null||U[L]!=null&&m.auto(l,Zl))&&(U[d]=ms)}for(let d in P){let m=P[d];U[d]==null&&m.from!=null&&U[m.from]!=null&&(U[d]=ms)}U[L]!=null&&Tl(!0);let i={};for(let d in U){let m=U[d];if(m!=null){let v=i[d]=Ul(P[d],vc);if(m.min!=null)Le(v,m);else if(d!=L||s==2)if(Ve==0&&v.from==null){let w=v.range(l,null,null,d);v.min=w[0],v.max=w[1]}else v.min=he,v.max=-he}}if(Ve>0){b.forEach((d,m)=>{if(s==1){let v=d.scale,w=U[v];if(w==null)return;let C=i[v];if(m==0){let T=C.range(l,C.min,C.max,v);C.min=T[0],C.max=T[1],Ie=Tt(C.min,t[0]),ze=Tt(C.max,t[0]),ze-Ie>1&&(t[0][Ie]<C.min&&Ie++,t[0][ze]>C.max&&ze--),d.min=$t[Ie],d.max=$t[ze]}else d.show&&d.auto&&ii(C,w,d,t[m],d.sorted);d.idxs[0]=Ie,d.idxs[1]=ze}else if(m>0&&d.show&&d.auto){let[v,w]=d.facets,C=v.scale,T=w.scale,[M,N]=t[m],I=i[C],q=i[T];I!=null&&ii(I,U[C],v,M,v.sorted),q!=null&&ii(q,U[T],w,N,w.sorted),d.min=w.min,d.max=w.max}});for(let d in i){let m=i[d],v=U[d];if(m.from==null&&(v==null||v.min==null)){let w=m.range(l,m.min==he?null:m.min,m.max==-he?null:m.max,d);m.min=w[0],m.max=w[1]}}}for(let d in i){let m=i[d];if(m.from!=null){let v=i[m.from];if(v.min==null)m.min=m.max=null;else{let w=m.range(l,v.min,v.max,d);m.min=w[0],m.max=w[1]}}}let r={},c=!1;for(let d in i){let m=i[d],v=P[d];if(v.min!=m.min||v.max!=m.max){v.min=m.min,v.max=m.max;let w=v.distr;v._min=w==3?Wt(v.min):w==4?Mi(v.min,v.asinh):w==100?v.fwd(v.min):v.min,v._max=w==3?Wt(v.max):w==4?Mi(v.max,v.asinh):w==100?v.fwd(v.max):v.max,r[d]=c=!0}}if(c){b.forEach((d,m)=>{s==2?m>0&&r.y&&(d._paths=null):r[d.scale]&&(d._paths=null)});for(let d in r)xl=!0,Fe("setScale",d);qe&&O.left>=0&&(sl=mt=!0)}for(let d in U)U[d]=null}function na(i){let r=Fi(Ie-1,0,Ve-1),c=Fi(ze+1,0,Ve-1);for(;i[r]==null&&r>0;)r--;for(;i[c]==null&&c<Ve-1;)c++;return[r,c]}function ia(){if(Ve>0){let i=b.some(r=>r._focus)&&it!=Mt.alpha;i&&(f.globalAlpha=it=Mt.alpha),b.forEach((r,c)=>{if(c>0&&r.show&&(_s(c,!1),_s(c,!0),r._paths==null)){let d=it;it!=r.alpha&&(f.globalAlpha=it=r.alpha);let m=s==2?[0,t[c][0].length-1]:na(t[c]);r._paths=r.paths(l,c,m[0],m[1]),it!=d&&(f.globalAlpha=it=d)}}),b.forEach((r,c)=>{if(c>0&&r.show){let d=it;it!=r.alpha&&(f.globalAlpha=it=r.alpha),r._paths!=null&&vs(c,!1);{let m=r._paths!=null?r._paths.gaps:null,v=r.points.show(l,c,Ie,ze,m),w=r.points.filter(l,c,v,m);(v||w)&&(r.points._paths=r.points.paths(l,c,Ie,ze,w),vs(c,!0))}it!=d&&(f.globalAlpha=it=d),Fe("drawSeries",c)}}),i&&(f.globalAlpha=it=1)}}function _s(i,r){let c=r?b[i].points:b[i];c._stroke=c.stroke(l,i),c._fill=c.fill(l,i)}function vs(i,r){let c=r?b[i].points:b[i],{stroke:d,fill:m,clip:v,flags:w,_stroke:C=c._stroke,_fill:T=c._fill,_width:M=c.width}=c._paths;M=ge(M*ce,3);let N=null,I=M%2/2;r&&T==null&&(T=M>0?"#fff":C);let q=c.pxAlign==1&&I>0;if(q&&f.translate(I,I),!r){let ae=nt-M/2,se=St-M/2,de=ot+M,j=gt+M;N=new Path2D,N.rect(ae,se,de,j)}r?si(C,M,c.dash,c.cap,T,d,m,w,v):sa(i,C,M,c.dash,c.cap,T,d,m,w,N,v),q&&f.translate(-I,-I)}function sa(i,r,c,d,m,v,w,C,T,M,N){let I=!1;T!=0&&G.forEach((q,ae)=>{if(q.series[0]==i){let se=b[q.series[1]],de=t[q.series[1]],j=(se._paths||dn).band;el(j)&&(j=q.dir==1?j[0]:j[1]);let z,oe=null;se.show&&j&&fc(de,Ie,ze)?(oe=q.fill(l,ae)||v,z=se._paths.clip):j=null,si(r,c,d,m,oe,w,C,T,M,N,z,j),I=!0}}),I||si(r,c,d,m,v,w,C,T,M,N)}let ys=Bl|Ui;function si(i,r,c,d,m,v,w,C,T,M,N,I){hs(i,r,c,d,m),(T||M||I)&&(f.save(),T&&f.clip(T),M&&f.clip(M)),I?(C&ys)==ys?(f.clip(I),N&&f.clip(N),bn(m,w),yn(i,v,r)):C&Ui?(bn(m,w),f.clip(I),yn(i,v,r)):C&Bl&&(f.save(),f.clip(I),N&&f.clip(N),bn(m,w),f.restore(),yn(i,v,r)):(bn(m,w),yn(i,v,r)),(T||M||I)&&f.restore()}function yn(i,r,c){c>0&&(r instanceof Map?r.forEach((d,m)=>{f.strokeStyle=vn=m,f.stroke(d)}):r!=null&&i&&f.stroke(r))}function bn(i,r){r instanceof Map?r.forEach((c,d)=>{f.fillStyle=Pl=d,f.fill(c)}):r!=null&&i&&f.fill(r)}function oa(i,r,c,d){let m=R[i],v;if(d<=0)v=[0,0];else{let w=m._space=m.space(l,i,r,c,d),C=m._incrs=m.incrs(l,i,r,c,d,w);v=Mu(r,c,C,d,w)}return m._found=v}function oi(i,r,c,d,m,v,w,C,T,M){let N=w%2/2;A==1&&f.translate(N,N),hs(C,w,T,M,C),f.beginPath();let I,q,ae,se,de=m+(d==0||d==3?-v:v);c==0?(q=m,se=de):(I=m,ae=de);for(let j=0;j<i.length;j++)r[j]!=null&&(c==0?I=ae=i[j]:q=se=i[j],f.moveTo(I,q),f.lineTo(ae,se));f.stroke(),A==1&&f.translate(-N,-N)}function ra(i){let r=!0;return R.forEach((c,d)=>{if(!c.show)return;let m=P[c.scale];if(m.min==null){c._show&&(r=!1,c._show=!1,Tl(!1));return}else c._show||(r=!1,c._show=!0,Tl(!1));let v=c.side,w=v%2,{min:C,max:T}=m,[M,N]=oa(d,C,T,w==0?Z:Q);if(N==0)return;let I=m.distr==2,q=c._splits=c.splits(l,d,C,T,M,N,I),ae=m.distr==2?q.map(z=>$t[z]):q,se=m.distr==2?$t[q[1]]-$t[q[0]]:M,de=c._values=c.values(l,c.filter(l,ae,d,N,se),d,N,se);c._rotate=v==2?c.rotate(l,de,d,N):0;let j=c._size;c._size=wt(c.size(l,de,d,i)),j!=null&&c._size!=j&&(r=!1)}),r}function aa(i){let r=!0;return ds.forEach((c,d)=>{let m=c(l,d,rl,i);m!=Kt[d]&&(r=!1),Kt[d]=m}),r}function ca(){for(let i=0;i<R.length;i++){let r=R[i];if(!r.show||!r._show)continue;let c=r.side,d=c%2,m,v,w=r.stroke(l,i),C=c==0||c==3?-1:1,[T,M]=r._found;if(r.label!=null){let Xe=r.labelGap*C,ct=Ne((r._lpos+Xe)*ce);gs(r.labelFont[0],w,"center",c==2?"top":wo),f.save(),d==1?(m=v=0,f.translate(ct,Ne(St+gt/2)),f.rotate((c==3?-zn:zn)/2)):(m=Ne(nt+ot/2),v=ct);let ul=ur(r.label)?r.label(l,i,T,M):r.label;f.fillText(ul,m,v),f.restore()}if(M==0)continue;let N=P[r.scale],I=d==0?ot:gt,q=d==0?nt:St,ae=r._splits,se=N.distr==2?ae.map(Xe=>$t[Xe]):ae,de=N.distr==2?$t[ae[1]]-$t[ae[0]]:T,j=r.ticks,z=r.border,oe=j.show?j.size:0,Ce=Ne(oe*ce),Ue=Ne((r.alignTo==2?r._size-oe-r.gap:r.gap)*ce),pe=r._rotate*-zn/180,ye=E(r._pos*ce),rt=(Ce+Ue)*C,Qe=ye+rt;v=d==0?Qe:0,m=d==1?Qe:0;let vt=r.font[0],kt=r.align==1?Hl:r.align==2?Ai:pe>0?Hl:pe<0?Ai:d==0?"center":c==3?Ai:Hl,Rt=pe||d==1?"middle":c==2?"top":wo;gs(vt,w,kt,Rt);let at=r.font[1]*r.lineGap,yt=ae.map(Xe=>E(p(Xe,N,I,q))),Ct=r._values;for(let Xe=0;Xe<Ct.length;Xe++){let ct=Ct[Xe];if(ct!=null){d==0?m=yt[Xe]:v=yt[Xe],ct=""+ct;let ul=ct.indexOf(`
`)==-1?[ct]:ct.split(/\n/gm);for(let et=0;et<ul.length;et++){let Fs=ul[et];pe?(f.save(),f.translate(m,v+et*at),f.rotate(pe),f.fillText(Fs,0,0),f.restore()):f.fillText(Fs,m,v+et*at)}}}j.show&&oi(yt,j.filter(l,se,i,M,de),d,c,ye,Ce,ge(j.width*ce,3),j.stroke(l,i),j.dash,j.cap);let It=r.grid;It.show&&oi(yt,It.filter(l,se,i,M,de),d,d==0?2:1,d==0?St:nt,d==0?gt:ot,ge(It.width*ce,3),It.stroke(l,i),It.dash,It.cap),z.show&&oi([ye],[1],d==0?1:0,d==0?1:2,d==1?St:nt,d==1?gt:ot,ge(z.width*ce,3),z.stroke(l,i),z.dash,z.cap)}Fe("drawAxes")}function Tl(i){b.forEach((r,c)=>{c>0&&(r._paths=null,i&&(s==1?(r.min=null,r.max=null):r.facets.forEach(d=>{d.min=null,d.max=null})))})}let wn=!1,ri=!1,Ql=[];function ua(){ri=!1;for(let i=0;i<Ql.length;i++)Fe(...Ql[i]);Ql.length=0}function Al(){wn||(kc(bs),wn=!0)}function fa(i,r=!1){wn=!0,ri=r,i(l),bs(),r&&Ql.length>0&&queueMicrotask(ua)}l.batch=fa;function bs(){if(Lt&&(la(),Lt=!1),xl&&(qr(),xl=!1),Yt){if(be(y,Hl,Ye),be(y,"top",J),be(y,an,Z),be(y,cn,Q),be(S,Hl,Ye),be(S,"top",J),be(S,an,Z),be(S,cn,Q),be(g,an,Ot),be(g,cn,nl),_.width=Ne(Ot*ce),_.height=Ne(nl*ce),R.forEach(({_el:i,_show:r,_size:c,_pos:d,side:m})=>{if(i!=null)if(r){let v=m===3||m===0?c:0,w=m%2==1;be(i,w?"left":"top",d-v),be(i,w?"width":"height",c),be(i,w?"top":"left",w?J:Ye),be(i,w?"height":"width",w?Q:Z),Hi(i,hl)}else ut(i,hl)}),vn=Pl=Zn=Xn=ei=ti=li=ni=Qn=null,it=1,tn(!0),Ye!=Ze||J!=Gt||Z!=il||Q!=jt){Tl(!1);let i=Z/il,r=Q/jt;if(qe&&!sl&&O.left>=0){O.left*=i,O.top*=r,El&&zt(El,Ne(O.left),0,Z,Q),Ll&&zt(Ll,0,Ne(O.top),Z,Q);for(let c=0;c<_t.length;c++){let d=_t[c];d!=null&&(kl[c]*=i,Cl[c]*=r,zt(d,wt(kl[c]),wt(Cl[c]),Z,Q))}}if(ve.show&&!mn&&ve.left>=0&&ve.width>0){ve.left*=i,ve.width*=i,ve.top*=r,ve.height*=r;for(let c in pi)be(Nl,c,ve[c])}Ze=Ye,Gt=J,il=Z,jt=Q}Fe("setSize"),Yt=!1}Ot>0&&nl>0&&(f.clearRect(0,0,_.width,_.height),Fe("drawClear"),V.forEach(i=>i()),Fe("draw")),ve.show&&mn&&(xn(ve),mn=!1),qe&&sl&&(cl(null,!0,!1),sl=!1),ee.show&&ee.live&&mt&&(fi(),mt=!1),h||(h=!0,l.status=1,Fe("ready")),Zl=!1,wn=!1}l.redraw=(i,r)=>{xl=r||!1,i!==!1?Jt(L,x.min,x.max):Al()};function ai(i,r){let c=P[i];if(c.from==null){if(Ve==0){let d=c.range(l,r.min,r.max,i);r.min=d[0],r.max=d[1]}if(r.min>r.max){let d=r.min;r.min=r.max,r.max=d}if(Ve>1&&r.min!=null&&r.max!=null&&r.max-r.min<1e-16)return;i==L&&c.distr==2&&Ve>0&&(r.min=Tt(r.min,t[0]),r.max=Tt(r.max,t[0]),r.min==r.max&&r.max++),U[i]=r,Lt=!0,Al()}}l.setScale=ai;let ci,ui,El,Ll,ws,xs,Ml,Dl,Ss,$s,_e,Se,qt=!1,We=O.drag,He=We.x,Oe=We.y;qe&&(O.x&&(ci=bt(qa,S)),O.y&&(ui=bt(Ja,S)),x.ori==0?(El=ci,Ll=ui):(El=ui,Ll=ci),_e=O.left,Se=O.top);let ve=l.select=Le({show:!0,over:!0,left:0,width:0,top:0,height:0},e.select),Nl=ve.show?bt(Ka,ve.over?S:y):null;function xn(i,r){if(ve.show){for(let c in i)ve[c]=i[c],c in pi&&be(Nl,c,i[c]);r!==!1&&Fe("setSelect")}}l.setSelect=xn;function da(i){if(b[i].show)Me&&Hi(ke[i],hl);else if(Me&&ut(ke[i],hl),qe){let c=$l?_t[0]:_t[i];c!=null&&zt(c,-10,-10,Z,Q)}}function Jt(i,r,c){ai(i,{min:r,max:c})}function Dt(i,r,c,d){r.focus!=null&&_a(i),r.show!=null&&b.forEach((m,v)=>{v>0&&(i==v||i==null)&&(m.show=r.show,da(v),s==2?(Jt(m.facets[0].scale,null,null),Jt(m.facets[1].scale,null,null)):Jt(m.scale,null,null),Al())}),c!==!1&&Fe("setSeries",i,r),d&&ln("setSeries",l,i,r)}l.setSeries=Dt;function pa(i,r){Le(G[i],r)}function ha(i,r){i.fill=te(i.fill||null),i.dir=re(i.dir,-1),r=r==null?G.length:r,G.splice(r,0,i)}function ga(i){i==null?G.length=0:G.splice(i,1)}l.addBand=ha,l.setBand=pa,l.delBand=ga;function ma(i,r){b[i].alpha=r,qe&&_t[i]!=null&&(_t[i].style.opacity=r),Me&&ke[i]&&(ke[i].style.opacity=r)}let Ft,Zt,al,Rl={focus:!0};function _a(i){if(i!=al){let r=i==null,c=Mt.alpha!=1;b.forEach((d,m)=>{if(s==1||m>0){let v=r||m==0||m==i;d._focus=r?null:v,c&&ma(m,v?1:Mt.alpha)}}),al=i,c&&Al()}}Me&&Sl&&Je(ko,ie,i=>{O._lock||(ol(i),al!=null&&Dt(null,Rl,!0,Ae.setSeries))});function Nt(i,r,c){let d=P[r];c&&(i=i/ce-(d.ori==1?J:Ye));let m=Z;d.ori==1&&(m=Q,i=m-i),d.dir==-1&&(i=m-i);let v=d._min,w=d._max,C=i/m,T=v+(w-v)*C,M=d.distr;return M==3?Vl(10,T):M==4?pc(T,d.asinh):M==100?d.bwd(T):T}function va(i,r){let c=Nt(i,L,r);return Tt(c,t[0],Ie,ze)}l.valToIdx=i=>Tt(i,t[0]),l.posToIdx=va,l.posToVal=Nt,l.valToPos=(i,r,c)=>P[r].ori==0?o(i,P[r],c?ot:Z,c?nt:0):a(i,P[r],c?gt:Q,c?St:0),l.setCursor=(i,r,c)=>{_e=i.left,Se=i.top,cl(null,r,c)};function ks(i,r){be(Nl,Hl,ve.left=i),be(Nl,an,ve.width=r)}function Cs(i,r){be(Nl,"top",ve.top=i),be(Nl,cn,ve.height=r)}let Xl=x.ori==0?ks:Cs,en=x.ori==1?ks:Cs;function ya(){if(Me&&ee.live)for(let i=s==2?1:0;i<b.length;i++){if(i==0&&ht)continue;let r=ee.values[i],c=0;for(let d in r)Et[i][c++].firstChild.nodeValue=r[d]}}function fi(i,r){if(i!=null&&(i.idxs?i.idxs.forEach((c,d)=>{fe[d]=c}):_c(i.idx)||fe.fill(i.idx),ee.idx=fe[0]),Me&&ee.live){for(let c=0;c<b.length;c++)(c>0||s==1&&!ht)&&ba(c,fe[c]);ya()}mt=!1,r!==!1&&Fe("setLegend")}l.setLegend=fi;function ba(i,r){var v;let c=b[i],d=i==0&&Y==2?$t:t[i],m;ht?m=(v=c.values(l,i,r))!=null?v:Bt:(m=c.value(l,r==null?null:d[r],i,r),m=m==null?Bt:{_:m}),ee.values[i]=m}function cl(i,r,c){Ss=_e,$s=Se,[_e,Se]=O.move(l,_e,Se),O.left=_e,O.top=Se,qe&&(El&&zt(El,Ne(_e),0,Z,Q),Ll&&zt(Ll,0,Ne(Se),Z,Q));let d,m=Ie>ze;Ft=he,Zt=null;let v=x.ori==0?Z:Q,w=x.ori==1?Z:Q;if(_e<0||Ve==0||m){d=O.idx=null;for(let C=0;C<b.length;C++){let T=_t[C];T!=null&&zt(T,-10,-10,Z,Q)}Sl&&Dt(null,Rl,!0,i==null&&Ae.setSeries),ee.live&&(fe.fill(d),mt=!0)}else{let C,T,M;s==1&&(C=x.ori==0?_e:Se,T=Nt(C,L),d=O.idx=Tt(T,t[0],Ie,ze),M=H(t[0][d],x,v,0));let N=-10,I=-10,q=0,ae=0,se=!0,de="",j="";for(let z=s==2?1:0;z<b.length;z++){let oe=b[z],Ce=fe[z],Ue=Ce==null?null:s==1?t[z][Ce]:t[z][1][Ce],pe=O.dataIdx(l,z,d,T),ye=pe==null?null:s==1?t[z][pe]:t[z][1][pe];if(mt=mt||ye!=Ue||pe!=Ce,fe[z]=pe,z>0&&oe.show){let rt=pe==null?-10:pe==d?M:H(s==1?t[0][pe]:t[z][0][pe],x,v,0),Qe=ye==null?-10:K(ye,s==1?P[oe.scale]:P[oe.facets[1].scale],w,0);if(Sl&&ye!=null){let vt=x.ori==1?_e:Se,kt=Re(Mt.dist(l,z,pe,Qe,vt));if(kt<Ft){let Rt=Mt.bias;if(Rt!=0){let at=Nt(vt,oe.scale),yt=ye>=0?1:-1,Ct=at>=0?1:-1;Ct==yt&&(Ct==1?Rt==1?ye>=at:ye<=at:Rt==1?ye<=at:ye>=at)&&(Ft=kt,Zt=z)}else Ft=kt,Zt=z}}if(mt||$l){let vt,kt;x.ori==0?(vt=rt,kt=Qe):(vt=Qe,kt=rt);let Rt,at,yt,Ct,It,Xe,ct=!0,ul=Ke.bbox;if(ul!=null){ct=!1;let et=ul(l,z);yt=et.left,Ct=et.top,Rt=et.width,at=et.height}else yt=vt,Ct=kt,Rt=at=Ke.size(l,z);if(Xe=Ke.fill(l,z),It=Ke.stroke(l,z),$l)z==Zt&&Ft<=Mt.prox&&(N=yt,I=Ct,q=Rt,ae=at,se=ct,de=Xe,j=It);else{let et=_t[z];et!=null&&(kl[z]=yt,Cl[z]=Ct,Mo(et,Rt,at,ct),Eo(et,Xe,It),zt(et,wt(yt),wt(Ct),Z,Q))}}}}if($l){let z=Mt.prox,oe=al==null?Ft<=z:Ft>z||Zt!=al;if(mt||oe){let Ce=_t[0];Ce!=null&&(kl[0]=N,Cl[0]=I,Mo(Ce,q,ae,se),Eo(Ce,de,j),zt(Ce,wt(N),wt(I),Z,Q))}}}if(ve.show&&qt)if(i!=null){let[C,T]=Ae.scales,[M,N]=Ae.match,[I,q]=i.cursor.sync.scales,ae=i.cursor.drag;if(He=ae._x,Oe=ae._y,He||Oe){let{left:se,top:de,width:j,height:z}=i.select,oe=i.scales[I].ori,Ce=i.posToVal,Ue,pe,ye,rt,Qe,vt=C!=null&&M(C,I),kt=T!=null&&N(T,q);vt&&He?(oe==0?(Ue=se,pe=j):(Ue=de,pe=z),ye=P[C],rt=H(Ce(Ue,I),ye,v,0),Qe=H(Ce(Ue+pe,I),ye,v,0),Xl(At(rt,Qe),Re(Qe-rt))):Xl(0,v),kt&&Oe?(oe==1?(Ue=se,pe=j):(Ue=de,pe=z),ye=P[T],rt=K(Ce(Ue,q),ye,w,0),Qe=K(Ce(Ue+pe,q),ye,w,0),en(At(rt,Qe),Re(Qe-rt))):en(0,w)}else hi()}else{let C=Re(Ss-ws),T=Re($s-xs);if(x.ori==1){let q=C;C=T,T=q}He=We.x&&C>=We.dist,Oe=We.y&&T>=We.dist;let M=We.uni;M!=null?He&&Oe&&(He=C>=M,Oe=T>=M,!He&&!Oe&&(T>C?Oe=!0:He=!0)):We.x&&We.y&&(He||Oe)&&(He=Oe=!0);let N,I;He&&(x.ori==0?(N=Ml,I=_e):(N=Dl,I=Se),Xl(At(N,I),Re(I-N)),Oe||en(0,w)),Oe&&(x.ori==1?(N=Ml,I=_e):(N=Dl,I=Se),en(At(N,I),Re(I-N)),He||Xl(0,v)),!He&&!Oe&&(Xl(0,0),en(0,0))}if(We._x=He,We._y=Oe,i==null){if(c){if(zs!=null){let[C,T]=Ae.scales;Ae.values[0]=C!=null?Nt(x.ori==0?_e:Se,C):null,Ae.values[1]=T!=null?Nt(x.ori==1?_e:Se,T):null}ln(Ei,l,_e,Se,Z,Q,d)}if(Sl){let C=c&&Ae.setSeries,T=Mt.prox;al==null?Ft<=T&&Dt(Zt,Rl,!0,C):Ft>T?Dt(null,Rl,!0,C):Zt!=al&&Dt(Zt,Rl,!0,C)}}mt&&(ee.idx=d,fi()),r!==!1&&Fe("setCursor")}let Qt=null;Object.defineProperty(l,"rect",{get(){return Qt==null&&tn(!1),Qt}});function tn(i=!1){i?Qt=null:(Qt=S.getBoundingClientRect(),Fe("syncRect",Qt))}function Ps(i,r,c,d,m,v,w){O._lock||qt&&i!=null&&i.movementX==0&&i.movementY==0||(di(i,r,c,d,m,v,w,!1,i!=null),i!=null?cl(null,!0,!0):cl(r,!0,!1))}function di(i,r,c,d,m,v,w,C,T){if(Qt==null&&tn(!1),ol(i),i!=null)c=i.clientX-Qt.left,d=i.clientY-Qt.top;else{if(c<0||d<0){_e=-10,Se=-10;return}let[M,N]=Ae.scales,I=r.cursor.sync,[q,ae]=I.values,[se,de]=I.scales,[j,z]=Ae.match,oe=r.axes[0].side%2==1,Ce=x.ori==0?Z:Q,Ue=x.ori==1?Z:Q,pe=oe?v:m,ye=oe?m:v,rt=oe?d:c,Qe=oe?c:d;if(se!=null?c=j(M,se)?p(q,P[M],Ce,0):-10:c=Ce*(rt/pe),de!=null?d=z(N,de)?p(ae,P[N],Ue,0):-10:d=Ue*(Qe/ye),x.ori==1){let vt=c;c=d,d=vt}}T&&(r==null||r.cursor.event.type==Ei)&&((c<=1||c>=Z-1)&&(c=dl(c,Z)),(d<=1||d>=Q-1)&&(d=dl(d,Q))),C?(ws=c,xs=d,[Ml,Dl]=O.move(l,c,d)):(_e=c,Se=d)}let pi={width:0,height:0,left:0,top:0};function hi(){xn(pi,!1)}let Ts,As,Es,Ls;function Ms(i,r,c,d,m,v,w){qt=!0,He=Oe=We._x=We._y=!1,di(i,r,c,d,m,v,w,!0,!1),i!=null&&(Je(Li,Ii,Ds,!1),ln(So,l,Ml,Dl,Z,Q,null));let{left:C,top:T,width:M,height:N}=ve;Ts=C,As=T,Es=M,Ls=N}function Ds(i,r,c,d,m,v,w){qt=We._x=We._y=!1,di(i,r,c,d,m,v,w,!1,!0);let{left:C,top:T,width:M,height:N}=ve,I=M>0||N>0,q=Ts!=C||As!=T||Es!=M||Ls!=N;if(I&&q&&xn(ve),We.setScale&&I&&q){let ae=C,se=M,de=T,j=N;if(x.ori==1&&(ae=T,se=N,de=C,j=M),He&&Jt(L,Nt(ae,L),Nt(ae+se,L)),Oe)for(let z in P){let oe=P[z];z!=L&&oe.from==null&&oe.min!=he&&Jt(z,Nt(de+j,z),Nt(de,z))}hi()}else O.lock&&(O._lock=!O._lock,cl(r,!0,i!=null));i!=null&&(wl(Li,Ii),ln(Li,l,_e,Se,Z,Q,null))}function wa(i,r,c,d,m,v,w){if(O._lock)return;ol(i);let C=qt;if(qt){let T=!0,M=!0,N=10,I,q;x.ori==0?(I=He,q=Oe):(I=Oe,q=He),I&&q&&(T=_e<=N||_e>=Z-N,M=Se<=N||Se>=Q-N),I&&T&&(_e=_e<Ml?0:Z),q&&M&&(Se=Se<Dl?0:Q),cl(null,!0,!0),qt=!1}_e=-10,Se=-10,fe.fill(null),cl(null,!0,!0),C&&(qt=C)}function Ns(i,r,c,d,m,v,w){O._lock||(ol(i),Jn(),hi(),i!=null&&ln(Co,l,_e,Se,Z,Q,null))}function Rs(){R.forEach(Du),qn(l.width,l.height,!0)}gl(Hn,Fl,Rs);let Il={};Il.mousedown=Ms,Il.mousemove=Ps,Il.mouseup=Ds,Il.dblclick=Ns,Il.setSeries=(i,r,c,d)=>{let m=Ae.match[2];c=m(l,r,c),c!=-1&&Dt(c,d,!0,!1)},qe&&(Je(So,S,Ms),Je(Ei,S,Ps),Je($o,S,i=>{ol(i),tn(!1)}),Je(ko,S,wa),Je(Co,S,Ns),Bi.add(l),l.syncRect=tn);let Sn=l.hooks=e.hooks||{};function Fe(i,r,c){ri?Ql.push([i,r,c]):i in Sn&&Sn[i].forEach(d=>{d.call(null,l,r,c)})}(e.plugins||[]).forEach(i=>{for(let r in i.hooks)Sn[r]=(Sn[r]||[]).concat(i.hooks[r])});let Is=(i,r,c)=>c,Ae=Le({key:null,setSeries:!1,filters:{pub:zo,sub:zo},scales:[L,b[1]?b[1].scale:null],match:[Ho,Ho,Is],values:[null,null]},O.sync);Ae.match.length==2&&Ae.match.push(Is),O.sync=Ae;let zs=Ae.key,gi=Nr(zs);function ln(i,r,c,d,m,v,w){Ae.filters.pub(i,r,c,d,m,v,w)&&gi.pub(i,r,c,d,m,v,w)}gi.sub(l);function xa(i,r,c,d,m,v,w){Ae.filters.sub(i,r,c,d,m,v,w)&&Il[i](null,r,c,d,m,v,w)}l.pub=xa;function Sa(){gi.unsub(l),Bi.delete(l),ll.clear(),Oi(Hn,Fl,Rs),u.remove(),ie==null||ie.remove(),Fe("destroy")}l.destroy=Sa;function mi(){Fe("init",e,t),ps(t||e.data,!1),U[L]?ai(L,U[L]):Jn(),mn=ve.show&&(ve.width>0||ve.height>0),sl=mt=!0,qn(e.width,e.height)}return b.forEach(fs),R.forEach(ta),n?n instanceof HTMLElement?(n.appendChild(u),mi()):n(l,mi):mi(),l}Ge.assign=Le;Ge.fmtNum=Zi;Ge.rangeNum=On;Ge.rangeLog=Wn;Ge.rangeAsinh=qi;Ge.orient=_l;Ge.pxRatio=ce;Ge.join=$c;Ge.fmtDate=Xi,Ge.tzDate=Rc;Ge.sync=Nr;{Ge.addGap=_u,Ge.clipGaps=Gn;let e=Ge.paths={points:Fr};e.linear=Wr,e.stepped=bu,e.bars=wu,e.spline=Su}var jr=window.location.pathname.split("/").filter(Boolean),$e=jr.length>1?jr[1]:"",Nu=$e==="";async function je(e,t={}){let n=await fetch(e,Be(De({},t),{headers:De({"Content-Type":"application/json"},t.headers||{}),credentials:"same-origin"}));if(!n.ok){if(n.status===401)throw window.location.href="/dashboard/login",new Error("Session expired");let l=await n.json().catch(()=>({}));throw new Error(l.detail||`HTTP ${n.status}`)}return n.status===204?null:n.json()}var Te={getStats:()=>je(`/dashboard/api/${$e}/stats`),getTimeseries:(e=30)=>je(`/dashboard/api/${$e}/timeseries?days=${e}`),getLeaderboard:()=>je(`/dashboard/api/${$e}/leaderboard`),listSignups:e=>{let t=new URLSearchParams(e).toString();return je(`/dashboard/api/${$e}/signups?${t}`)},listWebhooks:()=>je(`/dashboard/api/${$e}/webhooks`),createWebhook:e=>je(`/dashboard/api/${$e}/webhooks`,{method:"POST",body:JSON.stringify(e)}),deleteWebhook:e=>je(`/dashboard/api/${$e}/webhooks/${e}`,{method:"DELETE"}),listDeliveries:()=>je(`/dashboard/api/${$e}/deliveries`),getSettings:()=>je(`/dashboard/api/${$e}/settings`),updateSettings:e=>je(`/dashboard/api/${$e}/settings`,{method:"PATCH",body:JSON.stringify(e)}),inviteTopN:e=>je(`/dashboard/api/${$e}/invite`,{method:"POST",body:JSON.stringify({count:e})}),listInvited:(e={})=>je(`/dashboard/api/${$e}/invited?`+new URLSearchParams(e).toString()),listAPIKeys:()=>je(`/dashboard/api/${$e}/api-keys`),createAPIKey:e=>je(`/dashboard/api/${$e}/api-keys`,{method:"POST",body:JSON.stringify({name:e})}),revokeAPIKey:e=>je(`/dashboard/api/${$e}/api-keys/${e}`,{method:"DELETE"})},as={listCampaigns:()=>je("/dashboard/api/campaigns"),createCampaign:(e,t)=>je("/dashboard/api/campaigns",{method:"POST",body:JSON.stringify({name:e,product_url:t})})};function hn(e){return e?new Date(e).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"}):"\u2014"}function Ru(e){let t={verified:"badge-success",pending:"badge-warning",expired:"badge-muted",rejected:"badge-danger"}[e]||"badge-muted";return $`<span class=${`badge ${t}`}>${e}</span>`}function Iu(e){let t={delivered:"badge-success",pending:"badge-warning",failed:"badge-danger"}[e]||"badge-muted";return $`<span class=${`badge ${t}`}>${e}</span>`}function vl({text:e}){return $`<span class="tooltip-icon" data-tip=${e}>?</span>`}function pt(e,t=[]){let[n,l]=X({data:null,loading:!0,error:null}),s=ho(()=>{l(o=>Be(De({},o),{loading:!0,error:null})),e().then(o=>l({data:o,loading:!1,error:null})).catch(o=>l({data:null,loading:!1,error:o.message}))},t);return fl(()=>{s()},[s]),Be(De({},n),{reload:s})}function zu({days:e=30}){let t=Ti(null),n=Ti(null),{data:l,loading:s,error:o}=pt(()=>Te.getTimeseries(e),[e]);return fl(()=>{if(!l||!t.current)return;n.current&&(n.current.destroy(),n.current=null);let a=l.map(u=>new Date(u.date).getTime()/1e3),p=l.map(u=>u.count),h={width:t.current.offsetWidth||700,height:200,series:[{},{label:"Signups",stroke:"#4f46e5",fill:"rgba(79,70,229,0.08)",width:2}],axes:[{values:(u,_)=>_.map(f=>new Date(f*1e3).toLocaleDateString(void 0,{month:"short",day:"numeric"}))},{}],scales:{x:{time:!0}},cursor:{show:!1},legend:{show:!1}};return n.current=new Ge(h,[a,p],t.current),()=>{n.current&&(n.current.destroy(),n.current=null)}},[l]),s?$`<div class="loading">Loading chart…</div>`:o?$`<div class="alert alert-error">${o}</div>`:$`<div ref=${t}></div>`}function Hu(){var n;let e=pt(()=>Te.getStats(),[]),t=pt(()=>Te.getLeaderboard(),[]);return $`
    <h1 class="page-title">Overview</h1>
    ${e.loading?$`<div class="loading">Loading stats…</div>`:e.error?$`<div class="alert alert-error">${e.error}</div>`:$`
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
          <div class="stat-label" style="display:flex;align-items:center">Viral Coefficient <${vl} text="Average number of new signups each existing signup generates through referrals. Above 1.0 means exponential growth." /></div>
          <div class="stat-value">${e.data.viral_coefficient.toFixed(2)}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label" style="display:flex;align-items:center">Referral Rate <${vl} text="Percentage of total signups who joined via a referral link." /></div>
          <div class="stat-value">${(e.data.referral_rate*100).toFixed(1)}%</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Invited</div>
          <div class="stat-value">${(e.data.invited_signups||0).toLocaleString()}</div>
        </div>
      </div>
    `}

    ${((n=e.data)==null?void 0:n.total_signups)===0&&$`
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
      ${t.loading?$`<div class="loading">Loading…</div>`:t.error?$`<div class="alert alert-error">${t.error}</div>`:$`
        <table>
          <thead><tr><th>#</th><th>Email</th><th>Referrals</th><th>Position</th></tr></thead>
          <tbody>
            ${t.data.slice(0,10).map((l,s)=>$`
              <tr key=${l.id}>
                <td>${s+1}</td>
                <td>${l.email}</td>
                <td>${l.referral_count}</td>
                <td>${l.effective_position}</td>
              </tr>
            `)}
          </tbody>
        </table>
        ${t.data.length===0&&$`<div class="empty">No signups yet.</div>`}
      `}
    </div>
  `}function Ou(){let[e,t]=X(1),[n]=X(50),[l,s]=X(""),[o,a]=X(""),[p,h]=X(""),[u,_]=X("date"),{data:f,loading:g,error:y}=pt(()=>Te.listSignups({page:e,limit:n,status:l,search:o,sort:u}),[e,n,l,o,u]),S=(f==null?void 0:f.signups)||[],A=(f==null?void 0:f.total)||0,E=Math.max(1,Math.ceil(A/n));function k(b){b.preventDefault(),a(p),t(1)}return $`
    <h1 class="page-title">Signups</h1>
    <div class="table-card">
      <div class="table-header">
        <span class="table-title">${A.toLocaleString()} total</span>
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
        <a class="btn btn-secondary btn-sm" href=${`/dashboard/api/${$e}/signups/export.csv`} download>Export CSV</a>
      </div>

      ${g?$`<div class="loading">Loading…</div>`:y?$`<div class="alert alert-error" style="margin:16px">${y}</div>`:$`
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
            ${S.map(b=>$`
              <tr key=${b.id}>
                <td>${b.email}</td>
                <td>${Ru(b.status)}</td>
                <td>${b.effective_position}</td>
                <td>${b.referral_count}</td>
                <td>${hn(b.created_at)}</td>
              </tr>
            `)}
          </tbody>
        </table>
        ${S.length===0&&$`<div class="empty">No signups match your filters.</div>`}
        <div class="pagination">
          <span class="info">Page ${e} of ${E} (${A.toLocaleString()} results)</span>
          <button class="btn btn-secondary btn-sm" disabled=${e<=1} onClick=${()=>t(b=>b-1)}>← Prev</button>
          <button class="btn btn-secondary btn-sm" disabled=${e>=E} onClick=${()=>t(b=>b+1)}>Next →</button>
        </div>
      `}
    </div>
  `}function Fu(){let{data:e,loading:t,error:n}=pt(()=>Te.getLeaderboard(),[]);return $`
    <h1 class="page-title">Leaderboard</h1>
    <div class="table-card">
      <div class="table-header"><span class="table-title">Top Referrers</span></div>
      ${t?$`<div class="loading">Loading…</div>`:n?$`<div class="alert alert-error" style="margin:16px">${n}</div>`:$`
        <table>
          <thead><tr><th>Rank</th><th>Email</th><th>Referral Code</th><th>Referrals</th><th>Position</th></tr></thead>
          <tbody>
            ${e.map((l,s)=>$`
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
        ${e.length===0&&$`<div class="empty">No signups yet.</div>`}
      `}
    </div>
  `}function Vu(){let e=pt(()=>Te.listWebhooks(),[]),t=pt(()=>Te.listDeliveries(),[]),[n,l]=X({url:"",secret:"",events:[]}),[s,o]=X(!1),[a,p]=X(null),h=["signup.created","email.verified","referral.converted"];function u(g){l(y=>Be(De({},y),{events:y.events.includes(g)?y.events.filter(S=>S!==g):[...y.events,g]}))}async function _(g){if(g.preventDefault(),n.events.length===0){p({type:"error",text:"Select at least one event."});return}o(!0),p(null);try{await Te.createWebhook({url:n.url,secret:n.secret,events:n.events}),l({url:"",secret:"",events:[]}),p({type:"success",text:"Webhook endpoint created."}),e.reload()}catch(y){p({type:"error",text:y.message})}finally{o(!1)}}async function f(g){if(confirm("Delete this webhook endpoint?"))try{await Te.deleteWebhook(g),e.reload(),t.reload()}catch(y){p({type:"error",text:y.message})}}return $`
    <h1 class="page-title">Webhooks</h1>
    ${a&&$`<div class=${`alert alert-${a.type}`}>${a.text}</div>`}

    <div class="table-card">
      <div class="table-header"><span class="table-title">Endpoints</span></div>
      ${e.loading?$`<div class="loading">Loading…</div>`:e.error?$`<div class="alert alert-error" style="margin:16px">${e.error}</div>`:$`
        <table>
          <thead><tr><th>URL</th><th>Events</th><th>Active</th><th></th></tr></thead>
          <tbody>
            ${e.data.map(g=>$`
              <tr key=${g.id}>
                <td style="word-break:break-all">${g.url}</td>
                <td>${g.events.join(", ")}</td>
                <td>${g.active?$`<span class="badge badge-success">Active</span>`:$`<span class="badge badge-muted">Paused</span>`}</td>
                <td><button class="btn btn-danger btn-sm" onClick=${()=>f(g.id)}>Delete</button></td>
              </tr>
            `)}
          </tbody>
        </table>
        ${e.data.length===0&&$`<div class="empty">No webhook endpoints.</div>`}
        <form class="inline-form" onSubmit=${_}>
          <div class="form-group" style="flex:1;min-width:200px">
            <label>Endpoint URL</label>
            <input required type="url" value=${n.url} onInput=${g=>l(y=>Be(De({},y),{url:g.target.value}))} placeholder="https://example.com/webhook" />
          </div>
          <div class="form-group">
            <label>Secret (optional)</label>
            <input value=${n.secret} onInput=${g=>l(y=>Be(De({},y),{secret:g.target.value}))} placeholder="for HMAC signing" style="width:160px" />
          </div>
          <div class="form-group">
            <label>Events</label>
            <div style="display:flex;gap:8px;flex-wrap:wrap">
              ${h.map(g=>$`
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
      ${t.loading?$`<div class="loading">Loading…</div>`:t.error?$`<div class="alert alert-error" style="margin:16px">${t.error}</div>`:$`
        <table>
          <thead><tr><th>Endpoint</th><th>Event</th><th>Status</th><th>HTTP</th><th>Attempts</th><th>Time</th></tr></thead>
          <tbody>
            ${t.data.map((g,y)=>$`
              <tr key=${y}>
                <td style="max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title=${g.endpoint_url}>${g.endpoint_url}</td>
                <td><code>${g.event_type}</code></td>
                <td>${Iu(g.status)}</td>
                <td>${g.response_status||"\u2014"}</td>
                <td>${g.attempts}</td>
                <td>${hn(g.created_at)}</td>
              </tr>
            `)}
          </tbody>
        </table>
        ${t.data.length===0&&$`<div class="empty">No deliveries yet.</div>`}
      `}
    </div>
  `}function Yr({text:e}){let[t,n]=X(!1);function l(s){s.stopPropagation(),navigator.clipboard.writeText(e).then(()=>{n(!0),setTimeout(()=>n(!1),2e3)})}return $`<button class="btn btn-secondary btn-sm" style="padding:2px 6px;font-size:11px" onClick=${l}>${t?"\u2713":"Copy"}</button>`}function Wu(){return $`
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
  `}var Kl=50;function Uu(){var G,L;let e=pt(()=>Te.getStats(),[]),[t,n]=X(100),[l,s]=X(!1),[o,a]=X(null),[p,h]=X(""),[u,_]=X(0),[f,g]=X("");fl(()=>{let D=setTimeout(()=>{g(p),_(0)},300);return()=>clearTimeout(D)},[p]);let y=pt(()=>Te.listInvited({limit:Kl,offset:u,search:f}),[u,f]);async function S(D){D.preventDefault();let V=parseInt(t,10);if(!V||V<1){a({type:"error",text:"Enter a valid count."});return}if(confirm(`Invite the top ${V} people? They will receive an email immediately.`)){s(!0),a(null);try{let W=await Te.inviteTopN(V);a({type:"success",text:`\u2705 Invited ${W.invited} people. Total invited: ${W.total_invited}.`}),e.reload(),y.reload()}catch(W){a({type:"error",text:W.message})}finally{s(!1)}}}let A=e.data,E=A&&A.verified_signups||0,k=A&&A.invited_signups||0,b=((G=y.data)==null?void 0:G.total)||0,R=u>0,P=u+Kl<b;return $`
    <h1 class="page-title">Invitations</h1>

    <${Wu} />

    ${e.loading?$`<div class="loading">Loading…</div>`:$`
      <div class="stat-grid" style="margin-bottom:24px">
        <div class="stat-card">
          <div class="stat-label">Invited</div>
          <div class="stat-value">${k.toLocaleString()}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Verified (eligible)</div>
          <div class="stat-value">${(E-k).toLocaleString()}</div>
        </div>
        <div class="stat-card">
          <div class="stat-label">Total Verified</div>
          <div class="stat-value">${E.toLocaleString()}</div>
        </div>
      </div>
    `}

    ${o&&$`<div class=${`alert alert-${o.type}`}>${o.text}</div>`}

    <div class="settings-section">
      <div class="settings-title">Invite top N</div>
      <p style="font-size:14px;color:var(--muted);margin-bottom:16px">
        Marks the top N verified signups (by queue position) as invited and sends them an email immediately.
        Already-invited people are skipped — this is safe to run multiple times.
      </p>
      <form onSubmit=${S} style="display:flex;align-items:flex-end;gap:12px">
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
      ${y.loading?$`<div class="loading">Loading…</div>`:y.error?$`<div class="alert alert-error">${y.error}</div>`:$`
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
            ${(((L=y.data)==null?void 0:L.signups)||[]).map(D=>$`
              <tr key=${D.id}>
                <td>${D.email}</td>
                <td>
                  ${D.invite_token?$`
                    <span style="display:flex;align-items:center;gap:6px">
                      <code style="font-size:12px;color:var(--muted)">${D.invite_token.slice(0,12)}…</code>
                      <${Yr} text=${D.invite_token} />
                    </span>
                  `:$`<span style="color:var(--muted)">—</span>`}
                </td>
                <td>
                  ${D.invite_token_redeemed_at?$`<span style="color:var(--success)">✓ ${hn(D.invite_token_redeemed_at)}</span>`:$`<span style="color:var(--muted)">—</span>`}
                </td>
                <td>${D.effective_position}</td>
                <td>${D.referral_count}</td>
                <td>${D.invited_at?new Date(D.invited_at).toLocaleString():"\u2014"}</td>
              </tr>
            `)}
          </tbody>
        </table>
        ${b===0&&$`<div class="empty">${f?"No results for that search.":"No one invited yet."}</div>`}
        ${b>Kl&&$`
          <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;font-size:13px;color:var(--muted);border-top:1px solid var(--border)">
            <span>Showing ${u+1}–${Math.min(u+Kl,b)} of ${b.toLocaleString()}</span>
            <div style="display:flex;gap:8px">
              <button class="btn btn-secondary btn-sm" disabled=${!R} onClick=${()=>_(D=>D-Kl)}>← Prev</button>
              <button class="btn btn-secondary btn-sm" disabled=${!P} onClick=${()=>_(D=>D+Kl)}>Next →</button>
            </div>
          </div>
        `}
      `}
    </div>
  `}function Bu(){var f,g;let e=pt(()=>Te.listAPIKeys(),[]),[t,n]=X(""),[l,s]=X(!1),[o,a]=X(null),[p,h]=X(null);async function u(y){if(y.preventDefault(),!!t.trim()){s(!0),h(null);try{let S=await Te.createAPIKey(t.trim());a({id:S.id,value:S.api_key}),n(""),e.reload()}catch(S){h(S.message)}finally{s(!1)}}}async function _(y,S){if(confirm(`Revoke key "${S}"? It will stop working immediately.`)){h(null);try{await Te.revokeAPIKey(y),(o==null?void 0:o.id)===y&&a(null),e.reload()}catch(A){h(A.message)}}}return $`
    <div class="settings-section">
      <div class="settings-title">API Keys</div>
      <p style="font-size:14px;color:var(--muted);margin-bottom:16px">
        API keys authenticate programmatic access to your campaign via the REST API or MCP server.
      </p>
      ${p&&$`<div class="alert alert-error" style="margin-bottom:12px">${p}</div>`}

      ${o&&$`
        <div class="alert alert-success" style="margin-bottom:16px">
          <div style="margin-bottom:6px;font-weight:600">New key created — copy it now. It will not be shown again.</div>
          <div class="api-key-display">
            <span class="api-key-mono" style="word-break:break-all">${o.value}</span>
            <${Yr} text=${o.value} />
          </div>
        </div>
      `}

      ${e.loading&&$`<div class="loading" style="margin-bottom:12px">Loading…</div>`}
      ${((f=e.data)==null?void 0:f.length)>0&&$`
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
            ${e.data.map(y=>$`
              <tr>
                <td style="font-weight:500">${y.name}</td>
                <td style="color:var(--muted);font-size:13px">${hn(y.created_at)}</td>
                <td style="color:var(--muted);font-size:13px">${y.last_used_at?hn(y.last_used_at):"\u2014"}</td>
                <td style="text-align:right">
                  <button class="btn btn-danger btn-sm" onClick=${()=>_(y.id,y.name)}>Revoke</button>
                </td>
              </tr>
            `)}
          </tbody>
        </table>
      `}
      ${!e.loading&&((g=e.data)==null?void 0:g.length)===0&&$`
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
  `}function Gu(){var h;let e=pt(()=>Te.getSettings(),[]),[t,n]=X(null),[l,s]=X(!1),[o,a]=X(null);fl(()=>{e.data&&!t&&n(e.data)},[e.data]);async function p(u){u.preventDefault(),s(!0),a(null);try{await Te.updateSettings({name:t.name,boost_weight:parseFloat(t.boost_weight),max_signups:t.max_signups?parseInt(t.max_signups,10):null,status:t.status,product_url:t.product_url}),a({type:"success",text:"Settings saved."}),e.reload()}catch(_){a({type:"error",text:_.message})}finally{s(!1)}}return e.loading?$`<div class="loading">Loading…</div>`:e.error?$`<div class="alert alert-error">${e.error}</div>`:$`
    <h1 class="page-title">Settings</h1>
    ${o&&$`<div class=${`alert alert-${o.type}`}>${o.text}</div>`}

    ${t&&$`
      <div class="settings-section">
        <div class="settings-title">Campaign Settings</div>
        <form onSubmit=${p}>
          <div class="form-row">
            <div class="form-group" style="flex:1;min-width:200px">
              <label>Campaign Name</label>
              <input required value=${t.name||""} onInput=${u=>n(_=>Be(De({},_),{name:u.target.value}))} />
            </div>
            <div class="form-group">
              <label>Status</label>
              <select value=${t.status||""} onChange=${u=>n(_=>Be(De({},_),{status:u.target.value}))}>
                <option value="active">Active</option>
                <option value="paused">Paused</option>
                <option value="full">Full</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label style="display:flex;align-items:center">Boost Weight <${vl} text="How many queue positions each referral is worth. Default 1.0 means 1 referral moves you up 1 spot. Increase to make referrals more powerful." /></label>
              <input type="number" step="0.1" min="0" value=${(h=t.boost_weight)!=null?h:1}
                onInput=${u=>n(_=>Be(De({},_),{boost_weight:u.target.value}))} style="width:120px" />
            </div>
            <div class="form-group">
              <label style="display:flex;align-items:center">Max Signups <${vl} text="Cap the total number of signups. New registrations are rejected once the cap is reached. Leave blank for unlimited." /></label>
              <input type="number" min="1" value=${t.max_signups||""}
                onInput=${u=>n(_=>Be(De({},_),{max_signups:u.target.value||null}))} style="width:140px" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group" style="flex:1">
              <label style="display:flex;align-items:center">Product URL <${vl} text="Your product's URL. Used as the CTA link in invite emails and to restrict the widget to your domain — the widget will only work when embedded on this origin (e.g. https://yoursite.com)." /></label>
              <input required type="url" placeholder="https://yourproduct.com" value=${t.product_url||""}
                onInput=${u=>n(_=>Be(De({},_),{product_url:u.target.value}))} />
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
            onClick=${async()=>{if(confirm("Pause this campaign?"))try{await Te.updateSettings({status:"paused"}),e.reload(),n(u=>Be(De({},u),{status:"paused"}))}catch(u){a({type:"error",text:u.message})}}}>
            Pause Campaign
          </button>
          <button class="btn btn-secondary"
            disabled=${t.status==="active"}
            onClick=${async()=>{try{await Te.updateSettings({status:"active"}),e.reload(),n(u=>Be(De({},u),{status:"active"}))}catch(u){a({type:"error",text:u.message})}}}>
            Resume Campaign
          </button>
        </div>
      </div>
    `}
  `}var ju=[{id:"none",label:"Not signed in"},{id:"signed_in",label:"Signed in"},{id:"invited",label:"Invited"}],Yu=[{color:"#6366f1",label:"Indigo"},{color:"#3b82f6",label:"Blue"},{color:"#10b981",label:"Emerald"},{color:"#f59e0b",label:"Amber"},{color:"#ef4444",label:"Red"},{color:"#8b5cf6",label:"Violet"},{color:"#ec4899",label:"Pink"},{color:"#000000",label:"Black"}];function Ku(e,t){let n={id:"preview",campaign_id:"preview-cid",email:"you@example.com",referral_code:"PRVW0001",base_position:1,effective_position:1,referral_count:0,status:"verified"},l=t==="invited"?Be(De({},n),{status:"invited"}):n,s=t!=="none",o=De({campaign_id:"preview-cid",campaign_name:"My Product",slug:e,total_signups:0},s?{signup:l}:{}),a=JSON.stringify(`ep_${e}`),p=JSON.stringify(JSON.stringify(l));return`<script>(function(){${s?`var _ls={};_ls[${a}]=${p};try{Object.defineProperty(window,'localStorage',{get:function(){return{getItem:function(k){return Object.prototype.hasOwnProperty.call(_ls,k)?_ls[k]:null;},setItem:function(k,v){_ls[k]=String(v);},removeItem:function(k){delete _ls[k];},clear:function(){_ls={};},key:function(i){return Object.keys(_ls)[i]||null;},get length(){return Object.keys(_ls).length;}};},configurable:true});}catch(e){}`:""};var _d=${JSON.stringify(o)};var _s=${JSON.stringify(l)};var _f=window.fetch.bind(window);window.fetch=function(u,o){var us=String(u);if(us.indexOf('/api/v1/w/')!==-1)return Promise.resolve(new Response(JSON.stringify(_d),{status:200,headers:{'Content-Type':'application/json'}}));if(us.indexOf('/api/v1/campaigns/')!==-1&&o&&o.method==='POST')return Promise.resolve(new Response(JSON.stringify(_s),{status:200,headers:{'Content-Type':'application/json'}}));return _f(u,o);};})();<\/script>`}function os(e,t,n,l,s,o){let a=e==="dark"?"#111827":"#f3f4f6",p=Ku(n,l);return['<!DOCTYPE html><html><head><meta charset="UTF-8">','<meta name="viewport" content="width=device-width,initial-scale=1">',`<base href="${o}/">`,"<style>*{box-sizing:border-box;margin:0;padding:0}",`body{padding:24px 16px;background:${a};min-height:100%;display:flex;justify-content:center;}`,"early-pass{width:min(28rem,100%)}</style>","</head><body>",p,`<early-pass data-campaign="${n}" data-theme="${e}" data-accent="${t}"></early-pass>`,`<script src="${s}/widget/widget.js"><\/script>`,"</body></html>"].join("")}function qu(){let e=pt(()=>Te.getSettings(),[]),[t,n]=X("light"),[l,s]=X("#6366f1"),[o,a]=X("light"),[p,h]=X("#6366f1"),[u,_]=X("none"),[f,g]=X(!1);if(e.loading)return $`<div class="loading">Loading…</div>`;if(e.error)return $`<div class="alert alert-error">${e.error}</div>`;let y=e.data.base_url||window.location.origin,S=window.location.origin,A=e.data.product_url||"https://your-product.com",E=[`data-campaign="${$e}"`];t!=="light"&&E.push(`data-theme="${t}"`),l.toLowerCase()!=="#6366f1"&&E.push(`data-accent="${l}"`);let k=E.length>1?`
        `+E.join(`
        `):" "+E[0],b=`<script src="${y}/widget/widget.js"${k} async><\/script>`,R=`${o}:${p}`,P={none:os(o,p,$e,"none",S,A),signed_in:os(o,p,$e,"signed_in",S,A),invited:os(o,p,$e,"invited",S,A)},G=`${u}:${R}`;function L(x){n(x),a(x)}function D(x){s(x)}function V(x){s(x),/^#[0-9a-fA-F]{6}$/.test(x)&&h(x)}function W(x){s(x),h(x)}function B(){navigator.clipboard.writeText(b).then(()=>{g(!0),setTimeout(()=>g(!1),2e3)})}return $`
    <h1 class="page-title">Setup</h1>

    <div class="setup-grid">

      <div class="setup-left-col">

        <div class="settings-section">
          <div class="settings-title">Customize widget</div>

          <div class="form-group" style="margin-bottom:20px">
            <label>Theme</label>
            <div class="setup-theme-cards">
              ${["light","dark"].map(x=>$`
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
              ${Yu.map(({color:x,label:Y})=>$`
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
            ${["Customize the widget theme and color above","Copy the embed code",$`Paste it before <code>${"</body>"}</code> in your page HTML`,"Publish your page","Share your link and watch signups roll in"].map((x,Y)=>$`
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
            <div class="preview-chrome-url">${A}</div>
          </div>

          <div class="preview-tabs">
            ${ju.map(x=>$`
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
  `}function Ju(){let{data:e,loading:t,error:n}=pt(()=>as.listCampaigns(),[]),[l,s]=X(""),[o,a]=X(""),[p,h]=X(!1),[u,_]=X(!1),[f,g]=X(null);async function y(k){k.preventDefault(),h(!0),g(null);try{let b=await as.createCampaign(l.trim(),o.trim());window.location.href=`/dashboard/${b.slug}/`}catch(b){g({type:"error",text:b.message}),h(!1)}}let S=k=>({active:"badge-success",paused:"badge-warning"})[k]||"badge-muted",A=!t&&!n&&e&&e.length>0,E=!t&&!n&&e&&e.length===0;return $`
    <div class="header">
      <span class="header-logo">EarlyPass</span>
      <form method="POST" action="/dashboard/logout" style="margin-left:auto">
        <button class="btn btn-secondary btn-sm" type="submit">Sign out</button>
      </form>
    </div>
    <div class="main-content">
      ${A&&$`
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px">
          <h1 class="page-title" style="margin:0">My Campaigns</h1>
          <button class="btn btn-primary" onClick=${()=>{_(!0),g(null)}}>+ New campaign</button>
        </div>
      `}

      ${f&&$`<div class=${`alert alert-${f.type}`}>${f.text}</div>`}

      ${t?$`<div class="loading">Loading campaigns…</div>`:n?$`<div class="alert alert-error">${n}</div>`:E&&!u?$`
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
        `:E&&u?$`
          <div style="max-width:480px;margin:40px auto 0">
            <h2 style="font-size:20px;font-weight:700;margin:0 0 24px">Create your first campaign</h2>
            ${f&&$`<div class=${`alert alert-${f.type}`} style="margin-bottom:16px">${f.text}</div>`}
            <form onSubmit=${y}>
              <div class="form-group" style="margin-bottom:16px">
                <label>Campaign name</label>
                <input required autoFocus value=${l}
                  onInput=${k=>s(k.target.value)}
                  placeholder="My Product Waitlist" maxlength="200" />
              </div>
              <div class="form-group" style="margin-bottom:16px">
                <label style="display:flex;align-items:center">Product URL <${vl} text="Your product's URL. Used as the CTA link in invite emails and to restrict the widget to your domain — the widget will only work when embedded on this origin (e.g. https://yoursite.com)." /></label>
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
        `:$`
          <div>
            ${u&&$`
              <div class="settings-section" style="margin-bottom:24px;max-width:480px">
                <div class="settings-title">Create campaign</div>
                ${f&&$`<div class=${`alert alert-${f.type}`} style="margin-bottom:16px">${f.text}</div>`}
                <form onSubmit=${y}>
                  <div class="form-group" style="margin-bottom:16px">
                    <label>Campaign name</label>
                    <input required autoFocus value=${l}
                      onInput=${k=>s(k.target.value)}
                      placeholder="My Product Waitlist" maxlength="200" />
                  </div>
                  <div class="form-group" style="margin-bottom:16px">
                    <label style="display:flex;align-items:center">Product URL <${vl} text="Your product's URL. Used as the CTA link in invite emails and to restrict the widget to your domain — the widget will only work when embedded on this origin (e.g. https://yoursite.com)." /></label>
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
              ${e&&e.map(k=>$`
                <a key=${k.slug} href=${`/dashboard/${k.slug}/`}
                  style="display:block;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:20px;text-decoration:none;color:inherit;transition:border-color 0.15s"
                  onMouseOver=${b=>b.currentTarget.style.borderColor="var(--primary)"}
                  onMouseOut=${b=>b.currentTarget.style.borderColor="var(--border)"}>
                  <div style="display:flex;align-items:center;justify-content:space-between">
                    <div>
                      <div style="font-weight:600;font-size:15px;margin-bottom:4px">${k.name}</div>
                      <div style="color:var(--muted);font-size:13px">${k.slug}</div>
                    </div>
                    <span class=${`badge ${S(k.status)}`}>${k.status}</span>
                  </div>
                </a>
              `)}
            </div>
          </div>
        `}
    </div>
  `}var rs=[{id:"overview",label:"\u{1F4CA} Overview",Component:Hu},{id:"setup",label:"\u{1F680} Setup",Component:qu},{id:"signups",label:"\u{1F465} Signups",Component:Ou},{id:"leaderboard",label:"\u{1F3C6} Leaderboard",Component:Fu},{id:"invitations",label:"\u{1F4EC} Invitations",Component:Uu},{id:"webhooks",label:"\u{1F517} Webhooks",Component:Vu},{id:"settings",label:"\u2699\uFE0F Settings",Component:Gu}];function Zu(){let e=()=>window.location.hash.slice(1)||"overview",[t,n]=X(e),[l,s]=X(""),[o,a]=X([]);fl(()=>{window.location.hash==="#access"&&window.location.replace("#invitations"),Te.getSettings().then(h=>s(h.name||$e)).catch(()=>{}),as.listCampaigns().then(h=>a(h)).catch(()=>{})},[]),fl(()=>{let h=()=>n(e());return window.addEventListener("hashchange",h),()=>window.removeEventListener("hashchange",h)},[]);let p=rs.find(h=>h.id===t)||rs[0];return $`
    <div class="header">
      <a href="/dashboard/" style="font-weight:700;font-size:16px;color:var(--primary);text-decoration:none">EarlyPass</a>
      <div style="display:flex;align-items:center;gap:8px;margin-left:auto">
        ${o.length>1?$`
          <select
            value=${$e}
            onChange=${h=>{window.location.href=`/dashboard/${h.target.value}/`}}
            style="font-size:13px;padding:4px 8px;border:1px solid var(--border);border-radius:6px;background:var(--surface);color:var(--text)">
            ${o.map(h=>$`
              <option key=${h.slug} value=${h.slug}>${h.name}</option>
            `)}
          </select>
        `:$`
          <span class="header-campaign">${l||$e}</span>
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
        ${rs.map(h=>$`
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
  `}$i(Nu?$`<${Ju} />`:$`<${Zu} />`,document.getElementById("app"));
