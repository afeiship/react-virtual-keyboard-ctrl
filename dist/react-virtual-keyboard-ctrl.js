!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-append-to-document"),require("react-number-keyboard"),require("react-popup")):"function"==typeof define&&define.amd?define(["classnames","noop","object-assign","prop-types","react","react-append-to-document","react-number-keyboard","react-popup"],t):"object"==typeof exports?exports.ReactVirtualKeyboardCtrl=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-append-to-document"),require("react-number-keyboard"),require("react-popup")):e.ReactVirtualKeyboardCtrl=t(e.classnames,e.noop,e["object-assign"],e["prop-types"],e.react,e["react-append-to-document"],e["react-number-keyboard"],e["react-popup"])}(this,function(e,t,n,r,o,a,i,u){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ReactVirtualKeyboardCtrl=t.TYPES=void 0;var o=n(7),a=r(o),i=n(1),u=r(i);t.TYPES=u.default,t.ReactVirtualKeyboardCtrl=a.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["blank","identity","number","currency"];t.items=[{role:"ok",text:"确定",action:"ok"}]},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,c,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(6),d=r(p),h=n(5),b=r(h),y=n(2),m=r(y),v=n(3),g=r(v),x=n(4),k=r(x),_=n(11),w=r(_),j=n(10),O=r(j),C=n(9),P=r(C),E=n(1),L=r(E),N=n(8),R=r(N),M=(c=s=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._onChange=function(e){var t=n.state.onChange,r=e.target.value;t({target:{value:n.getValue(r)}})},n._onClick=function(e){n.hide()},n.state=l({},e),n}return u(t,e),f(t,null,[{key:"newInstance",value:function(e){return(0,P.default)(this,e,{className:"react-virtual-keyboard-container"})}},{key:"createInstance",value:function(e){return this._instance=this._instance||this.newInstance(e),this._instance}},{key:"show",value:function(e){return this._instance.component.show(e)}},{key:"hide",value:function(){return this._instance.component.hide()}},{key:"update",value:function(e){return this._instance.component.update(e)}},{key:"destroy",value:function(){this._instance&&(this._instance.destroy(),this._instance=null)}}]),f(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(e)}},{key:"componentWillUnmount",value:function(){this.hide()}},{key:"getValue",value:function(e){if(Array.isArray(e)){var t=e.map(function(e){return e.content});return t.join("")}return e}},{key:"update",value:function(e){var t=this,n=(0,k.default)(l({},this.props),e);return new Promise(function(e){t.setState(n,function(){e()})})}},{key:"show",value:function(e){var t=this,n=this.refs.popup;return new Promise(function(r){t.update(e).then(function(){n.show().then(r)})})}},{key:"hide",value:function(){var e=this.refs.popup;return new Promise(function(t,n){e.hide().then(t)})}},{key:"render",value:function(){var e=this.props,t=e.className,n=(e.maxLength,o(e,["className","maxLength"])),r=this.state.value,a=this.kbItems;return d.default.createElement(w.default,l({},n,{ref:"popup",backdrop:!1,className:(0,m.default)("react-virtual-keyboard-ctrl",t)}),d.default.createElement(R.default,{items:E.items,onClick:this._onClick}),d.default.createElement(O.default,{onChange:this._onChange,maxLength:this.state.maxLength,items:(0,j.generator)(a.key,a.ignore),value:r.slice(0)}))}},{key:"kbItems",get:function(){var e=this.state.type;switch(e){case"identity":return{key:"X",ignore:!1};case"number":return{key:"00",ignore:!1};case"currency":return{key:".",ignore:!1};default:return{key:"",ignore:!0}}}}]),t}(p.PureComponent),s.propTypes={className:b.default.string,maxLength:b.default.number,onChange:b.default.func,onShown:b.default.func,onHidden:b.default.func,value:b.default.oneOfType([b.default.string,b.default.array]),type:b.default.oneOf(L.default)},s.defaultProps={type:"blank",value:[],maxLength:Number.MAX_VALUE,onChange:g.default,onShown:g.default,onHidden:g.default},s._instance=null,c);t.default=M},function(e,t,n){!function(t,r){e.exports=r(n(2),n(3),n(4),n(5),n(6))}(this,function(e,t,n,r,o){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o);t.default=a.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,c,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(5);var p=n(10),d=r(p),h=n(9),b=r(h),y=n(6),m=r(y),v=n(7),g=r(v),x=n(8),k=(r(x),c=s=function(e){function t(){var e,n,r,o;a(this,t);for(var u=arguments.length,s=Array(u),c=0;c<u;c++)s[c]=arguments[c];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r._onClick=function(e){var t=r.props.onClick;t(e)},o=n,i(r,o)}return u(t,e),f(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.placeholder,r=(e.items,e.onClick,o(e,["className","placeholder","items","onClick"]));return d.default.createElement("section",l({},r,{className:(0,m.default)("react-ios-toolbar",t)}),n&&d.default.createElement("span",{className:"react-ios-toolbar-placeholder"},n),d.default.createElement("div",{className:"react-ios-toolbar-inner"},this.children))}},{key:"children",get:function(){var e=this,t=this.props.items;return t.map(function(t,n){return d.default.createElement("label",{key:n,"data-role":t.role,onClick:e._onClick.bind(e,t),className:"react-ios-toolbar-item"},t.text)})}}]),t}(p.PureComponent),s.propTypes={className:b.default.string,placeholder:b.default.string,items:b.default.array,onClick:b.default.func},s.defaultProps={items:[],onClick:g.default},c);t.default=k},function(e,t,n){t=e.exports=n(3)(),t.push([e.id,'.react-ios-toolbar{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;position:relative;left:0;bottom:0;background:#f7f7f8;height:44px;font-size:17px}.react-ios-toolbar-item{-webkit-box-flex:1;-ms-flex:1;flex:1}.react-ios-toolbar-item[data-role=cancel]{color:#929292}.react-ios-toolbar-item[data-role=ok]{color:#007aff}.react-ios-toolbar-placeholder{color:#bbb;position:absolute;font-size:15px;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.react-ios-toolbar:before{content:"";position:absolute;left:0;top:0;bottom:auto;right:auto;height:1px;width:100%;background-color:#c4c4c4;display:block;z-index:15;-webkit-transform-origin:50% 0;transform-origin:50% 0}.react-ios-toolbar-inner{position:absolute;left:0;top:0;width:100%;height:100%;padding:0 8px;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.react-ios-toolbar-inner :first-child{text-align:left}.react-ios-toolbar-inner :last-child{text-align:right}',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(c(r.parts[a],t))}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(c(r.parts[a],t));d[r.id]={id:r.id,refs:1,parts:i}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],a=o[0],i=o[1],u=o[2],s=o[3],c={css:i,media:u,sourceMap:s};n[a]?n[a].parts.push(c):t.push(n[a]={id:a,parts:[c]})}return t}function a(e,t){var n=y(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function u(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function c(e,t){var n,r,o;if(t.singleton){var a=v++;n=m||(m=u(t)),r=l.bind(null,n,a,!1),o=l.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),r=p.bind(null,n),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(t),r=f.bind(null,n),o=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function l(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=h(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),y=h(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,v=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var a=[],i=0;i<n.length;i++){var u=n[i],s=d[u.id];s.refs--,a.push(s)}if(e){var c=o(e);r(c,t)}for(var i=0;i<a.length;i++){var s=a[i];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete d[s.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.id,r,""]]),n(4)(r,{}),r.locals&&(e.exports=r.locals)},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o}])})},function(e,t){e.exports=a},function(e,t){e.exports=i},function(e,t){e.exports=u}])});
//# sourceMappingURL=react-virtual-keyboard-ctrl.js.map