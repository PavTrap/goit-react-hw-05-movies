"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[199],{148:function(e,n,r){r.d(n,{Jh:function(){return v},TP:function(){return f},wd:function(){return o},z1:function(){return s},zv:function(){return p}});var t=r(861),a=r(757),u=r.n(a),c=r(243),i="7118a78180f97ae5603b01b858fdf311";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var e=(0,t.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,t.Z)(u().mark((function e(n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(u().mark((function e(n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(u().mark((function e(n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(u().mark((function e(n){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},230:function(e,n,r){r.r(n),r.d(n,{Reviews:function(){return v}});var t=r(861),a=r(439),u=r(757),c=r.n(u),i=r(791),o=r(689),s=r(148),f=r(184),p=function(e){var n=e.reviews;return(0,f.jsx)("ul",{children:n.length>0?n.map((function(e){var n=e.author,r=e.content,t=e.id;return(0,f.jsxs)("li",{children:[(0,f.jsx)("h3",{children:n}),(0,f.jsx)("p",{children:r})]},t)})):"Sorry, we don't have any review for this movie"})},v=function(){var e=(0,o.UO)().movieId,n=(0,i.useState)({}),r=(0,a.Z)(n,2),u=r[0],v=r[1],h=(0,i.useState)(!1),d=(0,a.Z)(h,2),l=d[0],w=d[1];return(0,i.useEffect)((function(){var n=function(){var e=(0,t.Z)(c().mark((function e(n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,(0,s.Jh)(n);case 4:r=e.sent,v(r.results),w(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("error");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}();n(e)}),[e]),(0,f.jsx)(p,{reviews:u,isLoading:l})}}}]);
//# sourceMappingURL=199.674fb5dc.chunk.js.map