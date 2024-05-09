(()=>{"use strict";var e,t,n,r={2767:(e,t,n)=>{var r=n(6540),l=n(5338),o=n(4976),a=n(9716),i=n(4448),c=n(7767),u=n(763),m=n(6052),s=n(2431),p=n(5615),y=n(8032),f=n(3048),d=n(4479),E=n(1105);function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v(r.key),r)}}function v(e){var t=function(e,t){if("object"!=h(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==h(t)?t:t+""}function A(e,t,n){return t=O(t),function(e,t){if(t&&("object"===h(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,g()?Reflect.construct(t,n||[],O(e).constructor):t.apply(e,n))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}function O(e){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},O(e)}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}var j=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=A(this,t)).state={modalVisible:!1},e.handleSubmit=e.handleSubmit.bind(e),e.handleShowModal=e.handleShowModal.bind(e),e.handleHideModal=e.handleHideModal.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(t,e),n=t,(l=[{key:"handleShowModal",value:function(e){this.setState({modalVisible:!0})}},{key:"handleHideModal",value:function(e){this.setState({modalVisible:!1})}},{key:"handleSubmit",value:function(e){var t=document.forms.employeeAdd,n={name:t.name.value,extension:t.ext.value,email:t.email.value,title:t.title.value};this.props.createEmployee(n),t.name.value="",t.ext.value="",t.email.value="",t.title.value="",this.setState({modalVisible:!1})}},{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"addEmployee"},r.createElement(p.A,{variant:"primary",size:"sm",onClick:this.handleShowModal},"New Employee")),r.createElement(y.A,{show:this.state.modalVisible,onHide:this.handleHideModal,centered:!0},r.createElement(y.A.Header,{closeButton:!0},r.createElement(y.A.Title,null,"Add New Employee")),r.createElement(y.A.Body,null,r.createElement(f.A,{fluid:!0},r.createElement("form",{name:"employeeAdd"},r.createElement(d.A,null,r.createElement(E.A,{md:3},"Name:"),r.createElement(E.A,{md:"auto"},r.createElement("input",{type:"text",name:"name"}))),r.createElement(d.A,null,r.createElement(E.A,{md:3},"Extension:"),r.createElement(E.A,{md:"auto"},r.createElement("input",{type:"text",name:"ext",maxLength:4}))),r.createElement(d.A,null,r.createElement(E.A,{md:3},"Email:"),r.createElement(E.A,{md:"auto"},r.createElement("input",{type:"text",name:"email"}))),r.createElement(d.A,null,r.createElement(E.A,{md:3},"Title:"),r.createElement(E.A,{md:"auto"},r.createElement("input",{type:"text",name:"title"})))))),r.createElement(y.A.Footer,null,r.createElement(p.A,{type:"submit",variant:"success",size:"sm",className:"mt-4",onClick:this.handleSubmit},"Add Employee"))))}}])&&b(n.prototype,l),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,l}(r.Component);function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function k(){var e,t,n=(0,c.Zp)(),l=(e=(0,o.ok)(),t=1,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,o,a,i=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,l=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw l}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return r.createElement(u.A,null,r.createElement(u.A.Header,{as:"h5"},"Filter"),r.createElement(u.A.Body,null,r.createElement(u.A.Text,null," Currently Employed: "," ",r.createElement("select",{value:l.get("employed")||"",onChange:function(e){return n(e.target.value?"/employees?employed=".concat(e.target.value):"/employees")}},r.createElement("option",{value:""},"All"),r.createElement("option",{value:"true"},"Employed"),r.createElement("option",{value:"false"},"Not Employed")))))}function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,C(r.key),r)}}function T(e,t,n){return t&&x(e.prototype,t),n&&x(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function C(e){var t=function(e,t){if("object"!=P(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=P(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==P(t)?t:t+""}function M(e,t,n){return t=D(t),function(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,H()?Reflect.construct(t,n||[],D(e).constructor):t.apply(e,n))}function H(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(H=function(){return!!e})()}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}function V(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function N(e){var t=(0,c.zy)().search,n=new URLSearchParams(t).get("employed"),l=e.employees.filter((function(e){return!n||String(e.currentlyEmployed)===n})).map((function(t){return r.createElement(R,{key:t._id,employee:t,deleteEmployee:e.deleteEmployee})}));return r.createElement(u.A,null,r.createElement(u.A.Header,{as:"h5"},"All Employees: ",r.createElement(m.A,{bg:"secondary"},l.length)),r.createElement(u.A.Body,null,r.createElement(u.A.Text,null,r.createElement(s.A,{striped:!0,size:"sm"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Extension"),r.createElement("th",null,"Email"),r.createElement("th",null,"Title"),r.createElement("th",null,"Date Hired"),r.createElement("th",null,"Currently Employed?"),r.createElement("th",null))),r.createElement("tbody",null,l)))))}var R=function(e){function t(){var e;return _(this,t),(e=M(this,t)).state={modalVisible:!1},e.onDeleteClick=e.onDeleteClick.bind(e),e.toggleModal=e.toggleModal.bind(e),e}return V(t,e),T(t,[{key:"toggleModal",value:function(e){this.setState({modalVisible:!this.state.modalVisible})}},{key:"onDeleteClick",value:function(){this.props.deleteEmployee(this.props.employee._id),this.setState({modalVisible:!1})}},{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement("tr",null,r.createElement("td",null,r.createElement(o.N_,{to:"/edit/".concat(this.props.employee._id)},this.props.employee.name)),r.createElement("td",null,this.props.employee.extension),r.createElement("td",null,this.props.employee.email),r.createElement("td",null,this.props.employee.title),r.createElement("td",null,this.props.employee.dateHired.toDateString()),r.createElement("td",null,this.props.employee.currentlyEmployed?"Yes":"No"),r.createElement("td",null,r.createElement(p.A,{variant:"danger",size:"sm",onClick:this.toggleModal},"X"),r.createElement(y.A,{show:this.state.modalVisible,onHide:this.toggleModal,centered:!0},r.createElement(y.A.Header,{closeButton:!0},r.createElement(y.A.Title,null,"Delete Employee?")),r.createElement(y.A.Body,null,r.createElement(f.A,{fluid:!0},"Are you sure you want to delete this employee?")),r.createElement(y.A.Footer,null,r.createElement(p.A,{type:"button",variant:"danger",size:"sm",className:"mt-4",onClick:this.toggleModal},"Cancel"),r.createElement(p.A,{type:"button",variant:"success",size:"sm",className:"mt-4",onClick:this.onDeleteClick},"Yes"))))))}}])}(r.Component),F=function(e){function t(){var e;return _(this,t),(e=M(this,t)).state={employees:[]},e.createEmployee=e.createEmployee.bind(e),e.deleteEmployee=e.deleteEmployee.bind(e),e}return V(t,e),T(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=this;fetch("/api/employees").then((function(e){return e.json()})).then((function(t){t.employees.forEach((function(e){e.dateHired=new Date(e.dateHired)})),e.setState({employees:t.employees})})).catch((function(e){console.log(e)}))}},{key:"createEmployee",value:function(e){var t=this;fetch("/api/employees",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.employee.dateHired=new Date(e.employee.dateHired);var n=t.state.employees.concat(e.employee);t.setState({employees:n}),console.log("Total count of employees:",n.length)})).catch((function(e){return console.log(e)}))}},{key:"deleteEmployee",value:function(e){var t=this;fetch("/api/employees/".concat(e),{method:"DELETE"}).then((function(e){e.ok?t.loadData():console.log("Failed to deltet employee.")}))}},{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement(j,{createEmployee:this.createEmployee}),r.createElement(k,null),r.createElement(N,{employees:this.state.employees,deleteEmployee:this.deleteEmployee}))}}])}(r.Component);function z(){return r.createElement(u.A,null,r.createElement(u.A.Header,{as:"h5"},"Reports"),r.createElement(u.A.Body,null,r.createElement(u.A.Text,null,"This is a placeholder for the Employee Reports.")))}var U=n(2735);function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,L(r.key),r)}}function L(e){var t=function(e,t){if("object"!=q(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==q(t)?t:t+""}function J(e,t,n){return t=K(t),function(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,Y()?Reflect.construct(t,n||[],K(e).constructor):t.apply(e,n))}function Y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(Y=function(){return!!e})()}function K(e){return K=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},K(e)}function X(e,t){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},X(e,t)}var Z=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=J(this,t)).state={employee:[],alertVisible:!1,alertColor:"success",alertMessage:""},e.handleSubmit=e.handleSubmit.bind(e),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&X(e,t)}(t,e),n=t,(l=[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=this,t=window.location.pathname.split("/")[2];fetch("/api/employees/".concat(t)).then((function(e){return e.json()})).then((function(t){t.employee.dateHired=new Date(t.employee.dateHired),e.setState({employee:t.employee})})).catch((function(e){console.log(e)}))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=document.forms.employeeUpdate,r=n.id.value,l=n.name.value,o=n.extension.value,a=n.email.value,i=n.title.value,c=n.currentlyEmployed.checked,u="/api/employees/".concat(r);fetch(u,{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify({name:l,extension:o,email:a,title:i,currentlyEmployed:c})}).then((function(e){return e.json()})).then((function(e){t.setState({alertVisible:!0,alertMessage:e.msg})}))}},{key:"render",value:function(){var e=this;return r.createElement(u.A,null,r.createElement(u.A.Header,{as:"h5"},"Edit ",this.state.employee.name),r.createElement(u.A.Body,null,r.createElement(u.A.Text,null,r.createElement(f.A,{fluid:!0},r.createElement("form",{name:"employeeUpdate",onSubmit:this.handleSubmit},r.createElement(d.A,null,r.createElement(E.A,{md:2},"ID:"),r.createElement(E.A,{md:"auto"},r.createElement("input",{type:"text",name:"id",readOnly:"readOnly",defaultValue:this.state.employee._id}))),r.createElement(d.A,null,r.createElement(E.A,{md:2},"Name:"),r.createElement(E.A,{md:"auto"},r.createElement("input",{type:"text",name:"name",defaultValue:this.state.employee.name}))),r.createElement(d.A,null,r.createElement(E.A,{md:2},"Extension:"),r.createElement(E.A,{md:"auto"},r.createElement("input",{type:"text",name:"extension",defaultValue:this.state.employee.extension}))),r.createElement(d.A,null,r.createElement(E.A,{md:2},"Email:"),r.createElement(E.A,{md:"auto"},r.createElement("input",{type:"text",name:"email",defaultValue:this.state.employee.email}))),r.createElement(d.A,null,r.createElement(E.A,{md:2},"Title:"),r.createElement(E.A,{md:"auto"},r.createElement("input",{type:"text",name:"title",defaultValue:this.state.employee.title}))),r.createElement(d.A,null,r.createElement(E.A,{md:2},"Date Hired:"),r.createElement(E.A,{md:"auto"},r.createElement("input",{type:"text",name:"dateHired",readOnly:"readOnly",defaultValue:this.state.employee.dateHired}))),r.createElement(d.A,null,r.createElement(E.A,{md:2},"Currently Employed?"),r.createElement(E.A,{md:"auto"},r.createElement("input",{type:"checkbox",name:"currentlyEmployed",defaultChecked:this.state.employee.currentlyEmployed}))),r.createElement(p.A,{type:"submit",variant:"primary",size:"sm",className:"my-3"},"Update Employee "),r.createElement("br",null),r.createElement(U.A,{variant:this.state.alertColor,show:this.state.alertVisible,dismissible:!0,onClose:function(){return e.setState({alertVisible:!1})}},this.state.alertMessage))))))}}])&&I(n.prototype,l),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,l}(r.Component);function $(){var e=function(){return r.createElement("h1",null,"Page Not Found")};return r.createElement(c.BV,null,r.createElement(c.qh,{path:"/employees",element:r.createElement(F,null)}),r.createElement(c.qh,{path:"/edit/:id",element:r.createElement(Z,null)}),r.createElement(c.qh,{path:"/report",element:r.createElement(z,null)}),r.createElement(c.qh,{path:"/",element:r.createElement(c.C5,{replace:!0,to:"/employees"})}),r.createElement(c.qh,{path:"*",element:r.createElement(e,null)}))}function G(){return r.createElement(a.A,{bg:"dark",variant:"dark"},r.createElement(a.A.Brand,{href:"/"},"Employee Management Application"),r.createElement(i.A,null,r.createElement(i.A.Link,{href:"/employees"},"All Employees"),r.createElement(i.A.Link,{href:"/report"},"Reports")))}function Q(){return r.createElement("div",null,r.createElement(G,null),r.createElement($,null))}(0,l.H)(document.getElementById("content")).render(r.createElement(o.Kd,null,r.createElement(r.StrictMode,null,r.createElement(Q,null))))}},l={};function o(e){var t=l[e];if(void 0!==t)return t.exports;var n=l[e]={exports:{}};return r[e](n,n.exports,o),n.exports}o.m=r,e=[],o.O=(t,n,r,l)=>{if(!n){var a=1/0;for(m=0;m<e.length;m++){for(var[n,r,l]=e[m],i=!0,c=0;c<n.length;c++)(!1&l||a>=l)&&Object.keys(o.O).every((e=>o.O[e](n[c])))?n.splice(c--,1):(i=!1,l<a&&(a=l));if(i){e.splice(m--,1);var u=r();void 0!==u&&(t=u)}}return t}l=l||0;for(var m=e.length;m>0&&e[m-1][2]>l;m--)e[m]=e[m-1];e[m]=[n,r,l]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var l=Object.create(null);o.r(l);var a={};t=t||[null,n({}),n([]),n(n)];for(var i=2&r&&e;"object"==typeof i&&!~t.indexOf(i);i=n(i))Object.getOwnPropertyNames(i).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,o.d(l,a),l},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={834:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,l,[a,i,c]=n,u=0;if(a.some((t=>0!==e[t]))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(c)var m=c(o)}for(t&&t(n);u<a.length;u++)l=a[u],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(m)},n=self.webpackChunkm13=self.webpackChunkm13||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=o.O(void 0,[121],(()=>o(2767)));a=o.O(a)})();
//# sourceMappingURL=employees.bundle.js.map