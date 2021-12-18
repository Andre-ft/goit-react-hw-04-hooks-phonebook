(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={App:"App_App__2cY9t"}},17:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),o=n(10),r=n.n(o),s=(n(17),n(12)),i=n(2),u=n(9),l=n.n(u),b=n(0),m=function(t){var e=t.contactList,n=t.onDeleteContact;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("ul",{className:"contactList",children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(b.jsxs)("li",{className:l.a.contactList__item,children:[a," : ",c,Object(b.jsx)("button",{type:"button",className:l.a.deleteButton,onClick:function(){return n(e)},children:"Delete"})]},e)}))})})},d=n(4),j=n.n(d),p=n(5),h=n.n(p);var f=function(t){var e=t.onSubmit,n=t.contactList,c=Object(a.useState)(""),o=Object(i.a)(c,2),r=o[0],s=o[1],u=Object(a.useState)(""),l=Object(i.a)(u,2),m=l[0],d=l[1],p=Object(a.useState)(!0),f=Object(i.a)(p,2),O=f[0],x=f[1],v=j.a.generate(),_=j.a.generate(),g=function(t){var e=t.currentTarget,a=e.name,c=e.value;switch("name"===a&&function(t){if(n.find((function(e){return e.name.toLowerCase()===t.toLowerCase()})))return x(!1),void alert("".concat(t," is already in contacts"));x(!0)}(c),a){case"name":s(c);break;case"number":d(c)}};return Object(b.jsxs)("form",{className:h.a.form,onSubmit:function(t){t.preventDefault(),e({name:r,number:m}),s(""),d("")},children:[Object(b.jsxs)("label",{htmlFor:v,className:h.a.input,children:["Name",Object(b.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:r,onChange:g,id:v})]}),Object(b.jsxs)("label",{htmlFor:_,className:h.a.input,children:["Number",Object(b.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:m,onChange:g,id:_})]}),Object(b.jsx)("button",{type:"submit",className:h.a.button,disabled:!O,children:"Add contact"})]})},O=function(t){var e=t.value,n=t.onChange;return Object(b.jsxs)("label",{children:["Find contacts by name",Object(b.jsx)("input",{type:"text",value:e,onChange:n})]})},x=n(11),v=n.n(x);var _=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(""),r=Object(i.a)(o,2),u=r[0],l=r[1];Object(a.useEffect)((function(){if(n.length)localStorage.setItem("contacts",JSON.stringify(n));else{var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&c(e)}}),[n]);var d=function(){var t=u.toLowerCase();return n.filter((function(e){return e.name.toLowerCase().includes(t)}))}();return Object(b.jsxs)("div",{className:v.a.App,children:[Object(b.jsx)("h1",{children:"Phonebook"}),Object(b.jsx)(f,{onSubmit:function(t){var e=t.name,a=t.number,o={id:j.a.generate(),name:e,number:a};c([o].concat(Object(s.a)(n)))},contactList:n}),Object(b.jsx)("h2",{children:"Contacts"}),Object(b.jsx)(O,{value:u,onChange:function(t){return l(t.currentTarget.value)}}),Object(b.jsx)(m,{contactList:d,onDeleteContact:function(t){var e=n.filter((function(e){return e.id!==t}));c(e)}})]})};n.p;n(27);r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root"))},5:function(t,e,n){t.exports={form:"ContactForm_form__2lYVM",input:"ContactForm_input__3uuLJ",button:"ContactForm_button__15kng"}},9:function(t,e,n){t.exports={contactList__item:"ContactList_contactList__item__3U4wV",deleteButton:"ContactList_deleteButton__1xoT5"}}},[[28,1,2]]]);
//# sourceMappingURL=main.fe188257.chunk.js.map