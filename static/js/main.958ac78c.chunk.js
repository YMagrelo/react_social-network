(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},130:function(e,t,n){e.exports=n.p+"static/media/Spinner-1s-203px.42413db8.svg"},157:function(e,t,n){e.exports=n(288)},165:function(e,t,n){},166:function(e,t,n){},168:function(e,t,n){},284:function(e,t,n){},285:function(e,t,n){},286:function(e,t,n){},287:function(e,t,n){},288:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(61),o=n.n(s),u=n(11),i=n(9),c=(n(165),n(27)),l=(n(166),function(){return r.a.createElement("nav",{className:"navigation"},r.a.createElement("ul",{className:"navigation__list"},r.a.createElement("li",{className:"navigation__item"},r.a.createElement(u.b,{className:"navigation__link",to:"/profile"},"Profile")),r.a.createElement("li",{className:"navigation__item"},r.a.createElement(u.b,{className:"navigation__link",to:"/dialogs"},"Messages")),r.a.createElement("li",{className:"navigation__item"},r.a.createElement(u.b,{className:"navigation__link",to:"/users"},"Users")),r.a.createElement("li",{className:"navigation__item"},r.a.createElement(u.b,{className:"navigation__link",to:"/news"},"News")),r.a.createElement("li",{className:"navigation__item"},r.a.createElement(u.b,{className:"navigation__link",to:"/music"},"Music")),r.a.createElement("li",{className:"navigation__item"},r.a.createElement(u.b,{className:"navigation__link",to:"/settings"},"Settings"))))}),m=function(){return r.a.createElement("h1",null,"Some news")},f=function(e){return r.a.createElement("h1",null,"Some Music")},p=function(){return r.a.createElement("h1",null,"Some settings")},d=n(7),g=n(22),h=n(10),E={messages:[{id:1,message:"Hello, how are you?"}],dialogs:[{id:1,name:"Brad"},{id:2,name:"Curt"},{id:3,name:"Bob"},{id:4,name:"Josh"},{id:5,name:"Sharon"},{id:6,name:"Monica"}]},b=(n(168),n(123)),v=n(124),N=function(e){var t=e.id,n=e.name,a="/dialogs/".concat(t);return r.a.createElement("div",{className:"dialogs__dialog"},r.a.createElement(u.b,{to:a,className:"dialogs__link"},n))},S=function(e){var t=e.message;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"dialogs__message"},t))},O=n(67),P=(n(91),n(35)),w=n.n(P),j=function(e){var t=e.input,n=e.meta,a=Object(O.a)(e,["input","meta"]),s=n.error&&n.touched;return r.a.createElement("div",{className:"formControl"},r.a.createElement("textarea",Object.assign({className:w()("textarea",{"is-danger":s})},a,t,{rows:"2"})),s&&r.a.createElement("span",{className:"formControl__is-error"},n.error))},k=function(e){if(!e)return"Field is required"},y=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e)}},_=y(15),T=Object(v.a)({form:"addMessageToDialog"})((function(e){var t=e.handleSubmit;return r.a.createElement("form",{onSubmit:t},r.a.createElement(b.a,{rows:"2",name:"addMessageToDialog",component:j,validate:[k,_]}),r.a.createElement("button",{className:"button is-info dialogs__button",type:"submit"},"Add message"))})),A=function(e){return{isAuth:e.auth.isAuth}},C=Object(d.d)(Object(i.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendNewMessage:function(t){e(function(e){return{type:"dialogs/ADD_MESSAGE",addMessageToDialog:e}}(t))}}})),(function(e){return Object(i.b)(A)((function(t){return t.isAuth?r.a.createElement(e,t):r.a.createElement(c.a,{to:"/login"})}))}))((function(e){var t=e.dialogsPage,n=e.sendNewMessage,a=t.dialogs.map((function(e){return r.a.createElement(N,{name:e.name,id:e.id,key:e.id})})),s=t.messages.map((function(e){return r.a.createElement(S,{message:e.message,key:e.id})}));return r.a.createElement("div",{className:"dialogs"},r.a.createElement("div",{className:"dialogs__list"},a),r.a.createElement("div",{className:"dialogs__messages"},s,r.a.createElement(T,{onSubmit:function(e){n(e.addMessageToDialog)}})))})),x=n(39),I=n(40),U=n(65),D=n(42),L=n(41),F=(n(60),n(8)),Q=n.n(F),G=n(15),H=n(129).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"932d6a5e-9f13-471f-b3bb-9a946f84b9b5"}}),J=function(e){return H.get("profile/".concat(e))},M=function(e){return H.get("profile/status/".concat(e))},R=function(e){return H.put("profile/status",{status:e})},B=function(e){var t=new FormData;return t.append("image",e),H.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},W={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return H.get("users?count=".concat(e,"&page=").concat(t)).then((function(e){return e.data}))},follow:function(e){return H.post("follow/".concat(e))},unfollow:function(e){return H.delete("follow/".concat(e))},getUserProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object"),J(e)}},X=function(){return H.get("auth/me")},V=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return H.post("auth/login",{email:e,password:t,rememberMe:n})},z=function(){return H.delete("auth/login")},Y="users/FOLLOW",Z={users:[],pageSize:100,totalUsersCount:0,currentPage:1,isFetching:!1,followingProgress:[]},K=function(e){return{type:Y,userId:e}},q=function(e){return{type:"users/UNFOLLOW",userId:e}},$=function(e){return{type:"users/TOGGLE_IS_FETCHING",isFetching:e}},ee=function(e,t){return{type:"users/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},te=function(){var e=Object(G.a)(Q.a.mark((function e(t,n,a,r){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(ee(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(r(n)),t(ee(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),ne=n(31),ae=function(e){for(var t=e.totalItemsCount,n=e.pageSize,s=e.onPageChanged,o=e.currentPage,u=Math.ceil(t/n),i=Math.ceil(u/10),c=Object(a.useState)(1),l=Object(ne.a)(c,2),m=l[0],f=l[1],p=10*(m-1)+1,d=10*m,g=[],h=1;h<=u;h+=1)g.push(h);return r.a.createElement("div",{className:"pageNumber__list"},m>1&&r.a.createElement("button",{type:"button",className:"pageNumber__nav-button",onClick:function(){return f(m-1)}},"Prev"),g.filter((function(e){return e>=p&&e<=d})).map((function(e){return r.a.createElement("button",{className:w()("pageNumber__item",{"pageNumber__item--is-active":o===e}),onClick:function(){return s(e)},type:"button"},e)})),i>m&&r.a.createElement("button",{type:"button",className:"pageNumber__nav-button",onClick:function(){return f(m+1)}},"Next"))},re=n(66),se=n.n(re),oe=function(e){var t=e.user,n=e.followingProgress,a=e.followSuccess,s=e.unfollowSuccess;return r.a.createElement("div",null,r.a.createElement("div",{className:"user"},r.a.createElement("div",null,r.a.createElement(u.b,{to:"/profile/".concat(t.id)},r.a.createElement("img",{src:null!==t.photos.small?t.photos.small:se.a,className:"user__avatar",alt:"user-avatar"})),t.followed?r.a.createElement("button",{className:"button is-info user__button",type:"button",disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id)}},"Unfollow"):r.a.createElement("button",{className:"button is-info user__button",type:"button",disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Follow")),r.a.createElement("div",{className:"user__container"},r.a.createElement("div",{className:"user__info"},r.a.createElement("span",{className:"user__info-name"},t.name),r.a.createElement("span",{className:"user__info-location"},"user.location.city, user.location.country")),r.a.createElement("div",{className:"user__info-status"},t.status))))},ue=function(e){var t=e.totalItemsCount,n=e.pageSize,a=e.users,s=e.onPageChanged,o=e.followingProgress,u=e.followSuccess,i=e.unfollowSuccess,c=e.currentPage;return r.a.createElement("div",null,r.a.createElement(ae,{totalItemsCount:t,pageSize:n,onPageChanged:s,currentPage:c}),a.map((function(e){return r.a.createElement(oe,{user:e,followingProgress:o,followSuccess:u,unfollowSuccess:i,key:e.id})})))},ie=(n(284),n(130)),ce=n.n(ie),le=function(){return r.a.createElement("img",{src:ce.a,alt:"spiner",className:"usersFething"})},me=function(e){return e.usersPage.users},fe=function(e){return e.usersPage.pageSize},pe=function(e){return e.usersPage.totalUsersCount},de=function(e){return e.usersPage.currentPage},ge=function(e){return e.usersPage.isFetching},he=function(e){return e.usersPage.followingProgress},Ee=function(e){Object(D.a)(n,e);var t=Object(L.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).onPageChanged=a.onPageChanged.bind(Object(U.a)(a)),a}return Object(I.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.pageSize,this.props.currentPage)}},{key:"onPageChanged",value:function(e){this.props.setCurrentPage(e),this.props.getUsers(this.props.pageSize,e)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(le,null):null,r.a.createElement(ue,{users:this.props.users,pageSize:this.props.pageSize,totalItemsCount:this.props.totalItemsCount,currentPage:this.props.currentPage,setFollowed:this.props.setFollowed,setUnFollowed:this.props.setUnFollowed,onPageChanged:this.onPageChanged,followingProgress:this.props.followingProgress,followSuccess:this.props.followSuccess,unfollowSuccess:this.props.unfollowSuccess}))}}]),n}(r.a.Component),be=Object(i.b)((function(e){return{users:me(e),pageSize:fe(e),totalItemsCount:pe(e),currentPage:de(e),isFetching:ge(e),followingProgress:he(e)}}),(function(e){return{setCurrentPage:function(t){return e(function(e){return{type:"users/SET_CURRENT_PAGE",pageNumber:e}}(t))},getUsers:function(t,n){return e(function(e,t){return function(){var n=Object(G.a)(Q.a.mark((function n(a){var r;return Q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a($(!0)),n.next=3,W.getUsers(e,t);case 3:r=n.sent,a($(!1)),a({type:"users/SET_USERS",users:r.items}),a({type:"users/SET_USERS_TOTAL_COUNT",totalCount:r.totalCount});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(t,n))},followSuccess:function(t){return e(function(e){return function(){var t=Object(G.a)(Q.a.mark((function t(n){var a;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=W.follow.bind(W),te(n,e,a,K);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},unfollowSuccess:function(t){return e(function(e){return function(){var t=Object(G.a)(Q.a.mark((function t(n){var a;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=W.unfollow.bind(W),te(n,e,a,q);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(Ee),ve=(n(120),n(121),function(e){var t=e.status,n=e.updateStatusProfileThunk,s=Object(a.useState)(!1),o=Object(ne.a)(s,2),u=o[0],i=o[1],c=Object(a.useState)(t),l=Object(ne.a)(c,2),m=l[0],f=l[1];Object(a.useEffect)((function(){f(t)}),[t]);return r.a.createElement("div",{className:"profileStatus"},r.a.createElement("b",null,"Status: "),u?r.a.createElement("div",null,r.a.createElement("input",{type:"text",className:"profileStatus__input",value:m,onBlur:function(){i(!1),n(m)},autoFocus:!0,onChange:function(e){var t=e.target.value;f(t)}})):r.a.createElement("span",{className:"profileStatus__value",onClick:function(){i(!0)}},t||"status is not defined"))}),Ne=function(e){var t=e.profile,n=e.status,s=e.updateStatusProfileThunk,o=e.isOwner,u=e.savePhoto,i=Object(a.useState)(!1),c=Object(ne.a)(i,2),l=c[0],m=c[1];if(!t)return r.a.createElement(le,null);return r.a.createElement("div",{className:"userInfo"},r.a.createElement("div",{className:"userInfo__heading"}),r.a.createElement("div",{className:"userInfo__user-info"},r.a.createElement("img",{className:"userInfo__user-avatar",src:null!==t.photos.large?t.photos.large:se.a,alt:"user avatar"}),r.a.createElement("p",null,t.fullName),o&&r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"file is-small"},r.a.createElement("label",{className:"file-label"},r.a.createElement("input",{className:"file-input",type:"file",onChange:function(e){return function(e){e.target.files.length&&u(e.target.files[0])}(e)}}),r.a.createElement("span",{className:"file-cta"},r.a.createElement("span",{className:"file-icon"},r.a.createElement("i",{className:"fas fa-upload"})),r.a.createElement("span",{className:"file-label"},"Choose image\u2026"))))),l?r.a.createElement(Oe,{profile:t}):r.a.createElement(Se,{profile:t,isOwner:o,editMode:l,setEditMode:m}),r.a.createElement(ve,{status:n,updateStatusProfileThunk:s})))},Se=function(e){var t=e.profile,n=e.isOwner,a=e.editMode,s=e.setEditMode;return r.a.createElement("div",null,n&&r.a.createElement("button",{type:"button",onClick:function(){return s(!a)},className:"button is-small"},"Edit"),r.a.createElement("div",null,r.a.createElement("b",null,"Looking for a job: "),t.lookingForAJob?"Yes":"No"),t.lookingForAJob&&r.a.createElement("div",null,r.a.createElement("b",null,"My professionl skills: "),t.lookingForAJobDescription),r.a.createElement("div",null,r.a.createElement("b",null,"About me: "),t.aboutMe),r.a.createElement("div",null,r.a.createElement("b",null,"Contacts: ")," ",Object.keys(t.contacts).map((function(e){return r.a.createElement(Pe,{key:e,contactTitle:e,contactValue:t.contacts[e]})}))))},Oe=function(e){var t=e.profile;return r.a.createElement("div",null,t.fullName)},Pe=function(e){var t=e.contactTitle,n=e.contactValue;return r.a.createElement("div",{className:"userInfo__contacts"},t,":"," ",n)},we="profile/ADD_POST",je={posts:[{id:3,post:"empty line",likes:1},{id:4,post:"My girl, my girl don't lie to me, tell me where did you sleep last night, in the pines, in the pines where the sun don't ever shine, I would shiver the whole night through",likes:1}],profile:null,status:""},ke=function(e){return{type:"profile/SET_PROFILE_STATUS",status:e}},ye=(n(285),n(286),function(e){var t=e.message,n=e.likesCount;return r.a.createElement("div",{className:"post"},r.a.createElement("img",{src:"https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/full/public/2019/03/13/brad-pitt.jpg",className:"post__avatar",alt:"user icon"}),t,r.a.createElement("div",{className:"post__like"},"Like",n))}),_e=r.a.memo((function(e){var t=e.posts,n=e.sendPost;return r.a.createElement("div",{className:"postList"},r.a.createElement("h3",null,"My Posts"),r.a.createElement(Ae,{onSubmit:function(e){n(e.addPost)}}),Object(g.a)(t).reverse().map((function(e){return r.a.createElement(ye,{message:e.post,likesCount:e.likes,key:e.id})})))})),Te=y(10),Ae=Object(v.a)({form:"addPost"})((function(e){var t=e.handleSubmit;return r.a.createElement("form",{onSubmit:t},r.a.createElement(b.a,{name:"addPost",component:j,validate:[k,Te],placeholder:"Post message"}),r.a.createElement("button",{className:"postList__button button is-info",type:"submit"},"Add post"))})),Ce=Object(i.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{sendPost:function(t){return e(function(e){return{type:we,addPost:e}}(t))}}}))(_e),xe=function(e){var t=e.profile,n=e.isAuth,a=e.status,s=e.updateStatusProfileThunk,o=e.isOwner,u=e.savePhoto;return r.a.createElement("main",{className:"content"},r.a.createElement(Ne,{profile:t,isAuth:n,status:a,updateStatusProfileThunk:s,isOwner:o,savePhoto:u}),r.a.createElement(Ce,null))},Ie=function(e){Object(D.a)(n,e);var t=Object(L.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(I.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId,t=this.props,n=t.getUserProfileThunk,a=t.getStatusProfileThunk;e||(e=6640),n(e),a(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){var e=this.props,t=e.profile,n=e.status,a=e.updateStatusProfileThunk;return r.a.createElement(xe,{isOwner:!this.props.match.params.userId,profile:t,status:n,updateStatusProfileThunk:a,savePhoto:this.props.savePhoto})}}]),n}(r.a.Component),Ue=Object(d.d)(Object(i.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status}}),(function(e){return{getUserProfileThunk:function(t){return e(function(e){return function(){var t=Object(G.a)(Q.a.mark((function t(n){var a;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W.getUserProfile(e);case 2:a=t.sent,n({type:"profile/SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},getStatusProfileThunk:function(t){return e(function(e){return function(){var t=Object(G.a)(Q.a.mark((function t(n){var a;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(e);case 2:a=t.sent,n(ke(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},updateStatusProfileThunk:function(t){return e(function(e){return function(){var t=Object(G.a)(Q.a.mark((function t(n){return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R(e);case 2:0===t.sent.data.resultCode&&n(ke(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},savePhoto:function(t){return e(function(e){return function(){var t=Object(G.a)(Q.a.mark((function t(n){var a;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"profile/SET_PHOTO_SUCCESS",photos:a.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}})),c.f)(Ie),De=(n(122),function(e){var t=e.isAuth,n=e.handleLogout;return r.a.createElement("header",{className:"header"},r.a.createElement("img",{className:"header__logo",alt:"header logo",src:"https://cdn.dribbble.com/users/23569/screenshots/10858492/media/b9c6767518c11b567eac2b3a057ca51c.jpg"}),r.a.createElement("div",{className:"header__auth auth"},t?r.a.createElement("button",{type:"button",className:"header__button button is-small",onClick:n},"Log out"):r.a.createElement(r.a.Fragment,null,r.a.createElement(u.b,{to:"/login",className:"auth__login"},"Login"))))}),Le=n(33),Fe={userId:null,email:null,login:null,isAuth:!1},Qe=function(e,t,n,a){return{type:"auth/SET_USER_DATA",payload:{userId:e,login:n,email:t,isAuth:a}}},Ge=function(){return function(){var e=Object(G.a)(Q.a.mark((function e(t){var n,a,r,s,o;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,s=a.login,o=a.email,t(Qe(r,s,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},He=function(){return function(){var e=Object(G.a)(Q.a.mark((function e(t){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:0===e.sent.data.resultCode&&t(Qe(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Je=function(e){Object(D.a)(n,e);var t=Object(L.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(I.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.setAuthUserDataThunk)()}},{key:"render",value:function(){return r.a.createElement(De,this.props)}}]),n}(r.a.Component),Me=Object(i.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),(function(e){return{setAuthUserDataThunk:function(){return e(Ge())},handleLogout:function(){return e(He())}}}))(Je),Re=(n(287),function(e){var t=e.input,n=e.meta,a=Object(O.a)(e,["input","meta"]),s=n.error&&n.touched;return r.a.createElement("div",{className:"formControl"},r.a.createElement("textarea",Object.assign({className:w()("input",{"is-danger":s})},a,t,{rows:"2"})),s&&r.a.createElement("span",{className:"formControl__is-error"},n.error))}),Be=y(30),We=Object(v.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.isAuth,a=e.error;return r.a.createElement("form",{className:"login__form",onSubmit:t},r.a.createElement("div",{className:"login__login-input"},r.a.createElement(b.a,{placeholder:"email",name:"email",component:Re,validate:[k,Be]})),r.a.createElement("div",{className:"login__login-password"},r.a.createElement(b.a,{placeholder:"Password",name:"password",type:"password",component:Re,validate:[k,Be]})),r.a.createElement("div",{className:"checkbox"},r.a.createElement(b.a,{type:"checkbox",component:"input",name:"rememberMe",validate:[k]})),a&&r.a.createElement("div",{className:"login__generalError"},a),r.a.createElement("div",{className:"login__login-button"},n?r.a.createElement("button",{type:"submit",className:"button is-info"},"Logout"):r.a.createElement("button",{type:"submit",className:"button is-info"},"Login")))})),Xe=Object(i.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginThunkCreator:function(e,t,n){return function(){var a=Object(G.a)(Q.a.mark((function a(r){var s,o,u;return Q.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,V(e,t,n);case 2:0===(s=a.sent).data.resultCode?r(Ge()):(o=s.data.messages,u=Object(Le.a)("login",{_error:o}),r(u));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},logoutThunkCreator:He})((function(e){var t=e.isAuth;return t?r.a.createElement(c.a,{to:"/profile"}):r.a.createElement("div",{className:"login"},r.a.createElement("h1",{className:"login__title"},"Login"),r.a.createElement(We,{onSubmit:function(t){e.loginThunkCreator(t.email,t.password,t.rememberMe)},isAuth:t}))})),Ve=function(){return r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(Me,null),r.a.createElement(l,null),r.a.createElement("div",{className:"app-wrapper__content"},r.a.createElement(c.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(Ue,null)}}),r.a.createElement(c.b,{path:"/dialogs",render:function(){return r.a.createElement(C,null)}}),r.a.createElement(c.b,{path:"/users",render:function(){return r.a.createElement(be,null)}}),r.a.createElement(c.b,{path:"/login",render:function(){return r.a.createElement(Xe,null)}}),r.a.createElement(c.b,{path:"/news",render:function(){return r.a.createElement(m,null)}}),r.a.createElement(c.b,{path:"/music",render:function(){return r.a.createElement(f,null)}}),r.a.createElement(c.b,{path:"/settings",render:function(){return r.a.createElement(p,null)}})))},ze=n(131),Ye=n(125),Ze={},Ke=Object(d.c)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case we:var n={id:6,post:t.addPost,likes:0};return Object(h.a)({},e,{newPostText:"",posts:[].concat(Object(g.a)(e.posts),[n])});case"profile/SET_USER_PROFILE":return Object(h.a)({},e,{profile:t.profile});case"profile/SET_PROFILE_STATUS":return Object(h.a)({},e,{status:t.status});case"profile/SET_PHOTO_SUCCESS":return Object(h.a)({},e,{profile:Object(h.a)({},e.profile,{photos:t.photos})});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/ADD_MESSAGE":var n=t.addMessageToDialog;return Object(h.a)({},e,{messages:[].concat(Object(g.a)(e.messages),[{id:6,message:n}])});default:return e}},sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze;arguments.length>1&&arguments[1];return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Y:return Object(h.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(h.a)({},e,{followed:!0}):e}))});case"users/UNFOLLOW":return Object(h.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(h.a)({},e,{followed:!1}):e}))});case"users/SET_USERS":return Object(h.a)({},e,{users:Object(g.a)(t.users)});case"users/SET_CURRENT_PAGE":return Object(h.a)({},e,{currentPage:t.pageNumber});case"users/SET_USERS_TOTAL_COUNT":return Object(h.a)({},e,{totalUsersCount:t.totalCount});case"users/TOGGLE_IS_FETCHING":return Object(h.a)({},e,{isFetching:t.isFetching});case"users/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(h.a)({},e,{followingProgress:t.isFetching?[].concat(Object(g.a)(e.followingProgress),[t.userId]):e.followingProgress.filter((function(e){return e!==t.userId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(h.a)({},e,{},t.payload);default:return e}},form:Ye.a}),qe=Object(d.e)(Ke,Object(d.a)(ze.a));window.store=qe,o.a.render(r.a.createElement(u.a,null,r.a.createElement(i.a,{store:qe},r.a.createElement(Ve,null))),document.getElementById("root"))},60:function(e,t,n){},66:function(e,t){e.exports="data:image/png;base64,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"},91:function(e,t,n){}},[[157,1,2]]]);
//# sourceMappingURL=main.958ac78c.chunk.js.map