!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("next-dom-event"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-append-to-document"),require("react-ios-toolbar"),require("react-number-keyboard"),require("react-popup")):"function"==typeof define&&define.amd?define(["classnames","next-dom-event","noop","object-assign","prop-types","react","react-append-to-document","react-ios-toolbar","react-number-keyboard","react-popup"],t):"object"==typeof exports?exports.ReactVirtualKeyboardCtrl=t(require("classnames"),require("next-dom-event"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-append-to-document"),require("react-ios-toolbar"),require("react-number-keyboard"),require("react-popup")):e.ReactVirtualKeyboardCtrl=t(e.classnames,e["next-dom-event"],e.noop,e["object-assign"],e["prop-types"],e.react,e["react-append-to-document"],e["react-ios-toolbar"],e["react-number-keyboard"],e["react-popup"])}(this,function(e,t,n,r,o,a,u,i,c,s){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ReactVirtualKeyboardCtrl=t.TYPES=void 0;var o=n(2),a=r(o),u=n(1),i=r(u);t.TYPES=i.default,t.ReactVirtualKeyboardCtrl=a.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["blank","identity","number","currency"];t.items=[{role:"ok",text:"完成",action:"ok",style:{textAlign:"center"}}]},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c,s,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(8),d=r(p),y=n(7),h=r(y),m=n(3),b=r(m),v=n(5),k=r(v),g=n(6),x=r(g),_=n(12),w=r(_),j=n(11),q=r(j),C=n(9),O=r(C),P=n(1),E=r(P),L=n(10),S=r(L),V=n(4),M=(r(V),s=c=function(e){function t(e){a(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._onChange=function(e){var t=n.state.onChange,r=e.target.value;t({target:{value:n.getValue(r)}})},n._onClick=function(e){n.hide()},n.state=l({},e),n}return i(t,e),f(t,null,[{key:"newInstance",value:function(e){return(0,O.default)(this,e,{className:"react-virtual-keyboard-container"})}},{key:"createInstance",value:function(e){return this._instance=this._instance||this.newInstance(e),this._instance}},{key:"show",value:function(e){return this._instance.component.show(e)}},{key:"hide",value:function(){return this._instance.component.hide()}},{key:"update",value:function(e){return this._instance.component.update(e)}},{key:"destroy",value:function(){this._instance&&(this._instance.destroy(),this._instance=null)}}]),f(t,[{key:"componentWillReceiveProps",value:function(e){this.setState(e)}},{key:"componentWillUnmount",value:function(){this.hide()}},{key:"getValue",value:function(e){if(Array.isArray(e)){var t=e.map(function(e){return e.content});return t.join("")}return e}},{key:"update",value:function(e){var t=this,n=(0,x.default)(l({},this.props),e);return new Promise(function(e){t.setState(n,function(){e()})})}},{key:"show",value:function(e){var t=this,n=this.refs.popup;return new Promise(function(r){t.update(e).then(function(){n.show().then(r)})})}},{key:"hide",value:function(){var e=this.refs.popup;return new Promise(function(t,n){e.hide().then(t)})}},{key:"render",value:function(){var e=this.props,t=e.className,n=(e.maxLength,e.onDocClick,o(e,["className","maxLength","onDocClick"])),r=this.state.value,a=this.kbItems;return d.default.createElement(w.default,l({},n,{ref:"popup",backdrop:!1,className:(0,b.default)("react-virtual-keyboard-ctrl",t)}),d.default.createElement(S.default,{items:P.items,onClick:this._onClick}),d.default.createElement(q.default,{onChange:this._onChange,maxLength:this.state.maxLength,items:(0,j.generator)(a.key,a.ignore),value:r.slice(0)}))}},{key:"kbItems",get:function(){var e=this.state.type;switch(e){case"identity":return{key:"X",ignore:!1};case"number":return{key:"00",ignore:!1};case"currency":return{key:".",ignore:!1};default:return{key:"",ignore:!0}}}}]),t}(p.PureComponent),c.propTypes={className:h.default.string,maxLength:h.default.number,onChange:h.default.func,onShown:h.default.func,onHidden:h.default.func,onDocClick:h.default.func,value:h.default.oneOfType([h.default.string,h.default.array]),type:h.default.oneOf(E.default)},c.defaultProps={type:"blank",value:[],maxLength:Number.MAX_VALUE,onChange:k.default,onShown:k.default,onHidden:k.default,onDocClick:k.default},c._instance=null,s);t.default=M},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t){e.exports=a},function(e,t){e.exports=u},function(e,t){e.exports=i},function(e,t){e.exports=c},function(e,t){e.exports=s}])});
//# sourceMappingURL=react-virtual-keyboard-ctrl.js.map