(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=new(function(){function t(e){var n=e.baseUrl,r=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=n,this._headers=r}var n,r;return n=t,(r=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"updateUserInfo",value:function(t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.name,about:t.job})}).then(this._checkResponse)}},{key:"updateUserAvatar",value:function(t){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.avatar})}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"addNewCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.place,link:t.link})}).then(this._checkResponse)}},{key:"deleteCard",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"putLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(t){return fetch("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-59",headers:{authorization:"75baa56a-370e-4e70-8e83-c19302f5044d","Content-Type":"application/json"}});function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.reverse().forEach((function(t){e.renderer(t)}))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===u(o)?o:String(o)),r)}var o}var c=function(){function t(e,n,r,o){var i=o.handleCardClick,u=o.handleDeleteButtonClick,a=o.handleLikeButtonClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._element=document.querySelector(e).content.children[0].cloneNode(!0),this._likeButton=this._element.querySelector(".card-grid__like-button"),this._deleteButton=this._element.querySelector(".card-grid__delete-button"),this._image=this._element.querySelector(".card-grid__image"),this._likesAmount=this._element.querySelector(".card-grid__likes-amount"),this._source=n.link,this._description=n.name,this._name=n.name,this._owner=n.owner,this._likes=n.likes,this._userId=r,this.handleCardClick=i,this.handleDeleteButtonClick=u,this.handleLikeButtonClick=a}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return this._element}},{key:"toggleLikeButton",value:function(){this._likeButton.classList.toggle("card-grid__like-button_active")}},{key:"updateLikeAmount",value:function(t){this._likesAmount.textContent=t.length}},{key:"isLiked",value:function(){return this._likeButton.classList.contains("card-grid__like-button_active")}},{key:"removeCard",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var t=this;this._likeButton.addEventListener("click",(function(){return t.handleLikeButtonClick()})),this._owner._id===this._userId&&this._deleteButton.addEventListener("click",(function(){return t.handleDeleteButtonClick()})),this._image.addEventListener("click",(function(){return t.handleCardClick()}))}},{key:"createCard",value:function(){var t=this;return this._element=this._getTemplate(),this._setEventListeners(),this._image.src=this._source,this._image.alt=this._description,this._element.querySelector(".card-grid__name").textContent=this._name,this._likesAmount.textContent=this._likes.length,this._owner._id!==this._userId&&this._deleteButton.remove(),this._likes.forEach((function(e){if(e._id===t._userId)return t.toggleLikeButton()})),this._element}}])&&a(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,p(r.key),r)}}function f(t,e,n){return(e=p(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){var e=function(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===l(e)?e:String(e)}var y=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,"_showInputError",(function(t,e){var n=r._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(r._inputErrorClass),n.textContent=e,n.classList.add(r._errorClass)})),f(this,"_hideInputError",(function(t,e){var n=r._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(r._inputErrorClass),n.textContent="",n.classList.remove(r._errorClass)})),f(this,"_isValid",(function(t){t.validity.valid?r._hideInputError(t,t.validationMessage):r._showInputError(t,t.validationMessage)})),this._formElement=n,this._inputSelector=e.inputSelector,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._submitButton=this._formElement.querySelector(e.submitButtonSelector),this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass}var e,n;return e=t,(n=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_disableSubmitButton",value:function(){this._submitButton.setAttribute("disabled",!0)}},{key:"deactivateSubmitButton",value:function(){this._disableSubmitButton()}},{key:"_ableSubmitButton",value:function(){this._submitButton.removeAttribute("disabled")}},{key:"_toggleSubmitButton",value:function(){this._hasInvalidInput()?this._disableSubmitButton():this._ableSubmitButton()}},{key:"_setEventListeners",value:function(){var t=this;this._toggleSubmitButton(),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._isValid(e),t._toggleSubmitButton()}))}))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}},{key:"updateValidation",value:function(){var t=this;this._ableSubmitButton(),this._inputList.forEach((function(e){t._hideInputError(e,e.validationMessage)}))}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}var m=function(){function t(e){var n=e.nameSelector,r=e.jobSelector,o=e.avatarSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._job=document.querySelector(r),this._avatar=document.querySelector(o),this._id=""}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return this._profileInfo={name:this._name.textContent,job:this._job.textContent},this._profileInfo}},{key:"setInitialUserInfo",value:function(t){this._name.textContent=t.name,this._job.textContent=t.about,this._avatar.src=t.avatar,this._id=t._id}},{key:"getUserId",value:function(){return this._id}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.job;this._name.textContent=e,this._job.textContent=n}},{key:"setUserAvatar",value:function(t){var e=t.avatar;this._avatar.src=e}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===v(o)?o:String(o)),r)}var o}var _=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleButtonClose=this._handleButtonClose.bind(this),this._handleBackgroundClose=this._handleBackgroundClose.bind(this),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_addEscEventListener",value:function(){document.addEventListener("keydown",this._handleEscClose)}},{key:"_removeEscEventListener",value:function(){document.removeEventListener("keydown",this._handleEscClose)}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),this._addEscEventListener()}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),this._removeEscEventListener()}},{key:"_handleButtonClose",value:function(t){t.target.classList.contains("popup__close-button")&&this.close()}},{key:"_handleBackgroundClose",value:function(t){t.target.classList.contains("popup_opened")&&this.close()}},{key:"setEventListeners",value:function(){this._popup.addEventListener("mousedown",this._handleBackgroundClose),this._popup.addEventListener("mousedown",this._handleButtonClose)}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==g(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===g(o)?o:String(o)),r)}var o}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=E(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},S.apply(this,arguments)}function w(t,e){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},w(t,e)}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}var j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&w(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=E(r);if(o){var n=E(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===g(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n,r=e.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n._submitButton=n._form.querySelector(".popup__submit-button"),n._handleFormSubmit=r,n}return e=u,(n=[{key:"close",value:function(){S(E(u.prototype),"close",this).call(this),this._form.reset()}},{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;S(E(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault();var n=t._submitButton.textContent;t._submitButton.textContent="Сохранение...",t._handleFormSubmit(t._getInputValues()).then((function(){return t.close()})).catch((function(t){console.log(t)})).finally((function(){t._submitButton.textContent=n}))}))}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(_);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==C(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===C(o)?o:String(o)),r)}var o}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=B(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},L.apply(this,arguments)}function P(t,e){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},P(t,e)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var I=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&P(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=B(r);if(o){var n=B(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._image=e._popup.querySelector(".popup__image"),e._caption=e._popup.querySelector(".popup__image-caption"),e}return e=u,(n=[{key:"open",value:function(t){this._image.src=t.link,this._image.alt=t.name,this._caption.textContent=t.name,L(B(u.prototype),"open",this).call(this)}}])&&O(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(_);function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}function U(){return U="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=x(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},U.apply(this,arguments)}function q(t,e){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},q(t,e)}function x(t){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},x(t)}var D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&q(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=x(r);if(o){var n=x(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===R(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._handleDeleteConfirmation=function(){},e._confirmButton=e._popup.querySelector(".popup__confirm-button"),e}return e=u,(n=[{key:"close",value:function(){U(x(u.prototype),"close",this).call(this)}},{key:"addConfirmationListener",value:function(t){var e=t.handleDeleteConfirmation;this._handleDeleteConfirmation=e}},{key:"setEventListeners",value:function(){var t=this;U(x(u.prototype),"setEventListeners",this).call(this),this._confirmButton.addEventListener("mousedown",(function(){t._handleDeleteConfirmation()}))}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(_),A=document.querySelector(".profile__edit-button"),V=document.querySelector(".profile__add-button"),F=document.querySelector(".profile__avatar-cover"),N=document.forms["avatar-update"],J=document.forms["profile-information"],M=document.forms["place-addition"],H={inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},z=new y(H,N);z.enableValidation();var G=new y(H,J);G.enableValidation();var K=new y(H,M);K.enableValidation();var Q,W=new m({nameSelector:".profile__name",jobSelector:".profile__job",avatarSelector:".profile__avatar"});Promise.all([n.getUserInfo(),n.getInitialCards()]).then((function(t){W.setInitialUserInfo(t[0]),Q=W.getUserId(),et.renderItems(t[1])})).catch((function(t){console.log(t)}));var X=new j(".popup_type_avatar-update",{handleFormSubmit:function(t){return n.updateUserAvatar(t).then((function(t){W.setUserAvatar({avatar:t.avatar})})).catch((function(t){console.log(t)}))}});X.setEventListeners(),F.addEventListener("click",(function(){z.deactivateSubmitButton(),X.open()}));var Y=new j(".popup_type_profile-information",{handleFormSubmit:function(t){return n.updateUserInfo(t).then((function(t){W.setUserInfo({name:t.name,job:t.about})})).catch((function(t){console.log(t)}))}});Y.setEventListeners(),A.addEventListener("click",(function(){G.updateValidation();var t=W.getUserInfo();Y.setInputValues(t),Y.open()}));var Z=new j(".popup_type_place-addition",{handleFormSubmit:function(t){return n.addNewCard(t).then((function(t){var e={link:t.link,name:t.name,likes:[],owner:t.owner,_id:t._id};et.renderer(e)})).catch((function(t){console.log(t)}))}});Z.setEventListeners(),V.addEventListener("click",(function(){K.deactivateSubmitButton(),Z.open()}));var $=new D(".popup_type_delete-confirmation");$.setEventListeners();var tt=new I(".popup_type_card");tt.setEventListeners();var et=new i({renderer:function(t){var e,r,o=(r=new c("#card-template",e=t,Q,{handleCardClick:function(){return tt.open(e)},handleDeleteButtonClick:function(){$.open(),$.addConfirmationListener({handleDeleteConfirmation:function(){n.deleteCard(e._id).then((function(){r.removeCard(),$.close()})).catch((function(t){console.log(t)}))}})},handleLikeButtonClick:function(){r.isLiked()?n.deleteLike(e._id).then((function(t){r.toggleLikeButton(),r.updateLikeAmount(t.likes)})).catch((function(t){console.log(t)})):r.isLiked()||n.putLike(e._id).then((function(t){r.toggleLikeButton(),r.updateLikeAmount(t.likes)})).catch((function(t){console.log(t)}))}})).createCard();et.addItem(o)}},".card-grid__container")})();