(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.d({},{L:()=>h});var n=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tarea=t,this.id=(new Date).getTime(),this.completado=!1,this.creado=new Date}var n,r,o;return n=e,o=[{key:"fromJason",value:function(t){var n=t.id,r=t.tarea,o=t.completado,a=t.creado,i=new e(r);return i.id=n,i.completado=o,i.creado=a,i}}],(r=[{key:"imprimirClase",value:function(){console.log("".concat(this.tarea," - ").concat(this.id))}}])&&t(n.prototype,r),o&&t(n,o),e}();function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(c)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cargarLocalStorage()}var t,o,i;return t=e,(o=[{key:"nuevoTodo",value:function(e){this.todos.push(e),this.guardarLocalSotrage()}},{key:"eliminarTodo",value:function(e){this.todos=this.todos.filter((function(t){return t.id!=e})),this.guardarLocalSotrage()}},{key:"marcarCompletado",value:function(e){var t,n=r(this.todos);try{for(n.s();!(t=n.n()).done;){var o=t.value;if(o.id==e){o.completado=!o.completado,this.guardarLocalSotrage();break}}}catch(e){n.e(e)}finally{n.f()}}},{key:"eliminarCompletados",value:function(){this.todos=this.todos.filter((function(e){return!e.completado}))}},{key:"guardarLocalSotrage",value:function(){localStorage.setItem("todo",JSON.stringify(this.todos))}},{key:"cargarLocalStorage",value:function(){this.todos=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],this.todos=this.todos.map(n.fromJason)}}])&&a(t.prototype,o),i&&a(t,i),e}();function l(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw a}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=document.querySelector(".todo-list"),s=document.querySelector(".new-todo"),d=document.querySelector(".clear-completed"),f=document.querySelector(".filters"),m=document.querySelectorAll(".filtro");console.log({anchorFiltros:m});var v=function(e){var t='\n    <li class="'.concat(e.completado?"completed":"",'" data-id="').concat(e.id,'">\n        <div class="view">\n            <input class="toggle" type="checkbox"  ').concat(e.completado?"checked":""," > \n            <label>").concat(e.tarea,'</label>\n            <button class="destroy"></button>\n        </div>\n        <input class="edit" value="Create a TodoMVC template">\n    </li>'),n=document.createElement("div");return n.innerHTML=t,u.append(n.firstElementChild),n.firstElementChild};s.addEventListener("keyup",(function(e){if(13===e.keyCode&&s.value.length>0){console.log(s.value);var t=new n(s.value);h.nuevoTodo(t),v(t),s.value=""}})),u.addEventListener("click",(function(e){var t=e.target.localName,n=e.target.parentElement.parentElement,r=n.getAttribute("data-id");t.includes("input")?(h.marcarCompletado(r),n.classList.toggle("completed")):t.includes("button")&&(h.eliminarTodo(r),u.removeChild(n))})),d.addEventListener("click",(function(){h.eliminarCompletados();for(var e=u.children.length-1;e>=0;e--){var t=u.children[e];t.classList.contains("completed")&&u.removeChild(t),console.log(t)}})),f.addEventListener("click",(function(e){var t=e.target.text;if(t){m.forEach((function(e){return e.classList.remove("selected")})),e.target.classList.add("selected");var n,r=l(u.children);try{for(r.s();!(n=r.n()).done;){var o=n.value;o.classList.remove("hidden");var a=o.classList.contains("completed");switch(t){case"Pendientes":a&&o.classList.add("hidden");break;case"Completados":a||o.classList.add("hidden")}}}catch(e){r.e(e)}finally{r.f()}}}));var h=new i;h.todos.forEach(v),console.log("todos",h.todos)})();