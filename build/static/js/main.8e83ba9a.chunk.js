(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{41:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(2),o=t.n(r),a=t(17),i=t.n(a),u=t(8),s=t(18),d=t(3),l=t(5),j=t.n(l),b="/api/persons",f=function(){return j.a.get(b)},h=function(e){return j.a.post(b,e)},m=function(e,n){return j.a.put("".concat(b,"/").concat(e),n)},O=function(e){return j.a.delete("".concat(b,"/").concat(e))},p=function(e){var n=e.message;return null===n?null:Object(c.jsx)("div",{className:"message",style:{display:n?"block":"none"},children:n})},v=function(e){var n=e.onChangeAction,t=e.value;return Object(c.jsx)("form",{children:Object(c.jsxs)("div",{children:["filter shown with ",Object(c.jsx)("input",{value:t,onChange:function(e){return n(e,"filter")}})]})})},x=function(e){var n=e.onChangeAction,t=e.newName,r=e.newNumber,o=e.addPerson;return Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{children:["name: ",Object(c.jsx)("input",{value:t,onChange:function(e){return n(e,"name")}})]}),Object(c.jsxs)("div",{children:["number: ",Object(c.jsx)("input",{value:r,onChange:function(e){return n(e,"number")}})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",onClick:o,children:"add"})})]})},w=function(e){var n=e.filterPersons,t=e.handleDelete;return n.map((function(e){return Object(c.jsxs)("p",{children:[e.name," ",e.number," ",Object(c.jsx)("button",{onClick:function(){return n=e.name,c=e.id,void(window.confirm("Delete ".concat(n," ?"))&&t(c));var n,c},children:"delete"})]},e.name)}))},g=function(){var e=Object(r.useState)([]),n=Object(d.a)(e,2),t=n[0],o=n[1],a=Object(r.useState)(""),i=Object(d.a)(a,2),l=i[0],j=i[1],b=Object(r.useState)(""),g=Object(d.a)(b,2),C=g[0],k=g[1],P=Object(r.useState)(""),y=Object(d.a)(P,2),N=y[0],S=y[1],A=Object(r.useState)(null),D=Object(d.a)(A,2),T=D[0],E=D[1];Object(r.useEffect)((function(){f().then((function(e){return o(e.data)}))}),[]);var J=t.filter((function(e){return e.name.toLowerCase().includes(N.toLowerCase())})),L=function(e,n){"filter"===n?S(e.target.value):"name"===n?j(e.target.value):k(e.target.value)};return Object(c.jsxs)("div",{children:[Object(c.jsx)(p,{message:T}),Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(v,{onChangeAction:L,value:N}),Object(c.jsx)("h2",{children:"add a new"}),Object(c.jsx)(x,{onChangeAction:L,newName:l,newNumber:C,addPerson:function(e){if(e.preventDefault(),t.map((function(e){return e.name})).includes(l)){if(window.confirm("".concat(l," already exists in the phonebook, replace the old number with the new one?"))){var n=t.find((function(e){return e.name===l}));m(n.id,Object(u.a)(Object(u.a)({},n),{},{number:C})).then((function(e){E("".concat(l," person contact number is updated.")),o(t.map((function(t){return t.id===n.id&&t.number!==C?e.data:t}))),setTimeout((function(){E(null)}),2e3)}))}}else h({name:l,number:C}).then((function(e){E("".concat(l," added in the phonebook")),o(Object(s.a)(t).concat(e.data)),setTimeout((function(){E(null)}),2e3)}));j(""),k("")}}),Object(c.jsx)("h2",{children:"Numbers"}),Object(c.jsx)(w,{filterPersons:J,handleDelete:function(e){E("Person with id ".concat(e," is deleted from the contacts.")),O(e).then(o(t.filter((function(n){return n.id!==e})))).catch((function(n){return E("Person with id ".concat(e," is already deleted from the server."))})),setTimeout((function(){E(null)}),2e3)}})]})};t(41);i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.8e83ba9a.chunk.js.map