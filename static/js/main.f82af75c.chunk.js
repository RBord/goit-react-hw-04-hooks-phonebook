(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={input:"Filter_input__2Io7H"}},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(10),o=n.n(c),i=n(12),s=n(4),u=n(2),l=n.n(u),b=n(3),m=n.n(b),d=n(0),j=l.a.generate(),f=l.a.generate(),O=function(e){var t=e.onSubmit,n=Object(a.useState)((function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem("name")))&&void 0!==e?e:""})),r=Object(s.a)(n,2),c=r[0],o=r[1],i=Object(a.useState)((function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem("number")))&&void 0!==e?e:""})),u=Object(s.a)(i,2),l=u[0],b=u[1];Object(a.useEffect)((function(){window.localStorage.setItem("name",JSON.stringify(c))}),[c]),Object(a.useEffect)((function(){window.localStorage.setItem("number",JSON.stringify(l))}),[l]);var O=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":b(a);break;default:return}},h=function(){o(""),b("")};return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({name:c,number:l}),h()},className:m.a.form,children:[Object(d.jsxs)("label",{htmlFor:j,className:m.a.label,children:[Object(d.jsx)("p",{className:m.a.text,children:"Name"}),Object(d.jsx)("input",{type:"text",name:"name",value:c,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:O,id:j,required:!0})]}),Object(d.jsxs)("label",{htmlFor:f,className:m.a.label,children:[Object(d.jsx)("p",{className:m.a.text,children:"Number"}),Object(d.jsx)("input",{type:"tel",name:"number",value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:O,id:f,required:!0})]}),Object(d.jsx)("button",{type:"submit",className:m.a.btn,children:"Add contact"})]})},h=n(8),g=n.n(h),x=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(d.jsx)("ul",{children:t.map((function(e){var t=e.id,a=e.name,r=e.number;return Object(d.jsxs)("div",{className:g.a.divItem,children:[Object(d.jsxs)("li",{className:g.a.liItem,children:[a,": ",r]})," ",Object(d.jsx)("button",{onClick:function(e){return n(e)},className:g.a.btn,id:t,children:"Delete"})]},t)}))})},v=n(11),p=n.n(v),_=l.a.generate(),C=function(e){var t=e.value,n=e.onChange;return Object(d.jsxs)("label",{htmlFor:_,children:["Find contacts by Name",Object(d.jsx)("input",{type:"text",value:t,onChange:n,id:_,className:p.a.input})]})},w=function(){var e=Object(a.useState)((function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==e?e:[]})),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(s.a)(c,2),u=o[0],b=o[1];Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var m=u.toLowerCase(),j=m?n.filter((function(e){return e.name.toLowerCase().includes(m)}),console.log(n)):n;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(O,{onSubmit:function(e){var t=e.name,a=e.number;if(n.find((function(e){return e.name.toLowerCase()===t.toLowerCase()})))return alert("\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0442\u0430\u043a\u043e\u0435 \u0438\u043c\u044f!");var c={id:l.a.generate(),name:t,number:a};r((function(e){return[c].concat(Object(i.a)(e))}))}}),Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(C,{value:u,onChange:function(e){b(e.currentTarget.value)}}),Object(d.jsx)(x,{contacts:j,onDeleteContact:function(e){var t=e.target.id,a=n.filter((function(e){return e.id!==t}));r(a),b("")}})]})};n(26);o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={form:"ContactForm_form__3EKUF",btn:"ContactForm_btn__q3PXP",label:"ContactForm_label__ID0BV",text:"ContactForm_text__6C8gT"}},8:function(e,t,n){e.exports={divItem:"ContactList_divItem__36zuj",liItem:"ContactList_liItem__2hLsM",btn:"ContactList_btn__2u8Ui"}}},[[27,1,2]]]);
//# sourceMappingURL=main.f82af75c.chunk.js.map