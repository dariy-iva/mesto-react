(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{11:function(e,t,s){},13:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),o=s(4),c=s.n(o),i=(s(11),s(2)),r=s.p+"static/media/logo.bbe2a6ea.svg",l=s(0);function p(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("a",{href:"/",children:Object(l.jsx)("img",{src:r,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo link-hover"})})})}var u=s(5),d=s(6),h=new(function(){function e(t){Object(u.a)(this,e),this._token=t.token,this._id=t.id,this._adress=t.adress}return Object(d.a)(e,[{key:"_verifyResolve",value:function(e){return e.ok?e.json():Promise.reject(e.status)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._adress,"/v1/").concat(this._id,"/users/me"),{headers:{authorization:this._token}}).then(this._verifyResolve)}},{key:"getPosts",value:function(){return fetch("".concat(this._adress,"/v1/").concat(this._id,"/cards"),{headers:{authorization:this._token}}).then(this._verifyResolve)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._adress,"/v1/").concat(this._id,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then(this._verifyResolve)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._adress,"/v1/").concat(this._id,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then(this._verifyResolve)}},{key:"setPost",value:function(e){return fetch("".concat(this._adress,"/v1/").concat(this._id,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.mesto,link:e.link})}).then(this._verifyResolve)}},{key:"setDeletePost",value:function(e){return fetch("".concat(this._adress,"/v1/").concat(this._id,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._verifyResolve)}},{key:"setLikePost",value:function(e){return fetch("".concat(this._adress,"/v1/").concat(this._id,"/cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token}}).then(this._verifyResolve)}},{key:"setDelLikePost",value:function(e){return fetch("".concat(this._adress,"/v1/").concat(this._id,"/cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._verifyResolve)}}]),e}())({token:"036b7b31-eb11-4936-b88e-e4dfd598930e",id:"cohort-28",adress:"https://mesto.nomoreparties.co"});function j(e){var t=e.card,s=t.link,n=t.name,a=t.likes;return Object(l.jsxs)("article",{className:"post",children:[Object(l.jsx)("img",{src:s,alt:n,className:"post__photo",onClick:function(){e.onCardClick(e.card)}}),Object(l.jsx)("p",{className:"post__caption",children:n}),Object(l.jsxs)("div",{className:"post__likes",children:[Object(l.jsx)("button",{type:"button",className:"post__like-button"}),Object(l.jsx)("p",{className:"post__likes-number",children:a.length})]}),Object(l.jsx)("button",{type:"button",className:"post__del-button"})]})}function _(e){var t=e.onEditAvatar,s=e.onEditProfile,n=e.onAddPost,o=e.onCardClick,c=a.a.useState(),r=Object(i.a)(c,2),p=r[0],u=r[1],d=a.a.useState(),_=Object(i.a)(d,2),b=_[0],m=_[1],f=a.a.useState(),O=Object(i.a)(f,2),x=O[0],v=O[1],N=a.a.useState([]),k=Object(i.a)(N,2),y=k[0],g=k[1];return a.a.useEffect((function(){h.getUserInfo().then((function(e){u(e.name),m(e.about),v(e.avatar)})).catch((function(e){return console.log(e)}))}),[]),a.a.useEffect((function(){h.getPosts().then((function(e){g(e)})).catch((function(e){return console.log(e)}))}),[]),Object(l.jsxs)("main",{className:"content",children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsx)("img",{src:x,alt:"\u0430\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar"}),Object(l.jsx)("div",{className:"profile__edit-avatar",onClick:t}),Object(l.jsxs)("div",{className:"profile__info",children:[Object(l.jsx)("h1",{className:"profile__name",children:p}),Object(l.jsx)("p",{className:"profile__about-me",children:b}),Object(l.jsx)("button",{className:"profile__edit-button",type:"button",onClick:s})]}),Object(l.jsx)("button",{className:"profile__add-button",type:"button",onClick:n})]}),Object(l.jsx)("section",{className:"posts",children:y.map((function(e){return Object(l.jsx)(j,{card:e,onCardClick:o},e._id)}))})]})}function b(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{className:"footer__author",children:"\xa9\xa02021 Daria Ivanova"})})}function m(e){var t=e.name,s=e.title,n=e.children,a=e.isOpen,o=e.onClose,c="popup ".concat(a&&"popup_opened"),i="popup__form popup__form_contain_".concat(t);return Object(l.jsx)("div",{className:c,children:Object(l.jsxs)("div",{className:"popup__container",children:[Object(l.jsx)("h2",{className:"popup__title",children:s}),Object(l.jsxs)("form",{name:t,className:i,children:[n,Object(l.jsx)("button",{type:"submit",className:"popup__submit-button",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(l.jsx)("button",{type:"reset",className:"popup__reset-button",onClick:o})]})]})})}function f(e){var t=e.card,s=e.onClose;return Object(l.jsx)("div",{className:"popup popup_content_photo ".concat(t&&"popup_opened"),id:"popup-open-photo",children:Object(l.jsxs)("div",{className:"popup__photo-box",children:[Object(l.jsx)("img",{src:t?t.link:"#",alt:t?t.name:"",className:"popup__photo"}),Object(l.jsx)("p",{className:"popup__caption-photo",children:t?t.name:""}),Object(l.jsx)("button",{type:"button",className:"popup__reset-button",onClick:s})]})})}function O(){var e=a.a.useState(!1),t=Object(i.a)(e,2),s=t[0],n=t[1],o=a.a.useState(!1),c=Object(i.a)(o,2),r=c[0],u=c[1],d=a.a.useState(!1),h=Object(i.a)(d,2),j=h[0],O=h[1],x=a.a.useState(null),v=Object(i.a)(x,2),N=v[0],k=v[1];function y(){O(!1),n(!1),u(!1),k(null)}return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)(p,{}),Object(l.jsx)(_,{onEditAvatar:function(){O(!0)},onEditProfile:function(){n(!0)},onAddPost:function(){u(!0)},onCardClick:function(e){k(e)}}),Object(l.jsx)(b,{}),Object(l.jsx)(m,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:s,onClose:y,children:Object(l.jsxs)("fieldset",{className:"popup__fieldset",children:[Object(l.jsxs)("label",{className:"popup__field",children:[Object(l.jsx)("input",{type:"text",className:"popup__input popup__input_content_name",placeholder:"\u0418\u043c\u044f",name:"name",required:!0,minLength:"2",maxLength:"40",id:"name-input"}),Object(l.jsx)("span",{className:"popup__error name-input-error"})]}),Object(l.jsxs)("label",{className:"popup__field",children:[Object(l.jsx)("input",{type:"text",className:"popup__input",placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",id:"about-me-input",name:"about",required:!0,minLength:"2",maxLength:"200"}),Object(l.jsx)("span",{className:"popup__error about-me-input-error"})]})]})}),Object(l.jsx)(m,{name:"add-post",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:r,onClose:y,children:Object(l.jsxs)("fieldset",{className:"popup__fieldset",children:[Object(l.jsxs)("label",{className:"popup__field",children:[Object(l.jsx)("input",{type:"text",className:"popup__input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",id:"place-input",name:"mesto",required:!0,minLength:"2",maxLength:"30"}),Object(l.jsx)("span",{className:"popup__error place-input-error"})]}),Object(l.jsxs)("label",{className:"popup__field",children:[Object(l.jsx)("input",{type:"url",className:"popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",id:"link-input",name:"link",required:!0}),Object(l.jsx)("span",{className:"popup__error link-input-error"})]})]})}),Object(l.jsx)(m,{name:"delete-post",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"}),Object(l.jsx)(m,{name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:j,onClose:y,children:Object(l.jsx)("fieldset",{className:"popup__fieldset",children:Object(l.jsxs)("label",{className:"popup__field",children:[Object(l.jsx)("input",{type:"url",className:"popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",id:"avatar-input",name:"avatar",required:!0}),Object(l.jsx)("span",{className:"popup__error avatar-input-error"})]})})}),Object(l.jsx)(f,{card:N,onClose:y})]})}var x=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,14)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;s(e),n(e),a(e),o(e),c(e)}))};c.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),x()}},[[13,1,2]]]);
//# sourceMappingURL=main.fc6584d3.chunk.js.map