(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){},15:function(t,e,n){t.exports=n(27)},26:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(1),i=n.n(a),c=n(3),u=n(4),l=n(5),s=n(8),h=n(6),f=n(9),d=n(7),m=n(12),p=n(2),v=n(14),y=n(13),g=n.n(y);n(10);function b(){b=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(S){u=function(t,e,n){return t[e]=n}}function l(t,e,n,o){var a=e&&e.prototype instanceof f?e:f,i=Object.create(a.prototype),c=new j(o||[]);return r(i,"_invoke",{value:x(t,n,c)}),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(S){return{type:"throw",arg:S}}}t.wrap=l;var h={};function f(){}function d(){}function m(){}var p={};u(p,a,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==e&&n.call(y,a)&&(p=y);var g=m.prototype=f.prototype=Object.create(p);function w(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var o;r(this,"_invoke",{value:function(r,a){function i(){return new e(function(o,i){!function r(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(h).then(function(t){l.value=t,i(l)},function(t){return r("throw",t,i,c)})}c(u.arg)}(r,a,o,i)})}return o=o?o.then(i,i):i()}})}function x(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return _()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=L(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=s(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=s(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=m,r(g,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:d,configurable:!0}),d.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(E.prototype),u(E.prototype,i,function(){return this}),t.AsyncIterator=E,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new E(l(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(g),u(g,c,"Generator"),u(g,a,function(){return this}),u(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=N,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}var w=function(){var t=Object(r.useState)([]),e=Object(v.a)(t,2),n=e[0],a=e[1],i=function(){var t=Object(c.a)(b().mark(function t(){var e;return b().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/fetch_content");case 2:if((e=t.sent).ok){t.next=7;break}throw new Error("Data could not be fetched");case 7:return t.abrupt("return",e.json());case 8:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)(function(){i().then(function(t){a(t)}).catch(function(t){console.log(t.message)})},[]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"row",id:"confessions-row"},n.slice(0).reverse().map(function(t,e){return o.a.createElement(E,{key:e,university:t.university,content:t.content,date:g()(t.date)})})))},E=function(t){var e=t.university,n=t.content,r=t.date;return n?o.a.createElement("div",{className:"confession-box"},o.a.createElement("div",{className:"confession-info col-2"},o.a.createElement("p",{className:"university"},e),o.a.createElement("p",{className:"date"},r.format("DD MMM"),o.a.createElement("br",null),r.format("YYYY"))),o.a.createElement("p",{className:"content col-10"},n)):o.a.createElement("div",null)},x=function(t){function e(t){var n;return Object(u.a)(this,e),(n=Object(s.a)(this,Object(h.a)(e).call(this,t))).state={uniRadios:"Other",content:""},n.handleChange=n.handleChange.bind(Object(p.a)(Object(p.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(Object(p.a)(n))),n}return Object(f.a)(e,t),Object(l.a)(e,[{key:"handleChange",value:function(t){var e=t.target.value;this.setState(Object(m.a)({},this.state,Object(d.a)({},t.target.name,e)))}},{key:"handleSubmit",value:function(t){fetch("/submit_content",{method:"POST",body:JSON.stringify(this.state),headers:{"Content-Type":"application/json"}}).then(function(t){return console.log(t),t}),a.createRoot(document.getElementById("site-content")).render(o.a.createElement(w,null)),t.preventDefault()}},{key:"handleRatherNot",value:function(){a.createRoot(document.getElementById("site-content")).render(o.a.createElement(w,null))}},{key:"render",value:function(){return o.a.createElement("div",{className:"row",id:"confession-form-row"},o.a.createElement("form",{id:"confession-form",onSubmit:this.handleSubmit},o.a.createElement("h1",{className:"form-group"},"Submit a confession to view"),o.a.createElement("span",{className:"form-group"},o.a.createElement("label",null,"Uni"),o.a.createElement("br",null),o.a.createElement("div",{className:"form-check form-check-inline"},o.a.createElement("input",{className:"form-check-input",type:"radio",name:"uniRadios",id:"uomRadio",value:"UoM",checked:"UoM"===this.state.uniRadios,onChange:this.handleChange}),o.a.createElement("label",{className:"form-check-label",htmlFor:"uomRadio"},"UoM")),o.a.createElement("div",{className:"form-check form-check-inline"},o.a.createElement("input",{className:"form-check-input",type:"radio",name:"uniRadios",id:"mmuRadio",value:"MMU",checked:"MMU"===this.state.uniRadios,onChange:this.handleChange}),o.a.createElement("label",{className:"form-check-label",htmlFor:"uomRadio"},"MMU")),o.a.createElement("div",{className:"form-check form-check-inline"},o.a.createElement("input",{className:"form-check-input",type:"radio",name:"uniRadios",id:"uosRadio",value:"UoS",checked:"UoS"===this.state.uniRadios,onChange:this.handleChange}),o.a.createElement("label",{className:"form-check-label",htmlFor:"uomRadio"},"UoS")),o.a.createElement("div",{className:"form-check form-check-inline"},o.a.createElement("input",{className:"form-check-input",type:"radio",name:"uniRadios",id:"otherRadio",value:"Other",checked:"Other"===this.state.uniRadios,onChange:this.handleChange}),o.a.createElement("label",{className:"form-check-label",htmlFor:"uomRadio"},"Other"))),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"confessionTextArea"},"Confession"),o.a.createElement("textarea",{required:!0,className:"form-control",id:"confessionTextArea",rows:"8",maxLength:"1024",name:"content",onChange:this.handleChange}),o.a.createElement("small",{id:"confessionAnonymous",className:"form-text text-muted"},"All confessions are completely anonymous")),o.a.createElement("button",{type:"submit",className:"btn btn-confess"},"Confess"),o.a.createElement("small",{id:"ratherNot",onClick:this.handleRatherNot},"No thanks")))}}]),e}(o.a.Component);n(25);function L(){L=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(S){u=function(t,e,n){return t[e]=n}}function l(t,e,n,o){var a=e&&e.prototype instanceof f?e:f,i=Object.create(a.prototype),c=new j(o||[]);return r(i,"_invoke",{value:E(t,n,c)}),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(S){return{type:"throw",arg:S}}}t.wrap=l;var h={};function f(){}function d(){}function m(){}var p={};u(p,a,function(){return this});var v=Object.getPrototypeOf,y=v&&v(v(N([])));y&&y!==e&&n.call(y,a)&&(p=y);var g=m.prototype=f.prototype=Object.create(p);function b(t){["next","throw","return"].forEach(function(e){u(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var o;r(this,"_invoke",{value:function(r,a){function i(){return new e(function(o,i){!function r(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(h).then(function(t){l.value=t,i(l)},function(t){return r("throw",t,i,c)})}c(u.arg)}(r,a,o,i)})}return o=o?o.then(i,i):i()}})}function E(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return _()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=x(i,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=s(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function x(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=s(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=m,r(g,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:d,configurable:!0}),d.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(w.prototype),u(w.prototype,i,function(){return this}),t.AsyncIterator=w,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new w(l(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then(function(t){return t.done?t.value:i.next()})},b(g),u(g,c,"Generator"),u(g,a,function(){return this}),u(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=N,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}var k=function(t){function e(){var t,n;Object(u.a)(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(s.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).state={data:null},n.callBackendAPI=Object(c.a)(L().mark(function t(){var e,n;return L().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/express_backend");case 2:return e=t.sent,t.next=5,e.json();case 5:if(n=t.sent,200===e.status){t.next=8;break}throw Error(n.message);case 8:return t.abrupt("return",n);case 9:case"end":return t.stop()}},t)})),n}return Object(f.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.callBackendAPI().then(function(e){return t.setState({data:e.express})}).catch(function(t){return console.log(t)})}},{key:"confessHandler",value:function(t){a.createRoot(document.getElementById("site-content")).render(o.a.createElement(x,null))}},{key:"render",value:function(){return o.a.createElement("div",{className:"site"},o.a.createElement("nav",{className:"sticky-top navbar navbar-style"},o.a.createElement("div",{id:"brand-div"},o.a.createElement("h1",null,"Honest Manchester"),o.a.createElement("small",null,"Anonymous confessions")),o.a.createElement("button",{className:"navbar-confession btn btn-confess",onClick:this.confessHandler},"Confess")),o.a.createElement("div",{className:"container",id:"site-content"},o.a.createElement(x,null)))}}]),e}(r.Component),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,28)).then(function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),r(t),o(t),a(t),i(t)})};n(26);i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(k,null))),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.22d225e9.chunk.js.map