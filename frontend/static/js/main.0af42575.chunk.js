(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{33:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),o=n(24),i=n.n(o),r=n(9),l=(n(33),n(14)),d=n(15),u=n(2),p=n(18),h=n(17),m=n(3),j=n.p+"static/media/logo.c2821b38.svg";var b=function(e){var t=e.handleLogout;return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("img",{src:j,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f\u0447\u0438\u043a",className:"header__logo"}),!e.loggedIn&&Object(a.jsxs)(m.d,{children:[Object(a.jsx)(m.b,{path:"/sign-in",children:Object(a.jsx)(r.b,{className:"header__link",to:"/sign-up",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(a.jsx)(m.b,{path:"/sign-up",children:Object(a.jsx)(r.b,{className:"header__link",to:"/sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})})]}),e.loggedIn&&Object(a.jsxs)("div",{className:"header__logout",children:[Object(a.jsx)("div",{className:"header__email",children:e.email}),Object(a.jsx)("div",{className:"header__link",onClick:t,children:"\u0412\u044b\u0439\u0442\u0438"})]})]})};var O=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})},f=n(7);var _=function(e){return Object(a.jsxs)("div",{className:"form",children:[Object(a.jsx)("h3",{className:"form__title",children:e.title}),Object(a.jsxs)("form",{className:"form__container",onSubmit:e.onSubmit,children:[Object(a.jsxs)("div",{className:"form__inputs",children:[Object(a.jsx)("input",{type:"email",value:e.email||"",name:"email",className:"form__input",placeholder:"\u041a\u0430\u043a\u043e\u0439 \u0442\u0430\u043c \u0435\u043c\u0430\u0438\u043b \u0443 \u0442\u0435\u0431\u044f \u0434\u043b\u044f \u0441\u043f\u0430\u043c\u0430?",minLength:"2",maxLength:"30",onChange:e.onHandleChangeEmail}),Object(a.jsx)("input",{type:"password",value:e.password||"",name:"password",className:"form__input",placeholder:"\u0420\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u044e qwerty123",minLength:"8",maxLength:"30",onChange:e.onHandleChangePassword})]}),Object(a.jsxs)("div",{className:"form__buttons",children:[Object(a.jsx)("button",{className:"form__button",children:e.btnName}),Object(a.jsx)(r.b,{className:"form__link",to:e.href,children:e.link})]})]})]})};var g=function(e){var t=c.a.useState(),n=Object(f.a)(t,2),s=n[0],o=n[1],i=c.a.useState(),r=Object(f.a)(i,2),l=r[0],d=r[1],u=e.handleRegister;return Object(a.jsx)(_,{title:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",name:"register",formName:"register",btnName:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",href:"/sign-in",link:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438",email:s,password:l,onSubmit:function(e){e.preventDefault(),u(s,l)},onHandleChangeEmail:function(e){o(e.target.value)},onHandleChangePassword:function(e){d(e.target.value)}})},v=n.p+"static/media/close-button.b76af81b.svg";var C=function(e){return Object(a.jsx)("section",{className:"popup popup_img ".concat(e.isOpen&&"popup_opened"),children:Object(a.jsx)("div",{className:"popup__container popup__container_message",children:Object(a.jsxs)("div",{className:"popup__message",children:[Object(a.jsx)("button",{className:"popup__close-button popup__close-button_img",onClick:e.onClose,children:Object(a.jsx)("img",{src:v,alt:"\u0417\u0430\u043a\u0440\u044b\u0432\u0430\u044e\u0449\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430"})}),Object(a.jsx)("img",{src:e.icon,alt:e.iconName,className:"popup__icon"}),Object(a.jsx)("p",{className:"popup__message-text",children:e.text})]})})})};var x=function(e){var t=c.a.useState(),n=Object(f.a)(t,2),s=n[0],o=n[1],i=c.a.useState(),r=Object(f.a)(i,2),l=r[0],d=r[1],u=e.handleLogin;return Object(a.jsx)(_,{title:"\u0412\u043e\u0439\u0442\u0438",name:"login",formName:"login",btnName:"\u0412\u043e\u0439\u0442\u0438",href:"/sign-in",link:"",email:s,password:l,onSubmit:function(e){e.preventDefault(),u(s,l)},onHandleChangeEmail:function(e){o(e.target.value)},onHandleChangePassword:function(e){d(e.target.value)}})},k=c.a.createContext(),N={},y=n(26),S=n(13);var P=function(e){var t=e.props,n=c.a.useContext(k),s=t.owner===n._id,o="element__trash-button ".concat(s?"element__trash-button_visible":"element__trash-button_hidden"),i=t.likes.some((function(e){return e===n._id})),r="element__like-icon ".concat(i?"element__like-icon_active":"element__like-icon_hidden");return Object(a.jsxs)("li",{className:"element",children:[Object(a.jsx)("div",{className:"element__container",children:Object(a.jsx)("img",{src:t.link,alt:t.name,className:"element__photo",onClick:function(){return t.onCardClick(t)}})}),Object(a.jsx)("button",{className:o,onClick:function(){return t.onCardDelete(t)}}),Object(a.jsxs)("div",{className:"element__info",children:[Object(a.jsx)("span",{className:"element__title",children:t.name}),Object(a.jsxs)("div",{className:"element__like-button",onClick:function(){return t.onCardLike(Object(S.a)(Object(S.a)({},t),{},{currentUserId:n._id}))},children:[Object(a.jsx)("button",{className:r}),Object(a.jsx)("span",{className:"element__like-counter",children:t.likes.length})]})]})]})};var A=function(e){var t=e.onEditProfile,n=e.onAddCard,s=e.onEditAvatar,o=(e.onCardClick,e.cards),i=c.a.useContext(k);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__profile-info",children:[Object(a.jsx)("a",{href:"/#",className:"profile__avatar-box",onClick:s,children:Object(a.jsx)("img",{src:i.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430 \u0447\u0443\u0432\u0430\u043a\u0430",className:"profile__avatar"})}),Object(a.jsxs)("div",{className:"profile__text",children:[Object(a.jsxs)("div",{className:"profile__name",children:[Object(a.jsx)("h1",{className:"profile__title",children:i.name}),Object(a.jsx)("button",{type:"button",className:"profile__edit-button","aria-label":"Edit",onClick:t})]}),Object(a.jsx)("p",{className:"profile__subtitle",children:i.about})]})]}),Object(a.jsx)("button",{type:"button",className:"profile__add-button","aria-label":"Add",onClick:n})]}),Object(a.jsx)("section",{className:"elements",children:Object(a.jsx)("ul",{className:"elements__list",children:o.map((function(e){return Object(a.jsx)(P,{props:e},e._id)}))})})]})};var T=function(e){var t=e.formName,n=e.btnName;return Object(a.jsx)("button",{className:"popup__save-button popup__save-button_".concat(t),children:n})};var U=function(e){return Object(a.jsx)("section",{className:"popup popup_".concat(e.name," ").concat(e.isOpen&&"popup_opened"),children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("button",{className:"popup__close-button",onClick:e.onClose,children:Object(a.jsx)("img",{src:v,alt:"\u0417\u0430\u043a\u0440\u044b\u0432\u0430\u044e\u0449\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430"})}),Object(a.jsx)("h3",{className:"popup__title",children:e.title}),Object(a.jsxs)("form",{className:"popup__form",onSubmit:e.onSubmit,children:[e.children,Object(a.jsx)(T,{formName:e.formName,btnName:e.btnName})]})]})})};var E=function(e){return Object(a.jsx)("section",{className:"popup popup_img ".concat(e.isOpen&&"popup_opened"),children:Object(a.jsxs)("div",{className:"popup__container popup__container_img",children:[Object(a.jsxs)("div",{className:"popup__img",children:[Object(a.jsx)("button",{className:"popup__close-button popup__close-button_img",onClick:e.onClose,children:Object(a.jsx)("img",{src:v,alt:"\u0417\u0430\u043a\u0440\u044b\u0432\u0430\u044e\u0449\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430"})}),Object(a.jsx)("img",{src:e.props.link,alt:e.props.name,className:"popup__pic"})]}),Object(a.jsx)("span",{className:"popup__text",children:e.props.name})]})})};var L=function(e){var t=e.type,n=e.name,s=e.count,c=e.placeholder,o=e.minLength,i=e.maxLength,r=e.onChange,l=e.value;return Object(a.jsx)("input",{type:t,className:"popup__input popup__input_".concat(n),id:"popup__input_".concat(n,"_").concat(s),onChange:r,placeholder:c,minLength:o,maxLength:i,required:!0,value:l})};var I=function(e){var t=e.name,n=e.count;return Object(a.jsx)("span",{className:"popup__error",id:"popup__input_".concat(t,"_").concat(n,"-error")})};var w=function(e){var t=c.a.useContext(k),n=c.a.useState(t.name),s=Object(f.a)(n,2),o=s[0],i=s[1],r=c.a.useState(t.about),l=Object(f.a)(r,2),d=l[0],u=l[1];return c.a.useEffect((function(){i(t.name),u(t.about)}),[t]),Object(a.jsxs)(U,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",name:"edit",isOpen:e.isOpen,onClose:e.onClose,formName:"edit",btnName:"\u041e\u043a, \u044f \u043f\u043e\u043d\u044f\u043b :\u0437",onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:o,about:d})},children:[Object(a.jsxs)("label",{className:"popup__label",children:[Object(a.jsx)(L,{type:"text",name:"name",count:"2",placeholder:"\u0422\u044b \u043a\u0442\u043e \u0442\u0430\u043a\u043e\u0439?",minLength:"2",maxLength:"30",onChange:function(e){i(e.target.value)},value:o||""}),Object(a.jsx)(I,{name:"name",count:"2"})]}),Object(a.jsxs)("label",{className:"popup__label",children:[Object(a.jsx)(L,{type:"text",name:"info",count:"2",placeholder:"\u0427\u0435 \u043a\u043e\u0433\u043e, \u0441\u0443***\u044b?",minLength:"2",maxLength:"300",onChange:function(e){u(e.target.value)},value:d||""}),Object(a.jsx)(I,{name:"info",count:"2"})]})]})};var D=function(e){var t=c.a.useRef(null);return Object(a.jsx)(U,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",isOpen:e.isOpen,onClose:e.onClose,formName:"avatar",btnName:"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar(t.current.value),t.current.value=""},children:Object(a.jsxs)("label",{className:"popup__label",children:[Object(a.jsx)("input",{type:"url",className:"popup__input popup__input_avatar",name:"info",count:"1",placeholder:"\u0427\u0435 \u0441\u043d\u043e\u0432\u0430 \u0432\u044b\u043f\u0435\u043d\u0434\u0440\u0438\u0432\u0430\u0435\u0448\u044c\u0441\u044f \u0441 \u0430\u0444\u0444\u043a\u0430\u043c\u0438?",ref:t,src:e.link}),Object(a.jsx)(I,{name:"info",count:"1"})]})})};var R=function(e){var t=c.a.useState(""),n=Object(f.a)(t,2),s=n[0],o=n[1],i=c.a.useState(""),r=Object(f.a)(i,2),l=r[0],d=r[1];return Object(a.jsxs)(U,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",name:"add",isOpen:e.isOpen,onClose:e.onClose,formName:"add",btnName:"\u041f\u043e\u0433\u043d\u0430\u043b\u0438!",onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:s,link:l})},children:[Object(a.jsxs)("label",{className:"popup__label",children:[Object(a.jsx)(L,{type:"text",name:"name",count:"1",placeholder:"\u0427\u0435 \u0437\u0430 \u043f\u0440\u043e\u0435\u043a\u0442?",minLength:"2",maxLength:"30",onChange:function(e){var t=e.target.value;o(t)},value:s}),Object(a.jsx)(I,{name:"name",count:"1"})]}),Object(a.jsxs)("label",{className:"popup__label",children:[Object(a.jsx)(L,{type:"url",name:"info",count:"1",placeholder:"\u0421\u0441\u044b\u043b\u043e\u0447\u043a\u0443 \u043f\u043e\u0434\u043a\u0438\u043d\u044c, \u0431\u0440\u043e!",onChange:function(e){var t=e.target.value;d(t)},value:l}),Object(a.jsx)(I,{name:"info",count:"1"})]})]})},H="https://api.wabu-labu-dab-dab.nomoredomains.icu";function J(e){return e.ok?e.json():Promise.reject("Server error")}function B(){return{"Content-Type":"application/json",authorization:"Bearer ".concat(localStorage.getItem("token"))}}var F=function(){return fetch("".concat(H,"/cards"),{headers:B()}).then(J)},M=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={isEditProfilePopupOpen:!1,isAddCardPopupOpen:!1,isEditAvatarPopupOpen:!1,selectedCard:{},isSelectedCardOpen:!1,cards:[]},a.setCurrentUser=e.setCurrentUser,a.handleEditProfileClick=a.handleEditProfileClick.bind(Object(u.a)(a)),a.handleAddCardClick=a.handleAddCardClick.bind(Object(u.a)(a)),a.handleEditAvatarClick=a.handleEditAvatarClick.bind(Object(u.a)(a)),a.handleCardClick=a.handleCardClick.bind(Object(u.a)(a)),a.handleSelectedCardClick=a.handleSelectedCardClick.bind(Object(u.a)(a)),a.closeAllPopup=a.closeAllPopup.bind(Object(u.a)(a)),a.handleCardLike=a.handleCardLike.bind(Object(u.a)(a)),a.handleCardDelete=a.handleCardDelete.bind(Object(u.a)(a)),a.handleAddPlace=a.handleAddPlace.bind(Object(u.a)(a)),a.handleUpdateUser=a.handleUpdateUser.bind(Object(u.a)(a)),a.handleUpdateAvatar=a.handleUpdateAvatar.bind(Object(u.a)(a)),a.mapCards=a.mapCards.bind(Object(u.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getInitialCards()}},{key:"handleEditProfileClick",value:function(){this.setState({isEditProfilePopupOpen:!this.state.isEditProfilePopupOpen})}},{key:"handleAddCardClick",value:function(){this.setState({isAddCardPopupOpen:!this.state.isAddCardPopupOpen})}},{key:"handleEditAvatarClick",value:function(){this.setState({isEditAvatarPopupOpen:!this.state.isEditAvatarPopupOpen})}},{key:"handleCardClick",value:function(e){this.setState({selectedCard:e})}},{key:"handleSelectedCardClick",value:function(){this.setState({isSelectedCardOpen:!this.state.isSelectedCardOpen})}},{key:"closeAllPopup",value:function(){this.setState({isAddCardPopupOpen:!1,isEditAvatarPopupOpen:!1,selectedCard:{},isEditProfilePopupOpen:!1,selectedCardOpen:!1})}},{key:"mapCards",value:function(e){return{name:e.name,link:e.link,onCardClick:this.handleCardClick,onCardLike:this.handleCardLike,_id:e._id,onCardOpen:this.handleSelectedCardClick,owner:e.owner,likes:e.likes,onCardDelete:this.handleCardDelete}}},{key:"handleAddPlace",value:function(e){var t=this;(function(e){var t=e.name,n=e.link;return fetch("".concat(H,"/cards"),{method:"POST",headers:B(),body:JSON.stringify({name:t,link:n})}).then(J)})(e).then((function(e){t.setState({cards:[e.data].concat(Object(y.a)(t.state.cards)).map(t.mapCards)}),t.closeAllPopup()})).catch((function(e){return console.log(e)}))}},{key:"handleUpdateUser",value:function(e){var t=this;(function(e){var t=e.name,n=e.about;return fetch("".concat(H,"/users/me"),{method:"PATCH",headers:B(),body:JSON.stringify({name:t,about:n})}).then(J)})(e).then((function(e){t.setCurrentUser(e),t.closeAllPopup()})).catch((function(e){return console.log(e)}))}},{key:"handleUpdateAvatar",value:function(e){var t,n=this;(t={avatar:e},fetch("".concat(H,"/users/me/avatar"),{method:"PATCH",headers:B(),body:JSON.stringify(t)}).then(J)).then((function(e){n.setCurrentUser(e),n.closeAllPopup()})).catch((function(e){return console.log(e)}))}},{key:"handleCardLike",value:function(e){var t,n,a=this,s=e.likes.some((function(t){return t===e.currentUserId}));(t=e._id,n=!s,fetch("".concat(H,"/cards/").concat(t,"/likes"),{method:n?"PUT":"DELETE",headers:B()}).then(J)).then((function(){F().then((function(e){var t=e.map(a.mapCards);a.setState({cards:t})}))})).catch((function(e){return console.log(e)}))}},{key:"handleCardDelete",value:function(e){var t=this,n=e.name,a=e._id;(function(e){var t=e.name,n=e.id;return fetch("".concat(H,"/cards/").concat(n),{method:"DELETE",headers:B(),body:JSON.stringify({name:t})}).then(J)})({name:n,id:a}).then((function(){console.log("delete",t.state.cards);var e=t.state.cards.filter((function(e){return e._id!==a}));t.setState({cards:e})})).catch((function(e){return console.log(e)}))}},{key:"getInitialCards",value:function(){var e=this;F().then((function(t){var n=t.map(e.mapCards);e.setState({cards:n})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(A,{cards:this.state.cards,onEditProfile:this.handleEditProfileClick,onAddCard:this.handleAddCardClick,onEditAvatar:this.handleEditAvatarClick,onCardClick:this.handleCardClick,isOpen:this.handleSelectedCardClick}),Object(a.jsx)(R,{isOpen:this.state.isAddCardPopupOpen,onClose:this.closeAllPopup,onAddPlace:this.handleAddPlace}),Object(a.jsx)(w,{isOpen:this.state.isEditProfilePopupOpen,onClose:this.closeAllPopup,onUpdateUser:this.handleUpdateUser}),Object(a.jsx)(D,{isOpen:this.state.isEditAvatarPopupOpen,onClose:this.closeAllPopup,onUpdateAvatar:this.handleUpdateAvatar}),Object(a.jsx)(U,{title:"\u0422\u044b \u0431\u0435\u0441\u0441\u0435\u0440\u0434\u0435\u0447\u043d\u044b\u0439! \u0422\u043e\u0447\u043d\u043e \u0443\u0434\u0430\u043b\u044f\u0435\u043c?",name:"confirm",formname:"confirm",btnname:"\u0414\u044d\u044d\u044d"}),Object(a.jsx)(E,{isOpen:Object.keys(this.state.selectedCard).length,props:this.state.selectedCard,onClose:this.closeAllPopup})]})}}]),n}(c.a.Component),q=n(27);var z=function(e){var t=e.component,n=Object(q.a)(e,["component"]);return Object(a.jsx)(m.b,{exact:!0,path:n.path,children:function(){return n.loggedIn?Object(a.jsx)(t,Object(S.a)({},n)):Object(a.jsx)(m.a,{to:"/sign-in"})}})},K=n.p+"static/media/iconOK.1b6082f8.svg",G=n.p+"static/media/iconError.df8eddf6.svg",Q="https://api.wabu-labu-dab-dab.nomoredomains.icu";function V(e){return e.ok?e.json():Promise.reject("Server error")}var W=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={currentUser:N,loggedIn:!1,isOpenToolTip:!1,toolTipInfo:{}},a.handleLogin=a.handleLogin.bind(Object(u.a)(a)),a.handleLogout=a.handleLogout.bind(Object(u.a)(a)),a.handleRegister=a.handleRegister.bind(Object(u.a)(a)),a.setCurrentUser=a.setCurrentUser.bind(Object(u.a)(a)),a.successRegister=a.successRegister.bind(Object(u.a)(a)),a.closeTooltip=a.closeTooltip.bind(Object(u.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getCurrentUser()}},{key:"getCurrentUser",value:function(){var e=this;(function(e){return fetch("".concat(Q,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(V)})(localStorage.getItem("token")).then((function(t){e.setState({loggedIn:!0}),e.setState({currentUser:t}),e.props.history.push("/")})).catch((function(e){return console.log(e)}))}},{key:"handleRegister",value:function(e,t){var n=this;(function(e,t){return fetch("".concat(Q,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(V)})(e,t).then((function(){n.openToolTip("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c",K,"OK"),n.successRegister()})).catch((function(){n.openToolTip("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.",G,"Error")}))}},{key:"successRegister",value:function(){this.props.history.push("/sign-in")}},{key:"handleLogin",value:function(e,t){var n=this;(function(e,t){return fetch("".concat(Q,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(V)})(e,t).then((function(e){localStorage.setItem("token",e.token),n.setState({loggedIn:!0}),n.getCurrentUser(),n.props.history.push("/")})).catch((function(){n.openToolTip("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.",G,"Error")}))}},{key:"handleLogout",value:function(){localStorage.removeItem("token"),this.setState({loggedIn:!1,currentUser:{}}),this.props.history.push("/sign-in")}},{key:"setCurrentUser",value:function(e){this.setState({currentUser:e})}},{key:"closeTooltip",value:function(){this.setState({isOpenToolTip:!1,toolTipInfo:{}})}},{key:"openToolTip",value:function(e,t,n){this.setState({isOpenToolTip:!0,toolTipInfo:{text:e,icon:t,iconName:n}})}},{key:"render",value:function(){return Object(a.jsxs)(k.Provider,{value:this.state.currentUser,children:[Object(a.jsx)(b,{loggedIn:this.state.loggedIn,email:this.state.currentUser.email,handleLogout:this.handleLogout}),Object(a.jsxs)(m.d,{children:[Object(a.jsx)(m.b,{path:"/sign-up",children:Object(a.jsx)(g,{handleRegister:this.handleRegister})}),Object(a.jsx)(m.b,{path:"/sign-in",children:Object(a.jsx)(x,{loggedIn:this.state.loggedIn,handleLogin:this.handleLogin})}),Object(a.jsx)(z,{path:"/",loggedIn:this.state.loggedIn,component:M,setCurrentUser:this.setCurrentUser})]}),Object(a.jsx)(O,{}),Object(a.jsx)(C,{icon:this.state.toolTipInfo.icon,iconName:this.state.toolTipInfo.iconName,text:this.state.toolTipInfo.text,isOpen:this.state.isOpenToolTip,onClose:this.closeTooltip})]})}}]),n}(c.a.Component),X=Object(m.g)(W),Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),c(e),o(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(r.a,{children:Object(a.jsx)(X,{})})}),document.getElementById("root")),Y()}},[[39,1,2]]]);
//# sourceMappingURL=main.0af42575.chunk.js.map