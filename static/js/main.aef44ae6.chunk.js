(this.webpackJsonpbcredi=this.webpackJsonpbcredi||[]).push([[0],{149:function(e,a,t){},152:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(31),l=t.n(c),o=t(52),i=(t(83),t(6)),m=t(54),s=t.n(m),u=t(67),d=t(30),f=t(19),p=t(71),E=t(77),b=(t(85),t(72)),v=t.n(b);var h=function(){return n.a.createElement("header",null,n.a.createElement("div",{"logo-div":!0},n.a.createElement("img",{src:v.a,alt:""})))};t(86);var g=function(){return n.a.createElement("header",{className:"header"},n.a.createElement("span",{className:"header"},"Parab\xe9ns! Cadastro realizado com sucesso!"))},O=t(73),j=t.n(O),N=function(e){return e.replace(/\D/g,"").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d{1,2})/,"$1-$2").replace(/(-\d{2})\d+?$/,"$1")},y=t(29),C=t(15);function x(e){var a=e.name,t=Object(y.a)(e,["name"]),c=Object(r.useRef)(null),l=Object(C.c)(a),o=l.fieldName,i=l.defaultValue,m=l.registerField,s=l.error;return Object(r.useEffect)((function(){m({name:o,ref:c.current,path:"value"})}),[o,m]),n.a.createElement(n.a.Fragment,null,s?n.a.createElement("input",Object.assign({ref:c,defaultValue:i},t,{style:{borderColor:"#ff5863"}})):n.a.createElement("input",Object.assign({ref:c,defaultValue:i},t)),s&&n.a.createElement("span",{className:"error",style:{color:"#ff5863",fontSize:"1.5rem"}},s))}var F=t(55),k=t.n(F),w=t(98),P=(t(87),t(88),function(e){var a=e.name,t=Object(y.a)(e,["name"]),c=Object(r.useRef)(null),l=Object(C.c)(a),o=l.fieldName,i=l.registerField,m=l.defaultValue,s=l.error,u=Object(r.useState)(m||null),f=Object(d.a)(u,2),p=f[0],E=f[1];return Object(r.useEffect)((function(){i({name:o,ref:c.current,path:"props.selected",clearValue:function(e){e.clear()}})}),[o,i]),n.a.createElement(n.a.Fragment,null,s?n.a.createElement(k.a,Object.assign({id:"form-date",ref:c,selected:p,onChange:E,placeholderText:"01/01/1999",dateFormat:"dd/MM/yyyy",maxDate:new Date,minDate:Object(w.default)(new Date(2020,0,1),120)},t)):n.a.createElement(k.a,Object.assign({ref:c,selected:p,onChange:E,placeholderText:"01/01/1999",dateFormat:"dd/MM/yyyy",maxDate:new Date,minDate:Object(w.default)(new Date(2020,0,1),120)},t)),s&&n.a.createElement("span",{className:"error",style:{color:"#ff5863",fontSize:"1.5rem",lineHeight:"1.29"}},s))});function D(e){var a=e.name,t=Object(y.a)(e,["name"]),c=Object(r.useRef)(null),l=Object(C.c)(a),o=l.fieldName,i=l.defaultValue,m=l.registerField,s=l.error;return Object(r.useEffect)((function(){m({name:o,ref:c.current,path:"value"})}),[o,m]),n.a.createElement(n.a.Fragment,null,s?n.a.createElement("div",{className:"terms",style:{borderColor:"#ff5863"}},n.a.createElement("div",{className:"checkbox"},n.a.createElement("input",Object.assign({ref:c,defaultValue:i},t))),n.a.createElement("span",null,"Li e estou de acordo com a ",n.a.createElement("a",{href:"#"},"Pol\xedtica de Privacidade")," e a ",n.a.createElement("a",{href:"#"},"Pol\xedtica de Uso de Informa\xe7\xf5es"))):n.a.createElement("div",{className:"terms"},n.a.createElement("div",{className:"checkbox"},n.a.createElement("input",Object.assign({ref:c,defaultValue:i},t))),n.a.createElement("span",null,"Li e estou de acordo com a ",n.a.createElement("a",{href:"#"},"Pol\xedtica de Privacidade")," e a ",n.a.createElement("a",{href:"#"},"Pol\xedtica de Uso de Informa\xe7\xf5es"))),s&&n.a.createElement("span",{id:"errorCheckbox",style:{color:"#ff5863",fontSize:"1.5rem",marginTop:"1px"}},s))}t(149);var S=function(){var e=Object(r.useRef)(null),a=Object(r.useState)(!1),t=Object(d.a)(a,2),c=t[0],l=t[1],o=Object(r.useState)(!1),i=Object(d.a)(o,2),m=i[0],b=i[1],v=Object(r.useState)(""),O=Object(d.a)(v,2),y=O[0],C=O[1],F=function(e){l(!c)},k=function(){var a=Object(u.a)(s.a.mark((function a(t,r){var n,c,l;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=r.reset,a.prev=1,c=f.d().shape({email:f.e().email("Digite um e-mail v\xe1lido").required("O campo e-mail \xe9 obrigat\xf3rio"),password:f.e().min(6,"A senha precisa ter no m\xednimo 6 caracteres").required("O campo senha \xe9 obrigat\xf3rio"),userCpf:f.e().min(14,"CPF inv\xe1lido").required("O campo CPF \xe9 obrigat\xf3rio"),date:f.c().required("O campo data de nascimento \xe9 obrigat\xf3rio").nullable(),checked:f.b().oneOf([!0],"\xc9 preciso aceitar os termos")}),a.next=5,c.validate(t,{abortEarly:!1});case 5:b(!0),console.log(t),e.current.setErrors({}),n(),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(1),l={},a.t0 instanceof f.a&&(console.log(a.t0),a.t0.inner.forEach((function(e){l[e.path]=e.message})),e.current.setErrors(l));case 15:case"end":return a.stop()}}),a,null,[[1,11]])})));return function(e,t){return a.apply(this,arguments)}}();return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"content-container"},n.a.createElement("div",{className:"background"},n.a.createElement("img",{className:"background",src:j.a,alt:""})),n.a.createElement("div",{className:"container"},m?n.a.createElement(g,null):n.a.createElement(h,null),n.a.createElement("div",{className:"account"},n.a.createElement("h2",null,"Criar meu cadastro"),n.a.createElement("span",null,"Para acompanhar sua contrata\xe7\xe3o de cr\xe9dito voc\xea utilizara seu e-mail e CPF."),n.a.createElement(p.a,{onSubmit:k,ref:e},n.a.createElement("div",{className:"input"},n.a.createElement("label",{htmlFor:"email"},"E-mail"),n.a.createElement(x,{name:"email",placeholder:"Email",id:"email"})),n.a.createElement("div",{div:!0,className:"input"},n.a.createElement("label",{htmlFor:""},"CPF"),n.a.createElement(x,{onChange:function(e){C(N(e.target.value))},value:y,name:"userCpf",type:"text",id:"userCpf",placeholder:"135.112.616.43"})),n.a.createElement("div",{div:!0,className:"input"},n.a.createElement("label",{htmlFor:""},"Data de nascimento"),n.a.createElement(P,{name:"date",type:"text"})),n.a.createElement("div",{div:!0,className:"input"},n.a.createElement("label",{htmlFor:""},"Senha"),n.a.createElement(x,{name:"password",type:"password",id:"password",placeholder:"Cadastre uma senha"})),n.a.createElement(D,{type:"checkbox",className:"rectangle",name:"checked",defaultChecked:c,value:c,onClick:function(){return F},onChange:F}),n.a.createElement("button",{className:"submit",type:"submit"},n.a.createElement("div",null,n.a.createElement(E.a,{size:12,color:"#fff"})),n.a.createElement("span",null,"Cadastrar"))),n.a.createElement("footer",null,n.a.createElement("p",null,"J\xe1 fiz meu cadastro. ",n.a.createElement("a",{href:"#"},"Entrar agora."))))),n.a.createElement("div",{className:"text-image"},n.a.createElement("div",{className:"quote"},'"Obtive cr\xe9dito para capital de giro. O processo foi bem sucedido e tudo que foi abordado, foi cumprido."'),n.a.createElement("div",{className:"name"},n.a.createElement("p",null,"Camila Bragan\xe7a,"),"Sideral Tecnologia"))))};var V=function(){return n.a.createElement(i.c,null,n.a.createElement(i.a,{path:"/",component:S}))};var $=function(){return n.a.createElement(o.a,null,n.a.createElement(V,null))};l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement($,null)),document.getElementById("root"))},72:function(e,a,t){e.exports=t.p+"static/media/logo.64c93f6a.svg"},73:function(e,a,t){e.exports=t.p+"static/media/background.5dea0627.png"},78:function(e,a,t){e.exports=t(152)},83:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){}},[[78,1,2]]]);
//# sourceMappingURL=main.aef44ae6.chunk.js.map