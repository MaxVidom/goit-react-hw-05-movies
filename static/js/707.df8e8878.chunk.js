"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[707],{787:function(e,n,t){t.d(n,{Hx:function(){return v},Kd:function(){return l},Ny:function(){return d},Y5:function(){return f},v7:function(){return h}});var r=t(861),c=t(757),i=t.n(c),o="https://api.themoviedb.org/3",a="?api_key=5c9ace2476c46656758ceca732bea2c0";function s(e){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n);case 2:return t=e.sent,e.abrupt("return",t.ok?t.json():Promise.reject(new Error("Not found")));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return s("".concat(o,"/trending/movie/day").concat(a))}function d(e){return s("".concat(o,"/search/movie").concat(a,"&page=1&query=").concat(e))}function f(e){return s("".concat(o,"/movie/").concat(e).concat(a))}function l(e){return s("".concat(o,"/movie/").concat(e,"/credits").concat(a))}function v(e){return s("".concat(o,"/movie/").concat(e,"/reviews").concat(a))}},707:function(e,n,t){t.r(n),t.d(n,{default:function(){return u}});var r=t(885),c=t(791),i=t(501),o=t(871),a=t(787),s=t(184);function u(e){e.id;var n,t=(0,c.useState)({}),u=(0,r.Z)(t,2),h=u[0],d=u[1],f=(0,o.UO)().movieId,l=null!==(n=(0,o.TH)().state.from)&&void 0!==n?n:"/",v=(0,c.useRef)(l),p=(0,c.useState)(null),m=(0,r.Z)(p,2),j=m[0],x=m[1];(0,c.useEffect)((function(){a.Y5(f).then((function(e){return d(e)})).catch((function(e){return x(e.message)}))}),[f]);var w=h.poster_path,g=h.original_title,k=h.overview,_=h.genres,b=h.vote_average;return(0,s.jsxs)("div",{children:[j&&(0,s.jsx)("h2",{children:j.message}),(0,s.jsx)(i.rU,{to:l,children:"Back"}),(0,s.jsxs)("div",{children:[w&&(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(w),alt:""}),(0,s.jsx)("h1",{children:g}),(0,s.jsxs)("p",{children:["Average Score: ",b]}),(0,s.jsx)("h2",{children:"Overview"}),(0,s.jsx)("p",{children:k}),(0,s.jsx)("h2",{children:"Genres"}),_&&_.map((function(e){var n=e.id,t=e.name;return(0,s.jsx)("span",{children:t},n)}))]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(i.rU,{to:"cast",state:{from:v.current},children:"Cast"})}),(0,s.jsx)("li",{children:(0,s.jsx)(i.rU,{to:"reviews",state:{from:v.current},children:"Reviews"})})]}),(0,s.jsx)(o.j3,{})]})]})}}}]);
//# sourceMappingURL=707.df8e8878.chunk.js.map