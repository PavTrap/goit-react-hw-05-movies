"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[853],{148:function(e,n,t){t.d(n,{Jh:function(){return v},TP:function(){return f},wd:function(){return s},z1:function(){return o},zv:function(){return p}});var r=t(861),a=t(757),u=t.n(a),c=t(243),i="7118a78180f97ae5603b01b858fdf311";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},853:function(e,n,t){t.r(n),t.d(n,{Movies:function(){return l},default:function(){return d}});var r=t(861),a=t(439),u=t(757),c=t.n(u),i=t(791),s=t(689),o=t(87),f=t(184),p=function(){var e,n=(0,o.lr)(),t=(0,a.Z)(n,2),r=t[0],u=t[1],c=null!==(e=r.get("query"))&&void 0!==e?e:"",s=(0,i.useState)(""),p=(0,a.Z)(s,2)[1];return(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[(0,f.jsx)("input",{placeholder:"input search keywords",minLength:3,onChange:function(e){var n=e.target.value;if(p(n),""===n)return u({});u({query:n})},value:c}),(0,f.jsx)("button",{type:"submit",children:"search"})]})},v=t(148),l=function(){var e,n=(0,i.useState)(""),t=(0,a.Z)(n,2),u=t[0],l=t[1],d=(0,i.useState)([]),h=(0,a.Z)(d,2),g=h[0],x=h[1],m=(0,i.useState)(!1),w=(0,a.Z)(m,2),y=w[0],Z=w[1],k=(0,s.TH)(),b=(0,o.lr)(),_=null!==(e=(0,a.Z)(b,1)[0].get("query"))&&void 0!==e?e:"";return(0,i.useEffect)((function(){_&&l(_);var e=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,Z(!0),e.next=4,(0,v.z1)(n);case 4:t=e.sent,r=t.results,x(r),Z(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n){return e.apply(this,arguments)}}();e(u)}),[u,_]),(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{children:"Movies"}),(0,f.jsx)(p,{}),y?(0,f.jsx)("div",{children:"Loading..."}):(0,f.jsx)("ul",{children:g.map((function(e){return(0,f.jsx)("li",{children:(0,f.jsx)(o.rU,{to:"/movies/".concat(e.id),state:{from:k},children:e.original_title})},e.id)}))})]})},d=l}}]);
//# sourceMappingURL=853.8d0e07a1.chunk.js.map