(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),o=n(6),c=n.n(o),i=(n(14),n(9)),r=n(2),u=n(7),l=n(8),p=new(function(){function e(t){Object(u.a)(this,e),this._token=t.token,this._id=t.id,this._adress=t.adress}return Object(l.a)(e,[{key:"_verifyResolve",value:function(e){return e.ok?e.json():Promise.reject(e.status)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._adress,"/v1/").concat(this._id,"/users/me"),{headers:{authorization:this._token}}).then(this._verifyResolve)}},{key:"getPosts",value:function(){return fetch("".concat(this._adress,"/v1/").concat(this._id,"/cards"),{headers:{authorization:this._token}}).then(this._verifyResolve)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._adress,"/v1/").concat(this._id,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then(this._verifyResolve)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._adress,"/v1/").concat(this._id,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then(this._verifyResolve)}},{key:"setPost",value:function(e){return fetch("".concat(this._adress,"/v1/").concat(this._id,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.mesto,link:e.link})}).then(this._verifyResolve)}},{key:"deletePost",value:function(e){return fetch("".concat(this._adress,"/v1/").concat(this._id,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this._verifyResolve)}},{key:"changeLikePostStatus",value:function(e,t){return fetch("".concat(this._adress,"/v1/").concat(this._id,"/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:{authorization:this._token}}).then(this._verifyResolve)}}]),e}())({token:"036b7b31-eb11-4936-b88e-e4dfd598930e",id:"cohort-28",adress:"https://mesto.nomoreparties.co"}),d=s.a.createContext(),h=n.p+"static/media/logo.bbe2a6ea.svg",j=n(0);function _(){return Object(j.jsx)("header",{className:"header",children:Object(j.jsx)("a",{href:"/",children:Object(j.jsx)("img",{src:h,alt:"\u043b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo link-hover"})})})}function b(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,o=e.onCardDelete,c=t.owner,i=t.link,r=t.name,u=t.likes,l=s.a.useContext(d),p=c._id===l._id,h="post__del-button ".concat(p&&"post__del-button_visible"),_=u.some((function(e){return e._id===l._id})),b="post__like-button ".concat(_&&"post__like-button_active");return Object(j.jsxs)("article",{className:"post",children:[Object(j.jsx)("img",{src:i,alt:r,className:"post__photo",onClick:function(){n(t)}}),Object(j.jsx)("p",{className:"post__caption",children:r}),Object(j.jsxs)("div",{className:"post__likes",children:[Object(j.jsx)("button",{type:"button",className:b,onClick:function(){a(t)}}),Object(j.jsx)("p",{className:"post__likes-number",children:u.length})]}),Object(j.jsx)("button",{type:"button",className:h,onClick:function(){o(t)}})]})}function f(e){var t=e.onEditAvatar,n=e.onEditProfile,a=e.onAddPost,o=e.onCardClick,c=e.onCardLike,i=e.onCardDelete,r=e.posts,u=s.a.useContext(d);return Object(j.jsxs)("main",{className:"content",children:[Object(j.jsxs)("section",{className:"profile",children:[Object(j.jsx)("img",{src:u.avatar||"",alt:"\u0430\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar"}),Object(j.jsx)("div",{className:"profile__edit-avatar",onClick:t}),Object(j.jsxs)("div",{className:"profile__info",children:[Object(j.jsx)("h1",{className:"profile__name",children:u.name||"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"}),Object(j.jsx)("p",{className:"profile__about-me",children:u.about||"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"}),Object(j.jsx)("button",{className:"profile__edit-button",type:"button",onClick:n})]}),Object(j.jsx)("button",{className:"profile__add-button",type:"button",onClick:a})]}),Object(j.jsx)("section",{className:"posts",children:r.map((function(e){return Object(j.jsx)(b,{card:e,onCardClick:o,onCardLike:c,onCardDelete:i},e._id)}))})]})}function m(){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsx)("p",{className:"footer__author",children:"\xa9\xa02021 Daria Ivanova"})})}function O(e){var t=e.name,n=e.title,a=e.children,s=e.isOpen,o=e.onClose,c=e.onSubmit,i="popup ".concat(s&&"popup_opened"),r="popup__form popup__form_contain_".concat(t);return Object(j.jsx)("div",{className:i,children:Object(j.jsxs)("div",{className:"popup__container",children:[Object(j.jsx)("h2",{className:"popup__title",children:n}),Object(j.jsxs)("form",{name:t,className:r,onSubmit:c,children:[a,Object(j.jsx)("button",{type:"submit",className:"popup__submit-button",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(j.jsx)("button",{type:"reset",className:"popup__reset-button",onClick:o})]})]})})}function v(e){var t=e.card,n=e.onClose;return Object(j.jsx)("div",{className:"popup popup_content_photo ".concat(t&&"popup_opened"),id:"popup-open-photo",children:Object(j.jsxs)("div",{className:"popup__photo-box",children:[Object(j.jsx)("img",{src:t?t.link:"#",alt:t?t.name:"",className:"popup__photo"}),Object(j.jsx)("p",{className:"popup__caption-photo",children:t?t.name:""}),Object(j.jsx)("button",{type:"button",className:"popup__reset-button",onClick:n})]})})}function x(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateUser,o=s.a.useContext(d),c=s.a.useState(""),i=Object(r.a)(c,2),u=i[0],l=i[1],p=s.a.useState(""),h=Object(r.a)(p,2),_=h[0],b=h[1];return s.a.useEffect((function(){l(o.name||""),b(o.about||"")}),[o]),Object(j.jsx)(O,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({name:u,about:_}),n()},children:Object(j.jsxs)("fieldset",{className:"popup__fieldset",children:[Object(j.jsxs)("label",{className:"popup__field",children:[Object(j.jsx)("input",{type:"text",className:"popup__input popup__input_content_name",placeholder:"\u0418\u043c\u044f",name:"name",required:!0,minLength:"2",maxLength:"40",id:"name-input",value:u,onChange:function(e){l(e.target.value)}}),Object(j.jsx)("span",{className:"popup__error name-input-error"})]}),Object(j.jsxs)("label",{className:"popup__field",children:[Object(j.jsx)("input",{type:"text",className:"popup__input",placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",id:"about-me-input",name:"about",required:!0,minLength:"2",maxLength:"200",value:_,onChange:function(e){b(e.target.value)}}),Object(j.jsx)("span",{className:"popup__error about-me-input-error"})]})]})})}function k(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,o=s.a.useRef();return Object(j.jsx)(O,{name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({avatar:o.current.value}),n(),o.current.value=""},children:Object(j.jsx)("fieldset",{className:"popup__fieldset",children:Object(j.jsxs)("label",{className:"popup__field",children:[Object(j.jsx)("input",{type:"url",className:"popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",id:"avatar-input",name:"avatar",required:!0,ref:o}),Object(j.jsx)("span",{className:"popup__error avatar-input-error"})]})})})}function N(e){var t=e.isOpen,n=e.onClose,a=e.onAddPost,o=s.a.useState(""),c=Object(r.a)(o,2),i=c[0],u=c[1],l=s.a.useState(""),p=Object(r.a)(l,2),d=p[0],h=p[1];return Object(j.jsx)(O,{name:"add-post",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({mesto:i,link:d}),n(),u(""),h("")},children:Object(j.jsxs)("fieldset",{className:"popup__fieldset",children:[Object(j.jsxs)("label",{className:"popup__field",children:[Object(j.jsx)("input",{type:"text",className:"popup__input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",id:"place-input",name:"mesto",required:!0,minLength:"2",maxLength:"30",value:i,onChange:function(e){u(e.target.value)}}),Object(j.jsx)("span",{className:"popup__error place-input-error"})]}),Object(j.jsxs)("label",{className:"popup__field",children:[Object(j.jsx)("input",{type:"url",className:"popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",id:"link-input",name:"link",required:!0,value:d,onChange:function(e){h(e.target.value)}}),Object(j.jsx)("span",{className:"popup__error link-input-error"})]})]})})}function C(){var e=s.a.useState({}),t=Object(r.a)(e,2),n=t[0],a=t[1],o=s.a.useState(!1),c=Object(r.a)(o,2),u=c[0],l=c[1],h=s.a.useState(!1),b=Object(r.a)(h,2),C=b[0],g=b[1],y=s.a.useState(!1),S=Object(r.a)(y,2),P=S[0],L=S[1],E=s.a.useState(null),U=Object(r.a)(E,2),A=U[0],D=U[1],T=s.a.useState([]),R=Object(r.a)(T,2),z=R[0],I=R[1];function q(){L(!1),l(!1),g(!1),D(null)}return s.a.useEffect((function(){p.getUserInfo().then((function(e){a(e)})).catch((function(e){return console.log(e)}))}),[]),s.a.useEffect((function(){p.getPosts().then((function(e){I(e)})).catch((function(e){return console.log(e)}))}),[]),Object(j.jsx)(d.Provider,{value:n,children:Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)(_,{}),Object(j.jsx)(f,{onEditAvatar:function(){L(!0)},onEditProfile:function(){l(!0)},onAddPost:function(){g(!0)},onCardClick:function(e){D(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===n._id}));p.changeLikePostStatus(e._id,t).then((function(t){I((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))}))},onCardDelete:function(e){p.deletePost(e._id).then((function(){I((function(t){return t.filter((function(t){return t._id!==e._id}))}))}))},posts:z}),Object(j.jsx)(m,{}),Object(j.jsx)(x,{isOpen:u,onClose:q,onUpdateUser:function(e){p.setUserInfo(e).then((function(e){a(e)})).catch((function(e){return console.log(e)}))}}),Object(j.jsx)(N,{isOpen:C,onClose:q,onAddPost:function(e){p.setPost(e).then((function(e){I([e].concat(Object(i.a)(z)))})).catch((function(e){return console.log(e)}))}}),Object(j.jsx)(O,{name:"delete-post",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?"}),Object(j.jsx)(k,{isOpen:P,onClose:q,onUpdateAvatar:function(e){p.setUserAvatar(e).then((function(e){a(e)})).catch((function(e){return console.log(e)}))}}),Object(j.jsx)(v,{card:A,onClose:q})]})})}var g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),o(e),c(e)}))};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.b71db00b.chunk.js.map