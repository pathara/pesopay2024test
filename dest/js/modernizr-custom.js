!function(s,c,d){function m(e,n){return typeof e===n}function y(){return"function"!=typeof c.createElement?c.createElement(arguments[0]):g?c.createElementNS.call(c,"http://www.w3.org/2000/svg",arguments[0]):c.createElement.apply(c,arguments)}function l(e,n){return function(){return e.apply(n,arguments)}}function o(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function i(e,n,t,r){var o,s,i,l,a,f="modernizr",u=y("div"),p=((a=c.body)||((a=y(g?"svg":"body")).fake=!0),a);if(parseInt(t,10))for(;t--;)(i=y("div")).id=r?r[t]:f+(t+1),u.appendChild(i);return(o=y("style")).type="text/css",o.id="s"+f,(p.fake?p:u).appendChild(o),p.appendChild(u),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(c.createTextNode(e)),u.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",l=v.style.overflow,v.style.overflow="hidden",v.appendChild(p)),s=n(u,e),p.fake?(p.parentNode.removeChild(p),v.style.overflow=l,v.offsetHeight):u.parentNode.removeChild(u),!!s}function h(e,n){var t=e.length;if("CSS"in s&&"supports"in s.CSS){for(;t--;)if(s.CSS.supports(o(e[t]),n))return!0;return!1}if("CSSSupportsRule"in s){for(var r=[];t--;)r.push("("+o(e[t])+":"+n+")");return i("@supports ("+(r=r.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"==function(e,n,t){var r;if("getComputedStyle"in s){r=getComputedStyle.call(s,e,n);var o=s.console;null!==r?t&&(r=r.getPropertyValue(t)):o&&o[o.error?"error":"log"].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else r=!n&&e.currentStyle&&e.currentStyle[t];return r}(e,null,"position")})}return d}function r(e,n,t,r,o){var s=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+p.join(s+" ")+s).split(" ");return m(n,"string")||m(n,"undefined")?function(e,n,t,r){function o(){i&&(delete S.style,delete S.modElem)}if(r=!m(r,"undefined")&&r,!m(t,"undefined")){var s=h(e,t);if(!m(s,"undefined"))return s}for(var i,l,a,f,u,p=["modernizr","tspan","samp"];!S.style&&p.length;)i=!0,S.modElem=y(p.shift()),S.style=S.modElem.style;for(a=e.length,l=0;l<a;l++)if(f=e[l],u=S.style[f],!!~(""+f).indexOf("-")&&(f=f.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")),S.style[f]!==d){if(r||m(t,"undefined"))return o(),"pfx"!=n||f;try{S.style[f]=t}catch(e){}if(S.style[f]!=u)return o(),"pfx"!=n||f}return o(),!1}(i,n,r,o):function(e,n,t){var r;for(var o in e)if(e[o]in n)return!1===t?e[o]:m(r=n[e[o]],"function")?l(r,t||n):r;return!1}(i=(e+" "+C.join(s+" ")+s).split(" "),n,t)}function e(e,n,t){return r(e,d,d,n,t)}var a=[],f=[],n={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){f.push({name:e,fn:n,options:t})},addAsyncTest:function(e){f.push({name:null,fn:e})}},u=function(){};u.prototype=n,u=new u;var v=c.documentElement,g="svg"===v.nodeName.toLowerCase(),t="Moz O ms Webkit",p=n._config.usePrefixes?t.split(" "):[];n._cssomPrefixes=p;var C=n._config.usePrefixes?t.toLowerCase().split(" "):[];n._domPrefixes=C;var w={elem:y("modernizr")};u._q.push(function(){delete w.elem});var S={style:w.elem.style};u._q.unshift(function(){delete S.style}),n.testAllProps=r,n.testAllProps=e,u.addTest("cssanimations",e("animationName","a",!0)),function(){var e,n,t,r,o,s;for(var i in f)if(f.hasOwnProperty(i)){if(e=[],(n=f[i]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=m(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)1===(s=e[o].split(".")).length?u[s[0]]=r:(!u[s[0]]||u[s[0]]instanceof Boolean||(u[s[0]]=new Boolean(u[s[0]])),u[s[0]][s[1]]=r),a.push((r?"":"no-")+s.join("-"))}}(),function(e){var n=v.className,t=u._config.classPrefix||"";if(g&&(n=n.baseVal),u._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}u._config.enableClasses&&(n+=" "+t+e.join(" "+t),g?v.className.baseVal=n:v.className=n)}(a),delete n.addTest,delete n.addAsyncTest;for(var x=0;x<u._q.length;x++)u._q[x]();s.Modernizr=u}(window,document);