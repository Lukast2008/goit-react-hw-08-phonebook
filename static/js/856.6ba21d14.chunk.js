"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[856],{856:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(791),r=n(434),s=n(270),c="Contact_wrapper__3oHyQ",o="Contact_text__q32B-",i="Contact_button__yvAim",l=n(184),u=function(e){var t=e.id,n=e.name,a=e.number,u=(0,r.I0)();return(0,l.jsxs)("div",{className:c,children:[(0,l.jsx)("p",{className:o,children:n}),(0,l.jsx)("p",{className:o,children:a}),(0,l.jsx)("button",{type:"button",className:i,onClick:function(){return u((0,s.GK)(t))},children:"Delete"})]})},m=function(e){return e.contacts.loading},d=function(e){return e.contacts.items},f=function(e){return e.contacts.filter},p="ContactList_list__csErn",h="ContactList_listItem__SptUx",_=function(){var e=(0,r.v9)(d),t=(0,r.v9)(f),n=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return(0,l.jsx)("ul",{className:p,children:n.map((function(e){var t=e.id,n=e.name,a=e.number;return(0,l.jsx)("li",{className:h,children:(0,l.jsx)(u,{id:t,name:n,number:a})},t)}))})},b=n(439),x="ContactEditor_form__U4ufl",j="ContactEditor_button__yGZhk",v=function(){var e=(0,a.useState)(""),t=(0,b.Z)(e,2),n=t[0],c=t[1],o=(0,a.useState)(""),i=(0,b.Z)(o,2),u=i[0],m=i[1],d=(0,r.I0)(),f=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":c(a);break;case"number":m(a);break;default:return}};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h2",{children:"PhoneBook"}),(0,l.jsxs)("form",{className:x,onSubmit:function(e){e.preventDefault(),d((0,s.uK)({name:n,number:u})),c(""),m("")},children:[[{name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"},{name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}].map((function(e,t){var a=e.name,r=e.pattern,s=e.title;return(0,l.jsx)("label",{children:(0,l.jsx)("input",{type:"text",name:a,placeholder:a,value:t?u:n,onChange:f,pattern:r,title:s,required:!0})},a)})),(0,l.jsx)("button",{type:"submit",className:j,children:"Add Contact"})]})]})},C=n(857),y={bodyform:"styles_bodyform__OFTgJ"},N=function(){var e=(0,r.I0)(),t=(0,r.v9)(f);return(0,l.jsx)("form",{className:y.bodyform,children:(0,l.jsx)("label",{className:y.label,children:(0,l.jsx)("input",{className:y.inputItemFind,type:"text",name:"filter",value:t,onChange:function(t){e((0,C.W)(t.target.value))},placeholder:"find contact by name"})})})},g=n(318);function k(){var e=(0,r.I0)(),t=(0,r.v9)(m);return(0,a.useEffect)((function(){e((0,s.yF)())}),[e]),(0,l.jsxs)("div",{className:g.Z.formStyleItem,children:[(0,l.jsx)("title",{children:"Your Contact"}),(0,l.jsx)(v,{}),(0,l.jsx)("div",{children:t&&"Request in progress..."}),(0,l.jsx)(N,{}),(0,l.jsx)(_,{})]})}},318:function(e,t){t.Z={formStyleItem:"app_formStyleItem__mcCYX",registrForm:"app_registrForm__luK-R"}}}]);
//# sourceMappingURL=856.6ba21d14.chunk.js.map